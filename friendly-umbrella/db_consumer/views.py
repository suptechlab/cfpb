import sys
import traceback

from django.db import DatabaseError
from django.shortcuts import render

from db_consumer.models import DBPage


def index_view(request):
    try:
        first_page = DBPage.objects.first()
    except DatabaseError:
        # Include the full traceback for helpful debugging of database issues
        error_type, error, tb = sys.exc_info()
        return render(
            request,
            "db_consumer/error.html",
            context={
                "error": error,
                "type": error_type,
                "traceback": traceback.format_exc(),
            },
        )

    return render(request, "db_consumer/index.html", {"page": first_page})
