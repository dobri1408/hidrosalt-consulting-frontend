exports.ids = ["vendors~plone-volto-components-manage-Widgets-RecurrenceWidget-RecurrenceWidget"];
exports.modules = {

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByDayField.jsx":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByDayField.jsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/Utils.js");
/* harmony import */ var _plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plone/volto/helpers/Loadable/Loadable */ "./node_modules/@plone/volto/src/helpers/Loadable/Loadable.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/dobriceanioandorian/Work/uclass/hidrosaltconsulting/hidrosalt-consulting/frontend/node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByDayField.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/**
 * ByDayField component.
 * @module components/manage/Widgets/RecurrenceWidget/ByDayField
 */








/**
 * ByDayField component class.
 * @function ByDayField
 * @returns {string} Markup of the component.
 */
const ByDayField = ({
  label,
  value,
  onChange,
  moment: momentlib
}) => {
  const lang = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.intl.locale);
  const moment = momentlib.default;
  moment.locale(lang);
  const toggleWeekDay = dayName => {
    var day = _Utils__WEBPACK_IMPORTED_MODULE_3__["Days"][dayName];
    var byweekday = value ? [...value] : [];
    var i = byweekday.indexOf(day);
    if (i >= 0) {
      byweekday.splice(i, 1);
    } else {
      byweekday.push(day);
    }
    onChange('byweekday', byweekday);
  };
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
    inline: true,
    className: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
    stretched: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
    width: "4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "byday",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, label))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
    width: "8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
    basic: true,
    className: "byday-field",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, Object.keys(_Utils__WEBPACK_IMPORTED_MODULE_3__["Days"]).map(d => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    key: d,
    active: (value === null || value === void 0 ? void 0 : value.indexOf(_Utils__WEBPACK_IMPORTED_MODULE_3__["Days"][d])) >= 0,
    type: "button",
    content: moment.weekdaysShort(_Utils__WEBPACK_IMPORTED_MODULE_3__["Days"][d].weekday + 1),
    onClick: () => {
      toggleWeekDay(d);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  })))))));
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ByDayField.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
ByDayField.defaultProps = {
  label: null,
  value: null,
  onChange: null
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_4__["injectLazyLibs"])(['moment'])(ByDayField));

/***/ }),

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByMonthDayField.jsx":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByMonthDayField.jsx ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/dobriceanioandorian/Work/uclass/hidrosaltconsulting/hidrosalt-consulting/frontend/node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByMonthDayField.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/**
 * ByMonthDayField component.
 * @module components/manage/Widgets/RecurrenceWidget/ByMonthDayField
 */





const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["defineMessages"])({
  bymonthDay: {
    "id": "Month day",
    "defaultMessage": "Day"
  },
  ofTheMonth: {
    "id": "of the month",
    "defaultMessage": "of the month"
  }
});
/**
 * ByMonthDayField component class.
 * @function ByMonthDayField
 * @returns {string} Markup of the component.
 */
const ByMonthDayField = ({
  value,
  disabled,
  onChange,
  hideAfterLabel,
  intl
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    inline: true,
    disabled: disabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, intl.formatMessage(messages.bymonthDay)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    inline: true,
    disabled: disabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "number",
    id: "bymonthday",
    name: "bymonthday",
    value: value || '',
    onChange: ({
      target
    }) => {
      onChange(target.id, target.value === '' ? undefined : [parseInt(target.value)]);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  })), !hideAfterLabel && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    inline: true,
    disabled: disabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, intl.formatMessage(messages.ofTheMonth)));
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ByMonthDayField.propTypes = {
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  hideAfterLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
ByMonthDayField.defaultProps = {
  disabled: false,
  value: null,
  onChange: null,
  hideAfterLabel: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(ByMonthDayField));

/***/ }),

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByMonthField.jsx":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByMonthField.jsx ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ByMonthDayField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ByMonthDayField */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByMonthDayField.jsx");
/* harmony import */ var _WeekdayOfTheMonthIndexField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WeekdayOfTheMonthIndexField */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/WeekdayOfTheMonthIndexField.jsx");
/* harmony import */ var _WeekdayOfTheMonthField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WeekdayOfTheMonthField */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/WeekdayOfTheMonthField.jsx");
var _jsxFileName = "/Users/dobriceanioandorian/Work/uclass/hidrosaltconsulting/hidrosalt-consulting/frontend/node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByMonthField.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/**
 * ByMonthField component.
 * @module components/manage/Widgets/RecurrenceWidget/ByMonthField
 */









/**
 * ByMonthField component class.
 * @function ByMonthField
 * @returns {string} Markup of the component.
 */
const ByMonthField = ({
  label,
  value,
  bymonthday,
  weekdayOfTheMonthIndex,
  weekdayOfTheMonth,
  onChange,
  intl
}) => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    inline: true,
    className: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
    stretched: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: "4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "monthly",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, label))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: "8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    inline: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
    label: "",
    name: "monthly",
    id: "monthly-bymonthday",
    value: "bymonthday",
    checked: value === 'bymonthday',
    onChange: (e, {
      value
    }) => onChange('monthly', value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  })), __jsx(_ByMonthDayField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: bymonthday,
    disabled: value !== 'bymonthday',
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    inline: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
    label: "",
    name: "monthly",
    id: "monthly-byweekday",
    value: "byweekday",
    checked: value === 'byweekday',
    onChange: (e, {
      value
    }) => onChange('monthly', value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  })), __jsx(_WeekdayOfTheMonthIndexField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    disabled: value !== 'byweekday',
    value: weekdayOfTheMonthIndex,
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }), __jsx(_WeekdayOfTheMonthField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    disabled: value !== 'byweekday',
    value: weekdayOfTheMonth,
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }))))));
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ByMonthField.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  bymonthday: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  weekdayOfTheMonthIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  weekdayOfTheMonth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
ByMonthField.defaultProps = {
  label: null,
  value: null,
  bymonthday: null,
  weekdayOfTheMonthIndex: null,
  weekdayOfTheMonth: null,
  onChange: null
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(ByMonthField));

/***/ }),

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByYearField.jsx":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByYearField.jsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ByMonthDayField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ByMonthDayField */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByMonthDayField.jsx");
/* harmony import */ var _MonthOfTheYearField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MonthOfTheYearField */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/MonthOfTheYearField.jsx");
/* harmony import */ var _WeekdayOfTheMonthIndexField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WeekdayOfTheMonthIndexField */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/WeekdayOfTheMonthIndexField.jsx");
/* harmony import */ var _WeekdayOfTheMonthField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WeekdayOfTheMonthField */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/WeekdayOfTheMonthField.jsx");
var _jsxFileName = "/Users/dobriceanioandorian/Work/uclass/hidrosaltconsulting/hidrosalt-consulting/frontend/node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByYearField.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/**
 * ByYearField component.
 * @module components/manage/Widgets/RecurrenceWidget/ByYearField
 */









const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["defineMessages"])({
  ofTheMonth: {
    "id": "of the month",
    "defaultMessage": "of the month"
  }
});
/**
 * ByYearField component class.
 * @function ByYearField
 * @returns {string} Markup of the component.
 */
const ByYearField = ({
  label,
  value,
  bymonthday,
  monthOfTheYear,
  weekdayOfTheMonthIndex,
  weekdayOfTheMonth,
  onChange,
  intl
}) => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    inline: true,
    className: "text byyear-field",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
    stretched: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: "4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "yearly",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, label))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: "8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    inline: true,
    className: "byyear-bymonthday",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
    label: "",
    name: "yearly",
    value: "bymonthday",
    id: "yearly-bymonthday",
    checked: value === 'bymonthday',
    onChange: (e, {
      value
    }) => onChange('yearly', value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  })), __jsx(_ByMonthDayField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: bymonthday,
    disabled: value !== 'bymonthday',
    onChange: onChange,
    hideAfterLabel: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }), __jsx(_MonthOfTheYearField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: monthOfTheYear,
    disabled: value !== 'bymonthday',
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    inline: true,
    className: "byyear-byday",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
    label: "",
    name: "yearly",
    id: "yearly-byday",
    value: "byday",
    checked: value === 'byday',
    onChange: (e, {
      value
    }) => onChange('yearly', value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  })), __jsx(_WeekdayOfTheMonthIndexField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    disabled: value !== 'byday',
    value: weekdayOfTheMonthIndex,
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }), __jsx(_WeekdayOfTheMonthField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    disabled: value !== 'byday',
    value: weekdayOfTheMonth,
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    disabled: value !== 'byday',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, intl.formatMessage(messages.ofTheMonth)), __jsx(_MonthOfTheYearField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: monthOfTheYear,
    disabled: value !== 'byday',
    onChange: onChange,
    inline: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }))))));
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ByYearField.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  bymonthday: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  monthOfTheYear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  weekdayOfTheMonthIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  weekdayOfTheMonth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
ByYearField.defaultProps = {
  label: null,
  value: null,
  bymonthday: null,
  monthOfTheYear: null,
  weekdayOfTheMonthIndex: null,
  weekdayOfTheMonth: null,
  onChange: null
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(ByYearField));

/***/ }),

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/EndField.jsx":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/EndField.jsx ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DatetimeWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DatetimeWidget */ "./node_modules/@plone/volto/src/components/manage/Widgets/DatetimeWidget.jsx");
var _jsxFileName = "/Users/dobriceanioandorian/Work/uclass/hidrosaltconsulting/hidrosalt-consulting/frontend/node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/EndField.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/**
 * EndField component.
 * @module components/manage/Widgets/RecurrenceWidget/EndField
 */






const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["defineMessages"])({
  recurrenceEnds: {
    "id": "Recurrence ends",
    "defaultMessage": "Ends"
  },
  recurrenceEndsCount: {
    "id": "Recurrence ends after",
    "defaultMessage": "after"
  },
  recurrenceEndsUntil: {
    "id": "Recurrence ends on",
    "defaultMessage": "on"
  },
  occurrences: {
    "id": "Occurences",
    "defaultMessage": "occurrence(s)"
  }
});
/**
 * EndField component class.
 * @function EndField
 * @returns {string} Markup of the component.
 */
const EndField = ({
  value,
  count,
  until,
  onChange,
  intl
}) => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    inline: true,
    className: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Row, {
    stretched: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: "4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "recurrenceEnds",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, intl.formatMessage(messages.recurrenceEnds)))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    width: "8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    inline: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
    label: "",
    name: "recurrenceEnds",
    id: "recurrenceEndsCount",
    value: "count",
    checked: value === 'count',
    onChange: (e, {
      value
    }) => onChange('recurrenceEnds', value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    disabled: value !== 'count',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, intl.formatMessage(messages.recurrenceEndsCount)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    disabled: value !== 'count',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    id: "count",
    name: "count",
    value: count || '',
    onChange: ({
      target
    }) => {
      onChange(target.id, target.value === '' ? undefined : target.value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    disabled: value !== 'count',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, intl.formatMessage(messages.occurrences))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    inline: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
    id: "recurrenceEndsUntil",
    label: "",
    name: "recurrenceEnds",
    value: "until",
    checked: value === 'until',
    onChange: (e, {
      value
    }) => onChange('recurrenceEnds', value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    disabled: value !== 'until',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, __jsx(_DatetimeWidget__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "until",
    title: intl.formatMessage(messages.recurrenceEndsUntil),
    dateOnly: true,
    value: until || '',
    resettable: false,
    onChange: (id, value) => {
      onChange(id, value === '' ? undefined : value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  })))))));
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
EndField.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  until: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
EndField.defaultProps = {
  value: null,
  count: null,
  until: null,
  onChange: null
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(EndField));

/***/ }),

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/IntervalField.jsx":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/IntervalField.jsx ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/dobriceanioandorian/Work/uclass/hidrosaltconsulting/hidrosalt-consulting/frontend/node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/IntervalField.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/**
 * IntervalField component.
 * @module components/manage/Widgets/RecurrenceWidget/IntervalField
 */





/**
 * IntervalField component class.
 * @function IntervalField
 * @returns {string} Markup of the component.
 */
const IntervalField = ({
  label,
  labelAfter,
  value,
  onChange
}) => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
    inline: true,
    className: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
    stretched: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
    width: "4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "interval",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, label))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
    width: "8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
    inline: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    id: "interval",
    name: "interval",
    value: value || '',
    onChange: ({
      target
    }) => {
      onChange(target.id, target.value === '' ? undefined : parseInt(target.value));
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }), labelAfter && __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 30
    }
  }, labelAfter))))));
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
IntervalField.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  labelAfter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
IntervalField.defaultProps = {
  label: null,
  labelAfter: null,
  onChange: null
};
/* harmony default export */ __webpack_exports__["default"] = (IntervalField);

/***/ }),

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/MonthOfTheYearField.jsx":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/MonthOfTheYearField.jsx ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SelectInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectInput */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/SelectInput.jsx");
/* harmony import */ var _plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/helpers/Loadable/Loadable */ "./node_modules/@plone/volto/src/helpers/Loadable/Loadable.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/dobriceanioandorian/Work/uclass/hidrosaltconsulting/hidrosalt-consulting/frontend/node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/MonthOfTheYearField.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
/**
 * MonthOfTheYearField component.
 * @module components/manage/Widgets/RecurrenceWidget/MonthOfTheYearField
 */








/**
 * MonthOfTheYearField component class.
 * @function MonthOfTheYearField
 * @returns {string} Markup of the component.
 */
const MonthOfTheYearField = ({
  value,
  disabled,
  inline,
  onChange,
  moment: momentlib
}) => {
  const moment = momentlib.default;
  const lang = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.intl.locale);
  moment.locale(lang);
  const monthList = [...lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(moment.months(), (m, i) => ({
    value: i + 1,
    label: m
  }))];
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    inline: inline,
    disabled: disabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(_SelectInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "monthOfTheYear",
    disabled: disabled,
    options: monthList,
    value: value,
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }));
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
MonthOfTheYearField.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  inline: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
MonthOfTheYearField.defaultProps = {
  value: null,
  disabled: false,
  inline: false,
  onChange: null
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_5__["injectLazyLibs"])(['moment'])(MonthOfTheYearField));

/***/ }),

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/Occurences.jsx":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/Occurences.jsx ***!
  \*************************************************************************************************/
/*! exports provided: Occurences, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Occurences", function() { return Occurences; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plone_volto_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/components */ "./node_modules/@plone/volto/src/components/index.js");
/* harmony import */ var _plone_volto_icons_circle_plus_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @plone/volto/icons/circle-plus.svg */ "./node_modules/@plone/volto/src/icons/circle-plus.svg");
/* harmony import */ var _plone_volto_icons_circle_plus_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_circle_plus_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @plone/volto/icons/delete.svg */ "./node_modules/@plone/volto/src/icons/delete.svg");
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @plone/volto/helpers/Loadable/Loadable */ "./node_modules/@plone/volto/src/helpers/Loadable/Loadable.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Utils */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/Utils.js");
var _jsxFileName = "/Users/dobriceanioandorian/Work/uclass/hidrosaltconsulting/hidrosalt-consulting/frontend/node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/Occurences.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/**
 * Occurences component.
 * @module components/manage/Widgets/RecurrenceWidget/Occurences
 */












const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["defineMessages"])({
  selected_dates: {
    "id": "Selected dates",
    "defaultMessage": "Selected dates"
  },
  start_of_recurrence: {
    "id": "Start of the recurrence",
    "defaultMessage": "Start of the recurrence"
  },
  additional_date: {
    "id": "Additional date",
    "defaultMessage": "Additional date"
  },
  other_items: {
    "id": "others",
    "defaultMessage": "others"
  },
  no_occurences: {
    "id": "No occurences set",
    "defaultMessage": "No occurences set"
  },
  exclude: {
    "id": "Exclude this occurence",
    "defaultMessage": "Exclude this occurence"
  },
  include: {
    "id": "Include this occurence",
    "defaultMessage": "Include this occurrence"
  }
});
const formatDate = (d, moment) => {
  const m = moment(d);
  return m.format('dddd') + ', ' + m.format('LL');
};

/**
 * Occurences component class.
 * @function Occurences
 * @returns {string} Markup of the component.
 */
const Occurences_ = ({
  rruleSet,
  exclude,
  undoExclude,
  intl,
  showTitle,
  editOccurences,
  moment: momentlib
}) => {
  const moment = momentlib.default;
  const lang = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(state => state.intl.locale);
  moment.locale(lang);
  let all = [];
  const isExcluded = date => {
    var dateISO = Object(_Utils__WEBPACK_IMPORTED_MODULE_10__["toISOString"])(date);
    var excluded = false;
    rruleSet.exdates().forEach(ex => {
      var exISO = Object(_Utils__WEBPACK_IMPORTED_MODULE_10__["toISOString"])(ex);
      if (exISO === dateISO) {
        excluded = true;
      }
    });
    return excluded;
  };
  const isAdditional = date => {
    var dateISO = Object(_Utils__WEBPACK_IMPORTED_MODULE_10__["toISOString"])(date);
    var additional = false;
    rruleSet.rdates().forEach(d => {
      var dd = Object(_Utils__WEBPACK_IMPORTED_MODULE_10__["toISOString"])(d);
      if (dd === dateISO) {
        additional = true;
      }
    });
    return additional;
  };
  if (rruleSet) {
    all = rruleSet.all();
    rruleSet.exdates().forEach(date => {
      if (all.indexOf(date) < 0) {
        all.push(date);
      }
    });
    all.sort((a, b) => {
      return a > b ? 1 : -1;
    });
  }
  const others = all.splice(100);
  return __jsx("div", {
    className: "occurences",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 5
    }
  }, all.length === 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, intl.formatMessage(messages.no_occurences)), showTitle && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    as: "h2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, intl.formatMessage(messages.selected_dates)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["List"], {
    divided: true,
    verticalAlign: "middle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, all.map((date, index) => {
    const excluded = isExcluded(date);
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["List"].Item, {
      key: date.toString(),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }
    }, editOccurences && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["List"].Content, {
      floated: "right",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }
    }, index > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !excluded && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      basic: true,
      icon: true,
      className: "exclude-button",
      onClick: () => {
        exclude(date);
      },
      "aria-label": intl.formatMessage(messages.exclude),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 25
      }
    }, __jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
      name: _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
      size: "18px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 27
      }
    })), excluded && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      basic: true,
      icon: true,
      className: "include-button",
      onClick: () => {
        undoExclude(date);
      },
      "aria-label": intl.formatMessage(messages.include),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 25
      }
    }, __jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
      name: _plone_volto_icons_circle_plus_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
      size: "24px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 27
      }
    }))) : intl.formatMessage(messages.start_of_recurrence)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["List"].Content, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        excluded: excluded
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 15
      }
    }, formatDate(date, moment), isAdditional(date) && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Label"], {
      pointing: "left",
      size: "small",
      color: excluded ? 'grey' : 'green',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 19
      }
    }, intl.formatMessage(messages.additional_date))));
  }), others.length > 0 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["List"].Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["List"].Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  }, `... ${intl.formatMessage(messages.other_items)} ${others.length}`))));
};
const Occurences = Object(_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_8__["injectLazyLibs"])(['moment'])(Occurences_);

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Occurences.propTypes = {
  rruleSet: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  showTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  editOccurences: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
Occurences.defaultProps = {
  rruleSet: null,
  showTitle: true,
  editOccurences: true
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(Occurences));

/***/ }),

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/RecurrenceWidget.jsx":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/RecurrenceWidget.jsx ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_remove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/remove */ "lodash/remove");
/* harmony import */ var lodash_remove__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_remove__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/concat */ "lodash/concat");
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/find */ "lodash/find");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/isEqual */ "lodash/isEqual");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _plone_volto_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @plone/volto/components */ "./node_modules/@plone/volto/src/components/index.js");
/* harmony import */ var _plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @plone/volto/helpers/Loadable/Loadable */ "./node_modules/@plone/volto/src/helpers/Loadable/Loadable.js");
/* harmony import */ var _plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @plone/volto/icons/save.svg */ "./node_modules/@plone/volto/src/icons/save.svg");
/* harmony import */ var _plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _plone_volto_icons_editing_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @plone/volto/icons/editing.svg */ "./node_modules/@plone/volto/src/icons/editing.svg");
/* harmony import */ var _plone_volto_icons_editing_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_editing_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @plone/volto/icons/delete.svg */ "./node_modules/@plone/volto/src/icons/delete.svg");
/* harmony import */ var _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Utils */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/Utils.js");
/* harmony import */ var _IntervalField__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./IntervalField */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/IntervalField.jsx");
/* harmony import */ var _ByDayField__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ByDayField */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByDayField.jsx");
/* harmony import */ var _EndField__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./EndField */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/EndField.jsx");
/* harmony import */ var _ByMonthField__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ByMonthField */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByMonthField.jsx");
/* harmony import */ var _ByYearField__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ByYearField */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/ByYearField.jsx");
/* harmony import */ var _Occurences__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Occurences */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/Occurences.jsx");





var _jsxFileName = "/Users/dobriceanioandorian/Work/uclass/hidrosaltconsulting/hidrosalt-consulting/frontend/node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/RecurrenceWidget.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * RecurrenceWidget component.
 * @module components/manage/Widgets/RecurrenceWidget
 */




//import { RRule, RRuleSet, rrulestr } from 'rrule';
















const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_10__["defineMessages"])({
  editRecurrence: {
    "id": "Edit recurrence",
    "defaultMessage": "Edit recurrence"
  },
  save: {
    "id": "Save recurrence",
    "defaultMessage": "Save"
  },
  remove: {
    "id": "Remove recurrence",
    "defaultMessage": "Remove"
  },
  repeat: {
    "id": "Repeat",
    "defaultMessage": "Repeat"
  },
  daily: {
    "id": "Daily",
    "defaultMessage": "Daily"
  },
  mondayfriday: {
    "id": "Monday and Friday",
    "defaultMessage": "Monday and Friday"
  },
  weekdays: {
    "id": "Weekday",
    "defaultMessage": "Weekday"
  },
  weekly: {
    "id": "Weekly",
    "defaultMessage": "Weekly"
  },
  monthly: {
    "id": "Monthly",
    "defaultMessage": "Monthly"
  },
  yearly: {
    "id": "Yearly",
    "defaultMessage": "Yearly"
  },
  repeatEvery: {
    "id": "Repeat every",
    "defaultMessage": "Repeat every"
  },
  repeatOn: {
    "id": "Repeat on",
    "defaultMessage": "Repeat on"
  },
  interval_daily: {
    "id": "Interval Daily",
    "defaultMessage": "days"
  },
  interval_weekly: {
    "id": "Interval Weekly",
    "defaultMessage": "week(s)"
  },
  interval_monthly: {
    "id": "Interval Monthly",
    "defaultMessage": "Month(s)"
  },
  interval_yearly: {
    "id": "Interval Yearly",
    "defaultMessage": "year(s)"
  },
  add_date: {
    "id": "Add date",
    "defaultMessage": "Add date"
  },
  select_date_to_add_to_recurrence: {
    "id": "Select a date to add to recurrence",
    "defaultMessage": "Select a date to add to recurrence"
  }
});
const NoRRuleOptions = ['recurrenceEnds', 'monthly', 'weekdayOfTheMonthIndex', 'weekdayOfTheMonth', 'yearly', 'monthOfTheYear', 'byhour', 'byminute', 'bysecond', 'bynmonthday', 'exdates', 'rdates'];
/**
 * RecurrenceWidget component class.
 * @function RecurrenceWidget
 * @returns {string} Markup of the component.
 */
class RecurrenceWidget extends react__WEBPACK_IMPORTED_MODULE_5__["Component"] {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */

  /**
   * Default properties.
   * @property {Object} defaultProps Default properties.
   * @static
   */

  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs Actions
   */
  constructor(props, intl) {
    super(props);
    _defineProperty(this, "editRecurrence", () => {
      this.setRecurrenceStartEnd();
    });
    _defineProperty(this, "setRecurrenceStartEnd", () => {
      var _this$props$formData;
      const start = (_this$props$formData = this.props.formData) === null || _this$props$formData === void 0 ? void 0 : _this$props$formData.start;
      let _start = this.getUTCDate(start).startOf('day').toDate();
      this.setState(prevState => {
        let rruleSet = prevState.rruleSet;
        const formValues = this.getFormValues(rruleSet); //to set default values, included end

        rruleSet = this.updateRruleSet(rruleSet, formValues, 'dtstart', _start);
        return _objectSpread(_objectSpread({}, prevState), {}, {
          rruleSet,
          formValues
        });
      });
    });
    _defineProperty(this, "getUTCDate", date => {
      return date.match(/T(.)*(-|\+|Z)/g) ? this.moment(date).utc() : this.moment(`${date}Z`).utc();
    });
    _defineProperty(this, "show", dimmer => () => {
      this.setState({
        dimmer,
        open: true
      });
      this.editRecurrence();
    });
    _defineProperty(this, "close", () => this.setState({
      open: false
    }));
    _defineProperty(this, "getFreq", (number, weekdays) => {
      let freq = _Utils__WEBPACK_IMPORTED_MODULE_17__["FREQUENCES"].DAILY;
      Object.entries(_Utils__WEBPACK_IMPORTED_MODULE_17__["OPTIONS"].frequences).forEach(([f, o]) => {
        if (o.rrule === number) {
          freq = f;
        }
      });
      if (freq === _Utils__WEBPACK_IMPORTED_MODULE_17__["FREQUENCES"].WEEKLY && weekdays) {
        if (lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()(weekdays.sort(), _Utils__WEBPACK_IMPORTED_MODULE_17__["WEEKLY_DAYS"].map(w => w.weekday).sort())) {
          freq = _Utils__WEBPACK_IMPORTED_MODULE_17__["FREQUENCES"].WEEKDAYS;
        }
      }
      return freq;
    });
    _defineProperty(this, "getWeekday", number => {
      var day = null;
      const n = number === -1 ? 6 : number; //because sunday for moment has index 0, but for rrule has index 6
      Object.keys(_Utils__WEBPACK_IMPORTED_MODULE_17__["Days"]).forEach(d => {
        if (_Utils__WEBPACK_IMPORTED_MODULE_17__["Days"][d].weekday === n) {
          day = _Utils__WEBPACK_IMPORTED_MODULE_17__["Days"][d];
        }
      });
      return day;
    });
    _defineProperty(this, "getFormValues", rruleSet => {
      var _this$props$formData2;
      //default
      let formValues = {
        freq: _Utils__WEBPACK_IMPORTED_MODULE_17__["FREQUENCES"].DAILY,
        interval: 1
      };
      formValues = this.changeField(formValues, 'recurrenceEnds', (_this$props$formData2 = this.props.formData) !== null && _this$props$formData2 !== void 0 && _this$props$formData2.end ? 'until' : 'count');
      const rrule = rruleSet.rrules()[0];
      if (rrule) {
        var freq = this.getFreq(rrule.options.freq, rrule.options.byweekday);

        //init with rruleOptions
        Object.entries(rrule.options).forEach(([option, value]) => {
          switch (option) {
            case 'freq':
              formValues[option] = freq;
              break;
            case 'count':
              if (value != null) {
                formValues['recurrenceEnds'] = option;
                formValues[option] = value;
              }
              break;
            case 'until':
              if (value != null) {
                formValues['recurrenceEnds'] = option;
                formValues[option] = Object(_Utils__WEBPACK_IMPORTED_MODULE_17__["toISOString"])(value);
              }
              break;
            case 'byweekday':
              if (value && value.length > 0) {
                if (lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()(value, _Utils__WEBPACK_IMPORTED_MODULE_17__["WEEKLY_DAYS"])) {
                  formValues['freq'] = _Utils__WEBPACK_IMPORTED_MODULE_17__["FREQUENCES"].WEEKDAYS;
                }
                if (lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()(value, _Utils__WEBPACK_IMPORTED_MODULE_17__["MONDAYFRIDAY_DAYS"])) {
                  formValues['freq'] = _Utils__WEBPACK_IMPORTED_MODULE_17__["FREQUENCES"].MONDAYFRIDAY;
                }
              }
              formValues[option] = value ? value.map(d => {
                return this.getWeekday(d);
              }) : [];
              break;
            case 'bymonthday':
              if (value && value.length > 0) {
                if (freq === _Utils__WEBPACK_IMPORTED_MODULE_17__["FREQUENCES"].MONTHLY) {
                  formValues['monthly'] = option;
                }
                if (freq === _Utils__WEBPACK_IMPORTED_MODULE_17__["FREQUENCES"].YEARLY) {
                  formValues['yearly'] = option;
                }
              } else {
                if (freq === _Utils__WEBPACK_IMPORTED_MODULE_17__["FREQUENCES"].MONTHLY) {
                  formValues['monthly'] = null;
                }
                if (freq === _Utils__WEBPACK_IMPORTED_MODULE_17__["FREQUENCES"].YEARLY) {
                  formValues['yearly'] = null;
                }
              }
              formValues[option] = value;
              break;
            case 'bynweekday':
              if (value && value.length > 0) {
                //[weekDayNumber,orinal_number] -> translated is for example: [sunday, third] -> the third sunday of the month

                if (freq === _Utils__WEBPACK_IMPORTED_MODULE_17__["FREQUENCES"].SMONTHLY) {
                  formValues['monthly'] = 'byweekday';
                }
                if (freq === _Utils__WEBPACK_IMPORTED_MODULE_17__["FREQUENCES"].YEARLY) {
                  formValues['yearly'] = 'byday';
                }
                formValues['weekdayOfTheMonth'] = value[0][0];
                formValues['weekdayOfTheMonthIndex'] = value[0][1];
              }
              break;
            case 'bymonth':
              if (freq === _Utils__WEBPACK_IMPORTED_MODULE_17__["FREQUENCES"].YEARLY) {
                formValues['yearly'] = 'byday';
              }
              formValues['monthOfTheYear'] = value ? value[0] : null;
              break;
            default:
              formValues[option] = value;
          }
        });
      }
      return formValues;
    });
    _defineProperty(this, "formValuesToRRuleOptions", formValues => {
      var values = Object.assign({}, formValues);

      //remove NoRRuleOptions
      NoRRuleOptions.forEach(opt => {
        delete values[opt];
      });

      //transform values for rrule
      Object.keys(values).forEach(field => {
        var value = values[field];
        switch (field) {
          case 'freq':
            if (value) {
              value = _Utils__WEBPACK_IMPORTED_MODULE_17__["OPTIONS"].frequences[value].rrule;
            }
            break;
          case 'until':
            value = value ? this.moment(new Date(value)).utc().toDate() : null;
            break;
          default:
            break;
        }
        if (value) {
          //set value
          values[field] = value;
        } else {
          //remove empty values
          delete values[field];
        }
      });
      return values;
    });
    _defineProperty(this, "updateRruleSet", (rruleSet, formValues, field, value) => {
      var rruleOptions = this.formValuesToRRuleOptions(formValues);
      var dstart = field === 'dtstart' ? value : rruleSet.dtstart() ? rruleSet.dtstart() : this.moment().utc().toDate();
      var exdates = field === 'exdates' ? value : Object.assign([], rruleSet.exdates());
      var rdates = field === 'rdates' ? value : Object.assign([], rruleSet.rdates());
      rruleOptions.dtstart = dstart;
      const {
        RRule,
        RRuleSet
      } = this.props.rrule;
      let set = new RRuleSet();
      //set.dtstart(dstart);
      set.rrule(new RRule(rruleOptions));
      exdates.map(ex => set.exdate(ex));
      rdates.map(r => set.rdate(r));
      return set;
    });
    _defineProperty(this, "getDefaultUntil", freq => {
      var _this$props$formData3;
      const moment = this.moment;
      var end = (_this$props$formData3 = this.props.formData) !== null && _this$props$formData3 !== void 0 && _this$props$formData3.end ? Object(_Utils__WEBPACK_IMPORTED_MODULE_17__["toISOString"])(this.getUTCDate(this.props.formData.end).toDate()) : null;
      var tomorrow = Object(_Utils__WEBPACK_IMPORTED_MODULE_17__["toISOString"])(moment().add(1, 'days').utc().toDate());
      var nextWeek = Object(_Utils__WEBPACK_IMPORTED_MODULE_17__["toISOString"])(moment().add(7, 'days').utc().toDate());
      var nextMonth = Object(_Utils__WEBPACK_IMPORTED_MODULE_17__["toISOString"])(moment().add(1, 'months').utc().toDate());
      var nextYear = Object(_Utils__WEBPACK_IMPORTED_MODULE_17__["toISOString"])(moment().add(1, 'years').utc().toDate());
      var until = end;
      switch (freq) {
        case _Utils__WEBPACK_IMPORTED_MODULE_17__["FREQUENCES"].DAILY:
          until = end ? end : tomorrow;
          break;
        case _Utils__WEBPACK_IMPORTED_MODULE_17__["FREQUENCES"].WEEKLY:
          until = end ? end : nextWeek;
          break;
        case _Utils__WEBPACK_IMPORTED_MODULE_17__["FREQUENCES"].WEEKDAYS:
          until = end ? end : nextWeek;
          break;
        case _Utils__WEBPACK_IMPORTED_MODULE_17__["FREQUENCES"].MONDAYFRIDAY:
          until = end ? end : nextWeek;
          break;
        case _Utils__WEBPACK_IMPORTED_MODULE_17__["FREQUENCES"].MONTHLY:
          until = end ? end : nextMonth;
          break;
        case _Utils__WEBPACK_IMPORTED_MODULE_17__["FREQUENCES"].YEARLY:
          until = end ? end : nextYear;
          break;
        default:
          break;
      }
      return until;
    });
    _defineProperty(this, "changeField", (formValues, field, value) => {
      var _this$state, _this$state$rruleSet, _this$props$formData4, _this$props$formData5, _this$props$formData6;
      //  git p.log('field', field, 'value', value);
      //get weekday from state.
      const moment = this.moment;
      const byweekday = ((_this$state = this.state) === null || _this$state === void 0 ? void 0 : (_this$state$rruleSet = _this$state.rruleSet) === null || _this$state$rruleSet === void 0 ? void 0 : _this$state$rruleSet.rrules().length) > 0 ? this.state.rruleSet.rrules()[0].origOptions.byweekday : null;
      const currWeekday = this.getWeekday(moment().day() - 1);
      const currMonth = moment().month() + 1;
      const startMonth = (_this$props$formData4 = this.props.formData) !== null && _this$props$formData4 !== void 0 && _this$props$formData4.start ? moment(this.props.formData.start).month() + 1 : currMonth;
      const startWeekday = (_this$props$formData5 = this.props.formData) !== null && _this$props$formData5 !== void 0 && _this$props$formData5.start ? this.getWeekday(moment(this.props.formData.start).day() - 1) : currWeekday;
      formValues[field] = value;
      const defaultMonthDay = (_this$props$formData6 = this.props.formData) !== null && _this$props$formData6 !== void 0 && _this$props$formData6.start ? moment(this.props.formData.start).date() : moment().date();
      switch (field) {
        case 'freq':
          formValues.interval = 1;
          const fconfig = _Utils__WEBPACK_IMPORTED_MODULE_17__["OPTIONS"].frequences[value];

          //clear values
          if (!fconfig.interval) {
            formValues.interval = null;
          }
          formValues = this.changeField(formValues, 'byweekday', null);
          formValues = this.changeField(formValues, 'yearly', null);
          formValues = this.changeField(formValues, 'bymonthday', null);
          formValues = this.changeField(formValues, 'byweekday', null);
          formValues = this.changeField(formValues, 'monthOfTheYear', null);
          if (!formValues.until) {
            formValues.until = this.getDefaultUntil(value);
          }

          //set defaults
          switch (value) {
            case _Utils__WEBPACK_IMPORTED_MODULE_17__["FREQUENCES"].DAILY:
              break;
            case _Utils__WEBPACK_IMPORTED_MODULE_17__["FREQUENCES"].WEEKDAYS:
              formValues = this.changeField(formValues, 'byweekday', _Utils__WEBPACK_IMPORTED_MODULE_17__["WEEKLY_DAYS"]);
              break;
            case _Utils__WEBPACK_IMPORTED_MODULE_17__["FREQUENCES"].MONDAYFRIDAY:
              formValues = this.changeField(formValues, 'byweekday', _Utils__WEBPACK_IMPORTED_MODULE_17__["MONDAYFRIDAY_DAYS"]);
              break;
            case _Utils__WEBPACK_IMPORTED_MODULE_17__["FREQUENCES"].WEEKLY:
              formValues = this.changeField(formValues, 'byweekday', [startWeekday]);
              break;
            case _Utils__WEBPACK_IMPORTED_MODULE_17__["FREQUENCES"].MONTHLY:
              formValues = this.changeField(formValues, 'monthly', 'bymonthday');
              break;
            case _Utils__WEBPACK_IMPORTED_MODULE_17__["FREQUENCES"].YEARLY:
              formValues = this.changeField(formValues, 'yearly', 'bymonthday');
              break;
            default:
              break;
          }
          break;
        case 'recurrenceEnds':
          if (value === 'count') {
            formValues.count = 1;
            formValues.until = null;
          }
          if (value === 'until') {
            formValues.until = this.getDefaultUntil(formValues.freq);
            formValues.count = null; //default value
          }

          break;
        case 'byweekday':
          formValues.byweekday = value;
          if (_Utils__WEBPACK_IMPORTED_MODULE_17__["FREQUENCES"].WEEKLY !== formValues.freq) {
            formValues.weekdayOfTheMonth = value ? value[0].weekday : null;
            formValues.weekdayOfTheMonthIndex = value ? value[0].n : null;
          } else {
            delete formValues.weekdayOfTheMonth;
            delete formValues.weekdayOfTheMonthIndex;
          }
          break;
        case 'weekdayOfTheMonth':
          var weekday = this.getWeekday(value); // get new day
          var n = byweekday ? byweekday[0].n : 1;
          //set nth value
          formValues.byweekday = weekday ? [weekday.nth(n)] : null;
          break;
        case 'weekdayOfTheMonthIndex':
          var week_day = byweekday ? byweekday[0] : currWeekday; //get day from state. If not set get current day
          //set nth value
          formValues.byweekday = value ? [week_day.nth(value)] : null;
          break;
        case 'monthOfTheYear':
          if (value === null || value === undefined) {
            delete formValues.bymonth;
          } else {
            formValues.bymonth = [value];
          }
          break;
        case 'monthly':
          if (value === 'bymonthday') {
            formValues.bymonthday = [defaultMonthDay]; //default value
            formValues = this.changeField(formValues, 'byweekday', null); //default value
          }

          if (value === 'byweekday') {
            formValues.bymonthday = null; //default value
            formValues = this.changeField(formValues, 'byweekday', [currWeekday.nth(1)]); //default value
          }

          if (value === null) {
            formValues = this.changeField(formValues, 'bymonthday', null); //default value
            formValues = this.changeField(formValues, 'byweekday', null); //default value
          }

          break;
        case 'yearly':
          if (value === 'bymonthday') {
            //sets bymonth and bymonthday in rruleset
            formValues.bymonthday = [defaultMonthDay]; //default value

            formValues = this.changeField(formValues, 'monthOfTheYear', startMonth); //default value: current month
            formValues = this.changeField(formValues, 'byweekday', null); //default value
          }

          if (value === 'byday') {
            formValues = this.changeField(formValues, 'bymonthday', null); //default value
            formValues = this.changeField(formValues, 'byweekday', [startWeekday.nth(1)]); //default value
            formValues = this.changeField(formValues, 'monthOfTheYear', startMonth); //default value
          }

          break;
        default:
          break;
      }
      return formValues;
    });
    _defineProperty(this, "onChangeRule", (field, value) => {
      var formValues = Object.assign({}, this.state.formValues);
      formValues = this.changeField(formValues, field, value);
      this.setState(prevState => {
        var rruleSet = prevState.rruleSet;
        rruleSet = this.updateRruleSet(rruleSet, formValues, field, value);
        return _objectSpread(_objectSpread({}, prevState), {}, {
          rruleSet,
          formValues
        });
      });
    });
    _defineProperty(this, "exclude", date => {
      let list = this.state.rruleSet.exdates().slice(0);
      list.push(date);
      this.onChangeRule('exdates', list);
    });
    _defineProperty(this, "undoExclude", date => {
      let list = this.state.rruleSet.exdates().slice(0);
      lodash_remove__WEBPACK_IMPORTED_MODULE_0___default()(list, e => {
        return e.getTime() === date.getTime();
      });
      this.onChangeRule('exdates', list);
    });
    _defineProperty(this, "addDate", date => {
      const moment = this.moment;
      let all = lodash_concat__WEBPACK_IMPORTED_MODULE_1___default()(this.state.rruleSet.all(), this.state.rruleSet.exdates());
      var simpleDate = moment(new Date(date)).startOf('day').toDate().getTime();
      var exists = lodash_find__WEBPACK_IMPORTED_MODULE_2___default()(all, e => {
        var d = moment(e).startOf('day').toDate().getTime();
        return d === simpleDate;
      });
      if (!exists) {
        let list = this.state.rruleSet.rdates().slice(0);
        list.push(new Date(date));
        this.onChangeRule('rdates', list);
      }
    });
    _defineProperty(this, "save", () => {
      var value = this.state.rruleSet.toString();
      this.props.onChange(this.props.id, value);
      this.close();
    });
    _defineProperty(this, "remove", () => {
      const {
        RRuleSet
      } = this.props.rrule;
      this.props.onChange(this.props.id, null);
      let rruleSet = new RRuleSet();
      this.setState({
        rruleSet: rruleSet,
        formValues: this.getFormValues(rruleSet)
      });
    });
    const {
      RRuleSet: _RRuleSet,
      rrulestr
    } = props.rrule;
    this.moment = this.props.moment.default;
    this.moment.locale(this.props.lang);
    let _rruleSet = this.props.value ? rrulestr(props.value, {
      compatible: true,
      //If set to True, the parser will operate in RFC-compatible mode. Right now it means that unfold will be turned on, and if a DTSTART is found, it will be considered the first recurrence instance, as documented in the RFC.
      forceset: true
      // dtstart: props.formData.start
      //   ? this.getUTCDate(props.formData.start)
      //       .startOf('day')
      //       .toDate()
      //   : null,
    }) : new _RRuleSet();
    this.state = {
      open: false,
      rruleSet: _rruleSet,
      formValues: this.getFormValues(_rruleSet),
      RRULE_LANGUAGE: Object(_Utils__WEBPACK_IMPORTED_MODULE_17__["rrulei18n"])(this.props.intl, this.moment, this.props.lang)
    };
  }
  componentDidMount() {
    if (this.props.value) {
      this.setRecurrenceStartEnd();
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.value) {
      var _prevProps$formData, _this$props$formData7;
      if (((_prevProps$formData = prevProps.formData) === null || _prevProps$formData === void 0 ? void 0 : _prevProps$formData.start) !== ((_this$props$formData7 = this.props.formData) === null || _this$props$formData7 === void 0 ? void 0 : _this$props$formData7.start)) {
        var _this$props$formData8;
        let start = this.getUTCDate((_this$props$formData8 = this.props.formData) === null || _this$props$formData8 === void 0 ? void 0 : _this$props$formData8.start).startOf('day').toDate();
        this.setState(prevState => {
          let rruleSet = prevState.rruleSet;
          rruleSet = this.updateRruleSet(rruleSet, prevState.formValues, 'dtstart', start);
          return _objectSpread(_objectSpread({}, prevState), {}, {
            rruleSet
          });
        });
      }
    }
  }
  render() {
    var _rruleSet$rrules$;
    const {
      open,
      dimmer,
      rruleSet,
      formValues,
      RRULE_LANGUAGE
    } = this.state;
    const {
      id,
      title,
      required,
      description,
      error,
      fieldSet,
      intl
    } = this.props;
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"].Field, {
      inline: true,
      required: required,
      error: error.length > 0,
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('recurrence-widget', description ? 'help' : ''),
      id: `${fieldSet || 'field'}-${id}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 743,
        columnNumber: 7
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 750,
        columnNumber: 9
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Row, {
      stretched: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 751,
        columnNumber: 11
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Column, {
      width: "4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 752,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 753,
        columnNumber: 15
      }
    }, __jsx("label", {
      htmlFor: `field-${id}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 754,
        columnNumber: 17
      }
    }, title))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Column, {
      width: "8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 757,
        columnNumber: 13
      }
    }, rruleSet.rrules()[0] && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Label"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 760,
        columnNumber: 19
      }
    }, (_rruleSet$rrules$ = rruleSet.rrules()[0]) === null || _rruleSet$rrules$ === void 0 ? void 0 : _rruleSet$rrules$.toText(t => {
      return RRULE_LANGUAGE.strings[t];
    }, RRULE_LANGUAGE, RRULE_LANGUAGE.dateFormatter)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Segment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 770,
        columnNumber: 19
      }
    }, __jsx(_Occurences__WEBPACK_IMPORTED_MODULE_23__["default"], {
      rruleSet: rruleSet,
      exclude: this.exclude,
      undoExclude: this.undoExclude,
      showTitle: false,
      editOccurences: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 771,
        columnNumber: 21
      }
    }))), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 781,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      basic: true,
      disabled: this.props.isDisabled,
      color: "blue",
      className: "edit-recurrence",
      onClick: this.show('blurring'),
      type: "button",
      "aria-label": intl.formatMessage(messages.editRecurrence),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 782,
        columnNumber: 17
      }
    }, __jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
      name: _plone_volto_icons_editing_svg__WEBPACK_IMPORTED_MODULE_15___default.a,
      size: "20px",
      title: intl.formatMessage(messages.editRecurrence),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 791,
        columnNumber: 19
      }
    })), this.props.value && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      basic: true,
      color: "pink",
      className: "remove-recurrence",
      onClick: () => {
        this.remove();
      },
      type: "button",
      "aria-label": intl.formatMessage(messages.remove),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 798,
        columnNumber: 19
      }
    }, __jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
      name: _plone_volto_icons_delete_svg__WEBPACK_IMPORTED_MODULE_16___default.a,
      size: "20px",
      title: intl.formatMessage(messages.remove),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 808,
        columnNumber: 21
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Modal"], {
      dimmer: dimmer,
      open: open,
      onClose: this.close,
      className: "recurrence-form",
      closeIcon: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 816,
        columnNumber: 15
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Modal"].Header, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 823,
        columnNumber: 17
      }
    }, intl.formatMessage(messages.editRecurrence), ' '), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Modal"].Content, {
      scrolling: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 826,
        columnNumber: 17
      }
    }, rruleSet.rrules().length > 0 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Modal"].Description, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 828,
        columnNumber: 21
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Segment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 829,
        columnNumber: 23
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Form"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 830,
        columnNumber: 25
      }
    }, __jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_12__["SelectWidget"], {
      id: "freq",
      title: intl.formatMessage(messages.repeat),
      getVocabulary: () => {},
      getVocabularyTokenTitle: () => {},
      choices: Object.keys(_Utils__WEBPACK_IMPORTED_MODULE_17__["OPTIONS"].frequences).map(t => {
        return [t, intl.formatMessage(messages[t])];
      }),
      value: formValues.freq,
      onChange: this.onChangeRule,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 831,
        columnNumber: 27
      }
    }), _Utils__WEBPACK_IMPORTED_MODULE_17__["OPTIONS"].frequences[formValues.freq].interval && __jsx(_IntervalField__WEBPACK_IMPORTED_MODULE_18__["default"], {
      label: intl.formatMessage(messages.repeatEvery),
      labelAfter: formValues.freq && intl.formatMessage(messages['interval_' + formValues.freq]),
      value: formValues.interval,
      onChange: this.onChangeRule,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 845,
        columnNumber: 29
      }
    }), _Utils__WEBPACK_IMPORTED_MODULE_17__["OPTIONS"].frequences[formValues.freq].byday && __jsx(_ByDayField__WEBPACK_IMPORTED_MODULE_19__["default"], {
      label: intl.formatMessage(messages.repeatOn),
      value: formValues.byweekday,
      onChange: this.onChangeRule,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 860,
        columnNumber: 29
      }
    }), _Utils__WEBPACK_IMPORTED_MODULE_17__["OPTIONS"].frequences[formValues.freq].bymonth && __jsx(_ByMonthField__WEBPACK_IMPORTED_MODULE_21__["default"], {
      label: intl.formatMessage(messages.repeatOn),
      value: formValues.monthly,
      bymonthday: formValues.bymonthday,
      weekdayOfTheMonthIndex: formValues.weekdayOfTheMonthIndex,
      weekdayOfTheMonth: formValues.weekdayOfTheMonth,
      onChange: this.onChangeRule,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 869,
        columnNumber: 29
      }
    }), _Utils__WEBPACK_IMPORTED_MODULE_17__["OPTIONS"].frequences[formValues.freq].byyear && __jsx(_ByYearField__WEBPACK_IMPORTED_MODULE_22__["default"], {
      label: intl.formatMessage(messages.repeatOn),
      value: formValues.yearly,
      bymonthday: formValues.bymonthday,
      monthOfTheYear: formValues.monthOfTheYear,
      weekdayOfTheMonthIndex: formValues.weekdayOfTheMonthIndex,
      weekdayOfTheMonth: formValues.weekdayOfTheMonth,
      onChange: this.onChangeRule,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 883,
        columnNumber: 29
      }
    }), __jsx(_EndField__WEBPACK_IMPORTED_MODULE_20__["default"], {
      value: formValues.recurrenceEnds,
      count: formValues.count,
      until: formValues.until,
      onChange: this.onChangeRule,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 897,
        columnNumber: 27
      }
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Segment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 905,
        columnNumber: 23
      }
    }, __jsx(_Occurences__WEBPACK_IMPORTED_MODULE_23__["default"], {
      rruleSet: rruleSet,
      exclude: this.exclude,
      undoExclude: this.undoExclude,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 906,
        columnNumber: 25
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Segment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 912,
        columnNumber: 23
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Header"], {
      as: "h2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 913,
        columnNumber: 25
      }
    }, intl.formatMessage(messages.add_date)), __jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_12__["DatetimeWidget"], {
      id: "addDate",
      title: intl.formatMessage(messages.select_date_to_add_to_recurrence),
      dateOnly: true,
      noPastDates: true,
      onChange: (id, value) => {
        this.addDate(value === '' ? undefined : value);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 917,
        columnNumber: 25
      }
    })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Modal"].Actions, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 932,
        columnNumber: 17
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      className: "save",
      basic: true,
      onClick: () => {
        this.save();
      },
      "aria-label": intl.formatMessage(messages.save),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 933,
        columnNumber: 19
      }
    }, __jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
      name: _plone_volto_icons_save_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
      className: "circled",
      size: "30px",
      title: intl.formatMessage(messages.save),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 941,
        columnNumber: 21
      }
    })))), lodash_map__WEBPACK_IMPORTED_MODULE_3___default()(error, message => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Label"], {
      key: message,
      basic: true,
      color: "red",
      pointing: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 951,
        columnNumber: 17
      }
    }, message)))), description && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Row, {
      stretched: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 958,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Column, {
      stretched: true,
      width: "12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 959,
        columnNumber: 15
      }
    }, __jsx("p", {
      className: "help",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 960,
        columnNumber: 17
      }
    }, description)))));
  }
}
_defineProperty(RecurrenceWidget, "propTypes", {
  id: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired,
  formData: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  title: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  required: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  error: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string),
  value: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
});
_defineProperty(RecurrenceWidget, "defaultProps", {
  description: null,
  required: false,
  error: [],
  value: null
});
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_7__["compose"])(Object(_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_13__["injectLazyLibs"])(['moment', 'rrule']), Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(state => ({
  lang: state.intl.locale
})), react_intl__WEBPACK_IMPORTED_MODULE_10__["injectIntl"])(RecurrenceWidget));

/***/ }),

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/SelectInput.jsx":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/SelectInput.jsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/find */ "lodash/find");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @plone/volto/components/manage/Widgets/SelectStyling */ "./node_modules/@plone/volto/src/components/manage/Widgets/SelectStyling.jsx");

var _jsxFileName = "/Users/dobriceanioandorian/Work/uclass/hidrosaltconsulting/hidrosalt-consulting/frontend/node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/SelectInput.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * SelectInput component.
 * @module components/manage/Widgets/RecurrenceWidget/SelectInput
 */





/**
 * SelectInput component class.
 * @function SelectInput
 * @returns {string} Markup of the component.
 */
const SelectInput = ({
  name,
  disabled,
  options,
  value,
  onChange
}) => {
  const inlineSelectStyles = _objectSpread(_objectSpread({}, _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_4__["customSelectStyles"]), {}, {
    control: (styles, state) => _objectSpread(_objectSpread({}, _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_4__["customSelectStyles"].control(styles, state)), {}, {
      minWidth: '130px'
    })
  });
  const getDefaultValue = (choices, value) => {
    const element = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(choices, o => o.value === value);
    return element ? element : {};
  };
  return __jsx(react_select__WEBPACK_IMPORTED_MODULE_3___default.a, {
    isDisabled: disabled,
    id: name,
    name: name,
    className: "react-select-container",
    classNamePrefix: "react-select",
    defaultValue: getDefaultValue(options, value),
    value: getDefaultValue(options, value),
    options: options,
    styles: inlineSelectStyles,
    theme: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_4__["selectTheme"],
    components: {
      DropdownIndicator: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_4__["DropdownIndicator"],
      Option: _plone_volto_components_manage_Widgets_SelectStyling__WEBPACK_IMPORTED_MODULE_4__["Option"]
    },
    onChange: data => onChange(name, data.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  });
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
SelectInput.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
SelectInput.defaultProps = {
  name: 'select',
  options: [],
  disabled: false,
  value: null,
  onChange: null
};
/* harmony default export */ __webpack_exports__["default"] = (SelectInput);

/***/ }),

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/Utils.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/Utils.js ***!
  \*******************************************************************************************/
/*! exports provided: Days, WEEKLY_DAYS, MONDAYFRIDAY_DAYS, FREQUENCES, OPTIONS, toISOString, rrulei18n */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Days", function() { return Days; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEEKLY_DAYS", function() { return WEEKLY_DAYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONDAYFRIDAY_DAYS", function() { return MONDAYFRIDAY_DAYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FREQUENCES", function() { return FREQUENCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTIONS", function() { return OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toISOString", function() { return toISOString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rrulei18n", function() { return rrulei18n; });
/* harmony import */ var rrule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rrule */ "rrule");
/* harmony import */ var rrule__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rrule__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);


const Days = {
  MO: rrule__WEBPACK_IMPORTED_MODULE_0__["RRule"].MO,
  TU: rrule__WEBPACK_IMPORTED_MODULE_0__["RRule"].TU,
  WE: rrule__WEBPACK_IMPORTED_MODULE_0__["RRule"].WE,
  TH: rrule__WEBPACK_IMPORTED_MODULE_0__["RRule"].TH,
  FR: rrule__WEBPACK_IMPORTED_MODULE_0__["RRule"].FR,
  SA: rrule__WEBPACK_IMPORTED_MODULE_0__["RRule"].SA,
  SU: rrule__WEBPACK_IMPORTED_MODULE_0__["RRule"].SU
};
const WEEKLY_DAYS = [Days.MO, Days.TU, Days.WE, Days.TH, Days.FR];
const MONDAYFRIDAY_DAYS = [Days.MO, Days.FR];
const FREQUENCES = {
  DAILY: 'daily',
  MONDAYFRIDAY: 'mondayfriday',
  WEEKDAYS: 'weekdays',
  WEEKLY: 'weekly',
  MONTHLY: 'monthly',
  YEARLY: 'yearly'
};
const OPTIONS = {
  frequences: {
    [FREQUENCES.DAILY]: {
      rrule: rrule__WEBPACK_IMPORTED_MODULE_0__["RRule"].DAILY,
      interval: true
    },
    [FREQUENCES.MONDAYFRIDAY]: {
      rrule: rrule__WEBPACK_IMPORTED_MODULE_0__["RRule"].WEEKLY
    },
    [FREQUENCES.WEEKDAYS]: {
      rrule: rrule__WEBPACK_IMPORTED_MODULE_0__["RRule"].WEEKLY
    },
    [FREQUENCES.WEEKLY]: {
      rrule: rrule__WEBPACK_IMPORTED_MODULE_0__["RRule"].WEEKLY,
      interval: true,
      byday: true
    },
    [FREQUENCES.MONTHLY]: {
      rrule: rrule__WEBPACK_IMPORTED_MODULE_0__["RRule"].MONTHLY,
      interval: true,
      bymonth: true
    },
    [FREQUENCES.YEARLY]: {
      rrule: rrule__WEBPACK_IMPORTED_MODULE_0__["RRule"].YEARLY,
      interval: true,
      byyear: true
    }
  }
};
const toISOString = date => {
  return date.toISOString().split('T')[0];
};
const rrulei18n = (intl, moment, lang) => {
  moment.locale(lang);
  const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["defineMessages"])({
    every: {
      "id": "rrule_every",
      "defaultMessage": "every"
    },
    until: {
      "id": "rrule_until",
      "defaultMessage": "until"
    },
    for: {
      "id": "rrule_for",
      "defaultMessage": "for"
    },
    time: {
      "id": "rrule_time",
      "defaultMessage": "time"
    },
    times: {
      "id": "rrule_times",
      "defaultMessage": "times"
    },
    '(~ approximate)': {
      "id": "rrule_approximate",
      "defaultMessage": "(~approximate)"
    },
    hour: {
      "id": "rrule_hour",
      "defaultMessage": "hour"
    },
    hours: {
      "id": "rrule_hours",
      "defaultMessage": "hours"
    },
    minutes: {
      "id": "rrule_minutes",
      "defaultMessage": "minutes"
    },
    weekdays: {
      "id": "rrule_weekdays",
      "defaultMessage": "weekdays"
    },
    weekday: {
      "id": "rrule_weekday",
      "defaultMessage": "weekday"
    },
    day: {
      "id": "rrule_day",
      "defaultMessage": "day"
    },
    days: {
      "id": "rrule_days",
      "defaultMessage": "days"
    },
    in: {
      "id": "rrule_in",
      "defaultMessage": "in"
    },
    week: {
      "id": "rrule_week",
      "defaultMessage": "week"
    },
    weeks: {
      "id": "rrule_weeks",
      "defaultMessage": "weeks"
    },
    month: {
      "id": "rrule_month",
      "defaultMessage": "month"
    },
    months: {
      "id": "rrule_months",
      "defaultMessage": "months"
    },
    on: {
      "id": "rrule_on",
      "defaultMessage": "on"
    },
    year: {
      "id": "rrule_year",
      "defaultMessage": "year"
    },
    years: {
      "id": "rrule_years",
      "defaultMessage": "years"
    },
    'on the': {
      "id": "rrule_on the",
      "defaultMessage": "on the"
    },
    the: {
      "id": "rrule_the",
      "defaultMessage": "the"
    },
    and: {
      "id": "rrule_and",
      "defaultMessage": "and"
    },
    or: {
      "id": "rrule_or",
      "defaultMessage": "or"
    },
    at: {
      "id": "rrule_at",
      "defaultMessage": "at"
    },
    last: {
      "id": "rrule_last",
      "defaultMessage": "last"
    },
    st: {
      "id": "rrule_st",
      "defaultMessage": "st"
    },
    nd: {
      "id": "rrule_nd",
      "defaultMessage": "nd"
    },
    rd: {
      "id": "rrule_rd",
      "defaultMessage": "rd"
    },
    th: {
      "id": "rrule_th",
      "defaultMessage": "th"
    },
    dateFormat: {
      "id": "rrule_dateFormat",
      "defaultMessage": "[month] [day], [year]"
    }
  });
  let strings = {};
  Object.keys(messages).map(k => strings[k] = intl.formatMessage(messages[k]));
  let dateFormat = strings.dateFormat.replace(new RegExp('\\[', 'g'), '${').replace(new RegExp('\\]', 'g'), '}');
  const dateFormatter = (year, month, day) => dateFormat.replace(/\$\{year\}/g, year).replace(/\$\{month\}/g, month).replace(/\$\{day\}/g, day);
  const LANGUAGE = {
    dayNames: moment.weekdays(),
    monthNames: moment.months(),
    strings: strings,
    dateFormatter: dateFormatter
  };
  return LANGUAGE;
};

/***/ }),

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/WeekdayOfTheMonthField.jsx":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/WeekdayOfTheMonthField.jsx ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/Utils.js");
/* harmony import */ var _SelectInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectInput */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/SelectInput.jsx");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @plone/volto/helpers/Loadable/Loadable */ "./node_modules/@plone/volto/src/helpers/Loadable/Loadable.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/dobriceanioandorian/Work/uclass/hidrosaltconsulting/hidrosalt-consulting/frontend/node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/WeekdayOfTheMonthField.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * WeekdayOfTheMonthField component.
 * @module components/manage/Widgets/RecurrenceWidget/WeekdayOfTheMonthField
 */








/**
 * WeekdayOfTheMonthField component class.
 * @function WeekdayOfTheMonthField
 * @returns {string} Markup of the component.
 */

const WeekdayOfTheMonthField = props => {
  const {
    disabled = false,
    moment: momentlib
  } = props;
  const lang = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.intl.locale);
  const moment = momentlib.default;
  moment.locale(lang);
  const weekdayOfTheMonthList = [...lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(Object.keys(_Utils__WEBPACK_IMPORTED_MODULE_2__["Days"]), d => ({
    value: _Utils__WEBPACK_IMPORTED_MODULE_2__["Days"][d].weekday,
    label: moment.weekdays(_Utils__WEBPACK_IMPORTED_MODULE_2__["Days"][d].weekday + 1)
  }))];
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Field, {
    disabled: disabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(_SelectInput__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    name: "weekdayOfTheMonth",
    options: weekdayOfTheMonthList
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_5__["injectLazyLibs"])(['moment'])(WeekdayOfTheMonthField));

/***/ }),

/***/ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/WeekdayOfTheMonthIndexField.jsx":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/WeekdayOfTheMonthIndexField.jsx ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SelectInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectInput */ "./node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/SelectInput.jsx");

var _jsxFileName = "/Users/dobriceanioandorian/Work/uclass/hidrosaltconsulting/hidrosalt-consulting/frontend/node_modules/@plone/volto/src/components/manage/Widgets/RecurrenceWidget/WeekdayOfTheMonthIndexField.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * WeekdayOfTheMonthIndexField component.
 * @module components/manage/Widgets/RecurrenceWidget/WeekdayOfTheMonthIndexField
 */







/**
 * WeekdayOfTheMonthIndexField component class.
 * @function WeekdayOfTheMonthIndexField
 * @returns {string} Markup of the component.
 */

const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["defineMessages"])({
  bymonthDayNumber: {
    "id": "Weeek day of month",
    "defaultMessage": "The"
  },
  first: {
    "id": "First",
    "defaultMessage": "First"
  },
  second: {
    "id": "Second",
    "defaultMessage": "Second"
  },
  third: {
    "id": "Third",
    "defaultMessage": "Third"
  },
  fourth: {
    "id": "Fourth",
    "defaultMessage": "Fourth"
  },
  last: {
    "id": "Last",
    "defaultMessage": "Last"
  }
});
const ORDINAL_NUMBERS = {
  '1': 'first',
  '2': 'second',
  '3': 'third',
  '4': 'fourth',
  '-1': 'last'
};
class WeekdayOfTheMonthIndexField extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */

  /**
   * Default properties.
   * @property {Object} defaultProps Default properties.
   * @static
   */

  render() {
    const {
      intl,
      disabled
    } = this.props;
    const weekdayOfTheMonthIndexList = [...lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(Object.keys(ORDINAL_NUMBERS), option => ({
      value: parseInt(option),
      label: intl.formatMessage(messages[ORDINAL_NUMBERS[option]])
    }))];
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Field, {
      disabled: disabled,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }
    }, intl.formatMessage(messages.bymonthDayNumber)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Field, {
      disabled: disabled,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }
    }, __jsx(_SelectInput__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
      name: "weekdayOfTheMonthIndex",
      options: weekdayOfTheMonthIndexList
    }, this.props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }
    }))));
  }
}
_defineProperty(WeekdayOfTheMonthIndexField, "propTypes", {
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
});
_defineProperty(WeekdayOfTheMonthIndexField, "defaultProps", {
  disabled: false,
  value: null,
  onChange: null
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["injectIntl"])(WeekdayOfTheMonthIndexField));

/***/ })

};;
//# sourceMappingURL=vendors~plone-volto-components-manage-Widgets-RecurrenceWidget-RecurrenceWidget.chunk.js.map