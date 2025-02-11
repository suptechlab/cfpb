from setuptools import find_packages, setup

try:
    import pypandoc
    long_description = pypandoc.convert('README.md', 'rst')
except (IOError, ImportError):
    long_description = open('README.md', 'r').read()


install_requires = [
    'Django>=1.8,<1.12',
    'wagtail>=1.8,<1.11',
]


testing_extras = [
    'mock>=2.0.0',
    'coverage>=3.7.0',
]


setup(
    name='{{cookiecutter.package_name}}',
    url='https://github.com/cfpb/{{cookiecutter.package_name}}',
    author='CFPB',
    author_email='tech@cfpb.gov',
    description='Skeletal satellite app for consumerfinance.gov',
    long_description=long_description,
    license='CC0',
    version_format='{tag}.dev{commitcount}+{gitsha}',
    include_package_data=True,
    packages=find_packages(),
    install_requires=install_requires,
    extras_require={
        'testing': testing_extras,
    },
    classifiers=[
        'Framework :: Django',
        'Framework :: Django :: 1.10',
        'Framework :: Django :: 1.11',
        'Framework :: Django :: 1.8',
        'Framework :: Django :: 1.9',
        'License :: CC0 1.0 Universal (CC0 1.0) Public Domain Dedication',
        'License :: Public Domain',
        'Programming Language :: Python',
        'Programming Language :: Python :: 2',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.6',
    ],
    setup_requires=['cfgov-setup==1.2', 'setuptools-git-version==1.0.3']
)
