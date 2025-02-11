# maven 3.3.9 RPM built for RHEL 6.X

**Description**:  

   Apache Maven is a software project management and comprehension tool. 
   Based on the concept of a project object model (POM), Maven can manage a project's build, reporting and documentation from a central piece of information. 

## Dependencies

    None 

## Installation

    By default the installation of Apache Maven is a simple process of extracting the archive and adding the bin folder with the mvn command to the PATH.

    Detailed steps would be:

    Ensure JAVA_HOME environment variable is set and points to your JDK installation

    For this build you will have to add mvn to your default path by running the following.

    export MAVEN_HOME=/usr/local/maven
    export PATH=/usr/local/maven/bin:$PATH

    Or, you can add to your profile.

### Build the RPM using Vagrant

1. Once the repo has been cloned, run "vagrant up" to create the build VM
2. Run "vagrant ssh" to connect
3. CD to ~/rpmbuild
4. Run "rpmbuild -ba SPECS/maven.spec"

### Build the RPM on a server
1. Once the repo has been cloned, run "sh ./bootstrap.sh"
2. CD to ~/rpmbuild
3. Run "rpmbuild -ba SPECS/maven.spec"

### Install the RPM

Install the built RPM by running "sudo yum install RPMS/x86_64/maven-3.3.9-1.el6.x86_64.rpm"

## Configuration

Edit the SPEC file to make changes to the build configuration.


## Known issues

## Getting help

If you have questions, concerns, bug reports, etc, please file an issue in this repository's Issue Tracker.

## Getting involved

To contribute, please see [CONTRIBUTING](CONTRIBUTING.md).

----

## Open source licensing info
1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)

----
