# Defines our Vagrant environment
#
# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

 # create imcs node (change this to new project)

  config.vm.define :imcs do |imcs_config|
      imcs_config.vm.box = "bento/centos-6.7"
      imcs_config.vm.hostname = "imcs"
      imcs_config.vm.network :private_network, ip: "192.168.1.206"
      imcs_config.vm.provider "virtualbox" do |vb|
      end 
      imcs_config.vm.provision :shell, path: "bootstrap.sh", privileged: false
  end 

end
