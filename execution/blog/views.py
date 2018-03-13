from django.shortcuts import render

def index(request):
    return render(request,'blog/index.html')

def about(request):
    return render(request,'blog/about.html')

def listpic(request):
    return render(request,'blog/listpic.html')

def newslistpic(request):
    return render(request,'blog/newslistpic.html')