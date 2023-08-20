from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib.auth import login,logout,authenticate

# Create your views here.
def home(request):
    return render(request,'home.html')

def signupView(request):
    if request.method=='POST':
        fname=request.POST.get('first_name')
        lname=request.POST.get('last_name')
        username=request.POST.get('username')
        password=request.POST.get('password')
        cpassword=request.POST.get('cpassword')
        
        uname=User.objects.filter(username=username)
        if uname.exists():
            message="Username already exists!"
            return render(request,'auth/signup.html',{'message':message})
        
        if(password!=cpassword):
            message="Passwords do not match!"
            return render(request,'auth/signup.html',{'message':message})
        
        user=User.objects.create(first_name=fname,
                                 last_name=lname,
                                 username=username)
        user.set_password(password)
        user.save()
        return render(request,'home.html')
    return render(request,'auth/signup.html')

def loginView(request):
    if request.method=="POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        if not User.objects.filter(username=username).exists():
            message="Inavalid Username !"
            return render(request,'auth/login.html',{'message':message})
        
        user = authenticate(username=username,password=password)
        if user is None:
            message="Invalid Password"
            return redirect(request,'auth/login.html',{'message':message})
        else:
            login(request,user)
            return redirect('home')
    return render(request,'auth/login.html')

def logoutView(request):
    logout(request)
    return redirect ("/")