# Django MySQL SSL

**Description**:  If your Django version is less than 1.8, the `dbshell` command will not work with you have MySQL with SSL enabled. This module backports the functionality in Django 1.8 to previous versions.

## Dependencies

1. Django with version < 1.8
1. MySQL database with SSL enabled

## Installation

1. Install the application and its dependencies

    ```
    pip install django-mysql-ssl
    ```

1. Make sure you have configured your mysql database in the django settings with the appropriate ssl ca.  You may also need 'cert' and 'key', but for most purposes 'ca' should work fine.  This functionality is built into django and has nothing to do with this plugin.

    ```python
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            ...
            'OPTIONS':  {'ssl': {'ca': '<PATH TO CA CERT>'}}
        }
    }
    ```

1. Add 'mysql_ssl' to your INSTALLED_APPS:

    ```python
    INSTALLED_APPS += ('mysql_ssl',)
    ```

## Usage

1. Connect to the db shell using the `dbshell_ssl` command: 

    ```shell
    ./manage.py dbshell_ssl
    ```

## Known issues

None

## Getting help

If you have questions, concerns, bug reports, etc, please file an issue in this repository's Issue Tracker.

## Getting involved

Please feel free to fork this repo and submit Pull Requests with any enhancements.


----

## Open source licensing info
1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)


----

## Credits and references

1. Django ticket explaining the broken dbshell command: https://code.djangoproject.com/ticket/22646
1. Django PR implementing the functionality in Django 1.8: https://github.com/django/django/commit/01801edd3760f97a4ebc4d43ca5bbdbbdfebbb0a

