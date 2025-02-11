# Installation instructions

## Installation

Build RPM using Vagrant

1. The repo is cloned into a local sandbox
2. Run "vagrant up" to build the VM.
3. Run "vagrant ssh" to connect to VM.
4. Run the below command to build the hypopg rpm package.

    rpmbuild -ba SPECS/hypopg.spec --define 'pg_dir /usr/pgsql-9.5' --define '_suffix 95'

Build RPM on server

1. Once repo is cloned, run "sh ./bootstrap.sh"
2. cd to ~/rpmbuild 
3. Run rpmbuild -ba /SPECS/hypopg.spec 'pg_dir /usr/pgsql-9.5' --define '_suffix 95'

Installing the RPM 

Install the built RPM by running "sudo yum install RPMS/x86_64/hypopg95-0.0.4-1.el6.x86_64.rpm"


