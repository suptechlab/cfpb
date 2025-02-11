from django.contrib import admin

from db_consumer.models import DBPage


@admin.register(DBPage)
class DBPageAdmin(admin.ModelAdmin):
    pass
