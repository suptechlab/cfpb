## Installation

Build RPM using Vagrant

    1. The repo is cloned into a local sandbox
    2. Run "vagrant up" to build the VM.
    3. Run "vagrant ssh" to connect to VM.
    4. Run rpmbuild -ba SPECS/cstore_fdw.spec --define 'pg_dir /usr/pgsql-9.5' --define '_suffix 95' to build the cstore_fdw rpm package.  Substitute your custom Postgres path as needed.

    Please note: "pg_config" must be available in your environment PATH

Build RPM on server

    1. Once repo is cloned, run "sh ./bootstrap.sh" (sudo privileges are required)
    2. cd to ~/rpmbuild
    3. Run the following command
      rpmbuild -ba /SPECS/cstore_fdw.spec  --define 'pg_dir /usr/pgsql-9.5' --define '_suffix 95'. Substitute your custom Postgres path as needed.

    Please note that "pg_config" MUST be accessible in users PATH
