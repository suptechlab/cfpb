from django.contrib import admin

from s3_uploader.models import FileUpload


@admin.register(FileUpload)
class FileUploadAdmin(admin.ModelAdmin):
    pass
