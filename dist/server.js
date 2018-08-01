/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setStep = setStep;
exports.setRole = setRole;
exports.setCharacter = setCharacter;
exports.setSpecialization = setSpecialization;
exports.setAlternativeSpecialization = setAlternativeSpecialization;
var SET_STEP = 'SET_STEP';
var SET_ROLE = 'SET_ROLE';
var SET_CHARACTER = 'SET_CHARACTER';
var SET_SPECIALIZATION = 'SET_SPECIALIZATION';
var SET_ALTERNATIVE_SPECIALIZATION = 'SET_ALTERNATIVE_SPECIALIZATION';

function setStep(step) {
  return {
    type: SET_STEP,
    step: step
  };
}

function setRole(role) {
  return {
    type: SET_ROLE,
    role: role
  };
}

function setCharacter(character) {
  return {
    type: SET_CHARACTER,
    character: character
  };
}

function setSpecialization(specialization) {
  return {
    type: SET_SPECIALIZATION,
    specialization: specialization
  };
}

function setAlternativeSpecialization(alternative_specialization) {
  return {
    type: SET_ALTERNATIVE_SPECIALIZATION,
    alternative_specialization: alternative_specialization
  };
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    color: ', ';\n    font-family: ', ';\n'], ['\n    color: ', ';\n    font-family: ', ';\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Paragraph = _styledComponents2.default.p(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.textColor;
}, function (_ref2) {
    var theme = _ref2.theme;
    return theme.fontBold;
});

exports.default = Paragraph;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    margin-top: 0;\n    color: ', ';\n    font-family: ', ';\n    font-weight: 700;\n'], ['\n    margin-top: 0;\n    color: ', ';\n    font-family: ', ';\n    font-weight: 700;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = _styledComponents2.default.h1(_templateObject, function (_ref) {
    var theme = _ref.theme;
    return theme.textColor;
}, function (_ref2) {
    var theme = _ref2.theme;
    return theme.fontBold;
});

exports.default = Title;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAvailableRoles = getAvailableRoles;
exports.getAvailableClassesForRole = getAvailableClassesForRole;
exports.getCharactersForClasses = getCharactersForClasses;
exports.getSpecializationsForRole = getSpecializationsForRole;
exports.getAlternativeSpecializations = getAlternativeSpecializations;
exports.getClassName = getClassName;
exports.getRaceName = getRaceName;
exports.getClassColor = getClassColor;

var _constants = __webpack_require__(32);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var specializations = {};

specializations[_constants.CLASSES.PRIEST] = {
    DISCIPLINE: _constants.ROLES.HEALER,
    HOLY: _constants.ROLES.HEALER,
    SHADOW: _constants.ROLES.RANGED
};

specializations[_constants.CLASSES.DEATH_KNIGHT] = {
    BLOOD: _constants.ROLES.TANK,
    FROST: _constants.ROLES.MELEE,
    UNHOLY: _constants.ROLES.MELEE
};

specializations[_constants.CLASSES.DRUID] = {
    BALANCE: _constants.ROLES.RANGED,
    FERAL: _constants.ROLES.MELEE,
    GUARDIAN: _constants.ROLES.TANK,
    RESTORATION: _constants.ROLES.HEALER
};

specializations[_constants.CLASSES.SHAMAN] = {
    ELEMENTAL: _constants.ROLES.RANGED,
    ENHANCEMENT: _constants.ROLES.MELEE,
    RESTORATION: _constants.ROLES.HEALER
};

specializations[_constants.CLASSES.MONK] = {
    WINDWALKER: _constants.ROLES.MELEE,
    BREWMASTER: _constants.ROLES.TANK,
    MISTWEAVER: _constants.ROLES.HEALER
};

specializations[_constants.CLASSES.HUNTER] = {
    SURVIVAL: _constants.ROLES.MELEE,
    BEAST_MASTERY: _constants.ROLES.RANGED,
    MARKMANSHIP: _constants.ROLES.RANGED
};

specializations[_constants.CLASSES.MAGE] = {
    FIRE: _constants.ROLES.RANGED,
    FROST: _constants.ROLES.RANGED,
    ARCANE: _constants.ROLES.RANGED
};

specializations[_constants.CLASSES.PALADIN] = {
    HOLY: _constants.ROLES.HEALER,
    PROTECTION: _constants.ROLES.TANK,
    RETRIBUTION: _constants.ROLES.MELEE
};

specializations[_constants.CLASSES.WARLOCK] = {
    AFFLICTION: _constants.ROLES.RANGED,
    DEMONOLOGY: _constants.ROLES.RANGED,
    DESTRUCTION: _constants.ROLES.RANGED
};

specializations[_constants.CLASSES.DEMON_HUNTER] = {
    HAVOC: _constants.ROLES.MELEE,
    VENGEANCE: _constants.ROLES.TANK
};

specializations[_constants.CLASSES.ROGUE] = {
    ASSASINATION: _constants.ROLES.MELEE,
    OUTLAW: _constants.ROLES.MELEE,
    SUBLIETY: _constants.ROLES.MELEE
};

specializations[_constants.CLASSES.WARRIOR] = {
    FURY: _constants.ROLES.MELEE,
    PROTERCTION: _constants.ROLES.TANK,
    ARMS: _constants.ROLES.MELEE
};

function getAvailableRoles(classes) {
    var availableRoles = classes.reduce(function (roles, charClass) {
        Object.values(specializations[charClass]).map(function (role) {
            return roles.add(role);
        });
        return roles;
    }, new Set());
    return [].concat(_toConsumableArray(availableRoles));
}

function getAvailableClassesForRole(role) {
    return Object.keys(specializations).filter(function (charClass) {
        return ~Object.values(specializations[charClass]).indexOf(role);
    });
}

function getCharactersForClasses(classes, characters) {
    var dunnoWhy = classes.map(Number);
    return characters.filter(function (character) {
        return ~dunnoWhy.indexOf(character['class']);
    });
}

function getSpecializationsForRole(charClass, role) {
    return Object.keys(specializations[charClass]).filter(function (spec) {
        return specializations[charClass][spec] === role;
    });
}

function getAlternativeSpecializations(charClass, primarySpecialization) {
    return Object.keys(specializations[charClass]).filter(function (spec) {
        return spec !== primarySpecialization;
    });
}

function getClassName(charClass) {
    return Object.keys(_constants.CLASSES).find(function (key) {
        return _constants.CLASSES[key] === charClass;
    }).toLowerCase().replace('_', ' ');
}

function getRaceName(race) {
    return Object.keys(_constants.RACES).find(function (key) {
        return _constants.RACES[key] === race;
    }).toLowerCase().replace('_', ' ');
}

function getClassColor(charClass) {
    return _constants.COLORS[charClass];
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    text-align: center;\n    margin-bottom: 70px;\n'], ['\n    text-align: center;\n    margin-bottom: 70px;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents2.default.div(_templateObject);

exports.default = Header;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpecializationItem = exports.SpecializationContainer = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    justify-content: center;\n'], ['\n    display: flex;\n    justify-content: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\n'], ['\n\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SpecializationContainer = exports.SpecializationContainer = _styledComponents2.default.div(_templateObject);

var SpecializationItem = exports.SpecializationItem = _styledComponents2.default.div(_templateObject2);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var color = {
    lightGrey: '#f2f2f4',
    darkGrey: '#181818',
    green: '#399247',
    darkBlue: '#313445',
    darkerBlue: '#262834',
    error: '#DE3C3C',
    white: '#ffffff',
    textColor: '#F2F2F2'
};

exports.default = color;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styles = __webpack_require__(38);

__webpack_require__(37);

var _app = __webpack_require__(26);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        _styledComponents.ThemeProvider,
        { theme: _styles.theme },
        _react2.default.createElement(_app2.default, null)
    );
};

// main app

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var customMiddleware = function customMiddleware(store) {
  return function (next) {
    return function (action) {
      return isFunction(action) ? action(store.dispatch, store.getState) : next(action);
    };
  };
};
var isFunction = function isFunction(action) {
  return typeof action === 'function';
};
exports.default = customMiddleware;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(8);

var _account = __webpack_require__(34);

var _account2 = _interopRequireDefault(_account);

var _apply = __webpack_require__(35);

var _apply2 = _interopRequireDefault(_apply);

var _characters = __webpack_require__(36);

var _characters2 = _interopRequireDefault(_characters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var todoApp = (0, _redux.combineReducers)({
  account: _account2.default,
  characters: _characters2.default,
  apply: _apply2.default
});

exports.default = todoApp;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("passport-bnet");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(15);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(22);

var _server2 = _interopRequireDefault(_server);

var _reactHelmet = __webpack_require__(23);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _shared = __webpack_require__(11);

var _shared2 = _interopRequireDefault(_shared);

var _passport = __webpack_require__(20);

var _passport2 = _interopRequireDefault(_passport);

var _expressSession = __webpack_require__(16);

var _expressSession2 = _interopRequireDefault(_expressSession);

var _https = __webpack_require__(18);

var _https2 = _interopRequireDefault(_https);

var _fs = __webpack_require__(17);

var _fs2 = _interopRequireDefault(_fs);

var _nodeFetch = __webpack_require__(19);

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _cookieParser = __webpack_require__(14);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _reactRedux = __webpack_require__(2);

var _middleware = __webpack_require__(12);

var _middleware2 = _interopRequireDefault(_middleware);

var _redux = __webpack_require__(8);

var _reducers = __webpack_require__(13);

var _reducers2 = _interopRequireDefault(_reducers);

var _styledComponents = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// <-- importing ServerStyleSheet
var app = (0, _express2.default)();

app.set('trust proxy', true);

app.use('/dist', _express2.default.static('./dist'));

app.use((0, _cookieParser2.default)('keyboard cat'));

app.use((0, _expressSession2.default)({
  secret: 'keyboard cat',
  cookie: { secure: true }
}));
app.use(_passport2.default.initialize());
app.use(_passport2.default.session());

var BnetStrategy = __webpack_require__(21).Strategy;

var BNET_ID = process.env.BNET_ID;
var BNET_SECRET = process.env.BNET_SECRET;
var BNET_CALLBACK = process.env.BNET_CALLBACK;

_passport2.default.serializeUser(function (user, done) {
  done(null, user);
});

_passport2.default.deserializeUser(function (user, done) {
  done(null, user);
});

// Use the BnetStrategy within Passport.
_passport2.default.use(new BnetStrategy({
  clientID: BNET_ID,
  clientSecret: BNET_SECRET,
  callbackURL: BNET_CALLBACK,
  region: "eu",
  scope: "wow.profile"
}, function (accessToken, refreshToken, profile, done) {
  (0, _nodeFetch2.default)('https://eu.api.battle.net/wow/user/characters?access_token=' + profile.token, {
    method: 'get',
    headers: {
      'content-type': 'application/json'
    }
  }).then(function (res) {
    return res.json();
  }).then(function (characters) {

    return done(null, characters);
  }).catch(function (err) {
    console.log('error', err);
  });
}));

app.get('/auth/bnet', _passport2.default.authenticate('bnet'));

app.get('/auth/bnet/callback', _passport2.default.authenticate('bnet', { failureRedirect: '/error' }), function (req, res) {
  res.redirect('/');
});

app.get('/error', function (req, res) {
  return res.send('error');
});

app.get('*', async function (req, res) {
  console.log(req.user);
  if (!req.user) {
    return res.redirect('/auth/bnet');
  }

  var initialData = {
    account: {
      battletag: 'merijn#21686',
      email: 'mail@merijn.pt'
    },
    characters: req.user.characters.filter(function (char) {
      return char.level === 110;
    }),
    apply: {
      maxStep: 0,
      step: 0,
      answers: {
        role: null,
        character: null
      }
    }
  };

  var store = (0, _redux.createStore)(_reducers2.default, initialData, (0, _redux.applyMiddleware)(_middleware2.default));

  var sheet = new _styledComponents.ServerStyleSheet();

  var html = _server2.default.renderToString(sheet.collectStyles(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_shared2.default, null)
  )));

  console.log(html);
  var styles = sheet.getStyleTags();
  //render helmet data aka meta data in <head></head>
  var helmetData = _reactHelmet2.default.renderStatic();
  //check context for url, if url exists then react router has ran into a redirect

  res.send(renderFullPage(html, store.getState(), helmetData, styles));
});

var port = process.env.PORT || 9000;

// const httpsOptions = {
//   key: fs.readFileSync('./key.pem'),
//   cert: fs.readFileSync('./cert.pem')
// }
// https.createServer(httpsOptions, app).listen(port, () => {
//   console.log('server running at ' + port)
// })

app.listen(port, function () {
  console.log('app running on localhost:' + port);
});

function renderFullPage(html, preloadedState, helmet, styles) {
  return '\n    <!doctype html>\n    <html>\n      <head>\n        <link rel="icon" href="/dist/favicon.ico" type="image/ico" />\n        ' + helmet.title.toString() + '\n        ' + helmet.meta.toString() + '\n\t\t\t\t' + helmet.link.toString() + '\n\t\t\t\t' + styles + '\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          // WARNING: See the following for security issues around embedding JSON in HTML:\n          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n        </script>\n        <script src="/dist/assets/main.bundle.js"></script>\n      </body>\n    </html>\n    ';
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    color: ', ';\n    width: 320px;\n    height: 240px;\n    display: inline-block;\n    background-image: url(\'/dist/assets/images/thumbnails/specializations/', '@2x.png\');\n    background-size: cover;\n\n    opacity: ', ';\n    transition: opacity ease-in-out 0.3s;\n    position: relative;\n    &:hover {\n        opacity: 1;\n    }\n'], ['\n    color: ', ';\n    width: 320px;\n    height: 240px;\n    display: inline-block;\n    background-image: url(\'/dist/assets/images/thumbnails/specializations/', '@2x.png\');\n    background-size: cover;\n\n    opacity: ', ';\n    transition: opacity ease-in-out 0.3s;\n    position: relative;\n    &:hover {\n        opacity: 1;\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    color: ', ';\n    font-family: ', ';\n    font-size: 2em;\n    position: absolute;\n    bottom: 20px;\n    left: 20px;\n    text-shadow: 2px 2px 2px rgba(0,0,0,0.5);\n'], ['\n    color: ', ';\n    font-family: ', ';\n    font-size: 2em;\n    position: absolute;\n    bottom: 20px;\n    left: 20px;\n    text-shadow: 2px 2px 2px rgba(0,0,0,0.5);\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    background-image: url(\'/static/gradient@2x.png\');\n    background-size: fit;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 143px;\n'], ['\n    background-image: url(\'/static/gradient@2x.png\');\n    background-size: fit;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 143px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    background: transparent;\n    border: 3px solid #494949;\n    padding: 10px;\n    border-radius: 15px;\n    font-family: ', ';\n    color: #494949;\n    font-size: 16px;\n    &:hover {\n        color: #DDA024;\n        border-color: #DDA024;\n    }\n'], ['\n    background: transparent;\n    border: 3px solid #494949;\n    padding: 10px;\n    border-radius: 15px;\n    font-family: ', ';\n    color: #494949;\n    font-size: 16px;\n    &:hover {\n        color: #DDA024;\n        border-color: #DDA024;\n    }\n']);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRedux = __webpack_require__(2);

var _helpers = __webpack_require__(6);

var _actions = __webpack_require__(3);

var _header = __webpack_require__(7);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(33);

var _footer2 = _interopRequireDefault(_footer);

var _title = __webpack_require__(5);

var _title2 = _interopRequireDefault(_title);

var _paragraph = __webpack_require__(4);

var _paragraph2 = _interopRequireDefault(_paragraph);

var _specialization = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Option = _styledComponents2.default.div(_templateObject, function (props) {
    return props.active ? 'red' : 'black';
}, function (props) {
    return props.image;
}, function (props) {
    return props.active ? 1 : 0.5;
});

var OptionTitle = _styledComponents2.default.span(_templateObject2, function (_ref) {
    var theme = _ref.theme;
    return theme.textColor;
}, function (_ref2) {
    var theme = _ref2.theme;
    return theme.fontBold;
});

var Gradient = _styledComponents2.default.div(_templateObject3);

var Button = _styledComponents2.default.button(_templateObject4, function (_ref3) {
    var theme = _ref3.theme;
    return theme.fontBold;
});

function AlternativeSpecialization(_ref4) {
    var alternativeSpecializations = _ref4.alternativeSpecializations,
        charClass = _ref4.charClass,
        _onClick = _ref4.onClick;

    var renderSpecializations = alternativeSpecializations.map(function (spec, index) {
        return _react2.default.createElement(
            Option,
            { image: (0, _helpers.getClassName)(charClass).replace(' ', '_') + '/' + spec.toLowerCase().replace(' ', '_'), onClick: function onClick() {
                    return _onClick(spec);
                }, key: index },
            _react2.default.createElement(Gradient, null),
            _react2.default.createElement(
                OptionTitle,
                null,
                spec
            )
        );
    });
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _header2.default,
            null,
            _react2.default.createElement(
                _title2.default,
                null,
                'What alternative specialization would you like to play?'
            )
        ),
        _react2.default.createElement(
            _specialization.SpecializationContainer,
            null,
            renderSpecializations
        ),
        _react2.default.createElement(
            _footer2.default,
            null,
            _react2.default.createElement(
                Button,
                { onClick: function onClick() {
                        return _onClick(false);
                    } },
                'Nao jogo nenhuma offspec'
            )
        )
    );
}

var mapStateToProps = function mapStateToProps(state) {
    return {
        charClass: state.apply.answers.character['class'],
        alternativeSpecializations: (0, _helpers.getAlternativeSpecializations)(state.apply.answers.character.class, state.apply.answers.specialization)
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClick: function onClick(specialization) {
            dispatch((0, _actions.setAlternativeSpecialization)(specialization));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AlternativeSpecialization);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    max-width: 1280px;\n    margin: 70px auto;\n'], ['\n    max-width: 1280px;\n    margin: 70px auto;\n']);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRedux = __webpack_require__(2);

var _helpers = __webpack_require__(6);

var _role = __webpack_require__(29);

var _role2 = _interopRequireDefault(_role);

var _character = __webpack_require__(27);

var _character2 = _interopRequireDefault(_character);

var _specialization = __webpack_require__(30);

var _specialization2 = _interopRequireDefault(_specialization);

var _alternative_specialization = __webpack_require__(25);

var _alternative_specialization2 = _interopRequireDefault(_alternative_specialization);

var _overview = __webpack_require__(28);

var _overview2 = _interopRequireDefault(_overview);

var _stepBar = __webpack_require__(31);

var _stepBar2 = _interopRequireDefault(_stepBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MainWrapper = _styledComponents2.default.div(_templateObject);

var steps = [{
    label: 'What role do you want to play?',
    component: _react2.default.createElement(_role2.default, null)
}, {
    label: 'What character do you want to play?',
    component: _react2.default.createElement(_character2.default, null)
}, {
    label: 'What specialization do you want to play?',
    component: _react2.default.createElement(_specialization2.default, null)
}, {
    label: 'What alternative specialization do you want to play?',
    component: _react2.default.createElement(_alternative_specialization2.default, null)
}, {
    label: 'Overview',
    component: _react2.default.createElement(_overview2.default, null)
}];

function App(_ref) {
    var step = _ref.step;

    var renderStepsBar = _react2.default.createElement(_stepBar2.default, { labels: steps.map(function (s) {
            return s.label;
        }) });
    return _react2.default.createElement(
        MainWrapper,
        null,
        steps[step].component,
        renderStepsBar
    );
}

var mapStateToProps = function mapStateToProps(state) {
    return {
        step: state.apply.step,
        character: state.apply.role
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    flex-wrap: wrap;\n'], ['\n    display: flex;\n    flex-wrap: wrap;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    flex: initial;\n    width: 320px;\n    height: 240px;\n    display: inline-block;\n    background-image: url(\'http://render-eu.worldofwarcraft.com/character/', '\');\n    background-size: cover;\n    opacity: ', ';\n    transition: opacity ease-in-out 0.3s;\n    position: relative;\n    &:hover {\n        opacity: 1;\n    }\n'], ['\n    flex: initial;\n    width: 320px;\n    height: 240px;\n    display: inline-block;\n    background-image: url(\'http://render-eu.worldofwarcraft.com/character/', '\');\n    background-size: cover;\n    opacity: ', ';\n    transition: opacity ease-in-out 0.3s;\n    position: relative;\n    &:hover {\n        opacity: 1;\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    color: ', ';\n    font-family: ', ';\n    font-size: 2em;\n    position: absolute;\n    bottom: 35px;\n    left: 20px;\n    text-shadow: 2px 2px 2px rgba(0,0,0,0.5);\n'], ['\n    color: ', ';\n    font-family: ', ';\n    font-size: 2em;\n    position: absolute;\n    bottom: 35px;\n    left: 20px;\n    text-shadow: 2px 2px 2px rgba(0,0,0,0.5);\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    color: ', ';\n    font-family: ', ';\n    font-size: 0.75em;\n    position: absolute;\n    bottom: 20px;\n    left: 20px;\n    text-transform: capitalize;\n    text-shadow: 2px 2px 2px rgba(0,0,0,0.5);\n'], ['\n    color: ', ';\n    font-family: ', ';\n    font-size: 0.75em;\n    position: absolute;\n    bottom: 20px;\n    left: 20px;\n    text-transform: capitalize;\n    text-shadow: 2px 2px 2px rgba(0,0,0,0.5);\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    font-size: 0.9em;\n    margin-left: 10px;\n    color: #ccc;\n'], ['\n    font-size: 0.9em;\n    margin-left: 10px;\n    color: #ccc;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    background-image: url(\'/static/gradient@2x.png\');\n    background-size: fit;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 143px;\n'], ['\n    background-image: url(\'/static/gradient@2x.png\');\n    background-size: fit;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 143px;\n']);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(3);

var _helpers = __webpack_require__(6);

var _header = __webpack_require__(7);

var _header2 = _interopRequireDefault(_header);

var _title = __webpack_require__(5);

var _title2 = _interopRequireDefault(_title);

var _paragraph = __webpack_require__(4);

var _paragraph2 = _interopRequireDefault(_paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CharactersContainer = _styledComponents2.default.div(_templateObject);

var Character = _styledComponents2.default.div(_templateObject2, function (props) {
    return props.image;
}, function (props) {
    return props.active ? 1 : 0.5;
});

var OptionTitle = _styledComponents2.default.span(_templateObject3, function (_ref) {
    var theme = _ref.theme;
    return theme.textColor;
}, function (_ref2) {
    var theme = _ref2.theme;
    return theme.fontBold;
});

var OptionSubtitle = _styledComponents2.default.span.attrs({
    classColor: function classColor(props) {
        return (0, _helpers.getClassColor)(props.charClass);
    }
})(_templateObject4, function (props) {
    return props.classColor;
}, function (_ref3) {
    var theme = _ref3.theme;
    return theme.fontBold;
});

var RealmName = _styledComponents2.default.span(_templateObject5);

var Gradient = _styledComponents2.default.div(_templateObject6);

function Characters(_ref4) {
    var characters = _ref4.characters,
        selectedCharacter = _ref4.selectedCharacter,
        _onClick = _ref4.onClick;

    console.log(characters);
    var renderCharacters = characters.map(function (character, index) {
        return _react2.default.createElement(
            Character,
            { image: character.thumbnail.replace('avatar', 'profilemain'), active: '' + selectedCharacter.name + selectedCharacter.realm === '' + character.name + character.realm, onClick: function onClick() {
                    return _onClick(character);
                }, key: index },
            _react2.default.createElement(Gradient, null),
            _react2.default.createElement(
                OptionTitle,
                null,
                character.name
            ),
            _react2.default.createElement(
                OptionSubtitle,
                { charClass: character['class'] },
                (0, _helpers.getRaceName)(character.race),
                ' ',
                (0, _helpers.getClassName)(character['class']),
                _react2.default.createElement(
                    RealmName,
                    null,
                    character.realm
                )
            )
        );
    });

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _header2.default,
            null,
            _react2.default.createElement(
                _title2.default,
                null,
                'Com que character queres fazer apply?'
            ),
            _react2.default.createElement(
                _paragraph2.default,
                null,
                'Recrutamos todas as classes, mas de momento prioritizamos ranged dps e healers.'
            )
        ),
        _react2.default.createElement(
            CharactersContainer,
            null,
            renderCharacters
        )
    );
}

var mapStateToProps = function mapStateToProps(state) {
    var classesForRole = (0, _helpers.getAvailableClassesForRole)(state.apply.answers.role);
    console.log(classesForRole);
    return {
        characters: (0, _helpers.getCharactersForClasses)(classesForRole, state.characters),
        selectedCharacter: state.apply.answers.character || {}
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClick: function onClick(character) {
            dispatch((0, _actions.setCharacter)(character));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Characters);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRedux = __webpack_require__(2);

var _title = __webpack_require__(5);

var _title2 = _interopRequireDefault(_title);

var _paragraph = __webpack_require__(4);

var _paragraph2 = _interopRequireDefault(_paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Overview(_ref) {
    var role = _ref.role,
        character = _ref.character,
        specialization = _ref.specialization,
        alternative_specialization = _ref.alternative_specialization;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _paragraph2.default,
            null,
            _react2.default.createElement(
                'strong',
                null,
                'Role:'
            ),
            ' ',
            role
        ),
        _react2.default.createElement(
            _paragraph2.default,
            null,
            _react2.default.createElement(
                'strong',
                null,
                'Character:'
            ),
            ' ',
            character.name,
            ' ',
            character.realm
        ),
        _react2.default.createElement(
            _paragraph2.default,
            null,
            _react2.default.createElement(
                'strong',
                null,
                'Specialization:'
            ),
            ' ',
            specialization
        ),
        _react2.default.createElement(
            _paragraph2.default,
            null,
            _react2.default.createElement(
                'strong',
                null,
                'Alternative Specialization:'
            ),
            ' ',
            alternative_specialization ? alternative_specialization : 'N/A'
        )
    );
}

var mapStateToProps = function mapStateToProps(state) {
    return {
        role: state.apply.answers.role,
        character: state.apply.answers.character,
        specialization: state.apply.answers.specialization,
        alternative_specialization: state.apply.answers.alternative_specialization
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Overview);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n'], ['\n    display: flex;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    color: ', ';\n    width: 320px;\n    height: 240px;\n    display: inline-block;\n    background-image: url(\'/dist/assets/images/thumbnails/roles/', '@2x.png\');\n    background-size: cover;\n\n    opacity: ', ';\n    transition: opacity ease-in-out 0.3s;\n    position: relative;\n    &:hover {\n        opacity: 1;\n    }\n'], ['\n    color: ', ';\n    width: 320px;\n    height: 240px;\n    display: inline-block;\n    background-image: url(\'/dist/assets/images/thumbnails/roles/', '@2x.png\');\n    background-size: cover;\n\n    opacity: ', ';\n    transition: opacity ease-in-out 0.3s;\n    position: relative;\n    &:hover {\n        opacity: 1;\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    color: ', ';\n    font-family: ', ';\n    font-size: 2em;\n    position: absolute;\n    bottom: 20px;\n    left: 20px;\n    text-shadow: 2px 2px 2px rgba(0,0,0,0.5);\n'], ['\n    color: ', ';\n    font-family: ', ';\n    font-size: 2em;\n    position: absolute;\n    bottom: 20px;\n    left: 20px;\n    text-shadow: 2px 2px 2px rgba(0,0,0,0.5);\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    background-image: url(\'/static/gradient@2x.png\');\n    background-size: fit;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 143px;\n'], ['\n    background-image: url(\'/static/gradient@2x.png\');\n    background-size: fit;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 143px;\n']);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(3);

var _helpers = __webpack_require__(6);

var _header = __webpack_require__(7);

var _header2 = _interopRequireDefault(_header);

var _title = __webpack_require__(5);

var _title2 = _interopRequireDefault(_title);

var _paragraph = __webpack_require__(4);

var _paragraph2 = _interopRequireDefault(_paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OptionsContainer = _styledComponents2.default.div(_templateObject);

var Option = _styledComponents2.default.div(_templateObject2, function (props) {
    return props.active ? 'red' : 'black';
}, function (props) {
    return props.image;
}, function (props) {
    return props.active ? 1 : 0.5;
});

var OptionTitle = _styledComponents2.default.span(_templateObject3, function (_ref) {
    var theme = _ref.theme;
    return theme.textColor;
}, function (_ref2) {
    var theme = _ref2.theme;
    return theme.fontBold;
});

var Gradient = _styledComponents2.default.div(_templateObject4);

function Role(_ref3) {
    var _onClick = _ref3.onClick,
        availableRoles = _ref3.availableRoles,
        selectedRole = _ref3.selectedRole;

    var options = availableRoles.map(function (role, index) {
        return _react2.default.createElement(
            Option,
            { image: role.toLowerCase(), active: role === selectedRole, key: index, onClick: function onClick() {
                    return _onClick(role);
                }, role: role },
            _react2.default.createElement(Gradient, null),
            _react2.default.createElement(
                OptionTitle,
                null,
                role
            )
        );
    });

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _header2.default,
            null,
            _react2.default.createElement(
                _title2.default,
                null,
                'Qual role pretendes jogar?'
            ),
            _react2.default.createElement(
                _paragraph2.default,
                null,
                'Recrutamos todas as classes, mas de momento prioritizamos ranged dps e healers.'
            )
        ),
        _react2.default.createElement(
            OptionsContainer,
            null,
            options
        )
    );
}

var mapStateToProps = function mapStateToProps(state) {
    return {
        selectedRole: state.apply.answers.role,
        availableRoles: (0, _helpers.getAvailableRoles)(state.characters.map(function (char) {
            return char.class;
        }))
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClick: function onClick(role) {
            dispatch((0, _actions.setRole)(role));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Role);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    color: ', ';\n    width: 320px;\n    height: 240px;\n    display: inline-block;\n    background-image: url(\'/dist/assets/images/thumbnails/specializations/', '@2x.png\');\n    background-size: cover;\n\n    opacity: ', ';\n    transition: opacity ease-in-out 0.3s;\n    position: relative;\n    &:hover {\n        opacity: 1;\n    }\n'], ['\n    color: ', ';\n    width: 320px;\n    height: 240px;\n    display: inline-block;\n    background-image: url(\'/dist/assets/images/thumbnails/specializations/', '@2x.png\');\n    background-size: cover;\n\n    opacity: ', ';\n    transition: opacity ease-in-out 0.3s;\n    position: relative;\n    &:hover {\n        opacity: 1;\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    color: ', ';\n    font-family: ', ';\n    font-size: 2em;\n    position: absolute;\n    bottom: 20px;\n    left: 20px;\n    text-shadow: 2px 2px 2px rgba(0,0,0,0.5);\n'], ['\n    color: ', ';\n    font-family: ', ';\n    font-size: 2em;\n    position: absolute;\n    bottom: 20px;\n    left: 20px;\n    text-shadow: 2px 2px 2px rgba(0,0,0,0.5);\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    background-image: url(\'/static/gradient@2x.png\');\n    background-size: fit;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 143px;\n'], ['\n    background-image: url(\'/static/gradient@2x.png\');\n    background-size: fit;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 143px;\n']);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRedux = __webpack_require__(2);

var _helpers = __webpack_require__(6);

var _index = __webpack_require__(3);

var _header = __webpack_require__(7);

var _header2 = _interopRequireDefault(_header);

var _title = __webpack_require__(5);

var _title2 = _interopRequireDefault(_title);

var _paragraph = __webpack_require__(4);

var _paragraph2 = _interopRequireDefault(_paragraph);

var _specialization = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Option = _styledComponents2.default.div(_templateObject, function (props) {
    return props.active ? 'red' : 'black';
}, function (props) {
    return props.image;
}, function (props) {
    return props.active ? 1 : 0.5;
});

var OptionTitle = _styledComponents2.default.span(_templateObject2, function (_ref) {
    var theme = _ref.theme;
    return theme.textColor;
}, function (_ref2) {
    var theme = _ref2.theme;
    return theme.fontBold;
});

var Gradient = _styledComponents2.default.div(_templateObject3);

function Specialization(_ref3) {
    var charClass = _ref3.charClass,
        role = _ref3.role,
        _onClick = _ref3.onClick;

    console.log(role);
    console.log(charClass);
    var specializations = (0, _helpers.getSpecializationsForRole)(charClass, role);
    if (specializations.length === 1) {
        _onClick(specializations[0]);
    }

    var renderSpecializations = specializations.map(function (spec, index) {
        return _react2.default.createElement(
            Option,
            { image: (0, _helpers.getClassName)(charClass).replace(' ', '_') + '/' + spec.toLowerCase().replace(' ', '_'), onClick: function onClick() {
                    return _onClick(spec);
                }, key: index },
            _react2.default.createElement(Gradient, null),
            _react2.default.createElement(
                OptionTitle,
                null,
                spec
            )
        );
    });

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _header2.default,
            null,
            _react2.default.createElement(
                _title2.default,
                null,
                'What spec do you want to play?'
            )
        ),
        _react2.default.createElement(
            _specialization.SpecializationContainer,
            null,
            renderSpecializations
        )
    );
}

var mapStateToProps = function mapStateToProps(state) {
    console.log(state);
    return {
        role: state.apply.answers.role,
        charClass: state.apply.answers.character['class']
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClick: function onClick(spec) {
            dispatch((0, _index.setSpecialization)(spec));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Specialization);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    margin-top: 70px;\n    display: flex;\n    justify-content: center;\n'], ['\n    margin-top: 70px;\n    display: flex;\n    justify-content: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\n    margin: 20px;\n    display: inline-block;\n    position: relative;\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    background-color: ', ';\n    border: 3px solid ', ';\n    &:hover {\n        cursor: ', ';\n        border-color: ', '\n        & ', '{\n            color: ', '\n        }\n    }\n    & ', '{\n        color: ', ';\n    }\n'], ['\n\n    margin: 20px;\n    display: inline-block;\n    position: relative;\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    background-color: ', ';\n    border: 3px solid ', ';\n    &:hover {\n        cursor: ', ';\n        border-color: ', '\n        & ', '{\n            color: ', '\n        }\n    }\n    & ', '{\n        color: ', ';\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-size: 22px;\n    font-family: ', ';\n'], ['\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-size: 22px;\n    font-family: ', ';\n']);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StepBarContainer = _styledComponents2.default.div(_templateObject);

var StepContainer = _styledComponents2.default.div.attrs({
    borderstatus: function borderstatus(props) {
        return props.status === 'active' ? '#DDA024' : props.status === 'disabled' ? '#262626' : '#494949';
    },
    stepstatus: function stepstatus(props) {
        return props.status === 'active' ? '#494949' : props.status === 'disabled' ? '#262626' : '#494949';
    },
    background: function background(props) {
        return props.status === 'active' ? '#DDA024' : 'transparent';
    }
})(_templateObject2, function (props) {
    return props.background;
}, function (props) {
    return props.borderstatus;
}, function (props) {
    return props.status !== 'disabled' ? 'pointer;' : 'not-allowed';
}, function (props) {
    return props.status !== 'disabled' ? '#DDA024;' : '';
}, Step, function (props) {
    return props.status === 'active' ? '' : '#DDA024;';
}, Step, function (props) {
    return props.stepstatus;
});

var Step = _styledComponents2.default.span(_templateObject3, function (_ref) {
    var theme = _ref.theme;
    return theme.fontBold;
});

function StepBar(_ref2) {
    var step = _ref2.step,
        maxStep = _ref2.maxStep,
        labels = _ref2.labels,
        _onClick = _ref2.onClick;

    var renderSteps = Array(labels.length).fill().map(function (_, index) {
        var status = index === step ? 'active' : index <= maxStep ? '' : 'disabled';
        return _react2.default.createElement(
            StepContainer,
            { key: index, status: status, alt: labels[index], onClick: function onClick() {
                    return index <= maxStep ? _onClick(index) : null;
                } },
            _react2.default.createElement(
                Step,
                null,
                index + 1
            )
        );
    });
    return _react2.default.createElement(
        StepBarContainer,
        null,
        renderSteps
    );
}

var mapStateToProps = function mapStateToProps(state) {
    return {
        step: state.apply.step,
        maxStep: state.apply.maxStep
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClick: function onClick(step) {
            dispatch((0, _actions.setStep)(step));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(StepBar);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _RACES;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CLASSES = exports.CLASSES = {
    WARRIOR: 1,
    PALADIN: 2,
    HUNTER: 3,
    ROGUE: 4,
    PRIEST: 5,
    DEATH_KNIGHT: 6,
    SHAMAN: 7,
    MAGE: 8,
    WARLOCK: 9,
    MONK: 10,
    DRUID: 11,
    DEMON_HUNTER: 12
};

var COLORS = exports.COLORS = {
    1: '#C79C6E',
    2: '#F58CBA',
    3: '#ABD473',
    4: '#FFF569',
    5: '#FFFFFF',
    6: '#C41F3B',
    7: '#0070DE',
    8: '#69CCF0',
    9: '#9482C9',
    10: '#00FF96',
    11: '#FF7D0A',
    12: '#A330C9'
};

var RACES = exports.RACES = (_RACES = {
    HUMAN: 1,
    DWARF: 2,
    NIGHT_ELF: 4,
    TAUREN: 6,
    GNOME: 7,
    GOBLIN: 9,
    PANDAREN: 25
}, _defineProperty(_RACES, 'PANDAREN', 26), _defineProperty(_RACES, 'BLOOD_ELF', 10), _defineProperty(_RACES, 'DRAENEI', 11), _RACES);

var ROLES = exports.ROLES = {
    TANK: 'TANK',
    HEALER: 'HEALER',
    MELEE: 'MELEE',
    RANGED: 'RANGED'
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    text-align: center;\n    margin-top: 70px;\n'], ['\n    text-align: center;\n    margin-top: 70px;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Footer = _styledComponents2.default.div(_templateObject);

exports.default = Footer;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var account = function account() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    default:
      return state;
  }
};

exports.default = account;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SET_STEP = 'SET_STEP';
var SET_ROLE = 'SET_ROLE';
var SET_CHARACTER = 'SET_CHARACTER';
var SET_SPECIALIZATION = 'SET_SPECIALIZATION';
var SET_ALTERNATIVE_SPECIALIZATION = 'SET_ALTERNATIVE_SPECIALIZATION';

var apply = function apply() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case SET_STEP:
      return _extends({}, state, { step: action.step });
    case SET_ROLE:
      return _extends({}, state, { step: ++state.step, maxStep: 1, answers: _extends({}, state.anwsers, { role: action.role, character: null, specialization: null, alternative_specialization: null }) });
    case SET_CHARACTER:
      return _extends({}, state, { step: ++state.step, maxStep: 2, answers: _extends({}, state.answers, { character: action.character, specialization: null, alternative_specialization: null }) });
    case SET_SPECIALIZATION:
      return _extends({}, state, { step: ++state.step, maxStep: 3, answers: _extends({}, state.answers, { specialization: action.specialization, alternative_specialization: null }) });
    case SET_ALTERNATIVE_SPECIALIZATION:
      return _extends({}, state, { step: ++state.step, maxStep: 4, answers: _extends({}, state.answers, { alternative_specialization: action.alternative_specialization }) });
    default:
      return state;
  }
};

exports.default = apply;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var characters = function characters() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    default:
      return state;
  }
};

exports.default = characters;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  html {\n    -webkit-font-smoothing: subpixel-antialiased;\n  }\n\n  body {\n    background-color: ', ';\n    background-image: url(\'/img/pattern.png\');\n    background-size: 66px;\n  }\n\n  a {\n    color: ', ';\n  }\n  a:hover {\n    text-decoration: underline;\n  }\n  h2 {\n    line-height: 1.5;\n  }\n  .locked {\n    overflow: hidden;\n    position: relative;\n    height: 100%;\n  }\n'], ['\n  html {\n    -webkit-font-smoothing: subpixel-antialiased;\n  }\n\n  body {\n    background-color: ', ';\n    background-image: url(\'/img/pattern.png\');\n    background-size: 66px;\n  }\n\n  a {\n    color: ', ';\n  }\n  a:hover {\n    text-decoration: underline;\n  }\n  h2 {\n    line-height: 1.5;\n  }\n  .locked {\n    overflow: hidden;\n    position: relative;\n    height: 100%;\n  }\n']);

var _styledComponents = __webpack_require__(0);

var _colors = __webpack_require__(10);

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _styledComponents.injectGlobal)(_templateObject, _colors2.default.darkGrey, _colors2.default.green);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _colors = __webpack_require__(10);

var _colors2 = _interopRequireDefault(_colors);

var _fonts = __webpack_require__(40);

var _fonts2 = _interopRequireDefault(_fonts);

var _spacings = __webpack_require__(41);

var _spacings2 = _interopRequireDefault(_spacings);

var _breakpoints = __webpack_require__(39);

var _breakpoints2 = _interopRequireDefault(_breakpoints);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = exports.theme = _extends({}, _colors2.default, _fonts2.default, _spacings2.default, _breakpoints2.default);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var breakpoint = {
    bpTablet: '640px',
    bpUpToTablet: '639px',
    bpDesktop: '1024px',
    bpUpToDesktop: '1023px',
    bpUpToLarge: '1279px',
    bpLarge: '1280px',
    bpUpToXlarge: '1439',
    bpXlarge: '1440'
};

exports.default = breakpoint;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var font = {
    fontLight: 'OpenSans Light',
    fontRegular: 'OpenSans Regular',
    fontBold: 'Open Sans'
};

exports.default = font;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var spacing = {
    spacingXs: '30px',
    spacingSm: '40px',
    spacingMd: '60px',
    spacingLg: '80px',
    spacingXl: '100px',
    spacingXxl: '120px',
    siteWidth: '1400px'
};

exports.default = spacing;

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map