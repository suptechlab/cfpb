from django.conf.urls import url
from django.views.generic import TemplateView

urlpatterns = [
    url(
        r'^$',
        TemplateView.as_view(template_name='{{cookiecutter.package_name}}/base.html'),
        name='{{cookiecutter.package_name}}_base'
    ),
]
