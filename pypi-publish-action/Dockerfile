# FROM debian:9.5-slim
FROM python:3

LABEL "com.github.actions.name"="PyPI Publish"
LABEL "com.github.actions.description"="GitHub action to publish Python packages to PyPI"
LABEL "com.github.actions.icon"="package"
LABEL "com.github.actions.color"="blue"

LABEL "repository"="http://github.com/cfpb/pypi-publish-action"
LABEL "homepage"="http://github.com/cfpb/pypi-publish-action"
LABEL "maintainer"="CFPB <tech@cfpb.gov>"

RUN pip install --upgrade setuptools wheel twine

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
