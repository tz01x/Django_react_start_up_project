from django.db import models

# Create your models here.
class request_med(models.Model):
    user=models.CharField(max_length=255)
    phone=models.CharField(max_length=255)
    address=models.CharField(max_length=255)
    med=models.ManyToManyField('MEDs_Details')
    def  __str__(self):
        return f'{user}'

class MEDs_Details(models.Model):
    med_name=models.CharField(max_length=255)
    quantity=models.PositiveIntegerField()
# {
#     "user": "name",
#     "phone": "phone",
#     "address": "address",
#     "med": [{"med_name":"rand","quantity":"8"}]
# }
