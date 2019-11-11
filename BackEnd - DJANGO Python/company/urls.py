from django.urls import path
from .import views

app_name = "company"

urlpatterns = [
    path('contacts/create', views.CreateContact.as_view(), name="create_contacts"),
    path('contacts/list', views.ListContacts.as_view(), name="list_contacts"),
    path('contacts/<int:pk>', views.DetailContact.as_view(), name="get_contact"),
    path('contacts/delete/<int:pk>', views.DeleteContacts.as_view(), name="delete_contacts"),
    path('contacts/update/<int:pk>', views.UpdateContacts.as_view(), name="change_contacts"),
]
