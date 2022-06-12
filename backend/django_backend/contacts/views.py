from .models import Contact
from .serializers import ContactSerializer
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from rest_framework import status
from rest_framework import viewsets 
from django.shortcuts import get_object_or_404

class ContactViewSet(viewsets.ViewSet):

    permission_classes = (IsAuthenticated,)

    def list(self, request):
        contacts = Contact.objects.all().order_by('full_name')
        serializer = ContactSerializer(contacts, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(owner=self.request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        queryset = Contact.objects.all()
        contact = get_object_or_404(queryset, pk=pk)
        serializer = ContactSerializer(contact)
        return Response(serializer.data)

    def update(self, request, pk=None):
        contact = Contact.objects.get(pk=pk)
        if request.user != contact.owner:
            return Response({'message': "No Permission."},
            status=status.HTTP_403_FORBIDDEN)
        serializer = ContactSerializer(contact, data=request.data)
        if serializer.is_valid():
            serializer.save(owner=self.request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        contact = Contact.objects.get(pk=pk)
        if request.user != contact.owner:
            return Response({'message': "No Permission."},
            status=status.HTTP_403_FORBIDDEN)
        contact.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class UserContactsView (generics.ListAPIView):
    serializer_class = ContactSerializer
    permission_classes = [IsAuthenticated,]
    queryset = Contact.objects.all().order_by('full_name')

    def get_queryset(self):
        return super().get_queryset().filter(owner=self.kwargs.get('user_id'))