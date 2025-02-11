# Defines our Vagrant environment
#
# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

 # create hypopg node (change this to new project)

  config.vm.define :hypopg do |hypopg_config|
      hypopg_config.vm.box = "bento/centos-6.7"
      hypopg_config.vm.hostname = "hypopg"
      hypopg_config.vm.network :private_network, ip: "192.168.1.29"
      hypopg_config.vm.provider "virtualbox" do |vb|
      end 
      hypopg_config.vm.provision :shell, path: "bootstrap.sh", privileged: false
  end 

end
