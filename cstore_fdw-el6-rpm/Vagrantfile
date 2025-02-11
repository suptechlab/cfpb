# Defines our Vagrant environment
#
# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

 # create imcs node (change this to new project)

  config.vm.define :cstore_fdw do |vm_config|
      vm_config.vm.box = "bento/centos-6.7"
      vm_config.vm.hostname = "cstorefdw"
      vm_config.vm.network :private_network, ip: "192.168.1.255"
      vm_config.vm.provider "virtualbox" do |vb|
      end
      vm_config.vm.provision :shell, path: "bootstrap.sh", privileged: false
      vm_config.vm.provision :shell, path: "vagrant_pg94.sh"
  end

end
