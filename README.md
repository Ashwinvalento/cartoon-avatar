[![npm](https://img.shields.io/npm/v/ssldecoder.svg?maxAge=3600)](https://github.com/Ashwinvalento/cartoon-avatar/blob/master/CHANGELOG.md) [![Build Status](https://travis-ci.org/Ashwinvalento/cartoon-avatar.svg?branch=master)](https://travis-ci.org/Ashwinvalento/cartoon-avatar) [![Code Climate](https://codeclimate.com/github/Ashwinvalento/cartoon-avatar/badges/gpa.svg)](https://codeclimate.com/github/Ashwinvalento/cartoon-avatar)

Node.js cartoon avatar library
========================
A library to generate cartoon style avatar URLs in Node.js

Demo
-----
Try the package live at [tonicdev](https://tonicdev.com/578f236074b6631300d3c805/578f236074b6631300d3c806)

Installation
-----------
```sh
$ npm install cartoon-avatar
```

Usage
------

```javascript
var toonavatar = require('cartoon-avatar');

toonavatar.generate_avatar();
toonavatar.generate_avatar(options);

```

 `options`:
 * `Gender` can be `male` or `m` or `female` or `f` .
 * `id` can be any number within the Range limit specified below. 
 
  ` id Range` for a given gender :
	* MALE : 1 - 129 
	* FEMALE : 1 - 114

`Note : ` id's greater than the limit will start over from 1.

### Examples

```javascript

var toonavatar = require('cartoon-avatar');

var url = toonavatar.generate_avatar()
//Generates Image URL with random gender avatar.
//https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/10.png
//https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/86.png
```
`Image Preview :`

![Random Avatar](https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/10.png) ![Random Avatar](https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/86.png)

```
var url = toonavatar.generate_avatar({"gender":"male"})
//Generates Image URL with random Male avatars
//https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png
```
`Image Preview :`

![Random Avatar](https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png) 

```
var url = toonavatar.generate_avatar({"gender":"female"})
//Generates Image URL with random Female avatars
//https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png
```
`Image Preview :`

![Random Avatar](https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png) 

```
var url = toonavatar.generate_avatar({"gender":"male","id":5})
//Generates Image URL with Male avatar having id 5
//https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/5.png
```
`Image Preview :`

![Random Avatar](https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/5.png) 

```
var url = toonavatar.generate_avatar({"gender":"female","id":5})
//Generates Image URL with Female avatar having id 5
//https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/5.png
```
`Image Preview :`

![Random Avatar](https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/5.png) 


##Running test

```sh
$ npm test
```

## Avatar Image Credits
 [People vector designed by Skydesign - Freepik.com](http://www.freepik.com/free-photos-vectors/people).
 

License:
--------

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
