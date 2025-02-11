# IMCS 1.06 RPM built for RHEL 6.X

**Description**: This project to build an imcs spec file for building the imcs rpm package as an extension for Postgresql.

IMCS is In-Memory Columnar Store for PostgreSQL. 
Vertical data model is more efficient for analytic queries performing operations on entire column. 
IMCS provides 10-100 times improvement in performance comparing with standard SQL queries because of:

    data skipping: fetching only data needed for query execution
    parallel execution: using multiple threads to execute query
    vector operations: minimizing interpretation overhead and allowing SIMD instructions
    reduced locking overhead: simple array level locking
    no disk IO: all data is in memory


  - **Technology stack**: 

    When installed imcs will act as an extension for Postgresql. 


  - **Functions: 
    See this page for details on functions: pgxn.org/dist/imcs/user_guide.html#Functions


=======

## Dependencies

The build process for the imcs rpm requires postgresql9.4-devel and postgresql9.4 (x86_64) packages or higher.
This particular build is done with postgresql95 
And the imcs package is intended for an x86_64 system.

## Installation

Build RPM using Vagrant

    1. The repo is cloned into a local sandbox
    2. Run "vagrant up" to build the VM.
    3. Run "vagrant ssh" to connect to VM.
    4. Run rpmbuild -ba SPECS/imcs.spec --define 'pg_dir /usr/pgsql-9.5' --define '_suffix 95'  to build the imcs rpm package.

    Please note: "pg_dir" must be available in your environment path

Build RPM on server

    1. Once repo is cloned, run "sh ./bootstrap.sh"
    2. cd to ~/rpmbuild 
    3. Run the following command 
      rpmbuild -ba /SPECS/imcs.spec  --define 'pg_dir /usr/pgsql-9.5' --define '_suffix 95'

    Please note that "pg_dir" MUST be accessible in users path...

## Installing the RPM 

    Install the built RPM by running "sudo yum install RPMS/x86_64/imcs-1.06-1.el6.x86_64.rpm"


## Configuration

    Edit the SPEC file (SPEC/imcs.spec) to make necessary changes to the build configuration

=======


## Known issues

    There a a few compilation errors that are displayed during the RPM build process. 
    These are related to the build process and does not affect the usability of the package install.

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

    http://pgxn.org/dist/imcs/user_guide.html

    http://garret.ru/imcs/user_guide.html
