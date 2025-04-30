from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class ChatGroup(models.Model):
    name = models.CharField(max_length=255)
    members = models.ManyToManyField(User, related_name='chat_groups')
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name

class Message(models.Model):
    group = models.ForeignKey(ChatGroup, on_delete=models.CASCADE, related_name='messages')
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='messages')
    content = models.TextField()
    timestamp = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.sender.username}: {self.content}"
    
    class Meta:
        ordering = ['timestamp'] 