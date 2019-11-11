from rest_framework import generics
from .serializer import CompanyContactSerializer
from .models import CompanyContact


# create company contacts
class CreateContact(generics.CreateAPIView):
    queryset = CompanyContact.objects.all()
    serializer_class = CompanyContactSerializer


# list company contacts
class ListContacts(generics.ListAPIView):
    queryset = CompanyContact.objects.all()
    serializer_class = CompanyContactSerializer


# update company contacts
class UpdateContacts(generics.UpdateAPIView):
    queryset = CompanyContact.objects.all()
    serializer_class = CompanyContactSerializer
 

# delete company contacts
class DeleteContacts(generics.DestroyAPIView):
    queryset = CompanyContact.objects.all()
    serializer_class = CompanyContactSerializer


class DetailContact(generics.RetrieveAPIView):
    serializer_class = CompanyContactSerializer
    
    def get_queryset(self, *args, **kwargs):
        contactid = self.kwargs.get('pk')
        return CompanyContact.objects.filter(pk=contactid)