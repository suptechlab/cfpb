##########################
# Set global SPEC variables
############################
%global _version 1.5.1

###############
# Set metadata
###############

Name:    cstore_fdw%{_suffix}
Version: %{_version}
Release: 1%{?dist}
Summary: Columnar store for analytics with PostgreSQL.

Group:   Applications/Databases
License: Apache License
URL:     https://github.com/citusdata/cstore_fdw
Source:  https://github.com/citusdata/cstore_fdw/archive/v%{_version}.tar.gz
Obsoletes: cstore_fdw%{_suffix} <= %{_version}
Provides: cstore_fdw%{_suffix} = %{_version}

%description
This extension uses the Optimized Row Columnar (ORC) format for its data layout. ORC improves upon the RCFile format developed at Facebook, and brings the following benefits:

Compression: Reduces in-memory and on-disk data size by 2-4x. Can be extended to support different codecs.
Column projections: Only reads column data relevant to the query. Improves performance for I/O bound queries.
Skip indexes: Stores min/max statistics for row groups, and uses them to skip over unrelated rows.
Further, we used the Postgres foreign data wrapper APIs and type representations with this extension. This brings:

Support for 40+ Postgres data types. The user can also create new types and use them.
Statistics collection. PostgreSQL's query optimizer uses these stats to evaluate different query plans and pick the best one.
Simple setup. Create foreign table and copy data. Run SQL.

###################
# Build requirements
#####################
BuildRoot: %(mktemp -ud %{_tmppath}/build/%{name}-%{version}-%{release}-XXXXXX)


########################################################
# PREP and SETUP
# The prep directive removes existing build directory
# and extracts source code so we have a fresh code base
# -n defines the name of the directory
#######################################################

%prep
%setup -n cstore_fdw-%{_version}

###########################################################
# BUILD
# The build directive does initial prep for building,
# then runs the configure script and then make to compile.
# Compiled code is placed in %{buildroot}
###########################################################

%build
CFLAGS="-O3 -Wall -Wno-format-security"
LDFLAGS="-pthread"

make USE_PGXS=1

###########################################################
# INSTALL
# This directive is where the code is actually installed
# in the %{buildroot} folder in preparation for packaging.

%install
make install USE_PGXS=1 DESTDIR=${RPM_BUILD_ROOT}

%files
%{pg_dir}/lib/cstore_fdw.so
%{pg_dir}/share/extension/cstore_fdw--1.0--1.1.sql
%{pg_dir}/share/extension/cstore_fdw--1.1--1.2.sql
%{pg_dir}/share/extension/cstore_fdw--1.2--1.3.sql
%{pg_dir}/share/extension/cstore_fdw--1.3--1.4.sql
%{pg_dir}/share/extension/cstore_fdw--1.4--1.5.sql
%{pg_dir}/share/extension/cstore_fdw--1.5.sql
%{pg_dir}/share/extension/cstore_fdw.control

%doc

%changelog
