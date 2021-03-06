Mossflower
==========

[![Bower version](https://badge.fury.io/bo/mossflower.svg)](http://badge.fury.io/bo/mossflower)
[![Build Status](https://secure.travis-ci.org/herereadthis/mossflower.svg?branch=master)](http://travis-ci.org/herereadthis/mossflower)
[![devDependency Status](https://david-dm.org/herereadthis/mossflower/dev-status.svg)](https://david-dm.org/herereadthis/mossflower#info=devDependencies)
[![npm version](https://badge.fury.io/js/mossflower.svg)](http://badge.fury.io/js/mossflower)

Mossflower is a global reset CSS utility for both LESS and SASS

* Both robust and bare-bones; you won't find yourself fighting against this utility
* It is free to use and modify as you please.
* Both **LESS** (.less) and **SASS** (.scss) versions are available.
* It sets a single standard for sizing (REM) so you can do all sizing off 1REM = 10PX

### Build

```
$ git clone https://github.com/herereadthis/mossflower.git
$ cd mossflower/
$ npm install
$ npm run bower
$ npm run grunt
```

### CSS importing

##### Recommended (A): Add Mossflower as an NPM package

```
$ npm install --save mossflower
```

If you add Mossflower as an NPM package, then it will default to the `.less` version if you are using commonJS modules

```javascript
// ECMAScript 5
require('mossflower');
// ES6
import 'mossflower';
```

##### Recommended (B): Add Mossflower as a Bower dependency

```
$ bower install --save mossflower
```

##### Alternative: Add Mossflower as a submodule

```
$ cd my_repo
$ git submodule add https://github.com/herereadthis/mossflower.git
$ git add mossflower .gitmodules
$ git commit -m "adds Mossflower submodule"
```

##### As LESS: Add to your imports

```CSS
@import "/PATH_TO/../mossflower/src/less/mossflower.less";
```

##### As SASS: Add to your imports

```CSS
@import "/PATH_TO/../mossflower/src/sass/mossflower.scss";
```

### What about Normalize CSS?

Mossflower was created as an alternative to Normalize because of several reasons:

1. Normalize doesn't use a consistent font sizing setup. Sometimes things are defined by percentages, sometimes by EM units and sometimes by pixels. Mossflower just uses REM units.
2. Normalize defines a lot of HTML elements that most developers won't be using anyway (such as the ```small```, ```figure```, and ```h1```) and you'll end up writing overrides for it - which defeats the purpose of having a global reset.
3. Normalize also contains a lot of overrides to remove Mac/Apple styling on forms. It will probably confuse Mac users who notice their forms look different than what they're most accustomed to seeing.
