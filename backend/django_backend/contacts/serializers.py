from rest_framework import serializers
from .models import Contact

class ContactSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Contact
        fields = ['id', 'full_name', 'owner', 'phone', 'email', 'info']