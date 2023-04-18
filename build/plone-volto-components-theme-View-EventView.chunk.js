exports.ids = ["plone-volto-components-theme-View-EventView"];
exports.modules = {

/***/ "./node_modules/@plone/volto/src/components/theme/View/EventView.jsx":
/*!***************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/theme/View/EventView.jsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plone_volto_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @plone/volto/helpers */ "./node_modules/@plone/volto/src/helpers/index.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plone_volto_components_theme_View_RenderBlocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plone/volto/components/theme/View/RenderBlocks */ "./node_modules/@plone/volto/src/components/theme/View/RenderBlocks.jsx");
/* harmony import */ var _plone_volto_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/components */ "./node_modules/@plone/volto/src/components/index.js");
var _jsxFileName = "/Users/dobriceanioandorian/Work/uclass/hidrosaltconsulting/hidrosalt-consulting/frontend/node_modules/@plone/volto/src/components/theme/View/EventView.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * EventView view component.
 * @module components/theme/View/EventView
 */







const EventTextfieldView = ({
  content
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }
}, content.title && __jsx("h1", {
  className: "documentFirstHeading",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 23
  }
}, content.title), content.description && __jsx("p", {
  className: "documentDescription",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }
}, content.description), content.image && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
  className: "document-image",
  src: content.image.scales.thumb.download,
  floated: "right",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 7
  }
}), content.text && __jsx("div", {
  dangerouslySetInnerHTML: {
    __html: Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_2__["flattenHTMLToAppURL"])(content.text.data)
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 7
  }
}));

/**
 * EventView view component class.
 * @function EventView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const EventView = props => {
  const {
    content
  } = props;
  return __jsx("div", {
    id: "page-document",
    className: "ui container view-wrapper event-view",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 7,
    className: "mobile hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_2__["hasBlocksData"])(content) ? __jsx(_plone_volto_components_theme_View_RenderBlocks__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  })) : __jsx(EventTextfieldView, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 5,
    className: "mobile hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_5__["EventDetails"], {
    content: content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: 12,
    only: "mobile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, Object(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_2__["hasBlocksData"])(content) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_plone_volto_components_theme_View_RenderBlocks__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, props, {
    content: _objectSpread(_objectSpread({}, content), {}, {
      blocks_layout: {
        items: props.content.blocks_layout.items.slice(0, 1)
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  })), __jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_5__["EventDetails"], {
    content: content,
    display_as: "div",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }), __jsx(_plone_volto_components_theme_View_RenderBlocks__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, props, {
    content: _objectSpread(_objectSpread({}, content), {}, {
      blocks_layout: {
        items: props.content.blocks_layout.items.slice(1)
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }))) : __jsx(EventTextfieldView, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  })))));
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
EventView.propTypes = {
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    }),
    attendees: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string).isRequired,
    contact_email: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    contact_name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    contact_phone: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    end: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    event_url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    open_end: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    recurrence: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
    start: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    subjects: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string).isRequired,
    whole_day: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (EventView);

/***/ })

};;
//# sourceMappingURL=plone-volto-components-theme-View-EventView.chunk.js.map