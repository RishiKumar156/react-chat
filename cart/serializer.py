from rest_framework import serializers
from .models import CartItem

class CartSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = CartItem
        fields = ['userId', 'img', 'description', 'qty', 'price']