from django.http import HttpRequest
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializer import CartSerializer

@api_view(['POST'])
def CreateCart(request):
    token = request.headers.get('Authorization')
    response = Authorize(token)
    print(response)
    serializer = CartSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'success': 'CartCreated'}, status=status.HTTP_201_CREATED)

    return Response({'message': 'Cart Has Not been Created'}, status=status.HTTP_400_BAD_REQUEST)


from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication , TokenAuthentication
from rest_framework.permissions import IsAuthenticated
@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def Authorize(request):
    return Response("Passed for {}".format(request.user.email))