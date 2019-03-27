(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vueBigWheel"] = factory();
	else
		root["vueBigWheel"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "02f4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0390":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "1b48":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("e210");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("4dbfde6f", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("b0c5");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");
var regexpExec = __webpack_require__("520a");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "28a5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__("aae3");
var anObject = __webpack_require__("cb7c");
var speciesConstructor = __webpack_require__("ebd6");
var advanceStringIndex = __webpack_require__("0390");
var toLength = __webpack_require__("9def");
var callRegExpExec = __webpack_require__("5f1b");
var regexpExec = __webpack_require__("520a");
var fails = __webpack_require__("79e5");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__("214f")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "36bd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__("4bf8");
var toAbsoluteIndex = __webpack_require__("77f1");
var toLength = __webpack_require__("9def");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6c7b":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__("5ca1");

$export($export.P, 'Array', { fill: __webpack_require__("36bd") });

__webpack_require__("9c6c")('fill');


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "b0c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("520a");
__webpack_require__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c658":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_big_wheel_vue_vue_type_style_index_0_id_2978a75e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1b48");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_big_wheel_vue_vue_type_style_index_0_id_2978a75e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_big_wheel_vue_vue_type_style_index_0_id_2978a75e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_big_wheel_vue_vue_type_style_index_0_id_2978a75e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e210":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "#_big-wheel[data-v-2978a75e]{position:relative;width:100%;height:100%}#_big-wheel ._big-wheel-canvas[data-v-2978a75e]{width:100%;-webkit-transition:-webkit-transform cubic-bezier(.11,.77,.2,.94);transition:-webkit-transform cubic-bezier(.11,.77,.2,.94);transition:transform cubic-bezier(.11,.77,.2,.94);transition:transform cubic-bezier(.11,.77,.2,.94),-webkit-transform cubic-bezier(.11,.77,.2,.94)}#_big-wheel ._big-wheel-go-img[data-v-2978a75e]{width:112px;position:absolute;top:28%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}", ""]);

// exports


/***/ }),

/***/ "ebd6":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("cb7c");
var aFunction = __webpack_require__("d8e8");
var SPECIES = __webpack_require__("2b4c")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1dcdf57b-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-big-wheel/vue-big-wheel.vue?vue&type=template&id=2978a75e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"_big-wheel"}},[_c('canvas',{ref:"wheelCanvas",staticClass:"_big-wheel-canvas",style:(("transform: rotate(" + (_vm.canvasAngle + _vm.targetAngle) + "deg);transition-duration: " + _vm.transitionDuration + "s;")),attrs:{"width":"360","height":"360"}}),_c('img',{staticClass:"_big-wheel-go-img",class:_vm.goClassName,attrs:{"src":_vm.goBtnImg},on:{"click":function($event){$event.stopPropagation();return _vm._onGo($event)}}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vue-big-wheel/vue-big-wheel.vue?vue&type=template&id=2978a75e&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.fill.js
var es6_array_fill = __webpack_require__("6c7b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// CONCATENATED MODULE: ./src/components/vue-big-wheel/_base64.js
var BtnImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAAEHCAYAAAC3G0pvAABGXElEQVR42u2dB5hURbr3/b5v937h3vWuymAOixlEUQwkFQXJM4DkGbKACTBgjui6e80RdU2rAiZWvWtOuDgzgKCgIGGAgcl5emZ6curu+t63umuoOXNOnTqpw1Dned5HhJnu03Xq1/83VdVhh6krYa76C6dMVqOgLnXF4CIjbzmyus/4bwoPH3ikGg11qSvKVzB5ybXVZyevK+ox+Fo1GupSV5SvQPJN6xHA4qTB69VoqEtd0XQ/x97cK5i8NBQBMFTWc0gvNSrqUle03M+UpfcDgCQCICnuMfgBNSrqUlfU4r+l+zoBmDQ4W42KutQVDfczeckAhE8DICk6evAANTrqUpf37ucKPQDBVqjRUZe6vFS/Kcv/DcCrNACwcudhvf9NjZK61OXRFUi5KYXBpwMgJmNS1CipS10eXaFxS9eIACxJGvIPNUrqUpcX7ueEm/8I0DULFTBpcEvuH4f+UY2WutTltvs57qaFPHwGAJKSHoMWqtFSl7rcBjB5aboMgGDparTUpS433c8xN56MrWeSAIZKjxlwiho1danLpQtgu1cLnwBAUpQ06F41aupSl3sAZlkBEGyPGjV1qcsN9zP5pov04DMBkBQeNfBiNXrqUpdz9XveDoBgz6vRU5e6nKjfokW/DybfVG4TwPIth/X/vRpFdanL5hVIWTLWCD4JAElRjyHj1CiqS1223c8l7zsBEOx9NYrqUpcd93P0ksMBsiaHADZXHXnJ4Wo01aUu6+7nfBF8kgCiXaNGU13qsniFkpescwPAkqTB69RoqktdVtzPcUtPAsCCLilgsOSIwSepUVWXumSTL+OW3mUGnwUAUQXvVqOqLnXJApi8dJebABb3HLxLjaq61CXlft58gQx8lgCk6wSH9Fejqy51marfTc94AWBR0uBn1OiqS10i9Ru6/HcAVpkXAIKVkcOG/k6NsrrUZXC1pywdJQufDQBJadLg0WqU1aUu4+TLO14CWNxz0LtqlNWlLj33M+WOPwBUjZ4CmDS4sbLH4D+o0VaXujRXIGXpHCvw2QQQt6uYq0ZbXerSXKHkpWujAWBxj0Fr1WirS128+zl6yQkyrWeuAAitaUVHXnKCGnV1qYslX8Ytud0qfA4AxGTMHWrU1aWuDgCX/hZNAKEov0ONurrUhe7nmJv72YHPkQJSG3g+Oeyw/yEy9XTU1b1g05nk4H4+GQsAS3oOecoMQAWmuroVbF1s6NDfgftZYhvA3ik/2AYwaXDJlv79f0+WH/Y/qdmEUUGprsQBTmNWW8/cBJBu3ps0cFQHgCJTQKor4aHTmdgA0SqHAKY7ARDWCa5eN/Sw36GtmXLY/+LNTSjVTFFXXADHDCd41eg03PWsIaYAJg1uyO/b9wgGoZ5JQ6mAVFfMwRMAh8ZP7LbkG+Y6gS8MYLJTAEnBMYPm7Zxy2L9tWXTY77VmBqVTGNXMUpcn0PGqoZ28bHJD69m3TgGs6p2S4RRAKMqv/XL0af9bawilHpiWFVLBqC7XwZNUOR44ZjipaybMPQUACsQFgEmDA/tOv7DXxikn/N91c0/5P7zpQSkLpF0Y1QxU0LkKHU5a7URuH3fDXU7howD2Sc50AUBSdOyAe76ZdfS/b1l03P/jTQulGZAKRnV5Dp4d6NgExgmNBmc+bHcDwLpZdxI3ACzuOeS39fN7/AFt3ZSk/0BDILVQsvvXA9I2jApEBZ5d8Iyg41UDJyybwDih66ZcO9AN+FwFEKxy2QNpG28ZeOSmtCMPZ8ZDyYDkoTRSSBGMCkQFnmU30wp0TCXYJC3/5NmjW8oOjGuvq/hLqKnuX6FXPmiNRwBr73+WkOb6+kBD9Q/tvuJHG3N/m5C9evkJ30054j9FQJqpoxmMdtxTNZMPYfBE7iVOxHU39P6Pprwdg4K1lQ+GmmrXk5aGdjBCrbmeBOfcR+IRwLK+4wlpqicd9xq29lBjzYb2qqKH67MyLs+8/qQjZICUcVMViAq+LvCJ3EwjtcMJt3P50P9oKdk/Klhf9RpAVqaZxB0W+mmba/C5DSBay3eZxOjew18gdeUBf8UbjTlbkzfe0vvIdXP/+EcGpBZGPTdVBsQuMCoIDw3VkwWPdy+b83ZdGaz3vQTQlQonLgPwqbfiGsCa6x8kMp8jAmNZwF/+SkP2lhGZqf95hBUYbSmiArGbwOcQvKp1q08I+stvhwm4S3qyotXWkODU2+MawJI/DSehah+x9Lnwi6WxdndrRd49Be8/fqoejEYuqtsgqpnfjcDTuplN+TuHBBv878GEa7E6QekkXbvBVfgogH0muAogWtN7nxI7ny8S47aG6nxr/LvSr0QQGYy8KopiRQXiIQCfNs4Tgbd91rn/3lp+YFKoyZ9ue1IyAO9fkRAA+qbcRJx+VrRAY3VmU+7O6ZtnH3+USBVlQbQaHyoi4lz1RK7mnjtS/tBWVTwf3MwsNyYjOZBLguNvSggAi4++lAQ++IIQX6UrIIYa/HtbivZct+G2c3vKgihyTZUaJqjqad1NPfBQ8dp8RbMBvH2OJ99vuwnU/EhwHpQdLp/vOnyeAQhWd9oYEuw/nd47fgb8LI5BbKrNbi7cvWDdojN6bJxy+JF2QBS6pQrCxHQ3WYyHZQTSVLfN0UTbvgsynW+S4JgbSLDf1IM28vqEArDiuKGd7x8NPhN+NvyMjkBs9P9Wt3fjhLXgmiKIqIoyICq3NIFVzyjOw4fckLWxL3w7f2J7UhUVkdBL7wEQS7pOWmYXppLg4DkkeMUCEhx1Q1wCWA7Q1ZwygjScMY60nnO18WdBg8+Knxk/u20Q6yq/8GWsuZiBqFVEvnwhEx8qCGMJn0Ssp3U3S95d3iNY53vMVlYTOkZC360nocV/JcELposnq56dP40EL5lJgpfNI8Hh14K6LI4qgKUQ5/lOHEbqTh1Nms8eTwLnTbH+GdDws8MY4FjodNHIZE3b2ioLntn57KyT1uoka0RuqZPYUJHkEXyiWI9XPezNhDgv1/KEqakioVWfkOC4xfYmrMgunEGCgyIqiS7rOJcA7DmEupQ1fxpJ1a3NTN0kLaC1sTeS0Mp/0jGyER/m1WdvmrxuxnE9eBD13FI9NbQTGyqiPITPKNbzbVxzfLChZhU89JClSVJeRkLPrgwrltvgmankpaiSi3RVUg/A0mMuI1UnDaeJlObeE+yrmyx4/aaE7bywtV86lwRhrHDMLIIYCvjL3jvw/vIzjEC0EhsqlzSG8Z42wxlWvZwUUZ+mrlVWkNCKd8LxW7TAE1l/VMnZJDj0GqqSdedMJBXHX0H8oG6NZyaTtr6TPH1/IXhaw/t8fjUdQ2tuaV1Z/d4fp22YdXRPBJGPD/XU0ChTqiCMkuoZwcdUr/D1W44M1vpWWFK92upwCeHSefEBXozNEnictaENAUX823t0TC2pYVXxqzsfHXdSxpRjkqyqoZ0sqSLOA5ezMW/b+fCNutNSPPJ1OmQqr1fgybibIvCoTe6w9pGQbPrqB6tF/KzKjR9frlVDPjZ00yVV5DmAT+tyQkF9FmluaJB+4Lv2kND8BxR4roDXGb5WtHPD1o7F/Z17LLikDQ2NuduuXTuj59F6amjkkioIowSfVvWyl8OGt/W+56Rdzno/CT23igQvSo395MfEy8A5JHT5IhK6ajEJjbmFhFJuJ6GJdxEy6R5CptxHyLQHCJl6PyHTHwwb/j/+Pf7d5HsJufpuEhp/BwmNW0ZCo28moeFQQL9sAX1d+vpeupsC8HhrgS6b9mffJqTOLw1iW1XhK5uWXHKCkRrKuqQKQg/hwyynpcbpn36FHs2lMYINamhD5pPQyKUAzO0AEcAzY/lBoAAkMuFOQgBAknwbIWNvJQSAJAAVtVE3dTX2b/hz+PP4e/j7+Dr4eggo/Dk07lYA80ZILs3rgFJX9WyC12YEXodNotaaDJndzb/KN3jX+X7MW3nH2aiGfKaUJWgUhDGCDwe9fveGcyDey5Z6mA21JPQ0LI69YFp01Q2BQ0Amg5qlPhSGDZUNAUFYEBwAkoD6kSuvJ2TotYSAGpLLFhIy5JqwDZ5PyKB5xob/zn4Wfw9/H18HXw9fF18f3wffLwImVdkRAAP8fuD8qbbjPCPV04KH1sysH7il2OIGz0SylS2nfO0bA7UuqV7xXkEYJfhwZTqUGCql4Nu7nwSn3xEd6KBTJDR0EXUJqbqhy4jA4f+jQiEMw24IA4KwMLgGzCHkktmEXDwrbBfNJOTCtIPWP9XY+J/D32Ovga+Hr8sgxffD98X3x/vA+8H7QoWEL4nApdeQdvgMduK8rvBN0oev70FrmQou895s2VJFVc0vX6UAbMcwl9QoS6ogdAk+vUwnDnBrRe40eChNUt+eH31DggNmeg5e6NIFB6FDlUP3DxUH3UQGHCoUg42HDCG6YEbYwE3tsH7TrBv/++w1GaQMTgYl3g8DEu8zopAh+HMA/t2pu9kJPA6+JmpXh+0iiA0//Eq2ja2lLnvT/IyZPY41iwuNMqSHNIR24OuS6awqntdp1zFRouXBF70FDxquQ6OWhoFD8Bh0qC7o/jGFY8DxsGkhO29qZzt3in3TvpYWTh5KBiRTSLxvvH/4HCGwwLDrSRskUGy7m0bgRawxYq33Py+boGlvytm2GCHk40IRhNoM6SELoWP4aoqXwAMIyKxWCM682zvwBsyGybksHNNhJhKVD+M8VBKcxKgu6P4xhWPAaWFzAplTOHko8f6YQuJ94/3j58DPg58L4sUgxIttF6XZcjdF4HUY9Ks2z4C4tLBQBsIAbBdy5/rpPY7TxoVuQqjg4+CDTZFukyozQG0vOOJab8DDcgGWB9IeDmcXUe1GLAm7cUzpcBLzKhdr4KwAyasjfg6mjPj58HNCmSMIit928UzpOE8LX6MufBM7rOlKaLn7TWr9Yai5eO8DCCHGhdrkjILQBnwMwC7w1ZTdLANfKH1zuG/SdcUD8DB7iIqHCRVMXkBKn2YbmdpplS6eobMCI34uXhXxc8PnDwKQrVBHteNu8qrHw9fADOLCwNr1chDm7bxv4+yjjmfJGVkIrSRmDin4tAmXtqqSRVLwrfkqvKWCq43QqTQO6gIeTsSBc8PxE1O7RIVOBkamivh58XNzIAag6N8CZQwn4HWCL2L1515N2t7/XArChpxfliGELDljBqGd7Gi3TLqYwddakTNVJuYLvbZGquPDUlbzqhvDiRUskIPr1Qk85mbyatcdoBPByFSRuacciKExN5M2yAK7At45E8LWB/87kbRiU7dETFi3O2PBurQjT3AFwu6SlHECX3PhjqGQdjYtNdA1ey7HeRQ6rN9hcgVjH3Q1ecU7VMAzA5EpIo4PjBPGhy3glprFeabggdVx1vL0mzIliibfpk/HewnhIQMf7tkiU2R3FT5QUPwmp+4mlhMw+3fFdeHY51AHTwZEHCccL6ghtkEjQiPEg8I4TwtfH3346vqMJ7VgLU+8IbPKvqr005cuP+QhtJLx1MJXs+Gjk6Hr4YDpYOOmSC6WFTqanjHmQ3cTXKpOyRUFnjGIfLIGxw17TkERm6Dtz1T1DMGbQMHrsN4A4QurJJYz1eRlv37r+XoQynTMdIt40Gq5gcG3afnow2Uaq0NvfuxerAeF5g7Vw24QTLmzOE+BZx1EFh/iOEJBv3XQXEvuph54fs5a3lhj3sBdW7755+tP72UFQivliW7jevKrGnBAgvUVL5jCBzs4u5JwwZ5NLKZjogVXD6DqYWsWfosrd9O5W4rjiOMJ49oOLmkDuKP1GtUTgtenM3hoNb1TSA38feu75mdZtFTkvL4h9diTWYmC1Qm1HTP8KoqEd0XtxH1sk9y28vxZZuWG0Pqf7W0JqDUoJNOlQNjFgqUFFusp1XNfDSOxYQBAbIAVF3ZUz4/gcVYNELelbzKFsDZrwxIRhPzq+m4RD4pcT1HSpXH/1v6QdGk07XAZ4sJGSeASdaxQQJcTM3jY8YExjFI999UQxxXHN7LguAFqtXbBo/CdHbYaLNbvyDJbQdFU8u0bIzJnHXESa1vTNnCbJWUSxhWVUT89+LLevvsoGKgdpr2dLrSXhS5fGHY5sZ0M18mxRAu6TAo870BkLimuGAElbLo4zQS88V3B4+BDq0IIh8LmTya9o3CC8d4tdw89K336kSfyEMpmRhNCBR3FfbWVL5mtagjOvtc5fNjlj/BhbQ+bjLHHEdPnyuWMnkuK443jDuPfNGCWcZxnAh5v/hm30TkimkOt5TlvrZt+zCkIIb+USQthwsaDduO+1pL9E03jvr+86l5XC5YYEEQV78U+LoTn0ATlH8M4zwQ8H7OzUkjDgy+YtqvVbP16HkJolBl1Eg8mpOtZ/M3fTzTbNDf08bfO4YNlNDTmw3YyTLZgipzFewq86IPI4kJ8DvA8mgfOtqR6vk7wJZPKiLX840uzIn1l1nML+mNSBiEUJWUSyhWVgU9b7wuXHHyrhd9a+2AbiYGznMEHjcId8LH6noIvviCE59II7qg11TsIXoedP5kE9uwTQtheUfBRZmrPXiwzqk3KWKoPxgOAsllPbdzXUrwnReh6YtzncA+X0JXXdYaPz3Qq+OIHQnwu8HwaIDEjA54WvgrOqq+G3ebE8WDI99OncxFCvaSMTH0wbrKidl3P/SuX94SsZ47QXcDdy9zIdvLwseK6gi++IMTnEoGwDs7BMIrz9FTvIHzjSHnE6h9/TZwVbagu2HrPsHP14sGEckWtZj2Z69leW/6U0PWEPSMdFdtxNcP0SE+nivkSyh3F3eT8sAGUz8Td5MHj4UMr651MWjduEXfJFO99dcO0nqdq40EzVzRuEjJW1I93Pau3f3MODECz0PUcf5OzDhe2RwtmOxV8CQdhEAr21dC2Zhk8amNJKVjlaCj619UId1fLf++hYeiKaov0RqWJuFJBO64nynqoofpToeuJ28U7WE5Eu1uwyI59nZjqVvAlHoS4HSJsq18J6qcX5+mDdxC+0jPHkhKwuqfEy5fafAXfpacmnZ4+6+g/8fVBN1zRmKmfyPVsKdo91rTVDE+MtRv3YbyHAGKHCxZ7sd6k4Es8CPG5wfNrhlCi0iJ4DL6SM8eQkj5wduKO3UIIKzZ8NHfdzKTT7LqiMVFBK+rHCu7r55/5h1BT3TaBS0CCc+9zlvFE1xN7O7G9jHW4KPgSD0LWMQPPsQ72XTVzN7uAB1Ycscrpy+jcMkzI1FXu3jj3uLOMXFGzAn3UVdBq2YGpX2v5gTSh6/nJWvuu5yWzwgtpcVUDNlZjzyHrcFGTOvGMdczAcwzBnjO+vhO7gKd1N7XgFZ+BNppa48dfC1WwZvvapeiKirKiUioYDQitqh+98Tv7/2eosXaX6GRa24dj0rjv7vB6Psx4snKDai/rHg3c8Dzb4HCbsrOTdeM8Bl9n8MLwFUWs9LKZJCQ4qTdY58vOmHdSb5YV5Qv0egmZmKqg1bIDyndbRe48ofrhsdB2XU/cFh5XsvNJFwVf94EwkpTBIr2eu1lsoHoMvkK000eRuhdWClXQv/1ft2dO63EGK9DLJGRkyhIxUT++7LBpyWmHQ9E9y/DD+yrtn8mO9T4W9+HKa5V06bZJmRCoYCW4ombuZhEPH4CHVgBW1H8SCfoqBCpYdSAj7ZjevCuKCRk3yhKeAyhSv9ai7ClC9Xt+lX3X8+q7wsV27HRRcV+3jwfb4GBRKfAi8BVwlg/mf/J1oQpW//zZ4vUze5zJJ2SsqKCnANpRP/zGgNgv0/BDV5TDaa02V7jjEcyT76bLjEKDoYMCTynCbQXRLYVOCjNTkzsB40Eo0vthNb1enMeDV6gBL//0kST/tJGkoN8EEiwrNW7Urin9OSPtyC4qyMoSMVVBO+pXd2DLEE+K7gjb1PvoHp54DnoIul9CuMGSJHzxZAoya65oEOqDpWeP043zuqreyA748iJW84S4T7Toi5enrptx1FmYkOHLEnrrBqOqglYzn2H1q1lj+GFrqqDlaL69xMtYAG/CHbT2F8JjwqCBl6pfgsGnvgTsuaL1cESaXpynp3p5nOWeNoLkXwixYLVPsHI+98v1M47poy1LGKmgbEY06upX8sWKk7HfzlD9Vv3T/rl8U+8loZFLIDCfR0LwMKy4nsoS9ItAkxUtha0sRO6mFjxmOaeOILWifUWb61p3P5l6mZEKxiQWtKN+7dUldxl+yCboehm32J76wT6eoZRl4TPYoQBP1U/Bd2gYPmd83vDcGy+ZqetudgZvZCfwmBVcMZvOQaP5Wbdn0xNaFRTFgp6qoEzyRdv1gt8QkHzZbah+32TYPxxzyj2wxYQm8aIm56Fj+LzxucPzL+2TohvndQKPg+/AqVd1WMOX/xK1px3ImNHzXK0KynbHuJqM0QPQTP0acraNECZfrvuzPfVD5Uu+lS62peqXoIkXZQ5VEJ87VcE0U3dTD779YCWz7xAmY0q/fWOungpa7o5xFUAJ9cObCtSVv2L44XLzYLHtNFv9nlT9sOwwSKmfUsFUOg+KICNqBTxqva4i2addRdoO5BgC2Fy05/30tKP7ogry21fwKihaKeGaG2o1+fLrzf3+CIFsuaH6vfiuzcznLQfVL4HLDspcVEGYB3WwfM3M3ewEXq/hHVb1tPF6wVCj35cx7+QL+LqgtkfUTjLGc/ezMWd7snA/DjvJF/y2m6zUT1lXFcS8QP6ZoznwdODr1RW+fWC5Q2cJ3dCy71cvXDfr6HNYdwzfI6pdL+iJG2rF/cRvAvxGCPgr3jD8UNt32Uu+IHg086liP2VdY8Eq2I4wxwJ4B20Yad663XjfmKKsDzNn9jwvfdpRZ7OVElYK847dUCvuJ34TwJ/R/Sw1lPWn7O10Fpp4Z7juB72ASv2UaVWwFSA0cze18O390zBqlY+8KNo9rTJzzrH9MRmDKyVEyRjX3VAZ91Pb91m3M3OIcMX7mBusAwhd8LTr5YprD3a9KPVTxtcFYV4UQ0nioOqZg8fswJAZwhXzBf/95AxWkjBq0pbqD7XqhtpxP9urCh9y2/2k/Z5ol84/2PWiJp8yXgVhXtT2nyZ2NzXg7eGs+RdjN7R+76YXN6Qm9WPJGL0Fu564oTLuJ69+KMXQ+7ne0P18dY2tJUehq++k28uHsAiv1E+ZgQoGYGt7VEC9OG+vAL49f7qS+J5/y3iFRFXxr5B4uQCTMeiG4g5qMv2hjt1Qq+7n3rfvPR5uuM3Qn55j43gxXOmQcpsqPSiTKkmUgBsqcje14GVFLG/SYtH+oe2/3H3F5WadMVbdUNfdz6a8HROFq977T7fnfsKWE7TpWiVflJkkY9ANNXM3efCyTonYqcNJsNJ4tXzF928vSZ+edH7U3FArADL3s91X/Kih+/l1hj33E7Ofw64H9zMOki8L7wc3+n1C3v2UkI1bw1YIizt9NeH/sr/75Dv6c6HbHgXX+ZrY3S++P94v3E/HveG9MuPvGT5T6Om/Q6fRzQnthrZDg7aU6p1y0HZHrO6z7wwBbMj++XU9N5Q1aJtlQ10BUFR8RwmGHa/XGQL4X6/ZOsc95u4nTGI6gRlodmzb7jCQ0ZjcD73g/H735oaBdOl+Zd+XfmG44IbmnzXGEnjMyh54RrCDduFPP6QddZHWDdVu3CQqyjsC0Gzlw+a7L4Yz3hsaDOM/i8eMBVjxffRNdDOeqGc/ETytYrhhqI5egAjqRcGJw/uNCoBcNrTyvElid7MLfFdQOzB2oeBgT3/ThvknD2TZULaTtt46QdPeUEsASsZ/tdu/G2AY//mrpeO/AGe07/OqKGc/wWWkCuL2RNYaKowb7im4xaiwXt8vVfB4BzDihjZCbyjCJwverojtxjjQX2UI4YHV96fybqheUd5qHOha+aG5eO8CQwA3/WIJPGqwWiI0/vZw8T1arWdRmsx8DEbjSieqF617RQOPwM6XRlQBxCPtwA3dA6UHkbvJg8db44afDAGs2vjxA6B4F6Ibqu0NdbUcYSf+a68qedZQvlf+0wJ8U8KGqjcOFPCya6LjfiJ8TuImJxBi8sPqpMZEULTvlcWzFiGMGoCcG5oHWxYagWcEH1rVa+8JEjFbV2ekHnUx3xtqVo6wFQdajf9QekP1Vd8aAnjvc3Kqh+CdFzHcbAnLD9Ho/YwVfHYnH2Y2Y3ivViGMOoAwX8rPmWAJPGbFt/5FtFnTj+vTjh5gVI7gm7MdxYGyALL4D98UGrALDRMwM+4wB4+Drx0sOGpJdOI/jPliDJ8ldxSznLG+V7Tv1scngJE40A/zyczd1LOccYtE50eUp0/vOciVOFAKQMn6387lY46BGwwa3vjAWWJ3kwOPWWgcLL690vv4DydSXExopiyJ8GVhMTETdQBhvjQDhFbAY5bVe7RofWBo09LzrsA4EFfKm8WBthMxRgkYo/ivcvMnFxredHGxJfCo0b1fNPU/r2pmToHBSYgxHE4e/C+6hw4SOaJ40LXsLJZX3ChZoGpLuKJRBRAtkojZDRnQXTYgbC8qNIQwZ9X9s7EeiHEgqwfqHeSiFwcaJWIsJWC08R++WVPOL5MN478t243jPD348O9R9XD7CY9XP9iehOh+mdXG4N9tqSvck+HrOSis6zYCIDz4JeSk3onllHgDMJKI2Q87pdkBsGnzVkFL2uq7MqcffQnWAzERw9cDRTumSSdi7MR/LaX7lxkC+Nn3cqoXsTb8L/Z9ep2AsZnCt5yxtJEw0ZuIttUPC+kyCRNsPLDp3pq9fkwAhHmTD0eZ2QGw9qMvjQ/y/PWbZ1giht8xzVZfqFsAtlcVPWW8BOkDKfAYfGgB3HB3BCRh4CCOEBzIEeqHAE511eyon91itJQSsvYvUCTd2M8ufFHIBpuNi+xYu9YhFEnE4J6hdgCsfO7vxhv27t20ChMxmak9+nuSiJEFkCVg8M0CNeUrDRMwj/xNGry28yZTCwy/Prz+b8AcbwDEiWYrQeLi++FE/25DpAH6FoPfdaDWRq6sFyUOk+SRrIvrdmO279yJtgAsvfcp460K83Z8kZHWczCfiNGuD5RuzLYDoLYDBrM+obrKzwwBvO0JafA6AByxOHzoCp4PfsEM9wG04xZS19Oh4rKkzW2PWftdANXy/T60IrregUi9ZMbbLANsIxPqh7lkB8DC6+833qSpZH/GDzOTLuUbs612xMgBKJkBxaAzUF+1weiGAwsfFIDXGb5WtHMnkyBuvjT0Ws8AJBt/sZ7tc/q+wxdEDwiqfnH0BSWj4PBMxPdlHcD686faAjAv9RbjVREVedsh7rsMEzF2OmJMM6FWW9DwzaBTfI8hgFNvk1I9BI9ZEI6bDl0OceDFs8IAuh3/Wc56bnD9HqQN3FN7mcnovmc4DjR4PVB8R79vx2DeNAGEdgA8MOYaQwADNWV5GTN6XM5nQvntCu22pEkBqFeCiABYZLifxsjrpMHrABCXIOFWFHgu+PnT3X0wEpPB88nh9f06cD87vqSsJmNMFMxrF7+LwbxphTjQDoD7Bk0TdsNkzuwxlM+Eyi5Nch1ADDYx6wPHPPkNJfvKBUJ3k7eWiIV3QIsjAC3GbDGPV124X8tuuhmAJm6062MM8yYApQg7AO7tP1GwLrC24YfUHlewljQrpQjLAMqUICiAzfWNhgAOnm0K3kH4JlELL8K9xhsAPZzQ7jVmP+bsfmMRJ5tkic1ez0mM7DaAWX3HCQ/vTJ9x1JV8KYI/PcluLdB2DZACKNhbv23gTKG72aKBLwwgKCCcAx66ME0BmCgAmr2vyedw3XOAeROE+bPL/X5QkpF29DBWinC1FminBmgKoIm7yYPXHDHqgioAEwtAs0yxKBNqmgG1B2DIJoBoojkNZYfhfC1Qu0mTzJb1rgGIdQ/RzZq5m1r4mvsCgJgFVQAmFoBmEIliby+yzA4UUAbAzBlJQ1gtUG9VRFQAxIKjKYADZsqBF4GPAjhyaXwBKJlVjBsADTtrPKw9mgEIMV5Us8wYA9rMgopcUEjCNCOAVorxrgKo7YKhAAqSMK2DZgndTR68JmpXQyHeQwA9LEN4AmAssrYCWJzUHo1KG26UTVwFUJCEgUM7G3+Y0fMqq90wrgCo14aGhUfIDNUaAnjFNdLgMQtiK5pXANrpA5V0kTwB0O2iuIwBEF68p5Fb60mZB+uANgvxojIEHFfmT0/rOQK7Ydj+MFoA2eGdltvRrACIhUYGoKgQ3zryWt04zwi+RrDA8Bu9A9AmKDJpck8AtFMUd9I4ju9nY+lTeDsNc7ApqFrzon4K86ap31QPCvGVFbIA6nXDeAWgYSta69RlUqrXyFkAt6L3qg5oN8XucKJYec8uANppxrarKnZa39zolfUAwHpo/nC7Fa2tpjQ/7gAUNWO3LnhACJ4WPrR23AvUq04Ym4kNOskcJDccwWNnOZLN1L4d2MPrDuMPQD/MO7ebsVvL83YwAFlDtt7WFNEFsLbic8NvjFsflwav8Ry0iaTt8gUkiAb7egQvmG7vTHm9k5acfMt3bMe3wHPguwBoJyliR7VtbncY01Y9AYA+2JrQ7eVIzUV7NsYdgG3VJasNAfzzy0J38yB8EzusZfBcEoRV8UHYGyYImSy3AOwEo51v+giEQQBC+r0WWV9lrjehnW1JscAz+KSWPunFfXrmQvmEXw1Renay6wtyGw9s/SbuXNC2yoJnDFdD/O09KdVj1gDWDEdMBcENDcK53xRA2OPDdQBtpPc7TTpwC4XvgZPegaK4er/oPmOZgHtd5gk4PdRFZhVD1JUU148CgPmwO7brW1LsylgTFwDyZYim4j13GK6f+nStFHgMPrQmPMhl2HWeAkgnoY1kTBcQcWKzVe6RbQmpujrYv1MPQHq/0Tg0xsp9bvxFapxjBeD+00bYAtAv2JTJt/mTl2NWhjAqxDdkbZxhmLb9eZs0eMzq+06Eo8lugA1950A7UapnAAan3hJXG92aARhv94vutdsAuvJcYb7gSgi7+4KKtiUs+fLlh2NWiDdqRStf+/ZAw84B2JhXL87TBQ+CZmp9JpB22BMGD+j0FMB+U6N/wpDDiRh6eEV83CMovewYxwLAJpvbUZhtzLv/lZsWx7QVTa8Ze8udw08SbU3feHGqELwO+PoctFbMgsLBnEHYYNXNTGhCuHYmEzEUq5OR2P3BeFkZ36gDCPOl5tyrvViKFPrphnOujptmbLYcCZdgiLphmqEYL1Q9Dry6iDWj+sHRZG6XIhIBQpmJGKv7tQpfrAAs7W0vA5qTcq3xfjC1FZWZaT3GxXw5knZBLr5poLZyrWHx8u6nhe4mDx6zBkzEeFyKiFcIZSditI8ps+J2xhRAmC85p4+yBaDoeLKW4r1bMqb3GOvZgly7W1LgMvy2ioIVhrXAtz7mwJsoBK+2z/iwwc8Er7zW80xoNCe1bNbVykSk5QmvEzOY7XUAR1QBxAQMfHnbTcCIDuj070z/GLKfYzzbksLupkz4po15v95oKN0/bhW6m13gQ+s9nrQNXRiVRIxe8dxxiUJnAsvW8ixPRFZzdBtErB+i6llpPIgDABtsbshrdkR12fcrn16fljQ6apsyyW5LiG9aue69oYbBq78aGmMnSYPnj1jzoDlRS8QYqYvtjhmcUJGt560W021PRAai03PuseUO79sheDEBEOZJuc0zIXafOpwE/VWGAO772+IlkHwZFbNtCY025sXCI2SHTiTNDQ2GmdDJt0iDx6zugqme9ITamtgPr+goslN15NUGFQ6bn/HfIkV5tyavkxpnxz3jvRmtxYv8G/05+PmY37cLAObYPJbswNiF4pXws0+YmJHac2TUN+Y125oe3xTfHLJEGYYB7CMvc/CN7wSfFrya3ikdhiclRTsOVJagBvOj7YJptt3P0vufNk7AlO7fnj6zR4q2Edu7rekttKNh3QPrH23luU8b9oR+9YOE6qV0gq8arAXOCoxJHKgsIQGs6TvRNoB1n31nnIDZ/v2azBk9kq0W4e0fzmKxGI9vXrsz07AlLeSrILVQHJUBj8FXfXYKqUflu/Sa2LuhyhLC/Sw4c7Q9AE8dRoKV5YYAFvz3Ew9rSxAxOZ5MVIrY89jMM2GDpnajD9GQdofQ3eTBY1YFPxOAs+I76oFKBZUZqF/7BfbLD7mTbhTthh3YvLR/ql4JImYHdOoBiGnYQF3lZkM/+uV35cHjjHbFDJqj3FBlQgCrHbiflc+/abwKviJnN7ibE/QyoJ4fUS1bimCJmJbifY8a1gO37dR3Nw3AQ/OB+aGxNnhp7MoRyhLD/cy12f2C1vzLdkMAq7d88W5G6tHj9TKgfAmCT8BYKUF0AtBJJhR94IrMNaOMpbye1MJ55zKq5+PtrGTShvVA5YYqM1C/5n72Vz/sGzyNzk3DFRCvLr0NEzD8MiSjrSgcZUCNAJRdloQ3kTnruJOgZlJm9GGaHntNCF6VBrzKiNVfnKayocoMASyzuf0EWtkjK0TbEFZnpB0z2SgBY3sZkhSANpqyMRht8xUa7hET+HWHBHid4aMGJYwAuqEqG6pMYwEAcE+vYfbdz63bDAGs37vpu8y0nhO1LWieJGCsAsj3hLKWNAxGq3/5ZrrovAj/iIVCd7NSYxURaxwwy/tV8soSTv2qbO5+hpZ9WarwIJaCD/7yMB//sQRMRtqRvTEBg/EfS8AgAwxAPv5zDKCVljQMRn+87pRTwA2tMHRDn18pdDe14FWcNY6aD7eqGKKSMco6J1+yT73KNoAVT74mcj/96+ccP5WP/9g+MFY7YKQTMCIAZTti0CduLc992/CD5eQSHxTkGXg+Q/DC8JVz1jRwtmpNU9ahfn4HpYddva4kbQdyjN3PrA3fQPlhkjb+M1oFb9YBIw2glUSMURxYtenTSSJpr51/nyXwyiJGVXDwPKWCyujzt7vzGVr+zGVC9zN35b0PYP2PxX+gggNdif9ECRi7cSC/NIlKMvjGwYaqfYbFTegNNXI3y3XhG0tK0c4cSxqxHKFKEqrv04n6Ye/n52sN4WuvKi5Kn5E0VduAjfU/jP9klyBZjv/ciAPD5YgjTmrM2/GI4TdMUx2pvmphlzjPELwIfCVgFeeMVyp4qGc+HcZ+NPnSZFz78/348Sp0P9keMPwmTKz+h3Ncpv5nKf4TASjbmM3c0OwVN14ABc4Ww2TMmx8J3c0yDXglsNMxWjFY/UWpKhY8hNUPcwhO1K/q9fdEa//at959+UJR+YHfhMlSA7YXABr1haJEt/sKPjX8oNU+UnnJdCF4PHzFzM4YA/+eTNqxJKFU8JCzNmhNdFL323NeCgnC3DNcPJ7z60Y999Oo/GA3/hMCaBYHsr5QUTkCJbrsX6tSRIFuw1N/143zdMGLwFd8xmhq1dgjiiqo6oKHlPqVwFxxon7lj/1NmHzZ9+ot9/HZTyP3U1R+0PZ/Wor/3CpHoESjVAf85YYrJILlpaS8/2Shu6kFr4iz5gEzD3bHKAi7PXwNNs/869h4t88YEigrFax8z87KSO0xnc9+GrmfnpQfvHBD/du+v070jVP/1BsceGN1wBvTBbxCNOh+L8VtKwZGVFC5ot0+8bL/tKs8Vb+iT559JjM1aQoW3/Wyn1FzP7sA6MAN3TDnxFOD9b79hioIK5HLLpoqdDe14KEVRMwP+4CoskT3V7/y3smO4NtzbjIJVJQLSg9FxdBqBgtve16Ni2+1xXe2/YQb7qcUgLJuqGjLepopgoJl3c7MW4UquGKVZfDQ8mEHrIIzRoXPFGQJGQVht4OvEVzP3adc6QhA0bl/9OSjr195CZMvrPeTLb5l+38aFd9F2U/b7qdTN1RblN80t9fpwXrjwnyotoaUDZ2jG+cx+DqDF4Yv/7SRJA+sCALzwADlinZHawcAndT86Jq/QXBmYG21sfr5CoszZh87k6/98Wv/tNsPapuvXXc/rbihotNzWW8oSnftb+sWi76Bmj79The8QgF4zHKhJani3InKFe2G6ldk86Rb3mr/+bVQ/Qo/e+EFlnzBrSe0yRdt76foFFzX3E87bqhRMgalO3P28WdAh/lu0UBUzlgmdDfROoMXhg8tB6wW40GVFe0+S40cFtzphkuTFwvhaysvyM9IA/VLS5rMq582+WJ17xfH7qcdN9QoGcNU0Pfjh3OEg7FjNyk6e6zQ3eRVj4GXc2rE4O+bsEtGxYPdouTgNO7bDVnT5u07xU3X7y1/VK/0wFa+83t/GiVfPHE/nbihRskY/CaBFfNrhQt2n3hNCrxcHjywAxAnoOWDgrZiUkbFgwlrrf2mkL29hjtWv/JHXxbC15T321YAL6x+kXV/fOcLv/OZUfLFU/fTCEArKyQ6lSQgkM3/YPlw6BFtFSVkSq6aZxk8tP0RK4B6YjuDUKlgYiVdwJzW+2jD9RUzhYkX7Pnc8deptxmpn1nni9TKBzcAlHFDjVSQdcZoVbC5eM9rom+mlg0/kzwoL+jFeSLw9vdCG06ywYqhbqSSMonneuafMcoxfLjYtnH9ZqH6+X/99sv01B5pLPaTUT9R54uu+jl1P81U0CwZo10nyFTw13uu6hdsqC4QDVD1Iy/Kq16vsGVH4EPbB1YKQTxNyigID5mMJ93p7KHnhPC115RWbrqx7yIr6qdd92c1+eIIQDdUkPWHMhWs+vGfC/Dge0MXoa6GFI9ZaOpu6oF30IYpCBMEvmLoBXYDvv0j5gldT5xzee//+Umqfpq6n5H6mfV9eqp+TlVQW5hnKojfMLB3zCfCrOjuPSS3T7IUeFr49v5pWIeV45HXCsK4ha/U4QqHjmbrs2Bf6F1ZQvWr37d5IwA3m3W98HU/PPOBZT711M9u6cFTAM36Q0WxYNYTsweGGv0+0YDVffCZYZynq3oceGh7IlaKK+mxPKEg7JbKh1bz/idC+OAMy9qf7xi8GDKeM7DnE5ccMfXDHc+0dT+z2M+w79MLAN2IBfmMKNZWsMOgevNn14lcUVqgv+9pwziPdzf3GsAXtitpYiaglDBuNtQtdCnmowds3vukED6cY/lr/utZLDvgigdccMt6PvkNl1jXi1HmMybq54YKGtUFsc+uuXjfatHgher9pHDSYil3Uw+8LLRTwlYA37jtSgljXmrIO32Ua/DlTryBzhHhTnw709empyXN4RMveNwYrnjgez5l635RVz+ZZIysCvI9othlvnXZJf2Ddb5sYeaqoIDkDpxmHTwOPjTsrjgAD7/1whkKwlgU2c+bQg442E6wS6P1gCmkPT9fnPWEZutNi05fxCdetGUHtuBW2/Mpq36eJV/sqqCoO4ZfsMsSMgUfPjYBDkNsEtYHf9tF9sOeHvuE4A0zBO+gwYODeLIBe0dZx4wCMSrtZW50uHQkXfqOgzkhbjWDHENr1rNzcI/PmdrlRnplB70Ft3Yzn1EFUBQL6nXHMBVkrigGv9Vbv77DxI8njd9nkr3QKSHjbnYFLwxfR68g/GwVHJ2tIIxOY7XdE2yNjpWuX5thFveRok9feIW5nrjTGVtsi3u96CVejNTPqOulU+wXDQDtqKDRSgltQgbdgObCrNVmg+p/60PYGWu40N3UA2+3wcMsOnscaVcQehbvFbmYbKEGz7n6rX+Ywuf/7V9rAbR56Wk9UrWuJ1tsq5d4MVrxEHP1MwRQIiOqXS/IlyVQ9nG3YbrwceHp/dqrS7aaDW7VC28L4zwZ8Dr1DoKqNuJOaxgXKhBdW8mefepwd+GjR0q/ZQofnNa8b/28kxfoZT1515M/6VZbdjBb8SDKfHoKoFUVlEnI4G5TzBXNembuUFhBX2A2yBWPvyLtbkotX4HfKYd6YeBCBaGzEsNUUg6HZu52GTyZjZVo0qW6pGLrXZfe0lFwN8h6MteTzj3JxEvM1U9GBa2UJYxc0ZxV96VAAF1jCuFfX3IMXpd2JsjSNcCSGKWG9hIt+0+9ynXwKHx/fdEUPsim1+94bNq9LO5jmyxp283MXE8nZYeoACijgnZcUZYVxZagoq9emgOZ0WazQa98+g1L7qasFcO3eBsCqCA037EavrBwW0kvwKNn+T39uil8sMSoNfvVm2CBbdJc7HZhcR9uMcgO2NS2m9l1PWOqfnZUUMYV1Rbo0U2o+vHDW2H9YNA0JvzbOzQ4d/vB4zboeCxaQCVpDDtafH1SHG0Xb5Zw8b282hQ+nCMFHz7+Ek26sGVGsMhWG/fpFdzddD2jCqCdsgTviuplRfkCPXalY5q4Ztvah8za1dBqVn1MdnsQ9IeTNCNIDZYslFt68IBMaHLP9sjdpDE5PEt8pqbwwdwo/ea1tzPTkuazpAvfaM3iPpxLbItBfpsJbdZT63rGvOzgRkLGzBXVFuj5eBB9dv+O9CdkIMTaEG5B7tWkwPjQD3HOIQsiBW+iZ3Eev418/XfpUvCV/bD6A1C0azqK7ZGkC9b7jOI+bcHdzPWMi8SL166oUTyIA4c1m7pdmU/JQIgb8WCLkpcTBMsWVeiaHiIxYgAMi+nZHoPH2svMNlNi8JX/8M4aiO8WAFSzIPEyDeFjxXYGH6v3GcV9Cel62k3IiAr0evEgqw9izQYH0r9t7aMyMSHtHYUmXa8nCzYElMEqi+bzpx4EsbvACJ+j5bzJ9PQqz2I8ncZqfHYyMV/Zd39/NwLfbL7TBTOefLGdr/fpxX0yBfe4VT8rKiiKB/nShF6rGoMQA+mqzZ8thwcQMM2KNfjpMpVoTBw6eWA/k2pQxXZeFRMNRrhf7F6p7jOB5MKudNEaO7SSe56gz8wcvrpg8ecvvsnDx9b3sU4XXGLEF9v1Ws1EJQcrWc+4ANCJKyqqD2qL9JjFwoGtyPzgTngQrRJuCvG//yldLR2tiYQ9j/lnjqbnmLdhw3e8wwj3hWWEGkiq4KZIuz3IJputZMdnJPMsodTQVvjR469o4WNtZlhu4DOe2mK7qN6XkK6n3ayoHoQsHuSTMnyRnmVGGYSFnz+3CIr1fpkH15q1lxwYuzCqE4tZDihJORyl1gDuXCAegIT3xW4VLJpjx0qOi8uDrBo+E3w2Ms8QiuwN+16/9Qk9+LDWpy038BlPbbGdJV30Gq21rmfcZT3dckWN4kFtUobPjGohzH791imw5X2h1LcnuDdlj6yg29bFasKhuiCQZTDxayCb2ATKE9C6rG7Ayb0O1uqaAH5UuDJoPMcdxKOtcnpbB+KzMFtIe3BNX3HFb/819X7MdmLCxQp8LOMpSrrYifviEkA34kErEGJ9Z/ufU0a1VRVuk3mQdEkT7BmJG7fGdAJqoMTyBu7qXQKA+CDbiO5rPSgUgoM7RePZ6G0s0RMx9nf47/hz9X2vppDh75fAyn90J3GTW6dbvLueQYaxb8zcRGSfV0vx3uwtywYtY3U+zHZiwoXFfAw+1uMpC1+3iPvsuKIy9UGjzCgrT2iVcP2CMy5tyPn1A9mHilvXYWPv7tOuiqvJ2Z0Nxxq3izfZNrBzc8W2td9vmHfi9djhwtf5MNupF/Mx+Phyg17G01K9LxFcTysqKJuUsQohPojKDf9YHmryN0l/u8KK6rypSxUgHhuOsWRtj61kbyn85Lk3MtJ6LMTeTmwvox0uEfhYqcEqfJaTLomofk7iQaPMqCyEmH7OffvuOYGashzZh0037fnvr8m+gVMVLG4X1WFMaz/+ilh5Fu2VBcW7n5r9MCZbcFUDbayG3k5sL2MdLnypwU34Et71jDaEeokZLMD+tPTcYY0HfvlIpnOm41vXX02PMt5z7jgFj9MGBRhDHEscUwvwhWAV+7qNi85YjPEey3TSVQ3QWI29nazDBZ+xUcJFwWcGoEcQYs2HdcxgCxI+qNKvX78TzqGotvINHKgoJxVPvOJpT2l3NRwzXCiNY2hpzGHT3Lz3HlqBLicf77FMJ65qwMZqvr2MPmusDUcJvoQE0Eo8aAdCPjvKd8wwCLETfvsDo5MbC3Z9a0UN6aQoK6VJgz2wE5uCy0TxYIxwrAKlJZbAw2fSsOfHzVuWXbKMuZy4hwsf77EyAz5LHj7W4cJnO12Br7uonxMIcZBkIGQlCiy0so4Z2vcXWUWBqWl63jdky4q/fOlO+KYttThBSLDGR6pef49kXzpDwaYtKcCY4NjgGFkdV9g6wpe3evnzsEh2Eaoeq++hy4l7uGC8h8kWlukMP8vwqgYGHz5zfPas1CADn7Dc0B3hs5MZlYWQ1QlZ2xpr4GarKOgasEhciO7LzzdfOBoO6FgDbWztVicMaawjdV98Twrm3kG3xTtkwYPPng9jgGOBY2J1HKGdLFDzy9drf7yu99IO1YMsJ7qcWN9jLifu4cLHe/gs2aoG1ljN2sv4Op8MfN0u4xltCPkSBR14rncUHwxmw3DtF0vO4FYEzCVFd2bfyzfMbS07sMUyhOzkprw8uk1C9mWph5Ta4WfGz2533Brzd+7e9djUB/lYj6keZjlZfY93OemziyRb8JnSZWocfPjsFXwuJWWsQsg6ZljvqF5yhrorsA8I75JiGhszaiVfvHhXoKrogN0JRc8a3/IrbavaN3hatywjlD74LGnavBWXANkeo9byvMK8dx58gbqbkQwnlhdYrMdUj5UYeJeTPjvcokQn2cJ6O/U6XJzC1y0BtAuhqFjPN3DrZUjpUpSIS8qXKnB3ZPym3TDnuBFl6955NFBbXuwERJygzb/8BvtWvklypyzxbHsMT7tV4J7x3vEz4GdxAh2N86qKygs/e/6N9bOOvQ77OHl3k+5YFon1mOrhM+FLDMzl5JMtfKZT21gtSrgo+GxCKNMxgw+AX0/IkjN6LinLkuLW5EwNMd5YP/vk0eWZ7z/ZVlNa4AhElrypLCd1n6+FI5OfJznjr4vLtjcE7sCYBaT0/qdJ7Wff0nt247O3+YrKSr586a0Nc46/ngePdzexl5PFekz18JmwLKeey8knW9iSIhn4rCRcuj18bkPIVlFokzMsLtSqIcuSsgQNHxti1m192jGjIWP6EJzg+5sbk5Ev9Ddu+IlUvfEBKbnzMZIz4fqo1hrxvfA98b3xHvBe7GQvhduBFGXty3v/Ly/BeHYoXkech90sEXcTi+o41nysxydatCUGfIZG8R5b1aDgiwGEbCmTXoZUGxeyUgVm0Hg1ZLEhtjZh1g0LvmEQk0bnrrz35qb8HemQNW1zc6J2ctMKC0jTpi3E/9GX1PXDVfyFNz5I8lJvIQdGzSf7hkyHzpJkavzCYvwz+3v8GfxZ/B38XXwNfC18TXxtfA+v7h+ymu0N+376ae9LN/6VJlcgxjMCj5UWWFGdjnkk1uNVj25FEikx6MV7eskWflWDgi+GEOrFhXypwig25N1SBiLGJjhpfr3nitSqn7/4O9SuCr2ayIlmrb7Ckoof3vvHllsH3EoXyYZrebM7XE0GHrSRsTiPgce7m0axHl9iMIv3FHwxgNAoQ8ov7NW6pLwastiQZUq1bimLD3kQ8Vs8952H7qzL3vQlrNCuOdSgw5Yx2CLyh/2v3fI4Uzu6EzUU0enZ6+HlQpN4xWPgsThPz91kjdT4TLSqx7uc/EJas0yngi9KEOqpIT4gq2qIrg/rJ0WXSA9EGrdg/IJxzOwTJhZ++OgDDft+/qY7w4jQwRHPGbkr73l6/ezjr6Wr0jVqR08gwo2RcENcLsbTA4+5mzjWOOZWVY+tYhdlOhV8HkNoxyXVU0M+U8q7pXx8yIPIx4g0g4dr07BTP+3Yiftfv/W26i1fvwsF/iyZXdvi1mDXMTjeK9u38eN/7nnxukcy0o7llY5C10XtYAzofpy4FTwX4+mBh2PLu5t8hlOkelZcTgWfFxBKxoV6LilL0GjV0MgtlQExnMGDwjE0C9N1apBWx7oWtlP9dNNFM+HY7UdgH9MPW0qyd8AC0+Z4BQ7vDbKXWdU/f/F57rsPPbt56XlLmMrR9Xi46W1E6Rh0dA9OPHMPPjM9+gsPQMGTZ2FMZMAzcje1qscSLUYup914T8HnEYRW1VDrlopAxI4MeqQxJA4wc0c3foUUOnNPeRjpZkE4QUEdcMKun3fitH0v3nBb6bevv1C7Y92nTUVZ2wL+cp/VFRoOLQTvWdVcsGuH/5dvvir+7KXXsp6b/+CGuSd1KBwPHFU53H8l3K1ClS78BROO7Rh0zM3EsaA9tzA2OEY4VjhmIvC07qZV1VPwxVlcqOeS6qmhDIi0/qQBEeMWPmvKqyJ2cfCxIq+M4ZN6MD6CzYRQQTBmgsm9aeEZs7KenrUs/x+PPVqR/u4bNb9++0n9nh/XNeX9tqWldP+edl9hEazur4A1jQ1gjZDyb+HS/y34d/hv7TWllfCzxaC2extzt2+ty9qYXr3168/L/7VyZf77Dz+z68nUezYuOJ2uOuBAm81go8c4o8JxwNF7pYecwL1zSsfHdvQzc2rHZzXpWGnA42t6ZuBpVc/I5VTxXhxAKJMl1VND3i3VxodaReSTNZi5Y+4pr4p6MFKVwA2EID7SAhle8wbJCwYltmjhGQeY2KAK1COVun9YU6Mn/0C2MWyzTYz+HPs9Bhnd3iECGl19EIEtcg8TtMDRhbB475zS8dDxasfcTDo2XHJFq3jaOI93N0WqJ5XlVPDFt0vK1FAWRF4R+WQNK1/wqshiRR5GLDTT47EgLsJ1bVogMVtIkxcRKMNnmYfBDJ91EIaTAcqMgiow/mfZ74dXl1MFpqBRdzICWziZBFs+aICj94z3jp8BPgsPHYvteLVj5QQ+ucIrnix4RqqnXM4EgdBKbMi7payThgeRd01Z1lTrnurByJSRumZQdMb4iBagOSDpnpb07HJIYETcVgYmdfkYnJjap+l93BslbAiQnvE/w36PQUbj0whozJ2ksSvcA00qccDRHccwzsV7j7iXTOm00GndTJbV5F1NHjy+jUzrbsrEegq+BFNDo0ypLIjarCnvntIJB21TIhjpyawRdaS7t0UUUgslTWZEwKQuXwROBiiNv/AAEoBHZHR1QeTn2e/TBa4Yn0ZAoy6yBjamcAw4vGca7wqgo58d66k6biYf41kBz2msp8CLEwjN3FIZEPWSNbx7Sjv0uViRwYj9jHTHtkjMyIDEzCBOapolxAkOC055KBmY6PIxOGnDMsRetA4ZMVrg1jH+Z/B32O/T8glu5RcBjYeNnp0O94L3RL8s8Bz1CHAspqNfLPCZGHR8bMernRY8llyxCp7dWE/Bl6BuqSyIIlXkYWRuKosZmTrSZmPMDkYSOQxKppQMTNqbGlFMBigz2kcZMQYT/3f8z7LfZ6/Hg0bj1ghsLIFCyy4R4JjKsZiOVzoGnUjtZMBT7uYhqoayIPLJGr58wasiixWZMvJuKj33XgdI2vGvAyVTSwYnDygzus2GwPifZYAxyJiq6cHGFE4LHJ9MoY0LnNLRfXk4tePLCXxyxQp4SvUOcRD1XFNZVTSCkakjPfOQS+Qwt5WBycPJAGWQMlBljP08+332egwyBhpzJ/kECgOOVzkj6MzUToGnIHQNRK17qgcjU0YRkFootUrJw8kDasd4wBhkWmXTwiYCTqt0PHRaN1M2xrMDnoKvm4CojQ9FIFqBUauOWiAZlCyG5MHUwskrp1XjX4NBxoPGYjgGmx5wvMpZgU4WPCtxngKvm6qhrCKKYkUtjHrqqAWSQakHJlNNXjmtGvt9/jV50BhsesBpVU4POiMX05biKfgUiCIQRaqoVUYzIHkotWDycGoh1cKqNe3PaV+Hfw8eND2FEwHHoDNTOwWeuuRANIgRrcKo56aKgGRQ8mBq4eQhtWJ6r8G/B3tf/l70gDNyL61AZyfGU+ApEA1BFMEoUketQvJQ6sGphVQPVj2o9ODSQsbDpqdwIpUzg06Bpy7XQbQLo0gh9ZRSC6gepLLGv4bee2jvw0jhHEOnwFNXLGCUAZJXSj04zUCVAUtP1bSwyQCnoFNXbEE0gVEWSD0ojeDUMx4iEVB6ZvS+7L5kgXMCnQJPXZ7BKFJHIyh5MM0AtWva19e7B6P7FQKnoFNXzEEUwGimkGZgemGiezBVOIvQKfDUFXdAaqE0A9ML076/2f0q4NSVuDBKQikC1KlZeW87n03NCHUlHpA24XTFHN6veuLq6v5QxompJ6kuBaYCTV3qSkxQ1UjG7/X/ARNK1XoUd5n1AAAAAElFTkSuQmCC";
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-big-wheel/vue-big-wheel.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vue_big_wheelvue_type_script_lang_js_ = ({
  name: 'vueBigWheel',
  props: {
    prizeList: {
      //奖品列表
      type: Array,
      required: true
    },
    colors: {
      // 奖品区块对应背景颜色
      type: Array,
      default: function _default() {
        return ["#F47F45", "#FFA468"];
      },
      validator: function validator(value) {
        return value.length == 2;
      }
    },
    transitionDuration: {
      // 旋转动画时间 单位s
      type: Number,
      default: function _default() {
        return 8;
      }
    },
    fontColor: {
      // 奖品字体颜色
      type: String,
      default: function _default() {
        return '#7D2A00';
      }
    },
    fontSize: {
      // 奖品文字的大小
      type: String,
      default: function _default() {
        return '18px';
      }
    },
    fontFamily: {
      // 奖品文字的字体
      type: String,
      default: function _default() {
        return 'Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif';
      }
    },
    goBtnImg: {
      // 开始按钮图片地址
      type: String,
      default: function _default() {
        return BtnImg;
      }
    },
    goClassName: {
      // 开始按钮自定义类名
      type: String
    },
    strKey: {
      // 奖品名称所对应的key
      type: String,
      required: true
    },
    strMaxLength: {
      // 奖品文字总长度限制
      type: Number,
      default: function _default() {
        return 0;
      }
    },
    strLineLength: {
      // 奖品文字需要多行情况下第一行文字长度
      type: Number,
      default: function _default() {
        return 0;
      }
    }
  },
  data: function data() {
    return {
      startAngle: 0,
      //开始角度
      outsideRadius: 180,
      //转盘外圆的半径
      insideRadius: 10,
      //转盘内圆的半径
      textRadius: 140,
      //转盘奖品位置距离圆心的距离
      isOnRotate: false,
      // 是否正在旋转，false 否
      stayIndex: 0,
      // 当前停留在那个奖品的序号
      targetAngle: 0 // 旋转到奖品目标需要的角度

    };
  },
  computed: {
    // 根据奖品列表计算canvas旋转角度，保持让启动按钮指针在奖品分区中间
    canvasAngle: function canvasAngle() {
      var _value = this.prizeList.length;

      if (_value % 4 != 0) {
        return 0;
      } else {
        var _a = _value / 4;

        return _a % 2 == 0 ? 45 / _a : 45;
      }
    }
  },
  mounted: function mounted() {
    this._drawWheelCanvas();
  },
  methods: {
    /**
     * 开始旋转
     * count: Number 总共多少个奖品
     * targetIndex: Number 目标奖品序号
     */
    rotateFunc: function rotateFunc(targetIndex) {
      var _this2 = this;

      var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.prizeList.length;

      var _baseAngle = 360 / count;

      var _angles;

      if (this.targetAngle == 0) {
        // 第一次旋转角度 = 270度 - (停留的序号-目标序号)*每个奖品区间角度 - 每个奖品区间角度的一半 - canvas自身旋转的读书 
        _angles = 360 * 3 / 4 - (targetIndex - this.stayIndex) * _baseAngle - _baseAngle / 2 - this.canvasAngle;
      } else {
        // 后续继续旋转 就只需要计算停留的位置与目标位置的角度
        _angles = -(targetIndex - this.stayIndex) * _baseAngle;
      }

      this.stayIndex = targetIndex;
      this.targetAngle += _angles + 360 * 8; // 转八圈 圈数越多，转的越快

      setTimeout(function () {
        _this2.isOnRotate = false;

        _this2.$emit('on-over');
      }, this.transitionDuration * 1000 + 100);
    },
    // 点击go按钮
    _onGo: function _onGo(event) {
      var _this = this;

      if (_this.isOnRotate) return;
      _this.isOnRotate = true;

      _this.$emit('go-click', event);
    },
    // 渲染转盘
    _drawWheelCanvas: function _drawWheelCanvas() {
      // canvasAPI文档在线查看地址https://www.canvasapi.cn/CanvasRenderingContext2D/
      var _this = this;

      var canvas = _this.$refs.wheelCanvas;
      var ctx = canvas.getContext("2d"); //根据奖品个数计算圆周角度

      var arc = Math.PI / (_this.prizeList.length / 2);
      var canvasW = canvas.width; // 画板的高度

      var canvasH = canvas.height; // 画板的宽度
      //在给定矩形内清空一个矩形

      ctx.clearRect(0, 0, canvasW, canvasH); //strokeStyle 绘制颜色

      ctx.strokeStyle = "#FFBE04"; // 设置描边颜色
      //font 画布上文本内容的当前字体属性
      // 整个画板会跟着放大缩小 字和图形都跟着被放大缩小  所以不需要rem单位
      // let _fontSize = _this.fontSize
      // if(_fontSize.includes('rem')) {
      //   // debugger
      //   // 获取html元素字体大小 得知1rem等于多少px
      //   let _rootSize = getComputedStyle(document.querySelector('html'))['font-size']
      //   _rootSize = _rootSize.slice(0, _rootSize.indexOf('px'))
      //   let _size = _fontSize.slice(0, _fontSize.indexOf('rem'))
      //   _fontSize = Number(_size) * Number(_rootSize) + 'px'
      // }

      ctx.font = "".concat(_this.fontSize, " ").concat(_this.fontFamily); // 注意，开始画的位置是从0°角的位置开始画的。也就是水平向右的方向。
      // 画具体内容

      var length = _this.prizeList.length;

      for (var i = 0; i < length; i++) {
        // 当前的角度
        var angle = _this.startAngle + i * arc; // 每个奖品区块背景填充颜色

        ctx.fillStyle = _this.colors[i % 2]; // 开始画内容

        ctx.beginPath();
        /*
         * 画圆弧，和IOS的Quartz2D类似
         * context.arc(x,y,r,sAngle,eAngle,counterclockwise);
         * x :圆的中心点x
         * y :圆的中心点x
         * sAngle,eAngle :起始角度、结束角度
         * counterclockwise : 绘制方向,可选，False = 顺时针，true = 逆时针
         * */

        ctx.arc(canvasW * 0.5, canvasH * 0.5, _this.outsideRadius, angle, angle + arc, false);
        ctx.arc(canvasW * 0.5, canvasH * 0.5, _this.insideRadius, angle + arc, angle, true);
        ctx.stroke();
        ctx.fill(); //保存画布的状态，和图形上下文栈类似，后面可以Restore还原状态（坐标还原为当前的0，0），

        ctx.save();
        /*----绘制奖品内容*/

        ctx.fillStyle = _this.fontColor;

        var rewardName = _this._limit(_this.prizeList[i][_this.strKey], _this.strMaxLength);

        var line_height = 17; // translate方法重新映射画布上的 (0,0) 位置

        var translateX = canvasW * 0.5 + Math.cos(angle + arc / 2) * _this.textRadius;

        var translateY = canvasH * 0.5 + Math.sin(angle + arc / 2) * _this.textRadius;

        ctx.translate(translateX, translateY); // rotate方法旋转当前的绘图，因为文字适合当前扇形中心线垂直的！
        // angle，当前扇形自身旋转的角度 +  arc / 2 中心线多旋转的角度  + 垂直的角度90°

        ctx.rotate(angle + arc / 2 + Math.PI / 2);

        if (rewardName.length > _this.strLineLength && _this.strLineLength != 0) {
          rewardName = rewardName.substring(0, _this.strLineLength) + "||" + rewardName.substring(_this.strLineLength);
          var rewardNames = rewardName.split("||");

          for (var j = 0; j < rewardNames.length; j++) {
            ctx.fillText(rewardNames[j], -ctx.measureText(rewardNames[j]).width / 2, j * line_height);
          }
        } else {
          ctx.fillText(rewardName, -ctx.measureText(rewardName).width / 2, 0);
        } //还原画板的状态到上一个save()状态之前


        ctx.restore();
        /*----绘制奖品结束----*/
      }
    },

    /**
     * 限定字数溢出...
     * value 字符串
     * maxLength 限制长度 包括...
     * 如：'幸运大转盘',限制3个长度，返回就是'幸运...'
     */
    _limit: function _limit(value) {
      var maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (!value || maxLength == 0) return value;
      return value.length > maxLength ? value.slice(0, maxLength - 1) + '...' : value;
    }
  }
});
// CONCATENATED MODULE: ./src/components/vue-big-wheel/vue-big-wheel.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_big_wheel_vue_big_wheelvue_type_script_lang_js_ = (vue_big_wheelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/vue-big-wheel/vue-big-wheel.vue?vue&type=style&index=0&id=2978a75e&lang=scss&scoped=true&
var vue_big_wheelvue_type_style_index_0_id_2978a75e_lang_scss_scoped_true_ = __webpack_require__("c658");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/vue-big-wheel/vue-big-wheel.vue






/* normalize component */

var component = normalizeComponent(
  vue_big_wheel_vue_big_wheelvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2978a75e",
  null
  
)

/* harmony default export */ var vue_big_wheel = (component.exports);
// CONCATENATED MODULE: ./src/components/vue-big-wheel/index.js

/* harmony default export */ var components_vue_big_wheel = (vue_big_wheel);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components_vue_big_wheel);



/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ })

/******/ });
});
//# sourceMappingURL=vueBigWheel.umd.js.map