from django.db import models

class Order(models.Model):
    sender_name = models.CharField(max_length=100)
    sender_phone = models.CharField(max_length=15)
    pickup_address = models.TextField()
    receiver_name = models.CharField(max_length=100)
    receiver_phone = models.CharField(max_length=15)
    dropoff_address = models.TextField()
    status = models.CharField(max_length=20, choices=[
        ('pending', 'Pending'),
        ('picked_up', 'Picked Up'),
        ('delivered', 'Delivered')
    ], default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
