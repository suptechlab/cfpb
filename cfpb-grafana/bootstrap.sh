#!/bin/bash

CHART_VERSION=6.16.14

echo "Adding Grafana Helm Chart Repo (if needed)..."
helm repo add grafana https://grafana.github.io/helm-charts
echo "Updating Helm Repos..."
helm repo update
echo "Pulling Grafana Helm Chart v$CHART_VERSION..."
rm -Rf grafana/
helm pull grafana/grafana --version "$CHART_VERSION" --untar
echo "Creating Symbolic Links..."
rm -Rf $PWD/grafana/dashboards
ln -s $PWD/dashboards $PWD/grafana/dashboards
