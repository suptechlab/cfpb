###########################
# Set global SPEC variables
###########################

%global prefix 	/usr/local

Name:		maven
Version:	3.3.9
Release:	1%{?dist}
Summary:	Apache Maven is a software project management and comprehension tool.

Group:		Development/Build Tools
License:	Apache Software License
URL:		https://maven.apache.org/index.html
Source:		apache-maven-%{version}-bin.tar.gz
Requires:   java >= 1.7


%description	
Apache Maven is a software project management and comprehension tool. Based on the concept of a project object model (POM),Maven can manage a project's build, reporting and documentation from a central piece of information.


%prep		

%setup -n apache-maven-%{version}


%build

install -d -m 755 %{buildroot}/%{prefix}/%{name}
cp -R %{_builddir}/apache-maven-%{version}/* %{buildroot}/%{prefix}/%{name}/

install -d -m 755 %{buildroot}/etc/profile.d/
echo 'export MAVEN_HOME=%{prefix}/%{name}' > %{buildroot}/etc/profile.d/%{name}.sh
echo 'export PATH=%{prefix}/%{name}/bin:$PATH' >> %{buildroot}/etc/profile.d/%{name}.sh

%clean
rm -rf %{buildroot}

%post
echo
echo "Please run the following to add MAVEN to your path"
echo '  export MAVEN_HOME=%{prefix}/maven'
echo '  export PATH=%{prefix}/maven/bin:$PATH'
echo


%files
%{prefix}/maven
/etc/profile.d/%{name}.sh
%doc



%changelog

