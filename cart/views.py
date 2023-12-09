from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializer import CartSerializer
# Create your views here.


@api_view(['POST'])
def CreateCart(request):
    serializer = CartSerializer(request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'success': 'CartCreated'}, status=status.HTTP_201_CREATED)
    return Response({'message' : 'Cart Has Not been Created'}, status=status.HTTP_400_BAD_REQUEST)