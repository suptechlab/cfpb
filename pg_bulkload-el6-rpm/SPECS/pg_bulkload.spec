%global _version 3.1.9

Name:           pg_bulkload%{_suffix}
Version:        %{_version}
Release:        1%{?dist}
Summary: 	High speed data load utility for PostgreSQL

Group:          Applications/Databases
License:        pg_bulkload is released under the PostgreSQL License, a liberal Open Source license, similar to the BSD or MIT licenses
URL:		http://pgfoundry.org/projects/pgbulkload/
Source0:	https://github.com/ossc-db/pg_bulkload/archive/VERSION3_1_9.tar.gz

Obsoletes:      pg_bulkload%{_suffix} <= 3.1.6
Provides:       pg_bulkload%{_suffix} =  3.1.9


%description
pg_bulkload provides high-speed data loading capability to PostgreSQL users.

When we load huge amount of data to a database, it is common situation that data set to be loaded is valid and consistent. 
For example, dedicated tools are used to prepare such data, providing data validation in advance. 
In such cases, we'd like to bypass any overheads within database system to load data as quickly as possible. 
pg_bulkload is developed to help such situations. Therefore, it is not pg_bulkload's goal to provide detailed data validation. 
Rather, pg_bulkload asumes that loaded data set is validated by separate means. If you're not in such situation, you should use COPY command in PostgreSQL.


###############################################################################################################################################################
# Build requirements

BuildRoot: %(mktemp -ud %{_tmppath}/build/%{name}-%{version}-%{release}-XXXXXX)


###############################################################################################################################################################
#PREP and SETUP
# The prep directive removes existing build directory and extracts source code so we have a fresh code base .....-n flag where present, defines the name of the directory

%prep
%setup -n pg_bulkload-VERSION3_1_9

###############################################################################################################################################################
%build

USE_PGXS=1 make %{?_smp_mflags} 

###############################################################################################################################################################
%install

make install USE_PGXS=1 DESTDIR=${RPM_BUILD_ROOT}

###############################################################################################################################################################
%clean
# Sanity check before removal of old buildroot files
[ -d "%{buildroot}" -a "%{buildroot}" != "/" ] && rm -rf %{buildroot}
###############################################################################################################################################################
%files
%{pg_dir}/bin/pg_bulkload
%{pg_dir}/bin/postgresql
%{pg_dir}/lib/pg_bulkload.so
%{pg_dir}/lib/pg_timestamp.so
%{pg_dir}/share/contrib/pg_timestamp.sql
%{pg_dir}/share/contrib/uninstall_pg_timestamp.sql
%{pg_dir}/share/extension/pg_bulkload--1.0.sql
%{pg_dir}/share/extension/pg_bulkload--unpackaged--1.0.sql
%{pg_dir}/share/extension/pg_bulkload.control
%{pg_dir}/share/extension/pg_bulkload.sql
%{pg_dir}/share/extension/uninstall_pg_bulkload.sql
