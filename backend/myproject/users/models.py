from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'
        

    def save(self, *args, **kwargs):
        # Custom save logic can be added here
        super().save(*args, **kwargs)
        
    def delete(self, *args, **kwargs):
        # Custom delete logic can be added here
        super().delete(*args, **kwargs)
