from django.contrib import admin
from django.urls import path
from Payapp.views import *

urlpatterns = [
    path('',home,name="home"),
    path('login/',loginView,name="login"),
    path('signup/',signupView,name="signup"),
    path('logout/',logoutView, name="logout"),
    path('admin/', admin.site.urls),
]