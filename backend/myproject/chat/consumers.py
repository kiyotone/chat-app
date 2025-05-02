import json
from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync
from .models import ChatGroup, Message
from django.shortcuts import get_object_or_404

from channels.exceptions import DenyConnection
from .utils import connected_users
# Dictionary to keep track of connected users in each chatroom


class ChatConsumer(WebsocketConsumer):

    def connect(self):
        self.user = self.scope['user']
        self.chatroom_name = self.scope['url_route']['kwargs']['room_name']
        self.chatroom = get_object_or_404(ChatGroup, name=self.chatroom_name)
        
        # Display Connected Users
        print(f"Connected users in {self.chatroom_name}: {connected_users.get(self.chatroom_name, set())}")

        # Initialize room in tracker if it doesn't exist
        if self.chatroom_name not in connected_users:
            connected_users[self.chatroom_name] = set()

        # Check if user is already connected
        if self.user.username in connected_users[self.chatroom_name]:
            print(f"User {self.user.username} already connected to {self.chatroom_name}")
            raise DenyConnection("User already connected.")

        # Mark user as connected
        connected_users[self.chatroom_name].add(self.user.username)
        print(f"User connected: {self.user.username}")

        async_to_sync(self.channel_layer.group_add)(
            self.chatroom_name,
            self.channel_name
        )

        self.accept()
         
    def disconnect(self, close_code):
        if self.chatroom_name in connected_users:
            connected_users[self.chatroom_name].discard(self.user.username)
            if not connected_users[self.chatroom_name]:
                del connected_users[self.chatroom_name]  # optional: clean empty sets

        async_to_sync(self.channel_layer.group_discard)(
            self.chatroom_name,
            self.channel_name
        )

        
    def receive(self, text_data):
        data = json.loads(text_data)
        message = data['message']
        
        # Save the message to the database
        new_message = Message.objects.create(
            group=self.chatroom,
            sender=self.user,
            content=message
        )
        
        # Send the message to the chatroom group
        async_to_sync(self.channel_layer.group_send)(
            self.chatroom_name,
            {
                'type': 'chat_message',
                'message': message,
                'sender': self.user.username,
                'timestamp': str(new_message.timestamp)
            }
        )
        
    def chat_message(self, event):
        message = event['message']
        sender = event['sender']
        timestamp = event['timestamp']
        
        # Send the message to WebSocket
        self.send(text_data=json.dumps({
            'message': message,
            'sender': sender,
            'timestamp': timestamp
        }))