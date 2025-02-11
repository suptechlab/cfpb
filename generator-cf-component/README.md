# generator-cf-component [![Build Status](https://secure.travis-ci.org/cfpb/generator-cf-component.png?branch=master)](https://travis-ci.org/cfpb/generator-cf-component)

[Yeoman](http://yeoman.io) generator for creating [Capital Framework](http://cfpb.github.io/capital-framework/) components.

## Installation

Install Yeoman and the Capital Framework component generator:

```bash
npm install -g yo generator-cf-component
```

## Usage

Create a new project directory and `cd` to it:
```bash
mkdir my-new-project && cd $_
```

Run the Capital Framework component generator:
```bash
yo cf-component
```
Compile the assets:
```bash
grunt
```

View the component demo page:
```bash
open ./demo/index.html
```

Build your component!

## Contributing

To hack on this generator, fork this repo, clone it and use `npm link`:

```bash
$ cd generator-cf-component
$ npm link
$ cd some-empty-directory-somewhere
$ yo cf-component
```

Edit the source files and re-run `yo cf-component` to see the changes.
Please modify the current tests or write new tests if you add functionality to the generator.
Tests can be executed by running `npm test` from the project's root.

----

## Open source licensing info
1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)
