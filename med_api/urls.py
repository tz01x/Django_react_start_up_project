from django.urls import path
from .views import  request_med_Serializers_list_api,request_med_Serializers_create_api
app_name='med_api'
urlpatterns = [
    path('list/',request_med_Serializers_list_api.as_view(),name='request_med_Serializers_list_api'),
    path('create/',request_med_Serializers_create_api.as_view(),name='request_med_Serializers_create_api')

]
