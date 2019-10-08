from rest_framework import serializers
from .models import (request_med,
    MEDs_Details,)

class MEDs_Details_Serializers(serializers.ModelSerializer):
    class Meta:
        model=MEDs_Details
        fields=['med_name','quantity']
import json
class request_med_Serializers(serializers.ModelSerializer):
    med=MEDs_Details_Serializers(many=True)
    class Meta:
        model=request_med
        fields=['user',
    'phone',
    'address',
    'med',]
    def create(self, validated_data):
        medicine = validated_data.pop('med')
        instance = request_med.objects.create(**validated_data)

        # med=dict(med)
        ms = list(medicine)
        for med in (ms):
            # print(med)
            a=dict(med)
            print(a["med_name"])
            # print(med[med_name])
            # print(med.quantity)
            obj=MEDs_Details.objects.create(med_name=a['med_name'],quantity=int(a['quantity']))
            if obj:
                instance.med.add(obj)



        # print((m))
        return instance
