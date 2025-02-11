#!/usr/bin/env bash

SCRIPT=$(readlink -f "$0")
SCRIPTPATH=$(dirname "$SCRIPT")

if [ "$SCRIPTPATH" = "/tmp" ] ; then
  SCRIPTPATH=/vagrant
fi

# Install Dependencies
wget --quiet http://download.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm
sudo rpm -ivh epel-release-6-8.noarch.rpm
sudo yum -y install protobuf-c-devel
sudo yum -y groupinstall "Development tools"

# Configure directory layout
mkdir -p $HOME/rpmbuild/{BUILD,RPMS,SOURCES,SRPMS}
ln -sf $SCRIPTPATH/SPECS $HOME/rpmbuild/SPECS
echo '%_topdir '$HOME'/rpmbuild' > $HOME/.rpmmacros

# Download source code
cd $HOME/rpmbuild/SOURCES
wget --quiet https://github.com/citusdata/cstore_fdw/archive/v1.5.1.tar.gz
