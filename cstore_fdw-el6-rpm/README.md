# cstore_fdw-el6-rpm
RPM for the CStore FDW Postgres Extension

**Description**:

This extension uses the Optimized Row Columnar (ORC) format for its data layout. ORC improves upon the RCFile format developed at Facebook, and brings the following benefits:

Compression: Reduces in-memory and on-disk data size by 2-4x. Can be extended to support different codecs.
Column projections: Only reads column data relevant to the query. Improves performance for I/O bound queries.
Skip indexes: Stores min/max statistics for row groups, and uses them to skip over unrelated rows.
Further, we used the Postgres foreign data wrapper APIs and type representations with this extension. This brings:

Support for 40+ Postgres data types. The user can also create new types and use them.
Statistics collection. PostgreSQL's query optimizer uses these stats to evaluate different query plans and pick the best one.
Simple setup. Create foreign table and copy data. Run SQL.

**Technology stack**:

When installed cstore_fdw will act as an extension for Postgresql.

**Functions**:
See this page for details on functions: [CStore FDW Repo](https://github.com/citusdata/cstore_fdw)

=======

## Dependencies

The build process for the cstore_fdw rpm requires postgresql9.4-devel and postgresql9.4 (x86_64) packages, or equivalent.  the *pg_config* binary must be accessible from the PATH.

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

## Installing the RPM

Install the built RPM by running "sudo yum install RPMS/x86_64/cstore_fdw.el6.x86_64.rpm"


## Configuration

Edit the SPEC file (SPEC/cstore_fdw.spec) to make necessary changes to the build configuration

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

- https://github.com/citusdata/cstore_fdw
