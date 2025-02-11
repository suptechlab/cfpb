from django.urls import path

from db_consumer.views import index_view


urlpatterns = [path("", index_view)]
