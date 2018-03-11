from django.shortcuts import render

# Create your views here.
def execu(request):
    return render (request,'execution/execution.html')