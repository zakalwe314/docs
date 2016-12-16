module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 140);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Vue.js v2.1.6
 * (c) 2014-2016 Evan You
 * Released under the MIT License.
 */


/*  */

/**
 * Convert a value to a string that is actually rendered.
 */
function _toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val, 10);
  return (n || n === 0) ? n : val
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Remove an item from an array
 */
function remove$1 (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return typeof value === 'string' || typeof value === 'number'
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  }
}

/**
 * Camelize a hyphen-delmited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind$1 (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString.call(obj) === OBJECT_STRING
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 */
function noop () {}

/**
 * Always return false.
 */
var no = function () { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  /* eslint-disable eqeqeq */
  return a == b || (
    isObject(a) && isObject(b)
      ? JSON.stringify(a) === JSON.stringify(b)
      : false
  )
  /* eslint-enable eqeqeq */
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Whether to enable devtools
   */
  devtools: "production" !== 'production',

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: null,

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * List of asset types that a component can own.
   */
  _assetTypes: [
    'component',
    'directive',
    'filter'
  ],

  /**
   * List of lifecycle hooks.
   */
  _lifecycleHooks: [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated'
  ],

  /**
   * Max circular updates allowed in a scheduler flush cycle.
   */
  _maxUpdateCount: 100
};

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  } else {
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) { return }
        obj = obj[segments[i]];
      }
      return obj
    }
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return /native code/.test(Ctor.toString())
}

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function (err) { console.error(err); };
    timerFunc = function () {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else if (typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) { cb.call(ctx); }
      if (_resolve) { _resolve(ctx); }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      })
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

var warn = noop;
var formatComponentName;

if (false) {
  var hasConsole = typeof console !== 'undefined';

  warn = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.error("[Vue warn]: " + msg + " " + (
        vm ? formatLocation(formatComponentName(vm)) : ''
      ));
    }
  };

  formatComponentName = function (vm) {
    if (vm.$root === vm) {
      return 'root instance'
    }
    var name = vm._isVue
      ? vm.$options.name || vm.$options._componentTag
      : vm.name;
    return (
      (name ? ("component <" + name + ">") : "anonymous component") +
      (vm._isVue && vm.$options.__file ? (" at " + (vm.$options.__file)) : '')
    )
  };

  var formatLocation = function (str) {
    if (str === 'anonymous component') {
      str += " - use the \"name\" option for better debugging messages.";
    }
    return ("\n(found in " + str + ")")
  };
}

/*  */


var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid$1++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove$1(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stablize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var arguments$1 = arguments;

    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments$1[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true,
  isSettingProps: false
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (false) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set$1 (obj, key, val) {
  if (Array.isArray(obj)) {
    obj.length = Math.max(obj.length, key);
    obj.splice(key, 1, val);
    return val
  }
  if (hasOwn(obj, key)) {
    obj[key] = val;
    return
  }
  var ob = obj.__ob__;
  if (obj._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return
  }
  if (!ob) {
    obj[key] = val;
    return
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (obj, key) {
  var ob = obj.__ob__;
  if (obj._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(obj, key)) {
    return
  }
  delete obj[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (false) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set$1(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (typeof childVal !== 'function') {
      "production" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        childVal.call(this),
        parentVal.call(this)
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
};

/**
 * Hooks and param attributes are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

config._lifecycleHooks.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

config._assetTypes.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  /* istanbul ignore if */
  if (!childVal) { return parentVal }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.computed = function (parentVal, childVal) {
  if (!childVal) { return parentVal }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret
};

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (false) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (false) {
    checkComponents(child);
  }
  normalizeProps(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = typeof extendsFrom === 'function'
      ? mergeOptions(parent, extendsFrom.options, vm)
      : mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      var mixin = child.mixins[i];
      if (mixin.prototype instanceof Vue$2) {
        mixin = mixin.options;
      }
      parent = mergeOptions(parent, mixin, vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (false) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isBooleanType(prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (false) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    "production" !== 'production' && warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm[key] !== undefined) {
    return vm[key]
  }
  // call factory function for non-Function types
  return typeof def === 'function' && prop.type !== Function
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType);
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

/**
 * Assert the type of a value
 */
function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (expectedType === 'String') {
    valid = typeof value === (expectedType = 'string');
  } else if (expectedType === 'Number') {
    valid = typeof value === (expectedType = 'number');
  } else if (expectedType === 'Boolean') {
    valid = typeof value === (expectedType = 'boolean');
  } else if (expectedType === 'Function') {
    valid = typeof value === (expectedType = 'function');
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match && match[1]
}

function isBooleanType (fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === 'Boolean'
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === 'Boolean') {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}



var util = Object.freeze({
	defineReactive: defineReactive$$1,
	_toString: _toString,
	toNumber: toNumber,
	makeMap: makeMap,
	isBuiltInTag: isBuiltInTag,
	remove: remove$1,
	hasOwn: hasOwn,
	isPrimitive: isPrimitive,
	cached: cached,
	camelize: camelize,
	capitalize: capitalize,
	hyphenate: hyphenate,
	bind: bind$1,
	toArray: toArray,
	extend: extend,
	isObject: isObject,
	isPlainObject: isPlainObject,
	toObject: toObject,
	noop: noop,
	no: no,
	identity: identity,
	genStaticKeys: genStaticKeys,
	looseEqual: looseEqual,
	looseIndexOf: looseIndexOf,
	isReserved: isReserved,
	def: def,
	parsePath: parsePath,
	hasProto: hasProto,
	inBrowser: inBrowser,
	UA: UA,
	isIE: isIE,
	isIE9: isIE9,
	isEdge: isEdge,
	isAndroid: isAndroid,
	isIOS: isIOS,
	isServerRendering: isServerRendering,
	devtools: devtools,
	nextTick: nextTick,
	get _Set () { return _Set; },
	mergeOptions: mergeOptions,
	resolveAsset: resolveAsset,
	get warn () { return warn; },
	get formatComponentName () { return formatComponentName; },
	validateProp: validateProp
});

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (false) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      "referenced during render. Make sure to declare reactive data " +
      "properties in the data option.",
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */


var queue = [];
var has$1 = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  queue.length = 0;
  has$1 = {};
  if (false) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    var watcher = queue[index];
    var id = watcher.id;
    has$1[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (false) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > config._maxUpdateCount) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }

  resetSchedulerState();
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has$1[id] == null) {
    has$1[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i >= 0 && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(Math.max(i, index) + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  if ( options === void 0 ) options = {};

  this.vm = vm;
  vm._watchers.push(this);
  // options
  this.deep = !!options.deep;
  this.user = !!options.user;
  this.lazy = !!options.lazy;
  this.sync = !!options.sync;
  this.expression = expOrFn.toString();
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "production" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value = this.getter.call(this.vm, this.vm);
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  popTarget();
  this.cleanupDeps();
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
      if (
        value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          /* istanbul ignore else */
          if (config.errorHandler) {
            config.errorHandler.call(null, e, this.vm);
          } else {
            "production" !== 'production' && warn(
              ("Error in watcher \"" + (this.expression) + "\""),
              this.vm
            );
            throw e
          }
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed or is performing a v-for
    // re-render (the watcher list is then filtered by v-for).
    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
      remove$1(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

function initState (vm) {
  vm._watchers = [];
  initProps(vm);
  initMethods(vm);
  initData(vm);
  initComputed(vm);
  initWatch(vm);
}

var isReservedProp = { key: 1, ref: 1, slot: 1 };

function initProps (vm) {
  var props = vm.$options.props;
  if (props) {
    var propsData = vm.$options.propsData || {};
    var keys = vm.$options._propKeys = Object.keys(props);
    var isRoot = !vm.$parent;
    // root instance props should be converted
    observerState.shouldConvert = isRoot;
    var loop = function ( i ) {
      var key = keys[i];
      /* istanbul ignore else */
      if (false) {
        if (isReservedProp[key]) {
          warn(
            ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
            vm
          );
        }
        defineReactive$$1(vm, key, validateProp(key, props, propsData, vm), function () {
          if (vm.$parent && !observerState.isSettingProps) {
            warn(
              "Avoid mutating a prop directly since the value will be " +
              "overwritten whenever the parent component re-renders. " +
              "Instead, use a data or computed property based on the prop's " +
              "value. Prop being mutated: \"" + key + "\"",
              vm
            );
          }
        });
      } else {
        defineReactive$$1(vm, key, validateProp(key, props, propsData, vm));
      }
    };

    for (var i = 0; i < keys.length; i++) loop( i );
    observerState.shouldConvert = true;
  }
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? data.call(vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "production" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var i = keys.length;
  while (i--) {
    if (props && hasOwn(props, keys[i])) {
      "production" !== 'production' && warn(
        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else {
      proxy(vm, keys[i]);
    }
  }
  // observe data
  observe(data);
  data.__ob__ && data.__ob__.vmCount++;
}

var computedSharedDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function initComputed (vm) {
  var computed = vm.$options.computed;
  if (computed) {
    for (var key in computed) {
      var userDef = computed[key];
      if (typeof userDef === 'function') {
        computedSharedDefinition.get = makeComputedGetter(userDef, vm);
        computedSharedDefinition.set = noop;
      } else {
        computedSharedDefinition.get = userDef.get
          ? userDef.cache !== false
            ? makeComputedGetter(userDef.get, vm)
            : bind$1(userDef.get, vm)
          : noop;
        computedSharedDefinition.set = userDef.set
          ? bind$1(userDef.set, vm)
          : noop;
      }
      Object.defineProperty(vm, key, computedSharedDefinition);
    }
  }
}

function makeComputedGetter (getter, owner) {
  var watcher = new Watcher(owner, getter, noop, {
    lazy: true
  });
  return function computedGetter () {
    if (watcher.dirty) {
      watcher.evaluate();
    }
    if (Dep.target) {
      watcher.depend();
    }
    return watcher.value
  }
}

function initMethods (vm) {
  var methods = vm.$options.methods;
  if (methods) {
    for (var key in methods) {
      vm[key] = methods[key] == null ? noop : bind$1(methods[key], vm);
      if (false) {
        warn(
          "method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
    }
  }
}

function initWatch (vm) {
  var watch = vm.$options.watch;
  if (watch) {
    for (var key in watch) {
      var handler = watch[key];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }
}

function createWatcher (vm, key, handler) {
  var options;
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  vm.$watch(key, handler, options);
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () {
    return this._data
  };
  if (false) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);

  Vue.prototype.$set = set$1;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

function proxy (vm, key) {
  if (!isReserved(key)) {
    Object.defineProperty(vm, key, {
      configurable: true,
      enumerable: true,
      get: function proxyGetter () {
        return vm._data[key]
      },
      set: function proxySetter (val) {
        vm._data[key] = val;
      }
    });
  }
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.child = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
};

var createEmptyVNode = function () {
  var node = new VNode();
  node.text = '';
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isCloned = true;
  return cloned
}

function cloneVNodes (vnodes) {
  var res = new Array(vnodes.length);
  for (var i = 0; i < vnodes.length; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res
}

/*  */

var activeInstance = null;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._mount = function (
    el,
    hydrating
  ) {
    var vm = this;
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
      if (false) {
        /* istanbul ignore if */
        if (vm.$options.template && vm.$options.template.charAt(0) !== '#') {
          warn(
            'You are using the runtime-only build of Vue where the template ' +
            'option is not available. Either pre-compile the templates into ' +
            'render functions, or use the compiler-included build.',
            vm
          );
        } else {
          warn(
            'Failed to mount component: template or render function not defined.',
            vm
          );
        }
      }
    }
    callHook(vm, 'beforeMount');
    vm._watcher = new Watcher(vm, function () {
      vm._update(vm._render(), hydrating);
    }, noop);
    hydrating = false;
    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm
  };

  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    if (vm._isMounted) {
      callHook(vm, 'updated');
    }
  };

  Vue.prototype._updateFromParent = function (
    propsData,
    listeners,
    parentVnode,
    renderChildren
  ) {
    var vm = this;
    var hasChildren = !!(vm.$options._renderChildren || renderChildren);
    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render
    if (vm._vnode) { // update child tree's parent
      vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;
    // update props
    if (propsData && vm.$options.props) {
      observerState.shouldConvert = false;
      if (false) {
        observerState.isSettingProps = true;
      }
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        vm[key] = validateProp(key, vm.$options.props, propsData, vm);
      }
      observerState.shouldConvert = true;
      if (false) {
        observerState.isSettingProps = false;
      }
      vm.$options.propsData = propsData;
    }
    // update listeners
    if (listeners) {
      var oldListeners = vm.$options._parentListeners;
      vm.$options._parentListeners = listeners;
      vm._updateListeners(listeners, oldListeners);
    }
    // resolve slots + force update if has children
    if (hasChildren) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove$1(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
  };
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      handlers[i].call(vm);
    }
  }
  vm.$emit('hook:' + hook);
}

/*  */

var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy$1 };
var hooksToMerge = Object.keys(hooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (!Ctor) {
    return
  }

  var baseCtor = context.$options._base;
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  if (typeof Ctor !== 'function') {
    if (false) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  if (!Ctor.cid) {
    if (Ctor.resolved) {
      Ctor = Ctor.resolved;
    } else {
      Ctor = resolveAsyncComponent(Ctor, baseCtor, function () {
        // it's ok to queue this on every render because
        // $forceUpdate is buffered by the scheduler.
        context.$forceUpdate();
      });
      if (!Ctor) {
        // return nothing if this is indeed an async component
        // wait for the callback to trigger parent update.
        return
      }
    }
  }

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  data = data || {};

  // extract props
  var propsData = extractProps(data, Ctor);

  // functional component
  if (Ctor.options.functional) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  data.on = data.nativeOn;

  if (Ctor.options.abstract) {
    // abstract components do not keep anything
    // other than props & listeners
    data = {};
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
  );
  return vnode
}

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (propOptions) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData);
    }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
  var vnode = Ctor.options.render.call(null, h, {
    props: props,
    data: data,
    parent: context,
    children: children,
    slots: function () { return resolveSlots(children, context); }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (inlineTemplate) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function init (
  vnode,
  hydrating,
  parentElm,
  refElm
) {
  if (!vnode.child || vnode.child._isDestroyed) {
    var child = vnode.child = createComponentInstanceForVnode(
      vnode,
      activeInstance,
      parentElm,
      refElm
    );
    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
  } else if (vnode.data.keepAlive) {
    // kept-alive components, treat as a patch
    var mountedNode = vnode; // work around flow
    prepatch(mountedNode, mountedNode);
  }
}

function prepatch (
  oldVnode,
  vnode
) {
  var options = vnode.componentOptions;
  var child = vnode.child = oldVnode.child;
  child._updateFromParent(
    options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
  );
}

function insert (vnode) {
  if (!vnode.child._isMounted) {
    vnode.child._isMounted = true;
    callHook(vnode.child, 'mounted');
  }
  if (vnode.data.keepAlive) {
    vnode.child._inactive = false;
    callHook(vnode.child, 'activated');
  }
}

function destroy$1 (vnode) {
  if (!vnode.child._isDestroyed) {
    if (!vnode.data.keepAlive) {
      vnode.child.$destroy();
    } else {
      vnode.child._inactive = true;
      callHook(vnode.child, 'deactivated');
    }
  }
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  cb
) {
  if (factory.requested) {
    // pool callbacks
    factory.pendingCallbacks.push(cb);
  } else {
    factory.requested = true;
    var cbs = factory.pendingCallbacks = [cb];
    var sync = true;

    var resolve = function (res) {
      if (isObject(res)) {
        res = baseCtor.extend(res);
      }
      // cache resolved
      factory.resolved = res;
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        for (var i = 0, l = cbs.length; i < l; i++) {
          cbs[i](res);
        }
      }
    };

    var reject = function (reason) {
      "production" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
    };

    var res = factory(resolve, reject);

    // handle promise
    if (res && typeof res.then === 'function' && !factory.resolved) {
      res.then(resolve, reject);
    }

    sync = false;
    // return in case resolved synchronously
    return factory.resolved
  }
}

function extractProps (data, Ctor) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (!propOptions) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  var domProps = data.domProps;
  if (attrs || props || domProps) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey) ||
      checkProp(res, domProps, key, altKey);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (hash) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = hooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook, key) {
  key = key + hookKey;
  var injectedHash = def.__injected || (def.__injected = {});
  if (!injectedHash[key]) {
    injectedHash[key] = true;
    var oldHook = def[hookKey];
    if (oldHook) {
      def[hookKey] = function () {
        oldHook.apply(this, arguments);
        hook.apply(this, arguments);
      };
    } else {
      def[hookKey] = hook;
    }
  }
}

/*  */

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, fn, event, capture, once;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    if (!cur) {
      "production" !== 'production' && warn(
        "Invalid handler for event \"" + name + "\": got " + String(cur),
        vm
      );
    } else if (!old) {
      once = name.charAt(0) === '~'; // Prefixed last, checked first
      event = once ? name.slice(1) : name;
      capture = event.charAt(0) === '!';
      event = capture ? event.slice(1) : event;
      if (Array.isArray(cur)) {
        add(event, (cur.invoker = arrInvoker(cur)), once, capture);
      } else {
        if (!cur.invoker) {
          fn = cur;
          cur = on[name] = {};
          cur.fn = fn;
          cur.invoker = fnInvoker(cur);
        }
        add(event, cur.invoker, once, capture);
      }
    } else if (cur !== old) {
      if (Array.isArray(old)) {
        old.length = cur.length;
        for (var i = 0; i < old.length; i++) { old[i] = cur[i]; }
        on[name] = old;
      } else {
        old.fn = cur;
        on[name] = old;
      }
    }
  }
  for (name in oldOn) {
    if (!on[name]) {
      once = name.charAt(0) === '~'; // Prefixed last, checked first
      event = once ? name.slice(1) : name;
      capture = event.charAt(0) === '!';
      event = capture ? event.slice(1) : event;
      remove$$1(event, oldOn[name].invoker, capture);
    }
  }
}

function arrInvoker (arr) {
  return function (ev) {
    var arguments$1 = arguments;

    var single = arguments.length === 1;
    for (var i = 0; i < arr.length; i++) {
      single ? arr[i](ev) : arr[i].apply(null, arguments$1);
    }
  }
}

function fnInvoker (o) {
  return function (ev) {
    var single = arguments.length === 1;
    single ? o.fn(ev) : o.fn.apply(null, arguments);
  }
}

/*  */

function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (c == null || typeof c === 'boolean') { continue }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
    } else if (isPrimitive(c)) {
      if (last && last.text) {
        last.text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (c.text && last && last.text) {
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (c.tag && c.key == null && nestedIndex != null) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function getFirstComponentChild (children) {
  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
}

/*  */

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  needNormalization,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    needNormalization = children;
    children = data;
    data = undefined;
  }
  if (alwaysNormalize) { needNormalization = true; }
  return _createElement(context, tag, data, children, needNormalization)
}

function _createElement (
  context,
  tag,
  data,
  children,
  needNormalization
) {
  if (data && data.__ob__) {
    "production" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
      typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (needNormalization) {
    children = normalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      ns = tag === 'foreignObject' ? 'xhtml' : ns;
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (vnode) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns) {
  vnode.ns = ns;
  if (vnode.children) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (child.tag && !child.ns) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

function initRender (vm) {
  vm.$vnode = null; // the placeholder node in parent tree
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$options._parentVnode;
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = {};
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, needNormalization, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };
  if (vm.$options.el) {
    vm.$mount(vm.$options.el);
  }
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    if (_parentVnode && _parentVnode.data.scopedSlots) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots;
    }

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      /* istanbul ignore else */
      if (config.errorHandler) {
        config.errorHandler.call(null, e, vm);
      } else {
        if (false) {
          warn(("Error when rendering " + (formatComponentName(vm)) + ":"));
        }
        throw e
      }
      // return previous vnode to prevent render error causing blank component
      vnode = vm._vnode;
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (false) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // toString for mustaches
  Vue.prototype._s = _toString;
  // convert text to vnode
  Vue.prototype._v = createTextVNode;
  // number conversion
  Vue.prototype._n = toNumber;
  // empty vnode
  Vue.prototype._e = createEmptyVNode;
  // loose equal
  Vue.prototype._q = looseEqual;
  // loose indexOf
  Vue.prototype._i = looseIndexOf;

  // render static tree by index
  Vue.prototype._m = function renderStatic (
    index,
    isInFor
  ) {
    var tree = this._staticTrees[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree by doing a shallow clone.
    if (tree && !isInFor) {
      return Array.isArray(tree)
        ? cloneVNodes(tree)
        : cloneVNode(tree)
    }
    // otherwise, render a fresh tree.
    tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
    markStatic(tree, ("__static__" + index), false);
    return tree
  };

  // mark node as static (v-once)
  Vue.prototype._o = function markOnce (
    tree,
    index,
    key
  ) {
    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
    return tree
  };

  function markStatic (tree, key, isOnce) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], (key + "_" + i), isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode (node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  // filter resolution helper
  Vue.prototype._f = function resolveFilter (id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity
  };

  // render v-for
  Vue.prototype._l = function renderList (
    val,
    render
  ) {
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
    return ret
  };

  // renderSlot
  Vue.prototype._t = function (
    name,
    fallback,
    props
  ) {
    var scopedSlotFn = this.$scopedSlots[name];
    if (scopedSlotFn) { // scoped slot
      return scopedSlotFn(props || {}) || fallback
    } else {
      var slotNodes = this.$slots[name];
      // warn duplicate slot usage
      if (slotNodes && "production" !== 'production') {
        slotNodes._rendered && warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
        slotNodes._rendered = true;
      }
      return slotNodes || fallback
    }
  };

  // apply v-bind object
  Vue.prototype._b = function bindProps (
    data,
    tag,
    value,
    asProp
  ) {
    if (value) {
      if (!isObject(value)) {
        "production" !== 'production' && warn(
          'v-bind without argument expects an Object or Array value',
          this
        );
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        for (var key in value) {
          if (key === 'class' || key === 'style') {
            data[key] = value[key];
          } else {
            var hash = asProp || config.mustUseProp(tag, key)
              ? data.domProps || (data.domProps = {})
              : data.attrs || (data.attrs = {});
            hash[key] = value[key];
          }
        }
      }
    }
    return data
  };

  // check v-on keyCodes
  Vue.prototype._k = function checkKeyCodes (
    eventKeyCode,
    key,
    builtInAlias
  ) {
    var keyCodes = config.keyCodes[key] || builtInAlias;
    if (Array.isArray(keyCodes)) {
      return keyCodes.indexOf(eventKeyCode) === -1
    } else {
      return keyCodes !== eventKeyCode
    }
  };
}

function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  var name, child;
  for (var i = 0, l = children.length; i < l; i++) {
    child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
        child.data && (name = child.data.slot)) {
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore single whitespace
  if (defaultSlot.length && !(
    defaultSlot.length === 1 &&
    (defaultSlot[0].text === ' ' || defaultSlot[0].isComment)
  )) {
    slots.default = defaultSlot;
  }
  return slots
}

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  var add = function (event, fn, once) {
    once ? vm.$once(event, fn) : vm.$on(event, fn);
  };
  var remove$$1 = bind$1(vm.$off, vm);
  vm._updateListeners = function (listeners, oldListeners) {
    updateListeners(listeners, oldListeners || {}, add, remove$$1, vm);
  };
  if (listeners) {
    vm._updateListeners(listeners);
  }
}

function eventsMixin (Vue) {
  Vue.prototype.$on = function (event, fn) {
    var vm = this;(vm._events[event] || (vm._events[event] = [])).push(fn);
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        cbs[i].apply(vm, args);
      }
    }
    return vm
  };
}

/*  */

var uid = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid++;
    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (false) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    callHook(vm, 'beforeCreate');
    initState(vm);
    callHook(vm, 'created');
    initRender(vm);
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = Ctor.super.options;
    var cachedSuperOptions = Ctor.superOptions;
    var extendOptions = Ctor.extendOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed
      Ctor.superOptions = superOptions;
      extendOptions.render = options.render;
      extendOptions.staticRenderFns = options.staticRenderFns;
      extendOptions._scopeId = options._scopeId;
      options = Ctor.options = mergeOptions(superOptions, extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function Vue$2 (options) {
  if (false) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$2);
stateMixin(Vue$2);
eventsMixin(Vue$2);
lifecycleMixin(Vue$2);
renderMixin(Vue$2);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }
    var name = extendOptions.name || Super.options.name;
    if (false) {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }
    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;
    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;
    // create asset registers, so extended classes
    // can have their private assets too.
    config._assetTypes.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }
    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  config._assetTypes.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (false) {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp];

function matches (pattern, name) {
  if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else {
    return pattern.test(name)
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,
  props: {
    include: patternTypes,
    exclude: patternTypes
  },
  created: function created () {
    this.cache = Object.create(null);
  },
  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    if (vnode && vnode.componentOptions) {
      var opts = vnode.componentOptions;
      // check pattern
      var name = opts.Ctor.options.name || opts.tag;
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? opts.Ctor.cid + (opts.tag ? ("::" + (opts.tag)) : '')
        : vnode.key;
      if (this.cache[key]) {
        vnode.child = this.cache[key].child;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  },
  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this.cache) {
      var vnode = this$1.cache[key];
      callHook(vnode.child, 'deactivated');
      vnode.child.$destroy();
    }
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (false) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);
  Vue.util = util;
  Vue.set = set$1;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  config._assetTypes.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$2);

Object.defineProperty(Vue$2.prototype, '$isServer', {
  get: isServerRendering
});

Vue$2.version = '2.1.6';

/*  */

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select');
var mustUseProp = function (tag, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (childNode.child) {
    childNode = childNode.child._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return genClassFromData(data)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: child.class
      ? [child.class, parent.class]
      : parent.class
  }
}

function genClassFromData (data) {
  var dynamicClass = data.class;
  var staticClass = data.staticClass;
  if (staticClass || dynamicClass) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  var res = '';
  if (!value) {
    return res
  }
  if (typeof value === 'string') {
    return value
  }
  if (Array.isArray(value)) {
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (value[i]) {
        if ((stringified = stringifyClass(value[i]))) {
          res += stringified + ' ';
        }
      }
    }
    return res.slice(0, -1)
  }
  if (isObject(value)) {
    for (var key in value) {
      if (value[key]) { res += key + ' '; }
    }
    return res.slice(0, -1)
  }
  /* istanbul ignore next */
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML',
  xhtml: 'http://www.w3.org/1999/xhtml'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,' +
  'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);



var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selector = el;
    el = document.querySelector(el);
    if (!el) {
      "production" !== 'production' && warn(
        'Cannot find element: ' + selector
      );
      return document.createElement('div')
    }
  }
  return el
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  if (vnode.data && vnode.data.attrs && 'multiple' in vnode.data.attrs) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.child || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove$1(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
        refs[key].push(ref);
      } else {
        refs[key] = [ref];
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks$1 = ['create', 'activate', 'update', 'remove', 'destroy'];

function isUndef (s) {
  return s == null
}

function isDef (s) {
  return s != null
}

function sameVnode (vnode1, vnode2) {
  return (
    vnode1.key === vnode2.key &&
    vnode1.tag === vnode2.tag &&
    vnode1.isComment === vnode2.isComment &&
    !vnode1.data === !vnode2.data
  )
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks$1.length; ++i) {
    cbs[hooks$1[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (modules[j][hooks$1[i]] !== undefined) { cbs[hooks$1[i]].push(modules[j][hooks$1[i]]); }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeElement(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeElement (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html
    if (parent) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (false) {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(config.ignoredElements && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (false) {
        inPre--;
      }
    } else if (vnode.isComment) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.child) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.child)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isReactivated) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.child) {
      innerNode = innerNode.child._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref) {
    if (parent) {
      if (ref) {
        nodeOps.insertBefore(parent, elm, ref);
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.child) {
      vnode = vnode.child._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (i.create) { i.create(emptyNode, vnode); }
      if (i.insert) { insertedVnodeQueue.push(vnode); }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (vnode.data.pendingInsert) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
    }
    vnode.elm = vnode.child.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
    if (isDef(i = activeInstance) &&
        i !== vnode.context &&
        isDef(i = i.$options._scopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          nodeOps.removeChild(parentElm, ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (rm || isDef(vnode.data)) {
      var listeners = cbs.remove.length + 1;
      if (!rm) {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      } else {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.child) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeElement(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if (false) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }
    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (vnode.isStatic &&
        oldVnode.isStatic &&
        vnode.key === oldVnode.key &&
        (vnode.isCloned || vnode.isOnce)) {
      vnode.elm = oldVnode.elm;
      vnode.child = oldVnode.child;
      return
    }
    var i;
    var data = vnode.data;
    var hasData = isDef(data);
    if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }
    var elm = vnode.elm = oldVnode.elm;
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (hasData && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (hasData) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (initial && vnode.parent) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (false) {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.child)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            if (false) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
            }
            return false
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (vnode.tag) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return _toString(vnode.text) === node.data
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (!vnode) {
      if (oldVnode) { invokeDestroyHook(oldVnode); }
      return
    }

    var elm, parent;
    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (!oldVnode) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
            oldVnode.removeAttribute('server-rendered');
            hydrating = true;
          }
          if (hydrating) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (false) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        elm = oldVnode.elm;
        parent = nodeOps.parentNode(elm);
        createElm(vnode, insertedVnodeQueue, parent, nodeOps.nextSibling(elm));

        if (vnode.parent) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (parent !== null) {
          removeVnodes(parent, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert, 'dir-insert');
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    }, 'dir-postpatch');
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    fn(vnode.elm, dir, vnode, oldVnode);
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  if (!oldVnode.data.attrs && !vnode.data.attrs) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (attrs.__ob__) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  /* istanbul ignore if */
  if (isIE9 && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (attrs[key] == null) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, key);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (!data.staticClass && !data.class &&
      (!oldData || (!oldData.staticClass && !oldData.class))) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (transitionClass) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var target;

function add$1 (event, handler, once, capture) {
  if (once) {
    var oldHandler = handler;
    handler = function (ev) {
      remove$2(event, handler, capture);
      arguments.length === 1
        ? oldHandler(ev)
        : oldHandler.apply(null, arguments);
    };
  }
  target.addEventListener(event, handler, capture);
}

function remove$2 (event, handler, capture) {
  target.removeEventListener(event, handler, capture);
}

function updateDOMListeners (oldVnode, vnode) {
  if (!oldVnode.data.on && !vnode.data.on) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target = vnode.elm;
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (!oldVnode.data.domProps && !vnode.data.domProps) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (props.__ob__) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (props[key] == null) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
    }
    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = cur == null ? '' : String(cur);
      if (!elm.composing && (
        (document.activeElement !== elm && elm.value !== strCur) ||
        isValueChanged(vnode, strCur)
      )) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

function isValueChanged (vnode, newVal) {
  var value = vnode.elm.value;
  var modifiers = vnode.elm._vModifiers; // injected by v-model runtime
  if ((modifiers && modifiers.number) || vnode.elm.type === 'number') {
    return toNumber(value) !== toNumber(newVal)
  }
  if (modifiers && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.child) {
      childNode = childNode.child._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    el.style[normalize(name)] = val;
  }
};

var prefixes = ['Webkit', 'Moz', 'ms'];

var testEl;
var normalize = cached(function (prop) {
  testEl = testEl || document.createElement('div');
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in testEl.style)) {
    return prop
  }
  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + upper;
    if (prefixed in testEl.style) {
      return prefixed
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (!data.staticStyle && !data.style &&
      !oldData.staticStyle && !oldData.style) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldVnode.data.staticStyle;
  var oldStyleBinding = oldVnode.data.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  vnode.data.style = style.__ob__ ? extend({}, style) : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (newStyle[name] == null) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !cls.trim()) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = ' ' + el.getAttribute('class') + ' ';
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !cls.trim()) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
  } else {
    var cur = ' ' + el.getAttribute('class') + ' ';
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    el.setAttribute('class', cur.trim());
  }
}

/*  */

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

var raf = (inBrowser && window.requestAnimationFrame) || setTimeout;
function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
  addClass(el, cls);
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove$1(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitioneDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitioneDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (el._leaveCb) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (!data) {
    return
  }

  /* istanbul ignore if */
  if (el._enterCb || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear ? appearClass : enterClass;
  var activeClass = isAppear ? appearActiveClass : enterActiveClass;
  var beforeEnterHook = isAppear ? (beforeAppear || beforeEnter) : beforeEnter;
  var enterHook = isAppear ? (typeof appear === 'function' ? appear : enter) : enter;
  var afterEnterHook = isAppear ? (afterAppear || afterEnter) : afterEnter;
  var enterCancelledHook = isAppear ? (appearCancelled || enterCancelled) : enterCancelled;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl =
    enterHook &&
    // enterHook may be a bound method which exposes
    // the length of original fn as _length
    (enterHook._length || enterHook.length) > 1;

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
          pendingNode.context === vnode.context &&
          pendingNode.tag === vnode.tag &&
          pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    }, 'transition-insert');
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        whenTransitionEnds(el, type, cb);
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (el._enterCb) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (!data) {
    return rm()
  }

  /* istanbul ignore if */
  if (el._leaveCb || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl =
    leave &&
    // leave hook may be a bound method which exposes
    // the length of original fn as _length
    (leave._length || leave.length) > 1;

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          whenTransitionEnds(el, type, cb);
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    leaveClass: (name + "-leave"),
    appearClass: (name + "-enter"),
    enterActiveClass: (name + "-enter-active"),
    leaveActiveClass: (name + "-leave-active"),
    appearActiveClass: (name + "-enter-active")
  }
});

function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn();
    }
  }
}

function _enter (_, vnode) {
  if (!vnode.data.show) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove (vnode, rm) {
    /* istanbul ignore else */
    if (!vnode.data.show) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch$1 = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

var modelableTagRE = /^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_-]*)?$/;

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model = {
  inserted: function inserted (el, binding, vnode) {
    if (false) {
      if (!modelableTagRE.test(vnode.tag)) {
        warn(
          "v-model is not supported on element type: <" + (vnode.tag) + ">. " +
          'If you are working with contenteditable, it\'s recommended to ' +
          'wrap a library dedicated for that purpose inside a custom component.',
          vnode.context
        );
      }
    }
    if (vnode.tag === 'select') {
      var cb = function () {
        setSelected(el, binding, vnode.context);
      };
      cb();
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(cb, 0);
      }
    } else if (vnode.tag === 'textarea' || el.type === 'text') {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var needReset = el.multiple
        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
      if (needReset) {
        trigger(el, 'change');
      }
    }
  }
};

function setSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "production" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  for (var i = 0, l = options.length; i < l; i++) {
    if (looseEqual(getValue(options[i]), value)) {
      return false
    }
  }
  return true
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.child && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.child._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition && !isIE9) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },
  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    if (transition && !isIE9) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  }
};

var platformDirectives = {
  model: model,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1].fn;
  }
  return data
}

function placeholder (h, rawChild) {
  return /\d-keep-alive$/.test(rawChild.tag)
    ? h('keep-alive')
    : null
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,
  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag; });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (false) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (false) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    var key = child.key = child.key == null || child.isStatic
      ? ("__v" + (child.tag + this._uid) + "__")
      : child.key;
    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && oldChild.key !== key) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);

      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        }, key);
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave, key);
        mergeVNodeHook(data, 'enterCancelled', performLeave, key);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
          delayedLeave = leave;
        }, key);
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final disired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (false) {
          var opts = c.componentOptions;
          var name = opts
            ? (opts.Ctor.options.name || opts.tag)
            : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    var f = document.body.offsetHeight; // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      if (this._hasMove != null) {
        return this._hasMove
      }
      addTransitionClass(el, moveClass);
      var info = getTransitionInfo(el);
      removeTransitionClass(el, moveClass);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$2.config.isUnknownElement = isUnknownElement;
Vue$2.config.isReservedTag = isReservedTag;
Vue$2.config.getTagNamespace = getTagNamespace;
Vue$2.config.mustUseProp = mustUseProp;

// install platform runtime directives & components
extend(Vue$2.options.directives, platformDirectives);
extend(Vue$2.options.components, platformComponents);

// install platform patch function
Vue$2.prototype.__patch__ = inBrowser ? patch$1 : noop;

// wrap mount
Vue$2.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return this._mount(el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$2);
    } else if (
      false
    ) {
      console.log(
        'Download the Vue Devtools for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
}, 0);

module.exports = Vue$2;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/

(function(factory) {

  // Find the global object for export to both the browser and web workers.
  var globalObject = typeof window === 'object' && window ||
                     typeof self === 'object' && self;

  // Setup highlight.js for different environments. First is Node.js or
  // CommonJS.
  if(true) {
    factory(exports);
  } else if(globalObject) {
    // Export hljs globally even when using AMD for cases when this script
    // is loaded with others that may still expect a global hljs.
    globalObject.hljs = factory({});

    // Finally register the global hljs with AMD.
    if(typeof define === 'function' && define.amd) {
      define([], function() {
        return globalObject.hljs;
      });
    }
  }

}(function(hljs) {
  // Convenience variables for build-in objects
  var ArrayProto = [],
      objectKeys = Object.keys;

  // Global internal variables used within the highlight.js library.
  var languages = {},
      aliases   = {};

  // Regular expressions used throughout the highlight.js library.
  var noHighlightRe    = /^(no-?highlight|plain|text)$/i,
      languagePrefixRe = /\blang(?:uage)?-([\w-]+)\b/i,
      fixMarkupRe      = /((^(<[^>]+>|\t|)+|(?:\n)))/gm;

  var spanEndTag = '</span>';

  // Global options used when within external APIs. This is modified when
  // calling the `hljs.configure` function.
  var options = {
    classPrefix: 'hljs-',
    tabReplace: null,
    useBR: false,
    languages: undefined
  };

  // Object map that is used to escape some common HTML characters.
  var escapeRegexMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
  };

  /* Utility functions */

  function escape(value) {
    return value.replace(/[&<>]/gm, function(character) {
      return escapeRegexMap[character];
    });
  }

  function tag(node) {
    return node.nodeName.toLowerCase();
  }

  function testRe(re, lexeme) {
    var match = re && re.exec(lexeme);
    return match && match.index === 0;
  }

  function isNotHighlighted(language) {
    return noHighlightRe.test(language);
  }

  function blockLanguage(block) {
    var i, match, length, _class;
    var classes = block.className + ' ';

    classes += block.parentNode ? block.parentNode.className : '';

    // language-* takes precedence over non-prefixed class names.
    match = languagePrefixRe.exec(classes);
    if (match) {
      return getLanguage(match[1]) ? match[1] : 'no-highlight';
    }

    classes = classes.split(/\s+/);

    for (i = 0, length = classes.length; i < length; i++) {
      _class = classes[i]

      if (isNotHighlighted(_class) || getLanguage(_class)) {
        return _class;
      }
    }
  }

  function inherit(parent, obj) {
    var key;
    var result = {};

    for (key in parent)
      result[key] = parent[key];
    if (obj)
      for (key in obj)
        result[key] = obj[key];
    return result;
  }

  /* Stream merging */

  function nodeStream(node) {
    var result = [];
    (function _nodeStream(node, offset) {
      for (var child = node.firstChild; child; child = child.nextSibling) {
        if (child.nodeType === 3)
          offset += child.nodeValue.length;
        else if (child.nodeType === 1) {
          result.push({
            event: 'start',
            offset: offset,
            node: child
          });
          offset = _nodeStream(child, offset);
          // Prevent void elements from having an end tag that would actually
          // double them in the output. There are more void elements in HTML
          // but we list only those realistically expected in code display.
          if (!tag(child).match(/br|hr|img|input/)) {
            result.push({
              event: 'stop',
              offset: offset,
              node: child
            });
          }
        }
      }
      return offset;
    })(node, 0);
    return result;
  }

  function mergeStreams(original, highlighted, value) {
    var processed = 0;
    var result = '';
    var nodeStack = [];

    function selectStream() {
      if (!original.length || !highlighted.length) {
        return original.length ? original : highlighted;
      }
      if (original[0].offset !== highlighted[0].offset) {
        return (original[0].offset < highlighted[0].offset) ? original : highlighted;
      }

      /*
      To avoid starting the stream just before it should stop the order is
      ensured that original always starts first and closes last:

      if (event1 == 'start' && event2 == 'start')
        return original;
      if (event1 == 'start' && event2 == 'stop')
        return highlighted;
      if (event1 == 'stop' && event2 == 'start')
        return original;
      if (event1 == 'stop' && event2 == 'stop')
        return highlighted;

      ... which is collapsed to:
      */
      return highlighted[0].event === 'start' ? original : highlighted;
    }

    function open(node) {
      function attr_str(a) {return ' ' + a.nodeName + '="' + escape(a.value) + '"';}
      result += '<' + tag(node) + ArrayProto.map.call(node.attributes, attr_str).join('') + '>';
    }

    function close(node) {
      result += '</' + tag(node) + '>';
    }

    function render(event) {
      (event.event === 'start' ? open : close)(event.node);
    }

    while (original.length || highlighted.length) {
      var stream = selectStream();
      result += escape(value.substr(processed, stream[0].offset - processed));
      processed = stream[0].offset;
      if (stream === original) {
        /*
        On any opening or closing tag of the original markup we first close
        the entire highlighted node stack, then render the original tag along
        with all the following original tags at the same offset and then
        reopen all the tags on the highlighted stack.
        */
        nodeStack.reverse().forEach(close);
        do {
          render(stream.splice(0, 1)[0]);
          stream = selectStream();
        } while (stream === original && stream.length && stream[0].offset === processed);
        nodeStack.reverse().forEach(open);
      } else {
        if (stream[0].event === 'start') {
          nodeStack.push(stream[0].node);
        } else {
          nodeStack.pop();
        }
        render(stream.splice(0, 1)[0]);
      }
    }
    return result + escape(value.substr(processed));
  }

  /* Initialization */

  function compileLanguage(language) {

    function reStr(re) {
        return (re && re.source) || re;
    }

    function langRe(value, global) {
      return new RegExp(
        reStr(value),
        'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
      );
    }

    function compileMode(mode, parent) {
      if (mode.compiled)
        return;
      mode.compiled = true;

      mode.keywords = mode.keywords || mode.beginKeywords;
      if (mode.keywords) {
        var compiled_keywords = {};

        var flatten = function(className, str) {
          if (language.case_insensitive) {
            str = str.toLowerCase();
          }
          str.split(' ').forEach(function(kw) {
            var pair = kw.split('|');
            compiled_keywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];
          });
        };

        if (typeof mode.keywords === 'string') { // string
          flatten('keyword', mode.keywords);
        } else {
          objectKeys(mode.keywords).forEach(function (className) {
            flatten(className, mode.keywords[className]);
          });
        }
        mode.keywords = compiled_keywords;
      }
      mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);

      if (parent) {
        if (mode.beginKeywords) {
          mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
        }
        if (!mode.begin)
          mode.begin = /\B|\b/;
        mode.beginRe = langRe(mode.begin);
        if (!mode.end && !mode.endsWithParent)
          mode.end = /\B|\b/;
        if (mode.end)
          mode.endRe = langRe(mode.end);
        mode.terminator_end = reStr(mode.end) || '';
        if (mode.endsWithParent && parent.terminator_end)
          mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
      }
      if (mode.illegal)
        mode.illegalRe = langRe(mode.illegal);
      if (mode.relevance == null)
        mode.relevance = 1;
      if (!mode.contains) {
        mode.contains = [];
      }
      var expanded_contains = [];
      mode.contains.forEach(function(c) {
        if (c.variants) {
          c.variants.forEach(function(v) {expanded_contains.push(inherit(c, v));});
        } else {
          expanded_contains.push(c === 'self' ? mode : c);
        }
      });
      mode.contains = expanded_contains;
      mode.contains.forEach(function(c) {compileMode(c, mode);});

      if (mode.starts) {
        compileMode(mode.starts, parent);
      }

      var terminators =
        mode.contains.map(function(c) {
          return c.beginKeywords ? '\\.?(' + c.begin + ')\\.?' : c.begin;
        })
        .concat([mode.terminator_end, mode.illegal])
        .map(reStr)
        .filter(Boolean);
      mode.terminators = terminators.length ? langRe(terminators.join('|'), true) : {exec: function(/*s*/) {return null;}};
    }

    compileMode(language);
  }

  /*
  Core highlighting function. Accepts a language name, or an alias, and a
  string with the code to highlight. Returns an object with the following
  properties:

  - relevance (int)
  - value (an HTML string with highlighting markup)

  */
  function highlight(name, value, ignore_illegals, continuation) {

    function subMode(lexeme, mode) {
      var i, length;

      for (i = 0, length = mode.contains.length; i < length; i++) {
        if (testRe(mode.contains[i].beginRe, lexeme)) {
          return mode.contains[i];
        }
      }
    }

    function endOfMode(mode, lexeme) {
      if (testRe(mode.endRe, lexeme)) {
        while (mode.endsParent && mode.parent) {
          mode = mode.parent;
        }
        return mode;
      }
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, lexeme);
      }
    }

    function isIllegal(lexeme, mode) {
      return !ignore_illegals && testRe(mode.illegalRe, lexeme);
    }

    function keywordMatch(mode, match) {
      var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
      return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
    }

    function buildSpan(classname, insideSpan, leaveOpen, noPrefix) {
      var classPrefix = noPrefix ? '' : options.classPrefix,
          openSpan    = '<span class="' + classPrefix,
          closeSpan   = leaveOpen ? '' : spanEndTag

      openSpan += classname + '">';

      return openSpan + insideSpan + closeSpan;
    }

    function processKeywords() {
      var keyword_match, last_index, match, result;

      if (!top.keywords)
        return escape(mode_buffer);

      result = '';
      last_index = 0;
      top.lexemesRe.lastIndex = 0;
      match = top.lexemesRe.exec(mode_buffer);

      while (match) {
        result += escape(mode_buffer.substr(last_index, match.index - last_index));
        keyword_match = keywordMatch(top, match);
        if (keyword_match) {
          relevance += keyword_match[1];
          result += buildSpan(keyword_match[0], escape(match[0]));
        } else {
          result += escape(match[0]);
        }
        last_index = top.lexemesRe.lastIndex;
        match = top.lexemesRe.exec(mode_buffer);
      }
      return result + escape(mode_buffer.substr(last_index));
    }

    function processSubLanguage() {
      var explicit = typeof top.subLanguage === 'string';
      if (explicit && !languages[top.subLanguage]) {
        return escape(mode_buffer);
      }

      var result = explicit ?
                   highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) :
                   highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined);

      // Counting embedded language score towards the host language may be disabled
      // with zeroing the containing mode relevance. Usecase in point is Markdown that
      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
      // score.
      if (top.relevance > 0) {
        relevance += result.relevance;
      }
      if (explicit) {
        continuations[top.subLanguage] = result.top;
      }
      return buildSpan(result.language, result.value, false, true);
    }

    function processBuffer() {
      result += (top.subLanguage != null ? processSubLanguage() : processKeywords());
      mode_buffer = '';
    }

    function startNewMode(mode) {
      result += mode.className? buildSpan(mode.className, '', true): '';
      top = Object.create(mode, {parent: {value: top}});
    }

    function processLexeme(buffer, lexeme) {

      mode_buffer += buffer;

      if (lexeme == null) {
        processBuffer();
        return 0;
      }

      var new_mode = subMode(lexeme, top);
      if (new_mode) {
        if (new_mode.skip) {
          mode_buffer += lexeme;
        } else {
          if (new_mode.excludeBegin) {
            mode_buffer += lexeme;
          }
          processBuffer();
          if (!new_mode.returnBegin && !new_mode.excludeBegin) {
            mode_buffer = lexeme;
          }
        }
        startNewMode(new_mode, lexeme);
        return new_mode.returnBegin ? 0 : lexeme.length;
      }

      var end_mode = endOfMode(top, lexeme);
      if (end_mode) {
        var origin = top;
        if (origin.skip) {
          mode_buffer += lexeme;
        } else {
          if (!(origin.returnEnd || origin.excludeEnd)) {
            mode_buffer += lexeme;
          }
          processBuffer();
          if (origin.excludeEnd) {
            mode_buffer = lexeme;
          }
        }
        do {
          if (top.className) {
            result += spanEndTag;
          }
          if (!top.skip) {
            relevance += top.relevance;
          }
          top = top.parent;
        } while (top !== end_mode.parent);
        if (end_mode.starts) {
          startNewMode(end_mode.starts, '');
        }
        return origin.returnEnd ? 0 : lexeme.length;
      }

      if (isIllegal(lexeme, top))
        throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');

      /*
      Parser should not reach this point as all types of lexemes should be caught
      earlier, but if it does due to some bug make sure it advances at least one
      character forward to prevent infinite looping.
      */
      mode_buffer += lexeme;
      return lexeme.length || 1;
    }

    var language = getLanguage(name);
    if (!language) {
      throw new Error('Unknown language: "' + name + '"');
    }

    compileLanguage(language);
    var top = continuation || language;
    var continuations = {}; // keep continuations for sub-languages
    var result = '', current;
    for(current = top; current !== language; current = current.parent) {
      if (current.className) {
        result = buildSpan(current.className, '', true) + result;
      }
    }
    var mode_buffer = '';
    var relevance = 0;
    try {
      var match, count, index = 0;
      while (true) {
        top.terminators.lastIndex = index;
        match = top.terminators.exec(value);
        if (!match)
          break;
        count = processLexeme(value.substr(index, match.index - index), match[0]);
        index = match.index + count;
      }
      processLexeme(value.substr(index));
      for(current = top; current.parent; current = current.parent) { // close dangling modes
        if (current.className) {
          result += spanEndTag;
        }
      }
      return {
        relevance: relevance,
        value: result,
        language: name,
        top: top
      };
    } catch (e) {
      if (e.message && e.message.indexOf('Illegal') !== -1) {
        return {
          relevance: 0,
          value: escape(value)
        };
      } else {
        throw e;
      }
    }
  }

  /*
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:

  - language (detected language)
  - relevance (int)
  - value (an HTML string with highlighting markup)
  - second_best (object with the same structure for second-best heuristically
    detected language, may be absent)

  */
  function highlightAuto(text, languageSubset) {
    languageSubset = languageSubset || options.languages || objectKeys(languages);
    var result = {
      relevance: 0,
      value: escape(text)
    };
    var second_best = result;
    languageSubset.filter(getLanguage).forEach(function(name) {
      var current = highlight(name, text, false);
      current.language = name;
      if (current.relevance > second_best.relevance) {
        second_best = current;
      }
      if (current.relevance > result.relevance) {
        second_best = result;
        result = current;
      }
    });
    if (second_best.language) {
      result.second_best = second_best;
    }
    return result;
  }

  /*
  Post-processing of the highlighted markup:

  - replace TABs with something more useful
  - replace real line-breaks with '<br>' for non-pre containers

  */
  function fixMarkup(value) {
    return !(options.tabReplace || options.useBR)
      ? value
      : value.replace(fixMarkupRe, function(match, p1) {
          if (options.useBR && match === '\n') {
            return '<br>';
          } else if (options.tabReplace) {
            return p1.replace(/\t/g, options.tabReplace);
          }
      });
  }

  function buildClassName(prevClassName, currentLang, resultLang) {
    var language = currentLang ? aliases[currentLang] : resultLang,
        result   = [prevClassName.trim()];

    if (!prevClassName.match(/\bhljs\b/)) {
      result.push('hljs');
    }

    if (prevClassName.indexOf(language) === -1) {
      result.push(language);
    }

    return result.join(' ').trim();
  }

  /*
  Applies highlighting to a DOM node containing code. Accepts a DOM node and
  two optional parameters for fixMarkup.
  */
  function highlightBlock(block) {
    var node, originalStream, result, resultNode, text;
    var language = blockLanguage(block);

    if (isNotHighlighted(language))
        return;

    if (options.useBR) {
      node = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
      node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
    } else {
      node = block;
    }
    text = node.textContent;
    result = language ? highlight(language, text, true) : highlightAuto(text);

    originalStream = nodeStream(node);
    if (originalStream.length) {
      resultNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
      resultNode.innerHTML = result.value;
      result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
    }
    result.value = fixMarkup(result.value);

    block.innerHTML = result.value;
    block.className = buildClassName(block.className, language, result.language);
    block.result = {
      language: result.language,
      re: result.relevance
    };
    if (result.second_best) {
      block.second_best = {
        language: result.second_best.language,
        re: result.second_best.relevance
      };
    }
  }

  /*
  Updates highlight.js global options with values passed in the form of an object.
  */
  function configure(user_options) {
    options = inherit(options, user_options);
  }

  /*
  Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
  */
  function initHighlighting() {
    if (initHighlighting.called)
      return;
    initHighlighting.called = true;

    var blocks = document.querySelectorAll('pre code');
    ArrayProto.forEach.call(blocks, highlightBlock);
  }

  /*
  Attaches highlighting to the page load event.
  */
  function initHighlightingOnLoad() {
    addEventListener('DOMContentLoaded', initHighlighting, false);
    addEventListener('load', initHighlighting, false);
  }

  function registerLanguage(name, language) {
    var lang = languages[name] = language(hljs);
    if (lang.aliases) {
      lang.aliases.forEach(function(alias) {aliases[alias] = name;});
    }
  }

  function listLanguages() {
    return objectKeys(languages);
  }

  function getLanguage(name) {
    name = (name || '').toLowerCase();
    return languages[name] || languages[aliases[name]];
  }

  /* Interface definition */

  hljs.highlight = highlight;
  hljs.highlightAuto = highlightAuto;
  hljs.fixMarkup = fixMarkup;
  hljs.highlightBlock = highlightBlock;
  hljs.configure = configure;
  hljs.initHighlighting = initHighlighting;
  hljs.initHighlightingOnLoad = initHighlightingOnLoad;
  hljs.registerLanguage = registerLanguage;
  hljs.listLanguages = listLanguages;
  hljs.getLanguage = getLanguage;
  hljs.inherit = inherit;

  // Common regexps
  hljs.IDENT_RE = '[a-zA-Z]\\w*';
  hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
  hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
  hljs.C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
  hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
  hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

  // Common modes
  hljs.BACKSLASH_ESCAPE = {
    begin: '\\\\[\\s\\S]', relevance: 0
  };
  hljs.APOS_STRING_MODE = {
    className: 'string',
    begin: '\'', end: '\'',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.QUOTE_STRING_MODE = {
    className: 'string',
    begin: '"', end: '"',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.PHRASAL_WORDS_MODE = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/
  };
  hljs.COMMENT = function (begin, end, inherits) {
    var mode = hljs.inherit(
      {
        className: 'comment',
        begin: begin, end: end,
        contains: []
      },
      inherits || {}
    );
    mode.contains.push(hljs.PHRASAL_WORDS_MODE);
    mode.contains.push({
      className: 'doctag',
      begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
      relevance: 0
    });
    return mode;
  };
  hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');
  hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\*', '\\*/');
  hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
  hljs.NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE,
    relevance: 0
  };
  hljs.C_NUMBER_MODE = {
    className: 'number',
    begin: hljs.C_NUMBER_RE,
    relevance: 0
  };
  hljs.BINARY_NUMBER_MODE = {
    className: 'number',
    begin: hljs.BINARY_NUMBER_RE,
    relevance: 0
  };
  hljs.CSS_NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE + '(' +
      '%|em|ex|ch|rem'  +
      '|vw|vh|vmin|vmax' +
      '|cm|mm|in|pt|pc|px' +
      '|deg|grad|rad|turn' +
      '|s|ms' +
      '|Hz|kHz' +
      '|dpi|dpcm|dppx' +
      ')?',
    relevance: 0
  };
  hljs.REGEXP_MODE = {
    className: 'regexp',
    begin: /\//, end: /\/[gimuy]*/,
    illegal: /\n/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      {
        begin: /\[/, end: /\]/,
        relevance: 0,
        contains: [hljs.BACKSLASH_ESCAPE]
      }
    ]
  };
  hljs.TITLE_MODE = {
    className: 'title',
    begin: hljs.IDENT_RE,
    relevance: 0
  };
  hljs.UNDERSCORE_TITLE_MODE = {
    className: 'title',
    begin: hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };
  hljs.METHOD_GUARD = {
    // excludes method names from keyword processing
    begin: '\\.\\s*' + hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };

  return hljs;
}));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuetify__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_index__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_index__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router_index__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuex_router_sync__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuex_router_sync___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vuex_router_sync__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_highlight_js_lib_highlight_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_highlight_js_lib_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_highlight_js_lib_highlight_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_highlight_js_lib_languages_bash__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_highlight_js_lib_languages_bash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_highlight_js_lib_languages_bash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_highlight_js_lib_languages_stylus__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_highlight_js_lib_languages_stylus___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_highlight_js_lib_languages_stylus__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_highlight_js_lib_languages_xml__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_highlight_js_lib_languages_xml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_highlight_js_lib_languages_xml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_highlight_js_lib_languages_javascript__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_highlight_js_lib_languages_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_highlight_js_lib_languages_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_highlight_js_lib_languages_scss__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_highlight_js_lib_languages_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_highlight_js_lib_languages_scss__);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__router_index__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__store_index__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return app; });














__WEBPACK_IMPORTED_MODULE_7_highlight_js_lib_highlight_js___default.a.registerLanguage('bash', __WEBPACK_IMPORTED_MODULE_8_highlight_js_lib_languages_bash___default.a)
__WEBPACK_IMPORTED_MODULE_7_highlight_js_lib_highlight_js___default.a.registerLanguage('stylus', __WEBPACK_IMPORTED_MODULE_9_highlight_js_lib_languages_stylus___default.a)
__WEBPACK_IMPORTED_MODULE_7_highlight_js_lib_highlight_js___default.a.registerLanguage('sass', __WEBPACK_IMPORTED_MODULE_12_highlight_js_lib_languages_scss___default.a)
__WEBPACK_IMPORTED_MODULE_7_highlight_js_lib_highlight_js___default.a.registerLanguage('html', __WEBPACK_IMPORTED_MODULE_10_highlight_js_lib_languages_xml___default.a)
__WEBPACK_IMPORTED_MODULE_7_highlight_js_lib_highlight_js___default.a.registerLanguage('js', __WEBPACK_IMPORTED_MODULE_11_highlight_js_lib_languages_javascript___default.a)

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_vuex_router_sync__["sync"])(__WEBPACK_IMPORTED_MODULE_4__store_index__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__router_index__["a" /* default */])

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vuetify___default.a)

Object.keys(__WEBPACK_IMPORTED_MODULE_3__components_index__["a" /* default */]).forEach(function (key) {
  __WEBPACK_IMPORTED_MODULE_0_vue___default.a.component(key, __WEBPACK_IMPORTED_MODULE_3__components_index__["a" /* default */][key])
})

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_vue___default.a.util.extend({
  router: __WEBPACK_IMPORTED_MODULE_5__router_index__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_4__store_index__["a" /* default */]
}, __WEBPACK_IMPORTED_MODULE_1__App_vue___default.a))




/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  data: function data () {
    return {
      title: ''
    }
  },

  mounted: function mounted () {
    this.$vuetify.init()
  },

  methods: {
    meta: function meta (obj) {
      if (typeof obj === 'string') {
        return this.title = obj
      }

      this.title = obj.h1
      this.$vuetify.bus.pub('meta:title', obj.title)
      this.$vuetify.bus.pub('meta:description', obj.description)
      this.$vuetify.bus.pub('meta:keywords', obj.keywords)
    }
  }
};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  props: ['header']
};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  props: {
    params: Array,
    default: function () { return []; }
  }
};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  props: {
    type: {
      type: String,
      required: true
    }
  },

  computed: {
    component: function component () {
      return this[this.type]()
    }
  },

  methods: {
    comp: function comp () {
      return {
        classes: 'red white--text',
        text: 'Component',
        icon: 'widgets'
      }
    },

    directive: function directive () {
      return {
        classes: 'blue white--text',
        text: 'Directive',
        icon: 'polymer'
      }
    },

    function: function function$1 () {
      return {
        classes: 'purple white--text',
        text: 'Function',
        icon: 'functions'
      }
    },

    slot: function slot () {
      return {
        classes: 'orange white--text',
        text: 'Slot',
        icon: 'short_text'
      }
    }
  }
};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//
//

/* harmony default export */ exports["default"] = {
  props: ['doc']
};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  data: function data () {
    return {
      subTitle: ''
    }
  },

  props: {
    title: String
  },

  watch: {
    title: function title () {
      this.determineSubTitle()
    }
  },

  mounted: function mounted () {
    this.determineSubTitle()
  },

  methods: {
    determineSubTitle: function determineSubTitle () {
      switch (true) {
        case this.match('components'):
          this.subTitle = 'Vue components built semantically&mdash;easy to use, easy to remember'
        break
        case this.match('directives'):
          this.subTitle = 'Vue directives designed to enchance user experience'
        break
        case this.match('functions'):
          this.subTitle = 'Built in functions to customize your user experience'
        break
        case this.match('quick-start'):
          this.subTitle = 'Vue premade templates&mdash;out of the box, ready to go'
        break
        case this.match('overview'):
          this.subTitle = 'Learn how to use the Vuetify framework in your first project'
        break
        case this.match('css'):
          this.subTitle = 'CSS classes to help reduce the need for manual class declaration'
        break
        case this.match('layouts'):
          this.subTitle = 'Select a layout for your next application'
        break
        case this.match('bus'):
          this.subTitle = 'Learn how Vuetify communicates throughout an application'
        break
        default:
          this.subTitle = 'Learn about the features of the Vuetify Framework'
        break
      }
    },

    match: function match (str) {
      return this.$route.path.match(str) !== null
    }
  }
};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  data: function data () {
    return {
      items: [
        { href: '/', text: 'About', icon: 'question_answer' },
        { href: '/quick-start', text: 'Quick Start', icon: 'fast_forward' },
        { href: '/overview', text: 'Overview', icon: 'info' },
        { href: '/event-bus', text: 'Event Bus', icon: 'device_hub' },
        { href: '/layouts', text: 'Layouts', icon: 'devices' },
        {
          parent: { href: '#!', text: 'Components', icon: 'widgets', },
          items: [
            { href: '/components/alerts', text: 'Alerts', icon: 'priority_high' },
            { href: '/components/breadcrumbs', text: 'Breadcrumbs', icon: 'linear_scale' },
            { href: '/components/buttons', text: 'Buttons', icon: 'arrow_forward' },
            { href: '/components/cards', text: 'Cards', icon: 'note' },
            { href: '/components/chips', text: 'Chips', icon: 'label' },
            { href: '/components/collapsible', text: 'Collapsible', icon: 'reorder' },
            { href: '/components/dropdowns', text: 'Dropdowns', icon: 'arrow_drop_down_circle' },
            { href: '/components/footer', text: 'Footer', icon: 'call_to_action' },
            { href: '/components/forms', text: 'Forms', icon: 'text_format' },
            { href: '/components/lists', text: 'Lists', icon: 'format_list_bulleted' },
            { href: '/components/modals', text: 'Modals', icon: 'picture_in_picture' },
            { href: '/components/navbar', text: 'Navbars', icon: 'web', chip: true },
            { href: '/components/pagination', text: 'Pagination', icon: 'looks_one' },
            { href: '/components/parallax', text: 'Parallax', icon: 'import_export' },
            { href: '/components/sidebar', text: 'Sidebars', icon: 'view_quilt', chip: true },
            { href: '/components/slider', text: 'Sliders', icon: 'slideshow' },
            { href: '/components/tabs', text: 'Tabs', icon: 'more_horiz' }
          ]
        },
        {
          parent: { href: '#!', text: 'Directives', icon: 'polymer' },
          items: [
            { href: '/directives/badges', text: 'Badges', icon: 'fiber_manual_record' },
            { href: '/directives/tooltips', text: 'Tooltips', icon: 'sms' } ]
        },
        {
          parent: { href: '#!', text: 'Functions', icon: 'functions' },
          items: [
            { href: '/functions/toasts', text: 'Toasts', icon: 'flip_to_front' }
          ]
        },
        {
          parent: { href: '#!', text: 'CSS', icon: 'brush'
          },
          items: [
            { href: '/css/typography', text: 'Typography', icon: 'title' },
            { href: '/css/grid', text: 'Grid', icon: 'grid_on' },
            { href: '/css/colors', text: 'Colors', icon: 'invert_colors' }
          ]
        }
      ]
    }
  }
};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highlight_js_lib_highlight_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highlight_js_lib_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_highlight_js_lib_highlight_js__);
//
//
//
//
//
//
//

  

	/* harmony default export */ exports["default"] = {
    props: {
      lang: String
    },

		mounted: function mounted () {
			__WEBPACK_IMPORTED_MODULE_0_highlight_js_lib_highlight_js___default.a.highlightBlock(this.$refs.code)
		}
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  props: {
    first: Boolean
  },

  computed: {
    styles: function styles () {
      var styles = {}

      if (this.first) {
        styles['margin-top'] = 0
      }

      return styles
    }
  }
};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  props: {
    route: String,
    text: String
  }
};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  mounted: function mounted () {
    this.$emit('view', this.meta())
  },

  preFetch: function preFetch () {
    return this.methods.meta()
  },

  methods: {
    meta: function meta () {
      return {
        title: 'Vue JS 2.0 Component Framework | Vuetify',
        h1: 'Vuetify',
        description: 'Reusable semantic component framework for Vue JS 2.0.',
        keywords: 'vue, vue 2.0, vue js, material design, vue components, material design components'
      }
    }
  }
};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  data: function data () {
    var data = {
      alert: true,
      doc: {
        stage: 'comp',
        title: 'Alert',
        desc: 'The <code>v-alert</code> component is used to convey information to the user. Designed to stand out, the alerts come in four styles, success, info, warning, and error.',
        types: ['comp', 'slot'],
        params: [
          [
            '<code>&lt;v-alert&gt;</code>',
            '',
            'Base component'
          ],
          [
            '<code>v-model</code>',
            '',
            'Types: [Boolean]'
          ],
          [
            '<code>close</code>',
            'Hides the alert',
            'Default: false'
          ]
        ]
      },
      lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      types: [
        'success', 'info', 'warning', 'error'
      ]
    }

    data.types.forEach(function (i) {
      data.doc.params.push([
        ("<code>" + i + "</code>"),
        ("Applies the alert--" + i + " class"),
        'Default: false'
      ])
    })

    return data
  },

  mounted: function mounted () {
    this.$emit('view', this.meta())
  },

  preFetch: function preFetch () {
    return this.methods.meta()
  },

  methods: {
    meta: function meta () {
      return {
        title: 'Alert Component | Vuetify',
        h1: 'Alerts',
        description: 'Alert component for Vuetify Framework',
        keywords: 'vuetify, alerts, components'
      }
    }
  }
};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//
//
//
//

/* harmony default export */ exports["default"] = {
  data: function data () {
    return {
      doc: {
        stage: 'comp',
        title: 'Badge',
        desc: "\n          <p>\n            Badge directives can be applied to any element using the <code>v-badge</code> directive. By default, a badge will use the application's defined <strong class=\"primary--text\">primary color</strong>. Parameters can be passed using the arg, <code>v-badge:arg</code>, modifier, <code>v-badge:2.modifier</code>, or by passing an object by expression, <code>v-badge=\"{ value: 2, overlap: true }\"</code>\n          </p>\n          <p>\n            The color can be changed by using the color--after helper class, or by apply a class that modifies the background of the badged elements <strong>:after</strong> psuedo-selector.\n          </p>",
        types: [
          'directive'
        ],
        params: [
          [
            '<code>v-badge:arg.icon</code>',
            'Specifies the use of an icon',
            'Default: false'
          ],
          [
            '<code>v-badge:arg.left</code>',
            'Positions the badge to the left of the element',
            'Default: false'
          ],
          [
            '<code>v-badge:arg.overlap</code>',
            'Overlaps badge on element',
            'Default: false'
          ]
        ]
      }
    }
  },

  mounted: function mounted () {
    this.$emit('view', this.meta())
  },

  preFetch: function preFetch () {
    return this.methods.meta()
  },

  methods: {
    meta: function meta () {
      return {
        title: 'Badge Directive | Vuetify',
        h1: 'Badges',
        description: 'Badge directive for Vuetify Framework',
        keywords: 'vuetify, badges, directives'
      }
    }
  }
};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  data: function data () {
    return {
      doc: {
        stage: 'comp',
        title: 'Breadcrumbs',
        desc: "\n          <p>\n            The <code>v-breadcrumbs</code> component is a navigational helper for pages. It can accept a <strong>Material Icons</strong> icon or characters as a divider. An array of objects containing the fields <em>href</em>, <em>text</em> and optional <em>disabled</em> can be passed to the <strong>items</strong> property of the component.  Additionally, a regular slot exists for more control of the breadcrumbs, either utilizing <code>v-breadcrumb</code> or other custom markup.\n          </p>\n        ",
        types: [
          'comp', 'slot'
        ],
        params: [
          [
            '<code>&lt;v-breadcrumbs&gt;</code>',
            '',
            'Base component'
          ],
          [
            '<code>divider</code>',
            'Specifies the dividing character',
            'Default: /'
          ],
          [
            '<code>icon</code>',
            'Specifies that the divider is an icon',
            'Default: false'
          ],
          [
            '<code>items</code>',
            'The array of Breadcrumbs',
            'Allowed properties: [href, text, disabled]'
          ],
          [
            '<code>&lt;v-breadcrumbs-item&gt;</code>',
            '',
            'Base component'
          ],
          [
            '<code>disabled</code>',
            'Disables the breadcrumb',
            'Default: false'
          ],
          [
            '<code>item<code>',
            'The item object',
            'Allowed object properties: [href, text]'
          ]
        ]
      },
      items: [
        {
          href: '#!',
          text: 'Dashboard',
          disabled: false
        },
        {
          href: '#!',
          text: 'Link 1',
          disabled: false
        },
        {
          href: '#!',
          text: 'Link 2',
          disabled: true
        }
      ]
    }
  },

  mounted: function mounted () {
    this.$emit('view', this.meta())
  },

  preFetch: function preFetch () {
    return this.methods.meta()
  },

  methods: {
    meta: function meta () {
      return {
        title: 'Breadcrumbs Component | Vuetify',
        h1: 'Breadcrumbs',
        description: 'Breadcrumbs component for Vuetify Framework',
        keywords: 'vuetify, breadcrumbs, components'
      }
    }
  }
};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  data: function data () {
    return {
      doc: {
        stage: 'comp',
        title: 'Button',
        desc: "\n          <p>\n            The <code>v-btn</code> component replaces the standard html button with a material design theme and a multitude of options. Any color helper class can be used to alter the background or text color. Remember that all event captures must be done using the <strong>.native</strong> modifier.\n          </p>\n        ",
        types: [
          'comp', 'slot'
        ],
        params: [
          [
            '<code>&lt;v-btn&gt;',
            '',
            'Base Component'
          ],
          [
            '<code>block</code>',
            'Applies the btn--block class',
            'Default: false'
          ],
          [
            '<code>flat</code>',
            'Applies the btn--flat class',
            'Default: false'
          ],
          [
            '<code>floating</code>',
            'Applies the btn--floating class',
            'Default: false'
          ],
          [
            '<code>icon</code>',
            'Applies the btn--icon class',
            'Default: false'
          ],
          [
            '<code>large</code>',
            'Applies the btn--large class',
            'Default: false'
          ],
          [
            '<code>outline</code>',
            'Applies the btn--outline class',
            'Default: false'
          ],
          [
            '<code>round</code>',
            'Applies the btn--round class',
            'Default: false'
          ],
          [
            '<code>small</code>',
            'Applies the btn--small class',
            'Default: false'
          ],
          [
            '<code>type</code>',
            'Sets the buttons type attribute',
            'Default: false'
          ]
        ]
      }
    }
  },

  mounted: function mounted () {
    this.$emit('view', this.meta())
  },

  preFetch: function preFetch () {
    return this.methods.meta()
  },

  methods: {
    meta: function meta () {
      return {
        title: 'Button Component | Vuetify',
        h1: 'Buttons',
        description: 'Button component for Vuetify Framework',
        keywords: 'vuetify, buttons, components'
      }
    }
  }
};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  data: function data () {
    return {
      doc: {
        stage: 'iter',
        title: 'Card',
        desc: "\n          <p>\n            The <code>v-card</code> component is a versatile component that can be used for anything from a panel to a static image. The <strong>card</strong> component has numerous helper components to make markup as easy as possible. Components that have no listed options use <strong class=\"green--text\">Vue's</strong> functional component option for faster rendering and serve as markup sugar to make building easier.\n          </p>\n        ",
        types: [
          'comp', 'slot'
        ],
        params: [
          [
            '<code>&lt;v-card&gt;</code>',
            '',
            'Base Component'
          ],
          [
            '<code>height</code>',
            'Manually define the height of the Card',
            'Type: String'
          ],
          [
            '<code>horizontal</code>',
            'Applies the card--horizontal class',
            'Default: false'
          ],
          [
            '<code>img</code>',
            'Specifies an image background',
            'Type: String'
          ],
          [
            '<code>&lt;v-card-row&gt;</code>',
            '',
            'Base Component'
          ],
          [
            '<code>actions</code>',
            'Applies the card__row--action class',
            'Default: false'
          ],
          [
            '<code>height</code>',
            'Manually define the height of the Card Row',
            'Type: String'
          ],
          [
            '<code>img</code>',
            'Specifies an image background',
            'Type: String'
          ],
          [
            '<code>&lt;v-card-stack&gt;</code>',
            '',
            'Functional Component'
          ],
          [
            '<code>&lt;v-card-title&gt;</code>',
            '',
            'Functional Component'
          ]
        ]
      },
      card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
      title_text: "\n        <p>Card Title</p>\n      "
    }
  },

  mounted: function mounted () {
    this.$emit('view', this.meta())
  },

  preFetch: function preFetch () {
    return this.methods.meta()
  },

  methods: {
    meta: function meta () {
      return {
        title: 'Card Component | Vuetify',
        h1: 'Cards',
        description: 'Card component for Vuetify Framework',
        keywords: 'vuetify, cards, components'
      }
    }
  }
};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  data: function data () {
    return {
      chip1: true,
      chip2: true,
      chip3: true,
      chip4: true,
      doc: {
        stage: 'comp',
        title: 'Chip',
        desc: "The <code>v-chip</code> component is used to convey small pieces of information. Using the <code>close</code> property, the chip becomes interactive, allowing user interaction.",
        types: [
          'comp', 'slot'
        ],
        params: [
          [
            '<code>&lt;v-chip&gt;</code>',
            '',
            'Base component'
          ],
          [
            '<code>v-model</code>',
            '',
            'Accepts v-model attr: [Boolean]'
          ],
          [
            '<code>close</code>',
            'Removes the chip',
            'Default: false'
          ],
          [
            '<code>label</code>',
            'Applies the chip--label class',
            'Default: false'
          ],
          [
            '<code>outline</code>',
            'Applies the chip--outline class',
            'Default: false'
          ],
          [
            '<code>small</code>',
            'Applies the chip--small class',
            'Default: false'
          ]
        ]
      }
    }
  },

  mounted: function mounted () {
    this.$emit('view', this.meta())
  },

  preFetch: function preFetch () {
    return this.methods.meta()
  },

  methods: {
    meta: function meta () {
      return {
        title: 'Chip Component | Vuetify',
        h1: 'Chips',
        description: 'Chip component for Vuetify Framework',
        keywords: 'vuetify, chips, components'
      }
    }
  }
};


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  data: function data () {
    return {
      doc: {
        stage: 'iter',
        title: 'Collapsible',
        desc: "The <code>v-collapsible</code> component is useful for reducing vertical space with large amounts of information. The default functionality of the component is to only display one collapsible body at a time, however, with the <code>expandable</code> property, the collapsible can remain open until explicity closed.",
        types: [
          'comp', 'slot'
        ],
        params: [
          [
            '<code>&lt;v-collapsible&gt;</code>',
            '',
            'Base component'
          ],
          [
            '<code>expand</code>',
            'Does not contract when multiple are open',
            'Default: false'
          ],
          [
            '<code>&lt;v-collapsible-header&gt;</code>',
            '',
            'Functional component'
          ],
          [
            '<code>&lt;v-collapsible-body&gt;</code>',
            '',
            'Functional component'
          ]
        ]
      }
    }
  },

  mounted: function mounted () {
    this.$emit('view', this.meta())
  },

  preFetch: function preFetch () {
    return this.methods.meta()
  },

  methods: {
    meta: function meta () {
      return {
        title: 'Collapsible Component | Vuetify',
        h1: 'Collapsible',
        description: 'Collapsible component for Vuetify Framework',
        keywords: 'vuetify, collapsible, components'
      }
    }
  }
};


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  data: function data () {
    return {
      colors: [
        'red', 'pink', 'purple', 'deep-purple',
        'indigo', 'blue', 'light-blue', 'cyan',
        'teal', 'green', 'light-green', 'lime',
        'yellow', 'amber', 'orange', 'deep-orange',
        'brown', 'blue-grey', 'grey'
      ],
      types: [
        'darken', 'lighten', 'accent'
      ]
    }
  },

  mounted: function mounted () {
    this.$emit('view', this.meta())
  },

  preFetch: function preFetch () {
    return this.methods.meta()
  },

  methods: {
    meta: function meta () {
      return {
        title: 'Colors | Vuetify',
        h1: 'Colors',
        description: 'Colors for the Vuetify Framework',
        keywords: 'vuetify, colors'
      }
    }
  }
};


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  data: function data () {
    return {
      doc: {
        stage: 'iter',
        title: 'Dropdown',
        desc: "The <code>v-dropdown</code> component utilizes the v-dropdown directive to link itself to another element. Once binded, clicking the element, or by hovering (if using the <code>hover</code> parameter), the dropdown will reposition absolutely positioned on top of the selected activator.",
        types: [
          'comp', 'slot', 'directive'
        ],
        params: [
          [
            '<code>v-dropdown</code>',
            '',
            'Base component'
          ],
          [
            '<code>id</code>',
            'Sets the id of the dropdown',
            'Required: true'
          ],
          [
            '<code>items</code>',
            'Optionally pass array of items',
            'Type: object'
          ],
          [
            '<code>right</code>',
            'Open dropdown from right',
            'Default: false'
          ]
        ]
      },
      items: [
        {
          href: '#!',
          text: 'Click Me'
        },
        {
          href: '#!',
          text: 'Click Me'
        },
        {
          href: '#!',
          text: 'Click Me'
        },
        {
          href: '#!',
          text: 'Click Me 2'
        }
      ]
    }
  },

  mounted: function mounted () {
    this.$emit('view', this.meta())
  },

  preFetch: function preFetch () {
    return this.methods.meta()
  },

  methods: {
    meta: function meta () {
      return {
        title: 'Dropdown Component | Vuetify',
        h1: 'Dropdowns',
        description: 'Dropdown component for Vuetify Framework',
        keywords: 'vuetify, dropdowns, components'
      }
    }
  }
};


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  mounted: function mounted () {
    this.$emit('view', this.meta())
  },

  preFetch: function preFetch () {
    return this.methods.meta()
  },

  methods: {
    meta: function meta () {
      return {
        h1: 'Event Bus',
        title: 'Event Bus | Vuetify',
        description: 'The Vuetify bus powers your application by allowing components to communicate to each other',
        keywords: 'vuetify bus'
      }
    }
  }
};


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  data: function data () {
    return {
      doc: {
        title: 'Footer',
        desc: 'The <code>v-footer</code> component is used for displaying general information that a user might want to access from any page within your site.',
        params: [
          [
            '<code>&lt;v-footer&gt;</code>',
            '',
            'Base component'
          ]
        ]
      }
    }
  },

  mounted: function mounted () {
    this.$emit('view', this.meta())
  },

  preFetch: function preFetch () {
    return this.methods.meta()
  },

  methods: {
    meta: function meta () {
      return {
        title: 'Footer Component | Vuetify',
        h1: 'Footer',
        description: 'Footer component for Vuetify Framework',
        keywords: 'vuetify, footer, components'
      }
    }
  }
};


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  data: function data () {
    return {
      doc: {
        stage: 'iter',
        title: 'Forms',
        desc: 'Soon',
        types: [
          'comp'
        ],
        params: [
          [
            '<code>v-select</code>',
            '',
            'Base component'
          ],
          [
            '<code>v-text-input</code>',
            '',
            'Base component'
          ],
          [
            '<code>v-radio</code>',
            '',
            'Base component'
          ],
          [
            '<code>v-checkbox</code>',
            '',
            'Base component'
          ]
        ]
      },
      input: null,
      multiple: ['2'],
      options: [
        {
          value: 1,
          text: 'Option 1'
        },
        {
          value: 2,
          text: 'Option 2'
        },
        {
          value: 3,
          text: 'Option 3'
        }
      ],
      text: ''
    }
  },

  mounted: function mounted () {
    this.$emit('view', this.meta())
  },

  preFetch: function preFetch () {
    return this.methods.meta()
  },

  methods: {
    meta: function meta () {
      return {
        title: 'Form Input Components | Vuetify',
        h1: 'Form Inputs',
        description: 'Form input components for Vuetify Framework',
        keywords: 'vuetify, form, components'
      }
    }
  }
};


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  data: function data () {
    return {
      doc: {
        title: 'Grid',
        desc: 'Soon',
        params: [
          [
            '<code>v-container</code>',
            '',
            'Base component'
          ],
          [
            '<code>fluid</code>',
            'Applies the container--fluid class',
            'Default: false'
          ],
          [
            '<code>v-row</code>',
            '',
            'Base component'
          ],
          [
            '<code>v-col</code>',
            '',
            'Base component'
          ],
          [
            '<code>static attrs</code>',
            'Specify the size of the column',
            'xs:extra small, sm:small, md:medium, lg:large, 1 through 12'
          ]
        ]
      }
    }
  },

  mounted: function mounted () {
    this.$emit('view', this.meta())
  },

  preFetch: function preFetch () {
    return this.methods.meta()
  },

  methods: {
    meta: function meta () {
      return {
        title: 'Grid | Vuetify',
        h1: 'Grid',
        description: 'Grid for the Vuetify Framework',
        keywords: 'vuetify, grid'
      }
    }
  }
};


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//
//

/* harmony default export */ exports["default"] = {
  data: function data () {
    return {
      doc: {
        stage: 'comp',
        title: 'Layouts',
        desc: 'Vuetify supports numerous different pre-defined layouts, right out of the box.',
        params: [
          [
            '<code>v-app</code>',
            '',
            'Base component'
          ],
          [
            '<code>navbar</code>',
            'Variations: top, bottom, top-fixed, bottom-fixed',
            'Default: false'
          ],
          [
            '<code>sidebar</code>',
            'Variations: left, right, left-fixed, right-fixed',
            'Default: false'
          ],
          [
            '<code>footer</code>',
            '',
            'Default: false'
          ]
        ]
      }
    }
  },

  mounted: function mounted () {
    this.$emit('view', this.meta())
  },

  preFetch: function preFetch () {
    return this.methods.meta()
  },

  methods: {
    meta: function meta () {
      return {
        title: 'Layouts | Vuetify',
        h1: 'Layouts',
        description: 'Layouts for the Vuetify Framework',
        keywords: 'vuetify, layouts'
      }
    }
  }
};


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//
//

/* harmony default export */ exports["default"] = {
  name: 'lists-view',

  data: function data () {
    return {
      doc: {
        stage: 'comp',
        title: 'List',
        desc: 'The <code>v-list</code> component is used to display, you guessed it, lists!. Combine the list with a <code>v-badge</code> directive or a <code>v-dropdown</code> to enhance and add functionality.',
        types: [
          'comp', 'slot'
        ],
        params: [
          [
            '<code>&lt;v-list&gt;</code>',
            '',
            'Base component'
          ],
          [
            '<code>&lt;v-list-item&gt;</code>',
            '',
            'Functional component'
          ],
          [
            '<code>&lt;v-list-item-title&gt;</code>',
            '',
            'Functional component'
          ],
          [
            '<code>&lt;v-list-item-sub-title&gt;</code>',
            '',
            'Functional component'
          ],
          [
            '<code>&lt;v-list-action&gt;</code>',
            '',
            'Functional component'
          ],
          [
            '<code>&lt;v-list-action-title&gt;</code>',
            '',
            'Functional component'
          ],
          [
            '<code>&lt;v-list-icon&gt;</code>',
            '',
            'Functional component'
          ],
          [
            '<code>&lt;v-list-avatar&gt;</code>',
            '',
            'Functional component'
          ]
        ]
      },
      items: [
        {
          href: '#!',
          text: 'Profile'
        },
        {
          href: '#!',
          text: 'Message'
        },
        {
          href: '#!',
          text: 'Friend Request'
        }
      ]
    }
  },

  mounted: function mounted () {
    this.$emit('view', this.meta())
  },

  preFetch: function preFetch () {
    return this.methods.meta()
  },

  methods: {
    meta: function meta () {
      return {
        title: 'List Component | Vuetify',
        h1: 'Lists',
        description: 'List component for Vuetify Framework',
        keywords: 'vuetify, lists, components'
      }
    }
  }
};


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  name: 'modals-view',

  data: function data () {
    return {
      doc: {
        stage: 'dev',
        title: 'Modal',
        desc: 'The <code>v-modal</code> component is useful for calling a users attention to information or a particular action. It is merely a wrapper for whatever component you choose to place in it. In the examples below, a <code>v-card</code> is used. To close a modal, you must manually publish and event to the Vuetify bus, or click outside of the modal. This is helpful for when you want to capture information by callback after a native click.',
        params: [
          [
            '<code>&lt;v-modal&gt;</code>',
            '',
            'Base component'
          ],
          [
            '<code>id</code>',
            'The id to bind the directive',
            'Required: true'
          ],
          [
            '<code>bottom</code>',
            'Applies the modal--bottom class',
            'Default: false'
          ]
        ]
      }
    }
  },

  mounted: function mounted () {
    this.$emit('view', this.meta())
  },

  preFetch: function preFetch () {
    return this.methods.meta()
  },

  methods: {
    meta: function meta () {
      return {
        title: 'Modal Component | Vuetify',
        h1: 'Modals',
        description: 'Modal component for Vuetify Framework',
        keywords: 'vuetify, modals, components'
      }
    },

    modal: function modal (id) {
      this.$vuetify.bus.pub(("modal:close:" + id))
    }
  }
};


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//
//
//

/* harmony default export */ exports["default"] = {
  data: function data () {
    return {
      doc: {
        stage: 'comp',
        title: 'Navbar',
        desc: 'The <code>v-navbar</code> component is pivotol to any gui, as it generally is the primary source of site navigation. The navbar component works great in cojunction with a sidebar for hiding links and presenting an activator to open the sidebar on mobile.',
        params: [
          [
            '<code>&lt;v-navbar&gt;</code>',
            '',
            'Base component'
          ],
          [
            '<code>&lt;v-navbar-items&gt;</code>',
            '',
            'Base component'
          ],
          [
            '<code>items</code>',
            'The array of Navbar items',
            'Allowed properties: href, text'
          ],
          [
            '<code>&lt;v-navbar-item&gt;</code>',
            '',
            'base component'
          ],
          [
            '<code>item</code>',
            'The item object',
            'Allowed object properties: href, text'
          ]
        ]
      },
      items: [
        { text: 'Link', href: '#!' },
        { text: 'Link', href: '#!' },
        { text: 'Link', href: '#!' }
      ],
      dropdown_items: [
        { text: 'Send Feedback', href: '#!' },
        { text: 'Request Help', href: '#!' },
        { text: 'Contact Developer', href: '#!' }
      ]
    }
  },

  mounted: function mounted () {
    this.$emit('view', this.meta())
  },

  preFetch: function preFetch () {
    return this.methods.meta()
  },

  methods: {
    meta: function meta () {
      return {
        title: 'Navbar Component | Vuetify',
        h1: 'Navbars',
        description: 'Navbar component for Vuetify Framework',
        keywords: 'vuetify, navbars, components'
      }
    }
  }
};


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  mounted: function mounted () {
    this.$emit('view', this.meta())
  },

  preFetch: function preFetch () {
    return this.methods.meta()
  },

  methods: {
    meta: function meta () {
      return {
        h1: 'Overview',
        title: 'Overview | Vuetify',
        description: 'Review the structure of the Vuetify SSR Template',
        keywords: 'vue cli, vue template, vue ssr, vuetify ssr'
      }
    }
  }
};


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  data: function data () {
    return {
      doc: {
        stage: 'comp',
        title: 'Pagination',
        desc: 'The <code>v-pagination</code> component is used to separate long sets of data so that it is easier for a user to consume information. Depending on the length provided, the pagination component will automatically scale. To maintain the current page, simply supply a v-model attribute.',
        params: [
          [
            '<code>&lt;v-pagination&gt;</code>',
            '',
            'Base component'
          ],
          [
            '<code>length</code>',
            'The length of the paginator',
            'Default: 0'
          ],
          [
            '<code>round</code>',
            'Applies the pagination--round class',
            'Default: false'
          ],
          [
            '<code>model</code>',
            '',
            'Accepts Vue v-model'
          ] ]
      },
      page: 3,
      page2: 7,
      page3: 4
    }
  },

  mounted: function mounted () {
    this.$emit('view', this.meta())
  },

  preFetch: function preFetch () {
    return this.methods.meta()
  },

  methods: {
    meta: function meta () {
      return {
        title: 'Pagination Component | Vuetify',
        h1: 'Pagination',
        description: 'Pagination component for Vuetify Framework',
        keywords: 'vuetify, pagination, components'
      }
    }
  }
};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  name: 'parallax-view',

  data: function data () {
    return {
      doc: {
        stage: 'comp',
        title: 'Parallax',
        desc: 'The <code>v-parallax</code> component creates a 3d effect that makes an image appear to scroll slower than the window.',
        params: [
          [
            '<code>&lt;v-parallax&gt;</code>',
            '',
            'Base component'
          ],
          [
            '<code>src</code>',
            'The image to parallax',
            'Required: true'
          ],
          [
            '<code>height</code>',
            'The height of the parallax container',
            'Default: 500'
          ]
        ]
      }
    }
  },

  mounted: function mounted () {
    this.$emit('view', this.meta())
  },

  preFetch: function preFetch () {
    return this.methods.meta()
  },

  methods: {
    meta: function meta () {
      return {
        title: 'Parallax Component | Vuetify',
        h1: 'Parallax',
        description: 'Parallax component for Vuetify Framework',
        keywords: 'vuetify, parallax, components'
      }
    }
  }
};


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//
//
//

/* harmony default export */ exports["default"] = {
  data: function data () {
    return {
      doc: {
        stage: 'dev',
        title: 'Progress',
        desc: 'Soon',
        types: ['comp'],
        params: [
          [
            '<code>v-progress</code>',
            '',
            'Base component'
          ],
          [
            '<code>height</code>',
            'Sets the height of the progress bar',
            'Default: 7px'
          ],
          [
            '<code>indeterminate</code>',
            'Applies the progress--indeterminate class',
            'Default: false'
          ],
          [
            '<code>max</code>',
            'Sets the max limit of the progress bar',
            'Default: 0'
          ],
          [
            '<code>min</code>',
            'Sets the min limit of the progress bar',
            'Default: 0'
          ],
          [
            '<code>value</code>',
            'Sets the value of the progress bar',
            'Default: 0'
          ]
        ]
      },

      value: 40
    }
  },

  mounted: function mounted () {
    this.$emit('view', 'Progress')
  }
};


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  mounted: function mounted () {
    this.$emit('view', this.meta())
  },

  preFetch: function preFetch () {
    return this.methods.meta()
  },

  methods: {
    meta: function meta () {
      return {
        title: 'Quick Start | Vuetify',
        h1: 'Quick Start',
        description: 'Get started with Vue and Vuetify in no time.',
        keywords: 'vuetify quick start, vuetify templates, server side rendering'
      }
    }
  }
};


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  data: function data () {
    return {
      doc: {
        stage: 'iter',
        title: 'Sidebar',
        desc: 'The <code>v-sidebar</code> component is what your users will utilize to navigate through the application. The sidebar is pre-configured to work with or without <strong>vue-router</strong> right out the box.',
        params: [
          [
            '<code>&lt;v-sidebar&gt;</code>',
            '',
            'Base component'
          ],
          [
            '<code>drawer</code>',
            'Applies the navbar--drawer class',
            'Default: false'
          ],
          [
            '<code>fixed</code>',
            'Applies the navbar--fixed class',
            'Default: false'
          ],
          [
            '<code>id</code>',
            'Used for binding the directive',
            'Required: true'
          ],
          [
            '<code>mobile</code>',
            'Specifies whether menu should collapse automatically on mobile',
            'Default: true'
          ],
          [
            '<code>items</code>',
            'Array of navbar items',
            'Item object: [parent, text, href, items]'
          ],
          [
            '<code>right</code>',
            'Applies the navbar--right class',
            'Used to designate the navbar is located on the right'
          ],
          [
            '<code>slot</code>',
            '',
            'Types: [default, top]'
          ],
          [
            '<code>&lt;v-sidebar-group&gt;</code>',
            '',
            'Base component'
          ],
          [
            '<code>item</code>',
            'Parent item object',
            'Item object: [text, href, icon]'
          ],
          [
            '<code>&lt;v-sidebar-items&gt;</code>',
            '',
            'Base component'
          ],
          [
            '<code>items</code>',
            'Array of navbar items',
            'Same as navbar items property'
          ],
          [
            '<code>&lt;v-sidebar-item&gt;</code>',
            '',
            'Base component'
          ],
          [
            '<code>item</code>',
            'The item object',
            'Item object: [text, href, icon]'
          ],
          [
            '<code>router</code>',
            'Designates whether to use anchor or router-link',
            'Default: true'
          ],
          [
            '<code>slot</code>',
            '',
            'Names: [default]'
          ]
        ]
      },
      items: [
        { text: 'Link', href: "#!" },
        { text: 'Link', href: "#!" },
        { text: 'Link', href: "#!" }
      ],
      item_group: [
        {
          parent: { text: 'Parent', href: '#!' },
          items: [
            { text: 'Child', href: '#!', icon: 'link' },
            { text: 'Child', href: '#!', icon: 'link' },
            { text: 'Child', href: '#!', icon: 'link' }
          ]
        },
        { text: 'Link', href: "#!" },
        { text: 'Link', href: "#!" },
        { text: 'Link', href: "#!" }
      ]
    }
  },

  mounted: function mounted () {
    this.$emit('view', this.meta())
  },

  preFetch: function preFetch () {
    return this.methods.meta()
  },

  methods: {
    meta: function meta () {
      return {
        title: 'Sidebar Component | Vuetify',
        h1: 'Sidebars',
        description: 'Sidebar component for Vuetify Framework',
        keywords: 'vuetify, sidebars, components'
      }
    }
  }
};


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//

/* harmony default export */ exports["default"] = {
  data: function data () {
    return {
      doc: {
        stage: 'comp',
        title: 'Slider',
        desc: 'The <code>v-slider</code> component is used to display large numbers of visual content on a rotating timer.',
        params: [
          [
            '<code>v-slider</code>',
            '',
            'Base component'
          ],
          [
            '<code>v-slider-item</code>',
            '',
            'Base component'
          ],
          [
            '<code>src</code>',
            'The image src',
            'Required: true'
          ]
        ]
      },
      items: [
        {
          src: 'http://hddesktopwallpapers.in/wp-content/uploads/2015/09/cute-almonds-picture-1440x500.jpg'
        },
        {
          src: 'http://hddesktopwallpapers.in/wp-content/uploads/2015/09/sky-hd-picture-1440x500.jpg'
        },
        {
          src: 'https://burlingtonontariobirder.files.wordpress.com/2015/03/cropped-red-tailed-hawk-my-favourite-picture.jpg'
        },
        {
          src: 'http://www.mrwallpaper.com/wallpapers/Space-Planet-Aurora-1366x768.jpg'
        }
      ]
    }
  },

  mounted: function mounted () {
    this.$emit('view', this.meta())
  },

  preFetch: function preFetch () {
    return this.methods.meta()
  },

  methods: {
    meta: function meta () {
      return {
        title: 'Slider Component | Vuetify',
        h1: 'Sliders',
        description: 'Slider component for Vuetify Framework',
        keywords: 'vuetify, sliders, components'
      }
    }
  }
};


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  name: 'tabs-view',

  data: function data () {
    return {
      doc: {
        stage: 'comp',
        title: 'Tabs',
        desc: 'The <code>v-tabs</code> component is used for hiding content behind a selectable item. This can also be used as a psuedo-navigation for a page, where the tabs are links and the tab-items are the content.',
        params: [
          [
            '<code>v-tabs</code>',
            '',
            'Base component'
          ],
          [
            '<code>v-tab</code>',
            '',
            'Base component'
          ],
          [
            '<code>href</code>',
            'Assigns a tab-content to the tab',
            'Required: true'
          ],
          [
            '<code>selected</code>',
            'Pre-selects a tab',
            'Default: false'
          ],
          [
            '<code>v-tabs-content-container</code>',
            '',
            'Base component'
          ],
          [
            '<code>v-tabs-content</code>',
            '',
            'Base component'
          ],
          [
            '<code>id</code>',
            'Assigns the id of the tab content',
            'Required: true'
          ]
        ]
      },
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },

  mounted: function mounted () {
    this.$emit('view', this.meta())
  },

  preFetch: function preFetch () {
    return this.methods.meta()
  },

  methods: {
    meta: function meta () {
      return {
        title: 'Tabs Component | Vuetify',
        h1: 'Tabs',
        description: 'Tabs component for Vuetify Framework',
        keywords: 'vuetify, tabs, components'
      }
    }
  }
};


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  data: function data () {
    return {
      doc: {
        stage: 'iter',
        title: 'Toast',
        desc: 'Soon',
        types: [
          'function'
        ],
        params: [
          [
            '<code>$vuetify.toast</code>',
            '',
            'Base function'
          ],
          [
            '<code>arguments</code>',
            '(content, type, duration, callback)',
            'Types: top, right, left, bottom, snack, callback'
          ]
        ]
      },
      left: ['Left Toast', 'left'],
      right: ['Right Toast', 'right'],
      top: ['Top Toast', 'top'],
      bottom: ['Bottom Toast', 'bottom'],
      snack: ['I\'m a snack toast', 'snack'],
      cb: ['Toast with Callback', 'right', 4000, function () { return alert('Callback'); }],
    }
  },

  mounted: function mounted () {
    this.$emit('view', this.meta())
  },

  preFetch: function preFetch () {
    return this.methods.meta()
  },

  methods: {
    callback: function callback () {
      alert('Alerting!')
    },

    toast: function toast (data) {
      (ref = this.$vuetify.toast).create.apply(ref, data)
      var ref;
    },
    
    meta: function meta () {
      return {
        title: 'Toast Function | Vuetify',
        h1: 'Toasts',
        description: 'Toast directive for Vuetify Framework',
        keywords: 'vuetify, toasts, function'
      }
    }
  }
};


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  data: function data () {
    return {
      doc: {
        stage: 'comp',
        title: 'Tooltip',
        desc: 'Soon',
        types: [
          'directive'
        ],
        params: [
          [
            '<code>v-tooltip</code>',
            '',
            'Base directive'
          ],
          [
            '<code>modifiers</code>',
            'top, right, bottom, left',
            'Required: true'
          ],
          [
            '<code>html</code>',
            'The content for the tooltip',
            'Required: true'
          ]
        ]
      }
    }
  },

  mounted: function mounted () {
    this.$emit('view', this.meta())
  },

  preFetch: function preFetch () {
    return this.methods.meta()
  },

  methods: {
    meta: function meta () {
      return {
        title: 'Tooltip Directive | Vuetify',
        h1: 'Tooltips',
        description: 'Tooltip directive for Vuetify Framework',
        keywords: 'vuetify, tooltips, directives'
      }
    }
  }
};


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//

/* harmony default export */ exports["default"] = {
  name: 'typography-view',

  data: function data () {
    return {
      doc: {
        title: 'Typography',
        desc: 'Soon',
        types: [],
        params: []
      }
    }
  },

  mounted: function mounted () {
    this.$emit('view', this.meta())
  },

  preFetch: function preFetch () {
    return this.methods.meta()
  },

  methods: {
    meta: function meta () {
      return {
        title: 'Typography | Vuetify',
        h1: 'Typography',
        description: 'Typography for the Vuetify Framework',
        keywords: 'vuetify, typography'
      }
    }
  }
};


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ComponentType_vue__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ComponentType_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ComponentType_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ComponentHeader_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ComponentHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ComponentHeader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ComponentExample_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ComponentExample_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ComponentExample_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ComponentParameters_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ComponentParameters_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ComponentParameters_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DocView_vue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DocView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__DocView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__MainFooter_vue__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__MainFooter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__MainFooter_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__MainNav_vue__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__MainNav_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__MainNav_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__MainSide_vue__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__MainSide_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__MainSide_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Markup_vue__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Markup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Markup_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__SectionHeader_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__SectionHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__SectionHeader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__SectionText_vue__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__SectionText_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__SectionText_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__WhatsNext_vue__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__WhatsNext_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__WhatsNext_vue__);













/* harmony default export */ exports["a"] = {
  ComponentType: __WEBPACK_IMPORTED_MODULE_0__ComponentType_vue___default.a,
  ComponentHeader: __WEBPACK_IMPORTED_MODULE_1__ComponentHeader_vue___default.a,
  ComponentExample: __WEBPACK_IMPORTED_MODULE_2__ComponentExample_vue___default.a,
  ComponentParameters: __WEBPACK_IMPORTED_MODULE_3__ComponentParameters_vue___default.a,
  DocView: __WEBPACK_IMPORTED_MODULE_4__DocView_vue___default.a,
  MainFooter: __WEBPACK_IMPORTED_MODULE_5__MainFooter_vue___default.a,
  MainNav: __WEBPACK_IMPORTED_MODULE_6__MainNav_vue___default.a,
  MainSide: __WEBPACK_IMPORTED_MODULE_7__MainSide_vue___default.a,
  Markup: __WEBPACK_IMPORTED_MODULE_8__Markup_vue___default.a,
  SectionHeader: __WEBPACK_IMPORTED_MODULE_9__SectionHeader_vue___default.a,
  SectionText: __WEBPACK_IMPORTED_MODULE_10__SectionText_vue___default.a,
  WhatsNext: __WEBPACK_IMPORTED_MODULE_11__WhatsNext_vue___default.a
};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_AboutView_vue__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_AboutView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_AboutView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_QuickStartView_vue__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_QuickStartView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__views_QuickStartView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_OverviewView_vue__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_OverviewView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__views_OverviewView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_AlertsView_vue__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_AlertsView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__views_AlertsView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_BadgesView_vue__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_BadgesView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__views_BadgesView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_BreadcrumbsView_vue__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_BreadcrumbsView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__views_BreadcrumbsView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_ButtonsView_vue__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_ButtonsView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__views_ButtonsView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_CardsView_vue__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_CardsView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__views_CardsView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_ChipsView_vue__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_ChipsView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__views_ChipsView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_CollapsibleView_vue__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_CollapsibleView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__views_CollapsibleView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_ColorsView_vue__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_ColorsView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__views_ColorsView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_DropdownsView_vue__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_DropdownsView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__views_DropdownsView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_GridView_vue__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_GridView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__views_GridView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_FormsView_vue__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_FormsView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__views_FormsView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_FooterView_vue__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_FooterView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__views_FooterView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__views_ListsView_vue__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__views_ListsView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__views_ListsView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__views_ModalsView_vue__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__views_ModalsView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__views_ModalsView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__views_NavbarView_vue__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__views_NavbarView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__views_NavbarView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__views_ParallaxView_vue__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__views_ParallaxView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__views_ParallaxView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__views_PaginationView_vue__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__views_PaginationView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__views_PaginationView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__views_ProgressView_vue__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__views_ProgressView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__views_ProgressView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__views_SliderView_vue__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__views_SliderView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__views_SliderView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__views_SidebarView_vue__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__views_SidebarView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24__views_SidebarView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__views_TabsView_vue__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__views_TabsView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25__views_TabsView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__views_ToastsView_vue__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__views_ToastsView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26__views_ToastsView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__views_TooltipsView_vue__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__views_TooltipsView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27__views_TooltipsView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__views_TypographyView_vue__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__views_TypographyView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28__views_TypographyView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__views_LayoutsView_vue__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__views_LayoutsView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29__views_LayoutsView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__views_EventBusView_vue__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__views_EventBusView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30__views_EventBusView_vue__);

































__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a)

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
  base: __dirname,
  mode: 'history',
  scrollBehavior: function () { return ({ y: 0 }); },
  routes: [
    { path: '/', component: __WEBPACK_IMPORTED_MODULE_2__views_AboutView_vue___default.a, meta: { test: 'yes' } },
    { path: '/quick-start', component: __WEBPACK_IMPORTED_MODULE_3__views_QuickStartView_vue___default.a },
    { path: '/overview', component: __WEBPACK_IMPORTED_MODULE_4__views_OverviewView_vue___default.a },
    { path: '/components/alerts', component: __WEBPACK_IMPORTED_MODULE_5__views_AlertsView_vue___default.a },
    { path: '/components/breadcrumbs', component: __WEBPACK_IMPORTED_MODULE_7__views_BreadcrumbsView_vue___default.a },
    { path: '/components/buttons', component: __WEBPACK_IMPORTED_MODULE_8__views_ButtonsView_vue___default.a },
    { path: '/components/cards', component: __WEBPACK_IMPORTED_MODULE_9__views_CardsView_vue___default.a },
    { path: '/components/chips', component: __WEBPACK_IMPORTED_MODULE_10__views_ChipsView_vue___default.a },
    { path: '/components/collapsible', component: __WEBPACK_IMPORTED_MODULE_11__views_CollapsibleView_vue___default.a },
    { path: '/components/dropdowns', component: __WEBPACK_IMPORTED_MODULE_13__views_DropdownsView_vue___default.a },
    { path: '/components/forms', component: __WEBPACK_IMPORTED_MODULE_15__views_FormsView_vue___default.a },
    { path: '/components/footer', component: __WEBPACK_IMPORTED_MODULE_16__views_FooterView_vue___default.a },
    { path: '/components/lists', component: __WEBPACK_IMPORTED_MODULE_17__views_ListsView_vue___default.a },
    { path: '/components/modals', component: __WEBPACK_IMPORTED_MODULE_18__views_ModalsView_vue___default.a },
    { path: '/components/navbar', component: __WEBPACK_IMPORTED_MODULE_19__views_NavbarView_vue___default.a },
    { path: '/components/pagination', component: __WEBPACK_IMPORTED_MODULE_21__views_PaginationView_vue___default.a },
    { path: '/components/parallax', component: __WEBPACK_IMPORTED_MODULE_20__views_ParallaxView_vue___default.a },
    { path: '/components/progress', component: __WEBPACK_IMPORTED_MODULE_22__views_ProgressView_vue___default.a },
    { path: '/components/sidebar', component: __WEBPACK_IMPORTED_MODULE_24__views_SidebarView_vue___default.a },
    { path: '/components/slider', component: __WEBPACK_IMPORTED_MODULE_23__views_SliderView_vue___default.a },
    { path: '/components/tabs', component: __WEBPACK_IMPORTED_MODULE_25__views_TabsView_vue___default.a },
    { path: '/functions/toasts', component: __WEBPACK_IMPORTED_MODULE_26__views_ToastsView_vue___default.a },
    { path: '/directives/badges', component: __WEBPACK_IMPORTED_MODULE_6__views_BadgesView_vue___default.a },
    { path: '/directives/tooltips', component: __WEBPACK_IMPORTED_MODULE_27__views_TooltipsView_vue___default.a },
    { path: '/css/typography', component: __WEBPACK_IMPORTED_MODULE_28__views_TypographyView_vue___default.a },
    { path: '/css/grid', component: __WEBPACK_IMPORTED_MODULE_14__views_GridView_vue___default.a },
    { path: '/css/colors', component: __WEBPACK_IMPORTED_MODULE_12__views_ColorsView_vue___default.a },
    { path: '/layouts', component: __WEBPACK_IMPORTED_MODULE_29__views_LayoutsView_vue___default.a },
    { path: '/event-bus', component: __WEBPACK_IMPORTED_MODULE_30__views_EventBusView_vue___default.a },
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach(function (to, from, next) {
    if (typeof ga !== 'undefined') {
        ga('set', 'page', to.path)
        ga('send', 'pageview')
    }
    next()
})

/* harmony default export */ exports["a"] = router;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex___default.a)

/* harmony default export */ exports["a"] = new __WEBPACK_IMPORTED_MODULE_1_vuex___default.a.Store({
  state: {},

  actions: {},

  mutations: {}
});

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		{ module.exports = factory(); }
	else if(typeof define === 'function' && define.amd)
		{ define([], factory); }
	else if(typeof exports === 'object')
		{ exports["Vuetify"] = factory(); }
	else
		{ root["Vuetify"] = factory(); }
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			{ return installedModules[moduleId].exports; }

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 142);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = createSimpleFunctional;
/* harmony export (immutable) */ exports["c"] = directiveConfig;
/* harmony export (immutable) */ exports["b"] = closest;
function createSimpleFunctional (c, el) {
  if ( el === void 0 ) { el = 'div'; }

  return {
    functional: true,

    render: function (h, ref) {
      var data = ref.data;
      var children = ref.children;

      data.staticClass = data.staticClass ? (c + " " + (data.staticClass)) : c

      return h(el, data, children)
    }
  }
}

function directiveConfig (binding, defaults) {
  if ( defaults === void 0 ) { defaults = {}; }

  return Object.assign(
    defaults,
    binding.modifiers,
    { value: binding.arg },
    binding.value || {}
  )
}

function closest (className) {
  var parent = this.$parent

  while(parent) {
    if (!parent.$el) {
      return null
    }
    
    if (parent.$el.classList.contains(className)) {
      return parent._uid
    }

    parent = parent.$parent
  }

  return null
}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
  created: function created () {
    this.$vuetify.bus.sub(this.events)
  },

  beforeDestroy: function beforeDestroy () {
    this.$vuetify.bus.unsub(this.events)
  }
};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eventable__ = __webpack_require__(1);


/* harmony default export */ exports["a"] = {
  data: function data () {
    return {
      active: false,
      activator: {}
    }
  },

  mixins: [
    __WEBPACK_IMPORTED_MODULE_0__eventable__["a" /* default */]
  ],

  mounted: function mounted () {
    this.$vuetify.load(this.init)
  },

  computed: {
    events: function events () {
      return [
        [((this.$options.name) + ":open:" + (this.id)), this.open],
        [((this.$options.name) + ":close:" + (this.id)), this.close],
        [((this.$options.name) + ":toggle:" + (this.id)), this.toggle],
        ["body:click", this.close] ]
    }
  },

  methods: {
    init: function init () {
      this.activator = document.querySelector(("[data-" + (this.$options.name) + "=\"" + (this.id) + "\"]"))
    },

    open: function open () {
      this.active = true
      this.$vuetify.bus.pub(((this.$options.name) + ":opened"), this.id)
    },

    close: function close (e, force) {
      if ( force === void 0 ) { force = false; }

      if (force) {
        return this.active = !this.active
      }

      if (this.activator === null) {
        return
      }
      
      try {
        if (e.target === this.activator
            || this.activator.contains(e.target)
        ) {
          return
        }
      } catch (e) {}

      this.active = false
    },

    toggle: function toggle () {
      this.active = !this.active
    }
  }
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_events__);


var Bus = (function (EventEmitter) {
  function Bus () {
    EventEmitter.call(this)
    this.setMaxListeners(500)
  }

  if ( EventEmitter ) { Bus.__proto__ = EventEmitter; }
  Bus.prototype = Object.create( EventEmitter && EventEmitter.prototype );
  Bus.prototype.constructor = Bus;

  Bus.prototype.sub = function sub (event, cb) {
    var this$1 = this;

    var type = typeof event
    
    if (type !== 'object' && type !== 'array') {
      return this.on(event, cb)
    }

    event.forEach(function (i) { return this$1.on.apply(this$1, i); })
  };

  Bus.prototype.unsub = function unsub (event, cb) {
    var this$1 = this;

    var type = typeof event

    if (type !== 'object' && type !== 'array') {
      return this.removeListener(event, cb)
    }
    
    event.forEach(function (i) { return this$1.removeListener.apply(this$1, i); })
  };

  Bus.prototype.pub = function pub () {
    this.emit.apply(this, arguments)
  };

  return Bus;
}(__WEBPACK_IMPORTED_MODULE_0_events___default.a));

/* harmony default export */ exports["a"] = new Bus();


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
  data: function data () {
    return {
      obj_height: null,
      parallax: null,
      parallax_dist: null,
      bottom: null,
      top: null,
      scroll_top: null,
      window_height: null,
      window_bottom: null
    }
  },

  mounted: function mounted () {
    this.$vuetify.load(this.init)
  },

  beforeDestroy: function beforeDestroy () {
    document.removeEventListener('scroll', this.translate, false)
    document.removeEventListener('resize', this.translate, false)
  },

  methods: {
    listeners: function listeners () {
      document.addEventListener('scroll', this.translate, false)
      document.addEventListener('resize', this.translate, false)
    },

    translate: function translate () {
      this.calcDimensions()

      var percent_scrolled = (
        (this.window_bottom - this.top) / (Number(this.height) + this.window_height)
      )
      
      this.parallax = Math.round(this.parallax_dist * percent_scrolled)

      if (this.translated) {
        this.translated()
      }
    },

    calcDimensions: function calcDimensions () {
      this.obj_height = this.objHeight()
      this.parallax_dist = this.obj_height - this.height
      this.top = this.elOffsetTop()
      this.bottom = this.top + this.height
      this.scroll_top = window.pageYOffset
      this.window_height = window.innerHeight
      this.window_bottom = this.scroll_top + this.window_height
    }
  }
};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alerts_index__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_index__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breadcrumbs_index__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buttons_index__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cards_index__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chips_index__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__collapsible_index__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dropdowns_index__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_index__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__forms_index__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__grid_index__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__icons_index__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lists_index__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modal_index__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__navbar_index__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pagination_index__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__parallax_index__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__progress_index__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__sidebar_index__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__slider_index__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__tabs_index__ = __webpack_require__(65);






















function bootstrap () {
  var arguments$1 = arguments;

  var components = [], len = arguments.length;
  while ( len-- ) { components[ len ] = arguments$1[ len ]; }

  var entries = {}

  components.forEach(function (component) {
    Object.keys(component).forEach(function (key) {
      entries[("V" + key)] = component[key]
    })
  })

  return entries
}

/* harmony default export */ exports["a"] = bootstrap(
  __WEBPACK_IMPORTED_MODULE_0__alerts_index__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__app_index__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__breadcrumbs_index__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_3__buttons_index__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_4__cards_index__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_5__chips_index__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_6__collapsible_index__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_7__dropdowns_index__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_8__footer_index__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_9__forms_index__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_10__grid_index__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_11__icons_index__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_12__lists_index__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_13__modal_index__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_14__navbar_index__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_15__pagination_index__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_16__parallax_index__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_17__progress_index__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_18__sidebar_index__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_19__slider_index__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_20__tabs_index__["a" /* default */]
);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__badge__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tooltip__ = __webpack_require__(70);






/* harmony default export */ exports["a"] = {
  Badge: __WEBPACK_IMPORTED_MODULE_0__badge__["a" /* default */],
  Dropdown: __WEBPACK_IMPORTED_MODULE_1__dropdown__["a" /* default */],
  Modal: __WEBPACK_IMPORTED_MODULE_2__modal__["a" /* default */],
  SideBar: __WEBPACK_IMPORTED_MODULE_3__sidebar__["a" /* default */],
  Tooltip: __WEBPACK_IMPORTED_MODULE_4__tooltip__["a" /* default */]
};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var Toast = function Toast () {};

Toast.prototype.toast = function toast (location) {
  var toast = document.createElement('div')

  toast.classList.add('toast')
  toast.classList.add(("toast--" + location))

  document.body.appendChild(toast)

  return toast
};

Toast.prototype.create = function create (message, location, duration, cb) {
    if ( location === void 0 ) { location = 'right'; }
    if ( duration === void 0 ) { duration = 3000; }

  var toast = document.querySelector((".toast--" + location))

  if (!toast) {
    toast = this.toast(location)
  }

  var content = document.createElement('div')
  content.classList.add('toast__content')
  content.innerHTML = message

  toast.appendChild(content)
  setTimeout(function () { return content.classList.add('toast__content--active'); }, 10)

  setTimeout(function () {
    content.classList.add('toast__content--remove')

    setTimeout(function () {
      content.remove()

      if (cb) {
        cb()
      }
    }, 300)
  }, duration)
};

/* harmony default export */ exports["a"] = new Toast();

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bus__ = __webpack_require__(3);


/* harmony default export */ exports["a"] = function () {
  document.body.addEventListener('click', function (e) {
    __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].pub('body:click', e)
  })

  __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].sub('meta:title', function (title) {
    document.title = title
  })

  __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].sub('meta:description', function (description) {
    document.head.querySelector('meta[name=description]').content = description
  })

  __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* default */].sub('meta:keywords', function (keywords) {
    document.head.querySelector('meta[name=keywords]').content = keywords
  })
};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function (cb) {
  if (document.readyState === 'complete') {
    return setTimeout(cb, 0)
  }

  document.addEventListener('DOMContentLoaded', cb)
};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//

/* harmony default export */ exports["default"] = {
  name: 'alert',

  props: {
    close: Boolean,

    error: Boolean,

    info: Boolean,

    success: Boolean,

    warning: Boolean,

    value: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    classes: function classes() {
      return {
        'alert--close': this.close,
        'alert--error': this.error,
        'alert--info': this.info,
        'alert--success': this.success,
        'alert--warning': this.warning,
      }
    },

    icon: function icon() {
      switch (true) {
        case this.error:
          return 'warning'
          break
        case this.info:
          return 'info'
          break
        case this.success:
          return 'check_circle'
          break
        case this.warning:
          return 'priority_high'
          break
      }
    }
  }
};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  props: {
    footer: Boolean,

    leftFixedSidebar: Boolean,

    leftSidebar: Boolean,

    id: {
      type: String,
      default: 'app'
    },

    rightFixedSidebar: Boolean,

    rightSidebar: Boolean,

    topFixedNavbar: Boolean,

    topNavbar: Boolean
  },

  computed: {
    classes: function classes () {
      return {
        'left-fixed-sidebar': this.leftFixedSidebar,
        'left-sidebar': this.leftSidebar,
        'right-fixed-sidebar': this.rightFixedSidebar,
        'right-sidebar': this.rightSidebar,
        'top-fixed-navbar': this.topFixedNavbar,
        'top-navbar': this.topNavbar
      }
    }
  }
};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  name: 'breadcrumbs',
  
  props: {
    divider: {
      type: String,
      default: '/'
    },

    icons: Boolean,

    items: {
      type: Array,
      default: function () { return []; }
    }
  },

  computed: {
    classes: function classes () {
      return {
        'breadcrumbs--with-icons': this.icons
      }
    }
  },

  mounted: function mounted () {
    this.$vuetify.load(this.init)
  },

  methods: {
    init: function init () {
      var this$1 = this;

      this.$children.forEach(function (i) { return i.$el.dataset.divider = this$1.divider; })
    }
  }
};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  name: 'breadcrumbs-item',
  
  props: {
    disabled: Boolean,

    item: {
      type: Object,
      required: true
    }
  },

  computed: {
    classes: function classes () {
      return {
        'breadcrumbs__item--disabled': this.disabled
      }
    }
  }
};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  name: 'button',
  
  props: {
    block: Boolean,

    flat: Boolean,

    floating: Boolean,

    icon: Boolean,

    large: Boolean,

    outline: Boolean,

    primary: Boolean,

    round: Boolean,

    secondary: Boolean,

    small: Boolean,

    type: {
      type: String,
      default: 'button'
    }
  },

  computed: {
    classes: function classes () {
      return {
        'btn--block': this.block,
        'btn--flat': this.flat,
        'btn--floating': this.floating,
        'btn--icon': this.icon,
        'btn--large': this.large,
        'btn--outline': this.outline,
        'btn--round': this.round,
        'btn--small': this.small
      }
    }
  }
};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  name: 'card',
  
  props: {
    height: {
      type: String,
      default: 'auto'
    },

    horizontal: Boolean,

    img: String
  },

  computed: {
    classes: function classes () {
      return {
        'card--horizontal': this.horizontal
      }
    },

    styles: function styles () {
      var styles = {
        height: this.height
      }

      if (this.img) {
        styles.background = "url(" + (this.img) + ") center center / cover no-repeat"
      }

      return styles
    }
  }
};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  name: 'card-row',
  
  props: {
    actions: Boolean,

    height: {
      type: String,
      default: 'auto'
    },

    img: String
  },

  computed: {
    classes: function classes () {
      return {
        'card__row--actions': this.actions
      }
    },

    styles: function styles () {
      var styles = {
        height: this.height
      }

      if (this.img) {
        styles.background = "url(" + (this.img) + ") center center / cover no-repeat"
      }
      
      return styles
    }
  }
};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  name: 'chip',

  props: {
    close: Boolean,

    label: Boolean,

    outline: Boolean,

    small: Boolean,

    value: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    classes: function classes () {
      return {
        'chip--label': this.label,
        'chip--outline': this.outline,
        'chip--small': this.small,
        'chip--removable': this.close
      }
    }
  }
};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  name: 'collapsible',

  props: {
    expand: Boolean
  },

  computed: {
    classes: function classes () {
      return {
        'collapsible': true
      }
    },

    params: function params () {
      return {
        expand: this.expand
      }
    }
  }
};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_eventable__ = __webpack_require__(1);
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



/* harmony default export */ exports["default"] = {
  name: 'collapsible-body',

  mixins: [
    __WEBPACK_IMPORTED_MODULE_0__mixins_eventable__["a" /* default */]
  ],

  data: function data () {
    return {
      active: false
    }
  },

  computed: {
    events: function events () {
      return [
        [("collapse:toggle:" + (this.$parent._uid)), this.toggle]
      ]
    }
  },

  methods: {
    enter: function enter (el) {
      el.style.display = 'block'
      el.style.height = 0
      el.style.height = (el.scrollHeight) + "px"
    },

    leave: function leave (el) {
      el.style.height = 0
    },

    toggle: function toggle (uid) {
      if (uid !== this._uid
          && !this.$parent.params.expand
      ) {
        return this.active = false
      }

      if (uid === this._uid) {
        this.active = !this.active
      }
    }
  }
};


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  name: 'collapsible-header',

  methods: {
    click: function click () {
      this.$vuetify.bus.pub(
        ("collapse:toggle:" + (this.$parent._uid)),
        Number(this.$el.nextSibling.getAttribute('uid'))
      )
    }
  }
};


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_toggleable__ = __webpack_require__(2);
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



/* harmony default export */ exports["default"] = {
  name: 'dropdown',

  mixins: [
    __WEBPACK_IMPORTED_MODULE_0__mixins_toggleable__["a" /* default */]
  ],

  props: {
    bottom: Boolean,

    id: {
      type: String,
      required: true
    },

    hover: Boolean,

    items: {
      type: Array,
      default: function () { return []; }
    },

    right: Boolean
  },

  computed: {
    classes: function classes () {
      return {
        'dropdown--open': this.active,
        'dropdown--open-from-right': this.right
      }
    }
  },

  mounted: function mounted () {
    this.$vuetify.bus.sub(((this.$options.name) + ":opened"), this.opened)
  },

  methods: {
    opened: function opened (id) {
      this.active = id === this.id
    }
  }
};


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  name: 'dropdown-item',
  
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  name: 'footer'
};


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  name: 'checkbox',
  
  data: function data () {
    return {
      model: null
    }
  },

  props: {
    disabled: Boolean,

    filled: Boolean,

    gap: Boolean,

    id: {
      type: String,
      default: ''
    },

    indeterminate: Boolean,
    
    label: {
      type: String,
      default: ''
    },

    name: {
      type: String,
      default: ''
    },

    value: {
      required: false
    }
  },

  computed: {
    classes: function classes () {
      return {
        'filled': this.filled
      }
    }
  },

  mounted: function mounted () {
    var vm = this

    this.$refs.input.indeterminate = this.indeterminate

    this.state()

    this.$refs.input.onchange = function () {
      var c = this.checked,
            v = this.value

      if (!vm.model
          || typeof vm.model === 'string'
      ) {
        return vm.$emit('input', c ? true : false)
      }

      var i = vm.model.indexOf(v)

      if (c) {
        vm.model.push(v)
      } else {
        vm.model.splice(i, 1)
      }

      vm.$emit('input', vm.model)
    }
  },

  methods: {
    state: function state () {
      if (typeof this.model === 'array' 
          && this.model.includes(this.value)
          || this.value
      ) {
        this.$refs.input.checked = true
      }
    }
  }
};


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  name: 'radio',
  
  props: {      
    disabled: Boolean,

    label: {
      type: String,
      default: ''
    },

    gap: Boolean,

    id: {
      type: String,
      default: ''
    },

    name: {
      type: String,
      default: ''
    },

    value: [String, Number, Boolean]
  },

  computed: {
    classes: function classes () {
      return {
        'gap': this.gap
      }
    }
  },

  mounted: function mounted () {
    var vm = this

    this.$refs.input.checked = this.$el.value === this.value

    this.$refs.input.onchange = function () {
      vm.$emit('input', this.value)
    }
  }
};


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  name: 'select',
  
  data: function data () {
    return {
      focused: false
    }
  },

  props: {
    defaultText: {
      type: String,
      default: 'Select...'
    },

    id: {
      type: String,
      value: ''
    },

    label: {
      type: String,
      value: ''
    },

    multiple: Boolean,

    name: {
      type: String,
      value: ''
    },

    options: {
      type: Array,
      default: function () { return []; }
    },

    value: {
      required: false
    }
  },

  computed: {
    classes: function classes () {
      return {
        'input-group--dirty': true,
        'input-group--focused': this.focused && !this.multiple
      }
    }
  },

  mounted: function mounted () {
    if (this.value) {
      this.$refs.select.value = this.value
    }
  },

  methods: {
    update: function update () {
      if (!this.multiple) {
        this.$emit('input', this.$refs.select.value)
      } else {
        this.$emit('input', this.$refs.options.filter(function (i) { return i.selected; }).map(function (i) { return i.value; }))
      }
    }
  }
};


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//
//
//

/* harmony default export */ exports["default"] = {
  name: 'text-input',
  
  data: function data () {
    return {
      focused: false
    }
  },

  computed: {
    classes: function classes () {
      return {
        'input-group--focused': this.focused,
        'input-group--dirty': this.value || this.placeholder || (this.$refs.input && this.$refs.input.value)
      }
    }
  },

  props: {
    label: String,

    id: String,

    name: String,

    placeholder: String,

    value: {
      required: false
    }
  }
};


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  name: 'icon',
  
  data: function data () {
    return {
      active: false
    }
  },

  props: {
    large: Boolean,

    left: Boolean,

    medium: Boolean,

    right: Boolean,

    xLarge: Boolean
  },

  computed: {
    classes: function classes () {
      return {
        'icon--large': this.large,
        'icon--left': this.left,
        'icon--medium': this.medium,
        'icon--right': this.right,
        'icon--x-large': this.xLarge
      }
    }
  }
};


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_toggleable__ = __webpack_require__(2);
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



/* harmony default export */ exports["default"] = {
  name: 'modal',

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_toggleable__["a" /* default */]],

  props: {
    bottom: Boolean,

    id: {
      type: String,
      required: true
    }
  },

  computed: {
    classes: function classes () {
      return {
        'modal--bottom': this.bottom
      }
    }
  },

  methods: {
    close: function close (e) {
      if (!e) {
        return this.active = false
      }

      if (e.target === this.$refs.modal || this.$refs.modal.contains(e.target)) {
        return
      }

      if (this.activator === null) {
        return
      }
      
      try {
        if (e.target === this.activator
            || this.activator.contains(e.target)
        ) {
          return
        }
      } catch (e) {}

      this.active = false
    }
  }
};


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  name: 'navbar',

  props: {
    fixed: Boolean
  },

  computed: {
    classes: function classes () {
      return {
        'navbar--fixed': this.fixed
      }
    }
  }
};


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  name: 'navbar-item',
  
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  name: 'navbar-items',
  
  props: {
    items: {
      type: Array,
      default: function () { return []; }
    }
  }
};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  name: 'pagination',
  
  data: function data () {
    return {
      selected: null
    }
  },

  props: {
    circle: Boolean,

    length: {
      type: Number,
      default: 0
    },

    value: {
      type: Number,
      default: 0
    }
  },

  watch: {
    value: function value () {
      this.init()
    }
  },

  computed: {
    classes: function classes () {
      return {
        'pagination--circle': this.circle
      }
    },

    items: function items () {
      if (this.length <= 5) {
        return this.range(1, this.length)
      }

      var min = this.value - 3
      min = min > 0 ? min : 1

      var max = min + 6
      max = max <= this.length ? max : this.length

      if (max === this.length) {
        min = this.length - 6
      }

      var range = this.range(min, max)

      if (this.value >= 4 && this.length > 6) {
        range.splice(0, 2, 1, '...')
      }

      if (this.value + 3 < this.length && this.length > 6) {
        range.splice(range.length - 2, 2, '...', this.length)
      }

      return range
    }
  },

  mounted: function mounted () {
    this.$vuetify.load.call(this, this.init)
  },

  methods: {
    init: function init () {
      var this$1 = this;

      this.selected = null

      // Change this
      setTimeout(function () { return this$1.selected = this$1.value; }, 100)
    },

    range: function range (from, to) {
      var range = []

      from = from > 0 ? from : 1

      for (var i = from; i <= to; i++) {
        range.push(i)
      }

      return range
    }
  }
};


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_translatable__ = __webpack_require__(4);
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



/* harmony default export */ exports["default"] = {
  name: 'parallax',
  
  mixins: [
    __WEBPACK_IMPORTED_MODULE_0__mixins_translatable__["a" /* default */]
  ],

  props: {
    height: {
      type: [String, Number],
      default: 500
    },

    src: {
      type: String,
      required: true
    }
  },

  computed: {
    styles: function styles () {
      return {
        display: 'block',
        transform: ("translate3d(-50%, " + (this.parallax) + "px, 0)")
      }
    }
  },

  methods: {
    init: function init () {
      var this$1 = this;

      if (this.$refs.img.complete) {
        console.log('here')
        this.translate()
        this.listeners()
        return this.$vuetify.bus.pub('parallax:ready')
      }
      
      this.$refs.img.addEventListener('load', function () {
        this$1.translate()
        this$1.listeners()
        this$1.$vuetify.bus.pub('parallax:ready')
      }, { once: true })
    },

    objHeight: function objHeight () {
      return this.$refs.img.naturalHeight
    },

    elOffsetTop: function elOffsetTop () {
      return this.$el.offsetTop
    }
  }
};


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_translatable__ = __webpack_require__(4);
//
//
//
//
//
//
//
//



/* harmony default export */ exports["default"] = {
  name: 'parallax-content',

  mixins: [
    __WEBPACK_IMPORTED_MODULE_0__mixins_translatable__["a" /* default */]
  ],
  
  data: function data () {
    return {
      height: null,
      opacity: 1
    }
  },

  props: {
    opacityOffset: {
      type: [String, Number],
      default: .7
    }
  },

  computed: {
    styles: function styles () {
      return {
        opacity: this.opacity,
        transform: ("translate3d(0, " + (this.parallax - (this.height * .35)) + "px, 0)")
      }
    }
  },

  methods: {
    init: function init () {
      var this$1 = this;

      this.$vuetify.bus.sub('parallax:ready', function () {
        this$1.height = this$1.$el.closest('.parallax').clientHeight
        this$1.translate()
        this$1.listeners()
      })
    },

    elOffsetTop: function elOffsetTop () {
      return this.$el.closest('.parallax').offsetTop
    },

    objHeight: function objHeight () {
      return this.$el.previousSibling.naturalHeight
    },

    translated: function translated () {
      this.opacity = (
        (this.height * this.opacityOffset) / this.parallax - this.opacityOffset * 1.7
      )
    }
  }
};


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  name: 'progress',
  
  props: {
    height: {
      type: String,
      default: '7px'
    },

    indeterminate: Boolean,

    max: {
      type: [String, Number],
      default: 0
    },

    min: {
      type: [String, Number],
      default: 0
    },

    value: {
      type: [String, Number],
      default: 0
    }
  },

  computed: {
    classes: function classes () {
      return {
        'progress--indeterminate': this.indeterminate
      }
    },

    styles: function styles () {
      return {
        'width': ((this.value) + "%")
      }
    }
  }
};


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_toggleable__ = __webpack_require__(2);
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



/* harmony default export */ exports["default"] = {
  name: 'sidebar',

  mixins: [
    __WEBPACK_IMPORTED_MODULE_0__mixins_toggleable__["a" /* default */]
  ],

  props: {
    drawer: Boolean,

    fixed: Boolean,

    height: {
      type: String,
      default: '100vh'
    },

    id: {
      type: String,
      required: true
    },

    mobile: {
      type: Boolean,
      default: true
    },

    items: {
      type: Array,
      default: function () { return []; }
    },

    right: Boolean
  },

  computed: {
    classes: function classes () {
      return {
        'sidebar--mobile': this.mobile,
        'sidebar--fixed': this.fixed && !this.right,
        'sidebar--fixed-right': this.fixed && this.right,
        'sidebar--close': !this.active,
        'sidebar--open': this.active
      }
    },

    styles: function styles () {
      return {
        'height': this.height
      }
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$vuetify.load(function () {
      this$1.resize()
      window.addEventListener('resize', this$1.resize, false)
    })
  },

  beforeDestroy: function beforeDestroy () {
    window.removeEventListener('resize', this.resize)
  },

  methods: {
    resize: function resize () {
      if (!this.drawer) {
        this.active = window.innerWidth > 768
      }
    },

    close: function close (e) {
      var group = e.target.classList.contains('sidebar__item-header')
        || e.target.parentNode.classList.contains('sidebar__item-header')
        
      if (this.activator === null || group) {
        return
      }

      try {
        if (e.target === this.activator 
          || this.activator.contains(e.target) 
          || e.target === this.$el
        ) {
          return
        }
      } catch (e) {}

      var width = window.innerWidth

      if (width > 768 && !this.drawer) {
        return
      }

      this.active = false
    }
  }
};


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_eventable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_helpers__ = __webpack_require__(0);
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
//
//
//
//




/* harmony default export */ exports["default"] = {
  name: 'sidebar-group',

  mixins: [
    __WEBPACK_IMPORTED_MODULE_0__mixins_eventable__["a" /* default */]
  ],

  data: function data () {
    return {
      active: false,
      height: 0
    }
  },

  props: {
    item: Object,
    required: true
  },
  
  computed: {
    events: function events () {
      return [
        [("sidebar-group:close:" + (this.sidebar)), this.close],
        [("sidebar-group:open:" + (this.sidebar)), this.open]
      ]
    },

    sidebar: function sidebar () {
      return __WEBPACK_IMPORTED_MODULE_1__util_helpers__["b" /* closest */].call(this, 'sidebar')
    }
  },

  mounted: function mounted () {
    if (this.$refs.group.$el.querySelector('.sidebar__item--active')) {
      this.active = true
    }
  },

  methods: {
    enter: function enter (el, done) {
      el.style.display = 'block'
      el.style.height = 0
      
      setTimeout(function () { return el.style.height = (el.scrollHeight) + "px"; }, 0)

      var transition = function () {
        done()
        el.removeEventListener('transitionend', transition, false)
      }
      
      el.addEventListener('transitionend', transition, false)
    },

    leave: function leave (el, done) {
      el.style.height = 0
      
      var transition = function () {
        done()
        el.removeEventListener('transitionend', transition, false)
      }
      
      el.addEventListener('transitionend', transition, false)
    },

    open: function open () {
      this.active = true
    },

    toggle: function toggle () {
      this.active = !this.active
    },

    close: function close (uid) {
      this.active = uid === this._uid
    }
  }
};


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(0);
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
//
//
//
//
//



/* harmony default export */ exports["default"] = {
  name: 'sidebar-item',
  
  data: function data () {
    return {
      sidebar: null,
      group: null
    }
  },

  props: {
    item: {
      type: Object,
      required: true
    },

    router: Boolean
  },

  computed: {
    group: function group () {
      return __WEBPACK_IMPORTED_MODULE_0__util_helpers__["b" /* closest */].call(this, 'sidebar__group')
    },

    sidebar: function sidebar () {
      return __WEBPACK_IMPORTED_MODULE_0__util_helpers__["b" /* closest */].call(this, 'sidebar')
    }
  },

  methods: {
    click: function click () {
      this.$vuetify.bus.pub(("sidebar-group:close:" + (this.sidebar)), this.group)
    }
  }
};


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

/* harmony default export */ exports["default"] = {
  name: 'sidebar-items',

  props: {
    items: {
      type: Array,
      default: function () { return []; }
    }
  }
};


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//
//
//

/* harmony default export */ exports["default"] = {
  name: 'slider',

  data: function data () {
    return {
      current: null,
      items: [],
      slide_interval: {},
      reverse: false
    }
  },

  props: {
    cycle: {
      type: Boolean,
      default: true
    },

    icon: {
      type: String,
      default: 'fiber_manual_record'
    },

    interval: {
      type: Number,
      default: 6000
    }
  },

  watch: {
    current: function current () {
      if (this.cycle) {
        clearInterval(this.slide_interval)
        this.startInterval()
      }

      this.$vuetify.bus.pub('slider:open', this.items[this.current]._uid, this.reverse)
    }
  },

  mounted: function mounted () {
    this.init()
  },

  activated: function activated () {
    this.init()
  },

  methods: {
    init: function init () {
      this.items = this.$children.filter(function (i) {
        return i.$el.classList && i.$el.classList.contains('slider__item')
      })

      this.current = 0
    },

    next: function next () {
      this.reverse = false
      
      if (this.current + 1 === this.items.length) {
        return this.current = 0
      }

      this.current++
    },

    prev: function prev () {
      this.reverse = true

      if (this.current - 1 < 0) {
        return this.current = this.items.length - 1
      }

      this.current--
    },

    select: function select (index) {
      this.reverse = index < this.current
      this.current = index
    },

    startInterval: function startInterval () {
      this.slide_interval = setInterval(this.next, this.interval)
    }
  }
};


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_eventable__ = __webpack_require__(1);
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



/* harmony default export */ exports["default"] = {
  name: 'slider-item',

  mixins: [
    __WEBPACK_IMPORTED_MODULE_0__mixins_eventable__["a" /* default */]
  ],

  data: function data () {
    return {
      active: false,
      reverse: false
    }
  },

  props: {
    src: {
      type: String,
      required: true
    },

    transition: {
      type: String,
      default: 'shift'
    }
  },

  computed: {
    events: function events () {
      return [
        ['slider:open', this.open]
      ]
    },

    styles: function styles () {
      return { 
        backgroundImage: ("url(" + (this.src) + ")")
      }
    }
  },

  methods: {
    open: function open (target, reverse) {
      if ( reverse === void 0 ) { reverse = false; }

      this.active = this._uid === target
      this.reverse = reverse
    }
  }
};


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_eventable__ = __webpack_require__(1);
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



/* harmony default export */ exports["default"] = {
  name: 'tab',

  data: function data () {
    return {
      active: false
    }
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_eventable__["a" /* default */]],

  props: {
    href: {
      type: String,
      required: true
    },

    selected: Boolean
  },

  computed: {
    classes: function classes () {
      return {
        'tabs__tab--active': this.active
      }
    },

    events: function events () {
      return [
        ['tab:open', this.activate]
      ]
    },

    target: function target () {
      return this.href.replace('#', '')
    }
  },

  mounted: function mounted () {
    if (this.selected || window.location.hash.substr(1) === this.target) {
      this.$vuetify.load(this.click)
    }
  },

  methods: {
    activate: function activate (target) {
      this.active = target === this.target
    },

    click: function click () {
      this.$vuetify.bus.pub('tab:open', this.target)
    }
  }
};


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_eventable__ = __webpack_require__(1);
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



/* harmony default export */ exports["default"] = {
  name: 'tabs-item',
  
  data: function data () {
    return {
      active: false
    }
  },

  mixins: [
    __WEBPACK_IMPORTED_MODULE_0__mixins_eventable__["a" /* default */]
  ],

  props: {
    id: {
      type: String,
      required: true
    },

    transition: {
      type: String,
      default: 'shift'
    }
  },

  computed: {
    events: function events () {
      return [
        ['tab:open', this.open]
      ]
    }
  },

  methods: {
    open: function open (target) {
      this.active = this.id === target
    }
  }
};


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Alert_vue__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Alert_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Alert_vue__);


/* harmony default export */ exports["a"] = {
  Alert: __WEBPACK_IMPORTED_MODULE_0__Alert_vue___default.a
};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_vue__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__App_vue__);


/* harmony default export */ exports["a"] = {
  App: __WEBPACK_IMPORTED_MODULE_0__App_vue___default.a
};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Breadcrumbs_vue__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Breadcrumbs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Breadcrumbs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BreadcrumbsItem_vue__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BreadcrumbsItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__BreadcrumbsItem_vue__);



/* harmony default export */ exports["a"] = {
  Breadcrumbs: __WEBPACK_IMPORTED_MODULE_0__Breadcrumbs_vue___default.a,
  BreadcrumbsItem: __WEBPACK_IMPORTED_MODULE_1__BreadcrumbsItem_vue___default.a
};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button_vue__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Button_vue__);


/* harmony default export */ exports["a"] = {
  Btn: __WEBPACK_IMPORTED_MODULE_0__Button_vue___default.a
};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Card_vue__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CardRow_vue__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CardRow_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__CardRow_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_helpers__ = __webpack_require__(0);




var CardColumn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_helpers__["a" /* createSimpleFunctional */])('card__column')
var CardText = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_helpers__["a" /* createSimpleFunctional */])('card__text')
var CardTitle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_helpers__["a" /* createSimpleFunctional */])('card__title')

/* harmony default export */ exports["a"] = {
  Card: __WEBPACK_IMPORTED_MODULE_0__Card_vue___default.a,
  CardRow: __WEBPACK_IMPORTED_MODULE_1__CardRow_vue___default.a,
  CardColumn: CardColumn,
  CardText: CardText,
  CardTitle: CardTitle
};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Chip_vue__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Chip_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Chip_vue__);


/* harmony default export */ exports["a"] = {
  Chip: __WEBPACK_IMPORTED_MODULE_0__Chip_vue___default.a
};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Collapsible_vue__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Collapsible_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Collapsible_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CollapsibleBody_vue__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CollapsibleBody_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__CollapsibleBody_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CollapsibleHeader_vue__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CollapsibleHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__CollapsibleHeader_vue__);




/* harmony default export */ exports["a"] = {
  Collapsible: __WEBPACK_IMPORTED_MODULE_0__Collapsible_vue___default.a,
  CollapsibleBody: __WEBPACK_IMPORTED_MODULE_1__CollapsibleBody_vue___default.a,
  CollapsibleHeader: __WEBPACK_IMPORTED_MODULE_2__CollapsibleHeader_vue___default.a
};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dropdown_vue__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dropdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Dropdown_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DropdownItem_vue__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DropdownItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__DropdownItem_vue__);



/* harmony default export */ exports["a"] = {
  Dropdown: __WEBPACK_IMPORTED_MODULE_0__Dropdown_vue___default.a,
  DropdownItem: __WEBPACK_IMPORTED_MODULE_1__DropdownItem_vue___default.a
};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Footer_vue__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Footer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Footer_vue__);


/* harmony default export */ exports["a"] = {
  Footer: __WEBPACK_IMPORTED_MODULE_0__Footer_vue___default.a
};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Checkbox_vue__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Checkbox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Checkbox_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Radio_vue__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Radio_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Radio_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Select_vue__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Select_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TextInput_vue__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TextInput_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__TextInput_vue__);





/* harmony default export */ exports["a"] = {
  Checkbox: __WEBPACK_IMPORTED_MODULE_0__Checkbox_vue___default.a,
  Radio: __WEBPACK_IMPORTED_MODULE_1__Radio_vue___default.a,
  Select: __WEBPACK_IMPORTED_MODULE_2__Select_vue___default.a,
  TextInput: __WEBPACK_IMPORTED_MODULE_3__TextInput_vue___default.a
};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(0);


var Col = {
  functional: true,

  render: function (h, ref) {
    var data = ref.data;
    var children = ref.children;

    data.staticClass = data.staticClass ? ("col " + (data.staticClass)) : 'col'
    data.staticClass += " " + (Object.keys(data.attrs).join(' '))
    delete data.attrs

    return h('div', data, children)
  }
}

var Container = {
  functional: true,

  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;

    var staticClass = data.staticClass ? ("container " + (data.staticClass)) : 'container'

    if (data.attrs && typeof data.attrs.fluid !== 'undefined') {
      staticClass += ' container--fluid'
      data.attrs.fluid = undefined
    }

    data.staticClass = staticClass

    return h('div', data, children)
  }
}

var Content = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["a" /* createSimpleFunctional */])('content')
var Row = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["a" /* createSimpleFunctional */])('row')
var ColSpacer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["a" /* createSimpleFunctional */])('col--spacer')
var Spacer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["a" /* createSimpleFunctional */])('spacer')

/* harmony default export */ exports["a"] = {
  Col: Col,
  ColSpacer: ColSpacer,
  Container: Container,
  Content: Content,
  Spacer: Spacer,
  Row: Row
};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Icon_vue__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Icon_vue__);


/* harmony default export */ exports["a"] = {
  Icon: __WEBPACK_IMPORTED_MODULE_0__Icon_vue___default.a
};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(0);


var List = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["a" /* createSimpleFunctional */])('list', 'ul')
var ListItem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["a" /* createSimpleFunctional */])('list__item', 'li')
var ListItemTitle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["a" /* createSimpleFunctional */])('list__item-title', 'span')
var ListItemSubTitle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["a" /* createSimpleFunctional */])('list__item-sub-title', 'span')
var ListItemAction = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["a" /* createSimpleFunctional */])('list__item-action', 'span')
var ListItemActionTitle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["a" /* createSimpleFunctional */])('list__item-action-title', 'span')
var ListItemIcon = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["a" /* createSimpleFunctional */])('list__item-icon', 'v-icon')
var ListItemAvatar = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["a" /* createSimpleFunctional */])('list__item-avatar', 'v-icon')

/* harmony default export */ exports["a"] = {
  List: List,
  ListItem: ListItem,
  ListItemIcon: ListItemIcon,
  ListItemAvatar: ListItemAvatar,
  ListItemTitle: ListItemTitle,
  ListItemSubTitle: ListItemSubTitle,
  ListItemAction: ListItemAction,
  ListItemActionTitle: ListItemActionTitle
};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modal_vue__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Modal_vue__);


/* harmony default export */ exports["a"] = {
  Modal: __WEBPACK_IMPORTED_MODULE_0__Modal_vue___default.a
};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navbar_vue__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Navbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Navbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NavbarItem_vue__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NavbarItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__NavbarItem_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NavbarItems_vue__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NavbarItems_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__NavbarItems_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_helpers__ = __webpack_require__(0);





var NavbarLogo = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util_helpers__["a" /* createSimpleFunctional */])('navbar__logo')
var NavbarSideIcon = {
  functional: true,

  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;

    data.staticClass = data.staticClass ? ("navbar__side-icon " + (data.staticClass)) : 'navbar__side-icon'

    console.log(data)
    var icon = [h('v-icon', 'reorder')]
    var anchor = [h('a', { attrs: { href: '#!' } }, icon)]

    return h('div',data, [anchor])
  }
}

/* harmony default export */ exports["a"] = {
  Navbar: __WEBPACK_IMPORTED_MODULE_0__Navbar_vue___default.a,
  NavbarItem: __WEBPACK_IMPORTED_MODULE_1__NavbarItem_vue___default.a,
  NavbarItems: __WEBPACK_IMPORTED_MODULE_2__NavbarItems_vue___default.a,
  NavbarLogo: NavbarLogo,
  NavbarSideIcon: NavbarSideIcon
};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Pagination_vue__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Pagination_vue__);


/* harmony default export */ exports["a"] = {
  Pagination: __WEBPACK_IMPORTED_MODULE_0__Pagination_vue___default.a
};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Parallax_vue__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Parallax_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Parallax_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ParallaxContent_vue__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ParallaxContent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ParallaxContent_vue__);



/* harmony default export */ exports["a"] = {
  Parallax: __WEBPACK_IMPORTED_MODULE_0__Parallax_vue___default.a,
  ParallaxContent: __WEBPACK_IMPORTED_MODULE_1__ParallaxContent_vue___default.a
};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Progress_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Progress_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Progress_vue__);


/* harmony default export */ exports["a"] = {
  Progress: __WEBPACK_IMPORTED_MODULE_0__Progress_vue___default.a
};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sidebar_vue__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sidebar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Sidebar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SidebarGroup_vue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SidebarGroup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__SidebarGroup_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SidebarItem_vue__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SidebarItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__SidebarItem_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SidebarItems_vue__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SidebarItems_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__SidebarItems_vue__);





/* harmony default export */ exports["a"] = {
  Sidebar: __WEBPACK_IMPORTED_MODULE_0__Sidebar_vue___default.a,
  SidebarGroup: __WEBPACK_IMPORTED_MODULE_1__SidebarGroup_vue___default.a,
  SidebarItem: __WEBPACK_IMPORTED_MODULE_2__SidebarItem_vue___default.a,
  SidebarItems: __WEBPACK_IMPORTED_MODULE_3__SidebarItems_vue___default.a
};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Slider_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Slider_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Slider_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SliderItem_vue__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SliderItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__SliderItem_vue__);



/* harmony default export */ exports["a"] = {
  Slider: __WEBPACK_IMPORTED_MODULE_0__Slider_vue___default.a,
  SliderItem: __WEBPACK_IMPORTED_MODULE_1__SliderItem_vue___default.a
};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tab_vue__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Tab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TabsItem_vue__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TabsItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__TabsItem_vue__);




var Tabs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["a" /* createSimpleFunctional */])('tabs')
var TabsTabs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["a" /* createSimpleFunctional */])('tabs__tabs')
var TabsItems = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["a" /* createSimpleFunctional */])('tabs__items')
var TabsSlider = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["a" /* createSimpleFunctional */])('tabs__slider')

/* harmony default export */ exports["a"] = {
  Tab: __WEBPACK_IMPORTED_MODULE_1__Tab_vue___default.a,
  Tabs: Tabs,
  TabsItem: __WEBPACK_IMPORTED_MODULE_2__TabsItem_vue___default.a,
  TabsItems: TabsItems,
  TabsTabs: TabsTabs,
  TabsSlider: TabsSlider
};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(0);


function directive (el, binding) {
  var config = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["c" /* directiveConfig */])(
    binding,
    {
      icon: false,
      left: false,
      overlap: false
    }
  )

  if (config.overlap) { el.classList.add('badge--overlap') }
  if (config.icon)    { el.classList.add('badge--icon') }
  if (config.left)    { el.classList.add('badge--left') }

  el.dataset.badge = config.value
  el.classList.add('badge')
}

/* harmony default export */ exports["a"] = {
  bind: directive,
  updated: directive,
  componentUpdated: directive,
  unbind: function (el) {
    el.removeAttribute('data-badge')
    el.classList.remove('badge')
  }
};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
function dropdown (e, el, binding, bus, hover) {
  e.preventDefault()

  var component = document.getElementById(binding.arg)

  if (!component.dataset.hover && hover) {
    return
  }

  var width = 0
  var height = 0

  if (component.clientWidth > el.clientWidth
      && Boolean(component.dataset.right)
  ) {
    width = component.clientWidth - el.clientWidth
  }

  if (component.dataset.bottom == true) {
    height = el.clientHeight
  }

  component.style.minWidth = (el.clientWidth) + "px"
  component.style.left = (el.offsetLeft - width) + "px"
  component.style.top = (el.offsetTop + height) + "px"

  bus.pub(("dropdown:open:" + (binding.arg)))
}

function directive (el, binding, v) {
  el.dataset.dropdown = binding.arg

  // Directive binding happens before all components are rendered
  // When changing routes, dropdown element may not be ready
  // Do hover check within dropdown function
  el.onclick = function (e) { return dropdown(e, el, binding, v.context.$vuetify.bus, false); }
  el.onmouseenter = function (e) { return dropdown(e, el, binding, v.context.$vuetify.bus, true); }
}

/* harmony default export */ exports["a"] = {
  bind: directive,
  updated: directive,
  componentUpdated: directive,
  unbind: function unbind (el) {
    el.removeAttribute('onclick')
    el.removeAttribute('onmouseenter')
    el.removeAttribute('onmouseleave')
    el.removeAttribute('data-dropdown')
  }
};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
function directive (el, binding, v) {
  el.dataset.modal = binding.arg

  el.onclick = function (e) {
    e.preventDefault()
    
    v.context.$vuetify.bus.pub(("modal:open:" + (binding.arg)))
  }
}

/* harmony default export */ exports["a"] = {
  bind: directive,
  updated: directive,
  componentUpdated: directive,
  unbind: function unbind (el) {
    el.removeAttribute('onclick')
    el.removeAttribute('data-modal')
  }
};


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
function directive (el, binding, v) {
  el.dataset.sidebar = binding.arg

  el.onclick = function (e) {
    e.preventDefault()
    
    v.context.$vuetify.bus.pub(("sidebar:toggle:" + (binding.arg)))
  }
}

/* harmony default export */ exports["a"] = {
  bind: directive,
  updated: directive,
  componentUpdated: directive,
  unbind: function unbind (el) {
    el.removeAttribute('onclick')
    el.removeAttribute('data-sidebar')
  }
};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_helpers__ = __webpack_require__(0);


function directive (el, binding) {
  var config = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["c" /* directiveConfig */])(
    binding,
    { top: true }
  )

  el.dataset.tooltip = config.html
  el.classList.add('tooltip')
  el.classList.add(("tooltip--" + (config.value)))
}

/* harmony default export */ exports["a"] = {
  bind: directive,
  updated: directive,
  componentUpdated: directive,
  unbind: function unbind (el, binding) {
    var config = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_helpers__["c" /* directiveConfig */])(
      binding,
      { top: true }
    )
    
    el.removeAttribute('data-tooltip', config.html)
    el.classList.remove('tooltip')
    el.classList.remove(("tooltip--" + (config.value)))
  }
};

/***/ },
/* 71 */
/***/ function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    { throw TypeError('n must be a positive number'); }
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var this$1 = this;

  var er, handler, len, args, i, listeners;

  if (!this._events)
    { this._events = {}; }

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    { return false; }

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      { listeners[i].apply(this$1, args); }
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    { throw TypeError('listener must be a function'); }

  if (!this._events)
    { this._events = {}; }

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    { this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener); }

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    { this._events[type] = listener; }
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    { this._events[type].push(listener); }
  else
    // Adding the second element, need to change to array.
    { this._events[type] = [this._events[type], listener]; }

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    { throw TypeError('listener must be a function'); }

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    { throw TypeError('listener must be a function'); }

  if (!this._events || !this._events[type])
    { return this; }

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      { this.emit('removeListener', type, listener); }

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      { return this; }

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      { this.emit('removeListener', type, listener); }
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var this$1 = this;

  var key, listeners;

  if (!this._events)
    { return this; }

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      { this._events = {}; }
    else if (this._events[type])
      { delete this._events[type]; }
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this$1._events) {
      if (key === 'removeListener') { continue; }
      this$1.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      { this$1.removeListener(type, listeners[listeners.length - 1]); }
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    { ret = []; }
  else if (isFunction(this._events[type]))
    { ret = [this._events[type]]; }
  else
    { ret = this._events[type].slice(); }
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      { return 1; }
    else if (evlistener)
      { return evlistener.length; }
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(10)

/* template */
var __vue_template__ = __webpack_require__(128)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(11)

/* template */
var __vue_template__ = __webpack_require__(111)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(12)

/* template */
var __vue_template__ = __webpack_require__(132)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(13)

/* template */
var __vue_template__ = __webpack_require__(115)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(14)

/* template */
var __vue_template__ = __webpack_require__(116)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(112)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(16)

/* template */
var __vue_template__ = __webpack_require__(140)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(17)

/* template */
var __vue_template__ = __webpack_require__(135)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(18)

/* template */
var __vue_template__ = __webpack_require__(130)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(19)

/* template */
var __vue_template__ = __webpack_require__(127)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(20)

/* template */
var __vue_template__ = __webpack_require__(141)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(21)

/* template */
var __vue_template__ = __webpack_require__(110)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(22)

/* template */
var __vue_template__ = __webpack_require__(134)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(23)

/* template */
var __vue_template__ = __webpack_require__(113)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(24)

/* template */
var __vue_template__ = __webpack_require__(120)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(25)

/* template */
var __vue_template__ = __webpack_require__(138)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(26)

/* template */
var __vue_template__ = __webpack_require__(117)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(27)

/* template */
var __vue_template__ = __webpack_require__(107)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(28)

/* template */
var __vue_template__ = __webpack_require__(121)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(29)

/* template */
var __vue_template__ = __webpack_require__(122)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(30)

/* template */
var __vue_template__ = __webpack_require__(126)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(31)

/* template */
var __vue_template__ = __webpack_require__(114)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(32)

/* template */
var __vue_template__ = __webpack_require__(131)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(33)

/* template */
var __vue_template__ = __webpack_require__(129)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(34)

/* template */
var __vue_template__ = __webpack_require__(137)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(35)

/* template */
var __vue_template__ = __webpack_require__(123)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(36)

/* template */
var __vue_template__ = __webpack_require__(133)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(37)

/* template */
var __vue_template__ = __webpack_require__(124)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(38)

/* template */
var __vue_template__ = __webpack_require__(136)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(39)

/* template */
var __vue_template__ = __webpack_require__(109)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(40)

/* template */
var __vue_template__ = __webpack_require__(139)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(41)

/* template */
var __vue_template__ = __webpack_require__(119)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(42)

/* template */
var __vue_template__ = __webpack_require__(108)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(43)

/* template */
var __vue_template__ = __webpack_require__(125)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(44)

/* template */
var __vue_template__ = __webpack_require__(118)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 107 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('div', {
    staticClass: "input-group",
    class: _vm.classes
  }, [_vm._c('label', {
    attrs: {
      "for": _vm.id
    },
    domProps: {
      "innerHTML": _vm._s(_vm.label)
    }
  }), _vm._c('input', {
    ref: "input",
    attrs: {
      "type": "text",
      "name": _vm.name,
      "id": _vm.id,
      "placeholder": _vm.placeholder
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "blur": function($event) {
        _vm.focused = false
      },
      "input": function($event) {
        _vm.$emit('input', $event.target.value)
      },
      "focus": function($event) {
        _vm.focused = true
      }
    }
  })])
},staticRenderFns: []}

/***/ },
/* 108 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('transition', {
    attrs: {
      "name": _vm.transition
    }
  }, [_vm._c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.active),
      expression: "active"
    }],
    staticClass: "slider__item",
    class: {
      'reverse': _vm.reverse
    },
    style: (_vm.styles)
  }, [_vm._t("default")], true)])
},staticRenderFns: []}

/***/ },
/* 109 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('li', [(!_vm.router) ? _vm._c('a', {
    staticClass: "sidebar__item",
    attrs: {
      "href": _vm.item.href
    },
    on: {
      "click": function($event) {
        _vm.click()
      }
    }
  }, [(_vm.item.icon) ? _vm._c('v-icon', [_vm._v(_vm._s(_vm.item.icon))]) : _vm._e(), _vm._c('span', {
    domProps: {
      "textContent": _vm._s(_vm.item.text)
    }
  }), _vm._t("default")], true) : _vm._c('router-link', {
    staticClass: "sidebar__item",
    attrs: {
      "active-class": "sidebar__item--active",
      "exact": _vm.item.href === '/',
      "to": _vm.item.href
    },
    nativeOn: {
      "click": function($event) {
        _vm.click()
      }
    }
  }, [(_vm.item.icon) ? _vm._c('v-icon', [_vm._v(_vm._s(_vm.item.icon))]) : _vm._e(), _vm._c('span', {
    domProps: {
      "textContent": _vm._s(_vm.item.text)
    }
  }), _vm._t("default")], true)])
},staticRenderFns: []}

/***/ },
/* 110 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('ul', {
    staticClass: "dropdown",
    class: _vm.classes,
    attrs: {
      "data-bottom": _vm.bottom,
      "data-hover": _vm.hover,
      "data-right": _vm.right,
      "id": _vm.id
    }
  }, [_vm._l((_vm.items), function(item) {
    return _vm._c('v-dropdown-item', {
      attrs: {
        "item": item
      }
    })
  }), _vm._t("default")], true)
},staticRenderFns: []}

/***/ },
/* 111 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('div', {
    staticClass: "with",
    class: _vm.classes,
    attrs: {
      "id": _vm.id
    }
  }, [_vm._t("default")], true)
},staticRenderFns: []}

/***/ },
/* 112 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('div', {
    staticClass: "card",
    class: _vm.classes,
    style: (_vm.styles)
  }, [_vm._t("default")], true)
},staticRenderFns: []}

/***/ },
/* 113 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('footer', {
    staticClass: "footer"
  }, [_vm._t("default")], true)
},staticRenderFns: []}

/***/ },
/* 114 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('li', [_vm._c('a', {
    staticClass: "navbar__item",
    attrs: {
      "href": _vm.item.href
    }
  }, [(!_vm.item.icon) ? _vm._c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.item.text)
    }
  }) : _vm._c('v-icon', [_vm._v(_vm._s(_vm.item.text))])])])
},staticRenderFns: []}

/***/ },
/* 115 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('li', [_vm._c('a', {
    staticClass: "breadcrumbs__item",
    class: _vm.classes,
    attrs: {
      "href": _vm.item.href
    },
    domProps: {
      "innerHTML": _vm._s(_vm.item.text)
    }
  })])
},staticRenderFns: []}

/***/ },
/* 116 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('button', {
    staticClass: "btn",
    class: _vm.classes,
    attrs: {
      "type": _vm.type
    }
  }, [_vm._t("default")], true)
},staticRenderFns: []}

/***/ },
/* 117 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('div', {
    staticClass: "input-group",
    class: _vm.classes
  }, [_vm._c('label', {
    attrs: {
      "for": _vm.id
    },
    domProps: {
      "textContent": _vm._s(_vm.label)
    }
  }), _vm._c('select', {
    ref: "select",
    attrs: {
      "id": _vm.id,
      "name": _vm.name,
      "multiple": _vm.multiple
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "blur": function($event) {
        _vm.focused = false
      },
      "click": function($event) {
        _vm.focused = true
      },
      "input": _vm.update
    }
  }, [_vm._c('option', {
    attrs: {
      "value": "",
      "disabled": "disabled",
      "selected": "selected"
    },
    domProps: {
      "textContent": _vm._s(_vm.defaultText)
    }
  }), _vm._l((_vm.options), function(o) {
    return _vm._c('option', {
      ref: "options",
      refInFor: true,
      domProps: {
        "value": o.value,
        "textContent": _vm._s(o.text)
      }
    })
  })], true)])
},staticRenderFns: []}

/***/ },
/* 118 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('transition', {
    attrs: {
      "name": _vm.transition
    }
  }, [_vm._c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.active),
      expression: "active"
    }],
    staticClass: "tabs__item shift",
    attrs: {
      "id": _vm.id
    }
  }, [_vm._t("default")], true)])
},staticRenderFns: []}

/***/ },
/* 119 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('div', {
    staticClass: "slider"
  }, [_vm._c('div', {
    staticClass: "slider__left"
  }, [_vm._c('v-btn', {
    attrs: {
      "icon": "icon"
    },
    nativeOn: {
      "click": function($event) {
        _vm.prev($event)
      }
    }
  }, [_vm._c('v-icon', [_vm._v("chevron_left")])])]), _vm._c('div', {
    staticClass: "slider__right"
  }, [_vm._c('v-btn', {
    attrs: {
      "icon": "icon"
    },
    nativeOn: {
      "click": function($event) {
        _vm.next($event)
      }
    }
  }, [_vm._c('v-icon', [_vm._v("chevron_right")])])]), _vm._c('div', {
    staticClass: "slider__controls"
  }, _vm._l((_vm.items), function(item, index) {
    return _vm._c('v-btn', {
      staticClass: "slider__controls__item",
      class: {
        'slider__controls__item--active': index === _vm.current
      },
      attrs: {
        "icon": "icon"
      }
    }, [_vm._c('v-icon', {
      nativeOn: {
        "click": function($event) {
          _vm.select(index)
        }
      }
    }, [_vm._v(_vm._s(_vm.icon))])])
  })), _vm._t("default")], true)
},staticRenderFns: []}

/***/ },
/* 120 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('div', {
    staticClass: "input-group"
  }, [_vm._c('input', {
    ref: "input",
    class: _vm.classes,
    attrs: {
      "type": "checkbox",
      "disabled": _vm.disabled,
      "id": _vm.id,
      "name": _vm.name
    },
    domProps: {
      "value": _vm.value
    }
  }), _vm._c('label', {
    attrs: {
      "for": _vm.id
    },
    domProps: {
      "innerHTML": _vm._s(_vm.label)
    }
  })])
},staticRenderFns: []}

/***/ },
/* 121 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('i', {
    staticClass: "material-icons icon",
    class: _vm.classes
  }, [_vm._c('span', [_vm._t("default")], true)])
},staticRenderFns: []}

/***/ },
/* 122 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('div', {
    staticClass: "modal-overlay",
    class: {
      'modal-overlay--open': this.active
    }
  }, [_vm._c('transition', {
    attrs: {
      "name": "modal"
    }
  }, [_vm._c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.active),
      expression: "active"
    }],
    ref: "modal",
    staticClass: "modal",
    class: _vm.classes,
    attrs: {
      "id": _vm.id
    }
  }, [_vm._t("default")], true)])])
},staticRenderFns: []}

/***/ },
/* 123 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('div', {
    staticClass: "parallax__content",
    style: (_vm.styles)
  }, [_vm._t("default")], true)
},staticRenderFns: []}

/***/ },
/* 124 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('aside', {
    staticClass: "sidebar",
    class: _vm.classes,
    style: (_vm.styles),
    attrs: {
      "id": _vm.id
    }
  }, [_vm._t("top"), (_vm.items.length > 0) ? _vm._c('v-sidebar-items', {
    attrs: {
      "items": _vm.items
    }
  }) : _vm._e(), _vm._t("default")], true)
},staticRenderFns: []}

/***/ },
/* 125 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('a', {
    staticClass: "tabs__tab",
    class: _vm.classes,
    attrs: {
      "href": _vm.href
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.click($event)
      }
    }
  }, [_vm._t("default")], true)
},staticRenderFns: []}

/***/ },
/* 126 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('nav', {
    staticClass: "navbar",
    class: _vm.classes
  }, [_vm._t("default")], true)
},staticRenderFns: []}

/***/ },
/* 127 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('transition', {
    on: {
      "enter": _vm.enter,
      "leave": _vm.leave
    }
  }, [_vm._c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.active),
      expression: "active"
    }],
    staticClass: "collapsible__body",
    attrs: {
      "uid": _vm._uid
    }
  }, [_vm._t("default")], true)])
},staticRenderFns: []}

/***/ },
/* 128 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.value),
      expression: "value"
    }],
    staticClass: "alert",
    class: _vm.classes
  }, [_vm._c('v-icon', {
    staticClass: "alert__icon"
  }, [_vm._v(_vm._s(_vm.icon))]), _vm._c('div', [_vm._t("default")], true), (_vm.close) ? _vm._c('a', {
    staticClass: "alert__close",
    attrs: {
      "href": "#!"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.$emit('input', false)
      }
    }
  }, [_vm._c('v-icon', {
    attrs: {
      "right": "right"
    }
  }, [_vm._v("cancel")])]) : _vm._e()])
},staticRenderFns: []}

/***/ },
/* 129 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('ul', {
    staticClass: "pagination",
    class: _vm.classes
  }, [_vm._c('li', [_vm._c('a', {
    staticClass: "pagination__navigation",
    class: {
      'pagination__navigation--disabled': _vm.value === 1
    },
    attrs: {
      "href": "#!"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.$emit('input', _vm.value - 1)
      }
    }
  }, [_vm._c('v-icon', [_vm._v("chevron_left")])])]), _vm._l((_vm.items), function(n) {
    return _vm._c('li', [(!isNaN(n)) ? _vm._c('a', {
      staticClass: "pagination__item",
      class: {
        'pagination__item--active': n === _vm.selected
      },
      attrs: {
        "href": "#!"
      },
      domProps: {
        "textContent": _vm._s(n)
      },
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.$emit('input', n)
        }
      }
    }) : _vm._c('span', {
      staticClass: "pagination__more",
      domProps: {
        "textContent": _vm._s(n)
      }
    })])
  }), _vm._c('li', [_vm._c('a', {
    staticClass: "pagination__navigation",
    class: {
      'pagination__navigation--disabled': _vm.value === _vm.length
    },
    attrs: {
      "href": "#!"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.$emit('input', _vm.value + 1)
      }
    }
  }, [_vm._c('v-icon', [_vm._v("chevron_right")])])])], true)
},staticRenderFns: []}

/***/ },
/* 130 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('ul', {
    class: _vm.classes
  }, [_vm._t("default")], true)
},staticRenderFns: []}

/***/ },
/* 131 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('ul', {
    staticClass: "navbar__items"
  }, [_vm._l((_vm.items), function(item) {
    return _vm._c('v-navbar-item', {
      attrs: {
        "item": item
      }
    })
  }), _vm._t("default")], true)
},staticRenderFns: []}

/***/ },
/* 132 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('ul', {
    staticClass: "breadcrumbs",
    class: _vm.classes,
    attrs: {
      "items": _vm.items
    }
  }, [_vm._l((_vm.items), function(item) {
    return _vm._c('v-breadcrumbs-item', {
      attrs: {
        "item": item,
        "disabled": item.disabled
      }
    })
  }), _vm._t("default")], true)
},staticRenderFns: []}

/***/ },
/* 133 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('div', {
    staticClass: "progress",
    class: _vm.classes,
    style: ({
      height: this.height
    })
  }, [_vm._c('div', {
    staticClass: "progress__bar",
    style: (_vm.styles)
  })])
},staticRenderFns: []}

/***/ },
/* 134 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('li', [_vm._c('a', {
    staticClass: "dropdown__item",
    attrs: {
      "href": _vm.item.href
    },
    domProps: {
      "innerHTML": _vm._s(_vm.item.text)
    }
  })])
},staticRenderFns: []}

/***/ },
/* 135 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.value),
      expression: "value"
    }],
    staticClass: "chip",
    class: _vm.classes
  }, [_vm._t("default"), (_vm.close) ? _vm._c('a', {
    staticClass: "chip__close",
    attrs: {
      "href": "#!"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.$emit('input', false)
      }
    }
  }, [_vm._c('v-icon', {
    attrs: {
      "right": "right"
    }
  }, [_vm._v("cancel")])]) : _vm._e()], true)
},staticRenderFns: []}

/***/ },
/* 136 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('li', {
    staticClass: "sidebar__group"
  }, [_vm._c('a', {
    staticClass: "sidebar__item-header",
    class: {
      'sidebar__item-header--active': _vm.active
    },
    attrs: {
      "href": _vm.item.href
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.toggle()
      }
    }
  }, [(_vm.item.icon) ? _vm._c('v-icon', [_vm._v(_vm._s(_vm.item.icon))]) : _vm._e(), _vm._c('span', {
    domProps: {
      "textContent": _vm._s(_vm.item.text)
    }
  })]), _vm._c('transition', {
    on: {
      "enter": _vm.enter,
      "leave": _vm.leave
    }
  }, [_vm._c('v-sidebar-items', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.active),
      expression: "active"
    }],
    ref: "group"
  }, [_vm._t("default")], true)])])
},staticRenderFns: []}

/***/ },
/* 137 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('div', {
    staticClass: "parallax",
    style: ({
      minHeight: this.height + 'px'
    })
  }, [_vm._c('div', {
    staticClass: "parallax__image-container"
  }, [_vm._c('img', {
    ref: "img",
    staticClass: "parallax__image",
    style: (_vm.styles),
    attrs: {
      "src": _vm.src
    }
  }), _vm._t("default")], true)])
},staticRenderFns: []}

/***/ },
/* 138 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('div', {
    staticClass: "input-group"
  }, [_vm._c('input', {
    ref: "input",
    class: _vm.classes,
    attrs: {
      "type": "radio",
      "disabled": _vm.disabled,
      "id": _vm.id,
      "name": _vm.name
    },
    domProps: {
      "value": _vm.value
    }
  }), _vm._c('label', {
    attrs: {
      "for": _vm.id
    },
    domProps: {
      "innerHTML": _vm._s(_vm.label)
    }
  })])
},staticRenderFns: []}

/***/ },
/* 139 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('ul', {
    staticClass: "sidebar__items"
  }, [_vm._l((_vm.items), function(item) {
    return [(item.items) ? _vm._c('v-sidebar-group', {
      attrs: {
        "item": item.parent
      }
    }, _vm._l((item.items), function(j) {
      return _vm._c('v-sidebar-item', {
        attrs: {
          "item": j,
          "router": item.router || true
        }
      })
    })) : _vm._c('v-sidebar-item', {
      attrs: {
        "item": item,
        "router": item.router || true
      }
    })]
  }), _vm._t("default")], true)
},staticRenderFns: []}

/***/ },
/* 140 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('div', {
    staticClass: "card__row",
    class: _vm.classes,
    style: (_vm.styles)
  }, [_vm._t("default")], true)
},staticRenderFns: []}

/***/ },
/* 141 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('div', {
    staticClass: "collapsible__header",
    on: {
      "click": _vm.click
    }
  }, [_vm._t("default")], true)
},staticRenderFns: []}

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_bus__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_index__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_init__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_load__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__functions_toast__ = __webpack_require__(7);







function plugin(Vue) {
  Object.keys(__WEBPACK_IMPORTED_MODULE_2__directives_index__["a" /* default */]).forEach(function (key) {
    Vue.directive(key, __WEBPACK_IMPORTED_MODULE_2__directives_index__["a" /* default */][key])
  })
  
  Object.keys(__WEBPACK_IMPORTED_MODULE_1__components_index__["a" /* default */]).forEach(function (key) {
    Vue.component(key, __WEBPACK_IMPORTED_MODULE_1__components_index__["a" /* default */][key])
  })

  Vue.prototype.$vuetify = {
    bus: __WEBPACK_IMPORTED_MODULE_0__util_bus__["a" /* default */],

    load: __WEBPACK_IMPORTED_MODULE_4__util_load__["a" /* default */],

    init: __WEBPACK_IMPORTED_MODULE_3__util_init__["a" /* default */],

    toast: __WEBPACK_IMPORTED_MODULE_5__functions_toast__["a" /* default */]
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

module.exports = plugin

/***/ }
/******/ ]);
});

/***/ },
/* 46 */
/***/ function(module, exports) {

module.exports = function(hljs) {
  var VAR = {
    className: 'variable',
    variants: [
      {begin: /\$[\w\d#@][\w\d_]*/},
      {begin: /\$\{(.*?)}/}
    ]
  };
  var QUOTE_STRING = {
    className: 'string',
    begin: /"/, end: /"/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      VAR,
      {
        className: 'variable',
        begin: /\$\(/, end: /\)/,
        contains: [hljs.BACKSLASH_ESCAPE]
      }
    ]
  };
  var APOS_STRING = {
    className: 'string',
    begin: /'/, end: /'/
  };

  return {
    aliases: ['sh', 'zsh'],
    lexemes: /-?[a-z\._]+/,
    keywords: {
      keyword:
        'if then else elif fi for while in do done case esac function',
      literal:
        'true false',
      built_in:
        // Shell built-ins
        // http://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
        'break cd continue eval exec exit export getopts hash pwd readonly return shift test times ' +
        'trap umask unset ' +
        // Bash built-ins
        'alias bind builtin caller command declare echo enable help let local logout mapfile printf ' +
        'read readarray source type typeset ulimit unalias ' +
        // Shell modifiers
        'set shopt ' +
        // Zsh built-ins
        'autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles ' +
        'compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate ' +
        'fc fg float functions getcap getln history integer jobs kill limit log noglob popd print ' +
        'pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit ' +
        'unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof ' +
        'zpty zregexparse zsocket zstyle ztcp',
      _:
        '-ne -eq -lt -gt -f -d -e -s -l -a' // relevance booster
    },
    contains: [
      {
        className: 'meta',
        begin: /^#![^\n]+sh\s*$/,
        relevance: 10
      },
      {
        className: 'function',
        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
        returnBegin: true,
        contains: [hljs.inherit(hljs.TITLE_MODE, {begin: /\w[\w\d_]*/})],
        relevance: 0
      },
      hljs.HASH_COMMENT_MODE,
      QUOTE_STRING,
      APOS_STRING,
      VAR
    ]
  };
};

/***/ },
/* 47 */
/***/ function(module, exports) {

module.exports = function(hljs) {
  var IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
  var KEYWORDS = {
    keyword:
      'in of if for while finally var new function do return void else break catch ' +
      'instanceof with throw case default try this switch continue typeof delete ' +
      'let yield const export super debugger as async await static ' +
      // ECMAScript 6 modules import
      'import from as'
    ,
    literal:
      'true false null undefined NaN Infinity',
    built_in:
      'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +
      'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +
      'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +
      'TypeError URIError Number Math Date String RegExp Array Float32Array ' +
      'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +
      'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +
      'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' +
      'Promise'
  };
  var EXPRESSIONS;
  var NUMBER = {
    className: 'number',
    variants: [
      { begin: '\\b(0[bB][01]+)' },
      { begin: '\\b(0[oO][0-7]+)' },
      { begin: hljs.C_NUMBER_RE }
    ],
    relevance: 0
  };
  var SUBST = {
    className: 'subst',
    begin: '\\$\\{', end: '\\}',
    keywords: KEYWORDS,
    contains: []  // defined later
  };
  var TEMPLATE_STRING = {
    className: 'string',
    begin: '`', end: '`',
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  SUBST.contains = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    TEMPLATE_STRING,
    NUMBER,
    hljs.REGEXP_MODE
  ]
  var PARAMS_CONTAINS = SUBST.contains.concat([
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.C_LINE_COMMENT_MODE
  ]);

  return {
    aliases: ['js', 'jsx'],
    keywords: KEYWORDS,
    contains: [
      {
        className: 'meta',
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
      },
      {
        className: 'meta',
        begin: /^#!/, end: /$/
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      TEMPLATE_STRING,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      NUMBER,
      { // object attr container
        begin: /[{,]\s*/, relevance: 0,
        contains: [
          {
            begin: IDENT_RE + '\\s*:', returnBegin: true,
            relevance: 0,
            contains: [{className: 'attr', begin: IDENT_RE, relevance: 0}]
          }
        ]
      },
      { // "value" container
        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.REGEXP_MODE,
          {
            className: 'function',
            begin: '(\\(.*?\\)|' + IDENT_RE + ')\\s*=>', returnBegin: true,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  {
                    begin: IDENT_RE
                  },
                  {
                    begin: /\(\s*\)/,
                  },
                  {
                    begin: /\(/, end: /\)/,
                    excludeBegin: true, excludeEnd: true,
                    keywords: KEYWORDS,
                    contains: PARAMS_CONTAINS
                  }
                ]
              }
            ]
          },
          { // E4X / JSX
            begin: /</, end: /(\/\w+|\w+\/)>/,
            subLanguage: 'xml',
            contains: [
              {begin: /<\w+\s*\/>/, skip: true},
              {
                begin: /<\w+/, end: /(\/\w+|\w+\/)>/, skip: true,
                contains: [
                  {begin: /<\w+\s*\/>/, skip: true},
                  'self'
                ]
              }
            ]
          }
        ],
        relevance: 0
      },
      {
        className: 'function',
        beginKeywords: 'function', end: /\{/, excludeEnd: true,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {begin: IDENT_RE}),
          {
            className: 'params',
            begin: /\(/, end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            contains: PARAMS_CONTAINS
          }
        ],
        illegal: /\[|%/
      },
      {
        begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      },
      hljs.METHOD_GUARD,
      { // ES6 class
        className: 'class',
        beginKeywords: 'class', end: /[{;=]/, excludeEnd: true,
        illegal: /[:"\[\]]/,
        contains: [
          {beginKeywords: 'extends'},
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        beginKeywords: 'constructor', end: /\{/, excludeEnd: true
      }
    ],
    illegal: /#(?!!)/
  };
};

/***/ },
/* 48 */
/***/ function(module, exports) {

module.exports = function(hljs) {
  var IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
  var VARIABLE = {
    className: 'variable',
    begin: '(\\$' + IDENT_RE + ')\\b'
  };
  var HEXCOLOR = {
    className: 'number', begin: '#[0-9A-Fa-f]+'
  };
  var DEF_INTERNALS = {
    className: 'attribute',
    begin: '[A-Z\\_\\.\\-]+', end: ':',
    excludeEnd: true,
    illegal: '[^\\s]',
    starts: {
      endsWithParent: true, excludeEnd: true,
      contains: [
        HEXCOLOR,
        hljs.CSS_NUMBER_MODE,
        hljs.QUOTE_STRING_MODE,
        hljs.APOS_STRING_MODE,
        hljs.C_BLOCK_COMMENT_MODE,
        {
          className: 'meta', begin: '!important'
        }
      ]
    }
  };
  return {
    case_insensitive: true,
    illegal: '[=/|\']',
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      {
        className: 'selector-id', begin: '\\#[A-Za-z0-9_-]+',
        relevance: 0
      },
      {
        className: 'selector-class', begin: '\\.[A-Za-z0-9_-]+',
        relevance: 0
      },
      {
        className: 'selector-attr', begin: '\\[', end: '\\]',
        illegal: '$'
      },
      {
        className: 'selector-tag', // begin: IDENT_RE, end: '[,|\\s]'
        begin: '\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b',
        relevance: 0
      },
      {
        begin: ':(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)'
      },
      {
        begin: '::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)'
      },
      VARIABLE,
      {
        className: 'attribute',
        begin: '\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b',
        illegal: '[^\\s]'
      },
      {
        begin: '\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b'
      },
      {
        begin: ':', end: ';',
        contains: [
          VARIABLE,
          HEXCOLOR,
          hljs.CSS_NUMBER_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.APOS_STRING_MODE,
          {
            className: 'meta', begin: '!important'
          }
        ]
      },
      {
        begin: '@', end: '[{;]',
        keywords: 'mixin include extend for if else each while charset import debug media page content font-face namespace warn',
        contains: [
          VARIABLE,
          hljs.QUOTE_STRING_MODE,
          hljs.APOS_STRING_MODE,
          HEXCOLOR,
          hljs.CSS_NUMBER_MODE,
          {
            begin: '\\s[A-Za-z0-9_.-]+',
            relevance: 0
          }
        ]
      }
    ]
  };
};

/***/ },
/* 49 */
/***/ function(module, exports) {

module.exports = function(hljs) {

  var VARIABLE = {
    className: 'variable',
    begin: '\\$' + hljs.IDENT_RE
  };

  var HEX_COLOR = {
    className: 'number',
    begin: '#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})'
  };

  var AT_KEYWORDS = [
    'charset',
    'css',
    'debug',
    'extend',
    'font-face',
    'for',
    'import',
    'include',
    'media',
    'mixin',
    'page',
    'warn',
    'while'
  ];

  var PSEUDO_SELECTORS = [
    'after',
    'before',
    'first-letter',
    'first-line',
    'active',
    'first-child',
    'focus',
    'hover',
    'lang',
    'link',
    'visited'
  ];

  var TAGS = [
    'a',
    'abbr',
    'address',
    'article',
    'aside',
    'audio',
    'b',
    'blockquote',
    'body',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'dd',
    'del',
    'details',
    'dfn',
    'div',
    'dl',
    'dt',
    'em',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'header',
    'hgroup',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'label',
    'legend',
    'li',
    'mark',
    'menu',
    'nav',
    'object',
    'ol',
    'p',
    'q',
    'quote',
    'samp',
    'section',
    'span',
    'strong',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'tr',
    'ul',
    'var',
    'video'
  ];

  var TAG_END = '[\\.\\s\\n\\[\\:,]';

  var ATTRIBUTES = [
    'align-content',
    'align-items',
    'align-self',
    'animation',
    'animation-delay',
    'animation-direction',
    'animation-duration',
    'animation-fill-mode',
    'animation-iteration-count',
    'animation-name',
    'animation-play-state',
    'animation-timing-function',
    'auto',
    'backface-visibility',
    'background',
    'background-attachment',
    'background-clip',
    'background-color',
    'background-image',
    'background-origin',
    'background-position',
    'background-repeat',
    'background-size',
    'border',
    'border-bottom',
    'border-bottom-color',
    'border-bottom-left-radius',
    'border-bottom-right-radius',
    'border-bottom-style',
    'border-bottom-width',
    'border-collapse',
    'border-color',
    'border-image',
    'border-image-outset',
    'border-image-repeat',
    'border-image-slice',
    'border-image-source',
    'border-image-width',
    'border-left',
    'border-left-color',
    'border-left-style',
    'border-left-width',
    'border-radius',
    'border-right',
    'border-right-color',
    'border-right-style',
    'border-right-width',
    'border-spacing',
    'border-style',
    'border-top',
    'border-top-color',
    'border-top-left-radius',
    'border-top-right-radius',
    'border-top-style',
    'border-top-width',
    'border-width',
    'bottom',
    'box-decoration-break',
    'box-shadow',
    'box-sizing',
    'break-after',
    'break-before',
    'break-inside',
    'caption-side',
    'clear',
    'clip',
    'clip-path',
    'color',
    'column-count',
    'column-fill',
    'column-gap',
    'column-rule',
    'column-rule-color',
    'column-rule-style',
    'column-rule-width',
    'column-span',
    'column-width',
    'columns',
    'content',
    'counter-increment',
    'counter-reset',
    'cursor',
    'direction',
    'display',
    'empty-cells',
    'filter',
    'flex',
    'flex-basis',
    'flex-direction',
    'flex-flow',
    'flex-grow',
    'flex-shrink',
    'flex-wrap',
    'float',
    'font',
    'font-family',
    'font-feature-settings',
    'font-kerning',
    'font-language-override',
    'font-size',
    'font-size-adjust',
    'font-stretch',
    'font-style',
    'font-variant',
    'font-variant-ligatures',
    'font-weight',
    'height',
    'hyphens',
    'icon',
    'image-orientation',
    'image-rendering',
    'image-resolution',
    'ime-mode',
    'inherit',
    'initial',
    'justify-content',
    'left',
    'letter-spacing',
    'line-height',
    'list-style',
    'list-style-image',
    'list-style-position',
    'list-style-type',
    'margin',
    'margin-bottom',
    'margin-left',
    'margin-right',
    'margin-top',
    'marks',
    'mask',
    'max-height',
    'max-width',
    'min-height',
    'min-width',
    'nav-down',
    'nav-index',
    'nav-left',
    'nav-right',
    'nav-up',
    'none',
    'normal',
    'object-fit',
    'object-position',
    'opacity',
    'order',
    'orphans',
    'outline',
    'outline-color',
    'outline-offset',
    'outline-style',
    'outline-width',
    'overflow',
    'overflow-wrap',
    'overflow-x',
    'overflow-y',
    'padding',
    'padding-bottom',
    'padding-left',
    'padding-right',
    'padding-top',
    'page-break-after',
    'page-break-before',
    'page-break-inside',
    'perspective',
    'perspective-origin',
    'pointer-events',
    'position',
    'quotes',
    'resize',
    'right',
    'tab-size',
    'table-layout',
    'text-align',
    'text-align-last',
    'text-decoration',
    'text-decoration-color',
    'text-decoration-line',
    'text-decoration-style',
    'text-indent',
    'text-overflow',
    'text-rendering',
    'text-shadow',
    'text-transform',
    'text-underline-position',
    'top',
    'transform',
    'transform-origin',
    'transform-style',
    'transition',
    'transition-delay',
    'transition-duration',
    'transition-property',
    'transition-timing-function',
    'unicode-bidi',
    'vertical-align',
    'visibility',
    'white-space',
    'widows',
    'width',
    'word-break',
    'word-spacing',
    'word-wrap',
    'z-index'
  ];

  // illegals
  var ILLEGAL = [
    '\\?',
    '(\\bReturn\\b)', // monkey
    '(\\bEnd\\b)', // monkey
    '(\\bend\\b)', // vbscript
    '(\\bdef\\b)', // gradle
    ';', // a whole lot of languages
    '#\\s', // markdown
    '\\*\\s', // markdown
    '===\\s', // markdown
    '\\|',
    '%', // prolog
  ];

  return {
    aliases: ['styl'],
    case_insensitive: false,
    keywords: 'if else for in',
    illegal: '(' + ILLEGAL.join('|') + ')',
    contains: [

      // strings
      hljs.QUOTE_STRING_MODE,
      hljs.APOS_STRING_MODE,

      // comments
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,

      // hex colors
      HEX_COLOR,

      // class tag
      {
        begin: '\\.[a-zA-Z][a-zA-Z0-9_-]*' + TAG_END,
        returnBegin: true,
        contains: [
          {className: 'selector-class', begin: '\\.[a-zA-Z][a-zA-Z0-9_-]*'}
        ]
      },

      // id tag
      {
        begin: '\\#[a-zA-Z][a-zA-Z0-9_-]*' + TAG_END,
        returnBegin: true,
        contains: [
          {className: 'selector-id', begin: '\\#[a-zA-Z][a-zA-Z0-9_-]*'}
        ]
      },

      // tags
      {
        begin: '\\b(' + TAGS.join('|') + ')' + TAG_END,
        returnBegin: true,
        contains: [
          {className: 'selector-tag', begin: '\\b[a-zA-Z][a-zA-Z0-9_-]*'}
        ]
      },

      // psuedo selectors
      {
        begin: '&?:?:\\b(' + PSEUDO_SELECTORS.join('|') + ')' + TAG_END
      },

      // @ keywords
      {
        begin: '\@(' + AT_KEYWORDS.join('|') + ')\\b'
      },

      // variables
      VARIABLE,

      // dimension
      hljs.CSS_NUMBER_MODE,

      // number
      hljs.NUMBER_MODE,

      // functions
      //  - only from beginning of line + whitespace
      {
        className: 'function',
        begin: '^[a-zA-Z][a-zA-Z0-9_\-]*\\(.*\\)',
        illegal: '[\\n]',
        returnBegin: true,
        contains: [
          {className: 'title', begin: '\\b[a-zA-Z][a-zA-Z0-9_\-]*'},
          {
            className: 'params',
            begin: /\(/,
            end: /\)/,
            contains: [
              HEX_COLOR,
              VARIABLE,
              hljs.APOS_STRING_MODE,
              hljs.CSS_NUMBER_MODE,
              hljs.NUMBER_MODE,
              hljs.QUOTE_STRING_MODE
            ]
          }
        ]
      },

      // attributes
      //  - only from beginning of line + whitespace
      //  - must have whitespace after it
      {
        className: 'attribute',
        begin: '\\b(' + ATTRIBUTES.reverse().join('|') + ')\\b',
        starts: {
          // value container
          end: /;|$/,
          contains: [
            HEX_COLOR,
            VARIABLE,
            hljs.APOS_STRING_MODE,
            hljs.QUOTE_STRING_MODE,
            hljs.CSS_NUMBER_MODE,
            hljs.NUMBER_MODE,
            hljs.C_BLOCK_COMMENT_MODE
          ],
          illegal: /\./,
          relevance: 0
        }
      }
    ]
  };
};

/***/ },
/* 50 */
/***/ function(module, exports) {

module.exports = function(hljs) {
  var XML_IDENT_RE = '[A-Za-z0-9\\._:-]+';
  var TAG_INTERNALS = {
    endsWithParent: true,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: 'attr',
        begin: XML_IDENT_RE,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: 'string',
            endsParent: true,
            variants: [
              {begin: /"/, end: /"/},
              {begin: /'/, end: /'/},
              {begin: /[^\s"'=<>`]+/}
            ]
          }
        ]
      }
    ]
  };
  return {
    aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist'],
    case_insensitive: true,
    contains: [
      {
        className: 'meta',
        begin: '<!DOCTYPE', end: '>',
        relevance: 10,
        contains: [{begin: '\\[', end: '\\]'}]
      },
      hljs.COMMENT(
        '<!--',
        '-->',
        {
          relevance: 10
        }
      ),
      {
        begin: '<\\!\\[CDATA\\[', end: '\\]\\]>',
        relevance: 10
      },
      {
        begin: /<\?(php)?/, end: /\?>/,
        subLanguage: 'php',
        contains: [{begin: '/\\*', end: '\\*/', skip: true}]
      },
      {
        className: 'tag',
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending braket. The '$' is needed for the lexeme to be recognized
        by hljs.subMode() that tests lexemes outside the stream.
        */
        begin: '<style(?=\\s|>|$)', end: '>',
        keywords: {name: 'style'},
        contains: [TAG_INTERNALS],
        starts: {
          end: '</style>', returnEnd: true,
          subLanguage: ['css', 'xml']
        }
      },
      {
        className: 'tag',
        // See the comment in the <style tag about the lookahead pattern
        begin: '<script(?=\\s|>|$)', end: '>',
        keywords: {name: 'script'},
        contains: [TAG_INTERNALS],
        starts: {
          end: '\<\/script\>', returnEnd: true,
          subLanguage: ['actionscript', 'javascript', 'handlebars', 'xml']
        }
      },
      {
        className: 'meta',
        variants: [
          {begin: /<\?xml/, end: /\?>/, relevance: 10},
          {begin: /<\?\w+/, end: /\?>/}
        ]
      },
      {
        className: 'tag',
        begin: '</?', end: '/?>',
        contains: [
          {
            className: 'name', begin: /[^\/><\s]+/, relevance: 0
          },
          TAG_INTERNALS
        ]
      }
    ]
  };
};

/***/ },
/* 51 */
/***/ function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAABg1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8aT76cAAAAgHRSTlMAAAIEBggKDA4QEhQWGBocHiAiJCYoKiwuMDI0Njg6PD5AQkRGSEpMTlBSVFZYWlxeYGJkZmhqbG5wcnR2eHp8foGDhYeJi42PkZOVl5mbnZ+ho6Wnqautr7Gztbe5u72/wcPFx8nLzc/R09XX2dvd3+Hj5efp6+3v8fP19/n7/cXRvhYAABkLSURBVHic3V33XxpPE75CtSDYUKOxN8RujH5NYo3GkhgTu8Yee0GUXo4//QVE7oSbvd0rQN7np+TDebvz3O7s7OzMLEXlBUZrbYtjYGB4LIHBAWdXk73MkJ+u5BA0bazpGp3fOHuKxMQQfjrbXBh31hlpOt9dVR2MrtIxvXXHiQqeCe5hb2GoTsfku9MqgWbM7TPHQSzRhQieLDhtzL8+Fphix+K5+IDHGws/+iz/LAk0a584CssWPk3C9bdmw783HWhD29I93pTHwPOaw/wvcUDrGpef1BI+hcB6p/HfmAs0WzuHqe4J8bTYoCt4DpjikXNNpE+CuxwrKeipwNYseTST/gX+Hw26fIsJgDY6D6Mai59A9NRpKMCZQJs/3OZA+hdcj5gKjAK6+D9XzsRP4GGiuIAooEsn3TkVPwHXmLlAKKBNH3MvfgK3gwVhGei7L/IifgKXDn2+xWcb9nOh+SFE9+rYfIpPl62E8ih+AsEFS/7mgXH4Mc/iJ+AazJMzjak70M7oJQG3Z8+HfWya8OVb8jS8E6Zci8/UHhbG50/hpCG3g0A/rPWmhxT+CWPuxKfL1vK59omD26vM1SBgWq4VdTUaDvq9Hs/zUwoej9cfCIYjSueUuy83G2Xj54DcLkYCT8crE31t9RUWszFtxBmLLJX2+pbu/tGp7zuXz37ZjtTIUpH24tPWLVlfigu496a67dJLtr6ybWzDFZQ3HA6rtLaKmHdyLP/Q4+ZIHYm5YqgflUfCQ5u2ioDteSbtUsR7MtUsZ5k21I8d+og58A9puTnQjREecXGeTadV/qhkKkf+eAkXnPCkdpax6SvZKVfgeNSmdE4ytqFdsnEQXTGrIm02in6SdCR8M6PSVpWpmrolYv53sSrtZqJ0k6APwQOHmpaZqWfPT9D6rkXFtl9RtoffAd96s9qqiKmdd+MPwCObys1TlO0Yt3HuaalGk7XINvuITcFxhcoGAbb8nHu2XCtjhLbNYFNwXqlqL7Dl9y6p23AGaPxRoCoDuPIH1mq13pHR5cuY6lBFBsrw5I8cqa76xMA0HeAtiqoxYNnHaY5zfcyVS8IwdIs1D87UWQtKsNa/4I8KVVrDQ9k8lkPy2KpCW0U49g932ZHbAwqmFSsO46BUcUvGFYx2gitamF5olC7hbMy2lVrFummMzdidMx9BG6zjBmMQ/FK2M2JGpf1TkY1ylUQihW0Nw3u2rGR3zDik3X/+yRz6ozOgH5fWhdHP8rUTXS/t/7nvzmfYFtNxJ9nDUL/sHlovpV7OHdaoKY8M2I8kFYG3SaZBZNqSenXkpzauBxKUrErahTfylJRuTorb0Gz+pj8P/SdJRbUjxynL9EupWN9oYYQsssNSqpCblqEIa6QUoNtRKFGrTK/UUW2whVgNFB1JvPOxrRBCtF5Ad0qFqlyR2sTsV4k3ugpI/jgDLfcS/V0mm650t4QCuG8sJPnjaJAI1A07iDpsfZCSXytBZKNRIlb3gWRrrPuJfpm7RTM5ZINul0hS+Y0fVEk70baFl2w45Qh0jxfZ6+gAdq/L0BolMFgo699bMENoi8hVhvki9gfyPaHxvEanIsCMoeNWF/E6TrcjJ0B0vjDsPzHo5pHum1AD1lvM56iXcNs5j0kkgHkbuX85xHGOMJ9Qr4hdqH/sqCbKkTt4bghDD1Yhdan7vdTfs47JMce7MrUD+XXWeueXtTlJARqRi+GjtPOW3UC9INgv2YOWhCoOPpyuDtjVIoGxds4fPyQU3H2J1LP0ANJZLK0Hm1EakFuS1qPf0097TmbqlXOgsw9tu151W0jaAmO/ohRh0C7V3B8Uf2eSH4AyvIki9R8MlikxmpjykYM3W90J6b8xI08yf0l8wk4Ufc8YOwB7hgrh7mdlx/DqGn9kHobvYNDZgPJkhGuRf2s4Q/xtZByjdREG3QuyEhoMHXvZlt09hhOSnkBN4w3UEKB7UcvoDs4q+lHsL58Xq0gpYJv3xcw6fz3G3xpRx7kR1Bv0fxF/+YQePCksiP+xe4aPlzSUVdU1dTiHxz+94kO/o/V9bUVJ2sakbSvidj3Xg9OJGpSDaBsxBLoQAyA6gaXNwFX0fqKEKa3tGP9+cPnw7M8apFzI93R3sbcy3lFXpjMMg9uxSZxO0B8Q/pworMl0R/CfxY7wTGBYBXM3p/cYMZ+c/+HiLzyJ17F6YUAtZrvgEGhFLAE+PB+Q7kpSQmU4weoG1YQIJIpAc5ndhf+I+4anxYqkz+qU4QpvL8osI8bad0CWasTq4cLcA5VIOBMV4w4zKaQc4SIMiO8I6Hn4T6L/4TVLWbXOJcV264wj5vMXUX1uQiTBX+Am42hOwCMuASaETfcgeqbZC/9BuBez1QIigOpBLIV9Is+zB/Dzx9ibugIiQI/YFJ2KrIQ1sAoMO3AbpUq1VoL4BFAOeAhw2d5B+hvcKP4AoExal5IhIAA1BBaz1KAJ3kMSDACK0doQkvYJ8UAMAXfWxq4bbpNgAFAUQpOoggcCAvQn8HvaM55l4NPACPYSkMCSBkIL8UhyxokYAmsZ1qARjrG4IToI+KCF1AJ4ScLSDHCaqz8jgrQdfJL7TCI/1aa8hiQS3AeS3ozDO4K3pgANHwd6yGLMWjQmIHZGkiFug1X77ps5oIcfXCXy6tKAR0g9RGcIvGs0rNrCb7yLzeBzQbJYkFb0Gb0a8JFEZ7TAxyROIVHL4GPnRGfB5TdaiJyBE4JJoIO3RMKhzYIuOA7jJIKHYTMXpWWiUwSz8gO4K3YL9gOVYL99VSQEjMqvoUyCZ4Kl0Aav73X8U8PgQ/sk/vyqXFXWWsHvFQ37+fj1nVmHnokOEsiP9MOpCg/WEcULhsA5cJymkQXP1D34ey+Kqtd+BXgF5NYUgRXsVSStTO1gQ3sE6kYHjiP18YSvmhBzoPv1GdHzvAS4j/jyU/UkJQ4UgsQ+h+fA11eOtqEn/ATqltZ6H/gGl/jZcPAcOEqNbwZ84oIgItCa07q6kW7pHr1+GfCYzJ8y8mxgM7P48lOjuS2v9wtfO30BX5KKl+mCfg+34cuPciprgXv8ZN0WMH506OWBKej3Z4KcsCriElPKEOnA7poZXOW/J3+nwey4Q4JFcDDXBSa/4/cNrH9wmRSQAXdC0/htwIERWuEafx0AY18jSd+wGfp24UzPKQJGrd3hWfDXSfcqhUZQCSS1YBP0q5fAA12ZYxUQxzD+1wGVQHIxBe3AUwIV0JSbjbAQaiiBpEG5CP26jN8C5dBGSBSO8TdEs9A7VhO/QoYwN0JAwKhGUiJwg79I90HbgeP4jzR0eIARmMxjRisxYbjxy9bUQ67R5wQBUOaxn6Qujube8Gx4qrF7ZwF3OyaKMkG/PZMU38CpNaMyCNZBBvTV1SG8IfcE8lNr2giJAgEBFHhG2ElRndBvf0kI+K2NkCiQEADu1IYQZsAfEgJWtRESBRICwGpYE4g1couEgMLWAfD3mULYQb9JCIDP1jQDCQHg94kTAJ6f/iAhABxH2oGEAHCVjhMAegNILGHqP22ERIGEgDnoJVMIBUlEwJA2QqLgIzgeQhEAnh/PkxCACDLTCs8E57aT0EviBIC3RZC4hKn3ub9w6ZEgixn0CcUJAN35RATk2icaxx1BZRwUAeCBFhEBpVpnimTjgmCvoj0B7Kk2UiJwQNA97QnIgylI4BJDEgDmiZARAAeZaIVRlQhQRwlS9bLv3pGJkGQph9wSYJKsPqkybgmc9qoTQDPZyGl4QCyRQkrTGf2gQT++egQw+uqusdnV7YPTqzuX2+/3P7nurs4Odnf3c3372t70tx/re0enV9cul+v26urieG9jdX5isNnCZvOAIgBM8hEzhZkvviiPyCui0XzcvcclEM1CRKSiOBgiECcArBokuhnSVb5rTKC+ptpqLTLFbRHGZCour20bWSe8gkgh/L8/D/V1dbQ1vsW7GptYTiBqMwQeG5HsBhmG1SNi8zXAkpFlGeyzOxQBoDtTyiHCsDq9wWJvdgxPzH7f+evJ8SzwX+7/Xp779KG3/Z1Fr5MgA8wKnpLlEqNZQ1XXxMr+9cs1WNyrOsgdBVxK9US5ZJth18nG/EhzmU5E/yWBcomB+mET+PAW59JJICF2OPhwvLE0+bGvs731fQK/tJBVFPvJ9lra23uGJ+ZW9y48oUj8W3CPe5MNBjEOwISYOAEjYCPiX38yEAkHbnbmh9uqMrdjFmU3UeIj3Jn5VUrqeyZWj59C4ci1mJ8EjF/5gjjYBg5GbG3vbVASRUeO7OFToKI1XWRvbRLLcgRDBQcQASJER2MvYGZzogaCmQNAEuBa30RRldBvzzLqgJnQ9fzUATdHWpSIAc1dW9y0gYJbiI7HX2FBlaJSB9wWcUn3Uuh4PMrG5w3kzAo1ySCAsqJqMakB7oi8pP87yEp1JX6F6k5xJNkiOWOAO5Vxd5ATFSJDgYUDFmURQFlPNNQDsuSnpqHXrSV+BeObTmRWAixe1+xibm5X1s1JYHG1ZGGuVuhXj9z7MwzzGh2TRFZllbQ1gn7PZKAkmC5AEi3/Fkwv/t2QBAh8kVfS+D24U08eLrHgz1NyCaCo8h31Q0cf5ZY0H4O+hi9pUNBgoQmScPlM6Ifu1B0E0T3Z19mBEQDHLwKC0QMkCRPZKP50r54y5FwjsgvUGsEgudQ654R+J4mXF0PRyF91tCH3OEOSwZmBRnCOpyydcrBhkowJUeiav7sVD4Pw9biiawPh6JVUjAkDhtMfYymB+s76MhOYYFfc++tRQVmN6NNau7Lb1OHU0XBqVtE70BNerPoh9mMudLneXwLu0cxt324DclRi1PNnSPGdkaVg6EI64B4MIMGMmC9eSwzzhzFEZQdd3civG0+IhIWQe71fjTtDe8E5mJ7hoC2IWz7AMBtf9UMPp03Ixxlr0+DXHRynUdjn2p9qJSkXA4OG07maX58xgWrSixmHo1+Oxk4XY/5xyenajJFj/9id5W6UjxJQwwXSjTDg4Uh0CLMZ00ZidF/4fkpM2QaJu3BeWsWp4Y2LHtAk/cOP1zGwL7u4XSk9j6uMeU/sqAr1F9V45QZ9OAW0MQHHsQtS8KtA5eTBVkNNyePhYOi6AVYEJcjrSwQ4U+0iwxK4UqqAZRaM8YpiZ07RX+LaNjy8GnvsgBhg13BXAewqtpLoA2eAV7C1RBQ/OMPegZoO4x2/8scH8ABgFTnwd4gule7yZOCk9g3hd+oAHws2gy/PRGNSwbsWn0OfRJW4Hi5ul4XogFLRX/AOXnXf1Kk3wc/hF1NjFhIj/FfxTiz6Uyy7H3RNioEoXQMGXCk1+Cb5moFvWH/GD8m1JlRJ6DYx0P82ZU8DyUtshXhU5YqaUri00/ZbTQVHe3ME+mj4ZZLf/Lzi/HO2DF1oJgonDuBnBaI6BA+6jNrKiJKal/hWmfFF5fxsWYpPBvdSq9Ws4ydQM9GekChvFYIODuANZWhZ5jv4aBjrVouUkOk01KCXi3Ge8z9bq99TkL4iWogoQasg2mB/zG7mWg2XVCQpq8vMv0o5Ups4IZLvFuRwjXAEWNDEF6k+oIcvWQx34beZtvVOFgOxyNeh+1j0x8dzLhbYJPWRjisnAFFOMpC1Z6HBQKpY7IDAHd8qyMX2N5Xtx+364t5wbFcnrGPBCf4dFabvC3r8SbH8LFghK75YZ1urNbDCDBEEJDCfBeaezxX/7J7ruIEU+LorGAEnArYvTXzDkWFeF88oJqAZNm44EfOOPYT5OiBYlA3r0mP9Uwcv9DbDb1eCFv6jzSmVHzUALsXGNKIKBskQoEoPJRnoec8Pk1VBPfYAywftyTyb5oEYALExMfPWgKiMf0SyPS0/lWKgWXCZwSLDbxH8AvckUdqiCPSI+7b8om4bGpH9GSGpJ0JVSDFQZ+cJWKD5awDcglx2pQT0Ieyun+Ib9hKomEYc90T+2bIN9Ma3uoL/fUZAwCM1qBYBJYiYRa5J/G9QOQ+4Fy2lYPz4gBoENiv/eaYEBLioAZUIoKcR7f+FlvVqxKjx4d3Zm0b55BVshljeEHCU/ve14JxSGQE1qJ1XH7TDZ1Eb1l3S/am5YXBh7/zO7Q1mzYe3BPAHU1eCXakiApAFXm9gjd6AmLphWUFjuuIKe0Nzu3Pkv+kF3sgREjCpBQE9qOyNEdjFw8J+kVjsgajKtgj4+LkiAQHjGhBgQ911c4eKM6pF7dm3FB7X8AQYBASMqU+ADul9RgyA+BBAhfxHRO0nfPCHAhoTMIT6jJfoQDM7avI8ERStEAE/LrUloBpV4DcqEWnFIgsC/VF08zx/+qIpAQbEJigW25fa2lehjq+jUwSVlrNARgBJcrgQDPLW4ZCkOcMgrl2Mb9ecCtQAPzJxCCAqYyRAJ8Kgj9Mq/QXR98W53snsVxy8HYBDAN71slmwI0tZ4MT80APIrdyZ/Hg1iADe/lROQMkRqvOxzzg7GuSdvTFuXe7JNQ0RwJfiuxJE68giQL+K/HrneLWIwQKUSUSmZSpCAz85YQJ47/y2jCbQCjAWbsXTYCy6PmZwWM5d8vEtsjgBIwABe+Qt0H3oOx5WcD9dKXxGkICvV9ZSwBMQERIwQPOmh5CAY+IG6C50DQPsG3spuh99kP3cJYeB4jQBfiEB/YIj7CuqLv3vM+IGWhH3BsfBDeD3Wi+RBfwo5+TSkh6fz3oBAd2CjJ47QdzyLen7G9DjNrZDspezSrzsntA/lEBZmoAHvY1XVp3UOE8sVZQee0+EurZWInH52U7yNrpL4iz7htwgqkwb2X91gmvOm6k+AQF8HXQvWZCwXSL+JjpCprpZsKxACrdk1/DFUZteXbcYgVu8jmpI/9sruCc1SBQr+E6qis8mqTOjRCqi6aGdUBPyp6MTdH2aAM5GGdPMBBh+KxLtx3813SRVy81Fdm9m4p2ok6Uknhxkg8rxOr39NqotPdU5gyBSN2im6tJzD7+mKd0udcVPuJt83WImpQ64PANEDHx+FTlukPM3kiSS9NO1nUNVFDv9ys0j7j0yTI9kAPKCHOvVhHQsJOD/SOAq16dcgpFlgyBPKxkPqHs1haLO+HMjKc8Rt4r3dt2wZAD6gbzIe6vk/ZnhRfw3p65+dA/FxTK/rrJPH5KDyLSU+ux7iXR2y8if5LFGdBbnu5m+ShYweqiUJT9FN0lSG93HfXd1YpiGzyfK45ORWUnOgMjlTHlqauocf5IqJ/Ki+fTl7VPb57d/MRzxtm3J8Es/qbpOg+mTznq7bsF6OzN/uDnnrDEnH24NR91na6PvhMPHUP1x8zoYc6U326y5tERyBNDvLySDEcKEFoAQ7Cfp6FbPB5wIIsas54kqfm+3mrJ5Y4orW9qIsoPZAbT5nwA3Iy/h+AUGjCJ5oRX8a7/URck3jPplP5WlHpgxLg7gLjuUOIvlgmn5ixF5t6M07r4YTCoUIDCvUng/AczTSPdvCoeK0w4pCyJ6LI3oGTpjTnXQ9Uc4wfdnBNWnQdiwqqJ4Z0hqfCpF0Res0PNrmQbAW9CVWKlO3HW/KiH+GND1XGDlXlzb1Um/oyvxKsaG9xAJY+qBqdvCS8q/VUn+OAN2zEvlfd/USPZFwzKHWb71/p166Zd0DSYDnGtSQaUDDJR+useMOr+vVzH9lKKrcFMeNaWgdAK7Ksd1rZryY2vCFwpm1Fh8slE2iV+URC39x4OuxC+gz7m/2tVWh0zVtAs/5eJCdfnjsCIPTTPg2+lWLf03DkPnppcg4+REdsUdJEqJEv/C118qVFqGbRNXRBlne1ppoeKfRHk/nGejt1QxB8U9v5/J0o02tLNJTXOEBbKiTxv9ZfI5oEt7f7tJm1zEv5CYHLpR4rqxUc/2QJUclchU9G08ExchCk5oa5AzXdI+mGwOfNdLzgoSEhib49ulT0YJJk+v1q4JpkbefTJR3+Wi047jndJV93y78MkrRndRn4PdSOmq3OJY0cDj4cpEb3tjbWW5xVJq5FFisZRX1r5v7/1v+fDRL/f93LpFg+U/G/phRbdJRMOhgN/v9Xo9POL/8/sDobCiumPeUfWK76DB1B1LdyfnOKzNoVPKPJPb+ySkEZjUcvXLBtOS62t10DhvzK1PMm6jlMzl+molGOGF4pxov7dgG8hKImgG7qQ5H+cScRhHc3/LYDaeRhVlMSgCU/Fb/eq5ZAj/yCzWklvo2s/yOQ+403yN/jRo45BETKGGuBtR0+siF3TxFM4pnfp4GC/Kg+4XA1P+I/eXzro/5WPpg8BUr+aWguepkgISPwGmahkdrK8mHr6U5lX1i4OxTuMVzFQI7rRPJL6mIEAbu3cVFJHGQmi9SUnMj+ZgK2akwlaVwDVXXoBj/y1oo2NHG4Xo+9mmL9CxnwGmqG9L7a1iaMdpLviPLwBjdv5WzzwK7H4oRLUvAcbUuXil/I4J7nax3fjvSf8CmrE4fyi5a8S3+7ES/2bRwgTN2AZXTslVQvjvcn8V+69++gzQDFvpnN1z440F7ul4dazB8K9/+WzQdFFt19i3rXMoCt97e/JrsrfWBF+h/f8CQ1l1fUvXwOjnqanJsQRGHI3V8BUdWuJ/0I08Sn5XQf4AAAAASUVORK5CYII="

/***/ },
/* 52 */
/***/ function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAANs0lEQVR4nO2deTxV6R/H77n75dpluRdXCyVKKEvLkFC2SDQkIoWaUCoqTPWrmVY7De0yNRVhmsyYGG00MxXR1CjVvCb9puE3o0VNiyy/81xzzFTCvfc597H0eb3OX67zfZ7v28fzfc75nnMpFCmJyTfi89dVnON/XFEG/VhXUabpfaBc0zuLrKOMKTAcJq1cSUcYRuGvrzqju/NJOxmHdnBJu3bId6QcmnOzL1CoNNQZhC856xDP/giEO2aWJ+rckSKqjCJLZ8e9u/0JCD/wy1sYg81AnTvSpOKTHNOfgChYLopAnTNSRdcYqaa78+kLqEDSm/DkwQeiFXyqkSanoYA6Z6RLPfyr7P4ARNk+dgvqXElFnLHOlngi2/o0kNDSZsYQPS3UuZKOMCrG//jy9/CAPIbuDjWP1GzUaZKqFKZH+kMDkgYdSCtn+BQz1DmSqvASmKOTWF/fF4FofLivBN8IYqhzJHWpeKdv6otAZA1dnVHnBomYAlMBXgI3Sw7kETQYvMD86xhTpu9dJxll7W4y1tHPgYxDWVtPlYijEVmUKzGQVHhA5C0CFxFjM/lghonNLD8H2Ie1u68tlUYX7V/iZP+YwLjy9nYyjpmx+3cQcWRM3GwkLoEhAeEHnaynchRkwLg4XAXOsRvNf+bfaW+HfcRllWSJ7BCOvDIz8mRDLRlA1px+/qe8mpY8iIMxOTTtzber+wIQJZuV64n5f7hs40dkwDh+q/XFUGOrESIDAZrkvzaALJdYL9wQQsRRdFoTKhmQh5IDCS5+Slfja4DxsGW4jL0/NtwgA0hURkGGWDCAGGxZetS3D0lxyfITv1VjVBoVxKFx1bmClMYHKIGoTN+wi5i3rddCNzJg5N1pf84bYagtNhCgKQFr/clyiaGdty0RRzVgT4LYQFIkBtLK1BwzGowDw6hYyqmac2QACY/PTpIIBhCTw8XXkvqfyQASkFGWR8RhDbcaiSf3lXhAHkgERN1rVyExDtOpLpZ48tpgwzh242WT9khjnsRAgCzmRPiR5JJmzZGmgo4oGIW3+nwhCiCyo52mEXON2//tETLcsXjzXnhXjhlsGTrukhoyoLh/fHArEYdr4e0obSC8+ccrKH+vZdr6Y4bm3W5rhg0j50bzQyV1vgo0IEDmXmG+ZACJLm5qkFVS44IY+B6Arr297qbIQJLFByJn6utHzHHptgMJZLgjYF36OqgwgIBLIgruXScDypSAmAVEHKVZm5aLDqRRLBhaC7++R5VVZoO4KjxdpSPXnz2EDePwT0//UFLjK0IHAmQ+J3wuGUAiCxsqQXUDYtAUNJUEO588kQYQRduVUcTcfCI/WUmGO/xWx0e9O6MSCq+4GMsK7l0jA4qBjcdkIo7a0oJM0oEsPtNEk1NTAvEYTDYju+rZXdgwPq9uui+vrCZHGhAgS58VPmQA8U87fZSIwTGYZownurXXQJJEB6JiF5tMxHMJjZlLhjvmRPwnnFQYQFQanYpXXPDXkrK2F5qjxnfsYvF/X7yY70t7D+RPEYGUNLO0zfRAKDqTRU0tqb0I3R1Xn9SxZBVYpAMBmuAV/iEZLpkZs28jEUNuauhssoCoeaTnEnEsXXyt80nYCHosiQ2WCgwgUHGF5dyphg0kuqTpPpuryAEx8BKYqZNY37suR9GAtLF1zK2EE8Ewyqc5F07AhrH3x/qbbBmudNxBaLxnxBwyXGIxJ2IeEUPZa+ta2EA0ArIuUFgdFd1Is8mj8+60v4INxDVolb9UYQCBK8ERBXXQXRKed/ci+MsFoqsO1RCkPnjWI5DEP3oNhGs4s7NxekVabgZsGJnn666xOLJoeoHxisuTDJeMtvWyJGJoLP+m5y7HXgLhBxbcwugsYbJUeTpD8m63/QUbyAy/MC8kMICodAaouK7CBuKbWtLZpMYZ42ih29Mt3l4CUTBf0Nk4HRiXHAcbxu4f6q/Q8JygofG3zNxDPWADiT3f8kxV16DjUjWVjvHjLnXf5Zj4v54vkyz6tpHGVRM2TsspqcpmX3l0HzKQNmuPYFekMIDoLA49LPeXSthQnKMyOy/IKThGd9/lmNAzEOVpazqvKrsELg+C7Y6U4tpy5O4gZDYLvktWFT24x5ZXYoLz4yUwS5DS2CA2kNDSlwyVYcLGaSqVRs288PtPsN1h5TLXHi2Ffwnfl1Aj8uugu8TKN8qbiKHinbBRXCBD3JM616QpHiFOsN2RUHj1NO6OvtV6au4VNgs2kCVf3CgnGsqYOuMEummPun7Qp3sgreyhE4WN0/i5KNtOVBbDdoels/cHaLPfhcA1roiCexWQobSNsHLs7ELXXHGq6y7H+IZ3bwR9skoof1/aH201zQRPYCtMIFvyLn6NYX1j6XhL+FriBtslcxOL9hPnlxk3s+sux26AyIx2diJ+P2ZfURZkd7SMnexgjibbvRCdyaZ9dLT2EkwgMWebnypr66uD82N0JlVr47W3uxzfAYQXkHcdY3Do4HeHGk3QPn6r9TlMIBuOlOf1WXcQMnMLcYXtEvuw+LXE+RVdYkLeBCKIr+8SiLzlws7G6cVb92+B7Q6DCdZj0GRZBIFFOKKg7jJMIKtL/6qjsbnCv3SavDpXkPaosScgWouK6qlsBeGVYzkVdW7OzVcPYAKJO3j6MNpMiyAzd/gumTgvuvOioOr8XYmvuWTH20AUrSPXE5/3WfFpOEwYebfbX44YZzUKSXLFEai48N37DzCBLDpQeQajdlRL7BGT9HX/1eUoeBNIcPFTxpARHY3TsnLM/Zf+uAUTSHTGl/vQZlgMmbgGOUN2SeuwCXbjhCfHF1Le2vLCf4D8/hoQVcdNnY3Tdt7Bs+G6o+2Ftr5Z/3szENi9L825DdUlvkmndhPn51r4OHUNpLSFxTM2BJ8BjkotqS2HCSQiJScNXVYllLFzoBNMIGtOP29S1TUQPg4HHvTRSbhfKwSy/R8g6p4ZnY3T4+3cJuZDvF+eW9vylK9n1H9fJgAqLtwl38OEYrt48wri/IpuG5a9CURm1Aw74ufrsopzYLojLD47AU0mIcrYaf4MPJFtsIBEnXr0C1NWTlgC01UEyoKUxseC7fc7NoL+ORUUrKNxWjDKfHj+nTZo98uP1rx4pKY9TB1tNiEI3FXEd+/lMF0y3uMjN+L8asGHMgggcibenY3T4Tuyk2C6I+STPZvQZJAEGTsHzIAJJGjPxVPEudn61mNxIK38oMI6KqejhWiIjp7K0Zrmx7Bg5NS2PlDhCZTRZRCycJdgS4/dgumSFu2xk4w6Tk7DNJeVlCpaL48m4s2LTYuG6Y7A2KRYZMkjS+NcAh1gusRrc95O4tyy42ZZ02RVhS3/TBkF5ufVTXWwYBz66VmDwhDewHuJGdgTLD788zlYQNaefflYkTdU6c04bsGr/WC6w3vl1hVdzWdAyMjexw5mxTU1eONr70NksNjUjPN1lbBgHKx8+F/FITwuqnyRLtCVEfr5tbOwgER+VX8T9BkT57d08p6WD3EjiLtjKcp8SUXg2XSYa4mx43zhHUEMwyhb8n4shOeOB7+yZOSYqPMlFS35ogaaS4KzrhTi6xPFYIK1EZ7IFlhAZi5ctaDnmQwQ4WuJLcS15NXQ8Xajoj7L3w0Lxq7y32rYXEXpPk6AUqDiCs6qKoXlkvnJRYfwREK7X+68INIXdY6kLoOps6fCcsnWS/DK3Mzzd6+yZLj0nmcwwAR27yHZV7+DAWQbRCBTPRfMQp0bZDK097aG4RJYQNJLb1+iMZh9vK+HROGlKrbkcI3ELoEEpG2K2zynnkc9wGVgM/sDPKmtkgDZfllyIPEnq85RabTB6w5CoGt80YGKYsRA2ia6+tr2PNpBolE2HpMlWUskBRJfeLUEw/rW0wTIFXKw+pS4QHZIBqTV1G72RNTz73OSxCWSANmSf/kk5b073hZ4PRO+ey+SMpAWw0nTTVHPvc9Kf7LrRHEqrngxgWw4dCYXG4hfhwdLwoprX8U3IgOpEM8d+iZWhqjn3OelN9HZUtS1JEEMIDEHSgbXN+iIL4yycO8lkVwiKpDjtS0v9U0njUQ9034jvUkulqKsJaICid5TtLvnUbxXp8D9kqC9F0/2FkiiCEDAc4Za+mMFqOfY76Q/ydW8ty4RBUhE4uFU1HPrtwrIKDvRKyCVvYNxrObFEw1dIzjvXx+MwteSXrkkqZdAwuIPbUM9p36vwMzyHl3SGyC4Ox6qC/TUUM+n32u4hcN4POktkgIJjE1aj3ouA0LgTQkBGeUF3QFJ7gEI7o5GBdVB8K3P0tIwcweT7taS5CvdA/GL3r4a9RwGnAIzyvPfBSSlGyDgVX4KKuryqMc/4IS7xPRda0l3QHxXbY1EPfYBK//0M7miAMHdUcdVVOGgHveA1XCL6eO6csm7gHhGbApFPeaBLQwDFddbLkmtehvGwSuP7zA5soPjcQKUGmZub/ymS7oC4hwYNR/1WAeHcJcE7b34mkvS3gCy58L9nzlyiu/dIS3hFRdwyat3AbH3CZ2DeoyDSuCJqYCMsmNdAfns7G9VTBbnfeeCtKVrajOGWEvSq15zhzvqsQ1a+aWWHvk3kPTTv/5Apb5vmEYmvOIyAmtJerUQSJuls/901GMa9MLXki92VgsfJzhDo9PfuwO1dM1sDXEgzeYOffD964NS+L7EJy5zUc8f7B/6P+/deFKc6+9QAAAAAElFTkSuQmCC"

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(3)

/* template */
var __vue_template__ = __webpack_require__(121)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(118)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* template */
var __vue_template__ = __webpack_require__(128)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(5)

/* template */
var __vue_template__ = __webpack_require__(98)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(115)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(129)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* template */
var __vue_template__ = __webpack_require__(126)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(8)

/* template */
var __vue_template__ = __webpack_require__(103)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(9)

/* template */
var __vue_template__ = __webpack_require__(112)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(10)

/* template */
var __vue_template__ = __webpack_require__(135)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(11)

/* template */
var __vue_template__ = __webpack_require__(106)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* template */
var __vue_template__ = __webpack_require__(104)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(12)

/* template */
var __vue_template__ = __webpack_require__(102)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(13)

/* template */
var __vue_template__ = __webpack_require__(108)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(14)

/* template */
var __vue_template__ = __webpack_require__(116)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(113)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-32aec740"

module.exports = __vue_exports__


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(16)

/* template */
var __vue_template__ = __webpack_require__(131)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(17)

/* template */
var __vue_template__ = __webpack_require__(107)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-21f936ea"

module.exports = __vue_exports__


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(18)

/* template */
var __vue_template__ = __webpack_require__(111)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(19)

/* template */
var __vue_template__ = __webpack_require__(119)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(20)

/* template */
var __vue_template__ = __webpack_require__(110)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(21)

/* template */
var __vue_template__ = __webpack_require__(127)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(22)

/* template */
var __vue_template__ = __webpack_require__(105)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1fcc3b4c"

module.exports = __vue_exports__


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(23)

/* template */
var __vue_template__ = __webpack_require__(123)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(24)

/* template */
var __vue_template__ = __webpack_require__(101)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(25)

/* template */
var __vue_template__ = __webpack_require__(133)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-90cceb0e"

module.exports = __vue_exports__


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(26)

/* template */
var __vue_template__ = __webpack_require__(130)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(27)

/* template */
var __vue_template__ = __webpack_require__(136)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(28)

/* template */
var __vue_template__ = __webpack_require__(122)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(29)

/* template */
var __vue_template__ = __webpack_require__(109)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(30)

/* template */
var __vue_template__ = __webpack_require__(97)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(31)

/* template */
var __vue_template__ = __webpack_require__(132)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(32)

/* template */
var __vue_template__ = __webpack_require__(100)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(33)

/* template */
var __vue_template__ = __webpack_require__(99)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-10e7c3e7"

module.exports = __vue_exports__


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(34)

/* template */
var __vue_template__ = __webpack_require__(120)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(35)

/* template */
var __vue_template__ = __webpack_require__(124)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(36)

/* template */
var __vue_template__ = __webpack_require__(125)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(37)

/* template */
var __vue_template__ = __webpack_require__(114)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(38)

/* template */
var __vue_template__ = __webpack_require__(95)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(39)

/* template */
var __vue_template__ = __webpack_require__(117)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5362613c"

module.exports = __vue_exports__


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(40)

/* template */
var __vue_template__ = __webpack_require__(96)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-050d7e20"

module.exports = __vue_exports__


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(41)

/* template */
var __vue_template__ = __webpack_require__(134)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 95 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('doc-view', {
    attrs: {
      "doc": _vm.doc
    }
  }, [_vm._c('component-example', {
    attrs: {
      "header": "Default"
    }
  }, [_vm._c('v-tabs', {
    attrs: {
      "id": "tabs"
    }
  }, [_vm._c('v-card', {
    staticClass: "secondary"
  }, [_vm._c('v-card-row', [_vm._c('v-spacer'), _vm._c('v-card-title', {
    staticClass: "white--text"
  }, [_vm._v("Title")]), _vm._c('v-spacer')])]), _vm._c('v-tabs-tabs', [_vm._c('v-tab', {
    attrs: {
      "href": "tab1",
      "selected": "selected"
    }
  }, [_vm._v("Tab 1")]), _vm._c('v-tab', {
    attrs: {
      "href": "tab2"
    }
  }, [_vm._v("Tab 2")]), _vm._c('v-tab', {
    attrs: {
      "href": "tab3"
    }
  }, [_vm._v("Tab 3")]), _vm._c('v-tab', {
    attrs: {
      "href": "tab4"
    }
  }, [_vm._v("Tab 4")])]), _vm._c('v-tabs-items', {
    staticClass: "white"
  }, [_vm._c('v-tabs-item', {
    attrs: {
      "id": "tab1"
    }
  }, [_vm._c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")]), _vm._c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")]), _vm._c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ")])]), _vm._c('v-tabs-item', {
    attrs: {
      "id": "tab2"
    }
  }, [_vm._c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")]), _vm._c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")]), _vm._c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")])]), _vm._c('v-tabs-item', {
    attrs: {
      "id": "tab3"
    }
  }, [_vm._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")]), _vm._c('v-tabs-item', {
    attrs: {
      "id": "tab4"
    }
  }, [_vm._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")])])])]), _vm._c('markup', {
    attrs: {
      "lang": "xml"
    },
    slot: "markup"
  }, [_vm._v("<v-tabs id=\"tabs\">\n  <v-card class=\"secondary\">\n    <v-card-row>\n      <v-spacer></v-spacer>\n      <v-card-title>Title</v-card-title>\n      <v-spacer></v-spacer>\n    </v-card-row>\n  </v-card>\n  <v-tabs-tabs>\n    <v-tab href=\"tab1\" selected>\n      ...\n    </v-tab>\n  </v-tabs-tabs>\n  <v-tabs-items>\n    <v-tab-item id=\"tab1\">\n      ...\n    </v-tab-item>\n  </v-tabs-items>\n</v-tabs>")])])
},staticRenderFns: []}

/***/ },
/* 96 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('doc-view', {
    attrs: {
      "doc": _vm.doc
    }
  }, [_vm._c('component-example', [_vm._c('v-btn', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip:top",
      value: ({
        html: 'Top tooptip'
      }),
      expression: "{ html: 'Top tooptip' }",
      arg: "top"
    }],
    staticClass: "primary white--text"
  }, [_vm._v("Top")]), _vm._c('v-btn', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip:right",
      value: ({
        html: 'Right tooptip'
      }),
      expression: "{ html: 'Right tooptip' }",
      arg: "right"
    }],
    staticClass: "primary white--text"
  }, [_vm._v("Right")]), _vm._c('v-btn', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip:bottom",
      value: ({
        html: 'Bottom tooptip'
      }),
      expression: "{ html: 'Bottom tooptip' }",
      arg: "bottom"
    }],
    staticClass: "primary white--text"
  }, [_vm._v("Bottom")]), _vm._c('v-btn', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip:left",
      value: ({
        html: 'Left Tooltip'
      }),
      expression: "{ html: 'Left Tooltip' }",
      arg: "left"
    }],
    staticClass: "primary white--text"
  }, [_vm._v("Left")])]), _vm._c('markup', {
    attrs: {
      "lang": "xml"
    },
    slot: "markup"
  }, [_vm._v("<v-btn primary v-tooltip:top=\"{ html: 'Top Tooltip' }\">...</v-btn>\n \n<v-btn primary v-tooltip:right=\"{ html: 'Right Tooltip' }\">...</v-btn>\n \n<v-btn primary v-tooltip:bottom=\"{ html: 'Bottom Tooltip' }\">...</v-btn>\n \n<v-btn primary v-tooltip:left=\"{ html: 'Left Tooltip' }\">...</v-btn>")])])
},staticRenderFns: []}

/***/ },
/* 97 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('doc-view', {
    attrs: {
      "doc": _vm.doc,
      "id": "navbar"
    }
  }, [_vm._c('component-example', {
    attrs: {
      "header": "Variants"
    }
  }, [_vm._c('v-navbar', {
    staticClass: "green"
  }, [_vm._c('v-navbar-logo', {
    staticClass: "hidden-sm-and-down"
  }, [_vm._v("Navbar")]), _vm._c('v-navbar-items', {
    attrs: {
      "items": _vm.items
    }
  })]), _vm._c('v-navbar', {
    staticClass: "orange"
  }, [_vm._c('v-navbar-side-icon', {
    staticClass: "hidden-sm-and-up"
  }), _vm._c('v-spacer', {
    staticClass: "hidden-sm-and-down"
  }), _vm._c('v-navbar-logo', [_vm._v("Navbar")]), _vm._c('v-navbar-items', {
    staticClass: "hidden-sm-and-down",
    attrs: {
      "items": _vm.items
    }
  })]), _vm._c('v-navbar', {
    staticClass: "red"
  }, [_vm._c('v-navbar-items', {
    attrs: {
      "items": _vm.items
    }
  }), _vm._c('v-navbar-logo', {
    staticClass: "hidden-sm-and-down"
  }, [_vm._c('v-spacer'), _vm._v("Navbar")])])]), _vm._c('component-example', {
    attrs: {
      "header": "Icons"
    }
  }, [_vm._c('v-navbar', {
    staticClass: "purple"
  }, [_vm._c('v-navbar-logo', {
    staticClass: "hidden-sm-and-down"
  }, [_vm._v("Navbar")]), _vm._c('v-navbar-items', [_vm._c('v-navbar-item', {
    attrs: {
      "item": {
        href: '#!',
        text: 'chevron_left',
        icon: true
      }
    }
  }), _vm._c('v-navbar-item', {
    attrs: {
      "item": {
        href: '#!',
        text: 'dashboard',
        icon: true
      }
    }
  }), _vm._c('v-navbar-item', {
    attrs: {
      "item": {
        href: '#!',
        text: 'chevron_right',
        icon: true
      }
    }
  }), _vm._c('v-navbar-item', {
    directives: [{
      name: "dropdown",
      rawName: "v-dropdown:dropdown",
      arg: "dropdown"
    }],
    attrs: {
      "item": {
        href: '#!',
        text: 'more_vert',
        icon: true
      }
    }
  }), _vm._c('v-dropdown', {
    attrs: {
      "items": _vm.dropdown_items,
      "id": "dropdown",
      "right": "right"
    }
  })])])]), _vm._c('component-example', {
    attrs: {
      "header": "Transparent"
    }
  }, [_vm._c('div', {
    attrs: {
      "id": "navbar-image"
    }
  }, [_vm._c('v-navbar', {
    staticClass: "transparent z-depth-0"
  }, [_vm._c('v-navbar-logo', {
    staticClass: "hidden-sm-and-down"
  }, [_vm._v("Navbar")]), _vm._c('v-spacer'), _vm._c('v-navbar-items', {
    attrs: {
      "items": _vm.items
    }
  })])])]), _vm._c('div', {
    slot: "markup"
  }, [_vm._c('markup', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("<v-navbar class=\"green\">\n  <v-navbar-logo>Navbar</v-navbar>\n  <v-navbar-items v-bind:items=\"items\"></v-navbar-items>\n</v-navbar>\n \n<v-navbar class=\"yellow\">\n  <v-navbar-side-icon(class=\"hidden-sm-and-up\")></v-navbar-side-icon>\n  <v-spacer class=\"hidden-sm-and-down\"></v-spacer>\n  <v-navbar-logo>Navbar</v-navbar>\n  <v-navbar-items v-bind:items=\"items\"></v-navbar-items>\n</v-navbar>\n \n<v-navbar class=\"red\">\n  <v-navbar-items v-bind:items=\"items\"></v-navbar-items>\n  <v-navbar-logo>\n    <v-spacer></v-spacer>\n    Navbar\n  </v-navbar>\n</v-navbar>\n \n<v-navbar class=\"purple\">\n  <v-navbar-logo>\n    Navbar\n  </v-navbar>\n  <v-navbar-items>\n    <v-navbar-item v-bind:item=\"{ href: '#!', text: 'chevron_left', icon: true }\"></v-navbar-item>\n    <v-navbar-item v-bind:item=\"{ href: '#!', text: 'dashboard', icon: true }\"></v-navbar-item>\n    <v-navbar-item v-bind:item=\"{ href: '#!', text: 'chevron_right', icon: true }\"></v-navbar-item>\n    <v-navbar-item \n        v-bind:item=\"{ href: '#!', text: 'more_vert', icon: true }\"\n        v-dropdown:dropdown\n    ></v-navbar-item>\n  </v-navbar-items>\n  <v-dropdown v-bind:items=\"dropdown_items\" id=\"dropdown\" right></v-dropdown>\n</v-navbar>\n \n<div id=\"navbar-image\">\n  <v-navbar class=\"transparent z-depth-0\">\n    <v-navbar-logo class=\"hidden-sm-and-down\">...</v-navbar-logo>\n    <v-navbar-items v-bind:items=\"items\"></v-navbar-items>\n  </v-navbar>\n</div>")]), _vm._c('markup', {
    attrs: {
      "lang": "js"
    }
  }, [_vm._v("data () {\n  return {\n    items: [\n      { text: 'Link', href: '#!' }\n    ]\n    dropdown_items: [\n      { text: 'Send Feedback', href: '#!' },\n      { text: 'Request Help', href: '#!' },\n      { text: 'Contact Developer', href: '#!' }\n    ]\n  }\n}")]), _vm._c('markup', {
    attrs: {
      "lang": "scss"
    }
  }, [_vm._v("#navbar-image {\n  background: url('...') center;\n  height: 300px;\n}")])])])
},staticRenderFns: []}

/***/ },
/* 98 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('table', {
    staticClass: "table--component"
  }, [_vm._m(0), _vm._c('tbody', _vm._l((_vm.params), function(option) {
    return _vm._c('tr', _vm._l((option), function(td) {
      return _vm._c('td', {
        domProps: {
          "innerHTML": _vm._s(td)
        }
      })
    }))
  }))])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('thead', [_vm._c('tr', [_vm._c('th', [_vm._v("Option")]), _vm._c('th', [_vm._v("Effect")]), _vm._c('th', [_vm._v("Remarks")])])])
}]}

/***/ },
/* 99 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('doc-view', {
    attrs: {
      "doc": _vm.doc
    }
  }, [_vm._c('v-parallax', {
    attrs: {
      "src": "https://s-media-cache-ak0.pinimg.com/originals/e1/00/ef/e100ef3699fa021506561d41e392a148.jpg"
    }
  }), _vm._c('markup', {
    slot: "markup"
  }, [_vm._v("<v-parallax src=\"...\"></v-parallax>")])])
},staticRenderFns: []}

/***/ },
/* 100 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('doc-view', {
    attrs: {
      "doc": _vm.doc
    }
  }, [_vm._c('component-example', {
    attrs: {
      "header": "Short"
    }
  }, [_vm._c('v-pagination', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.page),
      expression: "page"
    }],
    attrs: {
      "length": 5
    },
    domProps: {
      "value": (_vm.page)
    },
    on: {
      "input": function($event) {
        _vm.page = $event
      }
    }
  })]), _vm._c('component-example', {
    attrs: {
      "header": "Long"
    }
  }, [_vm._c('v-pagination', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.page2),
      expression: "page2"
    }],
    attrs: {
      "length": 15
    },
    domProps: {
      "value": (_vm.page2)
    },
    on: {
      "input": function($event) {
        _vm.page2 = $event
      }
    }
  })]), _vm._c('component-example', {
    attrs: {
      "header": "Round"
    }
  }, [_vm._c('v-pagination', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.page3),
      expression: "page3"
    }],
    attrs: {
      "length": 4,
      "circle": "circle"
    },
    domProps: {
      "value": (_vm.page3)
    },
    on: {
      "input": function($event) {
        _vm.page3 = $event
      }
    }
  })]), _vm._c('div', {
    slot: "markup"
  }, [_vm._c('markup', [_vm._v("<v-pagination v-bind:length=\"length\" v-model=\"page\"></v-pagination>")]), _vm._c('markup', [_vm._v("data () {\n  return {\n    length: 5,\n    page: 1\n  }\n}")])])])
},staticRenderFns: []}

/***/ },
/* 101 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('doc-view', {
    attrs: {
      "doc": _vm.doc
    }
  }, [_vm._c('component-example', [_vm._c('div', [_vm._c('v-footer', [_vm._c('div', {
    staticClass: "text-xs-right"
  }, [_vm._v("© 2016")])])])]), _vm._c('markup', {
    attrs: {
      "lang": "xml"
    },
    slot: "markup"
  }, [_vm._v("<v-footer>\n  <div class=\"text-xs-right\">...</div>\n</v-footer>")])])
},staticRenderFns: []}

/***/ },
/* 102 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "whats-next"
  }, [_vm._c('h2', {
    staticClass: "section-header primary--after"
  }, [_vm._v("What's Next"), _vm._c('v-icon', {
    staticClass: "primary--text",
    attrs: {
      "x-large": "x-large"
    }
  }, [_vm._v("help_outline")])]), _vm._c('v-alert', {
    attrs: {
      "info": "info"
    }
  }, [_vm._c('v-container', {
    attrs: {
      "fluid": "fluid"
    }
  }, [_vm._c('v-row', [_vm._c('v-col', {
    attrs: {
      "xs12": "xs12",
      "sm12": "sm12",
      "md8": "md8"
    }
  }, [_vm._t("default")], true), _vm._c('v-col', {
    staticClass: "text-sm-right text-xs-center",
    attrs: {
      "xs12": "xs12",
      "sm12": "sm12",
      "md4": "md4"
    }
  }, [_vm._c('v-btn', {
    staticClass: "blue darken-3 white--text",
    nativeOn: {
      "click": function($event) {
        _vm.$router.push(_vm.route)
      }
    }
  }, [_vm._v(_vm._s(_vm.text)), _vm._c('v-icon', {
    attrs: {
      "right": "right"
    }
  }, [_vm._v("chevron_right")])])])])])])])
},staticRenderFns: []}

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('header', [_vm._c('v-navbar', [_vm._c('div', {
    staticClass: "navbar__side-icon hidden-sm-and-up"
  }, [_vm._c('a', {
    directives: [{
      name: "side-bar",
      rawName: "v-side-bar:mainsidebar",
      arg: "mainsidebar"
    }],
    attrs: {
      "href": "#!"
    }
  }, [_vm._c('v-icon', [_vm._v("reorder")])])]), _vm._c('div', {
    staticClass: "navbar__side-title"
  }, [_vm._c('h1', {
    staticClass: "text-xs-center text-md-left",
    domProps: {
      "textContent": _vm._s(_vm.title)
    }
  }), _vm._c('span', {
    staticClass: "hidden-md-and-down",
    domProps: {
      "innerHTML": _vm._s(_vm.subTitle)
    }
  })]), _vm._c('div', {
    staticClass: "navbar__links"
  }, [_vm._c('a', {
    attrs: {
      "href": "https://github.com/vuetifyjs/vuetify",
      "target": "_blank"
    }
  }, [_vm._c('img', {
    attrs: {
      "src": __webpack_require__(51)
    }
  })])])])])
},staticRenderFns: []}

/***/ },
/* 104 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('dl', {
    staticClass: "section-text"
  }, [_vm._t("title"), _vm._t("desc")], true)
},staticRenderFns: []}

/***/ },
/* 105 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('doc-view', {
    attrs: {
      "doc": _vm.doc
    }
  }, [_vm._c('component-example', {
    attrs: {
      "header": "On Click"
    }
  }, [_vm._c('v-btn', {
    directives: [{
      name: "dropdown",
      rawName: "v-dropdown:dropdown",
      arg: "dropdown"
    }],
    staticClass: "primary white--text"
  }, [_vm._v("Click Dropdown")]), _vm._c('v-dropdown', {
    attrs: {
      "id": "dropdown",
      "items": _vm.items
    }
  }), _vm._c('v-btn', {
    directives: [{
      name: "dropdown",
      rawName: "v-dropdown:dropdown3",
      arg: "dropdown3"
    }],
    staticClass: "secondary white--text"
  }, [_vm._v("Click With Labels")]), _vm._c('v-dropdown', {
    attrs: {
      "id": "dropdown3"
    }
  }, [_vm._c('li', [_vm._c('a', {
    staticClass: "dropdown__item",
    attrs: {
      "href": "#!"
    }
  }, [_vm._v("Profile"), _vm._c('v-chip', {
    staticClass: "teal white--text right",
    attrs: {
      "label": "label",
      "small": "small"
    }
  }, [_vm._v("new")])])]), _vm._c('li', [_vm._c('a', {
    staticClass: "dropdown__item",
    attrs: {
      "href": "#!"
    }
  }, [_vm._c('span', {
    directives: [{
      name: "badge",
      rawName: "v-badge:2",
      arg: "2"
    }]
  }, [_vm._v("Notifications")])])]), _vm._c('li', [_vm._c('a', {
    staticClass: "dropdown__item",
    attrs: {
      "href": "#!"
    }
  }, [_vm._v("Logout"), _vm._c('v-icon', {
    staticClass: "secondary--text right"
  }, [_vm._v("cloud_off")])])])])]), _vm._c('component-example', {
    attrs: {
      "header": "On Hover"
    }
  }, [_vm._c('v-btn', {
    directives: [{
      name: "dropdown",
      rawName: "v-dropdown:dropdown2",
      arg: "dropdown2"
    }],
    staticClass: "primary white--text"
  }, [_vm._v("Hover Dropdown")]), _vm._c('v-dropdown', {
    attrs: {
      "id": "dropdown2",
      "items": _vm.items,
      "right": "right",
      "hover": "hover"
    }
  }), _vm._c('v-btn', {
    directives: [{
      name: "dropdown",
      rawName: "v-dropdown:dropdown4",
      arg: "dropdown4"
    }],
    staticClass: "secondary white--text"
  }, [_vm._v("Hover With Labels")]), _vm._c('v-dropdown', {
    attrs: {
      "id": "dropdown4",
      "hover": "hover"
    }
  }, [_vm._c('li', [_vm._c('a', {
    staticClass: "dropdown__item",
    attrs: {
      "href": "#!"
    }
  }, [_vm._v("Profile"), _vm._c('v-chip', {
    staticClass: "teal white--text right",
    attrs: {
      "label": "label",
      "small": "small"
    }
  }, [_vm._v("new")])])]), _vm._c('li', [_vm._c('a', {
    staticClass: "dropdown__item",
    attrs: {
      "href": "#!"
    }
  }, [_vm._c('span', {
    directives: [{
      name: "badge",
      rawName: "v-badge:2",
      arg: "2"
    }]
  }, [_vm._v("Notifications")])])]), _vm._c('li', [_vm._c('a', {
    staticClass: "dropdown__item",
    attrs: {
      "href": "#!"
    }
  }, [_vm._v("Logout"), _vm._c('v-icon', {
    staticClass: "secondary--text right"
  }, [_vm._v("cloud_off")])])])])]), _vm._c('component-example', {
    attrs: {
      "header": "Menus"
    }
  }, [_vm._c('v-card', [_vm._c('v-card-row', {
    staticClass: "blue white--text"
  }, [_vm._c('v-btn', {
    directives: [{
      name: "dropdown",
      rawName: "v-dropdown:menu",
      arg: "menu"
    }],
    attrs: {
      "icon": "icon"
    }
  }, [_vm._c('v-icon', {
    staticClass: "white--text"
  }, [_vm._v("more_vert")])]), _vm._c('v-dropdown', {
    attrs: {
      "id": "menu",
      "items": _vm.items
    }
  }), _vm._c('v-card-title', [_vm._v("Menu")])]), _vm._c('v-card-text', [_vm._v("Lorem Ipsum")])]), _vm._c('v-card', [_vm._c('v-card-row', {
    staticClass: "blue white--text"
  }, [_vm._c('v-card-title', [_vm._v("Menu")]), _vm._c('v-spacer'), _vm._c('v-btn', {
    directives: [{
      name: "dropdown",
      rawName: "v-dropdown:menu2",
      arg: "menu2"
    }],
    attrs: {
      "icon": "icon"
    }
  }, [_vm._c('v-icon', {
    staticClass: "white--text"
  }, [_vm._v("more_vert")])]), _vm._c('v-dropdown', {
    attrs: {
      "id": "menu2",
      "items": _vm.items,
      "right": "right"
    }
  })]), _vm._c('v-card-text', [_vm._v("Lorem Ipsum")])])]), _vm._c('div', {
    slot: "markup"
  }, [_vm._c('markup', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("<v-btn v-dropdown:dropdown>\n  ...\n</v-btn>\n<v-dropdown id=\"dropdown\" v-bind:items=\"items\"></v-dropdown>\n \n<v-btn v-dropdown:dropdown2>\n  ...\n</v-btn>\n<v-dropdown id=\"dropdown2\" v-bind:items=\"items\" hover></v-dropdown>")]), _vm._c('markup', {
    attrs: {
      "lang": "js"
    }
  }, [_vm._v("data () {\n  return {\n    items: [{ text: 'Link', href: '#!' }]\n  }\n}")])])])
},staticRenderFns: []}

/***/ },
/* 106 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('h2', {
    staticClass: "section-header secondary--text primary--after",
    style: (_vm.styles)
  }, [_vm._t("default"), _vm._c('v-icon', {
    staticClass: "primary--text",
    attrs: {
      "x-large": "x-large"
    }
  }, [_vm._v("short_text")])], true)
},staticRenderFns: []}

/***/ },
/* 107 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('doc-view', {
    attrs: {
      "doc": _vm.doc
    }
  }, [_vm._c('component-example', {
    attrs: {
      "header": "Default"
    }
  }, [_vm._c('v-btn', {
    attrs: {
      "small": "small"
    }
  }, [_vm._v("Small")]), _vm._c('v-btn', [_vm._v("Normal")]), _vm._c('v-btn', {
    attrs: {
      "large": "large"
    }
  }, [_vm._v("Large")]), _vm._c('v-btn', {
    attrs: {
      "flat": "flat"
    }
  }, [_vm._v("Flat")]), _vm._c('v-btn', {
    attrs: {
      "flat": "flat",
      "disabled": "disabled"
    }
  }, [_vm._v("Flat Disabled")]), _vm._c('v-btn', {
    attrs: {
      "disabled": "disabled"
    }
  }, [_vm._v("Disabled")])]), _vm._c('component-example', {
    attrs: {
      "header": "Colored"
    }
  }, [_vm._c('v-btn', {
    staticClass: "primary white--text"
  }, [_vm._v("Primary")]), _vm._c('v-btn', {
    staticClass: "primary--text",
    attrs: {
      "flat": "flat"
    }
  }, [_vm._v("Flat Primary")]), _vm._c('v-btn', {
    staticClass: "secondary white--text"
  }, [_vm._v("Secondary")]), _vm._c('v-btn', {
    staticClass: "secondary--text",
    attrs: {
      "flat": "flat"
    }
  }, [_vm._v("Flat Secondary")])]), _vm._c('component-example', {
    attrs: {
      "header": "Block"
    }
  }, [_vm._c('div', {
    staticClass: "btn--block-example"
  }, [_vm._c('v-btn', {
    attrs: {
      "block": "block"
    }
  }, [_vm._v("Default")]), _vm._c('v-btn', {
    staticClass: "primary white--text",
    attrs: {
      "block": "block"
    }
  }, [_vm._v("Primary")]), _vm._c('v-btn', {
    staticClass: "secondary white--text",
    attrs: {
      "block": "block"
    }
  }, [_vm._v("Secondary")]), _vm._c('v-btn', {
    attrs: {
      "block": "block",
      "disabled": "disabled"
    }
  }, [_vm._v("Disabled")])])]), _vm._c('component-example', {
    attrs: {
      "header": "Rounded"
    }
  }, [_vm._c('v-btn', {
    attrs: {
      "round": "round",
      "small": "small"
    }
  }, [_vm._v("Small Default")]), _vm._c('v-btn', {
    staticClass: "primary white--text",
    attrs: {
      "round": "round"
    }
  }, [_vm._v("Primary")]), _vm._c('v-btn', {
    staticClass: "secondary white--text",
    attrs: {
      "round": "round",
      "large": "large"
    }
  }, [_vm._v("Large Secondary")]), _vm._c('v-btn', {
    attrs: {
      "round": "round",
      "disabled": "disabled"
    }
  }, [_vm._v("Disabled")])]), _vm._c('component-example', {
    attrs: {
      "header": "Outline"
    }
  }, [_vm._c('v-btn', {
    staticClass: "green green--text",
    attrs: {
      "outline": "outline",
      "small": "small"
    }
  }, [_vm._v("Small Green")]), _vm._c('v-btn', {
    staticClass: "primary primary--text",
    attrs: {
      "outline": "outline"
    }
  }, [_vm._v("Primary")]), _vm._c('v-btn', {
    staticClass: "secondary secondary--text",
    attrs: {
      "outline": "outline",
      "large": "large"
    }
  }, [_vm._v("Large Secondary")]), _vm._c('v-btn', {
    attrs: {
      "outline": "outline",
      "disabled": "disabled"
    }
  }, [_vm._v("Disabled")])]), _vm._c('component-example', {
    attrs: {
      "header": "Floating"
    }
  }, [_vm._c('v-btn', {
    attrs: {
      "small": "small",
      "floating": "floating"
    }
  }, [_vm._c('v-icon', [_vm._v("event")])]), _vm._c('v-btn', {
    attrs: {
      "floating": "floating"
    }
  }, [_vm._c('v-icon', [_vm._v("add")])]), _vm._c('v-btn', {
    attrs: {
      "floating": "floating",
      "large": "large"
    }
  }, [_vm._c('v-icon', [_vm._v("edit")])]), _vm._c('v-btn', {
    attrs: {
      "floating": "floating",
      "disabled": "disabled"
    }
  }, [_vm._c('v-icon', [_vm._v("remove")])])]), _vm._c('component-example', {
    attrs: {
      "header": "Colored Floating"
    }
  }, [_vm._c('v-btn', {
    staticClass: "purple white--text",
    attrs: {
      "floating": "floating",
      "small": "small"
    }
  }, [_vm._c('v-icon', [_vm._v("cloud")])]), _vm._c('v-btn', {
    staticClass: "primary white--text",
    attrs: {
      "floating": "floating"
    }
  }, [_vm._c('v-icon', [_vm._v("attachment")])]), _vm._c('v-btn', {
    staticClass: "secondary white--text",
    attrs: {
      "floating": "floating",
      "large": "large"
    }
  }, [_vm._c('v-icon', [_vm._v("event")])]), _vm._c('v-btn', {
    attrs: {
      "floating": "floating",
      "large": "large",
      "disabled": "disabled"
    }
  }, [_vm._c('v-icon', [_vm._v("room")])])]), _vm._c('component-example', {
    attrs: {
      "header": "Icon"
    }
  }, [_vm._c('v-btn', {
    attrs: {
      "icon": "icon"
    }
  }, [_vm._c('v-icon', [_vm._v("hearing")])]), _vm._c('v-btn', {
    attrs: {
      "icon": "icon"
    }
  }, [_vm._c('v-icon', [_vm._v("computer")])]), _vm._c('v-btn', {
    attrs: {
      "icon": "icon"
    }
  }, [_vm._c('v-icon', [_vm._v("headset")])])]), _vm._c('markup', {
    slot: "markup"
  }, [_vm._v("<v-btn>\n  ...\n</v-btn>\n \n<v-btn flat>\n  ...\n</v-btn>\n \n<v-btn primary>\n  ...\n</v-btn>\n \n<v-btn block>\n  ...\n</v-btn>\n \n<v-btn outline>\n  ...\n</v-btn>\n \n<v-btn floating>\n  ...\n</v-btn>\n \n<v-btn icon>\n  <v-icon>profile</v-icon>\n</v-btn>\n \n<v-btn floating icon large>\n  <v-icon>edit</v-icon>\n</v-btn>")])])
},staticRenderFns: []}

/***/ },
/* 108 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "view"
  }, [_vm._c('section', [_vm._c('section-text', [_vm._c('strong', {
    slot: "title"
  }, [_vm._v("About")]), _vm._c('div', {
    slot: "desc"
  }, [_vm._c('p', [_vm._v("Vuetify is a component framework for VueJS 2.0. It aims to provide clean, semantic and reusable components that make building your application a breeze. Vuetify utilizes Google's "), _vm._c('strong', [_vm._v("Material Design")]), _vm._v(" design pattern, taking cues from other popular frameworks such as "), _vm._c('a', {
    attrs: {
      "href": "http://materializecss.com/",
      "target": "_blank"
    }
  }, [_vm._v("Materialize.css")]), _vm._v(", "), _vm._c('a', {
    attrs: {
      "href": "https://getmdl.io/",
      "target": "_blank"
    }
  }, [_vm._v("Material Design Lite")]), _vm._v(", "), _vm._c('a', {
    attrs: {
      "href": "http://semantic-ui.com/",
      "target": "_blank"
    }
  }, [_vm._v("Semantic UI")]), _vm._v(" and "), _vm._c('a', {
    attrs: {
      "href": "https://v4-alpha.getbootstrap.com/",
      "target": "_blank"
    }
  }, [_vm._v("Bootstrap 4")]), _vm._v(".")])])])]), _vm._c('section', [_vm._c('section-header', [_vm._v("Features")]), _vm._c('v-container', {
    attrs: {
      "fluid": "fluid"
    }
  }, [_vm._c('v-row', [_vm._c('v-col', {
    attrs: {
      "xs12": "xs12",
      "md6": "md6",
      "lg6": "lg6"
    }
  }, [_vm._c('v-list', [_vm._c('v-list-item', [_vm._c('v-list-item-avatar', {
    staticClass: "primary",
    attrs: {
      "x-large": "x-large"
    }
  }, [_vm._v("widgets")]), _vm._c('v-list-item-title', [_vm._v("Vuetify Frontend Components"), _vm._c('v-list-item-sub-title', [_vm._v("The Vuetify core is designed to provide a variety of reusable, plug and play components that fit any project spec.")])])])])]), _vm._c('v-col', {
    attrs: {
      "xs12": "xs12",
      "md6": "md6",
      "lg6": "lg6"
    }
  }, [_vm._c('v-list', [_vm._c('v-list-item', [_vm._c('v-list-item-avatar', {
    staticClass: "primary",
    attrs: {
      "x-large": "x-large"
    }
  }, [_vm._v("extension")]), _vm._c('v-list-item-title', [_vm._v("Vue Semantic Components"), _vm._c('v-list-item-sub-title', [_vm._v("Utilizing the power of Vue's functional components, all class based markup that is used to aid main components, such as a "), _vm._c('em', [_vm._v("card title")]), _vm._v(", are accessible using "), _vm._c('code', [_vm._v("v-card-title")]), _vm._v(". This added benefit enables less cluttering of files for a miniscule performance cost.")])])])])]), _vm._c('v-col', {
    attrs: {
      "xs12": "xs12",
      "md6": "md6",
      "lg6": "lg6"
    }
  }, [_vm._c('v-list', [_vm._c('v-list-item', [_vm._c('v-list-item-avatar', {
    staticClass: "primary",
    attrs: {
      "x-large": "x-large"
    }
  }, [_vm._v("view_quilt")]), _vm._c('v-list-item-title', [_vm._v("Prototyping Made Easy"), _vm._c('v-list-item-sub-title', [_vm._v("Vuetify was built from the ground up with prototyping in mind. Every component, directive and function all work seemlessly together, allowing you to focus on building your application. With the core philosophy of write less, do more, getting your project off the ground has never been easier.")])])])])]), _vm._c('v-col', {
    attrs: {
      "xs12": "xs12",
      "md6": "md6",
      "lg6": "lg6"
    }
  }, [_vm._c('v-list', [_vm._c('v-list-item', [_vm._c('v-list-item-avatar', {
    staticClass: "primary",
    attrs: {
      "x-large": "x-large"
    }
  }, [_vm._v("phone_android")]), _vm._c('v-list-item-title', [_vm._v("Made for Mobile"), _vm._c('v-list-item-sub-title', [_vm._v("All Vuetify components are designed for mobile. Applications easily transfer from different orientations and screen sizes. From desktop, to tablet or phone, it just works.")])])])])]), _vm._c('v-col', {
    attrs: {
      "xs12": "xs12",
      "md6": "md6",
      "lg6": "lg6"
    }
  }, [_vm._c('v-list', [_vm._c('v-list-item', [_vm._c('v-list-item-avatar', {
    staticClass: "primary",
    attrs: {
      "x-large": "x-large"
    }
  }, [_vm._v("add_to_queue")]), _vm._c('v-list-item-title', [_vm._v("Premade Vue CLI Templates"), _vm._c('v-list-item-sub-title', [_vm._v("Vuetify comes with 3 Vue CLI templates, preconfigured, and ready to go. "), _vm._c('router-link', {
    attrs: {
      "to": "/quick-start#simple"
    }
  }, [_vm._v("Simple HTML")]), _vm._v(", "), _vm._c('router-link', {
    attrs: {
      "to": "/quick-start#webpack"
    }
  }, [_vm._v("Webpack")]), _vm._v(", and "), _vm._c('router-link', {
    attrs: {
      "to": "/quick-start#webpack-ssr"
    }
  }, [_vm._v("Weback SSR")]), _vm._v(" "), _vm._c('em', [_vm._v("(Server Side Rendering)")]), _vm._v(".")])])])])]), _vm._c('v-col', {
    attrs: {
      "xs12": "xs12",
      "md6": "md6",
      "lg6": "lg6"
    }
  }, [_vm._c('v-list', [_vm._c('v-list-item', [_vm._c('v-list-item-avatar', {
    staticClass: "primary",
    attrs: {
      "x-large": "x-large"
    }
  }, [_vm._v("open_in_browser")]), _vm._c('v-list-item-title', [_vm._v("Built with Vue Server Side Rendering"), _vm._c('v-list-item-sub-title', [_vm._v("Using an internal bus, Vuetify is ready from installation for SSR based applications. This bus is also exposed, making it available for hooking into, further customizing your application.")])])])])])])])]), _vm._c('section', [_vm._c('section-header', [_vm._v("Ecosystem")]), _vm._c('div', {
    staticClass: "section-text"
  }, [_vm._v("Vuetify also comes with a subset of packages to help expedite the prototyping process, add additional functionality and additional components.")]), _vm._c('v-list', [_vm._c('v-list-item', [_vm._c('v-list-item-icon', [_vm._v("color_lens")]), _vm._c('v-list-item-title', [_vm._v("Material Design Color Pack")])]), _vm._c('v-list-item', [_vm._c('v-list-item-icon', [_vm._v("play_arrow")]), _vm._c('v-list-item-title', [_vm._v("Vue CLI Templates including SSR")])]), _vm._c('v-list-item', [_vm._c('v-list-item-icon', [_vm._v("security")]), _vm._c('v-list-item-title', [_vm._c('span', [_vm._v("Vuetify Admin Components "), _vm._c('v-chip', {
    staticClass: "green white--text",
    attrs: {
      "label": ""
    }
  }, [_vm._v("Coming Soon")])])])])])]), _vm._c('section', [_vm._c('section-header', [_vm._v("Roadmap")]), _vm._c('div', {
    staticClass: "section-text"
  }, [_vm._v("With the baseline complete, some of the goals of this project before launch:")]), _vm._c('v-list', [_vm._c('v-list-item', [_vm._c('v-list-item-icon', [_vm._v("remove")]), _vm._c('v-list-item-title', [_vm._v("Continued fleshing out of the Documentation")])]), _vm._c('v-list-item', [_vm._c('v-list-item-icon', [_vm._v("remove")]), _vm._c('v-list-item-title', [_vm._v("Adding more depth to existing components")])]), _vm._c('v-list-item', [_vm._c('v-list-item-icon', [_vm._v("remove")]), _vm._c('v-list-item-title', [_vm._v("Create a guide for taking Vuetify SSR to production")])]), _vm._c('v-list-item', [_vm._c('v-list-item-icon', [_vm._v("remove")]), _vm._c('v-list-item-title', [_vm._v("Add Accessiblity support")])]), _vm._c('v-list-item', [_vm._c('v-list-item-icon', [_vm._v("remove")]), _vm._c('v-list-item-title', [_vm._v("Complete unreleased components, i.e. (Progress, Tables)")])]), _vm._c('v-list-item', [_vm._c('v-list-item-icon', [_vm._v("remove")]), _vm._c('v-list-item-title', [_vm._v("Bug fixing and support")])])])]), _vm._c('section', [_vm._c('whats-next', {
    attrs: {
      "route": "/quick-start",
      "text": "Quick Start"
    }
  }, [_vm._v("Select from 3 premade Vuetify vue-cli templates. These packages are based off of the official releases, pre-configured for the "), _vm._c('strong', [_vm._v("vuetify")]), _vm._v(" package.")])])])
},staticRenderFns: []}

/***/ },
/* 109 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('doc-view', {
    attrs: {
      "doc": _vm.doc,
      "id": "modals"
    }
  }, [_vm._c('component-example', {
    attrs: {
      "header": "Variants"
    }
  }, [_vm._c('v-btn', {
    directives: [{
      name: "modal",
      rawName: "v-modal:modal",
      arg: "modal"
    }],
    staticClass: "primary white--text"
  }, [_vm._v("Regular")]), _vm._c('v-modal', {
    attrs: {
      "id": "modal"
    }
  }, [_vm._c('v-card', [_vm._c('v-card-text', [_vm._c('p', {
    staticClass: "text-xs-center"
  }, [_vm._v("What is your age?")]), _vm._c('v-select', {
    attrs: {
      "options": [{
        text: '10-19',
        value: 1
      }, {
        text: '20+',
        value: 2
      }],
      "label": "What is your age?"
    }
  }), _vm._c('p', [_vm._v("This information is used to improve your experience on our site.")])]), _vm._c('v-card-row', {
    attrs: {
      "actions": "actions"
    }
  }, [_vm._c('v-btn', {
    nativeOn: {
      "click": function($event) {
        _vm.modal('modal')
      }
    }
  }, [_vm._v("Cancel")]), _vm._c('v-spacer'), _vm._c('v-btn', {
    staticClass: "green white--text",
    nativeOn: {
      "click": function($event) {
        _vm.modal('modal')
      }
    }
  }, [_vm._v("Submit")])])])]), _vm._c('v-btn', {
    directives: [{
      name: "modal",
      rawName: "v-modal:modal2",
      arg: "modal2"
    }],
    staticClass: "secondary white--text"
  }, [_vm._v("Bottom")]), _vm._c('v-modal', {
    attrs: {
      "id": "modal2",
      "bottom": "bottom"
    }
  }, [_vm._c('v-card', {
    staticClass: "secondary white--text"
  }, [_vm._c('v-card-row', {
    attrs: {
      "actions": "actions"
    }
  }, [_vm._c('div', [_vm._v("This is an example of a bottom modal.")]), _vm._c('v-spacer'), _vm._c('v-btn', {
    staticClass: "primary white--text",
    nativeOn: {
      "click": function($event) {
        _vm.modal('modal2')
      }
    }
  }, [_vm._v("Close")])])])])]), _vm._c('div', {
    slot: "markup"
  }, [_vm._c('markup', {
    attrs: {
      "lang": "html"
    }
  }, [_vm._v("<v-btn v-modal:modal class=\"primary white--text\">\n  ...\n</v-btn>\n<v-modal id=\"modal\">\n  <v-card>\n    <v-card-text>\n      ...\n    </v-card-text>\n    <v-card-row actions>\n      <v-btn v-on:click.native=\"modal('modal')\">\n        Cancel\n      </v-btn>\n      <v-spacer>\n      <v-btn v-on:click.native=\"modal('modal')\" class=\"green white--text\">\n        Submit\n      </v-btn>\n    </v-card-row>\n  </v-card>\n</v-modal>\n \n<v-btn v-modal:modal class=\"primary white--text\">\n  ...\n</v-btn>\n<v-modal id=\"modal2\">\n  <v-card>\n    <v-card-row actions>\n      <div>This is an example of a bottom modal</div>\n      <v-spacer>\n      <v-btn v-on:click=\"modal('modal2')\" class=\"primary white--text\">\n        Close\n      </v-btn>\n    </v-card-row>\n  </v-card>\n</v-modal>")]), _vm._c('markup', {
    attrs: {
      "lang": "js"
    }
  }, [_vm._v("export default {\n  methods: {\n    modal (id) {\n      this.$vuetify.bus.pub(`modal:close:${id}`)  \n    }\n  }\n}")])])])
},staticRenderFns: []}

/***/ },
/* 110 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('doc-view', {
    attrs: {
      "doc": _vm.doc
    }
  }, [_vm._c('component-example', {
    attrs: {
      "header": "Accordion"
    }
  }, [_vm._c('div', [_vm._c('v-collapsible', _vm._l((5), function(item) {
    return _vm._c('li', [_vm._c('v-collapsible-header', [_vm._v("Item")]), _vm._c('v-collapsible-body', [_vm._c('v-card', [_vm._c('v-card-text', {
      staticClass: "grey lighten-3"
    }, [_vm._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")])])])])
  }))])]), _vm._c('component-example', {
    attrs: {
      "header": "Expandable"
    }
  }, [_vm._c('div', [_vm._c('v-collapsible', {
    attrs: {
      "expand": "expand"
    }
  }, _vm._l((5), function(item) {
    return _vm._c('li', [_vm._c('v-collapsible-header', [_vm._v("Item")]), _vm._c('v-collapsible-body', [_vm._c('v-card', [_vm._c('v-card-text', {
      staticClass: "grey lighten-3"
    }, [_vm._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")])])])])
  }))])]), _vm._c('markup', {
    slot: "markup"
  }, [_vm._v("<v-collapsible>\n  <v-collapsible-header>Item</v-collapsible-header>\n  <v-collapsible-body>\n    <v-card>\n      <v-card-text class=\"grey lighten-3\">...</v-card-text>\n    </v-card>\n  </v-collapsible-body>\n</v-collapsible>")])])
},staticRenderFns: []}

/***/ },
/* 111 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('doc-view', {
    attrs: {
      "doc": _vm.doc,
      "id": "cards"
    }
  }, [_vm._c('component-example', {
    attrs: {
      "header": "Basic"
    }
  }, [_vm._c('div', [_vm._c('v-card', [_vm._c('v-card-text', [_vm._c('div', {
    domProps: {
      "textContent": _vm._s(_vm.card_text)
    }
  })])])]), _vm._c('div', [_vm._c('v-card', {
    staticClass: "blue darken-1 white--text"
  }, [_vm._c('v-card-text', [_vm._c('div', {
    domProps: {
      "textContent": _vm._s(_vm.card_text)
    }
  })])])])]), _vm._c('component-example', {
    attrs: {
      "header": "Title"
    }
  }, [_vm._c('div', [_vm._c('v-card', [_vm._c('v-card-row', {
    staticClass: "red darken-1"
  }, [_vm._c('v-card-title', {
    staticClass: "white--text"
  }, [_vm._v("Delta SkyMiles")])]), _vm._c('v-card-text', [_vm._c('v-card-row', {
    attrs: {
      "height": "75px"
    }
  }, [_vm._c('v-icon', {
    staticClass: "mr-5"
  }, [_vm._v("card_membership")]), _vm._c('div', [_vm._c('div', [_vm._v("Frequent Flyer Number")]), _vm._c('strong', [_vm._v("113241423")])])])]), _vm._c('v-card-row', {
    attrs: {
      "actions": "actions"
    }
  }, [_vm._c('v-btn', {
    staticClass: "red--text darken-1",
    attrs: {
      "flat": "flat"
    }
  }, [_vm._v("View Email")])])])]), _vm._c('div', [_vm._c('v-card', [_vm._c('v-card-row', {
    staticClass: "green darken-1"
  }, [_vm._c('v-card-title', {
    staticClass: "white--text"
  }, [_vm._c('span', [_vm._v("Marriot Rewards")]), _vm._c('v-spacer'), _vm._c('div', [_vm._c('v-btn', {
    directives: [{
      name: "dropdown",
      rawName: "v-dropdown:marriot",
      arg: "marriot"
    }],
    staticClass: "white--text",
    attrs: {
      "icon": "icon"
    }
  }, [_vm._c('v-icon', [_vm._v("more_vert")])]), _vm._c('v-dropdown', {
    attrs: {
      "id": "marriot",
      "right": "right"
    }
  }, [_vm._c('v-dropdown-item', {
    attrs: {
      "item": {
        href: 'javascript:;',
        text: 'Never show rewards'
      }
    }
  }), _vm._c('v-dropdown-item', {
    attrs: {
      "item": {
        href: 'javascript:;',
        text: 'Remove Card'
      }
    }
  }), _vm._c('v-dropdown-item', {
    attrs: {
      "item": {
        href: 'javascript:;',
        text: 'Send Feedback'
      }
    }
  })])])])]), _vm._c('v-card-text', [_vm._c('v-card-row', {
    attrs: {
      "height": "75px"
    }
  }, [_vm._c('v-icon', {
    staticClass: "mr-5"
  }, [_vm._v("card_membership")]), _vm._c('div', [_vm._c('div', [_vm._v("Membership Number")]), _vm._c('strong', [_vm._v("113241423")])])])]), _vm._c('v-card-row', {
    attrs: {
      "actions": "actions"
    }
  }, [_vm._c('v-btn', {
    staticClass: "green--text darken-1",
    attrs: {
      "flat": "flat"
    }
  }, [_vm._v("View Email")])])])])]), _vm._c('component-example', {
    attrs: {
      "header": "Picture"
    }
  }, [_vm._c('div', [_vm._c('v-card', [_vm._c('v-card-row', {
    attrs: {
      "img": "http://www.titanui.com/wp-content/uploads/2013/04/03/Vector-Cartoon-Nature-Background-03.jpg",
      "height": "300px"
    }
  }), _vm._c('v-card-text', [_vm._c('div', {
    domProps: {
      "textContent": _vm._s(_vm.card_text)
    }
  })]), _vm._c('v-card-row', {
    attrs: {
      "actions": "actions"
    }
  }, [_vm._c('v-btn', {
    staticClass: "primary--text",
    attrs: {
      "flat": "flat"
    }
  }, [_vm._v("View Updates")])])])]), _vm._c('div', [_vm._c('v-card', [_vm._c('v-card-row', {
    staticClass: "blue-grey darken-1 white--text"
  }, [_vm._c('v-card-title', [_vm._c('span', [_vm._v("Visit Space")]), _vm._c('v-spacer'), _vm._c('v-btn', {
    directives: [{
      name: "dropdown",
      rawName: "v-dropdown:space",
      arg: "space"
    }],
    staticClass: "white--text",
    attrs: {
      "icon": "icon"
    }
  }, [_vm._c('v-icon', [_vm._v("more_vert")])]), _vm._c('v-dropdown', {
    attrs: {
      "id": "space",
      "right": "right"
    }
  }, [_vm._c('v-dropdown-item', {
    attrs: {
      "item": {
        href: 'javascript:;',
        text: 'Remove Card'
      }
    }
  }), _vm._c('v-dropdown-item', {
    attrs: {
      "item": {
        href: 'javascript:;',
        text: 'Send Feedback'
      }
    }
  })])])]), _vm._c('v-card-row', {
    attrs: {
      "img": "https://s-media-cache-ak0.pinimg.com/564x/e6/f5/27/e6f5279ad0965b9ccdadc3934429d122.jpg",
      "height": "300px"
    }
  }), _vm._c('v-card-text', {
    staticClass: "blue-grey darken-3 white--text"
  }, [_vm._c('div', {
    domProps: {
      "textContent": _vm._s(_vm.card_text)
    }
  })]), _vm._c('v-card-row', {
    staticClass: "blue-grey darken-1",
    attrs: {
      "actions": "actions"
    }
  }, [_vm._c('v-btn', {
    staticClass: "white--text",
    attrs: {
      "flat": "flat"
    }
  }, [_vm._v("Get Started")]), _vm._c('v-spacer'), _vm._c('v-icon', {
    staticClass: "white--text"
  }, [_vm._v("explore")])])])])]), _vm._c('component-example', {
    attrs: {
      "header": "Background"
    }
  }, [_vm._c('div', {
    staticClass: "portrait"
  }, [_vm._c('v-card', {
    attrs: {
      "img": "https://cdn.fstoppers.com/styles/full/s3/lead/2014/11/fstoppers-natural-light-dani-how-to-retouch-dof-bokeh-sharp-facebook-female-fashion-nyc-model-portrait1.jpg",
      "height": "300px"
    }
  }, [_vm._c('v-card-row', {
    staticClass: "white--text pl-3 pt-3 pb-3",
    attrs: {
      "actions": "actions"
    }
  }, [_vm._v("Picture.png")])])]), _vm._c('div', {
    staticClass: "portrait"
  }, [_vm._c('v-card', {
    attrs: {
      "img": "http://images6.fanpop.com/image/photos/38500000/beautiful-wallpaper-1-beautiful-pictures-38538866-500-313.jpg",
      "height": "300px"
    }
  }, [_vm._c('v-card-row', {
    staticClass: "white--text pl-3 pt-3 pb-3",
    attrs: {
      "actions": "actions"
    }
  }, [_vm._v("Picture.png")])])])]), _vm._c('component-example', {
    attrs: {
      "header": "Horizontal"
    }
  }, [_vm._c('div', [_vm._c('v-card', {
    attrs: {
      "horizontal": "horizontal"
    }
  }, [_vm._c('v-card-row', {
    attrs: {
      "img": "http://www.bendut.com/i/2015/12/hotel-room-design-pictures-solid-wood-couch-light-brown-fabric-cushioning-dark-brown-blankets-artistic-wall-painting-twin-wall-lamp-rectangle-oak-wood-coffee-table-black-glass-table-top-brown-motive-c-936x702.jpg",
      "height": "125px"
    }
  }), _vm._c('v-card-column', [_vm._c('v-card-row', {
    staticClass: "brown white--text",
    attrs: {
      "height": "75px"
    }
  }, [_vm._c('v-card-text', [_vm._c('strong', [_vm._v("Reservation at Lazy Bear")]), _vm._c('div', [_vm._v("Feb 23, 7:00pm")])])]), _vm._c('v-card-row', {
    staticClass: "brown darken-2",
    attrs: {
      "actions": "actions"
    }
  }, [_vm._c('v-btn', {
    staticClass: "white--text",
    attrs: {
      "flat": "flat"
    }
  }, [_vm._c('v-icon', {
    attrs: {
      "left": "left"
    }
  }, [_vm._v("directions")]), _vm._v("Directions")])])])])]), _vm._c('div', [_vm._c('v-card', {
    attrs: {
      "horizontal": "horizontal"
    }
  }, [_vm._c('v-card-column', {
    staticClass: "amber white--text"
  }, [_vm._c('v-card-row', [_vm._c('v-spacer'), _vm._c('v-card-text', {
    staticClass: "text-xs-right"
  }, [_vm._c('strong', [_vm._v("Car Rental with Hertz")]), _vm._c('div', [_vm._v("Mar 5, 8:00pm")])])])]), _vm._c('v-card-row', {
    attrs: {
      "img": "http://www.frugaa.com/images/about/hertz-store.jpg",
      "height": "125px"
    }
  })])])]), _vm._c('component-example', {
    attrs: {
      "header": "Colored"
    }
  }, [_vm._c('div', [_vm._c('v-card', {
    staticClass: "blue darken-4 white--text"
  }, [_vm._c('v-card-row', {
    attrs: {
      "height": "200px"
    }
  }, [_vm._c('v-card-title', [_vm._v("Featured Event: "), _vm._c('br'), _vm._v("\nMay 24, 2016 "), _vm._c('br'), _vm._v("\n7-11pm")])]), _vm._c('v-card-row', {
    attrs: {
      "actions": "actions"
    }
  }, [_vm._c('v-btn', {
    staticClass: "white--text",
    attrs: {
      "flat": "flat"
    }
  }, [_vm._v("Add to Calendar")]), _vm._c('v-spacer'), _vm._c('v-icon', [_vm._v("event")])])])])]), _vm._c('markup', {
    slot: "markup"
  }, [_vm._v("<v-card class=\"green\">\n  <v-card-text>\n    ...\n  </v-card-text>\n</v-card>\n \n<v-card>\n  <v-card-row img=\"...\" height=\"300px\">\n    <v-card-title>...</v-card-title>\n  </v-card-row>\n  <v-card-text>\n     ...\n  </v-card-text>\n  <v-card-row actions>\n     <v-btn flat class=\"secondary--text\">...</v-btn>\n  </v-card-row>\n</v-card>\n \n<v-card horizontal>\n  <v-card-row img=\"...\"></v-card-title>\n  <v-card-column>\n      <v-card-text>\n          <p>...</p>\n      </v-card-text>\n      <v-card-row actions>\n          <v-btn flat class=\"secondary--text\">...</v-btn>\n      </v-card-row>\n  </v-card-column>\n</v-card>")])])
},staticRenderFns: []}

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('v-sidebar', {
    attrs: {
      "id": "mainsidebar",
      "fixed": "fixed",
      "close-on-click": "close-on-click"
    }
  }, [_vm._c('div', {
    staticClass: "vuetify",
    slot: "top"
  }, [_vm._c('router-link', {
    staticClass: "sidebar__logo",
    attrs: {
      "to": "/about"
    }
  }, [_vm._c('img', {
    attrs: {
      "src": __webpack_require__(52),
      "height": "100px",
      "width": "100px",
      "alt": "Vuetify Logo"
    }
  })]), _vm._c('a', {
    attrs: {
      "href": "https://github.com/vuetifyjs/vuetify/releases/tag/v0.7.4",
      "target": "_blank"
    }
  }, [_vm._v("v0.7.4")])]), _vm._c('v-sidebar-items', [_vm._l((_vm.items), function(item) {
    return [(item.items) ? _vm._c('v-sidebar-group', {
      attrs: {
        "item": item.parent
      }
    }, _vm._l((item.items), function(j) {
      return _vm._c('v-sidebar-item', {
        attrs: {
          "item": j,
          "router": item.router || true
        }
      }, [(j.chip) ? _vm._c('v-chip', {
        staticClass: "green"
      }, [_vm._v("updated")]) : _vm._e()])
    })) : _vm._c('v-sidebar-item', {
      attrs: {
        "item": item,
        "router": item.router || true
      }
    }, [(item.chip) ? _vm._c('v-chip', {
      staticClass: "green"
    }, [_vm._v("updated")]) : _vm._e()])]
  })], true)])
},staticRenderFns: []}

/***/ },
/* 113 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('doc-view', {
    attrs: {
      "doc": _vm.doc
    }
  }, [_vm._c('component-example', {
    attrs: {
      "header": "Character"
    }
  }, [_vm._c('v-icon', {
    directives: [{
      name: "badge",
      rawName: "v-badge:6.left",
      arg: "6",
      modifiers: {
        "left": true
      }
    }],
    staticClass: "grey--text text--lighten-1",
    attrs: {
      "large": "large"
    }
  }, [_vm._v("shopping_cart")]), _vm._c('v-icon', {
    directives: [{
      name: "badge",
      rawName: "v-badge",
      value: ({
        value: '!'
      }),
      expression: "{ value: '!' }"
    }],
    staticClass: "grey--text red--after",
    attrs: {
      "large": "large"
    }
  }, [_vm._v("mail")])]), _vm._c('component-example', {
    attrs: {
      "header": "Icon"
    }
  }, [_vm._c('v-icon', {
    directives: [{
      name: "badge",
      rawName: "v-badge:done.overlap.icon.left",
      arg: "done",
      modifiers: {
        "overlap": true,
        "icon": true,
        "left": true
      }
    }],
    staticClass: "grey--text text--lighten-1",
    attrs: {
      "large": "large"
    }
  }, [_vm._v("account_circle")]), _vm._c('v-icon', {
    directives: [{
      name: "badge",
      rawName: "v-badge:notifications.icon.overlap",
      arg: "notifications",
      modifiers: {
        "icon": true,
        "overlap": true
      }
    }],
    staticClass: "grey--text text--darken-1 orange--after",
    attrs: {
      "large": "large"
    }
  }, [_vm._v("account_box")])]), _vm._c('component-example', {
    attrs: {
      "header": "Inline"
    }
  }, [_vm._c('span', {
    directives: [{
      name: "badge",
      rawName: "v-badge:2.left",
      arg: "2",
      modifiers: {
        "left": true
      }
    }]
  }, [_vm._v("Examples")]), _vm._c('span', {
    directives: [{
      name: "badge",
      rawName: "v-badge:list.icon",
      arg: "list",
      modifiers: {
        "icon": true
      }
    }],
    staticClass: "green--after"
  }, [_vm._v("Lists")])]), _vm._c('markup', {
    attrs: {
      "lang": "xml"
    },
    slot: "markup"
  }, [_vm._v("<v-icon v-badge:done.overlap.icon.left>...</v-icon>\n \n<v-icon v-badge:5.left>...</v-icon>\n \n<v-icon v-badge=\"{ value: '!', overlap: true }\">...</v-icon>\n \n<v-icon v-badge::notifications.icon.overlap>...</v-icon>")])])
},staticRenderFns: []}

/***/ },
/* 114 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('doc-view', {
    attrs: {
      "doc": _vm.doc
    }
  }, [_vm._c('v-slider', _vm._l((_vm.items), function(item) {
    return _vm._c('v-slider-item', {
      attrs: {
        "src": item.src
      }
    })
  })), _vm._c('div', {
    slot: "markup"
  }, [_vm._c('markup', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("<v-slider>\n  <v-slider-item v-for=\"item in items\" v-bind:src=\"item.src\"></v-slider-item>\n</v-slider>")]), _vm._c('markup', {
    attrs: {
      "lang": "js"
    }
  }, [_vm._v("data () {\n  return {\n    items: [{ src: '...'}, { src: '...'}, { src: '...'}]\n  }\n}")])])])
},staticRenderFns: []}

/***/ },
/* 115 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('span', {
    staticClass: "chip--component"
  }, [_vm._c('v-chip', {
    class: _vm.component.classes,
    attrs: {
      "label": "label"
    }
  }, [_vm._v(_vm._s(_vm.component.text)), _vm._c('v-icon', {
    attrs: {
      "right": "right"
    },
    domProps: {
      "textContent": _vm._s(_vm.component.icon)
    }
  })])])
},staticRenderFns: []}

/***/ },
/* 116 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('doc-view', {
    attrs: {
      "doc": _vm.doc,
      "id": "alerts"
    }
  }, [_vm._c('component-example', {
    attrs: {
      "header": "Contextual"
    }
  }, [_vm._c('v-alert', {
    attrs: {
      "success": "success"
    }
  }, [_vm._v("This is a success alert. " + _vm._s(_vm.lorem))]), _vm._c('v-alert', {
    attrs: {
      "info": "info"
    }
  }, [_vm._v(" This is an info alert " + _vm._s(_vm.lorem))]), _vm._c('v-alert', {
    attrs: {
      "warning": "warning"
    }
  }, [_vm._v(" This is a warning alert " + _vm._s(_vm.lorem))]), _vm._c('v-alert', {
    attrs: {
      "error": "error"
    }
  }, [_vm._v(" This is a error alert " + _vm._s(_vm.lorem))])]), _vm._c('component-example', {
    attrs: {
      "header": "Closable"
    }
  }, [_vm._c('div', [(!_vm.alert) ? _vm._c('div', {
    staticClass: "text-xs-center"
  }, [_vm._c('v-btn', {
    staticClass: "primary white--text",
    nativeOn: {
      "click": function($event) {
        _vm.alert = true
      }
    }
  }, [_vm._v("Reset Alert")])]) : _vm._e(), _vm._c('v-alert', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.alert),
      expression: "alert"
    }],
    attrs: {
      "success": "success",
      "close": "close"
    },
    domProps: {
      "value": (_vm.alert)
    },
    on: {
      "input": function($event) {
        _vm.alert = $event
      }
    }
  }, [_vm._v("This is a success alert that is closable. " + _vm._s(_vm.lorem))])])]), _vm._c('markup', {
    attrs: {
      "lang": "html"
    },
    slot: "markup"
  }, [_vm._l((_vm.types), function(type) {
    return [_vm._v(" \n<v-alert " + _vm._s(type) + ">\n  ...\n</v-alert>\n ")]
  }), _vm._v(" \n<v-alert success close v-model=\"alert\">\n  ...\n</v-alert>")], true)])
},staticRenderFns: []}

/***/ },
/* 117 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('doc-view', {
    attrs: {
      "doc": _vm.doc
    }
  }, [_vm._c('component-example', [_vm._c('v-btn', {
    attrs: {
      "secondary": "secondary"
    },
    nativeOn: {
      "click": function($event) {
        _vm.toast(_vm.left)
      }
    }
  }, [_vm._v("Left")]), _vm._c('v-btn', {
    attrs: {
      "secondary": "secondary"
    },
    nativeOn: {
      "click": function($event) {
        _vm.toast(_vm.right)
      }
    }
  }, [_vm._v("Right")]), _vm._c('v-btn', {
    attrs: {
      "secondary": "secondary"
    },
    nativeOn: {
      "click": function($event) {
        _vm.toast(_vm.top)
      }
    }
  }, [_vm._v("Top")]), _vm._c('v-btn', {
    attrs: {
      "secondary": "secondary"
    },
    nativeOn: {
      "click": function($event) {
        _vm.toast(_vm.bottom)
      }
    }
  }, [_vm._v("Bottom")]), _vm._c('v-btn', {
    attrs: {
      "secondary": "secondary"
    },
    nativeOn: {
      "click": function($event) {
        _vm.toast(_vm.snack)
      }
    }
  }, [_vm._v("Snack")]), _vm._c('v-btn', {
    attrs: {
      "secondary": "secondary"
    },
    nativeOn: {
      "click": function($event) {
        _vm.toast(_vm.cb)
      }
    }
  }, [_vm._v("Callback")])]), _vm._c('div', {
    slot: "markup"
  }, [_vm._c('markup', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("<v-btn v-on:click.native=\"toast(info)\">...</v-btn>\n \n<v-btn v-on:click.native=\"toast(cb)\">...</v-btn>")]), _vm._c('markup', {
    attrs: {
      "lang": "js"
    }
  }, [_vm._v("data () {\n  return {\n    cb: ['Toast with callback', 'right', 4000, () =>('Callback')],\n    info: ['Toast', 'left'],\n  }\n},\nmethods: {\n  toast (data) {\n    this.$vuetify.toast.create(...data)\n  }\n}")])])])
},staticRenderFns: []}

/***/ },
/* 118 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', [_vm._c('component-header', [_vm._v(_vm._s(_vm.header))]), _vm._c('div', {
    staticClass: "component-example"
  }, [_vm._t("default")], true)])
},staticRenderFns: []}

/***/ },
/* 119 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('doc-view', {
    attrs: {
      "doc": _vm.doc,
      "id": "chips-view"
    }
  }, [_vm._c('component-example', {
    attrs: {
      "header": "Default"
    }
  }, [_vm._c('v-chip', [_vm._v("Chip")]), _vm._c('v-chip', {
    attrs: {
      "small": "small"
    }
  }, [_vm._c('v-icon', [_vm._v("code")])])]), _vm._c('component-example', {
    attrs: {
      "header": "Colored"
    }
  }, [_vm._c('v-chip', {
    staticClass: "primary white--text"
  }, [_vm._v("Primary")]), _vm._c('v-chip', {
    staticClass: "secondary white--text"
  }, [_vm._v("Secondary")]), _vm._c('v-chip', {
    staticClass: "red white--text"
  }, [_vm._v("Colored Chip")]), _vm._c('v-chip', {
    staticClass: "green white--text"
  }, [_vm._v("Colored Chip")])]), _vm._c('component-example', {
    attrs: {
      "header": "Icon"
    }
  }, [_vm._c('v-chip', [_vm._c('v-icon', {
    attrs: {
      "left": "left"
    }
  }, [_vm._v("account_circle")]), _vm._v("Ranee")]), _vm._c('v-chip', {
    staticClass: "orange white--text"
  }, [_vm._v("Premium"), _vm._c('v-icon', {
    attrs: {
      "right": "right"
    }
  }, [_vm._v("star")])]), _vm._c('v-chip', {
    staticClass: "primary white--text"
  }, [_vm._v("1 Year"), _vm._c('v-icon', {
    attrs: {
      "right": "right"
    }
  }, [_vm._v("cake")])]), _vm._c('v-chip', {
    staticClass: "green white--text"
  }, [_vm._c('v-icon', [_vm._v("done_all")])]), _vm._c('v-chip', {
    staticClass: "teal white--text",
    attrs: {
      "close": "close"
    }
  }, [_vm._c('v-icon', {
    attrs: {
      "left": "left"
    }
  }, [_vm._v("check_circle")]), _vm._v("Confirmed")])]), _vm._c('component-example', {
    attrs: {
      "header": "Outline"
    }
  }, [_vm._c('v-chip', {
    staticClass: "secondary secondary--text",
    attrs: {
      "outline": "outline"
    }
  }, [_vm._v("Outline")]), _vm._c('v-chip', {
    staticClass: "primary primary--text",
    attrs: {
      "outline": "outline"
    }
  }, [_vm._v("Colored")]), _vm._c('v-chip', {
    staticClass: "red red--text",
    attrs: {
      "outline": "outline"
    }
  }, [_vm._c('v-icon', {
    attrs: {
      "left": "left"
    }
  }, [_vm._v("build")]), _vm._v("Icon")])]), _vm._c('component-example', {
    attrs: {
      "header": "Label"
    }
  }, [_vm._c('v-chip', {
    attrs: {
      "label": "label"
    }
  }, [_vm._v("Label")]), _vm._c('v-chip', {
    staticClass: "pink white--text",
    attrs: {
      "label": "label"
    }
  }, [_vm._c('v-icon', {
    attrs: {
      "left": "left"
    }
  }, [_vm._v("label")]), _vm._v("Tags")]), _vm._c('v-chip', {
    staticClass: "red red--text",
    attrs: {
      "label": "label",
      "outline": "outline"
    }
  }, [_vm._v("Outline")])]), _vm._c('component-example', {
    attrs: {
      "header": "Closable"
    }
  }, [(!_vm.chip1 && !_vm.chip2 && !_vm.chip3 && !_vm.chip4) ? _vm._c('div', {
    staticClass: "text-xs-center"
  }, [_vm._c('v-btn', {
    staticClass: "primary white--text",
    nativeOn: {
      "click": function($event) {
        _vm.chip1 = true, _vm.chip2 = true, _vm.chip3 = true, _vm.chip4 = true
      }
    }
  }, [_vm._v("Reset Chips")])]) : _vm._e(), _vm._c('v-chip', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.chip1),
      expression: "chip1"
    }],
    attrs: {
      "close": "close"
    },
    domProps: {
      "value": (_vm.chip1)
    },
    on: {
      "input": function($event) {
        _vm.chip1 = $event
      }
    }
  }, [_vm._v("Closable")]), _vm._c('v-chip', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.chip2),
      expression: "chip2"
    }],
    staticClass: "red white--text",
    attrs: {
      "close": "close"
    },
    domProps: {
      "value": (_vm.chip2)
    },
    on: {
      "input": function($event) {
        _vm.chip2 = $event
      }
    }
  }, [_vm._v("Remove")]), _vm._c('v-chip', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.chip3),
      expression: "chip3"
    }],
    staticClass: "green green--text",
    attrs: {
      "close": "close",
      "outline": "outline"
    },
    domProps: {
      "value": (_vm.chip3)
    },
    on: {
      "input": function($event) {
        _vm.chip3 = $event
      }
    }
  }, [_vm._v("Success")]), _vm._c('v-chip', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.chip4),
      expression: "chip4"
    }],
    staticClass: "orange orange--text",
    attrs: {
      "close": "close",
      "outline": "outline",
      "label": "label"
    },
    domProps: {
      "value": (_vm.chip4)
    },
    on: {
      "input": function($event) {
        _vm.chip4 = $event
      }
    }
  }, [_vm._v("Complete")])]), _vm._c('markup', {
    slot: "markup"
  }, [_vm._v("<v-chip>\n  ...\n</v-chip>\n \n<v-chip label>\n  ...\n</v-chip>\n \n<v-chip outline>\n  <v-icon left>list</v-icon>\n  ...\n</v-chip>\n \n<v-chip small>\n  ...\n</v-chip>\n \n<v-chip close>\n  ...\n</v-chip>")])])
},staticRenderFns: []}

/***/ },
/* 120 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('doc-view', {
    attrs: {
      "id": "progress",
      "doc": _vm.doc
    }
  }, [_vm._c('component-example', {
    attrs: {
      "header": "Fixed Width"
    }
  }, [_vm._c('div', [_vm._c('v-progress', {
    attrs: {
      "value": "25",
      "min": "0",
      "max": "100"
    }
  })]), _vm._c('div', [_vm._c('v-progress', {
    attrs: {
      "value": "50",
      "min": "0",
      "max": "100"
    }
  })]), _vm._c('div', [_vm._c('v-progress', {
    attrs: {
      "value": "75",
      "min": "0",
      "max": "100"
    }
  })]), _vm._c('div', [_vm._c('v-progress', {
    attrs: {
      "value": "100",
      "min": "0",
      "max": "100"
    }
  })])]), _vm._c('component-example', {
    attrs: {
      "header": "Indeterminate"
    }
  }, [_vm._c('div', [_vm._c('v-progress', {
    attrs: {
      "indeterminate": "indeterminate"
    }
  })])]), _vm._c('markup', {
    slot: "markup"
  }, [_vm._v("<v-progress value=\"100\" min=\"0\" max=\"100\"></v-progress>\n \n<v-progress indeterminate></v-progress>\n \n<v-progress v-model=\"progress\" min=\"0\" max=\"100\"></v-progress>")])])
},staticRenderFns: []}

/***/ },
/* 121 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('v-app', {
    attrs: {
      "left-fixed-sidebar": "left-fixed-sidebar",
      "top-navbar": "top-navbar"
    }
  }, [_vm._c('main-nav', {
    attrs: {
      "title": _vm.title
    }
  }), _vm._c('main', [_vm._c('main-side'), _vm._c('v-content', [_vm._c('v-container', {
    attrs: {
      "fluid": "fluid"
    }
  }, [_vm._c('transition', {
    attrs: {
      "name": "slide",
      "mode": "out-in"
    }
  }, [_vm._c('router-view', {
    on: {
      "view": _vm.meta
    }
  })])])])]), _vm._c('main-footer')])
},staticRenderFns: []}

/***/ },
/* 122 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('doc-view', {
    attrs: {
      "doc": _vm.doc
    }
  }, [_vm._c('component-example', {
    attrs: {
      "header": "Basic"
    }
  }, [_vm._c('v-list', [_vm._c('v-list-item', [_vm._c('v-list-item-title', [_vm._v("Person")])]), _vm._c('v-list-item', [_vm._c('v-list-item-title', [_vm._v("Person")])]), _vm._c('v-list-item', [_vm._c('v-list-item-title', [_vm._v("Person")])])])]), _vm._c('component-example', {
    attrs: {
      "header": "With Icon"
    }
  }, [_vm._c('v-list', [_vm._c('v-list-item', [_vm._c('v-list-item-icon', [_vm._v("person")]), _vm._c('v-list-item-title', [_vm._v("Person")])]), _vm._c('v-list-item', [_vm._c('v-list-item-icon', [_vm._v("person")]), _vm._c('v-list-item-title', [_vm._v("Person")])]), _vm._c('v-list-item', [_vm._c('v-list-item-icon', [_vm._v("person")]), _vm._c('v-list-item-title', [_vm._v("Person")])])])]), _vm._c('component-example', {
    attrs: {
      "header": "With Avatar"
    }
  }, [_vm._c('v-list', [_vm._c('v-list-item', [_vm._c('a', {
    directives: [{
      name: "dropdown",
      rawName: "v-dropdown:dropdown",
      arg: "dropdown"
    }],
    attrs: {
      "href": "#!"
    }
  }, [_vm._c('v-list-item-avatar', {
    staticClass: "orange",
    attrs: {
      "large": "large"
    }
  }, [_vm._v("event")])]), _vm._c('v-dropdown', {
    attrs: {
      "id": "dropdown",
      "items": _vm.items
    }
  }), _vm._c('v-list-item-title', [_vm._v("Person")])]), _vm._c('v-list-item', [_vm._c('v-list-item-avatar', {
    directives: [{
      name: "badge",
      rawName: "v-badge:notifications.icon",
      arg: "notifications",
      modifiers: {
        "icon": true
      }
    }],
    staticClass: "brown",
    attrs: {
      "large": "large"
    }
  }, [_vm._v("person")]), _vm._c('v-list-item-title', [_vm._v("Person")]), _vm._c('v-list-item-action', [_vm._c('a', {
    directives: [{
      name: "dropdown",
      rawName: "v-dropdown:menu",
      arg: "menu"
    }],
    attrs: {
      "href": "#!"
    }
  }, [_vm._c('v-icon', {
    staticClass: "blue--text",
    attrs: {
      "medium": "medium"
    }
  }, [_vm._v("edit")])]), _vm._c('v-dropdown', {
    attrs: {
      "id": "menu",
      "items": _vm.items,
      "right": "right"
    }
  })])]), _vm._c('v-list-item', [_vm._c('v-list-item-avatar', {
    staticClass: "green",
    attrs: {
      "large": "large"
    }
  }, [_vm._v("phone")]), _vm._c('v-list-item-title', [_vm._c('span', [_vm._v("Person")]), _vm._c('v-list-item-sub-title', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")])]), _vm._c('v-list-item-action', [_vm._c('v-list-item-action-title', [_vm._v("Contact")]), _vm._c('a', {
    attrs: {
      "href": "#!"
    }
  }, [_vm._c('v-icon', {
    staticClass: "grey--text darken-1"
  }, [_vm._v("email")])])])])])]), _vm._c('markup', {
    slot: "markup"
  }, [_vm._v("<v-list>\n  <v-list-item>\n    <v-list-item-title>\n      ...\n    </v-list-item-title>  \n  </v-list-item>\n</v-list>\n \n<v-list>\n  <v-list-item>\n    <v-list-item-icon>list</v-list-item-icon>\n    <v-list-item-title>\n      ...\n    </v-list-item-title>\n  </v-list-item>\n</v-list>\n \n<v-list>\n  <v-list-item>\n    <v-list-item-avatar class=\"green\" large>list</v-list-item-avatar>\n    <v-list-item-title>\n      <span>...</span>\n      <v-list-item-sub-title>...</v-list-item-sub-title>\n    </v-list-item-title>\n    <v-list-item-action>\n      <v-list-item-action-title>...</v-list-item-action-title>\n      <a href=\"#!\">\n        <v-icon class=\"grey--text darken-1\">email</v-icon>\n    </v-list-item-action>\n  </v-list-item>\n</v-list>")])])
},staticRenderFns: []}

/***/ },
/* 123 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "view"
  }, [_vm._c('section', [_vm._c('section-text', [_vm._c('dt', {
    slot: "title"
  }, [_vm._v("Event Bus")]), _vm._c('dd', {
    slot: "desc"
  }, [_vm._v("The Vuetify "), _vm._c('code', [_vm._v("bus")]), _vm._v(" is the glue that holds all of your components together. Made for Vue SSR "), _vm._c('em', [_vm._v("(Server Side Rendering)")]), _vm._v(", the bus system ensures that components are able to work in a variety of setups.")])])]), _vm._c('section', [_vm._c('section-header', [_vm._v("Components")]), _vm._m(0), _vm._c('markup', {
    attrs: {
      "lang": "js"
    }
  }, [_vm._v("data () {\n  return {\n    popup_data: ['Toast with Callback', 'right', 4000, () => alert('Callback')],\n  }\n}\nmounted () {\n  this.$vuetify.bus.sub('modal:close:demo-modal', this.popup)\n},\nmethods: {\n  popup () {\n    this.$vuetify.toast.create(...popup_data)\n  }\n}")]), _vm._m(1), _vm._c('markup', {
    attrs: {
      "lang": "html"
    }
  }, [_vm._v("{component name}:{component action}:{component id}(optional)")])]), _vm._c('section', [_vm._c('section-header', [_vm._v("Events")]), _vm._m(2), _vm._c('markup', {
    attrs: {
      "lang": "js"
    }
  }, [_vm._v("mounted () {\n  this.$vuetify.bus.sub('modal:close:demo-modal', this.popup)\n},\nbeforeDestroy () {\n  this.$vuetify.bus.unsub('modal:close:demo-modal', this.popup)\n}")]), _vm._c('p', {
    staticClass: "section-text"
  }, [_vm._v("While this accomplishes binding and unbinding an event, it can become tedious in a larger application. To combat this, Vuetify provides a simple Vue mixin to do this automatically for you. The mixin looks for an event variable on the component. The mixin also assumes event to be an array of arrays. ")]), _vm._c('markup', {
    attrs: {
      "lang": "js"
    }
  }, [_vm._v("import Eventable from '../node_modules/vuetify/src/mixins/eventable'\n \nexport default {\n  mixins: [Eventable],\n  computed: {\n    events () {\n      return [\n        'modal:open:demo-modal', this.open,\n        'modal:close:demo-modal', this.popup\n      ]\n    }\n  }\n}")]), _vm._c('p', {
    staticClass: "section-text"
  }, [_vm._v("The above will automatically sub to the Bus upon creation and unsub when removed.")])]), _vm._c('section', [_vm._c('section-header', [_vm._v("Extending")]), _vm._c('p', {
    staticClass: "section-text"
  }, [_vm._v("You may want to create your own events in order to support your application, which is just as easy as hooking into existing ones. This allows you to take advantage of the SSR capabilities you get by default.")]), _vm._c('markup', {
    attrs: {
      "lang": "js"
    }
  }, [_vm._v("this.$vuetify.bus.sub('{unique string}', callback)\n \nthis.$vuetify.bus.pub('{unique string}', arg1, arg2)")]), _vm._c('h6', [_vm._v("Loading")]), _vm._m(3), _vm._c('markup', {
    attrs: {
      "lang": "js"
    }
  }, [_vm._v("mounted () {\n  this.$vuetify.load(this.init)\n},\nmethods: {\n  init () {\n    alert('Component ready!')\n  }\n}")])]), _vm._c('section', [_vm._c('whats-next', {
    attrs: {
      "route": "/layouts",
      "text": "Layouts"
    }
  }, [_vm._v("Now that you have all the tools needed to build your next awesome application, head over to the layouts section to choose a ui.")])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('p', {
    staticClass: "section-text"
  }, [_vm._v("Vuetify's components utilize a simple pub/sub Bus in order to communicate throughout an application. This makes your website 100% compatible with server side rendering. It also makes it easy to hook into a components functionality through "), _vm._c('code', [_vm._v("this.$vuetify.bus")]), _vm._v(".")])
},function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "section-text"
  }, [_vm._c('p', [_vm._v("In the example above, we hook into the close event of a modal with the id of "), _vm._c('code', [_vm._v("demo-modal")]), _vm._v(". All of Vuetify's events follow a similar structure:")])])
},function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('p', {
    staticClass: "section-text"
  }, [_vm._v("When Vue components are broken down, event listeners need to be removed. This is the process for regular "), _vm._c('strong', [_vm._v("DOM")]), _vm._v(" event listeners, and it is the same for the Vuetify Bus. This can be done by calling the "), _vm._c('strong', [_vm._v("unsub")]), _vm._v(" method on the bus in the Vue "), _vm._c('strong', [_vm._v("beforeDestroy")]), _vm._v(" hook.")])
},function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('p', {
    staticClass: "text-text"
  }, [_vm._v("Depending on the state of your application, you may need to wait for the "), _vm._c('strong', [_vm._v("DOM")]), _vm._v(" to be ready or just call immediately. Vuetify provides a simple function that will do this for you.")])
}]}

/***/ },
/* 124 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "view",
    attrs: {
      "id": "quick-start"
    }
  }, [_vm._c('section', [_vm._c('section-text', [_vm._c('strong', {
    slot: "title"
  }, [_vm._v("Getting Started")]), _vm._c('p', {
    slot: "desc"
  }, [_vm._v("Using one of Vuetify's Vue CLI packages (based on the official examples), get your project started in no time. Vuetify supports Vue JS server side rendering, SPA (Single Page Application) and standard HTML pages.")])])]), _vm._c('section', [_vm._c('section-header', [_vm._v("Required Files")]), _vm._c('p', {
    staticClass: "section-text"
  }, [_vm._v("Vuetify requires Google's Roboto Font and Material Icons.")]), _vm._c('markup', {
    attrs: {
      "lang": "html"
    }
  }, [_vm._v("<link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel=\"stylesheet\" type=\"text/css\">")])]), _vm._c('section', [_vm._c('section-header', [_vm._v("Manual Install")]), _vm._m(0), _vm._c('markup', {
    attrs: {
      "lang": "html"
    }
  }, [_vm._v("<link href=\"https://unpkg.com/vuetify/dist/vuetify.min.css\" rel=\"stylesheet\" type=\"text/css\">\n<script src=\"https://unpkg.com/vuetify/dist/vuetify.min.js\"></script>")]), _vm._c('h6', [_vm._v("Existing Projects")]), _vm._c('p', {
    staticClass: "section-text"
  }, [_vm._v("If you are wanting to use Vuetify in an existing project, you can install by using npm or yarn.")]), _vm._c('markup', {
    attrs: {
      "lang": "cli"
    }
  }, [_vm._v("npm install vuetify --save-dev\n \nyarn add vuetify --dev")]), _vm._c('p', {
    staticClass: "section-text"
  }, [_vm._v("Now, in your index.js, import Vuetify and apply the plugin to Vue.")]), _vm._c('markup', {
    attrs: {
      "lang": "js"
    }
  }, [_vm._v("import Vue from 'vue'\nimport Vuetify from 'vuetify'\n \nVue.use(Vuetify)")]), _vm._m(1), _vm._c('markup', {
    attrs: {
      "lang": "js"
    }
  }, [_vm._v("mounted () {\n  this.$vuetify.init()\n}")])]), _vm._c('section', [_vm._c('section-header', [_vm._v("Vue CLI")]), _vm._m(2), _vm._c('v-tabs', {
    staticClass: "z-depth-1",
    attrs: {
      "id": "vue-cli"
    }
  }, [_vm._c('v-tabs-tabs', [_vm._c('v-tab', {
    attrs: {
      "href": "#simple",
      "selected": "selected"
    }
  }, [_vm._v("Simple HTML "), _vm._c('br'), _vm._c('small', [_vm._v("(Beginner)")])]), _vm._c('v-tab', {
    attrs: {
      "href": "#webpack"
    }
  }, [_vm._v("Webpack "), _vm._c('br'), _vm._c('small', [_vm._v("(Intermediate)")])]), _vm._c('v-tab', {
    attrs: {
      "href": "#webpack-ssr"
    }
  }, [_vm._v("Webpack SSR "), _vm._c('br'), _vm._c('small', [_vm._v("(Advanced)")])])]), _vm._c('v-tabs-items', [_vm._c('v-tabs-item', {
    attrs: {
      "id": "simple"
    }
  }, [_vm._c('h4', [_vm._v("Simple HTML Quick Start")]), _vm._c('p', [_vm._v("This template is intended for users who want to try out Vue and Vuetify in the most simple way. It contains a basic index.html with no additional functionality. ")]), _vm._c('markup', {
    attrs: {
      "lang": "cli"
    }
  }, [_vm._v("vue init vuetifyjs/simple")])]), _vm._c('v-tabs-item', {
    attrs: {
      "id": "webpack"
    }
  }, [_vm._c('h4', [_vm._v("Webpack Quick Start")]), _vm._c('p', [_vm._v("This template is intended for users who are already familiar with Vue/Webpack. This is a basic setup for Vue with Vuetify.. It is recommended for basic prototyping and mockups.")]), _vm._c('markup', {
    attrs: {
      "lang": "cli"
    }
  }, [_vm._v("vue init vuetifyjs/webpack")])]), _vm._c('v-tabs-item', {
    attrs: {
      "id": "webpack-ssr"
    }
  }, [_vm._c('h4', [_vm._v("Webpack SSR Quick Start")]), _vm._c('p', [_vm._v("This template is for advanced users looking to utilize the new Vue Server Renderer. Based off of structure setup in the VueJS 2 "), _vm._c('a', {
    attrs: {
      "href": "https://github.com/vuejs/vue-hackernews-2.0",
      "target": "_blank"
    }
  }, [_vm._v("Hackernews")]), _vm._v(" repository, the Vuetify SSR template provides next generation functionality for advanced web applications.")]), _vm._c('markup', {
    attrs: {
      "lang": "cli"
    }
  }, [_vm._v("vue init vuetifyjs/webpack-ssr")])])])]), _vm._c('h6', [_vm._v("NPM Install")]), _vm._c('p', {
    staticClass: "section-text"
  }, [_vm._v("After the vue-cli installation finishes:")]), _vm._c('markup', {
    attrs: {
      "lang": "cli"
    }
  }, [_vm._v("cd <package-name>\nnpm install")]), _vm._m(3), _vm._c('markup', {
    attrs: {
      "lang": "cli"
    }
  }, [_vm._v("cd <package-name>\nyarn")]), _vm._m(4), _vm._c('markup', {
    attrs: {
      "lang": "cli"
    }
  }, [_vm._v("npm run dev")]), _vm._m(5)]), _vm._c('section', [_vm._c('section-header', [_vm._v("Color Pack")]), _vm._m(6)]), _vm._c('section', [_vm._c('whats-next', {
    attrs: {
      "route": "/overview",
      "text": "Overview"
    }
  }, [_vm._v("Now that you have your project setup and ready to go, let's go over application structure of the "), _vm._c('strong', [_vm._v("webpack ssr")]), _vm._v(" template.")])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('p', {
    staticClass: "section-text"
  }, [_vm._v("If you would like to test Vuetify without installing a template from Vue CLI, just include the files below into your "), _vm._c('code', [_vm._v("index")]), _vm._v(" file of your application after Vue. Vuetify will automatically install into Vue and be ready to use! This will also require the dependency above.")])
},function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('p', {
    staticClass: "section-text"
  }, [_vm._v("Once you have Vuetify installed, in your main App.vue file, add the Vuetify "), _vm._c('code', [_vm._v("init")]), _vm._v(" function to the Vue mounted hook.")])
},function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('p', {
    staticClass: "section-text"
  }, [_vm._v("Vuetify has 3 pre-made Vue CLI templates, 2 being forked from "), _vm._c('a', {
    attrs: {
      "href": "#!"
    }
  }, [_vm._v("official VueJS templates")]), _vm._v(". They contain small modifications to help you get started with Vuetify even faster. These packages require "), _vm._c('code', [_vm._v("vue-cli")]), _vm._v(". For more information on vue-cli, visit the official "), _vm._c('a', {
    attrs: {
      "href": "https://github.com/vuejs/vue-cli",
      "target": "_blank"
    }
  }, [_vm._v("Github")]), _vm._v(" repository.")])
},function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('p', [_vm._v("Or alernatively, using Facebook's recently released "), _vm._c('a', {
    attrs: {
      "href": "https://yarnpkg.com/",
      "target": "_blank"
    }
  }, [_vm._v("yarn package manager")]), _vm._v(".")])
},function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('p', {
    staticClass: "section-text"
  }, [_vm._v("If you are using the "), _vm._c('code', [_vm._v("simple")]), _vm._v(" vue-cli package, you are ready to go. Simply open up "), _vm._c('code', [_vm._v("index.html")]), _vm._v(" in any browser. For any other package, type:")])
},function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('p', {
    staticClass: "section-text"
  }, [_vm._v("into your console. This will start a "), _vm._c('a', {
    attrs: {
      "href": "https://nodejs.org/en/",
      "target": "_blank"
    }
  }, [_vm._v("nodejs")]), _vm._v(" server locally which can be accessed by navigating to "), _vm._c('a', {
    attrs: {
      "href": "http://localhost:8080",
      "target": "_blank"
    }
  }, [_vm._v("http://localhost:8080")]), _vm._v(" in your browser.")])
},function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('p', {
    staticClass: "section-text"
  }, [_vm._v("Vuetify comes pre-built with a Material Design Color Pack (thanks "), _vm._c('a', {
    attrs: {
      "href": "http://materializecss.com/color.html",
      "target": "_blank"
    }
  }, [_vm._v("Materialize.css")]), _vm._v(") by default. While convenient, this also increases the css export size by ~30kb. To disable this, navigate to "), _vm._c('strong', [_vm._v("src/stylus/main.styl")]), _vm._v(" and assign "), _vm._c('code', [_vm._v("$color-pack")]), _vm._v(" to false.")])
}]}

/***/ },
/* 125 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('doc-view', {
    attrs: {
      "doc": _vm.doc,
      "id": "sidebars"
    }
  }, [_vm._c('component-example', {
    attrs: {
      "header": "Left"
    }
  }, [_vm._c('div', {
    staticClass: "grey lighten-1"
  }, [_vm._c('v-navbar', [_vm._c('div', {
    staticClass: "navbar__side-icon hidden-sm-and-up"
  }, [_vm._c('a', {
    directives: [{
      name: "side-bar",
      rawName: "v-side-bar:doc-sidebar-1",
      arg: "doc-sidebar-1"
    }],
    attrs: {
      "href": "#!"
    }
  }, [_vm._c('v-icon', [_vm._v("reorder")])])]), _vm._c('v-navbar-logo', [_vm._v("Logo")])]), _vm._c('v-sidebar', {
    staticClass: "white",
    attrs: {
      "id": "doc-sidebar-1",
      "height": "40vh"
    }
  }, [_vm._c('v-sidebar-items', {
    attrs: {
      "items": _vm.items
    }
  })])])]), _vm._c('component-example', {
    attrs: {
      "header": "Drawer"
    }
  }, [_vm._c('div', {
    staticClass: "grey lighten-1"
  }, [_vm._c('v-navbar', [_vm._c('div', {
    staticClass: "navbar__side-icon"
  }, [_vm._c('a', {
    directives: [{
      name: "side-bar",
      rawName: "v-side-bar:doc-sidebar-2",
      arg: "doc-sidebar-2"
    }],
    attrs: {
      "href": "#!"
    }
  }, [_vm._c('v-icon', [_vm._v("reorder")])])]), _vm._c('v-navbar-logo', [_vm._v("Logo")])]), _vm._c('v-sidebar', {
    staticClass: "white",
    attrs: {
      "id": "doc-sidebar-2",
      "height": "40vh",
      "drawer": "drawer"
    }
  }, [_vm._c('v-sidebar-items', {
    attrs: {
      "items": _vm.items
    }
  })])])]), _vm._c('component-example', {
    attrs: {
      "header": "Item Groups"
    }
  }, [_vm._c('div', {
    staticClass: "grey lighten-1"
  }, [_vm._c('v-navbar', [_vm._c('div', {
    staticClass: "navbar__side-icon hidden-sm-and-up"
  }, [_vm._c('a', {
    directives: [{
      name: "side-bar",
      rawName: "v-side-bar:doc-sidebar-3",
      arg: "doc-sidebar-3"
    }],
    attrs: {
      "href": "#!"
    }
  }, [_vm._c('v-icon', [_vm._v("reorder")])])]), _vm._c('v-navbar-logo', [_vm._v("Logo")])]), _vm._c('v-sidebar', {
    staticClass: "white",
    attrs: {
      "id": "doc-sidebar-3",
      "height": "40vh"
    }
  }, [_vm._c('v-sidebar-items', {
    attrs: {
      "items": _vm.item_group
    }
  })])])]), _vm._c('div', {
    slot: "markup"
  }, [_vm._c('markup', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("<v-sidebar height=\"50vh\" v-bind:items=\"items\"></v-sidebar>\n \n<v-sidebar drawer>\n  <v-sidebar-items v-bind:items=\"items\"></v-sidebar>\n</v-sidebar>\n \n<v-sidebar fixed>\n  <v-sidebar-items>\n    <v-sidebar-item v-for=\"item in items\" v-bind:item=\"item\"></v-sidebar-item>\n  </v-sidebar>\n</v-sidebar>")]), _vm._c('markup', {
    attrs: {
      "lang": "js"
    }
  }, [_vm._v("data () {\n  return {\n    items: [\n      {\n        parent: { text: 'Parent', href: '#!\" '},\n        items: [\n          { text: 'Child', href: '#!', router: false },\n          { text: 'Child', href: '#!' },\n          { text: 'Child', href: '#!', icon: 'list' },\n        ]\n      },\n      { text: 'Link', href: '#!' }\n    ]\n  }\n}")])])])
},staticRenderFns: []}

/***/ },
/* 126 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('v-footer', {
    staticClass: "grey darken-2 white--text"
  }, [_vm._c('div', {
    staticClass: "text-xs-right"
  }, [_vm._v("© 2016 "), _vm._c('a', {
    staticClass: "white--text",
    attrs: {
      "href": "http://johnleider.com",
      "target": "_blank"
    }
  }, [_vm._v("John Leider")])])])
},staticRenderFns: []}

/***/ },
/* 127 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "doc"
  }, [_vm._c('section', [_vm._c('section-text', [_vm._c('dt', {
    slot: "title"
  }, [_vm._c('strong', [_vm._v("Colors")])]), _vm._c('dd', {
    slot: "desc"
  }, [_vm._c('div', [_vm._v("Soon")])])])]), _vm._c('section', {
    attrs: {
      "id": "colors"
    }
  }, [_vm._c('section-header', [_vm._v("Material Design")]), _vm._c('component-example', {
    attrs: {
      "header": "Classes"
    }
  }, [_vm._c('v-container', {
    attrs: {
      "fluid": "fluid"
    }
  }, [_vm._c('v-row', _vm._l((_vm.colors), function(color) {
    return _vm._c('v-col', {
      attrs: {
        "xs6": "xs6",
        "sm6": "sm6",
        "md4": "md4",
        "lg3": "lg3"
      }
    }, [_vm._c('v-card', {
      class: [color],
      attrs: {
        "height": "100px"
      }
    }, [_vm._c('v-card-text', [_vm._c('h3', [_vm._v(_vm._s(color))])])]), _vm._l(([4, 3, 2, 1]), function(n) {
      return _vm._c('v-card', {
        staticClass: "black--text",
        class: [color, 'lighten-' + n]
      }, [_vm._c('v-card-text', [_vm._v(_vm._s(color) + " Lighten-" + _vm._s(n))])])
    }), _vm._l((4), function(n) {
      return _vm._c('v-card', {
        class: [color, 'darken-' + n]
      }, [_vm._c('v-card-text', [_vm._v(_vm._s(color) + " Darken-" + _vm._s(n))])])
    }), _vm._l((4), function(n) {
      return (!['grey', 'blue-grey', 'brown'].includes(color)) ? _vm._c('v-card', {
        staticClass: "black--text",
        class: [color, 'accent-' + n]
      }, [_vm._c('v-card-text', [_vm._v(_vm._s(color) + " Accent-" + _vm._s(n))])]) : _vm._e()
    })], true)
  }))])])])])
},staticRenderFns: []}

/***/ },
/* 128 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('h6', [_vm._t("default")], true)
},staticRenderFns: []}

/***/ },
/* 129 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "view"
  }, [_vm._c('section', [_vm._c('section-text', [_vm._c('dt', {
    domProps: {
      "innerHTML": _vm._s(_vm.doc.title)
    },
    slot: "title"
  }), _vm._c('dd', {
    domProps: {
      "innerHTML": _vm._s(_vm.doc.desc)
    },
    slot: "desc"
  })])]), _vm._c('section', [_vm._c('section-header', [_vm._v("Examples")]), _vm._t("default")], true), _vm._c('section', [_vm._c('section-header', [_vm._v("Markup")]), _vm._t("markup")], true), _vm._c('section', [_vm._c('section-header', [_vm._v("Parameters")]), _vm._c('component-parameters', {
    attrs: {
      "params": _vm.doc.params
    }
  })]), _vm._c('section', [_vm._c('section-header', [_vm._v("Events")]), _vm._c('p', {
    staticClass: "section-text"
  }, [_vm._v("Coming Soon")])]), _vm._t("end")], true)
},staticRenderFns: []}

/***/ },
/* 130 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('doc-view', {
    attrs: {
      "doc": _vm.doc
    }
  }, [_vm._c('component-example', {
    attrs: {
      "header": "Grid",
      "id": "grid"
    }
  }, [_vm._c('v-container', {
    attrs: {
      "fluid": "fluid"
    }
  }, [_vm._c('v-row', [_vm._c('v-col', {
    attrs: {
      "xs12": "xs12"
    }
  }, [_vm._c('v-card', {
    staticClass: "primary"
  }, [_vm._c('v-card-text', [_vm._v("12")])])]), _vm._l((2), function(i) {
    return _vm._c('v-col', {
      attrs: {
        "xs6": "xs6"
      }
    }, [_vm._c('v-card', {
      staticClass: "secondary"
    }, [_vm._c('v-card-text', [_vm._v("6")])])])
  }), _vm._l((3), function(i) {
    return _vm._c('v-col', {
      attrs: {
        "xs4": "xs4"
      }
    }, [_vm._c('v-card', {
      staticClass: "primary"
    }, [_vm._c('v-card-text', [_vm._v("4")])])])
  }), _vm._l((4), function(i) {
    return _vm._c('v-col', {
      attrs: {
        "xs3": "xs3"
      }
    }, [_vm._c('v-card', {
      staticClass: "secondary"
    }, [_vm._c('v-card-text', [_vm._v("3")])])])
  }), _vm._l((6), function(i) {
    return _vm._c('v-col', {
      attrs: {
        "xs2": "xs2"
      }
    }, [_vm._c('v-card', {
      staticClass: "primary"
    }, [_vm._c('v-card-text', [_vm._v("2")])])])
  }), _vm._l((12), function(i) {
    return _vm._c('v-col', {
      attrs: {
        "xs1": "xs1"
      }
    }, [_vm._c('v-card', {
      staticClass: "secondary"
    }, [_vm._c('v-card-text', [_vm._v("1")])])])
  })], true)])]), _vm._c('markup', {
    attrs: {
      "lang": "xml"
    },
    slot: "markup"
  }, [_vm._v("<v-container fluid>\n  <v-row>\n    <v-col xs12 sm6 md4 lg3>\n      ...\n    </v-col>\n    <v-col xs6 offset-xs3>\n      ...\n    </v-col>\n  </v-row>\n</v-container>")])])
},staticRenderFns: []}

/***/ },
/* 131 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('doc-view', {
    attrs: {
      "doc": _vm.doc
    }
  }, [_vm._c('component-example', {
    attrs: {
      "header": "Text Dividers"
    }
  }, [_vm._c('v-breadcrumbs', {
    attrs: {
      "divider": "/",
      "items": _vm.items
    }
  }), _vm._c('v-breadcrumbs', {
    attrs: {
      "divider": "-",
      "items": _vm.items
    }
  })]), _vm._c('component-example', {
    attrs: {
      "header": "Icon Dividers"
    }
  }, [_vm._c('v-breadcrumbs', {
    attrs: {
      "icons": "icons",
      "divider": "forward",
      "items": _vm.items
    }
  }), _vm._c('v-breadcrumbs', {
    attrs: {
      "icons": "icons",
      "divider": "chevron_right",
      "items": _vm.items
    }
  })]), _vm._c('div', {
    slot: "markup"
  }, [_vm._c('markup', {
    attrs: {
      "lang": "html"
    }
  }, [_vm._v("<v-breadcrumbs divider=\"/\" v-bind:items=\"items\"></v-breadcrumbs>\n \n<v-breadcrumbs divider=\"/\">\n  <v-breadcrumbs-item v-for(item in items) v-bind:item=\"item\"></v-breadcrumbs-item>\n</v-breadcrumbs>")]), _vm._c('markup', {
    attrs: {
      "lang": "js"
    }
  }, [_vm._v("data () {\n  return {\n    items: [{ href: '#!', text: 'Dashboard', disabled: false}]\n  }\n}")])])])
},staticRenderFns: []}

/***/ },
/* 132 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "view"
  }, [_vm._c('section', [_vm._c('section-text', [_vm._c('strong', {
    slot: "title"
  }, [_vm._v("Overview")]), _vm._c('div', {
    slot: "desc"
  }, [_vm._c('p', [_vm._v("This overview is designed to help you become fluent in "), _vm._c('strong', [_vm._v("Vuetify's")]), _vm._v(" Webpack-SSR Template. If you have not already installed the "), _vm._c('code', [_vm._v("webpack-ssr")]), _vm._v(" template, please do so "), _vm._c('router-link', {
    attrs: {
      "to": "/quick-start#webpack-ssr"
    }
  }, [_vm._v("here")]), _vm._v(".")])])])]), _vm._c('section', [_vm._c('section-header', [_vm._v("Introduction")]), _vm._m(0), _vm._c('h6', [_vm._v("Folder Structure")]), _vm._c('markup', {
    attrs: {
      "lang": "cli"
    }
  }, [_vm._v("/ project\n  / build\n    - setup-dev-server.js\n    - vue-loader.config.js\n    - webpack.base.config.js\n    - webpack.client.config.js\n    - webpack.server.config.js\n  / dist\n  / public\n  / src\n    / css\n      - main.css\n    / components\n    / router\n      - index.js\n    / sass\n      - main.scss\n    / store\n      - index.js\n    / stylus\n      - main.styl\n    / views\n    - app.js\n    - App.vue\n    - client-entry.js\n    - index.template.html\n    - server-entry.js\n  - .gitignore\n  - README.md\n  - package.json\n  - server.js")]), _vm._m(1), _vm._c('h3', [_vm._v("Application")]), _vm._c('div', {
    staticClass: "section-text"
  }, [_vm._m(2), _vm._c('p', [_vm._v("The markup below tells the application that you have a "), _vm._c('code', [_vm._v("top navbar")]), _vm._v(" and "), _vm._c('code', [_vm._v("footer")]), _vm._v(". Once defined, the content area will be resized to accommodate. For more information on layouts, navigate to the "), _vm._c('router-link', {
    attrs: {
      "to": "/layouts"
    }
  }, [_vm._v("Layouts")]), _vm._v(" section.")])]), _vm._c('markup', {
    attrs: {
      "lang": "html"
    }
  }, [_vm._v("<v-app top-navbar footer>\n  <header>\n    <v-navbar>\n      <h1>Portfolio</h1>\n    </v-navbar>\n  </header>\n  <main>\n    <v-content>\n      <v-container>\n        <router-view></router-view>\n      </v-container>\n    </v-content>\n  </main>\n  <v-footer>2016</v-footer>\n</v-app>")]), _vm._c('h3', [_vm._v("Routing")]), _vm._m(3), _vm._c('markup', {
    attrs: {
      "lang": "js"
    }
  }, [_vm._v("routes: [\n  { path: '/', component: HomeView },\n  { path: '/about', component: AboutView }\n]")]), _vm._m(4), _vm._c('h3', [_vm._v("State Control")]), _vm._m(5), _vm._c('markup', {
    attrs: {
      "lang": "js"
    }
  }, [_vm._v("preFetch (store) {\n  store.dispatch('GET_USER', 2)\n}")]), _vm._m(6), _vm._c('h3', [_vm._v("Meta Data")]), _vm._m(7), _vm._c('markup', {
    attrs: {
      "lang": "js"
    }
  }, [_vm._v("preFetch (store) {\n  store.dispatch('GET_USER', 2)\n \n  return {\n    title: 'Title',\n    description: 'Description',\n    keywords: 'keyword, keyword'\n  }\n}")]), _vm._c('div', {
    staticClass: "section-text"
  }, [_vm._c('p', [_vm._v("While this takes care of initial render meta data, it is a good experience for a user when they change a page within your application to have the title change with it")]), _vm._m(8), _vm._c('P', [_vm._v("Here is an example of a way that you can handle this:")])]), _vm._c('markup', {
    attrs: {
      "lang": "js"
    }
  }, [_vm._v("// App.vue\nexport default {\n  mounted () {\n    this.$vuetify.init()\n  },\n  methods: {\n    view (meta) {\n      this.$vuetify.bus.pub(meta:title, obj.title)\n      this.$vuetify.bus.pub(meta:description, obj.description)\n      this.$vuetify.bus.pub(meta:keywords, obj.keywords)\n    }\n  }\n}\n \n// View.vue\nexport default {\n  mounted () {\n    this.$emit('view', this.meta())\n  },\n  preFetch () {\n    return this.methods.meta()\n  },\n  methods: {\n    meta () {\n      return {\n        title: 'Vuetify',\n        description: 'A Vue JS Framework',\n        keywords: 'vue, vuetify'\n      }\n    }\n  }\n}")]), _vm._m(9)]), _vm._c('section', [_vm._c('section-header', [_vm._v("Web App Support")]), _vm._m(10)]), _vm._c('section', [_vm._c('whats-next', {
    attrs: {
      "route": "/event-bus",
      "text": "Event Bus"
    }
  }, [_vm._v("With a better understanding of the "), _vm._c('strong', [_vm._v("webpack ssr")]), _vm._v(" template, let's learn about one of the most powerful features of Vuetify, the bus system.")])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('p', {
    staticClass: "section-text"
  }, [_vm._v("The Vuetify SSR template was designed for performance, seo optimization and usability. This template is configured out of the box for css, sass and stylus pre-processors. It also utilizes "), _vm._c('code', [_vm._v("buble")]), _vm._v(" with webpack's buble-loader.")])
},function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "section-text"
  }, [_vm._c('p', [_vm._v("The "), _vm._c('strong', [_vm._v("Build")]), _vm._v(" folder contains all of the webpack specific build configurations for your project. "), _vm._c('strong', [_vm._v("Src")]), _vm._v(" is where all the development project files reside. Notice that the Webpack-SSR template is out-of-the-box configured to use "), _vm._c('a', {
    attrs: {
      "href": "https://router.vuejs.org/en/",
      "target": "_blank"
    }
  }, [_vm._v("Vue Router")]), _vm._v(", "), _vm._c('a', {
    attrs: {
      "href": "https://vuex.vuejs.org/en/intro.html",
      "target": "_blank"
    }
  }, [_vm._v("Vuex")]), _vm._v(", and the "), _vm._c('a', {
    attrs: {
      "href": "https://vuejs.org/v2/guide/ssr.html",
      "target": "_blank"
    }
  }, [_vm._v("Vue Server Renderer")]), _vm._v(". This will allow you to make simple or complex applications that are not only fast/efficient, but "), _vm._c('strong', [_vm._v("SEO")]), _vm._v(" friendly.")])])
},function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('p', [_vm._v("Navigate to the "), _vm._c('strong', [_vm._v("src")]), _vm._v(" folder and open up "), _vm._c('code', [_vm._v("App.vue")]), _vm._v(". Vuetify is a semantic-focused framework. The code you write should be easy to remember, and easy to manage. To do this, one of the main components of Vuetify is "), _vm._c('code', [_vm._v("v-app")]), _vm._v(". This component allows you to define your application layout. This is used in conjunction with "), _vm._c('code', [_vm._v("v-navbar")]), _vm._v(", "), _vm._c('code', [_vm._v("v-sidebar")]), _vm._v(", "), _vm._c('code', [_vm._v("v-content")]), _vm._v(" and "), _vm._c('code', [_vm._v("v-footer")]), _vm._v(".")])
},function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('p', {
    staticClass: "section-text"
  }, [_vm._v("The Webpack-SSR template uses the official Vue Router for controlling application flow. Located in "), _vm._c('code', [_vm._v("/src/route/index.js")]), _vm._v(", all of your application routes and route logic will be defined here.")])
},function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "section-text"
  }, [_vm._c('p', [_vm._v("These routes can be accessed be creating a link to the specified path, or by using Vue Router's "), _vm._c('code', [_vm._v("<router-link>")]), _vm._v(" component. For more information, review the official Vue Router "), _vm._c('a', {
    attrs: {
      "href": "https://router.vuejs.org/en/",
      "target": "_blank"
    }
  }, [_vm._v("documentation")]), _vm._v(".")])])
},function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "section-text"
  }, [_vm._c('p', [_vm._v("State control is managed by the official Vuex library. This Vue plugin follows Facebooks' Reflux design pattern. Navigate to "), _vm._c('code', [_vm._v("/src/store/index.js")]), _vm._v(". By default, Vuex is setup to prefetch data for the store before your page is initially rendered. To hook into this functionality, create a "), _vm._c('code', [_vm._v("preFetch")]), _vm._v(" method on your view component.")])])
},function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "section-text"
  }, [_vm._c('p', [_vm._v("This is useful for bootstrapping your application so that any necessary data is available before the initial render.")]), _vm._c('p', [_vm._v("For more information on State Control and Vuex, view the official "), _vm._c('a', {
    attrs: {
      "href": "https://vuex.vuejs.org/en/intro.html",
      "target": "_blank"
    }
  }, [_vm._v("documentation")]), _vm._v(".")])])
},function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('p', {
    staticClass: "section-text"
  }, [_vm._v("In order to ensure that page specific meta data is viewable when your pages are crawled, you can return an object containing "), _vm._c('code', [_vm._v("title")]), _vm._v(", "), _vm._c('code', [_vm._v("description")]), _vm._v(" and "), _vm._c('code', [_vm._v("keywords")]), _vm._v(".")])
},function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('p', [_vm._v("This can be done by publishing an event to the Vuetify "), _vm._c('code', [_vm._v("bus")]), _vm._v(". This is the same functionality that is hooked into by the Webpack-SSR template when the pages are being initially rendered.")])
},function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('p', {
    staticClass: "section-text"
  }, [_vm._v("In the example above, we emit an event that is captured on "), _vm._c('code', [_vm._v("<router-view v-on:view=\"view\">")]), _vm._v(". In our view, we have a meta method that is used by the router on view change, and the server for preFetching data. This allows pages to have proper meta information for crawling, but also change when the user is navigating to a different page.")])
},function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('p', {
    staticClass: "section-text"
  }, [_vm._v("Vuetify SSR has support for native Web Applications on smart phones. Also known as progressive web apps, your websites can be saved on the homescreen of a device, allowing it to be usable offline and receive push notifications. For more information on Web App Manifest's, navigate to the "), _vm._c('a', {
    attrs: {
      "href": "https://developer.mozilla.org/en-US/docs/Web/Manifest",
      "target": "_blank"
    }
  }, [_vm._v("Mozilla Developer Network")]), _vm._v(". To see a live example, add the Vuetify documentation on your mobile device's homescreen.")])
}]}

/***/ },
/* 133 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('doc-view', {
    attrs: {
      "doc": _vm.doc
    }
  }, [_vm._c('component-example', {
    attrs: {
      "header": "Selects"
    }
  }, [_vm._c('div', [_vm._c('v-select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.input),
      expression: "input"
    }],
    attrs: {
      "options": _vm.options,
      "id": "test",
      "label": "Testing",
      "name": "test"
    },
    domProps: {
      "value": (_vm.input)
    },
    on: {
      "input": function($event) {
        _vm.input = $event
      }
    }
  }), _vm._v(_vm._s(_vm.input))]), _vm._c('div', [_vm._c('v-select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.multiple),
      expression: "multiple"
    }],
    attrs: {
      "options": _vm.options,
      "id": "test4",
      "label": "Testing4",
      "name": "test4",
      "multiple": "multiple"
    },
    domProps: {
      "value": (_vm.multiple)
    },
    on: {
      "input": function($event) {
        _vm.multiple = $event
      }
    }
  }), _vm._v(_vm._s(_vm.multiple))])]), _vm._c('component-example', {
    attrs: {
      "header": "Inputs"
    }
  }, [_vm._c('div', [_vm._c('v-text-input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.text),
      expression: "text"
    }],
    attrs: {
      "id": "test2",
      "name": "test2",
      "label": "Testing 2"
    },
    domProps: {
      "value": (_vm.text)
    },
    on: {
      "input": function($event) {
        _vm.text = $event
      }
    }
  }), _vm._v(_vm._s(_vm.text))]), _vm._c('div', [_vm._c('v-text-input', {
    attrs: {
      "id": "test3",
      "name": "test3",
      "label": "Testing 3",
      "placeholder": "Testing 3"
    }
  })])]), _vm._c('component-example', {
    attrs: {
      "header": "Radios"
    }
  }, [_vm._c('v-radio', {
    attrs: {
      "id": "test5",
      "name": "test5",
      "label": "Testing 5"
    }
  }), _vm._c('v-radio', {
    attrs: {
      "id": "test6",
      "name": "test5",
      "label": "Testing 6",
      "gap": "gap"
    }
  }), _vm._c('v-radio', {
    attrs: {
      "id": "test62",
      "name": "test52",
      "label": "Testing 62",
      "gap": "gap",
      "checked": "checked",
      "disabled": "disabled"
    }
  }), _vm._c('v-radio', {
    attrs: {
      "id": "test61",
      "name": "test54",
      "label": "Testing 61",
      "disabled": "disabled",
      "checked": "checked"
    }
  }), _vm._c('v-radio', {
    attrs: {
      "id": "test71",
      "name": "test5",
      "label": "Testing 71",
      "disabled": "disabled"
    }
  })]), _vm._c('component-example', {
    attrs: {
      "header": "Checkboxes"
    }
  }, [_vm._c('v-checkbox', {
    attrs: {
      "id": "test7",
      "name": "test7",
      "label": "Testing 7"
    }
  }), _vm._c('v-checkbox', {
    attrs: {
      "id": "test8",
      "name": "test8",
      "label": "Testing 8",
      "filled": "filled"
    }
  }), _vm._c('v-checkbox', {
    attrs: {
      "id": "test9",
      "name": "test9",
      "label": "Testing 9",
      "indeterminate": "indeterminate"
    }
  }), _vm._c('v-checkbox', {
    attrs: {
      "id": "test10",
      "name": "test10",
      "label": "Testing 10",
      "disabled": "disabled"
    }
  }), _vm._c('v-checkbox', {
    attrs: {
      "id": "test10",
      "name": "test10",
      "label": "Testing 10",
      "checked": "checked",
      "disabled": "disabled"
    }
  })]), _vm._c('div', {
    slot: "markup"
  }, [_vm._c('markup', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("<v-select>\n  ...\n</v-select>")]), _vm._c('markup', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("<v-text-input>\n  ...\n</v-text-input>")]), _vm._c('markup', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("<v-radio>\n  ...\n</v-radio>")]), _vm._c('markup', {
    attrs: {
      "lang": "xml"
    }
  }, [_vm._v("<v-checkbox>\n  ...\n</v-checkbox>")])])])
},staticRenderFns: []}

/***/ },
/* 134 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "view"
  }, [_vm._c('section', [_vm._c('section-text', [_vm._c('dt', {
    slot: "title"
  }, [_vm._v("Typography")]), _vm._c('dd', {
    slot: "desc"
  }, [_vm._v("Soon")])])]), _vm._c('section', [_vm._c('section-header', [_vm._v("Examples")]), _vm._c('component-example', {
    attrs: {
      "id": "typo",
      "header": "Headers"
    }
  }, [_vm._c('h1', [_vm._v("Heading h1")]), _vm._c('h2', [_vm._v("Heading h2")]), _vm._c('h3', [_vm._v("Heading h3")]), _vm._c('h4', [_vm._v("Heading h4")]), _vm._c('h5', [_vm._v("Heading h5")]), _vm._c('h6', [_vm._v("Heading h6")])])])])
},staticRenderFns: []}

/***/ },
/* 135 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('div', {
    staticClass: "markup"
  }, [_vm._c('pre', [_vm._c('code', {
    ref: "code",
    class: _vm.lang
  }, [_vm._t("default")], true)])])
},staticRenderFns: []}

/***/ },
/* 136 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
  return _vm._c('doc-view', {
    attrs: {
      "doc": _vm.doc
    }
  }, [_vm._c('component-example', {
    attrs: {
      "header": "Navbar and Footer"
    }
  }, [_vm._c('v-container', {
    attrs: {
      "fluid": "fluid"
    }
  }, [_vm._c('v-row', [_vm._c('v-col', {
    attrs: {
      "xs12": "xs12",
      "sm4": "sm4"
    }
  }, [_vm._c('div', {
    staticClass: "layout z-depth-1"
  }, [_vm._c('nav', {
    staticClass: "navbar primary"
  }, [_vm._v("Navbar")]), _vm._c('div', {
    staticClass: "layout__main"
  }, [_vm._c('div', {
    staticClass: "layout__content"
  }, [_vm._v("Content")])])])]), _vm._c('v-col', {
    attrs: {
      "xs12": "xs12",
      "sm4": "sm4"
    }
  }, [_vm._c('div', {
    staticClass: "layout z-depth-1"
  }, [_vm._c('div', {
    staticClass: "layout__main"
  }, [_vm._c('div', {
    staticClass: "layout__content"
  }, [_vm._v("Content")])]), _vm._c('nav', {
    staticClass: "navbar primary"
  }, [_vm._v("Navbar")])])]), _vm._c('v-col', {
    attrs: {
      "xs12": "xs12",
      "sm4": "sm4"
    }
  }, [_vm._c('div', {
    staticClass: "layout z-depth-1"
  }, [_vm._c('nav', {
    staticClass: "navbar primary"
  }, [_vm._v("Navbar")]), _vm._c('div', {
    staticClass: "layout__main"
  }, [_vm._c('div', {
    staticClass: "layout__content"
  }, [_vm._v("Content")])]), _vm._c('div', {
    staticClass: "layout__footer primary"
  }, [_vm._v("Footer")])])])])])]), _vm._c('component-example', {
    attrs: {
      "header": "Navbar and Sidebar"
    }
  }, [_vm._c('v-container', {
    attrs: {
      "fluid": "fluid"
    }
  }, [_vm._c('v-row', [_vm._c('v-col', {
    attrs: {
      "xs12": "xs12",
      "sm6": "sm6",
      "md6": "md6",
      "lg6": "lg6"
    }
  }, [_vm._c('div', {
    staticClass: "layout z-depth-1"
  }, [_vm._c('nav', {
    staticClass: "navbar primary"
  }, [_vm._v("Navbar")]), _vm._c('div', {
    staticClass: "layout__main"
  }, [_vm._c('div', {
    staticClass: "layout__sidebar secondary"
  }, [_vm._v("Sidebar")]), _vm._c('div', {
    staticClass: "layout__content"
  }, [_vm._v("Content")])])])]), _vm._c('v-col', {
    attrs: {
      "xs12": "xs12",
      "sm6": "sm6",
      "md6": "md6",
      "lg6": "lg6"
    }
  }, [_vm._c('div', {
    staticClass: "layout layout--4 z-depth-1"
  }, [_vm._c('div', {
    staticClass: "layout__sidebar secondary"
  }, [_vm._v("Sidebar")]), _vm._c('div', {
    staticClass: "layout__main"
  }, [_vm._c('nav', {
    staticClass: "navbar primary"
  }, [_vm._v("Navbar")]), _vm._c('div', {
    staticClass: "layout__content"
  }, [_vm._v("Content")])])])])])])]), _vm._c('component-example', {
    attrs: {
      "header": "Navbar, Sidebar and Footer"
    }
  }, [_vm._c('v-container', {
    attrs: {
      "fluid": "fluid"
    }
  }, [_vm._c('v-row', [_vm._c('v-col', {
    attrs: {
      "xs12": "xs12",
      "sm6": "sm6",
      "md6": "md6",
      "lg6": "lg6"
    }
  }, [_vm._c('div', {
    staticClass: "layout z-depth-1"
  }, [_vm._c('nav', {
    staticClass: "navbar primary"
  }, [_vm._v("Navbar")]), _vm._c('div', {
    staticClass: "layout__main"
  }, [_vm._c('div', {
    staticClass: "layout__sidebar secondary"
  }, [_vm._v("Sidebar")]), _vm._c('div', {
    staticClass: "layout__content"
  }, [_vm._v("Content")])]), _vm._c('div', {
    staticClass: "layout__footer primary"
  }, [_vm._v("Footer")])])]), _vm._c('v-col', {
    attrs: {
      "xs12": "xs12",
      "sm6": "sm6",
      "md6": "md6",
      "lg6": "lg6"
    }
  }, [_vm._c('div', {
    staticClass: "layout layout--4 z-depth-1"
  }, [_vm._c('div', {
    staticClass: "layout__sidebar secondary"
  }, [_vm._v("Sidebar")]), _vm._c('div', {
    staticClass: "layout__main"
  }, [_vm._c('nav', {
    staticClass: "navbar primary"
  }, [_vm._v("Navbar")]), _vm._c('div', {
    staticClass: "layout__content"
  }, [_vm._v("Content")]), _vm._c('div', {
    staticClass: "layout__footer primary"
  }, [_vm._v("Footer")])])])])])])]), _vm._c('markup', {
    attrs: {
      "lang": "xml"
    },
    slot: "markup"
  }, [_vm._v("<v-app top-navbar>\n  <header>\n    <v-navbar></v-nabvar>\n  </header>\n  <main>\n    <v-content>\n      <v-container>\n        <router-view></router-view>\n      </v-container>\n    </v-content>\n  </main>\n</v-app>\n \n<v-app top-navbar left-fixed-sidebar>\n  <header>\n    <v-navbar></v-nabvar>\n  </header>\n  <main>\n    <v-sidebar id=\"sidebar\" fixed></v-sidebar>\n    <v-content>\n      <v-container>\n        <router-view></router-view>\n      </v-container>\n    </v-content>\n  </main>\n</v-app>\n \n<v-app top-navbar footer right-fixed-sidebar>\n  <header>\n    <v-navbar></v-nabvar>\n  </header>\n  <main>\n    <v-sidebar id=\"sidebar\" fixed right></v-sidebar>\n    <v-content>\n      <v-container>\n        <router-view></router-view>\n      </v-container>\n    </v-content>\n  </main>\n  <v-footer></v-footer>\n</v-app>")])])
},staticRenderFns: []}

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
  * vue-router v2.1.1
  * (c) 2016 Evan You
  * @license MIT
  */


var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true

    var route = parent.$route
    var cache = parent._routerViewCache || (parent._routerViewCache = {})
    var depth = 0
    var inactive = false

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++
      }
      if (parent._inactive) {
        inactive = true
      }
      parent = parent.$parent
    }

    data.routerViewDepth = depth
    var matched = route.matched[depth]
    if (!matched) {
      return h()
    }

    var name = props.name
    var component = inactive
      ? cache[name]
      : (cache[name] = matched.components[name])

    if (!inactive) {
      var hooks = data.hook || (data.hook = {})
      hooks.init = function (vnode) {
        matched.instances[name] = vnode.child
      }
      hooks.prepatch = function (oldVnode, vnode) {
        matched.instances[name] = vnode.child
      }
      hooks.destroy = function (vnode) {
        if (matched.instances[name] === vnode.child) {
          matched.instances[name] = undefined
        }
      }
    }

    return h(component, data, children)
  }
}

/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (!condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message))
  }
}

/*  */

var encode = encodeURIComponent
var decode = decodeURIComponent

function resolveQuery (
  query,
  extraQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  if (query) {
    var parsedQuery
    try {
      parsedQuery = parseQuery(query)
    } catch (e) {
      "production" !== 'production' && warn(false, e.message)
      parsedQuery = {}
    }
    for (var key in extraQuery) {
      parsedQuery[key] = extraQuery[key]
    }
    return parsedQuery
  } else {
    return extraQuery
  }
}

function parseQuery (query) {
  var res = {}

  query = query.trim().replace(/^(\?|#|&)/, '')

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=')
    var key = decode(parts.shift())
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null

    if (res[key] === undefined) {
      res[key] = val
    } else if (Array.isArray(res[key])) {
      res[key].push(val)
    } else {
      res[key] = [res[key], val]
    }
  })

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key]

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = []
      val.slice().forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key))
        } else {
          result.push(encode(key) + '=' + encode(val2))
        }
      })
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null
  return res ? ("?" + res) : ''
}

/*  */

function createRoute (
  record,
  location,
  redirectedFrom
) {
  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: location.query || {},
    params: location.params || {},
    fullPath: getFullPath(location),
    matched: record ? formatMatch(record) : []
  }
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom)
  }
  return Object.freeze(route)
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
})

function formatMatch (record) {
  var res = []
  while (record) {
    res.unshift(record)
    record = record.parent
  }
  return res
}

function getFullPath (ref) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  return (path || '/') + stringifyQuery(query) + hash
}

var trailingSlashRE = /\/$/
function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  var aKeys = Object.keys(a)
  var bKeys = Object.keys(b)
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
}

function isIncludedRoute (current, target) {
  return (
    current.path.indexOf(target.path.replace(/\/$/, '')) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object]

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    event: {
      type: [String, Array],
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router
    var current = this.$route
    var ref = router.resolve(this.to, current, this.append);
    var normalizedTo = ref.normalizedTo;
    var resolved = ref.resolved;
    var href = ref.href;
    var classes = {}
    var activeClass = this.activeClass || router.options.linkActiveClass || 'router-link-active'
    var compareTarget = normalizedTo.path ? createRoute(null, normalizedTo) : resolved
    classes[activeClass] = this.exact
      ? isSameRoute(current, compareTarget)
      : isIncludedRoute(current, compareTarget)

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(normalizedTo)
        } else {
          router.push(normalizedTo)
        }
      }
    }

    var on = { click: guardEvent }
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler })
    } else {
      on[this.event] = handler
    }

    var data = {
      class: classes
    }

    if (this.tag === 'a') {
      data.on = on
      data.attrs = { href: href }
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default)
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false
        var extend = _Vue.util.extend
        var aData = a.data = extend({}, a.data)
        aData.on = on
        var aAttrs = a.data.attrs = extend({}, a.data.attrs)
        aAttrs.href = href
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
}

function guardEvent (e) {
  // don't redirect with control keys
  /* istanbul ignore if */
  if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  /* istanbul ignore if */
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  /* istanbul ignore if */
  if (e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  /* istanbul ignore if */
  var target = e.target.getAttribute('target')
  if (/\b_blank\b/i.test(target)) { return }

  e.preventDefault()
  return true
}

function findAnchor (children) {
  if (children) {
    var child
    for (var i = 0; i < children.length; i++) {
      child = children[i]
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue

function install (Vue) {
  if (install.installed) { return }
  install.installed = true

  _Vue = Vue

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this.$root._router }
  })

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get$1 () { return this.$root._route }
  })

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (this.$options.router) {
        this._router = this.$options.router
        this._router.init(this)
        Vue.util.defineReactive(this, '_route', this._router.history.current)
      }
    }
  })

  Vue.component('router-view', View)
  Vue.component('router-link', Link)

  var strats = Vue.config.optionMergeStrategies
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created
}

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  if (relative.charAt(0) === '/') {
    return relative
  }

  if (relative.charAt(0) === '?' || relative.charAt(0) === '#') {
    return base + relative
  }

  var stack = base.split('/')

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop()
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/')
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i]
    if (segment === '.') {
      continue
    } else if (segment === '..') {
      stack.pop()
    } else {
      stack.push(segment)
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('')
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = ''
  var query = ''

  var hashIndex = path.indexOf('#')
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex)
    path = path.slice(0, hashIndex)
  }

  var queryIndex = path.indexOf('?')
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1)
    path = path.slice(0, queryIndex)
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

/*  */

function createRouteMap (routes) {
  var pathMap = Object.create(null)
  var nameMap = Object.create(null)

  routes.forEach(function (route) {
    addRouteRecord(pathMap, nameMap, route)
  })

  return {
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (false) {
    assert(path != null, "\"path\" is required in a route configuration.")
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    )
  }

  var record = {
    path: normalizePath(path, parent),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {}
  }

  if (route.children) {
    // Warn if route is named and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (false) {
      if (route.name && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(false, ("Named Route '" + (route.name) + "' has a default child route.\n          When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), the default child route will not be rendered.\n          Remove the name from this route and use the name of the default child route for named links instead.")
        )
      }
    }
    route.children.forEach(function (child) {
      addRouteRecord(pathMap, nameMap, child, record)
    })
  }

  if (route.alias !== undefined) {
    if (Array.isArray(route.alias)) {
      route.alias.forEach(function (alias) {
        addRouteRecord(pathMap, nameMap, { path: alias }, parent, record.path)
      })
    } else {
      addRouteRecord(pathMap, nameMap, { path: route.alias }, parent, record.path)
    }
  }

  if (!pathMap[record.path]) {
    pathMap[record.path] = record
  }
  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record
    } else if (false) {
      warn(false, ("Duplicate named routes definition: { name: \"" + name + "\", path: \"" + (record.path) + "\" }"))
    }
  }
}

function normalizePath (path, parent) {
  path = path.replace(/\/$/, '')
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

var __moduleExports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

var isarray = __moduleExports

/**
 * Expose `pathToRegexp`.
 */
var index = pathToRegexp
var parse_1 = parse
var compile_1 = compile
var tokensToFunction_1 = tokensToFunction
var tokensToRegExp_1 = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

/*  */

var regexpCache = Object.create(null)

function getRouteRegex (path) {
  var hit = regexpCache[path]
  var keys, regexp

  if (hit) {
    keys = hit.keys
    regexp = hit.regexp
  } else {
    keys = []
    regexp = index(path, keys)
    regexpCache[path] = { keys: keys, regexp: regexp }
  }

  return { keys: keys, regexp: regexp }
}

var regexpCompileCache = Object.create(null)

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = index.compile(path))
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (false) {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)))
    }
    return ''
  }
}

/*  */

function normalizeLocation (
  raw,
  current,
  append
) {
  var next = typeof raw === 'string' ? { path: raw } : raw
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next)
    next._normalized = true
    var params = assign(assign({}, current.params), next.params)
    if (current.name) {
      next.name = current.name
      next.params = params
    } else if (current.matched) {
      var rawPath = current.matched[current.matched.length - 1].path
      next.path = fillParams(rawPath, params, ("path " + (current.path)))
    } else if (false) {
      warn(false, "relative params navigation requires a current route.")
    }
    return next
  }

  var parsedPath = parsePath(next.path || '')
  var basePath = (current && current.path) || '/'
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : (current && current.path) || '/'
  var query = resolveQuery(parsedPath.query, next.query)
  var hash = next.hash || parsedPath.hash
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key]
  }
  return a
}

/*  */

function createMatcher (routes) {
  var ref = createRouteMap(routes);
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute)
    var name = location.name;

    if (name) {
      var record = nameMap[name]
      var paramNames = getRouteRegex(record.path).keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; })

      if (typeof location.params !== 'object') {
        location.params = {}
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key]
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""))
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {}
      for (var path in pathMap) {
        if (matchRoute(path, location.params, location.path)) {
          return _createRoute(pathMap[path], location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location))
        : originalRedirect

    if (typeof redirect === 'string') {
      redirect = { path: redirect }
    }

    if (!redirect || typeof redirect !== 'object') {
      "production" !== 'production' && warn(
        false, ("invalid redirect option: " + (JSON.stringify(redirect)))
      )
      return _createRoute(null, location)
    }

    var re = redirect
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query
    hash = re.hasOwnProperty('hash') ? re.hash : hash
    params = re.hasOwnProperty('params') ? re.params : params

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name]
      if (false) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."))
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record)
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""))
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))))
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""))
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    })
    if (aliasedMatch) {
      var matched = aliasedMatch.matched
      var aliasedRecord = matched[matched.length - 1]
      location.params = aliasedMatch.params
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom)
  }

  return match
}

function matchRoute (
  path,
  params,
  pathname
) {
  var ref = getRouteRegex(path);
  var regexp = ref.regexp;
  var keys = ref.keys;
  var m = pathname.match(regexp)

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = keys[i - 1]
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i]
    if (key) { params[key.name] = val }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */

var inBrowser = typeof window !== 'undefined'

var supportsHistory = inBrowser && (function () {
  var ua = window.navigator.userAgent

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})()

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb()
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1)
        })
      } else {
        step(index + 1)
      }
    }
  }
  step(0)
}

/*  */


var History = function History (router, base) {
  this.router = router
  this.base = normalizeBase(base)
  // start with a route object that stands for "nowhere"
  this.current = START
  this.pending = null
};

History.prototype.listen = function listen (cb) {
  this.cb = cb
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current)
  this.confirmTransition(route, function () {
    this$1.updateRoute(route)
    onComplete && onComplete(route)
    this$1.ensureURL()
  }, onAbort)
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current
  var abort = function () { onAbort && onAbort() }
  if (isSameRoute(route, current)) {
    this.ensureURL()
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  )

  this.pending = route
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    hook(route, current, function (to) {
      if (to === false) {
        // next(false) -> abort navigation, ensure current URL
        this$1.ensureURL(true)
        abort()
      } else if (typeof to === 'string' || typeof to === 'object') {
        // next('/') or next({ path: '/' }) -> redirect
        (typeof to === 'object' && to.replace) ? this$1.replace(to) : this$1.push(to)
        abort()
      } else {
        // confirm transition and pass on the value
        next(to)
      }
    })
  }

  runQueue(queue, iterator, function () {
    var postEnterCbs = []
    var enterGuards = extractEnterGuards(activated, postEnterCbs, function () {
      return this$1.current === route
    })
    // wait until async components are resolved before
    // extracting in-component enter guards
    runQueue(enterGuards, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null
      onComplete(route)
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { return cb(); })
        })
      }
    })
  })
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current
  this.current = route
  this.cb && this.cb(route)
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev)
  })
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base')
      base = baseEl ? baseEl.getAttribute('href') : '/'
    } else {
      base = '/'
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i
  var max = Math.max(current.length, next.length)
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def)
  }
  return def.options[key]
}

function extractLeaveGuards (matched) {
  return flatten(flatMapComponents(matched, function (def, instance) {
    var guard = extractGuard(def, 'beforeRouteLeave')
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return wrapLeaveGuard(guard, instance); })
        : wrapLeaveGuard(guard, instance)
    }
  }).reverse())
}

function wrapLeaveGuard (
  guard,
  instance
) {
  return function routeLeaveGuard () {
    return guard.apply(instance, arguments)
  }
}

function extractEnterGuards (
  matched,
  cbs,
  isValid
) {
  return flatten(flatMapComponents(matched, function (def, _, match, key) {
    var guard = extractGuard(def, 'beforeRouteEnter')
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return wrapEnterGuard(guard, cbs, match, key, isValid); })
        : wrapEnterGuard(guard, cbs, match, key, isValid)
    }
  }))
}

function wrapEnterGuard (
  guard,
  cbs,
  match,
  key,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb)
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid)
        })
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key])
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid)
    }, 16)
  }
}

function resolveAsyncComponents (matched) {
  return flatMapComponents(matched, function (def, _, match, key) {
    // if it's a function and doesn't have Vue options attached,
    // assume it's an async component resolve function.
    // we are not using Vue's default async resolving mechanism because
    // we want to halt the navigation until the incoming component has been
    // resolved.
    if (typeof def === 'function' && !def.options) {
      return function (to, from, next) {
        var resolve = function (resolvedDef) {
          match.components[key] = resolvedDef
          next()
        }

        var reject = function (reason) {
          warn(false, ("Failed to resolve async component " + key + ": " + reason))
          next(false)
        }

        var res = def(resolve, reject)
        if (res && typeof res.then === 'function') {
          res.then(resolve, reject)
        }
      }
    }
  })
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

/*  */

var positionStore = Object.create(null)

function saveScrollPosition (key) {
  if (!key) { return }
  positionStore[key] = {
    x: window.pageXOffset,
    y: window.pageYOffset
  }
}

function getScrollPosition (key) {
  if (!key) { return }
  return positionStore[key]
}

function getElementPosition (el) {
  var docRect = document.documentElement.getBoundingClientRect()
  var elRect = el.getBoundingClientRect()
  return {
    x: elRect.left - docRect.left,
    y: elRect.top - docRect.top
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

/*  */


var genKey = function () { return String(Date.now()); }
var _key = genKey()

var HTML5History = (function (History) {
  function HTML5History (router, base) {
    var this$1 = this;

    History.call(this, router, base)

    var expectScroll = router.options.scrollBehavior
    window.addEventListener('popstate', function (e) {
      _key = e.state && e.state.key
      var current = this$1.current
      this$1.transitionTo(getLocation(this$1.base), function (next) {
        if (expectScroll) {
          this$1.handleScroll(next, current, true)
        }
      })
    })

    if (expectScroll) {
      window.addEventListener('scroll', function () {
        saveScrollPosition(_key)
      })
    }
  }

  if ( History ) HTML5History.__proto__ = History;
  HTML5History.prototype = Object.create( History && History.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n)
  };

  HTML5History.prototype.push = function push (location) {
    var this$1 = this;

    var current = this.current
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath))
      this$1.handleScroll(route, current, false)
    })
  };

  HTML5History.prototype.replace = function replace (location) {
    var this$1 = this;

    var current = this.current
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath))
      this$1.handleScroll(route, current, false)
    })
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath)
      push ? pushState(current) : replaceState(current)
    }
  };

  HTML5History.prototype.handleScroll = function handleScroll (to, from, isPop) {
    var router = this.router
    if (!router.app) {
      return
    }

    var behavior = router.options.scrollBehavior
    if (!behavior) {
      return
    }
    if (false) {
      assert(typeof behavior === 'function', "scrollBehavior must be a function")
    }

    // wait until re-render finishes before scrolling
    router.app.$nextTick(function () {
      var position = getScrollPosition(_key)
      var shouldScroll = behavior(to, from, isPop ? position : null)
      if (!shouldScroll) {
        return
      }
      var isObject = typeof shouldScroll === 'object'
      if (isObject && typeof shouldScroll.selector === 'string') {
        var el = document.querySelector(shouldScroll.selector)
        if (el) {
          position = getElementPosition(el)
        } else if (isValidPosition(shouldScroll)) {
          position = normalizePosition(shouldScroll)
        }
      } else if (isObject && isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll)
      }

      if (position) {
        window.scrollTo(position.x, position.y)
      }
    })
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length)
  }
  return (path || '/') + window.location.search + window.location.hash
}

function pushState (url, replace) {
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url)
    } else {
      _key = genKey()
      history.pushState({ key: _key }, '', url)
    }
    saveScrollPosition(_key)
  } catch (e) {
    window.location[replace ? 'assign' : 'replace'](url)
  }
}

function replaceState (url) {
  pushState(url, true)
}

/*  */


var HashHistory = (function (History) {
  function HashHistory (router, base, fallback) {
    History.call(this, router, base)
    // check history fallback deeplinking
    if (fallback && this.checkFallback()) {
      return
    }
    ensureSlash()
  }

  if ( History ) HashHistory.__proto__ = History;
  HashHistory.prototype = Object.create( History && History.prototype );
  HashHistory.prototype.constructor = HashHistory;

  HashHistory.prototype.checkFallback = function checkFallback () {
    var location = getLocation(this.base)
    if (!/^\/#/.test(location)) {
      window.location.replace(
        cleanPath(this.base + '/#' + location)
      )
      return true
    }
  };

  HashHistory.prototype.onHashChange = function onHashChange () {
    if (!ensureSlash()) {
      return
    }
    this.transitionTo(getHash(), function (route) {
      replaceHash(route.fullPath)
    })
  };

  HashHistory.prototype.push = function push (location) {
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath)
    })
  };

  HashHistory.prototype.replace = function replace (location) {
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath)
    })
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n)
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current)
    }
  };

  return HashHistory;
}(History));

function ensureSlash () {
  var path = getHash()
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path)
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href
  var index = href.indexOf('#')
  return index === -1 ? '' : href.slice(index + 1)
}

function pushHash (path) {
  window.location.hash = path
}

function replaceHash (path) {
  var i = window.location.href.indexOf('#')
  window.location.replace(
    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
  )
}

/*  */


var AbstractHistory = (function (History) {
  function AbstractHistory (router) {
    History.call(this, router)
    this.stack = []
    this.index = -1
  }

  if ( History ) AbstractHistory.__proto__ = History;
  AbstractHistory.prototype = Object.create( History && History.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route)
      this$1.index++
    })
  };

  AbstractHistory.prototype.replace = function replace (location) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route)
    })
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex]
    this.confirmTransition(route, function () {
      this$1.index = targetIndex
      this$1.updateRoute(route)
    })
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null
  this.options = options
  this.beforeHooks = []
  this.afterHooks = []
  this.match = createMatcher(options.routes || [])

  var mode = options.mode || 'hash'
  this.fallback = mode === 'history' && !supportsHistory
  if (this.fallback) {
    mode = 'hash'
  }
  if (!inBrowser) {
    mode = 'abstract'
  }
  this.mode = mode

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base)
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback)
      break
    case 'abstract':
      this.history = new AbstractHistory(this)
      break
    default:
      "production" !== 'production' && assert(false, ("invalid mode: " + mode))
  }
};

var prototypeAccessors = { currentRoute: {} };

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "production" !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  )

  this.app = app

  var history = this.history

  if (history instanceof HTML5History) {
    history.transitionTo(getLocation(history.base))
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      window.addEventListener('hashchange', function () {
        history.onHashChange()
      })
    }
    history.transitionTo(getHash(), setupHashListener, setupHashListener)
  }

  history.listen(function (route) {
    this$1.app._route = route
  })
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  this.beforeHooks.push(fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  this.afterHooks.push(fn)
};

VueRouter.prototype.push = function push (location) {
  this.history.push(location)
};

VueRouter.prototype.replace = function replace (location) {
  this.history.replace(location)
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n)
};

VueRouter.prototype.back = function back () {
  this.go(-1)
};

VueRouter.prototype.forward = function forward () {
  this.go(1)
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? this.resolve(to).resolved
    : this.currentRoute
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var normalizedTo = normalizeLocation(to, current || this.history.current, append)
  var resolved = this.match(normalizedTo, current)
  var fullPath = resolved.redirectedFrom || resolved.fullPath
  var base = this.history.base
  var href = createHref(base, fullPath, this.mode)
  return {
    normalizedTo: normalizedTo,
    resolved: resolved,
    href: href
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter)
}

module.exports = VueRouter;

/***/ },
/* 138 */
/***/ function(module, exports) {

exports.sync = function (store, router, options) {
  var moduleName = (options || {}).moduleName || 'route'

  store.registerModule(moduleName, {
    state: {},
    mutations: {
      'router/ROUTE_CHANGED': function (state, transition) {
        store.state[moduleName] = cloneRoute(transition.to, transition.from)
      }
    }
  })

  var isTimeTraveling = false
  var currentPath

  // sync router on store change
  store.watch(
    function (state) { return state[moduleName] },
    function (route) {
      if (route.fullPath === currentPath) {
        return
      }
      isTimeTraveling = true
      currentPath = route.fullPath
      router.push(route)
    },
    { sync: true }
  )

  // sync store on router navigation
  router.afterEach(function (to, from) {
    if (isTimeTraveling) {
      isTimeTraveling = false
      return
    }
    currentPath = to.fullPath
    store.commit('router/ROUTE_CHANGED', { to: to, from: from })
  })
}

function cloneRoute (to, from) {
  const clone = {
    name: to.name,
    path: to.path,
    hash: to.hash,
    query: to.query,
    params: to.params,
    fullPath: to.fullPath,
    meta: to.meta
  }
  if (from) {
    clone.from = cloneRoute(from)
  }
  return Object.freeze(clone)
}


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

/**
 * vuex v2.0.0
 * (c) 2016 Evan You
 * @license MIT
 */
(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Vuex = factory());
}(this, (function () { 'use strict';

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook

  devtoolHook.emit('vuex:init', store)

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState)
  })

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state)
  })
}

function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0])

  if (version >= 2) {
    var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1
    Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit })
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit
      _init.call(this, options)
    }
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options
    // store injection
    if (options.store) {
      this.$store = options.store
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store
    }
  }
}

function mapState (states) {
  var res = {}
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      return typeof val === 'function'
        ? val.call(this, this.$store.state, this.$store.getters)
        : this.$store.state[val]
    }
  })
  return res
}

function mapMutations (mutations) {
  var res = {}
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      return this.$store.commit.apply(this.$store, [val].concat(args))
    }
  })
  return res
}

function mapGetters (getters) {
  var res = {}
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedGetter () {
      if (!(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val))
      }
      return this.$store.getters[val]
    }
  })
  return res
}

function mapActions (actions) {
  var res = {}
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      return this.$store.dispatch.apply(this.$store, [val].concat(args))
    }
  })
  return res
}

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Vue // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  assert(Vue, "must call Vue.use(Vuex) before creating a store instance.")
  assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.")

  var state = options.state; if ( state === void 0 ) state = {};
  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._options = options
  this._committing = false
  this._actions = Object.create(null)
  this._mutations = Object.create(null)
  this._wrappedGetters = Object.create(null)
  this._runtimeModules = Object.create(null)
  this._subscribers = []
  this._watcherVM = new Vue()

    // bind commit and dispatch to self
  var store = this
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
    }
    this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  }

  // strict mode
  this.strict = strict

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], options)

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state)

  // apply plugins
  plugins.concat(devtoolPlugin).forEach(function (plugin) { return plugin(this$1); })
};

var prototypeAccessors = { state: {} };

prototypeAccessors.state.get = function () {
  return this._vm.state
};

prototypeAccessors.state.set = function (v) {
  assert(false, "Use store.replaceState() to explicit replace store state.")
};

Store.prototype.commit = function commit (type, payload, options) {
    var this$1 = this;

  // check object-style commit
  if (isObject(type) && type.type) {
    options = payload
    payload = type
    type = type.type
  }
  var mutation = { type: type, payload: payload }
  var entry = this._mutations[type]
  if (!entry) {
    console.error(("[vuex] unknown mutation type: " + type))
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload)
    })
  })
  if (!options || !options.silent) {
    this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); })
  }
};

Store.prototype.dispatch = function dispatch (type, payload) {
  // check object-style dispatch
  if (isObject(type) && type.type) {
    payload = type
    type = type.type
  }
  var entry = this._actions[type]
  if (!entry) {
    console.error(("[vuex] unknown action type: " + type))
    return
  }
  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  var subs = this._subscribers
  if (subs.indexOf(fn) < 0) {
    subs.push(fn)
  }
  return function () {
    var i = subs.indexOf(fn)
    if (i > -1) {
      subs.splice(i, 1)
    }
  }
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  assert(typeof getter === 'function', "store.watch only accepts a function.")
  return this._watcherVM.$watch(function () { return getter(this$1.state); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm.state = state
  })
};

Store.prototype.registerModule = function registerModule (path, module) {
  if (typeof path === 'string') { path = [path] }
  assert(Array.isArray(path), "module path must be a string or an Array.")
  this._runtimeModules[path.join('.')] = module
  installModule(this, this.state, path, module)
  // reset store to update getters...
  resetStoreVM(this, this.state)
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path] }
  assert(Array.isArray(path), "module path must be a string or an Array.")
    delete this._runtimeModules[path.join('.')]
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1))
    Vue.delete(parentState, path[path.length - 1])
  })
  resetStore(this)
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  updateModule(this._options, newOptions)
  resetStore(this)
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing
  this._committing = true
  fn()
  this._committing = committing
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function updateModule (targetModule, newModule) {
  if (newModule.actions) {
    targetModule.actions = newModule.actions
  }
  if (newModule.mutations) {
    targetModule.mutations = newModule.mutations
  }
  if (newModule.getters) {
    targetModule.getters = newModule.getters
  }
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!(targetModule.modules && targetModule.modules[key])) {
        console.warn(
          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
          'manual reload is needed'
        )
        return
      }
      updateModule(targetModule.modules[key], newModule.modules[key])
    }
  }
}

function resetStore (store) {
  store._actions = Object.create(null)
  store._mutations = Object.create(null)
  store._wrappedGetters = Object.create(null)
  var state = store.state
  // init root module
  installModule(store, state, [], store._options, true)
  // init all runtime modules
  Object.keys(store._runtimeModules).forEach(function (key) {
    installModule(store, state, key.split('.'), store._runtimeModules[key], true)
  })
  // reset vm
  resetStoreVM(store, state)
}

function resetStoreVM (store, state) {
  var oldVm = store._vm

  // bind store public getters
  store.getters = {}
  var wrappedGetters = store._wrappedGetters
  var computed = {}
  Object.keys(wrappedGetters).forEach(function (key) {
    var fn = wrappedGetters[key]
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); }
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; }
    })
  })

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent
  Vue.config.silent = true
  store._vm = new Vue({
    data: { state: state },
    computed: computed
  })
  Vue.config.silent = silent

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store)
  }

  if (oldVm) {
    // dispatch changes in all subscribed watchers
    // to force getter re-evaluation.
    store._withCommit(function () {
      oldVm.state = null
    })
    Vue.nextTick(function () { return oldVm.$destroy(); })
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length
  var state = module.state;
  var actions = module.actions;
  var mutations = module.mutations;
  var getters = module.getters;
  var modules = module.modules;

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1))
    var moduleName = path[path.length - 1]
    store._withCommit(function () {
      Vue.set(parentState, moduleName, state || {})
    })
  }

  if (mutations) {
    Object.keys(mutations).forEach(function (key) {
      registerMutation(store, key, mutations[key], path)
    })
  }

  if (actions) {
    Object.keys(actions).forEach(function (key) {
      registerAction(store, key, actions[key], path)
    })
  }

  if (getters) {
    wrapGetters(store, getters, path)
  }

  if (modules) {
    Object.keys(modules).forEach(function (key) {
      installModule(store, rootState, path.concat(key), modules[key], hot)
    })
  }
}

function registerMutation (store, type, handler, path) {
  if ( path === void 0 ) path = [];

  var entry = store._mutations[type] || (store._mutations[type] = [])
  entry.push(function wrappedMutationHandler (payload) {
    handler(getNestedState(store.state, path), payload)
  })
}

function registerAction (store, type, handler, path) {
  if ( path === void 0 ) path = [];

  var entry = store._actions[type] || (store._actions[type] = [])
  var dispatch = store.dispatch;
  var commit = store.commit;
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler({
      dispatch: dispatch,
      commit: commit,
      getters: store.getters,
      state: getNestedState(store.state, path),
      rootState: store.state
    }, payload, cb)
    if (!isPromise(res)) {
      res = Promise.resolve(res)
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err)
        throw err
      })
    } else {
      return res
    }
  })
}

function wrapGetters (store, moduleGetters, modulePath) {
  Object.keys(moduleGetters).forEach(function (getterKey) {
    var rawGetter = moduleGetters[getterKey]
    if (store._wrappedGetters[getterKey]) {
      console.error(("[vuex] duplicate getter key: " + getterKey))
      return
    }
    store._wrappedGetters[getterKey] = function wrappedGetter (store) {
      return rawGetter(
        getNestedState(store.state, modulePath), // local state
        store.getters, // getters
        store.state // root state
      )
    }
  })
}

function enableStrictMode (store) {
  store._vm.$watch('state', function () {
    assert(store._committing, "Do not mutate vuex store state outside mutation handlers.")
  }, { deep: true, sync: true })
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function install (_Vue) {
  if (Vue) {
    console.error(
      '[vuex] already installed. Vue.use(Vuex) should be called only once.'
    )
    return
  }
  Vue = _Vue
  applyMixin(Vue)
}

// auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

var index = {
  Store: Store,
  install: install,
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions
}

return index;

})));

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(2);


var isDev = "production" !== 'production'

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ exports["default"] = function (context) {
  
  // set router's location
  __WEBPACK_IMPORTED_MODULE_0__app__["a" /* router */].push(context.url)
  var matchedComponents = __WEBPACK_IMPORTED_MODULE_0__app__["a" /* router */].getMatchedComponents()

  // no matched routes
  if (!matchedComponents.length) {
    return Promise.reject({ code: '404' })
  }

  // Call preFetch hooks on components matched by the route.
  // A preFetch hook dispatches a store action and returns a Promise,
  // which is resolved when the action is complete and store state has been
  // updated.
  return Promise.all(matchedComponents.map(function (component) {
    if (component.preFetch) {
      return component.preFetch(__WEBPACK_IMPORTED_MODULE_0__app__["b" /* store */])
    }
  })).then(function (res) {
    // After all preFetch hooks are resolved, our store is now
    // filled with the state needed to render the app.
    // Expose the state on the render context, and let the request handler
    // inline the state in the HTML response. This allows the client-side
    // store to pick-up the server-side state without having to duplicate
    // the initial data fetching on the client.
    context.initialState = __WEBPACK_IMPORTED_MODULE_0__app__["b" /* store */].state

    var page = res.shift()

    if (page && page.h1) {
      __WEBPACK_IMPORTED_MODULE_0__app__["c" /* app */].title = page.h1
    }

    if (page) {
      context.title = page.title
      context.description = page.description
      context.keywords = page.keywords
    }

    return __WEBPACK_IMPORTED_MODULE_0__app__["c" /* app */]
  })
};


/***/ }
/******/ ]);