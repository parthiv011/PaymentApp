from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,'home.html')

def loginView(request):
    return render(request,'auth/login.html')

def signupView(request):
    return render(request,'auth/signup.html')