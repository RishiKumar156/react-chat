from django.db import models

class CartItem(models.Model):
    img = models.TextField()
    price = models.TextField()
    description = models.TextField()
    qty = models.PositiveIntegerField()
    userId = models.TextField()
    
    def __str__(self):
        return f"{self.description} - {self.price} units"
    
    class Meta:
        indexes = [
            models.Index(fields=['userId']),
            models.Index(fields=['img'])
        ]