#!/bin/bash

INSTALL_ARGS="grafana ./grafana --create-namespace --namespace grafana -f overrides/base.yaml -f overrides/local.yaml"

if [ $# -eq 0 ]; then
  echo "Using default Helm Install Options..."
else
  INSTALL_ARGS="$@"
fi

if [ ! -d "$PWD/grafana" ]; then
  echo "Bootstrapping Grafana Helm Chart..."
  ./bootstrap.sh
fi

echo "Installing Grafana Helm Chart..."
echo $INSTALL_ARGS
bash -c "helm upgrade --install $INSTALL_ARGS"
