# decorators.py
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from functools import wraps

def authenticate_and_authorize(view_func):
    @wraps(view_func)
    @authentication_classes([SessionAuthentication, TokenAuthentication])
    @permission_classes([IsAuthenticated])
    def wrapper(request, *args, **kwargs):
        return view_func(request, *args, **kwargs)

    return wrapper
