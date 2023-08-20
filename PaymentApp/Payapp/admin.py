from django.contrib import admin
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

# Register your models here.
class CustomUserAdmin(BaseUserAdmin):
    list_display=['first_name','username','last_login']
    
admin.site.unregister(User)
admin.site.register(User,CustomUserAdmin)