'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _fetch = require('./fetch');

var _fetch2 = _interopRequireDefault(_fetch);

var _nodes = require('./nodes');

var _lodash = require('lodash');

var _normalize = require('./normalize');

var _normalize2 = _interopRequireDefault(_normalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.sourceNodes = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2, _ref3) {
    var store = _ref2.store,
        boundActionCreators = _ref2.boundActionCreators,
        cache = _ref2.cache;
    var _ref3$apiURL = _ref3.apiURL,
        apiURL = _ref3$apiURL === undefined ? 'http://localhost:1337' : _ref3$apiURL,
        _ref3$contentTypes = _ref3.contentTypes,
        contentTypes = _ref3$contentTypes === undefined ? [] : _ref3$contentTypes,
        _ref3$loginData = _ref3.loginData,
        loginData = _ref3$loginData === undefined ? {} : _ref3$loginData;
    var createNode, touchNode, jwtToken, loginEndpoint, loginResponse, promises, entities;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            createNode = boundActionCreators.createNode, touchNode = boundActionCreators.touchNode;
            jwtToken = null;

            // Check if loginData is set.

            if (!(loginData.hasOwnProperty('identifier') && loginData.identifier.length !== 0 && loginData.hasOwnProperty('password') && loginData.password.length !== 0)) {
              _context.next = 17;
              break;
            }

            console.time('Authenticate Strapi user');
            console.log('Authenticate Strapi user');

            // Define API endpoint.
            loginEndpoint = apiURL + '/auth/local';

            // Make API request.

            _context.prev = 6;
            _context.next = 9;
            return _axios2.default.post(loginEndpoint, loginData);

          case 9:
            loginResponse = _context.sent;


            if (loginResponse.hasOwnProperty('data')) {
              jwtToken = loginResponse.data.jwt;
            }
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context['catch'](6);

            console.error('Strapi authentication error: ' + _context.t0);

          case 16:

            console.timeEnd('Authenticate Strapi user');

          case 17:

            // Generate a list of promises based on the `contentTypes` option.
            promises = contentTypes.map(function (contentType) {
              return (0, _fetch2.default)({
                apiURL: apiURL,
                contentType: contentType,
                jwtToken: jwtToken
              });
            });

            // Execute the promises.

            _context.next = 20;
            return _promise2.default.all(promises);

          case 20:
            entities = _context.sent;
            _context.next = 23;
            return _normalize2.default.downloadMediaFiles({
              entities: entities,
              apiURL: apiURL,
              store: store,
              cache: cache,
              createNode: createNode,
              touchNode: touchNode,
              jwtToken: jwtToken
            });

          case 23:
            entities = _context.sent;


            contentTypes.forEach(function (contentType, i) {
              var items = entities[i];
              items.forEach(function (item, i) {
                var node = (0, _nodes.Node)((0, _lodash.capitalize)(contentType), item);
                createNode(node);
              });
            });

          case 25:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[6, 13]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();