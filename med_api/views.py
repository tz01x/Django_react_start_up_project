from django.shortcuts import render
from .serializers import (MEDs_Details_Serializers,
request_med_Serializers,)
from .models import request_med

from rest_framework import generics
# Create your views here.
class request_med_Serializers_list_api(generics.ListAPIView):
    permission_classes=[]#?
    authentication_classes=[]#?
    serializer_class = request_med_Serializers
    def get_queryset(self):
            qs=request_med.objects.all()
            # query=self.request.GET.get('q')
            # if query is not None:
            #     qs=qs.filter(name__icontains=query)
            return qs
class request_med_Serializers_create_api(generics.CreateAPIView):
    permission_classes=[]#?
    authentication_classes=[]#?
    serializer_class = request_med_Serializers
    def get_queryset(self):
            qs=request_med.objects.all()
            # query=self.request.GET.get('q')
            # if query is not None:
            #     qs=qs.filter(name__icontains=query)
            return qs
