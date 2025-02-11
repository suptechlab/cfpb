# Defines our Vagrant environment
#
# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  config.vm.box = "bento/centos-6.7"
  config.vm.provision :shell, 
    path: "bootstrap.sh", 
    privileged: false

end
