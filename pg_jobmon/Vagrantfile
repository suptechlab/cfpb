# Defines our Vagrant environment
#
# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

 # create pgmon node (change this to new project)

  config.vm.define :pgmon do |pgmon_config|
      pgmon_config.vm.box = "bento/centos-6.7"
      pgmon_config.vm.hostname = "pgmon"
      pgmon_config.vm.network :private_network, ip: "192.168.1.22"
      pgmon_config.vm.provider "virtualbox" do |vb|
      end 
      pgmon_config.vm.provision :shell, path: "bootstrap.sh", privileged: false
  end 

end
