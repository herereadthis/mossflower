Mossflower
==========

[![Bower version](https://badge.fury.io/bo/bellmaker.svg)](http://badge.fury.io/bo/bellmaker)

Mossflower is a global reset CSS utility for both LESS and SASS

* Both robust and bare-bones; you won't find yourself fighting against this utility
* It is free to use and modify as you please.
* Both **LESS** (.less) and **SASS** (.scss) versions are available.

## Build

```
$ git clone https://github.com/herereadthis/mossflower.git
$ cd mossflower/
$ npm install
$ grunt
```

## Setup

The Bellmaker assumes you have basic terminal skills and knowledge of Git. Additionally, you should be using Grunt.

### CSS importing

#### Recommended: Add the Bellmaker as a Bower dependency

```
$ bower install --save mossflower
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
@import "/PATH_TO/../mossflower/src/less/main.less";
```
