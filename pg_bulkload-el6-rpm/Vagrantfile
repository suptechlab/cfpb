# Defines our Vagrant environment
#
# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

 # create pg_bulkload node (change this to new project)

  config.vm.define :pg_bulkload do |pg_bulkload_config|
      pg_bulkload_config.vm.box = "bento/centos-6.7"
      pg_bulkload_config.vm.hostname = "pgbulkload"
      pg_bulkload_config.vm.network :private_network, ip: "192.168.1.122"
      pg_bulkload_config.vm.provider "virtualbox" do |vb|
      end 
      pg_bulkload_config.vm.provision :shell, path: "bootstrap.sh", privileged: false
  end 

end
