from django.http import HttpRequest
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializer import CartSerializer
from backend.views import test_token  # Assuming you have a utility function for token validation

@api_view(['POST'])
def CreateCart(request):
    # Ensure we have a valid HttpRequest object
    if not isinstance(request, HttpRequest):
        return Response({'message': 'Invalid request'}, status=status.HTTP_400_BAD_REQUEST)

    # Read the Authorization header
    authorization_header = request.headers.get('Authorization', '')

    # Check if authorization_header is not empty and starts with 'Bearer'
    if not authorization_header.startswith('Token '):
        return Response({'message': 'Invalid Authorization header format'}, status=status.HTTP_401_UNAUTHORIZED)

    # Extract the token from the header
    token = authorization_header.split(' ')[1]

    # Validate the token using your utility function
    isAuthenticated = test_token(request)

    serializer = CartSerializer(data=request.data)

    if serializer.is_valid():
        if isAuthenticated:
            serializer.save()
            return Response({'success': 'CartCreated'}, status=status.HTTP_201_CREATED)

    return Response({'message': 'Cart Has Not been Created'}, status=status.HTTP_400_BAD_REQUEST)
