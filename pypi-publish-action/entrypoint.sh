#!/bin/bash

python setup.py sdist bdist_wheel --universal

if [ -z ${LIVE_PYPI+x} ]; then
  twine upload --repository-url https://test.pypi.org/legacy/ dist/*
else
  twine upload dist/*
fi
