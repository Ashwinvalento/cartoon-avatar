
Node.js cartoon avatar library
========================
A library to generate cartoon style avatar URLs in Node.js


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
	* MALE : 129
	* FEMALE : 114

### Examples

```javascript

var toonavatar = require('cartoon-avatar');

var url = toonavatar.generate_avatar()
//Generates Image URL with random gender avatar.
//https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/10.png
//https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/86.png

var url = toonavatar.generate_avatar({"gender":"male"})
//Generates Image URL with random Male avatars
//https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png


var url = toonavatar.generate_avatar({"gender":"female"})
//Generates Image URL with random Female avatars
//https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png


var url = toonavatar.generate_avatar({"gender":"male","id":5})
//Generates Image URL with Male avatar having id 5
//https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/5.png


var url = toonavatar.generate_avatar({"gender":"female","id":5})
//Generates Image URL with Female avatar having id 5
//https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/5.png


```

##Running test

```sh
$ npm test
```

## Avatar Image Credits
 [People vector designed by Skydesign - Freepik.com](http://www.freepik.com/free-photos-vectors/people).
 

