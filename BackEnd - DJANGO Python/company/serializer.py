from rest_framework import serializers
from .models import CompanyContact


class CompanyContactSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = CompanyContact
        fields = ['pk', 'name', 'description', 'telephoneNo', 'email']

