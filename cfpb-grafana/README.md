# CFPB Grafana
This repository holds the JSON for the Grafana dashboards created by CFPB

## Dependencies

* Kubernetes 1.14+ (Docker Desktop k8s for local development)
* Helm 3+ (`brew install helm` for MacOS)

## Configuration

## Usage
### bootstrap.sh
`bootstrap.sh` will automatically download the chart, extract it, and create required symbolic links for install.

### install.sh
`install.sh` will automatically bootstrap (if needed), as well as install Grafana via Helm.

You may override the arguments passed to Helm via passing them to `install.sh`

Default port for local install is `9999`.

## Known issues


## Getting help

* [Grafana Helm Chart](https://github.com/grafana/helm-charts/tree/main/charts/grafana)

If you have questions, concerns, bug reports, etc, please file an issue in this repository's Issue Tracker.

## Getting involved
### TODO
* Separate out Grafana Deployment from Dashboards deployment ([more context](https://github.com/prometheus-community/helm-charts/issues/336#issuecomment-725955259))
* Build GH Actions

[Contributing Guidelines](CONTRIBUTING.md)

----

## Open source licensing info
1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)

----
