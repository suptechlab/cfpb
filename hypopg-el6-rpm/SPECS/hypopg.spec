###############
# Set metadata
###############
%global _version 1.0.0


Name:           hypopg%{_suffix}
Version:        %{_version}
Release:        1%{?dist}
Summary:        HypoPG is a PostgreSQL extension adding support for hypothetical indexes

Group:          Development/Tools
License:        PostgreSQL License
URL:            https://github.com/dalibo/hypopg
Source:         https://github.com/dalibo/hypopg/archive/1.0.0.tar.gz

Obsoletes:      hypopg%{_suffix} <= 1.0.0
Provides:       hypopg%{_suffix} = 1.0.0

%description
This software is EXPERIMENTAL and therefore NOT production ready. Use at your own risk.
New features:   adds support for BRIN indexes (for postgres 9.5+)
                handles index on predicate
                handles index storage parameters for supported index methods. For now, this means..
                - fillfactor for btree indexes
                - pages_per_range for brin indexes


HypoPG is a PostgreSQL extension adding support for hypothetical indexes.

This project is sponsored by Dalibo.

#####################
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
%setup -n hypopg-1.0.0

#######################################################

%build
make %{?_smp_mflags}

#######################################################

%install
make install USE_PGXS=1 DESTDIR=${RPM_BUILD_ROOT}


#######################################################
%files
%defattr(-,root,root,-)
%{pg_dir}


%changelog

