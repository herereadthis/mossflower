Mossflower
==========

[![Bower version](https://badge.fury.io/bo/mossflower.svg)](http://badge.fury.io/bo/mossflower)
[![Build Status](https://secure.travis-ci.org/herereadthis/mossflower.svg?branch=master)](http://travis-ci.org/herereadthis/mossflower)
[![devDependency Status](https://david-dm.org/herereadthis/mossflower/dev-status.svg)](https://david-dm.org/herereadthis/mossflower#info=devDependencies)

Mossflower is a global reset CSS utility for both LESS and SASS

* Both robust and bare-bones; you won't find yourself fighting against this utility
* It is free to use and modify as you please.
* Both **LESS** (.less) and **SASS** (.scss) versions are available.
* It sets a single standard for sizing (REM) so you can do all sizing off 1REM = 10PX

## Build

```
$ git clone https://github.com/herereadthis/mossflower.git
$ cd mossflower/
$ npm install
$ npm run bower
$ npm run grunt
```

## Setup

The Bellmaker assumes you have basic terminal skills and knowledge of Git. Additionally, you should be using Grunt.

### CSS importing

#### Recommended (A): Add Mossflower as a Bower dependency

```
$ bower install --save mossflower
```

#### Recommended (B): Add Mossflower as a package

```
$ npm install --save mossflower
```

#### Alternative: Add Mossflower as a submodule

```
$ cd my_repo
$ git submodule add https://github.com/herereadthis/mossflower.git
$ git add mossflower .gitmodules
$ git commit -m "adds Mossflower submodule"
```

#### As LESS: Add to your imports

```CSS
@import "/PATH_TO/../mossflower/src/less/mossflower.less";
```
```

#### As SASS: Add to your imports

```CSS
@import "/PATH_TO/../mossflower/src/sass/mossflower.scss";
```
