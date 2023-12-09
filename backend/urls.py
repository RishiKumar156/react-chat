from django.contrib import admin
from django.urls import re_path, include
from . import views
urlpatterns = [
    re_path('Login', views.Login),
    re_path('SignUp', views.SignUp),
    re_path('test', views.test_token),
    re_path('cart', include('cart.urls'))
]
