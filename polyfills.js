(self["webpackChunkdraw_melody"] = self["webpackChunkdraw_melody"] || []).push([["polyfills"],{

/***/ 7435:
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js */ 64924);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ 22115);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
window.global = window;
global.Buffer = global.Buffer || (__webpack_require__(/*! buffer */ 13195).Buffer);
global.process = global.process || __webpack_require__(/*! process */ 53217);
global.__dirname = '/';
const Helvetica = __webpack_require__(/*! pdfkit/js/data/Helvetica.afm */ 95805);

fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync('data/Helvetica.afm', Helvetica);
/***************************************************************************************************
 * APPLICATION IMPORTS
 */

/***/ }),

/***/ 82173:
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
  var len = b64.length;
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=');
  if (validLen === -1) validLen = len;
  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
}

// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
  var curByte = 0;

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
  var i;
  for (i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 0xFF;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }
  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 0xFF;
  }
  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }
  return arr;
}
function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
    output.push(tripletToBase64(tmp));
  }
  return output.join('');
}
function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
  }
  return parts.join('');
}

/***/ }),

/***/ 13195:
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



const base64 = __webpack_require__(/*! base64-js */ 82173);
const ieee754 = __webpack_require__(/*! ieee754 */ 54920);
const customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' // eslint-disable-line dot-notation
? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
: null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') {
  console.error('This browser lacks typed array (Uint8Array) support which is required by ' + '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.');
}
function typedArraySupport() {
  // Can typed array instances can be augmented?
  try {
    const arr = new Uint8Array(1);
    const proto = {
      foo: function () {
        return 42;
      }
    };
    Object.setPrototypeOf(proto, Uint8Array.prototype);
    Object.setPrototypeOf(arr, proto);
    return arr.foo() === 42;
  } catch (e) {
    return false;
  }
}
Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined;
    return this.buffer;
  }
});
Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined;
    return this.byteOffset;
  }
});
function createBuffer(length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"');
  }
  // Return an augmented `Uint8Array` instance
  const buf = new Uint8Array(length);
  Object.setPrototypeOf(buf, Buffer.prototype);
  return buf;
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer(arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError('The "string" argument must be of type string. Received type number');
    }
    return allocUnsafe(arg);
  }
  return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192; // not used by this implementation

function from(value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset);
  }
  if (ArrayBuffer.isView(value)) {
    return fromArrayView(value);
  }
  if (value == null) {
    throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof value);
  }
  if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
    return fromArrayBuffer(value, encodingOrOffset, length);
  }
  if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length);
  }
  if (typeof value === 'number') {
    throw new TypeError('The "value" argument must not be of type number. Received type number');
  }
  const valueOf = value.valueOf && value.valueOf();
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length);
  }
  const b = fromObject(value);
  if (b) return b;
  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
  }
  throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof value);
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length);
};

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number');
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"');
  }
}
function alloc(size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(size);
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
  }
  return createBuffer(size);
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
  assertSize(size);
  return createBuffer(size < 0 ? 0 : checked(size) | 0);
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size);
};
function fromString(string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }
  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding);
  }
  const length = byteLength(string, encoding) | 0;
  let buf = createBuffer(length);
  const actual = buf.write(string, encoding);
  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
  }
  return buf;
}
function fromArrayLike(array) {
  const length = array.length < 0 ? 0 : checked(array.length) | 0;
  const buf = createBuffer(length);
  for (let i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255;
  }
  return buf;
}
function fromArrayView(arrayView) {
  if (isInstance(arrayView, Uint8Array)) {
    const copy = new Uint8Array(arrayView);
    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
  }
  return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds');
  }
  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds');
  }
  let buf;
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array);
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset);
  } else {
    buf = new Uint8Array(array, byteOffset, length);
  }

  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(buf, Buffer.prototype);
  return buf;
}
function fromObject(obj) {
  if (Buffer.isBuffer(obj)) {
    const len = checked(obj.length) | 0;
    const buf = createBuffer(len);
    if (buf.length === 0) {
      return buf;
    }
    obj.copy(buf, 0, 0, len);
    return buf;
  }
  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0);
    }
    return fromArrayLike(obj);
  }
  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data);
  }
}
function checked(length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes');
  }
  return length | 0;
}
function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }
  return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
  return b != null && b._isBuffer === true && b !== Buffer.prototype; // so Buffer.isBuffer(Buffer.prototype) will be false
};

Buffer.compare = function compare(a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
  }
  if (a === b) return 0;
  let x = a.length;
  let y = b.length;
  for (let i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }
  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;
    default:
      return false;
  }
};
Buffer.concat = function concat(list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }
  if (list.length === 0) {
    return Buffer.alloc(0);
  }
  let i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }
  const buffer = Buffer.allocUnsafe(length);
  let pos = 0;
  for (i = 0; i < list.length; ++i) {
    let buf = list[i];
    if (isInstance(buf, Uint8Array)) {
      if (pos + buf.length > buffer.length) {
        if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
        buf.copy(buffer, pos);
      } else {
        Uint8Array.prototype.set.call(buffer, buf, pos);
      }
    } else if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    } else {
      buf.copy(buffer, pos);
    }
    pos += buf.length;
  }
  return buffer;
};
function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== 'string') {
    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + 'Received type ' + typeof string);
  }
  const len = string.length;
  const mustMatch = arguments.length > 2 && arguments[2] === true;
  if (!mustMatch && len === 0) return 0;

  // Use a for loop to avoid recursion
  let loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length;
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;
      case 'hex':
        return len >>> 1;
      case 'base64':
        return base64ToBytes(string).length;
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length; // assume utf8
        }

        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
  let loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return '';
  }
  if (end === undefined || end > this.length) {
    end = this.length;
  }
  if (end <= 0) {
    return '';
  }

  // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;
  if (end <= start) {
    return '';
  }
  if (!encoding) encoding = 'utf8';
  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);
      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);
      case 'ascii':
        return asciiSlice(this, start, end);
      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);
      case 'base64':
        return base64Slice(this, start, end);
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);
      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
  const i = b[n];
  b[n] = b[m];
  b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
  const len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }
  for (let i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this;
};
Buffer.prototype.swap32 = function swap32() {
  const len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }
  for (let i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this;
};
Buffer.prototype.swap64 = function swap64() {
  const len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }
  for (let i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this;
};
Buffer.prototype.toString = function toString() {
  const length = this.length;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
  let str = '';
  const max = exports.INSPECT_MAX_BYTES;
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
  if (this.length > max) str += ' ... ';
  return '<Buffer ' + str + '>';
};
if (customInspectSymbol) {
  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
}
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength);
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + 'Received type ' + typeof target);
  }
  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }
  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }
  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }
  if (thisStart >= thisEnd) {
    return -1;
  }
  if (start >= end) {
    return 1;
  }
  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target) return 0;
  let x = thisEnd - thisStart;
  let y = end - start;
  const len = Math.min(x, y);
  const thisCopy = this.slice(thisStart, thisEnd);
  const targetCopy = target.slice(start, end);
  for (let i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }
  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1;

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset; // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }
  throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  let indexSize = 1;
  let arrLength = arr.length;
  let valLength = val.length;
  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }
  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }
  let i;
  if (dir) {
    let foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      let found = true;
      for (let j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }
      if (found) return i;
    }
  }
  return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  const remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }
  const strLen = string.length;
  if (length > strLen / 2) {
    length = strLen / 2;
  }
  let i;
  for (i = 0; i < length; ++i) {
    const parsed = parseInt(string.substr(i * 2, 2), 16);
    if (numberIsNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }
  return i;
}
function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
    // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0;
    if (isFinite(length)) {
      length = length >>> 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }
  const remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;
  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }
  if (!encoding) encoding = 'utf8';
  let loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);
      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);
      case 'ascii':
      case 'latin1':
      case 'binary':
        return asciiWrite(this, string, offset, length);
      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);
      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};
Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};
function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}
function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  const res = [];
  let i = start;
  while (i < end) {
    const firstByte = buf[i];
    let codePoint = null;
    let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
    if (i + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint;
      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }
    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }
    res.push(codePoint);
    i += bytesPerSequence;
  }
  return decodeCodePointsArray(res);
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
  const len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  let res = '';
  let i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}
function asciiSlice(buf, start, end) {
  let ret = '';
  end = Math.min(buf.length, end);
  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret;
}
function latin1Slice(buf, start, end) {
  let ret = '';
  end = Math.min(buf.length, end);
  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}
function hexSlice(buf, start, end) {
  const len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  let out = '';
  for (let i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]];
  }
  return out;
}
function utf16leSlice(buf, start, end) {
  const bytes = buf.slice(start, end);
  let res = '';
  // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
  for (let i = 0; i < bytes.length - 1; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}
Buffer.prototype.slice = function slice(start, end) {
  const len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;
  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }
  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }
  if (end < start) end = start;
  const newBuf = this.subarray(start, end);
  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(newBuf, Buffer.prototype);
  return newBuf;
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  let val = this[offset];
  let mul = 1;
  let i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }
  let val = this[offset + --byteLength];
  let mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }
  return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
  offset = offset >>> 0;
  validateNumber(offset, 'offset');
  const first = this[offset];
  const last = this[offset + 7];
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8);
  }
  const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
  const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
  return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
  offset = offset >>> 0;
  validateNumber(offset, 'offset');
  const first = this[offset];
  const last = this[offset + 7];
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8);
  }
  const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
  const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
  return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  let val = this[offset];
  let mul = 1;
  let i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  let i = byteLength;
  let mul = 1;
  let val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  const val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  const val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
  offset = offset >>> 0;
  validateNumber(offset, 'offset');
  const first = this[offset];
  const last = this[offset + 7];
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8);
  }
  const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24); // Overflow

  return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
  offset = offset >>> 0;
  validateNumber(offset, 'offset');
  const first = this[offset];
  const last = this[offset + 7];
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8);
  }
  const val = (first << 24) +
  // Overflow
  this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
  return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }
  let mul = 1;
  let i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }
  return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }
  let i = byteLength - 1;
  let mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }
  return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  this[offset] = value & 0xff;
  return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  this[offset] = value & 0xff;
  this[offset + 1] = value >>> 8;
  return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  this[offset] = value >>> 8;
  this[offset + 1] = value & 0xff;
  return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  this[offset + 3] = value >>> 24;
  this[offset + 2] = value >>> 16;
  this[offset + 1] = value >>> 8;
  this[offset] = value & 0xff;
  return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  this[offset] = value >>> 24;
  this[offset + 1] = value >>> 16;
  this[offset + 2] = value >>> 8;
  this[offset + 3] = value & 0xff;
  return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7);
  let lo = Number(value & BigInt(0xffffffff));
  buf[offset++] = lo;
  lo = lo >> 8;
  buf[offset++] = lo;
  lo = lo >> 8;
  buf[offset++] = lo;
  lo = lo >> 8;
  buf[offset++] = lo;
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
  buf[offset++] = hi;
  hi = hi >> 8;
  buf[offset++] = hi;
  hi = hi >> 8;
  buf[offset++] = hi;
  hi = hi >> 8;
  buf[offset++] = hi;
  return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7);
  let lo = Number(value & BigInt(0xffffffff));
  buf[offset + 7] = lo;
  lo = lo >> 8;
  buf[offset + 6] = lo;
  lo = lo >> 8;
  buf[offset + 5] = lo;
  lo = lo >> 8;
  buf[offset + 4] = lo;
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
  buf[offset + 3] = hi;
  hi = hi >> 8;
  buf[offset + 2] = hi;
  hi = hi >> 8;
  buf[offset + 1] = hi;
  hi = hi >> 8;
  buf[offset] = hi;
  return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) {
    const limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }
  let i = 0;
  let mul = 1;
  let sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }
  return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) {
    const limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }
  let i = byteLength - 1;
  let mul = 1;
  let sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }
  return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  this[offset] = value & 0xff;
  this[offset + 1] = value >>> 8;
  return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  this[offset] = value >>> 8;
  this[offset + 1] = value & 0xff;
  return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  this[offset] = value & 0xff;
  this[offset + 1] = value >>> 8;
  this[offset + 2] = value >>> 16;
  this[offset + 3] = value >>> 24;
  return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  this[offset] = value >>> 24;
  this[offset + 1] = value >>> 16;
  this[offset + 2] = value >>> 8;
  this[offset + 3] = value & 0xff;
  return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0;

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
  if (end < 0) throw new RangeError('sourceEnd out of bounds');

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }
  const len = end - start;
  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
  }
  return len;
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
    if (val.length === 1) {
      const code = val.charCodeAt(0);
      if (encoding === 'utf8' && code < 128 || encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code;
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  } else if (typeof val === 'boolean') {
    val = Number(val);
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }
  if (end <= start) {
    return this;
  }
  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val) val = 0;
  let i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
    const len = bytes.length;
    if (len === 0) {
      throw new TypeError('The value "' + val + '" is invalid for argument "value"');
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }
  return this;
};

// CUSTOM ERRORS
// =============

// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
  errors[sym] = class NodeError extends Base {
    constructor() {
      super();
      Object.defineProperty(this, 'message', {
        value: getMessage.apply(this, arguments),
        writable: true,
        configurable: true
      });

      // Add the error code to the name to include it in the stack trace.
      this.name = `${this.name} [${sym}]`;
      // Access the stack to generate the error message including the error code
      // from the name.
      this.stack; // eslint-disable-line no-unused-expressions
      // Reset the name to the actual name.
      delete this.name;
    }
    get code() {
      return sym;
    }
    set code(value) {
      Object.defineProperty(this, 'code', {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      });
    }
    toString() {
      return `${this.name} [${sym}]: ${this.message}`;
    }
  };
}
E('ERR_BUFFER_OUT_OF_BOUNDS', function (name) {
  if (name) {
    return `${name} is outside of buffer bounds`;
  }
  return 'Attempt to access memory outside buffer bounds';
}, RangeError);
E('ERR_INVALID_ARG_TYPE', function (name, actual) {
  return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E('ERR_OUT_OF_RANGE', function (str, range, input) {
  let msg = `The value of "${str}" is out of range.`;
  let received = input;
  if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
    received = addNumericalSeparator(String(input));
  } else if (typeof input === 'bigint') {
    received = String(input);
    if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
      received = addNumericalSeparator(received);
    }
    received += 'n';
  }
  msg += ` It must be ${range}. Received ${received}`;
  return msg;
}, RangeError);
function addNumericalSeparator(val) {
  let res = '';
  let i = val.length;
  const start = val[0] === '-' ? 1 : 0;
  for (; i >= start + 4; i -= 3) {
    res = `_${val.slice(i - 3, i)}${res}`;
  }
  return `${val.slice(0, i)}${res}`;
}

// CHECK FUNCTIONS
// ===============

function checkBounds(buf, offset, byteLength) {
  validateNumber(offset, 'offset');
  if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
    boundsError(offset, buf.length - (byteLength + 1));
  }
}
function checkIntBI(value, min, max, buf, offset, byteLength) {
  if (value > max || value < min) {
    const n = typeof min === 'bigint' ? 'n' : '';
    let range;
    if (byteLength > 3) {
      if (min === 0 || min === BigInt(0)) {
        range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
      } else {
        range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
      }
    } else {
      range = `>= ${min}${n} and <= ${max}${n}`;
    }
    throw new errors.ERR_OUT_OF_RANGE('value', range, value);
  }
  checkBounds(buf, offset, byteLength);
}
function validateNumber(value, name) {
  if (typeof value !== 'number') {
    throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value);
  }
}
function boundsError(value, length, type) {
  if (Math.floor(value) !== value) {
    validateNumber(value, type);
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value);
  }
  if (length < 0) {
    throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
  }
  throw new errors.ERR_OUT_OF_RANGE(type || 'offset', `>= ${type ? 1 : 0} and <= ${length}`, value);
}

// HELPER FUNCTIONS
// ================

const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0];
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return '';
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str;
}
function utf8ToBytes(string, units) {
  units = units || Infinity;
  let codePoint;
  const length = string.length;
  let leadSurrogate = null;
  const bytes = [];
  for (let i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        }

        // valid lead
        leadSurrogate = codePoint;
        continue;
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }
    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }
  return bytes;
}
function asciiToBytes(str) {
  const byteArray = [];
  for (let i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray;
}
function utf16leToBytes(str, units) {
  let c, hi, lo;
  const byteArray = [];
  for (let i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }
  return byteArray;
}
function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
  let i;
  for (i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }
  return i;
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
  return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
  // For IE11 support
  return obj !== obj; // eslint-disable-line no-self-compare
}

// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function () {
  const alphabet = '0123456789abcdef';
  const table = new Array(256);
  for (let i = 0; i < 16; ++i) {
    const i16 = i * 16;
    for (let j = 0; j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j];
    }
  }
  return table;
}();

// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
  return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
  throw new Error('BigInt not supported');
}

/***/ }),

/***/ 54920:
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);
  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
  buffer[offset + i - d] |= s * 128;
};

/***/ }),

/***/ 22115:
/*!**********************************************!*\
  !*** ./node_modules/pdfkit/js/virtual-fs.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ 13195)["Buffer"];


var VirtualFileSystem = /*#__PURE__*/function () {
  function VirtualFileSystem() {
    this.fileData = {};
  }
  var _proto = VirtualFileSystem.prototype;
  _proto.readFileSync = function readFileSync(fileName, options) {
    if (options === void 0) {
      options = {};
    }
    var encoding = typeof options === 'string' ? options : options.encoding;
    var virtualFileName = normalizeFilename(fileName);
    var data = this.fileData[virtualFileName];
    if (data == null) {
      throw new Error("File '" + virtualFileName + "' not found in virtual file system");
    }
    if (encoding) {
      // return a string
      return typeof data === 'string' ? data : data.toString(encoding);
    }
    return Buffer.from(data, typeof data === 'string' ? 'base64' : undefined);
  };
  _proto.writeFileSync = function writeFileSync(fileName, content) {
    this.fileData[normalizeFilename(fileName)] = content;
  };
  _proto.bindFileData = function bindFileData(data, options) {
    if (data === void 0) {
      data = {};
    }
    if (options === void 0) {
      options = {};
    }
    if (options.reset) {
      this.fileData = data;
    } else {
      Object.assign(this.fileData, data);
    }
  };
  return VirtualFileSystem;
}();
function normalizeFilename(fileName) {
  if (fileName.indexOf(__dirname) === 0) {
    fileName = fileName.substring(__dirname.length);
  }
  if (fileName.indexOf('/') === 0) {
    fileName = fileName.substring(1);
  }
  return fileName;
}
var virtualFs = new VirtualFileSystem();
module.exports = virtualFs;

/***/ }),

/***/ 53217:
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}
(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }
  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  }
  // if setTimeout wasn't available but was latter defined
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  }
  // if clearTimeout wasn't available but was latter defined
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
};

// v8 likes predictible objects
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function (name) {
  return [];
};
process.binding = function (name) {
  throw new Error('process.binding is not supported');
};
process.cwd = function () {
  return '/';
};
process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};
process.umask = function () {
  return 0;
};

/***/ }),

/***/ 64924:
/*!***********************************************!*\
  !*** ./node_modules/zone.js/fesm2015/zone.js ***!
  \***********************************************/
/***/ (() => {

"use strict";


/**
 * @license Angular v14.2.0-next.0
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (global) {
  const performance = global['performance'];
  function mark(name) {
    performance && performance['mark'] && performance['mark'](name);
  }
  function performanceMeasure(name, label) {
    performance && performance['measure'] && performance['measure'](name, label);
  }
  mark('Zone');
  // Initialize before it's accessed below.
  // __Zone_symbol_prefix global can be used to override the default zone
  // symbol prefix with a custom one if needed.
  const symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';
  function __symbol__(name) {
    return symbolPrefix + name;
  }
  const checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;
  if (global['Zone']) {
    // if global['Zone'] already exists (maybe zone.js was already loaded or
    // some other lib also registered a global object named Zone), we may need
    // to throw an error, but sometimes user may not want this error.
    // For example,
    // we have two web pages, page1 includes zone.js, page2 doesn't.
    // and the 1st time user load page1 and page2, everything work fine,
    // but when user load page2 again, error occurs because global['Zone'] already exists.
    // so we add a flag to let user choose whether to throw this error or not.
    // By default, if existing Zone is from zone.js, we will not throw the error.
    if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
      throw new Error('Zone already loaded.');
    } else {
      return global['Zone'];
    }
  }
  class Zone {
    constructor(parent, zoneSpec) {
      this._parent = parent;
      this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
      this._properties = zoneSpec && zoneSpec.properties || {};
      this._zoneDelegate = new _ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
    }
    static assertZonePatched() {
      if (global['Promise'] !== patches['ZoneAwarePromise']) {
        throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
      }
    }
    static get root() {
      let zone = Zone.current;
      while (zone.parent) {
        zone = zone.parent;
      }
      return zone;
    }
    static get current() {
      return _currentZoneFrame.zone;
    }
    static get currentTask() {
      return _currentTask;
    }
    // tslint:disable-next-line:require-internal-with-underscore
    static __load_patch(name, fn, ignoreDuplicate = false) {
      if (patches.hasOwnProperty(name)) {
        // `checkDuplicate` option is defined from global variable
        // so it works for all modules.
        // `ignoreDuplicate` can work for the specified module
        if (!ignoreDuplicate && checkDuplicate) {
          throw Error('Already loaded patch: ' + name);
        }
      } else if (!global['__Zone_disable_' + name]) {
        const perfName = 'Zone:' + name;
        mark(perfName);
        patches[name] = fn(global, Zone, _api);
        performanceMeasure(perfName, perfName);
      }
    }
    get parent() {
      return this._parent;
    }
    get name() {
      return this._name;
    }
    get(key) {
      const zone = this.getZoneWith(key);
      if (zone) return zone._properties[key];
    }
    getZoneWith(key) {
      let current = this;
      while (current) {
        if (current._properties.hasOwnProperty(key)) {
          return current;
        }
        current = current._parent;
      }
      return null;
    }
    fork(zoneSpec) {
      if (!zoneSpec) throw new Error('ZoneSpec required!');
      return this._zoneDelegate.fork(this, zoneSpec);
    }
    wrap(callback, source) {
      if (typeof callback !== 'function') {
        throw new Error('Expecting function got: ' + callback);
      }
      const _callback = this._zoneDelegate.intercept(this, callback, source);
      const zone = this;
      return function () {
        return zone.runGuarded(_callback, this, arguments, source);
      };
    }
    run(callback, applyThis, applyArgs, source) {
      _currentZoneFrame = {
        parent: _currentZoneFrame,
        zone: this
      };
      try {
        return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
      } finally {
        _currentZoneFrame = _currentZoneFrame.parent;
      }
    }
    runGuarded(callback, applyThis = null, applyArgs, source) {
      _currentZoneFrame = {
        parent: _currentZoneFrame,
        zone: this
      };
      try {
        try {
          return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
        } catch (error) {
          if (this._zoneDelegate.handleError(this, error)) {
            throw error;
          }
        }
      } finally {
        _currentZoneFrame = _currentZoneFrame.parent;
      }
    }
    runTask(task, applyThis, applyArgs) {
      if (task.zone != this) {
        throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
      }
      // https://github.com/angular/zone.js/issues/778, sometimes eventTask
      // will run in notScheduled(canceled) state, we should not try to
      // run such kind of task but just return
      if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
        return;
      }
      const reEntryGuard = task.state != running;
      reEntryGuard && task._transitionTo(running, scheduled);
      task.runCount++;
      const previousTask = _currentTask;
      _currentTask = task;
      _currentZoneFrame = {
        parent: _currentZoneFrame,
        zone: this
      };
      try {
        if (task.type == macroTask && task.data && !task.data.isPeriodic) {
          task.cancelFn = undefined;
        }
        try {
          return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
        } catch (error) {
          if (this._zoneDelegate.handleError(this, error)) {
            throw error;
          }
        }
      } finally {
        // if the task's state is notScheduled or unknown, then it has already been cancelled
        // we should not reset the state to scheduled
        if (task.state !== notScheduled && task.state !== unknown) {
          if (task.type == eventTask || task.data && task.data.isPeriodic) {
            reEntryGuard && task._transitionTo(scheduled, running);
          } else {
            task.runCount = 0;
            this._updateTaskCount(task, -1);
            reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
          }
        }
        _currentZoneFrame = _currentZoneFrame.parent;
        _currentTask = previousTask;
      }
    }
    scheduleTask(task) {
      if (task.zone && task.zone !== this) {
        // check if the task was rescheduled, the newZone
        // should not be the children of the original zone
        let newZone = this;
        while (newZone) {
          if (newZone === task.zone) {
            throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${task.zone.name}`);
          }
          newZone = newZone.parent;
        }
      }
      task._transitionTo(scheduling, notScheduled);
      const zoneDelegates = [];
      task._zoneDelegates = zoneDelegates;
      task._zone = this;
      try {
        task = this._zoneDelegate.scheduleTask(this, task);
      } catch (err) {
        // should set task's state to unknown when scheduleTask throw error
        // because the err may from reschedule, so the fromState maybe notScheduled
        task._transitionTo(unknown, scheduling, notScheduled);
        // TODO: @JiaLiPassion, should we check the result from handleError?
        this._zoneDelegate.handleError(this, err);
        throw err;
      }
      if (task._zoneDelegates === zoneDelegates) {
        // we have to check because internally the delegate can reschedule the task.
        this._updateTaskCount(task, 1);
      }
      if (task.state == scheduling) {
        task._transitionTo(scheduled, scheduling);
      }
      return task;
    }
    scheduleMicroTask(source, callback, data, customSchedule) {
      return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
    }
    scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
      return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
    }
    scheduleEventTask(source, callback, data, customSchedule, customCancel) {
      return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
    }
    cancelTask(task) {
      if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
      task._transitionTo(canceling, scheduled, running);
      try {
        this._zoneDelegate.cancelTask(this, task);
      } catch (err) {
        // if error occurs when cancelTask, transit the state to unknown
        task._transitionTo(unknown, canceling);
        this._zoneDelegate.handleError(this, err);
        throw err;
      }
      this._updateTaskCount(task, -1);
      task._transitionTo(notScheduled, canceling);
      task.runCount = 0;
      return task;
    }
    _updateTaskCount(task, count) {
      const zoneDelegates = task._zoneDelegates;
      if (count == -1) {
        task._zoneDelegates = null;
      }
      for (let i = 0; i < zoneDelegates.length; i++) {
        zoneDelegates[i]._updateTaskCount(task.type, count);
      }
    }
  }
  // tslint:disable-next-line:require-internal-with-underscore
  Zone.__symbol__ = __symbol__;
  const DELEGATE_ZS = {
    name: '',
    onHasTask: (delegate, _, target, hasTaskState) => delegate.hasTask(target, hasTaskState),
    onScheduleTask: (delegate, _, target, task) => delegate.scheduleTask(target, task),
    onInvokeTask: (delegate, _, target, task, applyThis, applyArgs) => delegate.invokeTask(target, task, applyThis, applyArgs),
    onCancelTask: (delegate, _, target, task) => delegate.cancelTask(target, task)
  };
  class _ZoneDelegate {
    constructor(zone, parentDelegate, zoneSpec) {
      this._taskCounts = {
        'microTask': 0,
        'macroTask': 0,
        'eventTask': 0
      };
      this.zone = zone;
      this._parentDelegate = parentDelegate;
      this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
      this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
      this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
      this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
      this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
      this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
      this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
      this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
      this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
      this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
      this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
      this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
      this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
      this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
      this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
      this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
      this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
      this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
      this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
      this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
      this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
      this._hasTaskZS = null;
      this._hasTaskDlgt = null;
      this._hasTaskDlgtOwner = null;
      this._hasTaskCurrZone = null;
      const zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
      const parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
      if (zoneSpecHasTask || parentHasTask) {
        // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
        // a case all task related interceptors must go through this ZD. We can't short circuit it.
        this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
        this._hasTaskDlgt = parentDelegate;
        this._hasTaskDlgtOwner = this;
        this._hasTaskCurrZone = zone;
        if (!zoneSpec.onScheduleTask) {
          this._scheduleTaskZS = DELEGATE_ZS;
          this._scheduleTaskDlgt = parentDelegate;
          this._scheduleTaskCurrZone = this.zone;
        }
        if (!zoneSpec.onInvokeTask) {
          this._invokeTaskZS = DELEGATE_ZS;
          this._invokeTaskDlgt = parentDelegate;
          this._invokeTaskCurrZone = this.zone;
        }
        if (!zoneSpec.onCancelTask) {
          this._cancelTaskZS = DELEGATE_ZS;
          this._cancelTaskDlgt = parentDelegate;
          this._cancelTaskCurrZone = this.zone;
        }
      }
    }
    fork(targetZone, zoneSpec) {
      return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
    }
    intercept(targetZone, callback, source) {
      return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
    }
    invoke(targetZone, callback, applyThis, applyArgs, source) {
      return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
    }
    handleError(targetZone, error) {
      return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
    }
    scheduleTask(targetZone, task) {
      let returnTask = task;
      if (this._scheduleTaskZS) {
        if (this._hasTaskZS) {
          returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
        }
        // clang-format off
        returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
        // clang-format on
        if (!returnTask) returnTask = task;
      } else {
        if (task.scheduleFn) {
          task.scheduleFn(task);
        } else if (task.type == microTask) {
          scheduleMicroTask(task);
        } else {
          throw new Error('Task is missing scheduleFn.');
        }
      }
      return returnTask;
    }
    invokeTask(targetZone, task, applyThis, applyArgs) {
      return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
    }
    cancelTask(targetZone, task) {
      let value;
      if (this._cancelTaskZS) {
        value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
      } else {
        if (!task.cancelFn) {
          throw Error('Task is not cancelable');
        }
        value = task.cancelFn(task);
      }
      return value;
    }
    hasTask(targetZone, isEmpty) {
      // hasTask should not throw error so other ZoneDelegate
      // can still trigger hasTask callback
      try {
        this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
      } catch (err) {
        this.handleError(targetZone, err);
      }
    }
    // tslint:disable-next-line:require-internal-with-underscore
    _updateTaskCount(type, count) {
      const counts = this._taskCounts;
      const prev = counts[type];
      const next = counts[type] = prev + count;
      if (next < 0) {
        throw new Error('More tasks executed then were scheduled.');
      }
      if (prev == 0 || next == 0) {
        const isEmpty = {
          microTask: counts['microTask'] > 0,
          macroTask: counts['macroTask'] > 0,
          eventTask: counts['eventTask'] > 0,
          change: type
        };
        this.hasTask(this.zone, isEmpty);
      }
    }
  }
  class ZoneTask {
    constructor(type, source, callback, options, scheduleFn, cancelFn) {
      // tslint:disable-next-line:require-internal-with-underscore
      this._zone = null;
      this.runCount = 0;
      // tslint:disable-next-line:require-internal-with-underscore
      this._zoneDelegates = null;
      // tslint:disable-next-line:require-internal-with-underscore
      this._state = 'notScheduled';
      this.type = type;
      this.source = source;
      this.data = options;
      this.scheduleFn = scheduleFn;
      this.cancelFn = cancelFn;
      if (!callback) {
        throw new Error('callback is not defined');
      }
      this.callback = callback;
      const self = this;
      // TODO: @JiaLiPassion options should have interface
      if (type === eventTask && options && options.useG) {
        this.invoke = ZoneTask.invokeTask;
      } else {
        this.invoke = function () {
          return ZoneTask.invokeTask.call(global, self, this, arguments);
        };
      }
    }
    static invokeTask(task, target, args) {
      if (!task) {
        task = this;
      }
      _numberOfNestedTaskFrames++;
      try {
        task.runCount++;
        return task.zone.runTask(task, target, args);
      } finally {
        if (_numberOfNestedTaskFrames == 1) {
          drainMicroTaskQueue();
        }
        _numberOfNestedTaskFrames--;
      }
    }
    get zone() {
      return this._zone;
    }
    get state() {
      return this._state;
    }
    cancelScheduleRequest() {
      this._transitionTo(notScheduled, scheduling);
    }
    // tslint:disable-next-line:require-internal-with-underscore
    _transitionTo(toState, fromState1, fromState2) {
      if (this._state === fromState1 || this._state === fromState2) {
        this._state = toState;
        if (toState == notScheduled) {
          this._zoneDelegates = null;
        }
      } else {
        throw new Error(`${this.type} '${this.source}': can not transition to '${toState}', expecting state '${fromState1}'${fromState2 ? ' or \'' + fromState2 + '\'' : ''}, was '${this._state}'.`);
      }
    }
    toString() {
      if (this.data && typeof this.data.handleId !== 'undefined') {
        return this.data.handleId.toString();
      } else {
        return Object.prototype.toString.call(this);
      }
    }
    // add toJSON method to prevent cyclic error when
    // call JSON.stringify(zoneTask)
    toJSON() {
      return {
        type: this.type,
        state: this.state,
        source: this.source,
        zone: this.zone.name,
        runCount: this.runCount
      };
    }
  }
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  ///  MICROTASK QUEUE
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  const symbolSetTimeout = __symbol__('setTimeout');
  const symbolPromise = __symbol__('Promise');
  const symbolThen = __symbol__('then');
  let _microTaskQueue = [];
  let _isDrainingMicrotaskQueue = false;
  let nativeMicroTaskQueuePromise;
  function nativeScheduleMicroTask(func) {
    if (!nativeMicroTaskQueuePromise) {
      if (global[symbolPromise]) {
        nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
      }
    }
    if (nativeMicroTaskQueuePromise) {
      let nativeThen = nativeMicroTaskQueuePromise[symbolThen];
      if (!nativeThen) {
        // native Promise is not patchable, we need to use `then` directly
        // issue 1078
        nativeThen = nativeMicroTaskQueuePromise['then'];
      }
      nativeThen.call(nativeMicroTaskQueuePromise, func);
    } else {
      global[symbolSetTimeout](func, 0);
    }
  }
  function scheduleMicroTask(task) {
    // if we are not running in any task, and there has not been anything scheduled
    // we must bootstrap the initial task creation by manually scheduling the drain
    if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
      // We are not running in Task, so we need to kickstart the microtask queue.
      nativeScheduleMicroTask(drainMicroTaskQueue);
    }
    task && _microTaskQueue.push(task);
  }
  function drainMicroTaskQueue() {
    if (!_isDrainingMicrotaskQueue) {
      _isDrainingMicrotaskQueue = true;
      while (_microTaskQueue.length) {
        const queue = _microTaskQueue;
        _microTaskQueue = [];
        for (let i = 0; i < queue.length; i++) {
          const task = queue[i];
          try {
            task.zone.runTask(task, null, null);
          } catch (error) {
            _api.onUnhandledError(error);
          }
        }
      }
      _api.microtaskDrainDone();
      _isDrainingMicrotaskQueue = false;
    }
  }
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  ///  BOOTSTRAP
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  const NO_ZONE = {
    name: 'NO ZONE'
  };
  const notScheduled = 'notScheduled',
    scheduling = 'scheduling',
    scheduled = 'scheduled',
    running = 'running',
    canceling = 'canceling',
    unknown = 'unknown';
  const microTask = 'microTask',
    macroTask = 'macroTask',
    eventTask = 'eventTask';
  const patches = {};
  const _api = {
    symbol: __symbol__,
    currentZoneFrame: () => _currentZoneFrame,
    onUnhandledError: noop,
    microtaskDrainDone: noop,
    scheduleMicroTask: scheduleMicroTask,
    showUncaughtError: () => !Zone[__symbol__('ignoreConsoleErrorUncaughtError')],
    patchEventTarget: () => [],
    patchOnProperties: noop,
    patchMethod: () => noop,
    bindArguments: () => [],
    patchThen: () => noop,
    patchMacroTask: () => noop,
    patchEventPrototype: () => noop,
    isIEOrEdge: () => false,
    getGlobalObjects: () => undefined,
    ObjectDefineProperty: () => noop,
    ObjectGetOwnPropertyDescriptor: () => undefined,
    ObjectCreate: () => undefined,
    ArraySlice: () => [],
    patchClass: () => noop,
    wrapWithCurrentZone: () => noop,
    filterProperties: () => [],
    attachOriginToPatched: () => noop,
    _redefineProperty: () => noop,
    patchCallbacks: () => noop,
    nativeScheduleMicroTask: nativeScheduleMicroTask
  };
  let _currentZoneFrame = {
    parent: null,
    zone: new Zone(null, null)
  };
  let _currentTask = null;
  let _numberOfNestedTaskFrames = 0;
  function noop() {}
  performanceMeasure('Zone', 'Zone');
  return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
/// <reference types="node"/>
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
const ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
const ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
const ObjectCreate = Object.create;
/** Array.prototype.slice */
const ArraySlice = Array.prototype.slice;
/** addEventListener string const */
const ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
const REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
const ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
const ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
const TRUE_STR = 'true';
/** false string const */
const FALSE_STR = 'false';
/** Zone symbol prefix string const. */
const ZONE_SYMBOL_PREFIX = Zone.__symbol__('');
function wrapWithCurrentZone(callback, source) {
  return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
  return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
const zoneSymbol = Zone.__symbol__;
const isWindowExists = typeof window !== 'undefined';
const internalWindow = isWindowExists ? window : undefined;
const _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
const REMOVE_ATTRIBUTE = 'removeAttribute';
function bindArguments(args, source) {
  for (let i = args.length - 1; i >= 0; i--) {
    if (typeof args[i] === 'function') {
      args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
    }
  }
  return args;
}
function patchPrototype(prototype, fnNames) {
  const source = prototype.constructor['name'];
  for (let i = 0; i < fnNames.length; i++) {
    const name = fnNames[i];
    const delegate = prototype[name];
    if (delegate) {
      const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);
      if (!isPropertyWritable(prototypeDesc)) {
        continue;
      }
      prototype[name] = (delegate => {
        const patched = function () {
          return delegate.apply(this, bindArguments(arguments, source + '.' + name));
        };
        attachOriginToPatched(patched, delegate);
        return patched;
      })(delegate);
    }
  }
}
function isPropertyWritable(propertyDesc) {
  if (!propertyDesc) {
    return true;
  }
  if (propertyDesc.writable === false) {
    return false;
  }
  return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
const isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
const isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]';
const isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
const isMix = typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
const zoneSymbolEventNames$1 = {};
const wrapFn = function (event) {
  // https://github.com/angular/zone.js/issues/911, in IE, sometimes
  // event will be undefined, so we need to use window.event
  event = event || _global.event;
  if (!event) {
    return;
  }
  let eventNameSymbol = zoneSymbolEventNames$1[event.type];
  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames$1[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
  }
  const target = this || event.target || _global;
  const listener = target[eventNameSymbol];
  let result;
  if (isBrowser && target === internalWindow && event.type === 'error') {
    // window.onerror have different signature
    // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
    // and onerror callback will prevent default when callback return true
    const errorEvent = event;
    result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
    if (result === true) {
      event.preventDefault();
    }
  } else {
    result = listener && listener.apply(this, arguments);
    if (result != undefined && !result) {
      event.preventDefault();
    }
  }
  return result;
};
function patchProperty(obj, prop, prototype) {
  let desc = ObjectGetOwnPropertyDescriptor(obj, prop);
  if (!desc && prototype) {
    // when patch window object, use prototype to check prop exist or not
    const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
    if (prototypeDesc) {
      desc = {
        enumerable: true,
        configurable: true
      };
    }
  }
  // if the descriptor not exists or is not configurable
  // just return
  if (!desc || !desc.configurable) {
    return;
  }
  const onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
  if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
    return;
  }
  // A property descriptor cannot have getter/setter and be writable
  // deleting the writable and value properties avoids this error:
  //
  // TypeError: property descriptors must not specify a value or be writable when a
  // getter or setter has been specified
  delete desc.writable;
  delete desc.value;
  const originalDescGet = desc.get;
  const originalDescSet = desc.set;
  // slice(2) cuz 'onclick' -> 'click', etc
  const eventName = prop.slice(2);
  let eventNameSymbol = zoneSymbolEventNames$1[eventName];
  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames$1[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
  }
  desc.set = function (newValue) {
    // in some of windows's onproperty callback, this is undefined
    // so we need to check it
    let target = this;
    if (!target && obj === _global) {
      target = _global;
    }
    if (!target) {
      return;
    }
    const previousValue = target[eventNameSymbol];
    if (typeof previousValue === 'function') {
      target.removeEventListener(eventName, wrapFn);
    }
    // issue #978, when onload handler was added before loading zone.js
    // we should remove it with originalDescSet
    originalDescSet && originalDescSet.call(target, null);
    target[eventNameSymbol] = newValue;
    if (typeof newValue === 'function') {
      target.addEventListener(eventName, wrapFn, false);
    }
  };
  // The getter would return undefined for unassigned properties but the default value of an
  // unassigned property is null
  desc.get = function () {
    // in some of windows's onproperty callback, this is undefined
    // so we need to check it
    let target = this;
    if (!target && obj === _global) {
      target = _global;
    }
    if (!target) {
      return null;
    }
    const listener = target[eventNameSymbol];
    if (listener) {
      return listener;
    } else if (originalDescGet) {
      // result will be null when use inline event attribute,
      // such as <button onclick="func();">OK</button>
      // because the onclick function is internal raw uncompiled handler
      // the onclick will be evaluated when first time event was triggered or
      // the property is accessed, https://github.com/angular/zone.js/issues/525
      // so we should use original native get to retrieve the handler
      let value = originalDescGet.call(this);
      if (value) {
        desc.set.call(this, value);
        if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
          target.removeAttribute(prop);
        }
        return value;
      }
    }
    return null;
  };
  ObjectDefineProperty(obj, prop, desc);
  obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
  if (properties) {
    for (let i = 0; i < properties.length; i++) {
      patchProperty(obj, 'on' + properties[i], prototype);
    }
  } else {
    const onProperties = [];
    for (const prop in obj) {
      if (prop.slice(0, 2) == 'on') {
        onProperties.push(prop);
      }
    }
    for (let j = 0; j < onProperties.length; j++) {
      patchProperty(obj, onProperties[j], prototype);
    }
  }
}
const originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
  const OriginalClass = _global[className];
  if (!OriginalClass) return;
  // keep original class in global
  _global[zoneSymbol(className)] = OriginalClass;
  _global[className] = function () {
    const a = bindArguments(arguments, className);
    switch (a.length) {
      case 0:
        this[originalInstanceKey] = new OriginalClass();
        break;
      case 1:
        this[originalInstanceKey] = new OriginalClass(a[0]);
        break;
      case 2:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
        break;
      case 3:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
        break;
      case 4:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
        break;
      default:
        throw new Error('Arg list too long.');
    }
  };
  // attach original delegate to patched function
  attachOriginToPatched(_global[className], OriginalClass);
  const instance = new OriginalClass(function () {});
  let prop;
  for (prop in instance) {
    // https://bugs.webkit.org/show_bug.cgi?id=44721
    if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;
    (function (prop) {
      if (typeof instance[prop] === 'function') {
        _global[className].prototype[prop] = function () {
          return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
        };
      } else {
        ObjectDefineProperty(_global[className].prototype, prop, {
          set: function (fn) {
            if (typeof fn === 'function') {
              this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
              // keep callback in wrapped function so we can
              // use it in Function.prototype.toString to return
              // the native one.
              attachOriginToPatched(this[originalInstanceKey][prop], fn);
            } else {
              this[originalInstanceKey][prop] = fn;
            }
          },
          get: function () {
            return this[originalInstanceKey][prop];
          }
        });
      }
    })(prop);
  }
  for (prop in OriginalClass) {
    if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
      _global[className][prop] = OriginalClass[prop];
    }
  }
}
function patchMethod(target, name, patchFn) {
  let proto = target;
  while (proto && !proto.hasOwnProperty(name)) {
    proto = ObjectGetPrototypeOf(proto);
  }
  if (!proto && target[name]) {
    // somehow we did not find it, but we can see it. This happens on IE for Window properties.
    proto = target;
  }
  const delegateName = zoneSymbol(name);
  let delegate = null;
  if (proto && (!(delegate = proto[delegateName]) || !proto.hasOwnProperty(delegateName))) {
    delegate = proto[delegateName] = proto[name];
    // check whether proto[name] is writable
    // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
    const desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
    if (isPropertyWritable(desc)) {
      const patchDelegate = patchFn(delegate, delegateName, name);
      proto[name] = function () {
        return patchDelegate(this, arguments);
      };
      attachOriginToPatched(proto[name], delegate);
    }
  }
  return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
  let setNative = null;
  function scheduleTask(task) {
    const data = task.data;
    data.args[data.cbIdx] = function () {
      task.invoke.apply(this, arguments);
    };
    setNative.apply(data.target, data.args);
    return task;
  }
  setNative = patchMethod(obj, funcName, delegate => function (self, args) {
    const meta = metaCreator(self, args);
    if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
      return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
    } else {
      // cause an error by calling it directly.
      return delegate.apply(self, args);
    }
  });
}
function attachOriginToPatched(patched, original) {
  patched[zoneSymbol('OriginalDelegate')] = original;
}
let isDetectedIEOrEdge = false;
let ieOrEdge = false;
function isIE() {
  try {
    const ua = internalWindow.navigator.userAgent;
    if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
      return true;
    }
  } catch (error) {}
  return false;
}
function isIEOrEdge() {
  if (isDetectedIEOrEdge) {
    return ieOrEdge;
  }
  isDetectedIEOrEdge = true;
  try {
    const ua = internalWindow.navigator.userAgent;
    if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
      ieOrEdge = true;
    }
  } catch (error) {}
  return ieOrEdge;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('ZoneAwarePromise', (global, Zone, api) => {
  const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  const ObjectDefineProperty = Object.defineProperty;
  function readableObjectToString(obj) {
    if (obj && obj.toString === Object.prototype.toString) {
      const className = obj.constructor && obj.constructor.name;
      return (className ? className : '') + ': ' + JSON.stringify(obj);
    }
    return obj ? obj.toString() : Object.prototype.toString.call(obj);
  }
  const __symbol__ = api.symbol;
  const _uncaughtPromiseErrors = [];
  const isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;
  const symbolPromise = __symbol__('Promise');
  const symbolThen = __symbol__('then');
  const creationTrace = '__creationTrace__';
  api.onUnhandledError = e => {
    if (api.showUncaughtError()) {
      const rejection = e && e.rejection;
      if (rejection) {
        console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
      } else {
        console.error(e);
      }
    }
  };
  api.microtaskDrainDone = () => {
    while (_uncaughtPromiseErrors.length) {
      const uncaughtPromiseError = _uncaughtPromiseErrors.shift();
      try {
        uncaughtPromiseError.zone.runGuarded(() => {
          if (uncaughtPromiseError.throwOriginal) {
            throw uncaughtPromiseError.rejection;
          }
          throw uncaughtPromiseError;
        });
      } catch (error) {
        handleUnhandledRejection(error);
      }
    }
  };
  const UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
  function handleUnhandledRejection(e) {
    api.onUnhandledError(e);
    try {
      const handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
      if (typeof handler === 'function') {
        handler.call(this, e);
      }
    } catch (err) {}
  }
  function isThenable(value) {
    return value && value.then;
  }
  function forwardResolution(value) {
    return value;
  }
  function forwardRejection(rejection) {
    return ZoneAwarePromise.reject(rejection);
  }
  const symbolState = __symbol__('state');
  const symbolValue = __symbol__('value');
  const symbolFinally = __symbol__('finally');
  const symbolParentPromiseValue = __symbol__('parentPromiseValue');
  const symbolParentPromiseState = __symbol__('parentPromiseState');
  const source = 'Promise.then';
  const UNRESOLVED = null;
  const RESOLVED = true;
  const REJECTED = false;
  const REJECTED_NO_CATCH = 0;
  function makeResolver(promise, state) {
    return v => {
      try {
        resolvePromise(promise, state, v);
      } catch (err) {
        resolvePromise(promise, false, err);
      }
      // Do not return value or you will break the Promise spec.
    };
  }

  const once = function () {
    let wasCalled = false;
    return function wrapper(wrappedFunction) {
      return function () {
        if (wasCalled) {
          return;
        }
        wasCalled = true;
        wrappedFunction.apply(null, arguments);
      };
    };
  };
  const TYPE_ERROR = 'Promise resolved with itself';
  const CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
  // Promise Resolution
  function resolvePromise(promise, state, value) {
    const onceWrapper = once();
    if (promise === value) {
      throw new TypeError(TYPE_ERROR);
    }
    if (promise[symbolState] === UNRESOLVED) {
      // should only get value.then once based on promise spec.
      let then = null;
      try {
        if (typeof value === 'object' || typeof value === 'function') {
          then = value && value.then;
        }
      } catch (err) {
        onceWrapper(() => {
          resolvePromise(promise, false, err);
        })();
        return promise;
      }
      // if (value instanceof ZoneAwarePromise) {
      if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
        clearRejectedNoCatch(value);
        resolvePromise(promise, value[symbolState], value[symbolValue]);
      } else if (state !== REJECTED && typeof then === 'function') {
        try {
          then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
        } catch (err) {
          onceWrapper(() => {
            resolvePromise(promise, false, err);
          })();
        }
      } else {
        promise[symbolState] = state;
        const queue = promise[symbolValue];
        promise[symbolValue] = value;
        if (promise[symbolFinally] === symbolFinally) {
          // the promise is generated by Promise.prototype.finally
          if (state === RESOLVED) {
            // the state is resolved, should ignore the value
            // and use parent promise value
            promise[symbolState] = promise[symbolParentPromiseState];
            promise[symbolValue] = promise[symbolParentPromiseValue];
          }
        }
        // record task information in value when error occurs, so we can
        // do some additional work such as render longStackTrace
        if (state === REJECTED && value instanceof Error) {
          // check if longStackTraceZone is here
          const trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];
          if (trace) {
            // only keep the long stack trace into error when in longStackTraceZone
            ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
              configurable: true,
              enumerable: false,
              writable: true,
              value: trace
            });
          }
        }
        for (let i = 0; i < queue.length;) {
          scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
        }
        if (queue.length == 0 && state == REJECTED) {
          promise[symbolState] = REJECTED_NO_CATCH;
          let uncaughtPromiseError = value;
          try {
            // Here we throws a new Error to print more readable error log
            // and if the value is not an error, zone.js builds an `Error`
            // Object here to attach the stack information.
            throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
          } catch (err) {
            uncaughtPromiseError = err;
          }
          if (isDisableWrappingUncaughtPromiseRejection) {
            // If disable wrapping uncaught promise reject
            // use the value instead of wrapping it.
            uncaughtPromiseError.throwOriginal = true;
          }
          uncaughtPromiseError.rejection = value;
          uncaughtPromiseError.promise = promise;
          uncaughtPromiseError.zone = Zone.current;
          uncaughtPromiseError.task = Zone.currentTask;
          _uncaughtPromiseErrors.push(uncaughtPromiseError);
          api.scheduleMicroTask(); // to make sure that it is running
        }
      }
    }
    // Resolving an already resolved promise is a noop.
    return promise;
  }
  const REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
  function clearRejectedNoCatch(promise) {
    if (promise[symbolState] === REJECTED_NO_CATCH) {
      // if the promise is rejected no catch status
      // and queue.length > 0, means there is a error handler
      // here to handle the rejected promise, we should trigger
      // windows.rejectionhandled eventHandler or nodejs rejectionHandled
      // eventHandler
      try {
        const handler = Zone[REJECTION_HANDLED_HANDLER];
        if (handler && typeof handler === 'function') {
          handler.call(this, {
            rejection: promise[symbolValue],
            promise: promise
          });
        }
      } catch (err) {}
      promise[symbolState] = REJECTED;
      for (let i = 0; i < _uncaughtPromiseErrors.length; i++) {
        if (promise === _uncaughtPromiseErrors[i].promise) {
          _uncaughtPromiseErrors.splice(i, 1);
        }
      }
    }
  }
  function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
    clearRejectedNoCatch(promise);
    const promiseState = promise[symbolState];
    const delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
    zone.scheduleMicroTask(source, () => {
      try {
        const parentPromiseValue = promise[symbolValue];
        const isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];
        if (isFinallyPromise) {
          // if the promise is generated from finally call, keep parent promise's state and value
          chainPromise[symbolParentPromiseValue] = parentPromiseValue;
          chainPromise[symbolParentPromiseState] = promiseState;
        }
        // should not pass value to finally callback
        const value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
        resolvePromise(chainPromise, true, value);
      } catch (error) {
        // if error occurs, should always return this error
        resolvePromise(chainPromise, false, error);
      }
    }, chainPromise);
  }
  const ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
  const noop = function () {};
  const AggregateError = global.AggregateError;
  class ZoneAwarePromise {
    static toString() {
      return ZONE_AWARE_PROMISE_TO_STRING;
    }
    static resolve(value) {
      return resolvePromise(new this(null), RESOLVED, value);
    }
    static reject(error) {
      return resolvePromise(new this(null), REJECTED, error);
    }
    static any(values) {
      if (!values || typeof values[Symbol.iterator] !== 'function') {
        return Promise.reject(new AggregateError([], 'All promises were rejected'));
      }
      const promises = [];
      let count = 0;
      try {
        for (let v of values) {
          count++;
          promises.push(ZoneAwarePromise.resolve(v));
        }
      } catch (err) {
        return Promise.reject(new AggregateError([], 'All promises were rejected'));
      }
      if (count === 0) {
        return Promise.reject(new AggregateError([], 'All promises were rejected'));
      }
      let finished = false;
      const errors = [];
      return new ZoneAwarePromise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
          promises[i].then(v => {
            if (finished) {
              return;
            }
            finished = true;
            resolve(v);
          }, err => {
            errors.push(err);
            count--;
            if (count === 0) {
              finished = true;
              reject(new AggregateError(errors, 'All promises were rejected'));
            }
          });
        }
      });
    }
    static race(values) {
      let resolve;
      let reject;
      let promise = new this((res, rej) => {
        resolve = res;
        reject = rej;
      });
      function onResolve(value) {
        resolve(value);
      }
      function onReject(error) {
        reject(error);
      }
      for (let value of values) {
        if (!isThenable(value)) {
          value = this.resolve(value);
        }
        value.then(onResolve, onReject);
      }
      return promise;
    }
    static all(values) {
      return ZoneAwarePromise.allWithCallback(values);
    }
    static allSettled(values) {
      const P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
      return P.allWithCallback(values, {
        thenCallback: value => ({
          status: 'fulfilled',
          value
        }),
        errorCallback: err => ({
          status: 'rejected',
          reason: err
        })
      });
    }
    static allWithCallback(values, callback) {
      let resolve;
      let reject;
      let promise = new this((res, rej) => {
        resolve = res;
        reject = rej;
      });
      // Start at 2 to prevent prematurely resolving if .then is called immediately.
      let unresolvedCount = 2;
      let valueIndex = 0;
      const resolvedValues = [];
      for (let value of values) {
        if (!isThenable(value)) {
          value = this.resolve(value);
        }
        const curValueIndex = valueIndex;
        try {
          value.then(value => {
            resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
            unresolvedCount--;
            if (unresolvedCount === 0) {
              resolve(resolvedValues);
            }
          }, err => {
            if (!callback) {
              reject(err);
            } else {
              resolvedValues[curValueIndex] = callback.errorCallback(err);
              unresolvedCount--;
              if (unresolvedCount === 0) {
                resolve(resolvedValues);
              }
            }
          });
        } catch (thenErr) {
          reject(thenErr);
        }
        unresolvedCount++;
        valueIndex++;
      }
      // Make the unresolvedCount zero-based again.
      unresolvedCount -= 2;
      if (unresolvedCount === 0) {
        resolve(resolvedValues);
      }
      return promise;
    }
    constructor(executor) {
      const promise = this;
      if (!(promise instanceof ZoneAwarePromise)) {
        throw new Error('Must be an instanceof Promise.');
      }
      promise[symbolState] = UNRESOLVED;
      promise[symbolValue] = []; // queue;
      try {
        const onceWrapper = once();
        executor && executor(onceWrapper(makeResolver(promise, RESOLVED)), onceWrapper(makeResolver(promise, REJECTED)));
      } catch (error) {
        resolvePromise(promise, false, error);
      }
    }
    get [Symbol.toStringTag]() {
      return 'Promise';
    }
    get [Symbol.species]() {
      return ZoneAwarePromise;
    }
    then(onFulfilled, onRejected) {
      var _a;
      // We must read `Symbol.species` safely because `this` may be anything. For instance, `this`
      // may be an object without a prototype (created through `Object.create(null)`); thus
      // `this.constructor` will be undefined. One of the use cases is SystemJS creating
      // prototype-less objects (modules) via `Object.create(null)`. The SystemJS creates an empty
      // object and copies promise properties into that object (within the `getOrCreateLoad`
      // function). The zone.js then checks if the resolved value has the `then` method and invokes
      // it with the `value` context. Otherwise, this will throw an error: `TypeError: Cannot read
      // properties of undefined (reading 'Symbol(Symbol.species)')`.
      let C = (_a = this.constructor) === null || _a === void 0 ? void 0 : _a[Symbol.species];
      if (!C || typeof C !== 'function') {
        C = this.constructor || ZoneAwarePromise;
      }
      const chainPromise = new C(noop);
      const zone = Zone.current;
      if (this[symbolState] == UNRESOLVED) {
        this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
      } else {
        scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
      }
      return chainPromise;
    }
    catch(onRejected) {
      return this.then(null, onRejected);
    }
    finally(onFinally) {
      var _a;
      // See comment on the call to `then` about why thee `Symbol.species` is safely accessed.
      let C = (_a = this.constructor) === null || _a === void 0 ? void 0 : _a[Symbol.species];
      if (!C || typeof C !== 'function') {
        C = ZoneAwarePromise;
      }
      const chainPromise = new C(noop);
      chainPromise[symbolFinally] = symbolFinally;
      const zone = Zone.current;
      if (this[symbolState] == UNRESOLVED) {
        this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
      } else {
        scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
      }
      return chainPromise;
    }
  }
  // Protect against aggressive optimizers dropping seemingly unused properties.
  // E.g. Closure Compiler in advanced mode.
  ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
  ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
  ZoneAwarePromise['race'] = ZoneAwarePromise.race;
  ZoneAwarePromise['all'] = ZoneAwarePromise.all;
  const NativePromise = global[symbolPromise] = global['Promise'];
  global['Promise'] = ZoneAwarePromise;
  const symbolThenPatched = __symbol__('thenPatched');
  function patchThen(Ctor) {
    const proto = Ctor.prototype;
    const prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
    if (prop && (prop.writable === false || !prop.configurable)) {
      // check Ctor.prototype.then propertyDescriptor is writable or not
      // in meteor env, writable is false, we should ignore such case
      return;
    }
    const originalThen = proto.then;
    // Keep a reference to the original method.
    proto[symbolThen] = originalThen;
    Ctor.prototype.then = function (onResolve, onReject) {
      const wrapped = new ZoneAwarePromise((resolve, reject) => {
        originalThen.call(this, resolve, reject);
      });
      return wrapped.then(onResolve, onReject);
    };
    Ctor[symbolThenPatched] = true;
  }
  api.patchThen = patchThen;
  function zoneify(fn) {
    return function (self, args) {
      let resultPromise = fn.apply(self, args);
      if (resultPromise instanceof ZoneAwarePromise) {
        return resultPromise;
      }
      let ctor = resultPromise.constructor;
      if (!ctor[symbolThenPatched]) {
        patchThen(ctor);
      }
      return resultPromise;
    };
  }
  if (NativePromise) {
    patchThen(NativePromise);
    patchMethod(global, 'fetch', delegate => zoneify(delegate));
  }
  // This is not part of public API, but it is useful for tests, so we expose it.
  Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
  return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', global => {
  // patch Func.prototype.toString to let them look like native
  const originalFunctionToString = Function.prototype.toString;
  const ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
  const PROMISE_SYMBOL = zoneSymbol('Promise');
  const ERROR_SYMBOL = zoneSymbol('Error');
  const newFunctionToString = function toString() {
    if (typeof this === 'function') {
      const originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
      if (originalDelegate) {
        if (typeof originalDelegate === 'function') {
          return originalFunctionToString.call(originalDelegate);
        } else {
          return Object.prototype.toString.call(originalDelegate);
        }
      }
      if (this === Promise) {
        const nativePromise = global[PROMISE_SYMBOL];
        if (nativePromise) {
          return originalFunctionToString.call(nativePromise);
        }
      }
      if (this === Error) {
        const nativeError = global[ERROR_SYMBOL];
        if (nativeError) {
          return originalFunctionToString.call(nativeError);
        }
      }
    }
    return originalFunctionToString.call(this);
  };
  newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
  Function.prototype.toString = newFunctionToString;
  // patch Object.prototype.toString to let them look like native
  const originalObjectToString = Object.prototype.toString;
  const PROMISE_OBJECT_TO_STRING = '[object Promise]';
  Object.prototype.toString = function () {
    if (typeof Promise === 'function' && this instanceof Promise) {
      return PROMISE_OBJECT_TO_STRING;
    }
    return originalObjectToString.call(this);
  };
});

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let passiveSupported = false;
if (typeof window !== 'undefined') {
  try {
    const options = Object.defineProperty({}, 'passive', {
      get: function () {
        passiveSupported = true;
      }
    });
    // Note: We pass the `options` object as the event handler too. This is not compatible with the
    // signature of `addEventListener` or `removeEventListener` but enables us to remove the handler
    // without an actual handler.
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
// an identifier to tell ZoneTask do not create a new invoke closure
const OPTIMIZED_ZONE_EVENT_TASK_DATA = {
  useG: true
};
const zoneSymbolEventNames = {};
const globalSources = {};
const EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
const IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');
function prepareEventNames(eventName, eventNameToString) {
  const falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
  const trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
  const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
  const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
  zoneSymbolEventNames[eventName] = {};
  zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
  zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
}
function patchEventTarget(_global, api, apis, patchOptions) {
  const ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
  const REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
  const LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
  const REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
  const zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
  const ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
  const PREPEND_EVENT_LISTENER = 'prependListener';
  const PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
  const invokeTask = function (task, target, event) {
    // for better performance, check isRemoved which is set
    // by removeEventListener
    if (task.isRemoved) {
      return;
    }
    const delegate = task.callback;
    if (typeof delegate === 'object' && delegate.handleEvent) {
      // create the bind version of handleEvent when invoke
      task.callback = event => delegate.handleEvent(event);
      task.originalDelegate = delegate;
    }
    // invoke static task.invoke
    // need to try/catch error here, otherwise, the error in one event listener
    // will break the executions of the other event listeners. Also error will
    // not remove the event listener when `once` options is true.
    let error;
    try {
      task.invoke(task, target, [event]);
    } catch (err) {
      error = err;
    }
    const options = task.options;
    if (options && typeof options === 'object' && options.once) {
      // if options.once is true, after invoke once remove listener here
      // only browser need to do this, nodejs eventEmitter will cal removeListener
      // inside EventEmitter.once
      const delegate = task.originalDelegate ? task.originalDelegate : task.callback;
      target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate, options);
    }
    return error;
  };
  function globalCallback(context, event, isCapture) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
      return;
    }
    // event.target is needed for Samsung TV and SourceBuffer
    // || global is needed https://github.com/angular/zone.js/issues/190
    const target = context || event.target || _global;
    const tasks = target[zoneSymbolEventNames[event.type][isCapture ? TRUE_STR : FALSE_STR]];
    if (tasks) {
      const errors = [];
      // invoke all tasks which attached to current target with given event.type and capture = false
      // for performance concern, if task.length === 1, just invoke
      if (tasks.length === 1) {
        const err = invokeTask(tasks[0], target, event);
        err && errors.push(err);
      } else {
        // https://github.com/angular/zone.js/issues/836
        // copy the tasks array before invoke, to avoid
        // the callback will remove itself or other listener
        const copyTasks = tasks.slice();
        for (let i = 0; i < copyTasks.length; i++) {
          if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
            break;
          }
          const err = invokeTask(copyTasks[i], target, event);
          err && errors.push(err);
        }
      }
      // Since there is only one error, we don't need to schedule microTask
      // to throw the error.
      if (errors.length === 1) {
        throw errors[0];
      } else {
        for (let i = 0; i < errors.length; i++) {
          const err = errors[i];
          api.nativeScheduleMicroTask(() => {
            throw err;
          });
        }
      }
    }
  }
  // global shared zoneAwareCallback to handle all event callback with capture = false
  const globalZoneAwareCallback = function (event) {
    return globalCallback(this, event, false);
  };
  // global shared zoneAwareCallback to handle all event callback with capture = true
  const globalZoneAwareCaptureCallback = function (event) {
    return globalCallback(this, event, true);
  };
  function patchEventTargetMethods(obj, patchOptions) {
    if (!obj) {
      return false;
    }
    let useGlobalCallback = true;
    if (patchOptions && patchOptions.useG !== undefined) {
      useGlobalCallback = patchOptions.useG;
    }
    const validateHandler = patchOptions && patchOptions.vh;
    let checkDuplicate = true;
    if (patchOptions && patchOptions.chkDup !== undefined) {
      checkDuplicate = patchOptions.chkDup;
    }
    let returnTarget = false;
    if (patchOptions && patchOptions.rt !== undefined) {
      returnTarget = patchOptions.rt;
    }
    let proto = obj;
    while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
      proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && obj[ADD_EVENT_LISTENER]) {
      // somehow we did not find it, but we can see it. This happens on IE for Window properties.
      proto = obj;
    }
    if (!proto) {
      return false;
    }
    if (proto[zoneSymbolAddEventListener]) {
      return false;
    }
    const eventNameToString = patchOptions && patchOptions.eventNameToString;
    // a shared global taskData to pass data for scheduleEventTask
    // so we do not need to create a new object just for pass some data
    const taskData = {};
    const nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
    const nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
    const nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
    const nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
    let nativePrependEventListener;
    if (patchOptions && patchOptions.prepend) {
      nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
    }
    /**
     * This util function will build an option object with passive option
     * to handle all possible input from the user.
     */
    function buildEventListenerOptions(options, passive) {
      if (!passiveSupported && typeof options === 'object' && options) {
        // doesn't support passive but user want to pass an object as options.
        // this will not work on some old browser, so we just pass a boolean
        // as useCapture parameter
        return !!options.capture;
      }
      if (!passiveSupported || !passive) {
        return options;
      }
      if (typeof options === 'boolean') {
        return {
          capture: options,
          passive: true
        };
      }
      if (!options) {
        return {
          passive: true
        };
      }
      if (typeof options === 'object' && options.passive !== false) {
        return Object.assign(Object.assign({}, options), {
          passive: true
        });
      }
      return options;
    }
    const customScheduleGlobal = function (task) {
      // if there is already a task for the eventName + capture,
      // just return, because we use the shared globalZoneAwareCallback here.
      if (taskData.isExisting) {
        return;
      }
      return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
    };
    const customCancelGlobal = function (task) {
      // if task is not marked as isRemoved, this call is directly
      // from Zone.prototype.cancelTask, we should remove the task
      // from tasksList of target first
      if (!task.isRemoved) {
        const symbolEventNames = zoneSymbolEventNames[task.eventName];
        let symbolEventName;
        if (symbolEventNames) {
          symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
        }
        const existingTasks = symbolEventName && task.target[symbolEventName];
        if (existingTasks) {
          for (let i = 0; i < existingTasks.length; i++) {
            const existingTask = existingTasks[i];
            if (existingTask === task) {
              existingTasks.splice(i, 1);
              // set isRemoved to data for faster invokeTask check
              task.isRemoved = true;
              if (existingTasks.length === 0) {
                // all tasks for the eventName + capture have gone,
                // remove globalZoneAwareCallback and remove the task cache from target
                task.allRemoved = true;
                task.target[symbolEventName] = null;
              }
              break;
            }
          }
        }
      }
      // if all tasks for the eventName + capture have gone,
      // we will really remove the global event callback,
      // if not, return
      if (!task.allRemoved) {
        return;
      }
      return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
    };
    const customScheduleNonGlobal = function (task) {
      return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };
    const customSchedulePrepend = function (task) {
      return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };
    const customCancelNonGlobal = function (task) {
      return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
    };
    const customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
    const customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
    const compareTaskCallbackVsDelegate = function (task, delegate) {
      const typeOfDelegate = typeof delegate;
      return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
    };
    const compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
    const unpatchedEvents = Zone[zoneSymbol('UNPATCHED_EVENTS')];
    const passiveEvents = _global[zoneSymbol('PASSIVE_EVENTS')];
    const makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget = false, prepend = false) {
      return function () {
        const target = this || _global;
        let eventName = arguments[0];
        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }
        let delegate = arguments[1];
        if (!delegate) {
          return nativeListener.apply(this, arguments);
        }
        if (isNode && eventName === 'uncaughtException') {
          // don't patch uncaughtException of nodejs to prevent endless loop
          return nativeListener.apply(this, arguments);
        }
        // don't create the bind delegate function for handleEvent
        // case here to improve addEventListener performance
        // we will create the bind delegate when invoke
        let isHandleEvent = false;
        if (typeof delegate !== 'function') {
          if (!delegate.handleEvent) {
            return nativeListener.apply(this, arguments);
          }
          isHandleEvent = true;
        }
        if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
          return;
        }
        const passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
        const options = buildEventListenerOptions(arguments[2], passive);
        if (unpatchedEvents) {
          // check unpatched list
          for (let i = 0; i < unpatchedEvents.length; i++) {
            if (eventName === unpatchedEvents[i]) {
              if (passive) {
                return nativeListener.call(target, eventName, delegate, options);
              } else {
                return nativeListener.apply(this, arguments);
              }
            }
          }
        }
        const capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
        const once = options && typeof options === 'object' ? options.once : false;
        const zone = Zone.current;
        let symbolEventNames = zoneSymbolEventNames[eventName];
        if (!symbolEventNames) {
          prepareEventNames(eventName, eventNameToString);
          symbolEventNames = zoneSymbolEventNames[eventName];
        }
        const symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
        let existingTasks = target[symbolEventName];
        let isExisting = false;
        if (existingTasks) {
          // already have task registered
          isExisting = true;
          if (checkDuplicate) {
            for (let i = 0; i < existingTasks.length; i++) {
              if (compare(existingTasks[i], delegate)) {
                // same callback, same capture, same event name, just return
                return;
              }
            }
          }
        } else {
          existingTasks = target[symbolEventName] = [];
        }
        let source;
        const constructorName = target.constructor['name'];
        const targetSource = globalSources[constructorName];
        if (targetSource) {
          source = targetSource[eventName];
        }
        if (!source) {
          source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
        }
        // do not create a new object as task.data to pass those things
        // just use the global shared one
        taskData.options = options;
        if (once) {
          // if addEventListener with once options, we don't pass it to
          // native addEventListener, instead we keep the once setting
          // and handle ourselves.
          taskData.options.once = false;
        }
        taskData.target = target;
        taskData.capture = capture;
        taskData.eventName = eventName;
        taskData.isExisting = isExisting;
        const data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
        // keep taskData into data to allow onScheduleEventTask to access the task information
        if (data) {
          data.taskData = taskData;
        }
        const task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
        // should clear taskData.target to avoid memory leak
        // issue, https://github.com/angular/angular/issues/20442
        taskData.target = null;
        // need to clear up taskData because it is a global object
        if (data) {
          data.taskData = null;
        }
        // have to save those information to task in case
        // application may call task.zone.cancelTask() directly
        if (once) {
          options.once = true;
        }
        if (!(!passiveSupported && typeof task.options === 'boolean')) {
          // if not support passive, and we pass an option object
          // to addEventListener, we should save the options to task
          task.options = options;
        }
        task.target = target;
        task.capture = capture;
        task.eventName = eventName;
        if (isHandleEvent) {
          // save original delegate for compare to check duplicate
          task.originalDelegate = delegate;
        }
        if (!prepend) {
          existingTasks.push(task);
        } else {
          existingTasks.unshift(task);
        }
        if (returnTarget) {
          return target;
        }
      };
    };
    proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
    if (nativePrependEventListener) {
      proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
    }
    proto[REMOVE_EVENT_LISTENER] = function () {
      const target = this || _global;
      let eventName = arguments[0];
      if (patchOptions && patchOptions.transferEventName) {
        eventName = patchOptions.transferEventName(eventName);
      }
      const options = arguments[2];
      const capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
      const delegate = arguments[1];
      if (!delegate) {
        return nativeRemoveEventListener.apply(this, arguments);
      }
      if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
        return;
      }
      const symbolEventNames = zoneSymbolEventNames[eventName];
      let symbolEventName;
      if (symbolEventNames) {
        symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
      }
      const existingTasks = symbolEventName && target[symbolEventName];
      if (existingTasks) {
        for (let i = 0; i < existingTasks.length; i++) {
          const existingTask = existingTasks[i];
          if (compare(existingTask, delegate)) {
            existingTasks.splice(i, 1);
            // set isRemoved to data for faster invokeTask check
            existingTask.isRemoved = true;
            if (existingTasks.length === 0) {
              // all tasks for the eventName + capture have gone,
              // remove globalZoneAwareCallback and remove the task cache from target
              existingTask.allRemoved = true;
              target[symbolEventName] = null;
              // in the target, we have an event listener which is added by on_property
              // such as target.onclick = function() {}, so we need to clear this internal
              // property too if all delegates all removed
              if (typeof eventName === 'string') {
                const onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                target[onPropertySymbol] = null;
              }
            }
            existingTask.zone.cancelTask(existingTask);
            if (returnTarget) {
              return target;
            }
            return;
          }
        }
      }
      // issue 930, didn't find the event name or callback
      // from zone kept existingTasks, the callback maybe
      // added outside of zone, we need to call native removeEventListener
      // to try to remove it.
      return nativeRemoveEventListener.apply(this, arguments);
    };
    proto[LISTENERS_EVENT_LISTENER] = function () {
      const target = this || _global;
      let eventName = arguments[0];
      if (patchOptions && patchOptions.transferEventName) {
        eventName = patchOptions.transferEventName(eventName);
      }
      const listeners = [];
      const tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
      for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
        listeners.push(delegate);
      }
      return listeners;
    };
    proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
      const target = this || _global;
      let eventName = arguments[0];
      if (!eventName) {
        const keys = Object.keys(target);
        for (let i = 0; i < keys.length; i++) {
          const prop = keys[i];
          const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
          let evtName = match && match[1];
          // in nodejs EventEmitter, removeListener event is
          // used for monitoring the removeListener call,
          // so just keep removeListener eventListener until
          // all other eventListeners are removed
          if (evtName && evtName !== 'removeListener') {
            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
          }
        }
        // remove removeListener listener finally
        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
      } else {
        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }
        const symbolEventNames = zoneSymbolEventNames[eventName];
        if (symbolEventNames) {
          const symbolEventName = symbolEventNames[FALSE_STR];
          const symbolCaptureEventName = symbolEventNames[TRUE_STR];
          const tasks = target[symbolEventName];
          const captureTasks = target[symbolCaptureEventName];
          if (tasks) {
            const removeTasks = tasks.slice();
            for (let i = 0; i < removeTasks.length; i++) {
              const task = removeTasks[i];
              let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }
          if (captureTasks) {
            const removeTasks = captureTasks.slice();
            for (let i = 0; i < removeTasks.length; i++) {
              const task = removeTasks[i];
              let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }
        }
      }
      if (returnTarget) {
        return this;
      }
    };
    // for native toString patch
    attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
    attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
    if (nativeRemoveAllListeners) {
      attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
    }
    if (nativeListeners) {
      attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
    }
    return true;
  }
  let results = [];
  for (let i = 0; i < apis.length; i++) {
    results[i] = patchEventTargetMethods(apis[i], patchOptions);
  }
  return results;
}
function findEventTasks(target, eventName) {
  if (!eventName) {
    const foundTasks = [];
    for (let prop in target) {
      const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
      let evtName = match && match[1];
      if (evtName && (!eventName || evtName === eventName)) {
        const tasks = target[prop];
        if (tasks) {
          for (let i = 0; i < tasks.length; i++) {
            foundTasks.push(tasks[i]);
          }
        }
      }
    }
    return foundTasks;
  }
  let symbolEventName = zoneSymbolEventNames[eventName];
  if (!symbolEventName) {
    prepareEventNames(eventName);
    symbolEventName = zoneSymbolEventNames[eventName];
  }
  const captureFalseTasks = target[symbolEventName[FALSE_STR]];
  const captureTrueTasks = target[symbolEventName[TRUE_STR]];
  if (!captureFalseTasks) {
    return captureTrueTasks ? captureTrueTasks.slice() : [];
  } else {
    return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
  }
}
function patchEventPrototype(global, api) {
  const Event = global['Event'];
  if (Event && Event.prototype) {
    api.patchMethod(Event.prototype, 'stopImmediatePropagation', delegate => function (self, args) {
      self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
      // we need to call the native stopImmediatePropagation
      // in case in some hybrid application, some part of
      // application will be controlled by zone, some are not
      delegate && delegate.apply(self, args);
    });
  }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCallbacks(api, target, targetName, method, callbacks) {
  const symbol = Zone.__symbol__(method);
  if (target[symbol]) {
    return;
  }
  const nativeDelegate = target[symbol] = target[method];
  target[method] = function (name, opts, options) {
    if (opts && opts.prototype) {
      callbacks.forEach(function (callback) {
        const source = `${targetName}.${method}::` + callback;
        const prototype = opts.prototype;
        // Note: the `patchCallbacks` is used for patching the `document.registerElement` and
        // `customElements.define`. We explicitly wrap the patching code into try-catch since
        // callbacks may be already patched by other web components frameworks (e.g. LWC), and they
        // make those properties non-writable. This means that patching callback will throw an error
        // `cannot assign to read-only property`. See this code as an example:
        // https://github.com/salesforce/lwc/blob/master/packages/@lwc/engine-core/src/framework/base-bridge-element.ts#L180-L186
        // We don't want to stop the application rendering if we couldn't patch some
        // callback, e.g. `attributeChangedCallback`.
        try {
          if (prototype.hasOwnProperty(callback)) {
            const descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
            if (descriptor && descriptor.value) {
              descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
              api._redefineProperty(opts.prototype, callback, descriptor);
            } else if (prototype[callback]) {
              prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
            }
          } else if (prototype[callback]) {
            prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
          }
        } catch (_a) {
          // Note: we leave the catch block empty since there's no way to handle the error related
          // to non-writable property.
        }
      });
    }
    return nativeDelegate.call(target, name, opts, options);
  };
  api.attachOriginToPatched(target[method], nativeDelegate);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function filterProperties(target, onProperties, ignoreProperties) {
  if (!ignoreProperties || ignoreProperties.length === 0) {
    return onProperties;
  }
  const tip = ignoreProperties.filter(ip => ip.target === target);
  if (!tip || tip.length === 0) {
    return onProperties;
  }
  const targetIgnoreProperties = tip[0].ignoreProperties;
  return onProperties.filter(op => targetIgnoreProperties.indexOf(op) === -1);
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
  // check whether target is available, sometimes target will be undefined
  // because different browser or some 3rd party plugin.
  if (!target) {
    return;
  }
  const filteredProperties = filterProperties(target, onProperties, ignoreProperties);
  patchOnProperties(target, filteredProperties, prototype);
}
/**
 * Get all event name properties which the event name startsWith `on`
 * from the target object itself, inherited properties are not considered.
 */
function getOnEventNames(target) {
  return Object.getOwnPropertyNames(target).filter(name => name.startsWith('on') && name.length > 2).map(name => name.substring(2));
}
function propertyDescriptorPatch(api, _global) {
  if (isNode && !isMix) {
    return;
  }
  if (Zone[api.symbol('patchEvents')]) {
    // events are already been patched by legacy patch.
    return;
  }
  const ignoreProperties = _global['__Zone_ignore_on_properties'];
  // for browsers that we can patch the descriptor:  Chrome & Firefox
  let patchTargets = [];
  if (isBrowser) {
    const internalWindow = window;
    patchTargets = patchTargets.concat(['Document', 'SVGElement', 'Element', 'HTMLElement', 'HTMLBodyElement', 'HTMLMediaElement', 'HTMLFrameSetElement', 'HTMLFrameElement', 'HTMLIFrameElement', 'HTMLMarqueeElement', 'Worker']);
    const ignoreErrorProperties = isIE() ? [{
      target: internalWindow,
      ignoreProperties: ['error']
    }] : [];
    // in IE/Edge, onProp not exist in window object, but in WindowPrototype
    // so we need to pass WindowPrototype to check onProp exist or not
    patchFilteredProperties(internalWindow, getOnEventNames(internalWindow), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
  }
  patchTargets = patchTargets.concat(['XMLHttpRequest', 'XMLHttpRequestEventTarget', 'IDBIndex', 'IDBRequest', 'IDBOpenDBRequest', 'IDBDatabase', 'IDBTransaction', 'IDBCursor', 'WebSocket']);
  for (let i = 0; i < patchTargets.length; i++) {
    const target = _global[patchTargets[i]];
    target && target.prototype && patchFilteredProperties(target.prototype, getOnEventNames(target.prototype), ignoreProperties);
  }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('util', (global, Zone, api) => {
  // Collect native event names by looking at properties
  // on the global namespace, e.g. 'onclick'.
  const eventNames = getOnEventNames(global);
  api.patchOnProperties = patchOnProperties;
  api.patchMethod = patchMethod;
  api.bindArguments = bindArguments;
  api.patchMacroTask = patchMacroTask;
  // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
  // define which events will not be patched by `Zone.js`.
  // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
  // the name consistent with angular repo.
  // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
  // backwards compatibility.
  const SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
  const SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
  if (global[SYMBOL_UNPATCHED_EVENTS]) {
    global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
  }
  if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
    Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
  }
  api.patchEventPrototype = patchEventPrototype;
  api.patchEventTarget = patchEventTarget;
  api.isIEOrEdge = isIEOrEdge;
  api.ObjectDefineProperty = ObjectDefineProperty;
  api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
  api.ObjectCreate = ObjectCreate;
  api.ArraySlice = ArraySlice;
  api.patchClass = patchClass;
  api.wrapWithCurrentZone = wrapWithCurrentZone;
  api.filterProperties = filterProperties;
  api.attachOriginToPatched = attachOriginToPatched;
  api._redefineProperty = Object.defineProperty;
  api.patchCallbacks = patchCallbacks;
  api.getGlobalObjects = () => ({
    globalSources,
    zoneSymbolEventNames,
    eventNames,
    isBrowser,
    isMix,
    isNode,
    TRUE_STR,
    FALSE_STR,
    ZONE_SYMBOL_PREFIX,
    ADD_EVENT_LISTENER_STR,
    REMOVE_EVENT_LISTENER_STR
  });
});

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
  let setNative = null;
  let clearNative = null;
  setName += nameSuffix;
  cancelName += nameSuffix;
  const tasksByHandleId = {};
  function scheduleTask(task) {
    const data = task.data;
    data.args[0] = function () {
      return task.invoke.apply(this, arguments);
    };
    data.handleId = setNative.apply(window, data.args);
    return task;
  }
  function clearTask(task) {
    return clearNative.call(window, task.data.handleId);
  }
  setNative = patchMethod(window, setName, delegate => function (self, args) {
    if (typeof args[0] === 'function') {
      const options = {
        isPeriodic: nameSuffix === 'Interval',
        delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
        args: args
      };
      const callback = args[0];
      args[0] = function timer() {
        try {
          return callback.apply(this, arguments);
        } finally {
          // issue-934, task will be cancelled
          // even it is a periodic task such as
          // setInterval
          // https://github.com/angular/angular/issues/40387
          // Cleanup tasksByHandleId should be handled before scheduleTask
          // Since some zoneSpec may intercept and doesn't trigger
          // scheduleFn(scheduleTask) provided here.
          if (!options.isPeriodic) {
            if (typeof options.handleId === 'number') {
              // in non-nodejs env, we remove timerId
              // from local cache
              delete tasksByHandleId[options.handleId];
            } else if (options.handleId) {
              // Node returns complex objects as handleIds
              // we remove task reference from timer object
              options.handleId[taskSymbol] = null;
            }
          }
        }
      };
      const task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
      if (!task) {
        return task;
      }
      // Node.js must additionally support the ref and unref functions.
      const handle = task.data.handleId;
      if (typeof handle === 'number') {
        // for non nodejs env, we save handleId: task
        // mapping in local cache for clearTimeout
        tasksByHandleId[handle] = task;
      } else if (handle) {
        // for nodejs env, we save task
        // reference in timerId Object for clearTimeout
        handle[taskSymbol] = task;
      }
      // check whether handle is null, because some polyfill or browser
      // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
      if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
        task.ref = handle.ref.bind(handle);
        task.unref = handle.unref.bind(handle);
      }
      if (typeof handle === 'number' || handle) {
        return handle;
      }
      return task;
    } else {
      // cause an error by calling it directly.
      return delegate.apply(window, args);
    }
  });
  clearNative = patchMethod(window, cancelName, delegate => function (self, args) {
    const id = args[0];
    let task;
    if (typeof id === 'number') {
      // non nodejs env.
      task = tasksByHandleId[id];
    } else {
      // nodejs env.
      task = id && id[taskSymbol];
      // other environments.
      if (!task) {
        task = id;
      }
    }
    if (task && typeof task.type === 'string') {
      if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
        if (typeof id === 'number') {
          delete tasksByHandleId[id];
        } else if (id) {
          id[taskSymbol] = null;
        }
        // Do not cancel already canceled functions
        task.zone.cancelTask(task);
      }
    } else {
      // cause an error by calling it directly.
      delegate.apply(window, args);
    }
  });
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCustomElements(_global, api) {
  const {
    isBrowser,
    isMix
  } = api.getGlobalObjects();
  if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
    return;
  }
  const callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
  api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
  if (Zone[api.symbol('patchEventTarget')]) {
    // EventTarget is already patched.
    return;
  }
  const {
    eventNames,
    zoneSymbolEventNames,
    TRUE_STR,
    FALSE_STR,
    ZONE_SYMBOL_PREFIX
  } = api.getGlobalObjects();
  //  predefine all __zone_symbol__ + eventName + true/false string
  for (let i = 0; i < eventNames.length; i++) {
    const eventName = eventNames[i];
    const falseEventName = eventName + FALSE_STR;
    const trueEventName = eventName + TRUE_STR;
    const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
    const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
    zoneSymbolEventNames[eventName] = {};
    zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
    zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
  }
  const EVENT_TARGET = _global['EventTarget'];
  if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
    return;
  }
  api.patchEventTarget(_global, api, [EVENT_TARGET && EVENT_TARGET.prototype]);
  return true;
}
function patchEvent(global, api) {
  api.patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('legacy', global => {
  const legacyPatch = global[Zone.__symbol__('legacyPatch')];
  if (legacyPatch) {
    legacyPatch();
  }
});
Zone.__load_patch('queueMicrotask', (global, Zone, api) => {
  api.patchMethod(global, 'queueMicrotask', delegate => {
    return function (self, args) {
      Zone.current.scheduleMicroTask('queueMicrotask', args[0]);
    };
  });
});
Zone.__load_patch('timers', global => {
  const set = 'set';
  const clear = 'clear';
  patchTimer(global, set, clear, 'Timeout');
  patchTimer(global, set, clear, 'Interval');
  patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', global => {
  patchTimer(global, 'request', 'cancel', 'AnimationFrame');
  patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
  patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', (global, Zone) => {
  const blockingMethods = ['alert', 'prompt', 'confirm'];
  for (let i = 0; i < blockingMethods.length; i++) {
    const name = blockingMethods[i];
    patchMethod(global, name, (delegate, symbol, name) => {
      return function (s, args) {
        return Zone.current.run(delegate, global, args, name);
      };
    });
  }
});
Zone.__load_patch('EventTarget', (global, Zone, api) => {
  patchEvent(global, api);
  eventTargetPatch(global, api);
  // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
  const XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
  if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
    api.patchEventTarget(global, api, [XMLHttpRequestEventTarget.prototype]);
  }
});
Zone.__load_patch('MutationObserver', (global, Zone, api) => {
  patchClass('MutationObserver');
  patchClass('WebKitMutationObserver');
});
Zone.__load_patch('IntersectionObserver', (global, Zone, api) => {
  patchClass('IntersectionObserver');
});
Zone.__load_patch('FileReader', (global, Zone, api) => {
  patchClass('FileReader');
});
Zone.__load_patch('on_property', (global, Zone, api) => {
  propertyDescriptorPatch(api, global);
});
Zone.__load_patch('customElements', (global, Zone, api) => {
  patchCustomElements(global, api);
});
Zone.__load_patch('XHR', (global, Zone) => {
  // Treat XMLHttpRequest as a macrotask.
  patchXHR(global);
  const XHR_TASK = zoneSymbol('xhrTask');
  const XHR_SYNC = zoneSymbol('xhrSync');
  const XHR_LISTENER = zoneSymbol('xhrListener');
  const XHR_SCHEDULED = zoneSymbol('xhrScheduled');
  const XHR_URL = zoneSymbol('xhrURL');
  const XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
  function patchXHR(window) {
    const XMLHttpRequest = window['XMLHttpRequest'];
    if (!XMLHttpRequest) {
      // XMLHttpRequest is not available in service worker
      return;
    }
    const XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    function findPendingTask(target) {
      return target[XHR_TASK];
    }
    let oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
    let oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
    if (!oriAddListener) {
      const XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];
      if (XMLHttpRequestEventTarget) {
        const XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
        oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
      }
    }
    const READY_STATE_CHANGE = 'readystatechange';
    const SCHEDULED = 'scheduled';
    function scheduleTask(task) {
      const data = task.data;
      const target = data.target;
      target[XHR_SCHEDULED] = false;
      target[XHR_ERROR_BEFORE_SCHEDULED] = false;
      // remove existing event listener
      const listener = target[XHR_LISTENER];
      if (!oriAddListener) {
        oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
      }
      if (listener) {
        oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
      }
      const newListener = target[XHR_LISTENER] = () => {
        if (target.readyState === target.DONE) {
          // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
          // readyState=4 multiple times, so we need to check task state here
          if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
            // check whether the xhr has registered onload listener
            // if that is the case, the task should invoke after all
            // onload listeners finish.
            // Also if the request failed without response (status = 0), the load event handler
            // will not be triggered, in that case, we should also invoke the placeholder callback
            // to close the XMLHttpRequest::send macroTask.
            // https://github.com/angular/angular/issues/38795
            const loadTasks = target[Zone.__symbol__('loadfalse')];
            if (target.status !== 0 && loadTasks && loadTasks.length > 0) {
              const oriInvoke = task.invoke;
              task.invoke = function () {
                // need to load the tasks again, because in other
                // load listener, they may remove themselves
                const loadTasks = target[Zone.__symbol__('loadfalse')];
                for (let i = 0; i < loadTasks.length; i++) {
                  if (loadTasks[i] === task) {
                    loadTasks.splice(i, 1);
                  }
                }
                if (!data.aborted && task.state === SCHEDULED) {
                  oriInvoke.call(task);
                }
              };
              loadTasks.push(task);
            } else {
              task.invoke();
            }
          } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
            // error occurs when xhr.send()
            target[XHR_ERROR_BEFORE_SCHEDULED] = true;
          }
        }
      };
      oriAddListener.call(target, READY_STATE_CHANGE, newListener);
      const storedTask = target[XHR_TASK];
      if (!storedTask) {
        target[XHR_TASK] = task;
      }
      sendNative.apply(target, data.args);
      target[XHR_SCHEDULED] = true;
      return task;
    }
    function placeholderCallback() {}
    function clearTask(task) {
      const data = task.data;
      // Note - ideally, we would call data.target.removeEventListener here, but it's too late
      // to prevent it from firing. So instead, we store info for the event listener.
      data.aborted = true;
      return abortNative.apply(data.target, data.args);
    }
    const openNative = patchMethod(XMLHttpRequestPrototype, 'open', () => function (self, args) {
      self[XHR_SYNC] = args[2] == false;
      self[XHR_URL] = args[1];
      return openNative.apply(self, args);
    });
    const XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
    const fetchTaskAborting = zoneSymbol('fetchTaskAborting');
    const fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
    const sendNative = patchMethod(XMLHttpRequestPrototype, 'send', () => function (self, args) {
      if (Zone.current[fetchTaskScheduling] === true) {
        // a fetch is scheduling, so we are using xhr to polyfill fetch
        // and because we already schedule macroTask for fetch, we should
        // not schedule a macroTask for xhr again
        return sendNative.apply(self, args);
      }
      if (self[XHR_SYNC]) {
        // if the XHR is sync there is no task to schedule, just execute the code.
        return sendNative.apply(self, args);
      } else {
        const options = {
          target: self,
          url: self[XHR_URL],
          isPeriodic: false,
          args: args,
          aborted: false
        };
        const task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
        if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted && task.state === SCHEDULED) {
          // xhr request throw error when send
          // we should invoke task instead of leaving a scheduled
          // pending macroTask
          task.invoke();
        }
      }
    });
    const abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', () => function (self, args) {
      const task = findPendingTask(self);
      if (task && typeof task.type == 'string') {
        // If the XHR has already completed, do nothing.
        // If the XHR has already been aborted, do nothing.
        // Fix #569, call abort multiple times before done will cause
        // macroTask task count be negative number
        if (task.cancelFn == null || task.data && task.data.aborted) {
          return;
        }
        task.zone.cancelTask(task);
      } else if (Zone.current[fetchTaskAborting] === true) {
        // the abort is called from fetch polyfill, we need to call native abort of XHR.
        return abortNative.apply(self, args);
      }
      // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
      // task
      // to cancel. Do nothing.
    });
  }
});

Zone.__load_patch('geolocation', global => {
  /// GEO_LOCATION
  if (global['navigator'] && global['navigator'].geolocation) {
    patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
  }
});
Zone.__load_patch('PromiseRejectionEvent', (global, Zone) => {
  // handle unhandled promise rejection
  function findPromiseRejectionHandler(evtName) {
    return function (e) {
      const eventTasks = findEventTasks(global, evtName);
      eventTasks.forEach(eventTask => {
        // windows has added unhandledrejection event listener
        // trigger the event listener
        const PromiseRejectionEvent = global['PromiseRejectionEvent'];
        if (PromiseRejectionEvent) {
          const evt = new PromiseRejectionEvent(evtName, {
            promise: e.promise,
            reason: e.rejection
          });
          eventTask.invoke(evt);
        }
      });
    };
  }
  if (global['PromiseRejectionEvent']) {
    Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
    Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
  }
});

/***/ }),

/***/ 95805:
/*!***************************************************!*\
  !*** ./node_modules/pdfkit/js/data/Helvetica.afm ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = "StartFontMetrics 4.1\r\nComment Copyright (c) 1985, 1987, 1989, 1990, 1997 Adobe Systems Incorporated.  All Rights Reserved.\r\nComment Creation Date: Thu May  1 12:38:23 1997\r\nComment UniqueID 43054\r\nComment VMusage 37069 48094\r\nFontName Helvetica\r\nFullName Helvetica\r\nFamilyName Helvetica\r\nWeight Medium\r\nItalicAngle 0\r\nIsFixedPitch false\r\nCharacterSet ExtendedRoman\r\nFontBBox -166 -225 1000 931 \r\nUnderlinePosition -100\r\nUnderlineThickness 50\r\nVersion 002.000\r\nNotice Copyright (c) 1985, 1987, 1989, 1990, 1997 Adobe Systems Incorporated.  All Rights Reserved.Helvetica is a trademark of Linotype-Hell AG and/or its subsidiaries.\r\nEncodingScheme AdobeStandardEncoding\r\nCapHeight 718\r\nXHeight 523\r\nAscender 718\r\nDescender -207\r\nStdHW 76\r\nStdVW 88\r\nStartCharMetrics 315\r\nC 32 ; WX 278 ; N space ; B 0 0 0 0 ;\r\nC 33 ; WX 278 ; N exclam ; B 90 0 187 718 ;\r\nC 34 ; WX 355 ; N quotedbl ; B 70 463 285 718 ;\r\nC 35 ; WX 556 ; N numbersign ; B 28 0 529 688 ;\r\nC 36 ; WX 556 ; N dollar ; B 32 -115 520 775 ;\r\nC 37 ; WX 889 ; N percent ; B 39 -19 850 703 ;\r\nC 38 ; WX 667 ; N ampersand ; B 44 -15 645 718 ;\r\nC 39 ; WX 222 ; N quoteright ; B 53 463 157 718 ;\r\nC 40 ; WX 333 ; N parenleft ; B 68 -207 299 733 ;\r\nC 41 ; WX 333 ; N parenright ; B 34 -207 265 733 ;\r\nC 42 ; WX 389 ; N asterisk ; B 39 431 349 718 ;\r\nC 43 ; WX 584 ; N plus ; B 39 0 545 505 ;\r\nC 44 ; WX 278 ; N comma ; B 87 -147 191 106 ;\r\nC 45 ; WX 333 ; N hyphen ; B 44 232 289 322 ;\r\nC 46 ; WX 278 ; N period ; B 87 0 191 106 ;\r\nC 47 ; WX 278 ; N slash ; B -17 -19 295 737 ;\r\nC 48 ; WX 556 ; N zero ; B 37 -19 519 703 ;\r\nC 49 ; WX 556 ; N one ; B 101 0 359 703 ;\r\nC 50 ; WX 556 ; N two ; B 26 0 507 703 ;\r\nC 51 ; WX 556 ; N three ; B 34 -19 522 703 ;\r\nC 52 ; WX 556 ; N four ; B 25 0 523 703 ;\r\nC 53 ; WX 556 ; N five ; B 32 -19 514 688 ;\r\nC 54 ; WX 556 ; N six ; B 38 -19 518 703 ;\r\nC 55 ; WX 556 ; N seven ; B 37 0 523 688 ;\r\nC 56 ; WX 556 ; N eight ; B 38 -19 517 703 ;\r\nC 57 ; WX 556 ; N nine ; B 42 -19 514 703 ;\r\nC 58 ; WX 278 ; N colon ; B 87 0 191 516 ;\r\nC 59 ; WX 278 ; N semicolon ; B 87 -147 191 516 ;\r\nC 60 ; WX 584 ; N less ; B 48 11 536 495 ;\r\nC 61 ; WX 584 ; N equal ; B 39 115 545 390 ;\r\nC 62 ; WX 584 ; N greater ; B 48 11 536 495 ;\r\nC 63 ; WX 556 ; N question ; B 56 0 492 727 ;\r\nC 64 ; WX 1015 ; N at ; B 147 -19 868 737 ;\r\nC 65 ; WX 667 ; N A ; B 14 0 654 718 ;\r\nC 66 ; WX 667 ; N B ; B 74 0 627 718 ;\r\nC 67 ; WX 722 ; N C ; B 44 -19 681 737 ;\r\nC 68 ; WX 722 ; N D ; B 81 0 674 718 ;\r\nC 69 ; WX 667 ; N E ; B 86 0 616 718 ;\r\nC 70 ; WX 611 ; N F ; B 86 0 583 718 ;\r\nC 71 ; WX 778 ; N G ; B 48 -19 704 737 ;\r\nC 72 ; WX 722 ; N H ; B 77 0 646 718 ;\r\nC 73 ; WX 278 ; N I ; B 91 0 188 718 ;\r\nC 74 ; WX 500 ; N J ; B 17 -19 428 718 ;\r\nC 75 ; WX 667 ; N K ; B 76 0 663 718 ;\r\nC 76 ; WX 556 ; N L ; B 76 0 537 718 ;\r\nC 77 ; WX 833 ; N M ; B 73 0 761 718 ;\r\nC 78 ; WX 722 ; N N ; B 76 0 646 718 ;\r\nC 79 ; WX 778 ; N O ; B 39 -19 739 737 ;\r\nC 80 ; WX 667 ; N P ; B 86 0 622 718 ;\r\nC 81 ; WX 778 ; N Q ; B 39 -56 739 737 ;\r\nC 82 ; WX 722 ; N R ; B 88 0 684 718 ;\r\nC 83 ; WX 667 ; N S ; B 49 -19 620 737 ;\r\nC 84 ; WX 611 ; N T ; B 14 0 597 718 ;\r\nC 85 ; WX 722 ; N U ; B 79 -19 644 718 ;\r\nC 86 ; WX 667 ; N V ; B 20 0 647 718 ;\r\nC 87 ; WX 944 ; N W ; B 16 0 928 718 ;\r\nC 88 ; WX 667 ; N X ; B 19 0 648 718 ;\r\nC 89 ; WX 667 ; N Y ; B 14 0 653 718 ;\r\nC 90 ; WX 611 ; N Z ; B 23 0 588 718 ;\r\nC 91 ; WX 278 ; N bracketleft ; B 63 -196 250 722 ;\r\nC 92 ; WX 278 ; N backslash ; B -17 -19 295 737 ;\r\nC 93 ; WX 278 ; N bracketright ; B 28 -196 215 722 ;\r\nC 94 ; WX 469 ; N asciicircum ; B -14 264 483 688 ;\r\nC 95 ; WX 556 ; N underscore ; B 0 -125 556 -75 ;\r\nC 96 ; WX 222 ; N quoteleft ; B 65 470 169 725 ;\r\nC 97 ; WX 556 ; N a ; B 36 -15 530 538 ;\r\nC 98 ; WX 556 ; N b ; B 58 -15 517 718 ;\r\nC 99 ; WX 500 ; N c ; B 30 -15 477 538 ;\r\nC 100 ; WX 556 ; N d ; B 35 -15 499 718 ;\r\nC 101 ; WX 556 ; N e ; B 40 -15 516 538 ;\r\nC 102 ; WX 278 ; N f ; B 14 0 262 728 ; L i fi ; L l fl ;\r\nC 103 ; WX 556 ; N g ; B 40 -220 499 538 ;\r\nC 104 ; WX 556 ; N h ; B 65 0 491 718 ;\r\nC 105 ; WX 222 ; N i ; B 67 0 155 718 ;\r\nC 106 ; WX 222 ; N j ; B -16 -210 155 718 ;\r\nC 107 ; WX 500 ; N k ; B 67 0 501 718 ;\r\nC 108 ; WX 222 ; N l ; B 67 0 155 718 ;\r\nC 109 ; WX 833 ; N m ; B 65 0 769 538 ;\r\nC 110 ; WX 556 ; N n ; B 65 0 491 538 ;\r\nC 111 ; WX 556 ; N o ; B 35 -14 521 538 ;\r\nC 112 ; WX 556 ; N p ; B 58 -207 517 538 ;\r\nC 113 ; WX 556 ; N q ; B 35 -207 494 538 ;\r\nC 114 ; WX 333 ; N r ; B 77 0 332 538 ;\r\nC 115 ; WX 500 ; N s ; B 32 -15 464 538 ;\r\nC 116 ; WX 278 ; N t ; B 14 -7 257 669 ;\r\nC 117 ; WX 556 ; N u ; B 68 -15 489 523 ;\r\nC 118 ; WX 500 ; N v ; B 8 0 492 523 ;\r\nC 119 ; WX 722 ; N w ; B 14 0 709 523 ;\r\nC 120 ; WX 500 ; N x ; B 11 0 490 523 ;\r\nC 121 ; WX 500 ; N y ; B 11 -214 489 523 ;\r\nC 122 ; WX 500 ; N z ; B 31 0 469 523 ;\r\nC 123 ; WX 334 ; N braceleft ; B 42 -196 292 722 ;\r\nC 124 ; WX 260 ; N bar ; B 94 -225 167 775 ;\r\nC 125 ; WX 334 ; N braceright ; B 42 -196 292 722 ;\r\nC 126 ; WX 584 ; N asciitilde ; B 61 180 523 326 ;\r\nC 161 ; WX 333 ; N exclamdown ; B 118 -195 215 523 ;\r\nC 162 ; WX 556 ; N cent ; B 51 -115 513 623 ;\r\nC 163 ; WX 556 ; N sterling ; B 33 -16 539 718 ;\r\nC 164 ; WX 167 ; N fraction ; B -166 -19 333 703 ;\r\nC 165 ; WX 556 ; N yen ; B 3 0 553 688 ;\r\nC 166 ; WX 556 ; N florin ; B -11 -207 501 737 ;\r\nC 167 ; WX 556 ; N section ; B 43 -191 512 737 ;\r\nC 168 ; WX 556 ; N currency ; B 28 99 528 603 ;\r\nC 169 ; WX 191 ; N quotesingle ; B 59 463 132 718 ;\r\nC 170 ; WX 333 ; N quotedblleft ; B 38 470 307 725 ;\r\nC 171 ; WX 556 ; N guillemotleft ; B 97 108 459 446 ;\r\nC 172 ; WX 333 ; N guilsinglleft ; B 88 108 245 446 ;\r\nC 173 ; WX 333 ; N guilsinglright ; B 88 108 245 446 ;\r\nC 174 ; WX 500 ; N fi ; B 14 0 434 728 ;\r\nC 175 ; WX 500 ; N fl ; B 14 0 432 728 ;\r\nC 177 ; WX 556 ; N endash ; B 0 240 556 313 ;\r\nC 178 ; WX 556 ; N dagger ; B 43 -159 514 718 ;\r\nC 179 ; WX 556 ; N daggerdbl ; B 43 -159 514 718 ;\r\nC 180 ; WX 278 ; N periodcentered ; B 77 190 202 315 ;\r\nC 182 ; WX 537 ; N paragraph ; B 18 -173 497 718 ;\r\nC 183 ; WX 350 ; N bullet ; B 18 202 333 517 ;\r\nC 184 ; WX 222 ; N quotesinglbase ; B 53 -149 157 106 ;\r\nC 185 ; WX 333 ; N quotedblbase ; B 26 -149 295 106 ;\r\nC 186 ; WX 333 ; N quotedblright ; B 26 463 295 718 ;\r\nC 187 ; WX 556 ; N guillemotright ; B 97 108 459 446 ;\r\nC 188 ; WX 1000 ; N ellipsis ; B 115 0 885 106 ;\r\nC 189 ; WX 1000 ; N perthousand ; B 7 -19 994 703 ;\r\nC 191 ; WX 611 ; N questiondown ; B 91 -201 527 525 ;\r\nC 193 ; WX 333 ; N grave ; B 14 593 211 734 ;\r\nC 194 ; WX 333 ; N acute ; B 122 593 319 734 ;\r\nC 195 ; WX 333 ; N circumflex ; B 21 593 312 734 ;\r\nC 196 ; WX 333 ; N tilde ; B -4 606 337 722 ;\r\nC 197 ; WX 333 ; N macron ; B 10 627 323 684 ;\r\nC 198 ; WX 333 ; N breve ; B 13 595 321 731 ;\r\nC 199 ; WX 333 ; N dotaccent ; B 121 604 212 706 ;\r\nC 200 ; WX 333 ; N dieresis ; B 40 604 293 706 ;\r\nC 202 ; WX 333 ; N ring ; B 75 572 259 756 ;\r\nC 203 ; WX 333 ; N cedilla ; B 45 -225 259 0 ;\r\nC 205 ; WX 333 ; N hungarumlaut ; B 31 593 409 734 ;\r\nC 206 ; WX 333 ; N ogonek ; B 73 -225 287 0 ;\r\nC 207 ; WX 333 ; N caron ; B 21 593 312 734 ;\r\nC 208 ; WX 1000 ; N emdash ; B 0 240 1000 313 ;\r\nC 225 ; WX 1000 ; N AE ; B 8 0 951 718 ;\r\nC 227 ; WX 370 ; N ordfeminine ; B 24 405 346 737 ;\r\nC 232 ; WX 556 ; N Lslash ; B -20 0 537 718 ;\r\nC 233 ; WX 778 ; N Oslash ; B 39 -19 740 737 ;\r\nC 234 ; WX 1000 ; N OE ; B 36 -19 965 737 ;\r\nC 235 ; WX 365 ; N ordmasculine ; B 25 405 341 737 ;\r\nC 241 ; WX 889 ; N ae ; B 36 -15 847 538 ;\r\nC 245 ; WX 278 ; N dotlessi ; B 95 0 183 523 ;\r\nC 248 ; WX 222 ; N lslash ; B -20 0 242 718 ;\r\nC 249 ; WX 611 ; N oslash ; B 28 -22 537 545 ;\r\nC 250 ; WX 944 ; N oe ; B 35 -15 902 538 ;\r\nC 251 ; WX 611 ; N germandbls ; B 67 -15 571 728 ;\r\nC -1 ; WX 278 ; N Idieresis ; B 13 0 266 901 ;\r\nC -1 ; WX 556 ; N eacute ; B 40 -15 516 734 ;\r\nC -1 ; WX 556 ; N abreve ; B 36 -15 530 731 ;\r\nC -1 ; WX 556 ; N uhungarumlaut ; B 68 -15 521 734 ;\r\nC -1 ; WX 556 ; N ecaron ; B 40 -15 516 734 ;\r\nC -1 ; WX 667 ; N Ydieresis ; B 14 0 653 901 ;\r\nC -1 ; WX 584 ; N divide ; B 39 -19 545 524 ;\r\nC -1 ; WX 667 ; N Yacute ; B 14 0 653 929 ;\r\nC -1 ; WX 667 ; N Acircumflex ; B 14 0 654 929 ;\r\nC -1 ; WX 556 ; N aacute ; B 36 -15 530 734 ;\r\nC -1 ; WX 722 ; N Ucircumflex ; B 79 -19 644 929 ;\r\nC -1 ; WX 500 ; N yacute ; B 11 -214 489 734 ;\r\nC -1 ; WX 500 ; N scommaaccent ; B 32 -225 464 538 ;\r\nC -1 ; WX 556 ; N ecircumflex ; B 40 -15 516 734 ;\r\nC -1 ; WX 722 ; N Uring ; B 79 -19 644 931 ;\r\nC -1 ; WX 722 ; N Udieresis ; B 79 -19 644 901 ;\r\nC -1 ; WX 556 ; N aogonek ; B 36 -220 547 538 ;\r\nC -1 ; WX 722 ; N Uacute ; B 79 -19 644 929 ;\r\nC -1 ; WX 556 ; N uogonek ; B 68 -225 519 523 ;\r\nC -1 ; WX 667 ; N Edieresis ; B 86 0 616 901 ;\r\nC -1 ; WX 722 ; N Dcroat ; B 0 0 674 718 ;\r\nC -1 ; WX 250 ; N commaaccent ; B 87 -225 181 -40 ;\r\nC -1 ; WX 737 ; N copyright ; B -14 -19 752 737 ;\r\nC -1 ; WX 667 ; N Emacron ; B 86 0 616 879 ;\r\nC -1 ; WX 500 ; N ccaron ; B 30 -15 477 734 ;\r\nC -1 ; WX 556 ; N aring ; B 36 -15 530 756 ;\r\nC -1 ; WX 722 ; N Ncommaaccent ; B 76 -225 646 718 ;\r\nC -1 ; WX 222 ; N lacute ; B 67 0 264 929 ;\r\nC -1 ; WX 556 ; N agrave ; B 36 -15 530 734 ;\r\nC -1 ; WX 611 ; N Tcommaaccent ; B 14 -225 597 718 ;\r\nC -1 ; WX 722 ; N Cacute ; B 44 -19 681 929 ;\r\nC -1 ; WX 556 ; N atilde ; B 36 -15 530 722 ;\r\nC -1 ; WX 667 ; N Edotaccent ; B 86 0 616 901 ;\r\nC -1 ; WX 500 ; N scaron ; B 32 -15 464 734 ;\r\nC -1 ; WX 500 ; N scedilla ; B 32 -225 464 538 ;\r\nC -1 ; WX 278 ; N iacute ; B 95 0 292 734 ;\r\nC -1 ; WX 471 ; N lozenge ; B 10 0 462 728 ;\r\nC -1 ; WX 722 ; N Rcaron ; B 88 0 684 929 ;\r\nC -1 ; WX 778 ; N Gcommaaccent ; B 48 -225 704 737 ;\r\nC -1 ; WX 556 ; N ucircumflex ; B 68 -15 489 734 ;\r\nC -1 ; WX 556 ; N acircumflex ; B 36 -15 530 734 ;\r\nC -1 ; WX 667 ; N Amacron ; B 14 0 654 879 ;\r\nC -1 ; WX 333 ; N rcaron ; B 61 0 352 734 ;\r\nC -1 ; WX 500 ; N ccedilla ; B 30 -225 477 538 ;\r\nC -1 ; WX 611 ; N Zdotaccent ; B 23 0 588 901 ;\r\nC -1 ; WX 667 ; N Thorn ; B 86 0 622 718 ;\r\nC -1 ; WX 778 ; N Omacron ; B 39 -19 739 879 ;\r\nC -1 ; WX 722 ; N Racute ; B 88 0 684 929 ;\r\nC -1 ; WX 667 ; N Sacute ; B 49 -19 620 929 ;\r\nC -1 ; WX 643 ; N dcaron ; B 35 -15 655 718 ;\r\nC -1 ; WX 722 ; N Umacron ; B 79 -19 644 879 ;\r\nC -1 ; WX 556 ; N uring ; B 68 -15 489 756 ;\r\nC -1 ; WX 333 ; N threesuperior ; B 5 270 325 703 ;\r\nC -1 ; WX 778 ; N Ograve ; B 39 -19 739 929 ;\r\nC -1 ; WX 667 ; N Agrave ; B 14 0 654 929 ;\r\nC -1 ; WX 667 ; N Abreve ; B 14 0 654 926 ;\r\nC -1 ; WX 584 ; N multiply ; B 39 0 545 506 ;\r\nC -1 ; WX 556 ; N uacute ; B 68 -15 489 734 ;\r\nC -1 ; WX 611 ; N Tcaron ; B 14 0 597 929 ;\r\nC -1 ; WX 476 ; N partialdiff ; B 13 -38 463 714 ;\r\nC -1 ; WX 500 ; N ydieresis ; B 11 -214 489 706 ;\r\nC -1 ; WX 722 ; N Nacute ; B 76 0 646 929 ;\r\nC -1 ; WX 278 ; N icircumflex ; B -6 0 285 734 ;\r\nC -1 ; WX 667 ; N Ecircumflex ; B 86 0 616 929 ;\r\nC -1 ; WX 556 ; N adieresis ; B 36 -15 530 706 ;\r\nC -1 ; WX 556 ; N edieresis ; B 40 -15 516 706 ;\r\nC -1 ; WX 500 ; N cacute ; B 30 -15 477 734 ;\r\nC -1 ; WX 556 ; N nacute ; B 65 0 491 734 ;\r\nC -1 ; WX 556 ; N umacron ; B 68 -15 489 684 ;\r\nC -1 ; WX 722 ; N Ncaron ; B 76 0 646 929 ;\r\nC -1 ; WX 278 ; N Iacute ; B 91 0 292 929 ;\r\nC -1 ; WX 584 ; N plusminus ; B 39 0 545 506 ;\r\nC -1 ; WX 260 ; N brokenbar ; B 94 -150 167 700 ;\r\nC -1 ; WX 737 ; N registered ; B -14 -19 752 737 ;\r\nC -1 ; WX 778 ; N Gbreve ; B 48 -19 704 926 ;\r\nC -1 ; WX 278 ; N Idotaccent ; B 91 0 188 901 ;\r\nC -1 ; WX 600 ; N summation ; B 15 -10 586 706 ;\r\nC -1 ; WX 667 ; N Egrave ; B 86 0 616 929 ;\r\nC -1 ; WX 333 ; N racute ; B 77 0 332 734 ;\r\nC -1 ; WX 556 ; N omacron ; B 35 -14 521 684 ;\r\nC -1 ; WX 611 ; N Zacute ; B 23 0 588 929 ;\r\nC -1 ; WX 611 ; N Zcaron ; B 23 0 588 929 ;\r\nC -1 ; WX 549 ; N greaterequal ; B 26 0 523 674 ;\r\nC -1 ; WX 722 ; N Eth ; B 0 0 674 718 ;\r\nC -1 ; WX 722 ; N Ccedilla ; B 44 -225 681 737 ;\r\nC -1 ; WX 222 ; N lcommaaccent ; B 67 -225 167 718 ;\r\nC -1 ; WX 317 ; N tcaron ; B 14 -7 329 808 ;\r\nC -1 ; WX 556 ; N eogonek ; B 40 -225 516 538 ;\r\nC -1 ; WX 722 ; N Uogonek ; B 79 -225 644 718 ;\r\nC -1 ; WX 667 ; N Aacute ; B 14 0 654 929 ;\r\nC -1 ; WX 667 ; N Adieresis ; B 14 0 654 901 ;\r\nC -1 ; WX 556 ; N egrave ; B 40 -15 516 734 ;\r\nC -1 ; WX 500 ; N zacute ; B 31 0 469 734 ;\r\nC -1 ; WX 222 ; N iogonek ; B -31 -225 183 718 ;\r\nC -1 ; WX 778 ; N Oacute ; B 39 -19 739 929 ;\r\nC -1 ; WX 556 ; N oacute ; B 35 -14 521 734 ;\r\nC -1 ; WX 556 ; N amacron ; B 36 -15 530 684 ;\r\nC -1 ; WX 500 ; N sacute ; B 32 -15 464 734 ;\r\nC -1 ; WX 278 ; N idieresis ; B 13 0 266 706 ;\r\nC -1 ; WX 778 ; N Ocircumflex ; B 39 -19 739 929 ;\r\nC -1 ; WX 722 ; N Ugrave ; B 79 -19 644 929 ;\r\nC -1 ; WX 612 ; N Delta ; B 6 0 608 688 ;\r\nC -1 ; WX 556 ; N thorn ; B 58 -207 517 718 ;\r\nC -1 ; WX 333 ; N twosuperior ; B 4 281 323 703 ;\r\nC -1 ; WX 778 ; N Odieresis ; B 39 -19 739 901 ;\r\nC -1 ; WX 556 ; N mu ; B 68 -207 489 523 ;\r\nC -1 ; WX 278 ; N igrave ; B -13 0 184 734 ;\r\nC -1 ; WX 556 ; N ohungarumlaut ; B 35 -14 521 734 ;\r\nC -1 ; WX 667 ; N Eogonek ; B 86 -220 633 718 ;\r\nC -1 ; WX 556 ; N dcroat ; B 35 -15 550 718 ;\r\nC -1 ; WX 834 ; N threequarters ; B 45 -19 810 703 ;\r\nC -1 ; WX 667 ; N Scedilla ; B 49 -225 620 737 ;\r\nC -1 ; WX 299 ; N lcaron ; B 67 0 311 718 ;\r\nC -1 ; WX 667 ; N Kcommaaccent ; B 76 -225 663 718 ;\r\nC -1 ; WX 556 ; N Lacute ; B 76 0 537 929 ;\r\nC -1 ; WX 1000 ; N trademark ; B 46 306 903 718 ;\r\nC -1 ; WX 556 ; N edotaccent ; B 40 -15 516 706 ;\r\nC -1 ; WX 278 ; N Igrave ; B -13 0 188 929 ;\r\nC -1 ; WX 278 ; N Imacron ; B -17 0 296 879 ;\r\nC -1 ; WX 556 ; N Lcaron ; B 76 0 537 718 ;\r\nC -1 ; WX 834 ; N onehalf ; B 43 -19 773 703 ;\r\nC -1 ; WX 549 ; N lessequal ; B 26 0 523 674 ;\r\nC -1 ; WX 556 ; N ocircumflex ; B 35 -14 521 734 ;\r\nC -1 ; WX 556 ; N ntilde ; B 65 0 491 722 ;\r\nC -1 ; WX 722 ; N Uhungarumlaut ; B 79 -19 644 929 ;\r\nC -1 ; WX 667 ; N Eacute ; B 86 0 616 929 ;\r\nC -1 ; WX 556 ; N emacron ; B 40 -15 516 684 ;\r\nC -1 ; WX 556 ; N gbreve ; B 40 -220 499 731 ;\r\nC -1 ; WX 834 ; N onequarter ; B 73 -19 756 703 ;\r\nC -1 ; WX 667 ; N Scaron ; B 49 -19 620 929 ;\r\nC -1 ; WX 667 ; N Scommaaccent ; B 49 -225 620 737 ;\r\nC -1 ; WX 778 ; N Ohungarumlaut ; B 39 -19 739 929 ;\r\nC -1 ; WX 400 ; N degree ; B 54 411 346 703 ;\r\nC -1 ; WX 556 ; N ograve ; B 35 -14 521 734 ;\r\nC -1 ; WX 722 ; N Ccaron ; B 44 -19 681 929 ;\r\nC -1 ; WX 556 ; N ugrave ; B 68 -15 489 734 ;\r\nC -1 ; WX 453 ; N radical ; B -4 -80 458 762 ;\r\nC -1 ; WX 722 ; N Dcaron ; B 81 0 674 929 ;\r\nC -1 ; WX 333 ; N rcommaaccent ; B 77 -225 332 538 ;\r\nC -1 ; WX 722 ; N Ntilde ; B 76 0 646 917 ;\r\nC -1 ; WX 556 ; N otilde ; B 35 -14 521 722 ;\r\nC -1 ; WX 722 ; N Rcommaaccent ; B 88 -225 684 718 ;\r\nC -1 ; WX 556 ; N Lcommaaccent ; B 76 -225 537 718 ;\r\nC -1 ; WX 667 ; N Atilde ; B 14 0 654 917 ;\r\nC -1 ; WX 667 ; N Aogonek ; B 14 -225 654 718 ;\r\nC -1 ; WX 667 ; N Aring ; B 14 0 654 931 ;\r\nC -1 ; WX 778 ; N Otilde ; B 39 -19 739 917 ;\r\nC -1 ; WX 500 ; N zdotaccent ; B 31 0 469 706 ;\r\nC -1 ; WX 667 ; N Ecaron ; B 86 0 616 929 ;\r\nC -1 ; WX 278 ; N Iogonek ; B -3 -225 211 718 ;\r\nC -1 ; WX 500 ; N kcommaaccent ; B 67 -225 501 718 ;\r\nC -1 ; WX 584 ; N minus ; B 39 216 545 289 ;\r\nC -1 ; WX 278 ; N Icircumflex ; B -6 0 285 929 ;\r\nC -1 ; WX 556 ; N ncaron ; B 65 0 491 734 ;\r\nC -1 ; WX 278 ; N tcommaaccent ; B 14 -225 257 669 ;\r\nC -1 ; WX 584 ; N logicalnot ; B 39 108 545 390 ;\r\nC -1 ; WX 556 ; N odieresis ; B 35 -14 521 706 ;\r\nC -1 ; WX 556 ; N udieresis ; B 68 -15 489 706 ;\r\nC -1 ; WX 549 ; N notequal ; B 12 -35 537 551 ;\r\nC -1 ; WX 556 ; N gcommaaccent ; B 40 -220 499 822 ;\r\nC -1 ; WX 556 ; N eth ; B 35 -15 522 737 ;\r\nC -1 ; WX 500 ; N zcaron ; B 31 0 469 734 ;\r\nC -1 ; WX 556 ; N ncommaaccent ; B 65 -225 491 538 ;\r\nC -1 ; WX 333 ; N onesuperior ; B 43 281 222 703 ;\r\nC -1 ; WX 278 ; N imacron ; B 5 0 272 684 ;\r\nC -1 ; WX 556 ; N Euro ; B 0 0 0 0 ;\r\nEndCharMetrics\r\nStartKernData\r\nStartKernPairs 2705\r\nKPX A C -30\r\nKPX A Cacute -30\r\nKPX A Ccaron -30\r\nKPX A Ccedilla -30\r\nKPX A G -30\r\nKPX A Gbreve -30\r\nKPX A Gcommaaccent -30\r\nKPX A O -30\r\nKPX A Oacute -30\r\nKPX A Ocircumflex -30\r\nKPX A Odieresis -30\r\nKPX A Ograve -30\r\nKPX A Ohungarumlaut -30\r\nKPX A Omacron -30\r\nKPX A Oslash -30\r\nKPX A Otilde -30\r\nKPX A Q -30\r\nKPX A T -120\r\nKPX A Tcaron -120\r\nKPX A Tcommaaccent -120\r\nKPX A U -50\r\nKPX A Uacute -50\r\nKPX A Ucircumflex -50\r\nKPX A Udieresis -50\r\nKPX A Ugrave -50\r\nKPX A Uhungarumlaut -50\r\nKPX A Umacron -50\r\nKPX A Uogonek -50\r\nKPX A Uring -50\r\nKPX A V -70\r\nKPX A W -50\r\nKPX A Y -100\r\nKPX A Yacute -100\r\nKPX A Ydieresis -100\r\nKPX A u -30\r\nKPX A uacute -30\r\nKPX A ucircumflex -30\r\nKPX A udieresis -30\r\nKPX A ugrave -30\r\nKPX A uhungarumlaut -30\r\nKPX A umacron -30\r\nKPX A uogonek -30\r\nKPX A uring -30\r\nKPX A v -40\r\nKPX A w -40\r\nKPX A y -40\r\nKPX A yacute -40\r\nKPX A ydieresis -40\r\nKPX Aacute C -30\r\nKPX Aacute Cacute -30\r\nKPX Aacute Ccaron -30\r\nKPX Aacute Ccedilla -30\r\nKPX Aacute G -30\r\nKPX Aacute Gbreve -30\r\nKPX Aacute Gcommaaccent -30\r\nKPX Aacute O -30\r\nKPX Aacute Oacute -30\r\nKPX Aacute Ocircumflex -30\r\nKPX Aacute Odieresis -30\r\nKPX Aacute Ograve -30\r\nKPX Aacute Ohungarumlaut -30\r\nKPX Aacute Omacron -30\r\nKPX Aacute Oslash -30\r\nKPX Aacute Otilde -30\r\nKPX Aacute Q -30\r\nKPX Aacute T -120\r\nKPX Aacute Tcaron -120\r\nKPX Aacute Tcommaaccent -120\r\nKPX Aacute U -50\r\nKPX Aacute Uacute -50\r\nKPX Aacute Ucircumflex -50\r\nKPX Aacute Udieresis -50\r\nKPX Aacute Ugrave -50\r\nKPX Aacute Uhungarumlaut -50\r\nKPX Aacute Umacron -50\r\nKPX Aacute Uogonek -50\r\nKPX Aacute Uring -50\r\nKPX Aacute V -70\r\nKPX Aacute W -50\r\nKPX Aacute Y -100\r\nKPX Aacute Yacute -100\r\nKPX Aacute Ydieresis -100\r\nKPX Aacute u -30\r\nKPX Aacute uacute -30\r\nKPX Aacute ucircumflex -30\r\nKPX Aacute udieresis -30\r\nKPX Aacute ugrave -30\r\nKPX Aacute uhungarumlaut -30\r\nKPX Aacute umacron -30\r\nKPX Aacute uogonek -30\r\nKPX Aacute uring -30\r\nKPX Aacute v -40\r\nKPX Aacute w -40\r\nKPX Aacute y -40\r\nKPX Aacute yacute -40\r\nKPX Aacute ydieresis -40\r\nKPX Abreve C -30\r\nKPX Abreve Cacute -30\r\nKPX Abreve Ccaron -30\r\nKPX Abreve Ccedilla -30\r\nKPX Abreve G -30\r\nKPX Abreve Gbreve -30\r\nKPX Abreve Gcommaaccent -30\r\nKPX Abreve O -30\r\nKPX Abreve Oacute -30\r\nKPX Abreve Ocircumflex -30\r\nKPX Abreve Odieresis -30\r\nKPX Abreve Ograve -30\r\nKPX Abreve Ohungarumlaut -30\r\nKPX Abreve Omacron -30\r\nKPX Abreve Oslash -30\r\nKPX Abreve Otilde -30\r\nKPX Abreve Q -30\r\nKPX Abreve T -120\r\nKPX Abreve Tcaron -120\r\nKPX Abreve Tcommaaccent -120\r\nKPX Abreve U -50\r\nKPX Abreve Uacute -50\r\nKPX Abreve Ucircumflex -50\r\nKPX Abreve Udieresis -50\r\nKPX Abreve Ugrave -50\r\nKPX Abreve Uhungarumlaut -50\r\nKPX Abreve Umacron -50\r\nKPX Abreve Uogonek -50\r\nKPX Abreve Uring -50\r\nKPX Abreve V -70\r\nKPX Abreve W -50\r\nKPX Abreve Y -100\r\nKPX Abreve Yacute -100\r\nKPX Abreve Ydieresis -100\r\nKPX Abreve u -30\r\nKPX Abreve uacute -30\r\nKPX Abreve ucircumflex -30\r\nKPX Abreve udieresis -30\r\nKPX Abreve ugrave -30\r\nKPX Abreve uhungarumlaut -30\r\nKPX Abreve umacron -30\r\nKPX Abreve uogonek -30\r\nKPX Abreve uring -30\r\nKPX Abreve v -40\r\nKPX Abreve w -40\r\nKPX Abreve y -40\r\nKPX Abreve yacute -40\r\nKPX Abreve ydieresis -40\r\nKPX Acircumflex C -30\r\nKPX Acircumflex Cacute -30\r\nKPX Acircumflex Ccaron -30\r\nKPX Acircumflex Ccedilla -30\r\nKPX Acircumflex G -30\r\nKPX Acircumflex Gbreve -30\r\nKPX Acircumflex Gcommaaccent -30\r\nKPX Acircumflex O -30\r\nKPX Acircumflex Oacute -30\r\nKPX Acircumflex Ocircumflex -30\r\nKPX Acircumflex Odieresis -30\r\nKPX Acircumflex Ograve -30\r\nKPX Acircumflex Ohungarumlaut -30\r\nKPX Acircumflex Omacron -30\r\nKPX Acircumflex Oslash -30\r\nKPX Acircumflex Otilde -30\r\nKPX Acircumflex Q -30\r\nKPX Acircumflex T -120\r\nKPX Acircumflex Tcaron -120\r\nKPX Acircumflex Tcommaaccent -120\r\nKPX Acircumflex U -50\r\nKPX Acircumflex Uacute -50\r\nKPX Acircumflex Ucircumflex -50\r\nKPX Acircumflex Udieresis -50\r\nKPX Acircumflex Ugrave -50\r\nKPX Acircumflex Uhungarumlaut -50\r\nKPX Acircumflex Umacron -50\r\nKPX Acircumflex Uogonek -50\r\nKPX Acircumflex Uring -50\r\nKPX Acircumflex V -70\r\nKPX Acircumflex W -50\r\nKPX Acircumflex Y -100\r\nKPX Acircumflex Yacute -100\r\nKPX Acircumflex Ydieresis -100\r\nKPX Acircumflex u -30\r\nKPX Acircumflex uacute -30\r\nKPX Acircumflex ucircumflex -30\r\nKPX Acircumflex udieresis -30\r\nKPX Acircumflex ugrave -30\r\nKPX Acircumflex uhungarumlaut -30\r\nKPX Acircumflex umacron -30\r\nKPX Acircumflex uogonek -30\r\nKPX Acircumflex uring -30\r\nKPX Acircumflex v -40\r\nKPX Acircumflex w -40\r\nKPX Acircumflex y -40\r\nKPX Acircumflex yacute -40\r\nKPX Acircumflex ydieresis -40\r\nKPX Adieresis C -30\r\nKPX Adieresis Cacute -30\r\nKPX Adieresis Ccaron -30\r\nKPX Adieresis Ccedilla -30\r\nKPX Adieresis G -30\r\nKPX Adieresis Gbreve -30\r\nKPX Adieresis Gcommaaccent -30\r\nKPX Adieresis O -30\r\nKPX Adieresis Oacute -30\r\nKPX Adieresis Ocircumflex -30\r\nKPX Adieresis Odieresis -30\r\nKPX Adieresis Ograve -30\r\nKPX Adieresis Ohungarumlaut -30\r\nKPX Adieresis Omacron -30\r\nKPX Adieresis Oslash -30\r\nKPX Adieresis Otilde -30\r\nKPX Adieresis Q -30\r\nKPX Adieresis T -120\r\nKPX Adieresis Tcaron -120\r\nKPX Adieresis Tcommaaccent -120\r\nKPX Adieresis U -50\r\nKPX Adieresis Uacute -50\r\nKPX Adieresis Ucircumflex -50\r\nKPX Adieresis Udieresis -50\r\nKPX Adieresis Ugrave -50\r\nKPX Adieresis Uhungarumlaut -50\r\nKPX Adieresis Umacron -50\r\nKPX Adieresis Uogonek -50\r\nKPX Adieresis Uring -50\r\nKPX Adieresis V -70\r\nKPX Adieresis W -50\r\nKPX Adieresis Y -100\r\nKPX Adieresis Yacute -100\r\nKPX Adieresis Ydieresis -100\r\nKPX Adieresis u -30\r\nKPX Adieresis uacute -30\r\nKPX Adieresis ucircumflex -30\r\nKPX Adieresis udieresis -30\r\nKPX Adieresis ugrave -30\r\nKPX Adieresis uhungarumlaut -30\r\nKPX Adieresis umacron -30\r\nKPX Adieresis uogonek -30\r\nKPX Adieresis uring -30\r\nKPX Adieresis v -40\r\nKPX Adieresis w -40\r\nKPX Adieresis y -40\r\nKPX Adieresis yacute -40\r\nKPX Adieresis ydieresis -40\r\nKPX Agrave C -30\r\nKPX Agrave Cacute -30\r\nKPX Agrave Ccaron -30\r\nKPX Agrave Ccedilla -30\r\nKPX Agrave G -30\r\nKPX Agrave Gbreve -30\r\nKPX Agrave Gcommaaccent -30\r\nKPX Agrave O -30\r\nKPX Agrave Oacute -30\r\nKPX Agrave Ocircumflex -30\r\nKPX Agrave Odieresis -30\r\nKPX Agrave Ograve -30\r\nKPX Agrave Ohungarumlaut -30\r\nKPX Agrave Omacron -30\r\nKPX Agrave Oslash -30\r\nKPX Agrave Otilde -30\r\nKPX Agrave Q -30\r\nKPX Agrave T -120\r\nKPX Agrave Tcaron -120\r\nKPX Agrave Tcommaaccent -120\r\nKPX Agrave U -50\r\nKPX Agrave Uacute -50\r\nKPX Agrave Ucircumflex -50\r\nKPX Agrave Udieresis -50\r\nKPX Agrave Ugrave -50\r\nKPX Agrave Uhungarumlaut -50\r\nKPX Agrave Umacron -50\r\nKPX Agrave Uogonek -50\r\nKPX Agrave Uring -50\r\nKPX Agrave V -70\r\nKPX Agrave W -50\r\nKPX Agrave Y -100\r\nKPX Agrave Yacute -100\r\nKPX Agrave Ydieresis -100\r\nKPX Agrave u -30\r\nKPX Agrave uacute -30\r\nKPX Agrave ucircumflex -30\r\nKPX Agrave udieresis -30\r\nKPX Agrave ugrave -30\r\nKPX Agrave uhungarumlaut -30\r\nKPX Agrave umacron -30\r\nKPX Agrave uogonek -30\r\nKPX Agrave uring -30\r\nKPX Agrave v -40\r\nKPX Agrave w -40\r\nKPX Agrave y -40\r\nKPX Agrave yacute -40\r\nKPX Agrave ydieresis -40\r\nKPX Amacron C -30\r\nKPX Amacron Cacute -30\r\nKPX Amacron Ccaron -30\r\nKPX Amacron Ccedilla -30\r\nKPX Amacron G -30\r\nKPX Amacron Gbreve -30\r\nKPX Amacron Gcommaaccent -30\r\nKPX Amacron O -30\r\nKPX Amacron Oacute -30\r\nKPX Amacron Ocircumflex -30\r\nKPX Amacron Odieresis -30\r\nKPX Amacron Ograve -30\r\nKPX Amacron Ohungarumlaut -30\r\nKPX Amacron Omacron -30\r\nKPX Amacron Oslash -30\r\nKPX Amacron Otilde -30\r\nKPX Amacron Q -30\r\nKPX Amacron T -120\r\nKPX Amacron Tcaron -120\r\nKPX Amacron Tcommaaccent -120\r\nKPX Amacron U -50\r\nKPX Amacron Uacute -50\r\nKPX Amacron Ucircumflex -50\r\nKPX Amacron Udieresis -50\r\nKPX Amacron Ugrave -50\r\nKPX Amacron Uhungarumlaut -50\r\nKPX Amacron Umacron -50\r\nKPX Amacron Uogonek -50\r\nKPX Amacron Uring -50\r\nKPX Amacron V -70\r\nKPX Amacron W -50\r\nKPX Amacron Y -100\r\nKPX Amacron Yacute -100\r\nKPX Amacron Ydieresis -100\r\nKPX Amacron u -30\r\nKPX Amacron uacute -30\r\nKPX Amacron ucircumflex -30\r\nKPX Amacron udieresis -30\r\nKPX Amacron ugrave -30\r\nKPX Amacron uhungarumlaut -30\r\nKPX Amacron umacron -30\r\nKPX Amacron uogonek -30\r\nKPX Amacron uring -30\r\nKPX Amacron v -40\r\nKPX Amacron w -40\r\nKPX Amacron y -40\r\nKPX Amacron yacute -40\r\nKPX Amacron ydieresis -40\r\nKPX Aogonek C -30\r\nKPX Aogonek Cacute -30\r\nKPX Aogonek Ccaron -30\r\nKPX Aogonek Ccedilla -30\r\nKPX Aogonek G -30\r\nKPX Aogonek Gbreve -30\r\nKPX Aogonek Gcommaaccent -30\r\nKPX Aogonek O -30\r\nKPX Aogonek Oacute -30\r\nKPX Aogonek Ocircumflex -30\r\nKPX Aogonek Odieresis -30\r\nKPX Aogonek Ograve -30\r\nKPX Aogonek Ohungarumlaut -30\r\nKPX Aogonek Omacron -30\r\nKPX Aogonek Oslash -30\r\nKPX Aogonek Otilde -30\r\nKPX Aogonek Q -30\r\nKPX Aogonek T -120\r\nKPX Aogonek Tcaron -120\r\nKPX Aogonek Tcommaaccent -120\r\nKPX Aogonek U -50\r\nKPX Aogonek Uacute -50\r\nKPX Aogonek Ucircumflex -50\r\nKPX Aogonek Udieresis -50\r\nKPX Aogonek Ugrave -50\r\nKPX Aogonek Uhungarumlaut -50\r\nKPX Aogonek Umacron -50\r\nKPX Aogonek Uogonek -50\r\nKPX Aogonek Uring -50\r\nKPX Aogonek V -70\r\nKPX Aogonek W -50\r\nKPX Aogonek Y -100\r\nKPX Aogonek Yacute -100\r\nKPX Aogonek Ydieresis -100\r\nKPX Aogonek u -30\r\nKPX Aogonek uacute -30\r\nKPX Aogonek ucircumflex -30\r\nKPX Aogonek udieresis -30\r\nKPX Aogonek ugrave -30\r\nKPX Aogonek uhungarumlaut -30\r\nKPX Aogonek umacron -30\r\nKPX Aogonek uogonek -30\r\nKPX Aogonek uring -30\r\nKPX Aogonek v -40\r\nKPX Aogonek w -40\r\nKPX Aogonek y -40\r\nKPX Aogonek yacute -40\r\nKPX Aogonek ydieresis -40\r\nKPX Aring C -30\r\nKPX Aring Cacute -30\r\nKPX Aring Ccaron -30\r\nKPX Aring Ccedilla -30\r\nKPX Aring G -30\r\nKPX Aring Gbreve -30\r\nKPX Aring Gcommaaccent -30\r\nKPX Aring O -30\r\nKPX Aring Oacute -30\r\nKPX Aring Ocircumflex -30\r\nKPX Aring Odieresis -30\r\nKPX Aring Ograve -30\r\nKPX Aring Ohungarumlaut -30\r\nKPX Aring Omacron -30\r\nKPX Aring Oslash -30\r\nKPX Aring Otilde -30\r\nKPX Aring Q -30\r\nKPX Aring T -120\r\nKPX Aring Tcaron -120\r\nKPX Aring Tcommaaccent -120\r\nKPX Aring U -50\r\nKPX Aring Uacute -50\r\nKPX Aring Ucircumflex -50\r\nKPX Aring Udieresis -50\r\nKPX Aring Ugrave -50\r\nKPX Aring Uhungarumlaut -50\r\nKPX Aring Umacron -50\r\nKPX Aring Uogonek -50\r\nKPX Aring Uring -50\r\nKPX Aring V -70\r\nKPX Aring W -50\r\nKPX Aring Y -100\r\nKPX Aring Yacute -100\r\nKPX Aring Ydieresis -100\r\nKPX Aring u -30\r\nKPX Aring uacute -30\r\nKPX Aring ucircumflex -30\r\nKPX Aring udieresis -30\r\nKPX Aring ugrave -30\r\nKPX Aring uhungarumlaut -30\r\nKPX Aring umacron -30\r\nKPX Aring uogonek -30\r\nKPX Aring uring -30\r\nKPX Aring v -40\r\nKPX Aring w -40\r\nKPX Aring y -40\r\nKPX Aring yacute -40\r\nKPX Aring ydieresis -40\r\nKPX Atilde C -30\r\nKPX Atilde Cacute -30\r\nKPX Atilde Ccaron -30\r\nKPX Atilde Ccedilla -30\r\nKPX Atilde G -30\r\nKPX Atilde Gbreve -30\r\nKPX Atilde Gcommaaccent -30\r\nKPX Atilde O -30\r\nKPX Atilde Oacute -30\r\nKPX Atilde Ocircumflex -30\r\nKPX Atilde Odieresis -30\r\nKPX Atilde Ograve -30\r\nKPX Atilde Ohungarumlaut -30\r\nKPX Atilde Omacron -30\r\nKPX Atilde Oslash -30\r\nKPX Atilde Otilde -30\r\nKPX Atilde Q -30\r\nKPX Atilde T -120\r\nKPX Atilde Tcaron -120\r\nKPX Atilde Tcommaaccent -120\r\nKPX Atilde U -50\r\nKPX Atilde Uacute -50\r\nKPX Atilde Ucircumflex -50\r\nKPX Atilde Udieresis -50\r\nKPX Atilde Ugrave -50\r\nKPX Atilde Uhungarumlaut -50\r\nKPX Atilde Umacron -50\r\nKPX Atilde Uogonek -50\r\nKPX Atilde Uring -50\r\nKPX Atilde V -70\r\nKPX Atilde W -50\r\nKPX Atilde Y -100\r\nKPX Atilde Yacute -100\r\nKPX Atilde Ydieresis -100\r\nKPX Atilde u -30\r\nKPX Atilde uacute -30\r\nKPX Atilde ucircumflex -30\r\nKPX Atilde udieresis -30\r\nKPX Atilde ugrave -30\r\nKPX Atilde uhungarumlaut -30\r\nKPX Atilde umacron -30\r\nKPX Atilde uogonek -30\r\nKPX Atilde uring -30\r\nKPX Atilde v -40\r\nKPX Atilde w -40\r\nKPX Atilde y -40\r\nKPX Atilde yacute -40\r\nKPX Atilde ydieresis -40\r\nKPX B U -10\r\nKPX B Uacute -10\r\nKPX B Ucircumflex -10\r\nKPX B Udieresis -10\r\nKPX B Ugrave -10\r\nKPX B Uhungarumlaut -10\r\nKPX B Umacron -10\r\nKPX B Uogonek -10\r\nKPX B Uring -10\r\nKPX B comma -20\r\nKPX B period -20\r\nKPX C comma -30\r\nKPX C period -30\r\nKPX Cacute comma -30\r\nKPX Cacute period -30\r\nKPX Ccaron comma -30\r\nKPX Ccaron period -30\r\nKPX Ccedilla comma -30\r\nKPX Ccedilla period -30\r\nKPX D A -40\r\nKPX D Aacute -40\r\nKPX D Abreve -40\r\nKPX D Acircumflex -40\r\nKPX D Adieresis -40\r\nKPX D Agrave -40\r\nKPX D Amacron -40\r\nKPX D Aogonek -40\r\nKPX D Aring -40\r\nKPX D Atilde -40\r\nKPX D V -70\r\nKPX D W -40\r\nKPX D Y -90\r\nKPX D Yacute -90\r\nKPX D Ydieresis -90\r\nKPX D comma -70\r\nKPX D period -70\r\nKPX Dcaron A -40\r\nKPX Dcaron Aacute -40\r\nKPX Dcaron Abreve -40\r\nKPX Dcaron Acircumflex -40\r\nKPX Dcaron Adieresis -40\r\nKPX Dcaron Agrave -40\r\nKPX Dcaron Amacron -40\r\nKPX Dcaron Aogonek -40\r\nKPX Dcaron Aring -40\r\nKPX Dcaron Atilde -40\r\nKPX Dcaron V -70\r\nKPX Dcaron W -40\r\nKPX Dcaron Y -90\r\nKPX Dcaron Yacute -90\r\nKPX Dcaron Ydieresis -90\r\nKPX Dcaron comma -70\r\nKPX Dcaron period -70\r\nKPX Dcroat A -40\r\nKPX Dcroat Aacute -40\r\nKPX Dcroat Abreve -40\r\nKPX Dcroat Acircumflex -40\r\nKPX Dcroat Adieresis -40\r\nKPX Dcroat Agrave -40\r\nKPX Dcroat Amacron -40\r\nKPX Dcroat Aogonek -40\r\nKPX Dcroat Aring -40\r\nKPX Dcroat Atilde -40\r\nKPX Dcroat V -70\r\nKPX Dcroat W -40\r\nKPX Dcroat Y -90\r\nKPX Dcroat Yacute -90\r\nKPX Dcroat Ydieresis -90\r\nKPX Dcroat comma -70\r\nKPX Dcroat period -70\r\nKPX F A -80\r\nKPX F Aacute -80\r\nKPX F Abreve -80\r\nKPX F Acircumflex -80\r\nKPX F Adieresis -80\r\nKPX F Agrave -80\r\nKPX F Amacron -80\r\nKPX F Aogonek -80\r\nKPX F Aring -80\r\nKPX F Atilde -80\r\nKPX F a -50\r\nKPX F aacute -50\r\nKPX F abreve -50\r\nKPX F acircumflex -50\r\nKPX F adieresis -50\r\nKPX F agrave -50\r\nKPX F amacron -50\r\nKPX F aogonek -50\r\nKPX F aring -50\r\nKPX F atilde -50\r\nKPX F comma -150\r\nKPX F e -30\r\nKPX F eacute -30\r\nKPX F ecaron -30\r\nKPX F ecircumflex -30\r\nKPX F edieresis -30\r\nKPX F edotaccent -30\r\nKPX F egrave -30\r\nKPX F emacron -30\r\nKPX F eogonek -30\r\nKPX F o -30\r\nKPX F oacute -30\r\nKPX F ocircumflex -30\r\nKPX F odieresis -30\r\nKPX F ograve -30\r\nKPX F ohungarumlaut -30\r\nKPX F omacron -30\r\nKPX F oslash -30\r\nKPX F otilde -30\r\nKPX F period -150\r\nKPX F r -45\r\nKPX F racute -45\r\nKPX F rcaron -45\r\nKPX F rcommaaccent -45\r\nKPX J A -20\r\nKPX J Aacute -20\r\nKPX J Abreve -20\r\nKPX J Acircumflex -20\r\nKPX J Adieresis -20\r\nKPX J Agrave -20\r\nKPX J Amacron -20\r\nKPX J Aogonek -20\r\nKPX J Aring -20\r\nKPX J Atilde -20\r\nKPX J a -20\r\nKPX J aacute -20\r\nKPX J abreve -20\r\nKPX J acircumflex -20\r\nKPX J adieresis -20\r\nKPX J agrave -20\r\nKPX J amacron -20\r\nKPX J aogonek -20\r\nKPX J aring -20\r\nKPX J atilde -20\r\nKPX J comma -30\r\nKPX J period -30\r\nKPX J u -20\r\nKPX J uacute -20\r\nKPX J ucircumflex -20\r\nKPX J udieresis -20\r\nKPX J ugrave -20\r\nKPX J uhungarumlaut -20\r\nKPX J umacron -20\r\nKPX J uogonek -20\r\nKPX J uring -20\r\nKPX K O -50\r\nKPX K Oacute -50\r\nKPX K Ocircumflex -50\r\nKPX K Odieresis -50\r\nKPX K Ograve -50\r\nKPX K Ohungarumlaut -50\r\nKPX K Omacron -50\r\nKPX K Oslash -50\r\nKPX K Otilde -50\r\nKPX K e -40\r\nKPX K eacute -40\r\nKPX K ecaron -40\r\nKPX K ecircumflex -40\r\nKPX K edieresis -40\r\nKPX K edotaccent -40\r\nKPX K egrave -40\r\nKPX K emacron -40\r\nKPX K eogonek -40\r\nKPX K o -40\r\nKPX K oacute -40\r\nKPX K ocircumflex -40\r\nKPX K odieresis -40\r\nKPX K ograve -40\r\nKPX K ohungarumlaut -40\r\nKPX K omacron -40\r\nKPX K oslash -40\r\nKPX K otilde -40\r\nKPX K u -30\r\nKPX K uacute -30\r\nKPX K ucircumflex -30\r\nKPX K udieresis -30\r\nKPX K ugrave -30\r\nKPX K uhungarumlaut -30\r\nKPX K umacron -30\r\nKPX K uogonek -30\r\nKPX K uring -30\r\nKPX K y -50\r\nKPX K yacute -50\r\nKPX K ydieresis -50\r\nKPX Kcommaaccent O -50\r\nKPX Kcommaaccent Oacute -50\r\nKPX Kcommaaccent Ocircumflex -50\r\nKPX Kcommaaccent Odieresis -50\r\nKPX Kcommaaccent Ograve -50\r\nKPX Kcommaaccent Ohungarumlaut -50\r\nKPX Kcommaaccent Omacron -50\r\nKPX Kcommaaccent Oslash -50\r\nKPX Kcommaaccent Otilde -50\r\nKPX Kcommaaccent e -40\r\nKPX Kcommaaccent eacute -40\r\nKPX Kcommaaccent ecaron -40\r\nKPX Kcommaaccent ecircumflex -40\r\nKPX Kcommaaccent edieresis -40\r\nKPX Kcommaaccent edotaccent -40\r\nKPX Kcommaaccent egrave -40\r\nKPX Kcommaaccent emacron -40\r\nKPX Kcommaaccent eogonek -40\r\nKPX Kcommaaccent o -40\r\nKPX Kcommaaccent oacute -40\r\nKPX Kcommaaccent ocircumflex -40\r\nKPX Kcommaaccent odieresis -40\r\nKPX Kcommaaccent ograve -40\r\nKPX Kcommaaccent ohungarumlaut -40\r\nKPX Kcommaaccent omacron -40\r\nKPX Kcommaaccent oslash -40\r\nKPX Kcommaaccent otilde -40\r\nKPX Kcommaaccent u -30\r\nKPX Kcommaaccent uacute -30\r\nKPX Kcommaaccent ucircumflex -30\r\nKPX Kcommaaccent udieresis -30\r\nKPX Kcommaaccent ugrave -30\r\nKPX Kcommaaccent uhungarumlaut -30\r\nKPX Kcommaaccent umacron -30\r\nKPX Kcommaaccent uogonek -30\r\nKPX Kcommaaccent uring -30\r\nKPX Kcommaaccent y -50\r\nKPX Kcommaaccent yacute -50\r\nKPX Kcommaaccent ydieresis -50\r\nKPX L T -110\r\nKPX L Tcaron -110\r\nKPX L Tcommaaccent -110\r\nKPX L V -110\r\nKPX L W -70\r\nKPX L Y -140\r\nKPX L Yacute -140\r\nKPX L Ydieresis -140\r\nKPX L quotedblright -140\r\nKPX L quoteright -160\r\nKPX L y -30\r\nKPX L yacute -30\r\nKPX L ydieresis -30\r\nKPX Lacute T -110\r\nKPX Lacute Tcaron -110\r\nKPX Lacute Tcommaaccent -110\r\nKPX Lacute V -110\r\nKPX Lacute W -70\r\nKPX Lacute Y -140\r\nKPX Lacute Yacute -140\r\nKPX Lacute Ydieresis -140\r\nKPX Lacute quotedblright -140\r\nKPX Lacute quoteright -160\r\nKPX Lacute y -30\r\nKPX Lacute yacute -30\r\nKPX Lacute ydieresis -30\r\nKPX Lcaron T -110\r\nKPX Lcaron Tcaron -110\r\nKPX Lcaron Tcommaaccent -110\r\nKPX Lcaron V -110\r\nKPX Lcaron W -70\r\nKPX Lcaron Y -140\r\nKPX Lcaron Yacute -140\r\nKPX Lcaron Ydieresis -140\r\nKPX Lcaron quotedblright -140\r\nKPX Lcaron quoteright -160\r\nKPX Lcaron y -30\r\nKPX Lcaron yacute -30\r\nKPX Lcaron ydieresis -30\r\nKPX Lcommaaccent T -110\r\nKPX Lcommaaccent Tcaron -110\r\nKPX Lcommaaccent Tcommaaccent -110\r\nKPX Lcommaaccent V -110\r\nKPX Lcommaaccent W -70\r\nKPX Lcommaaccent Y -140\r\nKPX Lcommaaccent Yacute -140\r\nKPX Lcommaaccent Ydieresis -140\r\nKPX Lcommaaccent quotedblright -140\r\nKPX Lcommaaccent quoteright -160\r\nKPX Lcommaaccent y -30\r\nKPX Lcommaaccent yacute -30\r\nKPX Lcommaaccent ydieresis -30\r\nKPX Lslash T -110\r\nKPX Lslash Tcaron -110\r\nKPX Lslash Tcommaaccent -110\r\nKPX Lslash V -110\r\nKPX Lslash W -70\r\nKPX Lslash Y -140\r\nKPX Lslash Yacute -140\r\nKPX Lslash Ydieresis -140\r\nKPX Lslash quotedblright -140\r\nKPX Lslash quoteright -160\r\nKPX Lslash y -30\r\nKPX Lslash yacute -30\r\nKPX Lslash ydieresis -30\r\nKPX O A -20\r\nKPX O Aacute -20\r\nKPX O Abreve -20\r\nKPX O Acircumflex -20\r\nKPX O Adieresis -20\r\nKPX O Agrave -20\r\nKPX O Amacron -20\r\nKPX O Aogonek -20\r\nKPX O Aring -20\r\nKPX O Atilde -20\r\nKPX O T -40\r\nKPX O Tcaron -40\r\nKPX O Tcommaaccent -40\r\nKPX O V -50\r\nKPX O W -30\r\nKPX O X -60\r\nKPX O Y -70\r\nKPX O Yacute -70\r\nKPX O Ydieresis -70\r\nKPX O comma -40\r\nKPX O period -40\r\nKPX Oacute A -20\r\nKPX Oacute Aacute -20\r\nKPX Oacute Abreve -20\r\nKPX Oacute Acircumflex -20\r\nKPX Oacute Adieresis -20\r\nKPX Oacute Agrave -20\r\nKPX Oacute Amacron -20\r\nKPX Oacute Aogonek -20\r\nKPX Oacute Aring -20\r\nKPX Oacute Atilde -20\r\nKPX Oacute T -40\r\nKPX Oacute Tcaron -40\r\nKPX Oacute Tcommaaccent -40\r\nKPX Oacute V -50\r\nKPX Oacute W -30\r\nKPX Oacute X -60\r\nKPX Oacute Y -70\r\nKPX Oacute Yacute -70\r\nKPX Oacute Ydieresis -70\r\nKPX Oacute comma -40\r\nKPX Oacute period -40\r\nKPX Ocircumflex A -20\r\nKPX Ocircumflex Aacute -20\r\nKPX Ocircumflex Abreve -20\r\nKPX Ocircumflex Acircumflex -20\r\nKPX Ocircumflex Adieresis -20\r\nKPX Ocircumflex Agrave -20\r\nKPX Ocircumflex Amacron -20\r\nKPX Ocircumflex Aogonek -20\r\nKPX Ocircumflex Aring -20\r\nKPX Ocircumflex Atilde -20\r\nKPX Ocircumflex T -40\r\nKPX Ocircumflex Tcaron -40\r\nKPX Ocircumflex Tcommaaccent -40\r\nKPX Ocircumflex V -50\r\nKPX Ocircumflex W -30\r\nKPX Ocircumflex X -60\r\nKPX Ocircumflex Y -70\r\nKPX Ocircumflex Yacute -70\r\nKPX Ocircumflex Ydieresis -70\r\nKPX Ocircumflex comma -40\r\nKPX Ocircumflex period -40\r\nKPX Odieresis A -20\r\nKPX Odieresis Aacute -20\r\nKPX Odieresis Abreve -20\r\nKPX Odieresis Acircumflex -20\r\nKPX Odieresis Adieresis -20\r\nKPX Odieresis Agrave -20\r\nKPX Odieresis Amacron -20\r\nKPX Odieresis Aogonek -20\r\nKPX Odieresis Aring -20\r\nKPX Odieresis Atilde -20\r\nKPX Odieresis T -40\r\nKPX Odieresis Tcaron -40\r\nKPX Odieresis Tcommaaccent -40\r\nKPX Odieresis V -50\r\nKPX Odieresis W -30\r\nKPX Odieresis X -60\r\nKPX Odieresis Y -70\r\nKPX Odieresis Yacute -70\r\nKPX Odieresis Ydieresis -70\r\nKPX Odieresis comma -40\r\nKPX Odieresis period -40\r\nKPX Ograve A -20\r\nKPX Ograve Aacute -20\r\nKPX Ograve Abreve -20\r\nKPX Ograve Acircumflex -20\r\nKPX Ograve Adieresis -20\r\nKPX Ograve Agrave -20\r\nKPX Ograve Amacron -20\r\nKPX Ograve Aogonek -20\r\nKPX Ograve Aring -20\r\nKPX Ograve Atilde -20\r\nKPX Ograve T -40\r\nKPX Ograve Tcaron -40\r\nKPX Ograve Tcommaaccent -40\r\nKPX Ograve V -50\r\nKPX Ograve W -30\r\nKPX Ograve X -60\r\nKPX Ograve Y -70\r\nKPX Ograve Yacute -70\r\nKPX Ograve Ydieresis -70\r\nKPX Ograve comma -40\r\nKPX Ograve period -40\r\nKPX Ohungarumlaut A -20\r\nKPX Ohungarumlaut Aacute -20\r\nKPX Ohungarumlaut Abreve -20\r\nKPX Ohungarumlaut Acircumflex -20\r\nKPX Ohungarumlaut Adieresis -20\r\nKPX Ohungarumlaut Agrave -20\r\nKPX Ohungarumlaut Amacron -20\r\nKPX Ohungarumlaut Aogonek -20\r\nKPX Ohungarumlaut Aring -20\r\nKPX Ohungarumlaut Atilde -20\r\nKPX Ohungarumlaut T -40\r\nKPX Ohungarumlaut Tcaron -40\r\nKPX Ohungarumlaut Tcommaaccent -40\r\nKPX Ohungarumlaut V -50\r\nKPX Ohungarumlaut W -30\r\nKPX Ohungarumlaut X -60\r\nKPX Ohungarumlaut Y -70\r\nKPX Ohungarumlaut Yacute -70\r\nKPX Ohungarumlaut Ydieresis -70\r\nKPX Ohungarumlaut comma -40\r\nKPX Ohungarumlaut period -40\r\nKPX Omacron A -20\r\nKPX Omacron Aacute -20\r\nKPX Omacron Abreve -20\r\nKPX Omacron Acircumflex -20\r\nKPX Omacron Adieresis -20\r\nKPX Omacron Agrave -20\r\nKPX Omacron Amacron -20\r\nKPX Omacron Aogonek -20\r\nKPX Omacron Aring -20\r\nKPX Omacron Atilde -20\r\nKPX Omacron T -40\r\nKPX Omacron Tcaron -40\r\nKPX Omacron Tcommaaccent -40\r\nKPX Omacron V -50\r\nKPX Omacron W -30\r\nKPX Omacron X -60\r\nKPX Omacron Y -70\r\nKPX Omacron Yacute -70\r\nKPX Omacron Ydieresis -70\r\nKPX Omacron comma -40\r\nKPX Omacron period -40\r\nKPX Oslash A -20\r\nKPX Oslash Aacute -20\r\nKPX Oslash Abreve -20\r\nKPX Oslash Acircumflex -20\r\nKPX Oslash Adieresis -20\r\nKPX Oslash Agrave -20\r\nKPX Oslash Amacron -20\r\nKPX Oslash Aogonek -20\r\nKPX Oslash Aring -20\r\nKPX Oslash Atilde -20\r\nKPX Oslash T -40\r\nKPX Oslash Tcaron -40\r\nKPX Oslash Tcommaaccent -40\r\nKPX Oslash V -50\r\nKPX Oslash W -30\r\nKPX Oslash X -60\r\nKPX Oslash Y -70\r\nKPX Oslash Yacute -70\r\nKPX Oslash Ydieresis -70\r\nKPX Oslash comma -40\r\nKPX Oslash period -40\r\nKPX Otilde A -20\r\nKPX Otilde Aacute -20\r\nKPX Otilde Abreve -20\r\nKPX Otilde Acircumflex -20\r\nKPX Otilde Adieresis -20\r\nKPX Otilde Agrave -20\r\nKPX Otilde Amacron -20\r\nKPX Otilde Aogonek -20\r\nKPX Otilde Aring -20\r\nKPX Otilde Atilde -20\r\nKPX Otilde T -40\r\nKPX Otilde Tcaron -40\r\nKPX Otilde Tcommaaccent -40\r\nKPX Otilde V -50\r\nKPX Otilde W -30\r\nKPX Otilde X -60\r\nKPX Otilde Y -70\r\nKPX Otilde Yacute -70\r\nKPX Otilde Ydieresis -70\r\nKPX Otilde comma -40\r\nKPX Otilde period -40\r\nKPX P A -120\r\nKPX P Aacute -120\r\nKPX P Abreve -120\r\nKPX P Acircumflex -120\r\nKPX P Adieresis -120\r\nKPX P Agrave -120\r\nKPX P Amacron -120\r\nKPX P Aogonek -120\r\nKPX P Aring -120\r\nKPX P Atilde -120\r\nKPX P a -40\r\nKPX P aacute -40\r\nKPX P abreve -40\r\nKPX P acircumflex -40\r\nKPX P adieresis -40\r\nKPX P agrave -40\r\nKPX P amacron -40\r\nKPX P aogonek -40\r\nKPX P aring -40\r\nKPX P atilde -40\r\nKPX P comma -180\r\nKPX P e -50\r\nKPX P eacute -50\r\nKPX P ecaron -50\r\nKPX P ecircumflex -50\r\nKPX P edieresis -50\r\nKPX P edotaccent -50\r\nKPX P egrave -50\r\nKPX P emacron -50\r\nKPX P eogonek -50\r\nKPX P o -50\r\nKPX P oacute -50\r\nKPX P ocircumflex -50\r\nKPX P odieresis -50\r\nKPX P ograve -50\r\nKPX P ohungarumlaut -50\r\nKPX P omacron -50\r\nKPX P oslash -50\r\nKPX P otilde -50\r\nKPX P period -180\r\nKPX Q U -10\r\nKPX Q Uacute -10\r\nKPX Q Ucircumflex -10\r\nKPX Q Udieresis -10\r\nKPX Q Ugrave -10\r\nKPX Q Uhungarumlaut -10\r\nKPX Q Umacron -10\r\nKPX Q Uogonek -10\r\nKPX Q Uring -10\r\nKPX R O -20\r\nKPX R Oacute -20\r\nKPX R Ocircumflex -20\r\nKPX R Odieresis -20\r\nKPX R Ograve -20\r\nKPX R Ohungarumlaut -20\r\nKPX R Omacron -20\r\nKPX R Oslash -20\r\nKPX R Otilde -20\r\nKPX R T -30\r\nKPX R Tcaron -30\r\nKPX R Tcommaaccent -30\r\nKPX R U -40\r\nKPX R Uacute -40\r\nKPX R Ucircumflex -40\r\nKPX R Udieresis -40\r\nKPX R Ugrave -40\r\nKPX R Uhungarumlaut -40\r\nKPX R Umacron -40\r\nKPX R Uogonek -40\r\nKPX R Uring -40\r\nKPX R V -50\r\nKPX R W -30\r\nKPX R Y -50\r\nKPX R Yacute -50\r\nKPX R Ydieresis -50\r\nKPX Racute O -20\r\nKPX Racute Oacute -20\r\nKPX Racute Ocircumflex -20\r\nKPX Racute Odieresis -20\r\nKPX Racute Ograve -20\r\nKPX Racute Ohungarumlaut -20\r\nKPX Racute Omacron -20\r\nKPX Racute Oslash -20\r\nKPX Racute Otilde -20\r\nKPX Racute T -30\r\nKPX Racute Tcaron -30\r\nKPX Racute Tcommaaccent -30\r\nKPX Racute U -40\r\nKPX Racute Uacute -40\r\nKPX Racute Ucircumflex -40\r\nKPX Racute Udieresis -40\r\nKPX Racute Ugrave -40\r\nKPX Racute Uhungarumlaut -40\r\nKPX Racute Umacron -40\r\nKPX Racute Uogonek -40\r\nKPX Racute Uring -40\r\nKPX Racute V -50\r\nKPX Racute W -30\r\nKPX Racute Y -50\r\nKPX Racute Yacute -50\r\nKPX Racute Ydieresis -50\r\nKPX Rcaron O -20\r\nKPX Rcaron Oacute -20\r\nKPX Rcaron Ocircumflex -20\r\nKPX Rcaron Odieresis -20\r\nKPX Rcaron Ograve -20\r\nKPX Rcaron Ohungarumlaut -20\r\nKPX Rcaron Omacron -20\r\nKPX Rcaron Oslash -20\r\nKPX Rcaron Otilde -20\r\nKPX Rcaron T -30\r\nKPX Rcaron Tcaron -30\r\nKPX Rcaron Tcommaaccent -30\r\nKPX Rcaron U -40\r\nKPX Rcaron Uacute -40\r\nKPX Rcaron Ucircumflex -40\r\nKPX Rcaron Udieresis -40\r\nKPX Rcaron Ugrave -40\r\nKPX Rcaron Uhungarumlaut -40\r\nKPX Rcaron Umacron -40\r\nKPX Rcaron Uogonek -40\r\nKPX Rcaron Uring -40\r\nKPX Rcaron V -50\r\nKPX Rcaron W -30\r\nKPX Rcaron Y -50\r\nKPX Rcaron Yacute -50\r\nKPX Rcaron Ydieresis -50\r\nKPX Rcommaaccent O -20\r\nKPX Rcommaaccent Oacute -20\r\nKPX Rcommaaccent Ocircumflex -20\r\nKPX Rcommaaccent Odieresis -20\r\nKPX Rcommaaccent Ograve -20\r\nKPX Rcommaaccent Ohungarumlaut -20\r\nKPX Rcommaaccent Omacron -20\r\nKPX Rcommaaccent Oslash -20\r\nKPX Rcommaaccent Otilde -20\r\nKPX Rcommaaccent T -30\r\nKPX Rcommaaccent Tcaron -30\r\nKPX Rcommaaccent Tcommaaccent -30\r\nKPX Rcommaaccent U -40\r\nKPX Rcommaaccent Uacute -40\r\nKPX Rcommaaccent Ucircumflex -40\r\nKPX Rcommaaccent Udieresis -40\r\nKPX Rcommaaccent Ugrave -40\r\nKPX Rcommaaccent Uhungarumlaut -40\r\nKPX Rcommaaccent Umacron -40\r\nKPX Rcommaaccent Uogonek -40\r\nKPX Rcommaaccent Uring -40\r\nKPX Rcommaaccent V -50\r\nKPX Rcommaaccent W -30\r\nKPX Rcommaaccent Y -50\r\nKPX Rcommaaccent Yacute -50\r\nKPX Rcommaaccent Ydieresis -50\r\nKPX S comma -20\r\nKPX S period -20\r\nKPX Sacute comma -20\r\nKPX Sacute period -20\r\nKPX Scaron comma -20\r\nKPX Scaron period -20\r\nKPX Scedilla comma -20\r\nKPX Scedilla period -20\r\nKPX Scommaaccent comma -20\r\nKPX Scommaaccent period -20\r\nKPX T A -120\r\nKPX T Aacute -120\r\nKPX T Abreve -120\r\nKPX T Acircumflex -120\r\nKPX T Adieresis -120\r\nKPX T Agrave -120\r\nKPX T Amacron -120\r\nKPX T Aogonek -120\r\nKPX T Aring -120\r\nKPX T Atilde -120\r\nKPX T O -40\r\nKPX T Oacute -40\r\nKPX T Ocircumflex -40\r\nKPX T Odieresis -40\r\nKPX T Ograve -40\r\nKPX T Ohungarumlaut -40\r\nKPX T Omacron -40\r\nKPX T Oslash -40\r\nKPX T Otilde -40\r\nKPX T a -120\r\nKPX T aacute -120\r\nKPX T abreve -60\r\nKPX T acircumflex -120\r\nKPX T adieresis -120\r\nKPX T agrave -120\r\nKPX T amacron -60\r\nKPX T aogonek -120\r\nKPX T aring -120\r\nKPX T atilde -60\r\nKPX T colon -20\r\nKPX T comma -120\r\nKPX T e -120\r\nKPX T eacute -120\r\nKPX T ecaron -120\r\nKPX T ecircumflex -120\r\nKPX T edieresis -120\r\nKPX T edotaccent -120\r\nKPX T egrave -60\r\nKPX T emacron -60\r\nKPX T eogonek -120\r\nKPX T hyphen -140\r\nKPX T o -120\r\nKPX T oacute -120\r\nKPX T ocircumflex -120\r\nKPX T odieresis -120\r\nKPX T ograve -120\r\nKPX T ohungarumlaut -120\r\nKPX T omacron -60\r\nKPX T oslash -120\r\nKPX T otilde -60\r\nKPX T period -120\r\nKPX T r -120\r\nKPX T racute -120\r\nKPX T rcaron -120\r\nKPX T rcommaaccent -120\r\nKPX T semicolon -20\r\nKPX T u -120\r\nKPX T uacute -120\r\nKPX T ucircumflex -120\r\nKPX T udieresis -120\r\nKPX T ugrave -120\r\nKPX T uhungarumlaut -120\r\nKPX T umacron -60\r\nKPX T uogonek -120\r\nKPX T uring -120\r\nKPX T w -120\r\nKPX T y -120\r\nKPX T yacute -120\r\nKPX T ydieresis -60\r\nKPX Tcaron A -120\r\nKPX Tcaron Aacute -120\r\nKPX Tcaron Abreve -120\r\nKPX Tcaron Acircumflex -120\r\nKPX Tcaron Adieresis -120\r\nKPX Tcaron Agrave -120\r\nKPX Tcaron Amacron -120\r\nKPX Tcaron Aogonek -120\r\nKPX Tcaron Aring -120\r\nKPX Tcaron Atilde -120\r\nKPX Tcaron O -40\r\nKPX Tcaron Oacute -40\r\nKPX Tcaron Ocircumflex -40\r\nKPX Tcaron Odieresis -40\r\nKPX Tcaron Ograve -40\r\nKPX Tcaron Ohungarumlaut -40\r\nKPX Tcaron Omacron -40\r\nKPX Tcaron Oslash -40\r\nKPX Tcaron Otilde -40\r\nKPX Tcaron a -120\r\nKPX Tcaron aacute -120\r\nKPX Tcaron abreve -60\r\nKPX Tcaron acircumflex -120\r\nKPX Tcaron adieresis -120\r\nKPX Tcaron agrave -120\r\nKPX Tcaron amacron -60\r\nKPX Tcaron aogonek -120\r\nKPX Tcaron aring -120\r\nKPX Tcaron atilde -60\r\nKPX Tcaron colon -20\r\nKPX Tcaron comma -120\r\nKPX Tcaron e -120\r\nKPX Tcaron eacute -120\r\nKPX Tcaron ecaron -120\r\nKPX Tcaron ecircumflex -120\r\nKPX Tcaron edieresis -120\r\nKPX Tcaron edotaccent -120\r\nKPX Tcaron egrave -60\r\nKPX Tcaron emacron -60\r\nKPX Tcaron eogonek -120\r\nKPX Tcaron hyphen -140\r\nKPX Tcaron o -120\r\nKPX Tcaron oacute -120\r\nKPX Tcaron ocircumflex -120\r\nKPX Tcaron odieresis -120\r\nKPX Tcaron ograve -120\r\nKPX Tcaron ohungarumlaut -120\r\nKPX Tcaron omacron -60\r\nKPX Tcaron oslash -120\r\nKPX Tcaron otilde -60\r\nKPX Tcaron period -120\r\nKPX Tcaron r -120\r\nKPX Tcaron racute -120\r\nKPX Tcaron rcaron -120\r\nKPX Tcaron rcommaaccent -120\r\nKPX Tcaron semicolon -20\r\nKPX Tcaron u -120\r\nKPX Tcaron uacute -120\r\nKPX Tcaron ucircumflex -120\r\nKPX Tcaron udieresis -120\r\nKPX Tcaron ugrave -120\r\nKPX Tcaron uhungarumlaut -120\r\nKPX Tcaron umacron -60\r\nKPX Tcaron uogonek -120\r\nKPX Tcaron uring -120\r\nKPX Tcaron w -120\r\nKPX Tcaron y -120\r\nKPX Tcaron yacute -120\r\nKPX Tcaron ydieresis -60\r\nKPX Tcommaaccent A -120\r\nKPX Tcommaaccent Aacute -120\r\nKPX Tcommaaccent Abreve -120\r\nKPX Tcommaaccent Acircumflex -120\r\nKPX Tcommaaccent Adieresis -120\r\nKPX Tcommaaccent Agrave -120\r\nKPX Tcommaaccent Amacron -120\r\nKPX Tcommaaccent Aogonek -120\r\nKPX Tcommaaccent Aring -120\r\nKPX Tcommaaccent Atilde -120\r\nKPX Tcommaaccent O -40\r\nKPX Tcommaaccent Oacute -40\r\nKPX Tcommaaccent Ocircumflex -40\r\nKPX Tcommaaccent Odieresis -40\r\nKPX Tcommaaccent Ograve -40\r\nKPX Tcommaaccent Ohungarumlaut -40\r\nKPX Tcommaaccent Omacron -40\r\nKPX Tcommaaccent Oslash -40\r\nKPX Tcommaaccent Otilde -40\r\nKPX Tcommaaccent a -120\r\nKPX Tcommaaccent aacute -120\r\nKPX Tcommaaccent abreve -60\r\nKPX Tcommaaccent acircumflex -120\r\nKPX Tcommaaccent adieresis -120\r\nKPX Tcommaaccent agrave -120\r\nKPX Tcommaaccent amacron -60\r\nKPX Tcommaaccent aogonek -120\r\nKPX Tcommaaccent aring -120\r\nKPX Tcommaaccent atilde -60\r\nKPX Tcommaaccent colon -20\r\nKPX Tcommaaccent comma -120\r\nKPX Tcommaaccent e -120\r\nKPX Tcommaaccent eacute -120\r\nKPX Tcommaaccent ecaron -120\r\nKPX Tcommaaccent ecircumflex -120\r\nKPX Tcommaaccent edieresis -120\r\nKPX Tcommaaccent edotaccent -120\r\nKPX Tcommaaccent egrave -60\r\nKPX Tcommaaccent emacron -60\r\nKPX Tcommaaccent eogonek -120\r\nKPX Tcommaaccent hyphen -140\r\nKPX Tcommaaccent o -120\r\nKPX Tcommaaccent oacute -120\r\nKPX Tcommaaccent ocircumflex -120\r\nKPX Tcommaaccent odieresis -120\r\nKPX Tcommaaccent ograve -120\r\nKPX Tcommaaccent ohungarumlaut -120\r\nKPX Tcommaaccent omacron -60\r\nKPX Tcommaaccent oslash -120\r\nKPX Tcommaaccent otilde -60\r\nKPX Tcommaaccent period -120\r\nKPX Tcommaaccent r -120\r\nKPX Tcommaaccent racute -120\r\nKPX Tcommaaccent rcaron -120\r\nKPX Tcommaaccent rcommaaccent -120\r\nKPX Tcommaaccent semicolon -20\r\nKPX Tcommaaccent u -120\r\nKPX Tcommaaccent uacute -120\r\nKPX Tcommaaccent ucircumflex -120\r\nKPX Tcommaaccent udieresis -120\r\nKPX Tcommaaccent ugrave -120\r\nKPX Tcommaaccent uhungarumlaut -120\r\nKPX Tcommaaccent umacron -60\r\nKPX Tcommaaccent uogonek -120\r\nKPX Tcommaaccent uring -120\r\nKPX Tcommaaccent w -120\r\nKPX Tcommaaccent y -120\r\nKPX Tcommaaccent yacute -120\r\nKPX Tcommaaccent ydieresis -60\r\nKPX U A -40\r\nKPX U Aacute -40\r\nKPX U Abreve -40\r\nKPX U Acircumflex -40\r\nKPX U Adieresis -40\r\nKPX U Agrave -40\r\nKPX U Amacron -40\r\nKPX U Aogonek -40\r\nKPX U Aring -40\r\nKPX U Atilde -40\r\nKPX U comma -40\r\nKPX U period -40\r\nKPX Uacute A -40\r\nKPX Uacute Aacute -40\r\nKPX Uacute Abreve -40\r\nKPX Uacute Acircumflex -40\r\nKPX Uacute Adieresis -40\r\nKPX Uacute Agrave -40\r\nKPX Uacute Amacron -40\r\nKPX Uacute Aogonek -40\r\nKPX Uacute Aring -40\r\nKPX Uacute Atilde -40\r\nKPX Uacute comma -40\r\nKPX Uacute period -40\r\nKPX Ucircumflex A -40\r\nKPX Ucircumflex Aacute -40\r\nKPX Ucircumflex Abreve -40\r\nKPX Ucircumflex Acircumflex -40\r\nKPX Ucircumflex Adieresis -40\r\nKPX Ucircumflex Agrave -40\r\nKPX Ucircumflex Amacron -40\r\nKPX Ucircumflex Aogonek -40\r\nKPX Ucircumflex Aring -40\r\nKPX Ucircumflex Atilde -40\r\nKPX Ucircumflex comma -40\r\nKPX Ucircumflex period -40\r\nKPX Udieresis A -40\r\nKPX Udieresis Aacute -40\r\nKPX Udieresis Abreve -40\r\nKPX Udieresis Acircumflex -40\r\nKPX Udieresis Adieresis -40\r\nKPX Udieresis Agrave -40\r\nKPX Udieresis Amacron -40\r\nKPX Udieresis Aogonek -40\r\nKPX Udieresis Aring -40\r\nKPX Udieresis Atilde -40\r\nKPX Udieresis comma -40\r\nKPX Udieresis period -40\r\nKPX Ugrave A -40\r\nKPX Ugrave Aacute -40\r\nKPX Ugrave Abreve -40\r\nKPX Ugrave Acircumflex -40\r\nKPX Ugrave Adieresis -40\r\nKPX Ugrave Agrave -40\r\nKPX Ugrave Amacron -40\r\nKPX Ugrave Aogonek -40\r\nKPX Ugrave Aring -40\r\nKPX Ugrave Atilde -40\r\nKPX Ugrave comma -40\r\nKPX Ugrave period -40\r\nKPX Uhungarumlaut A -40\r\nKPX Uhungarumlaut Aacute -40\r\nKPX Uhungarumlaut Abreve -40\r\nKPX Uhungarumlaut Acircumflex -40\r\nKPX Uhungarumlaut Adieresis -40\r\nKPX Uhungarumlaut Agrave -40\r\nKPX Uhungarumlaut Amacron -40\r\nKPX Uhungarumlaut Aogonek -40\r\nKPX Uhungarumlaut Aring -40\r\nKPX Uhungarumlaut Atilde -40\r\nKPX Uhungarumlaut comma -40\r\nKPX Uhungarumlaut period -40\r\nKPX Umacron A -40\r\nKPX Umacron Aacute -40\r\nKPX Umacron Abreve -40\r\nKPX Umacron Acircumflex -40\r\nKPX Umacron Adieresis -40\r\nKPX Umacron Agrave -40\r\nKPX Umacron Amacron -40\r\nKPX Umacron Aogonek -40\r\nKPX Umacron Aring -40\r\nKPX Umacron Atilde -40\r\nKPX Umacron comma -40\r\nKPX Umacron period -40\r\nKPX Uogonek A -40\r\nKPX Uogonek Aacute -40\r\nKPX Uogonek Abreve -40\r\nKPX Uogonek Acircumflex -40\r\nKPX Uogonek Adieresis -40\r\nKPX Uogonek Agrave -40\r\nKPX Uogonek Amacron -40\r\nKPX Uogonek Aogonek -40\r\nKPX Uogonek Aring -40\r\nKPX Uogonek Atilde -40\r\nKPX Uogonek comma -40\r\nKPX Uogonek period -40\r\nKPX Uring A -40\r\nKPX Uring Aacute -40\r\nKPX Uring Abreve -40\r\nKPX Uring Acircumflex -40\r\nKPX Uring Adieresis -40\r\nKPX Uring Agrave -40\r\nKPX Uring Amacron -40\r\nKPX Uring Aogonek -40\r\nKPX Uring Aring -40\r\nKPX Uring Atilde -40\r\nKPX Uring comma -40\r\nKPX Uring period -40\r\nKPX V A -80\r\nKPX V Aacute -80\r\nKPX V Abreve -80\r\nKPX V Acircumflex -80\r\nKPX V Adieresis -80\r\nKPX V Agrave -80\r\nKPX V Amacron -80\r\nKPX V Aogonek -80\r\nKPX V Aring -80\r\nKPX V Atilde -80\r\nKPX V G -40\r\nKPX V Gbreve -40\r\nKPX V Gcommaaccent -40\r\nKPX V O -40\r\nKPX V Oacute -40\r\nKPX V Ocircumflex -40\r\nKPX V Odieresis -40\r\nKPX V Ograve -40\r\nKPX V Ohungarumlaut -40\r\nKPX V Omacron -40\r\nKPX V Oslash -40\r\nKPX V Otilde -40\r\nKPX V a -70\r\nKPX V aacute -70\r\nKPX V abreve -70\r\nKPX V acircumflex -70\r\nKPX V adieresis -70\r\nKPX V agrave -70\r\nKPX V amacron -70\r\nKPX V aogonek -70\r\nKPX V aring -70\r\nKPX V atilde -70\r\nKPX V colon -40\r\nKPX V comma -125\r\nKPX V e -80\r\nKPX V eacute -80\r\nKPX V ecaron -80\r\nKPX V ecircumflex -80\r\nKPX V edieresis -80\r\nKPX V edotaccent -80\r\nKPX V egrave -80\r\nKPX V emacron -80\r\nKPX V eogonek -80\r\nKPX V hyphen -80\r\nKPX V o -80\r\nKPX V oacute -80\r\nKPX V ocircumflex -80\r\nKPX V odieresis -80\r\nKPX V ograve -80\r\nKPX V ohungarumlaut -80\r\nKPX V omacron -80\r\nKPX V oslash -80\r\nKPX V otilde -80\r\nKPX V period -125\r\nKPX V semicolon -40\r\nKPX V u -70\r\nKPX V uacute -70\r\nKPX V ucircumflex -70\r\nKPX V udieresis -70\r\nKPX V ugrave -70\r\nKPX V uhungarumlaut -70\r\nKPX V umacron -70\r\nKPX V uogonek -70\r\nKPX V uring -70\r\nKPX W A -50\r\nKPX W Aacute -50\r\nKPX W Abreve -50\r\nKPX W Acircumflex -50\r\nKPX W Adieresis -50\r\nKPX W Agrave -50\r\nKPX W Amacron -50\r\nKPX W Aogonek -50\r\nKPX W Aring -50\r\nKPX W Atilde -50\r\nKPX W O -20\r\nKPX W Oacute -20\r\nKPX W Ocircumflex -20\r\nKPX W Odieresis -20\r\nKPX W Ograve -20\r\nKPX W Ohungarumlaut -20\r\nKPX W Omacron -20\r\nKPX W Oslash -20\r\nKPX W Otilde -20\r\nKPX W a -40\r\nKPX W aacute -40\r\nKPX W abreve -40\r\nKPX W acircumflex -40\r\nKPX W adieresis -40\r\nKPX W agrave -40\r\nKPX W amacron -40\r\nKPX W aogonek -40\r\nKPX W aring -40\r\nKPX W atilde -40\r\nKPX W comma -80\r\nKPX W e -30\r\nKPX W eacute -30\r\nKPX W ecaron -30\r\nKPX W ecircumflex -30\r\nKPX W edieresis -30\r\nKPX W edotaccent -30\r\nKPX W egrave -30\r\nKPX W emacron -30\r\nKPX W eogonek -30\r\nKPX W hyphen -40\r\nKPX W o -30\r\nKPX W oacute -30\r\nKPX W ocircumflex -30\r\nKPX W odieresis -30\r\nKPX W ograve -30\r\nKPX W ohungarumlaut -30\r\nKPX W omacron -30\r\nKPX W oslash -30\r\nKPX W otilde -30\r\nKPX W period -80\r\nKPX W u -30\r\nKPX W uacute -30\r\nKPX W ucircumflex -30\r\nKPX W udieresis -30\r\nKPX W ugrave -30\r\nKPX W uhungarumlaut -30\r\nKPX W umacron -30\r\nKPX W uogonek -30\r\nKPX W uring -30\r\nKPX W y -20\r\nKPX W yacute -20\r\nKPX W ydieresis -20\r\nKPX Y A -110\r\nKPX Y Aacute -110\r\nKPX Y Abreve -110\r\nKPX Y Acircumflex -110\r\nKPX Y Adieresis -110\r\nKPX Y Agrave -110\r\nKPX Y Amacron -110\r\nKPX Y Aogonek -110\r\nKPX Y Aring -110\r\nKPX Y Atilde -110\r\nKPX Y O -85\r\nKPX Y Oacute -85\r\nKPX Y Ocircumflex -85\r\nKPX Y Odieresis -85\r\nKPX Y Ograve -85\r\nKPX Y Ohungarumlaut -85\r\nKPX Y Omacron -85\r\nKPX Y Oslash -85\r\nKPX Y Otilde -85\r\nKPX Y a -140\r\nKPX Y aacute -140\r\nKPX Y abreve -70\r\nKPX Y acircumflex -140\r\nKPX Y adieresis -140\r\nKPX Y agrave -140\r\nKPX Y amacron -70\r\nKPX Y aogonek -140\r\nKPX Y aring -140\r\nKPX Y atilde -140\r\nKPX Y colon -60\r\nKPX Y comma -140\r\nKPX Y e -140\r\nKPX Y eacute -140\r\nKPX Y ecaron -140\r\nKPX Y ecircumflex -140\r\nKPX Y edieresis -140\r\nKPX Y edotaccent -140\r\nKPX Y egrave -140\r\nKPX Y emacron -70\r\nKPX Y eogonek -140\r\nKPX Y hyphen -140\r\nKPX Y i -20\r\nKPX Y iacute -20\r\nKPX Y iogonek -20\r\nKPX Y o -140\r\nKPX Y oacute -140\r\nKPX Y ocircumflex -140\r\nKPX Y odieresis -140\r\nKPX Y ograve -140\r\nKPX Y ohungarumlaut -140\r\nKPX Y omacron -140\r\nKPX Y oslash -140\r\nKPX Y otilde -140\r\nKPX Y period -140\r\nKPX Y semicolon -60\r\nKPX Y u -110\r\nKPX Y uacute -110\r\nKPX Y ucircumflex -110\r\nKPX Y udieresis -110\r\nKPX Y ugrave -110\r\nKPX Y uhungarumlaut -110\r\nKPX Y umacron -110\r\nKPX Y uogonek -110\r\nKPX Y uring -110\r\nKPX Yacute A -110\r\nKPX Yacute Aacute -110\r\nKPX Yacute Abreve -110\r\nKPX Yacute Acircumflex -110\r\nKPX Yacute Adieresis -110\r\nKPX Yacute Agrave -110\r\nKPX Yacute Amacron -110\r\nKPX Yacute Aogonek -110\r\nKPX Yacute Aring -110\r\nKPX Yacute Atilde -110\r\nKPX Yacute O -85\r\nKPX Yacute Oacute -85\r\nKPX Yacute Ocircumflex -85\r\nKPX Yacute Odieresis -85\r\nKPX Yacute Ograve -85\r\nKPX Yacute Ohungarumlaut -85\r\nKPX Yacute Omacron -85\r\nKPX Yacute Oslash -85\r\nKPX Yacute Otilde -85\r\nKPX Yacute a -140\r\nKPX Yacute aacute -140\r\nKPX Yacute abreve -70\r\nKPX Yacute acircumflex -140\r\nKPX Yacute adieresis -140\r\nKPX Yacute agrave -140\r\nKPX Yacute amacron -70\r\nKPX Yacute aogonek -140\r\nKPX Yacute aring -140\r\nKPX Yacute atilde -70\r\nKPX Yacute colon -60\r\nKPX Yacute comma -140\r\nKPX Yacute e -140\r\nKPX Yacute eacute -140\r\nKPX Yacute ecaron -140\r\nKPX Yacute ecircumflex -140\r\nKPX Yacute edieresis -140\r\nKPX Yacute edotaccent -140\r\nKPX Yacute egrave -140\r\nKPX Yacute emacron -70\r\nKPX Yacute eogonek -140\r\nKPX Yacute hyphen -140\r\nKPX Yacute i -20\r\nKPX Yacute iacute -20\r\nKPX Yacute iogonek -20\r\nKPX Yacute o -140\r\nKPX Yacute oacute -140\r\nKPX Yacute ocircumflex -140\r\nKPX Yacute odieresis -140\r\nKPX Yacute ograve -140\r\nKPX Yacute ohungarumlaut -140\r\nKPX Yacute omacron -70\r\nKPX Yacute oslash -140\r\nKPX Yacute otilde -140\r\nKPX Yacute period -140\r\nKPX Yacute semicolon -60\r\nKPX Yacute u -110\r\nKPX Yacute uacute -110\r\nKPX Yacute ucircumflex -110\r\nKPX Yacute udieresis -110\r\nKPX Yacute ugrave -110\r\nKPX Yacute uhungarumlaut -110\r\nKPX Yacute umacron -110\r\nKPX Yacute uogonek -110\r\nKPX Yacute uring -110\r\nKPX Ydieresis A -110\r\nKPX Ydieresis Aacute -110\r\nKPX Ydieresis Abreve -110\r\nKPX Ydieresis Acircumflex -110\r\nKPX Ydieresis Adieresis -110\r\nKPX Ydieresis Agrave -110\r\nKPX Ydieresis Amacron -110\r\nKPX Ydieresis Aogonek -110\r\nKPX Ydieresis Aring -110\r\nKPX Ydieresis Atilde -110\r\nKPX Ydieresis O -85\r\nKPX Ydieresis Oacute -85\r\nKPX Ydieresis Ocircumflex -85\r\nKPX Ydieresis Odieresis -85\r\nKPX Ydieresis Ograve -85\r\nKPX Ydieresis Ohungarumlaut -85\r\nKPX Ydieresis Omacron -85\r\nKPX Ydieresis Oslash -85\r\nKPX Ydieresis Otilde -85\r\nKPX Ydieresis a -140\r\nKPX Ydieresis aacute -140\r\nKPX Ydieresis abreve -70\r\nKPX Ydieresis acircumflex -140\r\nKPX Ydieresis adieresis -140\r\nKPX Ydieresis agrave -140\r\nKPX Ydieresis amacron -70\r\nKPX Ydieresis aogonek -140\r\nKPX Ydieresis aring -140\r\nKPX Ydieresis atilde -70\r\nKPX Ydieresis colon -60\r\nKPX Ydieresis comma -140\r\nKPX Ydieresis e -140\r\nKPX Ydieresis eacute -140\r\nKPX Ydieresis ecaron -140\r\nKPX Ydieresis ecircumflex -140\r\nKPX Ydieresis edieresis -140\r\nKPX Ydieresis edotaccent -140\r\nKPX Ydieresis egrave -140\r\nKPX Ydieresis emacron -70\r\nKPX Ydieresis eogonek -140\r\nKPX Ydieresis hyphen -140\r\nKPX Ydieresis i -20\r\nKPX Ydieresis iacute -20\r\nKPX Ydieresis iogonek -20\r\nKPX Ydieresis o -140\r\nKPX Ydieresis oacute -140\r\nKPX Ydieresis ocircumflex -140\r\nKPX Ydieresis odieresis -140\r\nKPX Ydieresis ograve -140\r\nKPX Ydieresis ohungarumlaut -140\r\nKPX Ydieresis omacron -140\r\nKPX Ydieresis oslash -140\r\nKPX Ydieresis otilde -140\r\nKPX Ydieresis period -140\r\nKPX Ydieresis semicolon -60\r\nKPX Ydieresis u -110\r\nKPX Ydieresis uacute -110\r\nKPX Ydieresis ucircumflex -110\r\nKPX Ydieresis udieresis -110\r\nKPX Ydieresis ugrave -110\r\nKPX Ydieresis uhungarumlaut -110\r\nKPX Ydieresis umacron -110\r\nKPX Ydieresis uogonek -110\r\nKPX Ydieresis uring -110\r\nKPX a v -20\r\nKPX a w -20\r\nKPX a y -30\r\nKPX a yacute -30\r\nKPX a ydieresis -30\r\nKPX aacute v -20\r\nKPX aacute w -20\r\nKPX aacute y -30\r\nKPX aacute yacute -30\r\nKPX aacute ydieresis -30\r\nKPX abreve v -20\r\nKPX abreve w -20\r\nKPX abreve y -30\r\nKPX abreve yacute -30\r\nKPX abreve ydieresis -30\r\nKPX acircumflex v -20\r\nKPX acircumflex w -20\r\nKPX acircumflex y -30\r\nKPX acircumflex yacute -30\r\nKPX acircumflex ydieresis -30\r\nKPX adieresis v -20\r\nKPX adieresis w -20\r\nKPX adieresis y -30\r\nKPX adieresis yacute -30\r\nKPX adieresis ydieresis -30\r\nKPX agrave v -20\r\nKPX agrave w -20\r\nKPX agrave y -30\r\nKPX agrave yacute -30\r\nKPX agrave ydieresis -30\r\nKPX amacron v -20\r\nKPX amacron w -20\r\nKPX amacron y -30\r\nKPX amacron yacute -30\r\nKPX amacron ydieresis -30\r\nKPX aogonek v -20\r\nKPX aogonek w -20\r\nKPX aogonek y -30\r\nKPX aogonek yacute -30\r\nKPX aogonek ydieresis -30\r\nKPX aring v -20\r\nKPX aring w -20\r\nKPX aring y -30\r\nKPX aring yacute -30\r\nKPX aring ydieresis -30\r\nKPX atilde v -20\r\nKPX atilde w -20\r\nKPX atilde y -30\r\nKPX atilde yacute -30\r\nKPX atilde ydieresis -30\r\nKPX b b -10\r\nKPX b comma -40\r\nKPX b l -20\r\nKPX b lacute -20\r\nKPX b lcommaaccent -20\r\nKPX b lslash -20\r\nKPX b period -40\r\nKPX b u -20\r\nKPX b uacute -20\r\nKPX b ucircumflex -20\r\nKPX b udieresis -20\r\nKPX b ugrave -20\r\nKPX b uhungarumlaut -20\r\nKPX b umacron -20\r\nKPX b uogonek -20\r\nKPX b uring -20\r\nKPX b v -20\r\nKPX b y -20\r\nKPX b yacute -20\r\nKPX b ydieresis -20\r\nKPX c comma -15\r\nKPX c k -20\r\nKPX c kcommaaccent -20\r\nKPX cacute comma -15\r\nKPX cacute k -20\r\nKPX cacute kcommaaccent -20\r\nKPX ccaron comma -15\r\nKPX ccaron k -20\r\nKPX ccaron kcommaaccent -20\r\nKPX ccedilla comma -15\r\nKPX ccedilla k -20\r\nKPX ccedilla kcommaaccent -20\r\nKPX colon space -50\r\nKPX comma quotedblright -100\r\nKPX comma quoteright -100\r\nKPX e comma -15\r\nKPX e period -15\r\nKPX e v -30\r\nKPX e w -20\r\nKPX e x -30\r\nKPX e y -20\r\nKPX e yacute -20\r\nKPX e ydieresis -20\r\nKPX eacute comma -15\r\nKPX eacute period -15\r\nKPX eacute v -30\r\nKPX eacute w -20\r\nKPX eacute x -30\r\nKPX eacute y -20\r\nKPX eacute yacute -20\r\nKPX eacute ydieresis -20\r\nKPX ecaron comma -15\r\nKPX ecaron period -15\r\nKPX ecaron v -30\r\nKPX ecaron w -20\r\nKPX ecaron x -30\r\nKPX ecaron y -20\r\nKPX ecaron yacute -20\r\nKPX ecaron ydieresis -20\r\nKPX ecircumflex comma -15\r\nKPX ecircumflex period -15\r\nKPX ecircumflex v -30\r\nKPX ecircumflex w -20\r\nKPX ecircumflex x -30\r\nKPX ecircumflex y -20\r\nKPX ecircumflex yacute -20\r\nKPX ecircumflex ydieresis -20\r\nKPX edieresis comma -15\r\nKPX edieresis period -15\r\nKPX edieresis v -30\r\nKPX edieresis w -20\r\nKPX edieresis x -30\r\nKPX edieresis y -20\r\nKPX edieresis yacute -20\r\nKPX edieresis ydieresis -20\r\nKPX edotaccent comma -15\r\nKPX edotaccent period -15\r\nKPX edotaccent v -30\r\nKPX edotaccent w -20\r\nKPX edotaccent x -30\r\nKPX edotaccent y -20\r\nKPX edotaccent yacute -20\r\nKPX edotaccent ydieresis -20\r\nKPX egrave comma -15\r\nKPX egrave period -15\r\nKPX egrave v -30\r\nKPX egrave w -20\r\nKPX egrave x -30\r\nKPX egrave y -20\r\nKPX egrave yacute -20\r\nKPX egrave ydieresis -20\r\nKPX emacron comma -15\r\nKPX emacron period -15\r\nKPX emacron v -30\r\nKPX emacron w -20\r\nKPX emacron x -30\r\nKPX emacron y -20\r\nKPX emacron yacute -20\r\nKPX emacron ydieresis -20\r\nKPX eogonek comma -15\r\nKPX eogonek period -15\r\nKPX eogonek v -30\r\nKPX eogonek w -20\r\nKPX eogonek x -30\r\nKPX eogonek y -20\r\nKPX eogonek yacute -20\r\nKPX eogonek ydieresis -20\r\nKPX f a -30\r\nKPX f aacute -30\r\nKPX f abreve -30\r\nKPX f acircumflex -30\r\nKPX f adieresis -30\r\nKPX f agrave -30\r\nKPX f amacron -30\r\nKPX f aogonek -30\r\nKPX f aring -30\r\nKPX f atilde -30\r\nKPX f comma -30\r\nKPX f dotlessi -28\r\nKPX f e -30\r\nKPX f eacute -30\r\nKPX f ecaron -30\r\nKPX f ecircumflex -30\r\nKPX f edieresis -30\r\nKPX f edotaccent -30\r\nKPX f egrave -30\r\nKPX f emacron -30\r\nKPX f eogonek -30\r\nKPX f o -30\r\nKPX f oacute -30\r\nKPX f ocircumflex -30\r\nKPX f odieresis -30\r\nKPX f ograve -30\r\nKPX f ohungarumlaut -30\r\nKPX f omacron -30\r\nKPX f oslash -30\r\nKPX f otilde -30\r\nKPX f period -30\r\nKPX f quotedblright 60\r\nKPX f quoteright 50\r\nKPX g r -10\r\nKPX g racute -10\r\nKPX g rcaron -10\r\nKPX g rcommaaccent -10\r\nKPX gbreve r -10\r\nKPX gbreve racute -10\r\nKPX gbreve rcaron -10\r\nKPX gbreve rcommaaccent -10\r\nKPX gcommaaccent r -10\r\nKPX gcommaaccent racute -10\r\nKPX gcommaaccent rcaron -10\r\nKPX gcommaaccent rcommaaccent -10\r\nKPX h y -30\r\nKPX h yacute -30\r\nKPX h ydieresis -30\r\nKPX k e -20\r\nKPX k eacute -20\r\nKPX k ecaron -20\r\nKPX k ecircumflex -20\r\nKPX k edieresis -20\r\nKPX k edotaccent -20\r\nKPX k egrave -20\r\nKPX k emacron -20\r\nKPX k eogonek -20\r\nKPX k o -20\r\nKPX k oacute -20\r\nKPX k ocircumflex -20\r\nKPX k odieresis -20\r\nKPX k ograve -20\r\nKPX k ohungarumlaut -20\r\nKPX k omacron -20\r\nKPX k oslash -20\r\nKPX k otilde -20\r\nKPX kcommaaccent e -20\r\nKPX kcommaaccent eacute -20\r\nKPX kcommaaccent ecaron -20\r\nKPX kcommaaccent ecircumflex -20\r\nKPX kcommaaccent edieresis -20\r\nKPX kcommaaccent edotaccent -20\r\nKPX kcommaaccent egrave -20\r\nKPX kcommaaccent emacron -20\r\nKPX kcommaaccent eogonek -20\r\nKPX kcommaaccent o -20\r\nKPX kcommaaccent oacute -20\r\nKPX kcommaaccent ocircumflex -20\r\nKPX kcommaaccent odieresis -20\r\nKPX kcommaaccent ograve -20\r\nKPX kcommaaccent ohungarumlaut -20\r\nKPX kcommaaccent omacron -20\r\nKPX kcommaaccent oslash -20\r\nKPX kcommaaccent otilde -20\r\nKPX m u -10\r\nKPX m uacute -10\r\nKPX m ucircumflex -10\r\nKPX m udieresis -10\r\nKPX m ugrave -10\r\nKPX m uhungarumlaut -10\r\nKPX m umacron -10\r\nKPX m uogonek -10\r\nKPX m uring -10\r\nKPX m y -15\r\nKPX m yacute -15\r\nKPX m ydieresis -15\r\nKPX n u -10\r\nKPX n uacute -10\r\nKPX n ucircumflex -10\r\nKPX n udieresis -10\r\nKPX n ugrave -10\r\nKPX n uhungarumlaut -10\r\nKPX n umacron -10\r\nKPX n uogonek -10\r\nKPX n uring -10\r\nKPX n v -20\r\nKPX n y -15\r\nKPX n yacute -15\r\nKPX n ydieresis -15\r\nKPX nacute u -10\r\nKPX nacute uacute -10\r\nKPX nacute ucircumflex -10\r\nKPX nacute udieresis -10\r\nKPX nacute ugrave -10\r\nKPX nacute uhungarumlaut -10\r\nKPX nacute umacron -10\r\nKPX nacute uogonek -10\r\nKPX nacute uring -10\r\nKPX nacute v -20\r\nKPX nacute y -15\r\nKPX nacute yacute -15\r\nKPX nacute ydieresis -15\r\nKPX ncaron u -10\r\nKPX ncaron uacute -10\r\nKPX ncaron ucircumflex -10\r\nKPX ncaron udieresis -10\r\nKPX ncaron ugrave -10\r\nKPX ncaron uhungarumlaut -10\r\nKPX ncaron umacron -10\r\nKPX ncaron uogonek -10\r\nKPX ncaron uring -10\r\nKPX ncaron v -20\r\nKPX ncaron y -15\r\nKPX ncaron yacute -15\r\nKPX ncaron ydieresis -15\r\nKPX ncommaaccent u -10\r\nKPX ncommaaccent uacute -10\r\nKPX ncommaaccent ucircumflex -10\r\nKPX ncommaaccent udieresis -10\r\nKPX ncommaaccent ugrave -10\r\nKPX ncommaaccent uhungarumlaut -10\r\nKPX ncommaaccent umacron -10\r\nKPX ncommaaccent uogonek -10\r\nKPX ncommaaccent uring -10\r\nKPX ncommaaccent v -20\r\nKPX ncommaaccent y -15\r\nKPX ncommaaccent yacute -15\r\nKPX ncommaaccent ydieresis -15\r\nKPX ntilde u -10\r\nKPX ntilde uacute -10\r\nKPX ntilde ucircumflex -10\r\nKPX ntilde udieresis -10\r\nKPX ntilde ugrave -10\r\nKPX ntilde uhungarumlaut -10\r\nKPX ntilde umacron -10\r\nKPX ntilde uogonek -10\r\nKPX ntilde uring -10\r\nKPX ntilde v -20\r\nKPX ntilde y -15\r\nKPX ntilde yacute -15\r\nKPX ntilde ydieresis -15\r\nKPX o comma -40\r\nKPX o period -40\r\nKPX o v -15\r\nKPX o w -15\r\nKPX o x -30\r\nKPX o y -30\r\nKPX o yacute -30\r\nKPX o ydieresis -30\r\nKPX oacute comma -40\r\nKPX oacute period -40\r\nKPX oacute v -15\r\nKPX oacute w -15\r\nKPX oacute x -30\r\nKPX oacute y -30\r\nKPX oacute yacute -30\r\nKPX oacute ydieresis -30\r\nKPX ocircumflex comma -40\r\nKPX ocircumflex period -40\r\nKPX ocircumflex v -15\r\nKPX ocircumflex w -15\r\nKPX ocircumflex x -30\r\nKPX ocircumflex y -30\r\nKPX ocircumflex yacute -30\r\nKPX ocircumflex ydieresis -30\r\nKPX odieresis comma -40\r\nKPX odieresis period -40\r\nKPX odieresis v -15\r\nKPX odieresis w -15\r\nKPX odieresis x -30\r\nKPX odieresis y -30\r\nKPX odieresis yacute -30\r\nKPX odieresis ydieresis -30\r\nKPX ograve comma -40\r\nKPX ograve period -40\r\nKPX ograve v -15\r\nKPX ograve w -15\r\nKPX ograve x -30\r\nKPX ograve y -30\r\nKPX ograve yacute -30\r\nKPX ograve ydieresis -30\r\nKPX ohungarumlaut comma -40\r\nKPX ohungarumlaut period -40\r\nKPX ohungarumlaut v -15\r\nKPX ohungarumlaut w -15\r\nKPX ohungarumlaut x -30\r\nKPX ohungarumlaut y -30\r\nKPX ohungarumlaut yacute -30\r\nKPX ohungarumlaut ydieresis -30\r\nKPX omacron comma -40\r\nKPX omacron period -40\r\nKPX omacron v -15\r\nKPX omacron w -15\r\nKPX omacron x -30\r\nKPX omacron y -30\r\nKPX omacron yacute -30\r\nKPX omacron ydieresis -30\r\nKPX oslash a -55\r\nKPX oslash aacute -55\r\nKPX oslash abreve -55\r\nKPX oslash acircumflex -55\r\nKPX oslash adieresis -55\r\nKPX oslash agrave -55\r\nKPX oslash amacron -55\r\nKPX oslash aogonek -55\r\nKPX oslash aring -55\r\nKPX oslash atilde -55\r\nKPX oslash b -55\r\nKPX oslash c -55\r\nKPX oslash cacute -55\r\nKPX oslash ccaron -55\r\nKPX oslash ccedilla -55\r\nKPX oslash comma -95\r\nKPX oslash d -55\r\nKPX oslash dcroat -55\r\nKPX oslash e -55\r\nKPX oslash eacute -55\r\nKPX oslash ecaron -55\r\nKPX oslash ecircumflex -55\r\nKPX oslash edieresis -55\r\nKPX oslash edotaccent -55\r\nKPX oslash egrave -55\r\nKPX oslash emacron -55\r\nKPX oslash eogonek -55\r\nKPX oslash f -55\r\nKPX oslash g -55\r\nKPX oslash gbreve -55\r\nKPX oslash gcommaaccent -55\r\nKPX oslash h -55\r\nKPX oslash i -55\r\nKPX oslash iacute -55\r\nKPX oslash icircumflex -55\r\nKPX oslash idieresis -55\r\nKPX oslash igrave -55\r\nKPX oslash imacron -55\r\nKPX oslash iogonek -55\r\nKPX oslash j -55\r\nKPX oslash k -55\r\nKPX oslash kcommaaccent -55\r\nKPX oslash l -55\r\nKPX oslash lacute -55\r\nKPX oslash lcommaaccent -55\r\nKPX oslash lslash -55\r\nKPX oslash m -55\r\nKPX oslash n -55\r\nKPX oslash nacute -55\r\nKPX oslash ncaron -55\r\nKPX oslash ncommaaccent -55\r\nKPX oslash ntilde -55\r\nKPX oslash o -55\r\nKPX oslash oacute -55\r\nKPX oslash ocircumflex -55\r\nKPX oslash odieresis -55\r\nKPX oslash ograve -55\r\nKPX oslash ohungarumlaut -55\r\nKPX oslash omacron -55\r\nKPX oslash oslash -55\r\nKPX oslash otilde -55\r\nKPX oslash p -55\r\nKPX oslash period -95\r\nKPX oslash q -55\r\nKPX oslash r -55\r\nKPX oslash racute -55\r\nKPX oslash rcaron -55\r\nKPX oslash rcommaaccent -55\r\nKPX oslash s -55\r\nKPX oslash sacute -55\r\nKPX oslash scaron -55\r\nKPX oslash scedilla -55\r\nKPX oslash scommaaccent -55\r\nKPX oslash t -55\r\nKPX oslash tcommaaccent -55\r\nKPX oslash u -55\r\nKPX oslash uacute -55\r\nKPX oslash ucircumflex -55\r\nKPX oslash udieresis -55\r\nKPX oslash ugrave -55\r\nKPX oslash uhungarumlaut -55\r\nKPX oslash umacron -55\r\nKPX oslash uogonek -55\r\nKPX oslash uring -55\r\nKPX oslash v -70\r\nKPX oslash w -70\r\nKPX oslash x -85\r\nKPX oslash y -70\r\nKPX oslash yacute -70\r\nKPX oslash ydieresis -70\r\nKPX oslash z -55\r\nKPX oslash zacute -55\r\nKPX oslash zcaron -55\r\nKPX oslash zdotaccent -55\r\nKPX otilde comma -40\r\nKPX otilde period -40\r\nKPX otilde v -15\r\nKPX otilde w -15\r\nKPX otilde x -30\r\nKPX otilde y -30\r\nKPX otilde yacute -30\r\nKPX otilde ydieresis -30\r\nKPX p comma -35\r\nKPX p period -35\r\nKPX p y -30\r\nKPX p yacute -30\r\nKPX p ydieresis -30\r\nKPX period quotedblright -100\r\nKPX period quoteright -100\r\nKPX period space -60\r\nKPX quotedblright space -40\r\nKPX quoteleft quoteleft -57\r\nKPX quoteright d -50\r\nKPX quoteright dcroat -50\r\nKPX quoteright quoteright -57\r\nKPX quoteright r -50\r\nKPX quoteright racute -50\r\nKPX quoteright rcaron -50\r\nKPX quoteright rcommaaccent -50\r\nKPX quoteright s -50\r\nKPX quoteright sacute -50\r\nKPX quoteright scaron -50\r\nKPX quoteright scedilla -50\r\nKPX quoteright scommaaccent -50\r\nKPX quoteright space -70\r\nKPX r a -10\r\nKPX r aacute -10\r\nKPX r abreve -10\r\nKPX r acircumflex -10\r\nKPX r adieresis -10\r\nKPX r agrave -10\r\nKPX r amacron -10\r\nKPX r aogonek -10\r\nKPX r aring -10\r\nKPX r atilde -10\r\nKPX r colon 30\r\nKPX r comma -50\r\nKPX r i 15\r\nKPX r iacute 15\r\nKPX r icircumflex 15\r\nKPX r idieresis 15\r\nKPX r igrave 15\r\nKPX r imacron 15\r\nKPX r iogonek 15\r\nKPX r k 15\r\nKPX r kcommaaccent 15\r\nKPX r l 15\r\nKPX r lacute 15\r\nKPX r lcommaaccent 15\r\nKPX r lslash 15\r\nKPX r m 25\r\nKPX r n 25\r\nKPX r nacute 25\r\nKPX r ncaron 25\r\nKPX r ncommaaccent 25\r\nKPX r ntilde 25\r\nKPX r p 30\r\nKPX r period -50\r\nKPX r semicolon 30\r\nKPX r t 40\r\nKPX r tcommaaccent 40\r\nKPX r u 15\r\nKPX r uacute 15\r\nKPX r ucircumflex 15\r\nKPX r udieresis 15\r\nKPX r ugrave 15\r\nKPX r uhungarumlaut 15\r\nKPX r umacron 15\r\nKPX r uogonek 15\r\nKPX r uring 15\r\nKPX r v 30\r\nKPX r y 30\r\nKPX r yacute 30\r\nKPX r ydieresis 30\r\nKPX racute a -10\r\nKPX racute aacute -10\r\nKPX racute abreve -10\r\nKPX racute acircumflex -10\r\nKPX racute adieresis -10\r\nKPX racute agrave -10\r\nKPX racute amacron -10\r\nKPX racute aogonek -10\r\nKPX racute aring -10\r\nKPX racute atilde -10\r\nKPX racute colon 30\r\nKPX racute comma -50\r\nKPX racute i 15\r\nKPX racute iacute 15\r\nKPX racute icircumflex 15\r\nKPX racute idieresis 15\r\nKPX racute igrave 15\r\nKPX racute imacron 15\r\nKPX racute iogonek 15\r\nKPX racute k 15\r\nKPX racute kcommaaccent 15\r\nKPX racute l 15\r\nKPX racute lacute 15\r\nKPX racute lcommaaccent 15\r\nKPX racute lslash 15\r\nKPX racute m 25\r\nKPX racute n 25\r\nKPX racute nacute 25\r\nKPX racute ncaron 25\r\nKPX racute ncommaaccent 25\r\nKPX racute ntilde 25\r\nKPX racute p 30\r\nKPX racute period -50\r\nKPX racute semicolon 30\r\nKPX racute t 40\r\nKPX racute tcommaaccent 40\r\nKPX racute u 15\r\nKPX racute uacute 15\r\nKPX racute ucircumflex 15\r\nKPX racute udieresis 15\r\nKPX racute ugrave 15\r\nKPX racute uhungarumlaut 15\r\nKPX racute umacron 15\r\nKPX racute uogonek 15\r\nKPX racute uring 15\r\nKPX racute v 30\r\nKPX racute y 30\r\nKPX racute yacute 30\r\nKPX racute ydieresis 30\r\nKPX rcaron a -10\r\nKPX rcaron aacute -10\r\nKPX rcaron abreve -10\r\nKPX rcaron acircumflex -10\r\nKPX rcaron adieresis -10\r\nKPX rcaron agrave -10\r\nKPX rcaron amacron -10\r\nKPX rcaron aogonek -10\r\nKPX rcaron aring -10\r\nKPX rcaron atilde -10\r\nKPX rcaron colon 30\r\nKPX rcaron comma -50\r\nKPX rcaron i 15\r\nKPX rcaron iacute 15\r\nKPX rcaron icircumflex 15\r\nKPX rcaron idieresis 15\r\nKPX rcaron igrave 15\r\nKPX rcaron imacron 15\r\nKPX rcaron iogonek 15\r\nKPX rcaron k 15\r\nKPX rcaron kcommaaccent 15\r\nKPX rcaron l 15\r\nKPX rcaron lacute 15\r\nKPX rcaron lcommaaccent 15\r\nKPX rcaron lslash 15\r\nKPX rcaron m 25\r\nKPX rcaron n 25\r\nKPX rcaron nacute 25\r\nKPX rcaron ncaron 25\r\nKPX rcaron ncommaaccent 25\r\nKPX rcaron ntilde 25\r\nKPX rcaron p 30\r\nKPX rcaron period -50\r\nKPX rcaron semicolon 30\r\nKPX rcaron t 40\r\nKPX rcaron tcommaaccent 40\r\nKPX rcaron u 15\r\nKPX rcaron uacute 15\r\nKPX rcaron ucircumflex 15\r\nKPX rcaron udieresis 15\r\nKPX rcaron ugrave 15\r\nKPX rcaron uhungarumlaut 15\r\nKPX rcaron umacron 15\r\nKPX rcaron uogonek 15\r\nKPX rcaron uring 15\r\nKPX rcaron v 30\r\nKPX rcaron y 30\r\nKPX rcaron yacute 30\r\nKPX rcaron ydieresis 30\r\nKPX rcommaaccent a -10\r\nKPX rcommaaccent aacute -10\r\nKPX rcommaaccent abreve -10\r\nKPX rcommaaccent acircumflex -10\r\nKPX rcommaaccent adieresis -10\r\nKPX rcommaaccent agrave -10\r\nKPX rcommaaccent amacron -10\r\nKPX rcommaaccent aogonek -10\r\nKPX rcommaaccent aring -10\r\nKPX rcommaaccent atilde -10\r\nKPX rcommaaccent colon 30\r\nKPX rcommaaccent comma -50\r\nKPX rcommaaccent i 15\r\nKPX rcommaaccent iacute 15\r\nKPX rcommaaccent icircumflex 15\r\nKPX rcommaaccent idieresis 15\r\nKPX rcommaaccent igrave 15\r\nKPX rcommaaccent imacron 15\r\nKPX rcommaaccent iogonek 15\r\nKPX rcommaaccent k 15\r\nKPX rcommaaccent kcommaaccent 15\r\nKPX rcommaaccent l 15\r\nKPX rcommaaccent lacute 15\r\nKPX rcommaaccent lcommaaccent 15\r\nKPX rcommaaccent lslash 15\r\nKPX rcommaaccent m 25\r\nKPX rcommaaccent n 25\r\nKPX rcommaaccent nacute 25\r\nKPX rcommaaccent ncaron 25\r\nKPX rcommaaccent ncommaaccent 25\r\nKPX rcommaaccent ntilde 25\r\nKPX rcommaaccent p 30\r\nKPX rcommaaccent period -50\r\nKPX rcommaaccent semicolon 30\r\nKPX rcommaaccent t 40\r\nKPX rcommaaccent tcommaaccent 40\r\nKPX rcommaaccent u 15\r\nKPX rcommaaccent uacute 15\r\nKPX rcommaaccent ucircumflex 15\r\nKPX rcommaaccent udieresis 15\r\nKPX rcommaaccent ugrave 15\r\nKPX rcommaaccent uhungarumlaut 15\r\nKPX rcommaaccent umacron 15\r\nKPX rcommaaccent uogonek 15\r\nKPX rcommaaccent uring 15\r\nKPX rcommaaccent v 30\r\nKPX rcommaaccent y 30\r\nKPX rcommaaccent yacute 30\r\nKPX rcommaaccent ydieresis 30\r\nKPX s comma -15\r\nKPX s period -15\r\nKPX s w -30\r\nKPX sacute comma -15\r\nKPX sacute period -15\r\nKPX sacute w -30\r\nKPX scaron comma -15\r\nKPX scaron period -15\r\nKPX scaron w -30\r\nKPX scedilla comma -15\r\nKPX scedilla period -15\r\nKPX scedilla w -30\r\nKPX scommaaccent comma -15\r\nKPX scommaaccent period -15\r\nKPX scommaaccent w -30\r\nKPX semicolon space -50\r\nKPX space T -50\r\nKPX space Tcaron -50\r\nKPX space Tcommaaccent -50\r\nKPX space V -50\r\nKPX space W -40\r\nKPX space Y -90\r\nKPX space Yacute -90\r\nKPX space Ydieresis -90\r\nKPX space quotedblleft -30\r\nKPX space quoteleft -60\r\nKPX v a -25\r\nKPX v aacute -25\r\nKPX v abreve -25\r\nKPX v acircumflex -25\r\nKPX v adieresis -25\r\nKPX v agrave -25\r\nKPX v amacron -25\r\nKPX v aogonek -25\r\nKPX v aring -25\r\nKPX v atilde -25\r\nKPX v comma -80\r\nKPX v e -25\r\nKPX v eacute -25\r\nKPX v ecaron -25\r\nKPX v ecircumflex -25\r\nKPX v edieresis -25\r\nKPX v edotaccent -25\r\nKPX v egrave -25\r\nKPX v emacron -25\r\nKPX v eogonek -25\r\nKPX v o -25\r\nKPX v oacute -25\r\nKPX v ocircumflex -25\r\nKPX v odieresis -25\r\nKPX v ograve -25\r\nKPX v ohungarumlaut -25\r\nKPX v omacron -25\r\nKPX v oslash -25\r\nKPX v otilde -25\r\nKPX v period -80\r\nKPX w a -15\r\nKPX w aacute -15\r\nKPX w abreve -15\r\nKPX w acircumflex -15\r\nKPX w adieresis -15\r\nKPX w agrave -15\r\nKPX w amacron -15\r\nKPX w aogonek -15\r\nKPX w aring -15\r\nKPX w atilde -15\r\nKPX w comma -60\r\nKPX w e -10\r\nKPX w eacute -10\r\nKPX w ecaron -10\r\nKPX w ecircumflex -10\r\nKPX w edieresis -10\r\nKPX w edotaccent -10\r\nKPX w egrave -10\r\nKPX w emacron -10\r\nKPX w eogonek -10\r\nKPX w o -10\r\nKPX w oacute -10\r\nKPX w ocircumflex -10\r\nKPX w odieresis -10\r\nKPX w ograve -10\r\nKPX w ohungarumlaut -10\r\nKPX w omacron -10\r\nKPX w oslash -10\r\nKPX w otilde -10\r\nKPX w period -60\r\nKPX x e -30\r\nKPX x eacute -30\r\nKPX x ecaron -30\r\nKPX x ecircumflex -30\r\nKPX x edieresis -30\r\nKPX x edotaccent -30\r\nKPX x egrave -30\r\nKPX x emacron -30\r\nKPX x eogonek -30\r\nKPX y a -20\r\nKPX y aacute -20\r\nKPX y abreve -20\r\nKPX y acircumflex -20\r\nKPX y adieresis -20\r\nKPX y agrave -20\r\nKPX y amacron -20\r\nKPX y aogonek -20\r\nKPX y aring -20\r\nKPX y atilde -20\r\nKPX y comma -100\r\nKPX y e -20\r\nKPX y eacute -20\r\nKPX y ecaron -20\r\nKPX y ecircumflex -20\r\nKPX y edieresis -20\r\nKPX y edotaccent -20\r\nKPX y egrave -20\r\nKPX y emacron -20\r\nKPX y eogonek -20\r\nKPX y o -20\r\nKPX y oacute -20\r\nKPX y ocircumflex -20\r\nKPX y odieresis -20\r\nKPX y ograve -20\r\nKPX y ohungarumlaut -20\r\nKPX y omacron -20\r\nKPX y oslash -20\r\nKPX y otilde -20\r\nKPX y period -100\r\nKPX yacute a -20\r\nKPX yacute aacute -20\r\nKPX yacute abreve -20\r\nKPX yacute acircumflex -20\r\nKPX yacute adieresis -20\r\nKPX yacute agrave -20\r\nKPX yacute amacron -20\r\nKPX yacute aogonek -20\r\nKPX yacute aring -20\r\nKPX yacute atilde -20\r\nKPX yacute comma -100\r\nKPX yacute e -20\r\nKPX yacute eacute -20\r\nKPX yacute ecaron -20\r\nKPX yacute ecircumflex -20\r\nKPX yacute edieresis -20\r\nKPX yacute edotaccent -20\r\nKPX yacute egrave -20\r\nKPX yacute emacron -20\r\nKPX yacute eogonek -20\r\nKPX yacute o -20\r\nKPX yacute oacute -20\r\nKPX yacute ocircumflex -20\r\nKPX yacute odieresis -20\r\nKPX yacute ograve -20\r\nKPX yacute ohungarumlaut -20\r\nKPX yacute omacron -20\r\nKPX yacute oslash -20\r\nKPX yacute otilde -20\r\nKPX yacute period -100\r\nKPX ydieresis a -20\r\nKPX ydieresis aacute -20\r\nKPX ydieresis abreve -20\r\nKPX ydieresis acircumflex -20\r\nKPX ydieresis adieresis -20\r\nKPX ydieresis agrave -20\r\nKPX ydieresis amacron -20\r\nKPX ydieresis aogonek -20\r\nKPX ydieresis aring -20\r\nKPX ydieresis atilde -20\r\nKPX ydieresis comma -100\r\nKPX ydieresis e -20\r\nKPX ydieresis eacute -20\r\nKPX ydieresis ecaron -20\r\nKPX ydieresis ecircumflex -20\r\nKPX ydieresis edieresis -20\r\nKPX ydieresis edotaccent -20\r\nKPX ydieresis egrave -20\r\nKPX ydieresis emacron -20\r\nKPX ydieresis eogonek -20\r\nKPX ydieresis o -20\r\nKPX ydieresis oacute -20\r\nKPX ydieresis ocircumflex -20\r\nKPX ydieresis odieresis -20\r\nKPX ydieresis ograve -20\r\nKPX ydieresis ohungarumlaut -20\r\nKPX ydieresis omacron -20\r\nKPX ydieresis oslash -20\r\nKPX ydieresis otilde -20\r\nKPX ydieresis period -100\r\nKPX z e -15\r\nKPX z eacute -15\r\nKPX z ecaron -15\r\nKPX z ecircumflex -15\r\nKPX z edieresis -15\r\nKPX z edotaccent -15\r\nKPX z egrave -15\r\nKPX z emacron -15\r\nKPX z eogonek -15\r\nKPX z o -15\r\nKPX z oacute -15\r\nKPX z ocircumflex -15\r\nKPX z odieresis -15\r\nKPX z ograve -15\r\nKPX z ohungarumlaut -15\r\nKPX z omacron -15\r\nKPX z oslash -15\r\nKPX z otilde -15\r\nKPX zacute e -15\r\nKPX zacute eacute -15\r\nKPX zacute ecaron -15\r\nKPX zacute ecircumflex -15\r\nKPX zacute edieresis -15\r\nKPX zacute edotaccent -15\r\nKPX zacute egrave -15\r\nKPX zacute emacron -15\r\nKPX zacute eogonek -15\r\nKPX zacute o -15\r\nKPX zacute oacute -15\r\nKPX zacute ocircumflex -15\r\nKPX zacute odieresis -15\r\nKPX zacute ograve -15\r\nKPX zacute ohungarumlaut -15\r\nKPX zacute omacron -15\r\nKPX zacute oslash -15\r\nKPX zacute otilde -15\r\nKPX zcaron e -15\r\nKPX zcaron eacute -15\r\nKPX zcaron ecaron -15\r\nKPX zcaron ecircumflex -15\r\nKPX zcaron edieresis -15\r\nKPX zcaron edotaccent -15\r\nKPX zcaron egrave -15\r\nKPX zcaron emacron -15\r\nKPX zcaron eogonek -15\r\nKPX zcaron o -15\r\nKPX zcaron oacute -15\r\nKPX zcaron ocircumflex -15\r\nKPX zcaron odieresis -15\r\nKPX zcaron ograve -15\r\nKPX zcaron ohungarumlaut -15\r\nKPX zcaron omacron -15\r\nKPX zcaron oslash -15\r\nKPX zcaron otilde -15\r\nKPX zdotaccent e -15\r\nKPX zdotaccent eacute -15\r\nKPX zdotaccent ecaron -15\r\nKPX zdotaccent ecircumflex -15\r\nKPX zdotaccent edieresis -15\r\nKPX zdotaccent edotaccent -15\r\nKPX zdotaccent egrave -15\r\nKPX zdotaccent emacron -15\r\nKPX zdotaccent eogonek -15\r\nKPX zdotaccent o -15\r\nKPX zdotaccent oacute -15\r\nKPX zdotaccent ocircumflex -15\r\nKPX zdotaccent odieresis -15\r\nKPX zdotaccent ograve -15\r\nKPX zdotaccent ohungarumlaut -15\r\nKPX zdotaccent omacron -15\r\nKPX zdotaccent oslash -15\r\nKPX zdotaccent otilde -15\r\nEndKernPairs\r\nEndKernData\r\nEndFontMetrics\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(7435));
/******/ }
]);
//# sourceMappingURL=polyfills.js.map