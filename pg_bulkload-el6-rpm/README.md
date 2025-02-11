# PG_BULKLOAD RPM built for RHEL 6.x

**Description**:

    pg_bulkload is a high speed data loading utility for PostgreSQL
    It is designed to load huge amount of data to a database. You can load data to table bypassing PostgreSQL shared buffers.
    IT also has some ETL features; input data validation and data transformation.



  - **Technology stack**: 

    When installed pg_bulkload will serve as an extension for Postgresql. 



=======

## Dependencies

    The build process for the pg_jobmon rpm requires postgresql9.5-devel and postgresql9.5 (x86_64) packages. 
    You can check this link out if you don't have the postgresql9.5 packages on your system - http://tecadmin.net/install-postgresql-9-5-on-centos/#
    And the package is intended for an x86_64 system.

## Installation

Build RPM using Vagrant

    1. The repo is cloned into a local sandbox
    2. Run "vagrant up" to build the VM.
    3. Run "vagrant ssh" to connect to VM.
    4. Run rpmbuild -ba SPECS/pg_bulkload.spec --define 'pg_dir /usr/pgsql-9.5' --define '_suffix 95' to build the pg_bulkload rpm package.

Build RPM on server

    1. Once repo is cloned, run "sh ./bootstrap.sh"
    2. cd to ~/rpmbuild 
    3. Run rpmbuild -ba /SPECS/pg_bulkload.spec --define 'pg_dir /usr/pgsql-9.5' --define '_suffix 95'

Please note that "pg_dir" must be accessible in your environment path

Installing the RPM 
Install the built RPM by running "sudo yum install RPMS/x86_64/pg_bulkload95-3.1.7-1.el6.x86_64.rpm"

## Configuration

    Edit the SPEC file (SPEC/pg_bulkload.spec) to make necessary changes to the build configuration

=======

## Usage

    pg_bulkload works with control file like below,

    $ pg_bulkload sample_csv.ctl
    NOTICE: BULK LOAD START
    NOTICE: BULK LOAD END
        0 Rows skipped.
        8 Rows successfully loaded.
        0 Rows not loaded due to parse errors.
        0 Rows not loaded due to duplicate errors.
        0 Rows replaced with new rows.

    See below link for more documentation on detailed usage.

    http://ossc-db.github.io/pg_bulkload/index.html


## Known issues

    There are no known issues.

## Getting help

If you have questions, concerns, bug reports, etc, please file an issue in this repository's Issue Tracker.


## Getting involved

For general instructions on _how_ to contribute, please refer to [CONTRIBUTING](CONTRIBUTING.md).


----

## Open source licensing info
1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)


----

## Credits and references

See below links

    http://ossc-db.github.io/pg_bulkload/index.html
    http://pgfoundry.org/projects/pg_bulkload
