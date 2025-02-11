'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');


module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the slick ' + chalk.red('Capital Framework component') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'What is this project called?',
      default: this.appname // Default to current folder name
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {

    app: function () {
      var context = {
       componentName: this.props.name
     };

     // copy over files
     this.template('_package.json', 'package.json', context);
     this.template('_bower.json', 'bower.json', context);
     this.template('bowerrc', '.bowerrc', context);
     this.template('_Gruntfile.js', 'Gruntfile.js');
     this.template('src/_cf.less', 'src/' + this.props.name  + '.less', context);
     this.template('demo/_custom.html', 'demo/custom.html');

     // make a directory for the demo css
     mkdirp('./ docs/static/css/', function(err) {
       if (err) console.error(err);
     });
    },
  },

  install: function () {
    this.installDependencies();
  }
});
