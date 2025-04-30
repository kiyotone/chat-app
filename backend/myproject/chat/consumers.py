import json
from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync
from .models import ChatGroup, Message
from django.shortcuts import get_object_or_404

class ChatConsumer(WebsocketConsumer):

    def connect(self):
        self.user = self.scope['user']
        print(f"User connected: {self.user.username}")
        self.chatroom_name = self.scope['url_route']['kwargs']['room_name']
        self.chatroom = get_object_or_404(ChatGroup, name=self.chatroom_name)
        
        
        async_to_sync(self.channel_layer.group_add)(
            self.chatroom_name,
            self.channel_name
        )
        
        self.accept()
         
    def disconnect(self, close_code):
        async_to_sync(self.channel_layer.group_discard)(
            self.chatroom_name,
            self.channel_name
        )
        self.close()
        
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