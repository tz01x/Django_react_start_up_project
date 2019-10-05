from django.shortcuts import render
#test
# Create your views here.
def index(request):
    template_name='index.html'
    return render(request,template_name)
