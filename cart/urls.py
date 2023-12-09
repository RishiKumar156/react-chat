from django.urls import re_path
from . import views

urlpatterns = [
    re_path('createCart', views.CreateCart)
]
