# HYPOPG 0.0.4-1 RPM built for RHEL 6.X

**Description**: This project to build an hypopg spec file for building the hypopg rpm package as an extension for Postgresql.

HYPOPG is an extension that adds hypothetical indexes in PostgreSQL. 
    A hypothetical index is an index that doesn't exists on disk. 
    It's therefore almost instant to create and doesn't add any IO cost, whether at creation time or at maintenance time. 
    The goal is obviously to check if an index is useful before spending too much time, I/O and disk space to create it.
    With this extension, you can create hypothetical indexes, and then with EXPLAIN check if PostgreSQL would use them or not.



  - **Technology stack**: 

    When installed hypopg will act as an extension for Postgresql. 



=======

## Dependencies

    The build process for the hypopg rpm requires postgresql9.4-devel and postgresql9.4 (x86_64) packages or higher 
    This build is done with postgresql95
    And the hypopg package is intended for an x86_64 system.

## Installation

Build RPM using Vagrant

    1. The repo is cloned into a local sandbox
    2. Run "vagrant up" to build the VM.
    3. Run "vagrant ssh" to connect to VM.
    4. Run rpmbuild -ba SPECS/hypopg.spec --define 'pg_dir /usr/pgsql-9.5' --define '_suffix 95' to build the hypopg rpm package.

Build RPM on server

    1. Once repo is cloned, run "sh ./bootstrap.sh"
    2. cd to ~/rpmbuild 
    3. Run rpmbuild -ba /SPECS/hypopg.spec --define 'pg_dir /usr/pgsql-9.5' --define '_suffix 95'

    Please note "pg_dir" must be available in your environment path.

Installing the RPM 
Install the built RPM by running "sudo yum install RPMS/x86_64/hypopg95-0.0.4-1.el6.x86_64.rpm"

## Configuration

    Edit the SPEC file (SPEC/hypopg.spec) to make necessary changes to the build configuration

=======

## Usage

    HypoPG can help when you would like an idex to increase the performance of your server, but you can't afford the time to create it on disk just for the sake of trying
    
    Simple test use case:

        # CREATE TABLE testable 
        #   AS SELECT id, 'line ' || id val 
        #   FROM generate_series(1,1000000) id;
        # ANALYZE testable ;

    Now let's install HypoPG and create an hypothetical index on this new table 
        # CREATE EXTENSION hypopg;
        # SELECT hypopg_create_index('CREATE INDEX ON testable (id)');

    You can now use EXPLAIN (without ANALYZE) to check if PostgreSQL would use that index !

        # EXPLAIN SELECT * FROM testable WHERE id = 1000 ;
                                          QUERY PLAN
        -----------------------------------------------------------------------------------------------
        Index Scan using 41079_btree_testable_id on testable  (cost=0.05..8.07 rows=1 width=15)
         Index Cond: (id = 1000)
        (2 rows)

    At this point, if there was an index on the 'id' column, Postgresql would take advantage of it.

## Known issues

    There is a compilation error that is displayed during the RPM build process. 
    This is corrected by setting the right path for pg_config
    These is related to the build process and does not affect the usability of the package install.

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
http://www.postgresql.org/about/news/1593/
