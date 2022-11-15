/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js ***!
  \************************************************************************************/
/***/ (() => {


/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function () {
    'use strict';

    (function(){if(void 0===window.Reflect||void 0===window.customElements||window.customElements.polyfillWrapFlushCallback)return;const a=HTMLElement;window.HTMLElement={HTMLElement:function HTMLElement(){return Reflect.construct(a,[],this.constructor)}}.HTMLElement,HTMLElement.prototype=a.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,a);})();

}());


/***/ }),

/***/ "./src/vizTooltip.ts":
/*!***************************!*\
  !*** ./src/vizTooltip.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! @webcomponents/webcomponentsjs/custom-elements-es5-adapter */ "./node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js");
var rowTemplate = document.createElement('template');
rowTemplate.innerHTML = "\n    <div class=\"tooltip-row\">\n        <span class=\"entry-icon\"></span>\n        <div class=\"tooltip-row-label\">\n            <span class=\"entry-label\"></span>\n        </div>\n    </div>\n";
var containerTemplate = document.createElement('template');
containerTemplate.innerHTML = "\n    <style>\n        :host {\n            display: block;\n            min-width: 80px;\n            max-width: 250px;\n            min-height: 24px;\n        }\n\n        .tooltip-container {\n            display: flex;\n            min-width: 80px;\n            min-height: 24px;\n            flex-flow: column nowrap;\n        }\n\n        .price::before {\n            font-family: SAP-icons;\n            content: \"\\E026\";\n        }\n\n        .manager::before {\n            font-family: SAP-icons;\n            content: \"\\E036\";\n        }\n\n        .product::before {\n            font-family: SAP-icons;\n            content \"\\E16D\";\n        }\n\n        .location::before {\n            font-family: SAP-icons;\n            content \"\\E021\";\n        }\n\n        .store::before {\n            font-family: SAP-icons;\n            content \"\\E00F\";\n        }\n\n        .tooltip-row {\n            display: flex;\n            min-height: 30px;\n            flex-flow: row nowrap;\n            align-items: center;\n        }\n\n        .tooltip-row-label {\n            display: flex;\n            flex-flow: column nowrap;\n            flex: auto;\n        }\n\n        .tooltip-row-label progress {\n            height: 6px;\n            width: 100%;\n            border-radius: 0;\n        }\n\n        .tooltip-row-label progress::-webkit-progress-bar {\n            color: lightblue;\n            background-color: #eee;\n        }\n\n        .tooltip-row-label progress::-webkit-progress-value {\n            background-color: red;\n        }\n\n        .tooltip-row:not(:last-of-type) {\n            border-bottom: solid 1px #e6e7e8;\n        }\n\n        .entry-icon {\n            display: inline-block;\n            width: 20px;\n            padding-right: 16px;\n        }\n\n        .entry-label {\n            display: inline-block;\n            flex: auto;\n            vertical-align: middle;\n        }\n    </style>\n    <div class=\"tooltip-container\">\n    </div>\n\n";
var iconMapping = {
    'Location': 'location',
    'Product': 'product',
    'Sales Manager': 'manager',
    'Original Sales Price': 'price',
};
var tooltipEntryToRow = function (entry, withPercentageBar, max) {
    if (withPercentageBar === void 0) { withPercentageBar = false; }
    if (max === void 0) { max = 100; }
    var rowElement = rowTemplate.content.cloneNode(true);
    var iconEl = rowElement.querySelector('.entry-icon');
    var labelEl = rowElement.querySelector('.entry-label');
    iconEl.classList.add(iconMapping[entry.title]);
    labelEl.textContent = entry.value;
    if (withPercentageBar) {
        var percentageBar = document.createElement('progress');
        percentageBar.value = Number(/[.0-9]+/.exec(entry.value)[0]);
        percentageBar.max = max;
        var rowLabelDiv = rowElement.querySelector('.tooltip-row-label');
        // (percentageBar as HTMLElement).style['width'] = '100%';
        rowLabelDiv.appendChild(percentageBar);
    }
    return rowElement;
};
var VizTooltip = /** @class */ (function (_super) {
    __extends(VizTooltip, _super);
    function VizTooltip() {
        var _this = _super.call(this) || this;
        _this._max = 100;
        _this._color = 'lightblue';
        _this._shadowRoot = _this.attachShadow({ mode: 'open' });
        _this._shadowRoot.appendChild(containerTemplate.content.cloneNode(true));
        _this._tooltipContainer = _this._shadowRoot.querySelector('.tooltip-container');
        _this._props = {};
        _this.render();
        return _this;
    }
    VizTooltip.prototype.render = function () {
        var _this = this;
        this._tooltipContainer.innerHTML = '';
        if (this._props.headerProps) {
            var headerEntities = this._props.headerProps.headerEntities;
            headerEntities === null || headerEntities === void 0 ? void 0 : headerEntities.forEach(function (headerEntry) {
                _this._tooltipContainer.appendChild(tooltipEntryToRow(headerEntry, true, _this._max));
            });
        }
        if (this._props.detailsProps) {
            var detailsEntities = this._props.detailsProps.detailsEntities;
            detailsEntities === null || detailsEntities === void 0 ? void 0 : detailsEntities.forEach(function (detailEntry) {
                _this._tooltipContainer.appendChild(tooltipEntryToRow(detailEntry));
            });
        }
        if (this._color) {
            var percentageColorReg = /progress::\-webkit\-progress\-value\s+\{\s+background-color:\s+[#a-z0-9]+\s?;\s+}/;
            var styleElement = this._shadowRoot.querySelector('style');
            var styleContent = styleElement.textContent.replace(percentageColorReg, "progress::-webkit-progress-value { background-color: ".concat(this._color, "; }"));
            styleElement.innerHTML = styleContent;
        }
    };
    Object.defineProperty(VizTooltip.prototype, "testProps", {
        get: function () {
            return 'testPop';
        },
        set: function (value) {
            console.log(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VizTooltip.prototype, "props", {
        get: function () {
            return __assign({}, this._props);
        },
        set: function (value) {
            this._props = value;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VizTooltip.prototype, "settings", {
        set: function (value) {
            this._max = (value === null || value === void 0 ? void 0 : value.max) || this._max;
            this._color = (value === null || value === void 0 ? void 0 : value.color) || this._color;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    return VizTooltip;
}(HTMLElement));
customElements.define('viz-tooltip', VizTooltip);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/vizTooltip.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LXRvb2x0aXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLG1IQUFtSCxvQkFBb0Isb0JBQW9CLG1DQUFtQyxpREFBaUQsbUlBQW1JOztBQUVsWSxDQUFDOzs7Ozs7Ozs7Ozs7QUNmWTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCLHNDQUFzQyxrQkFBa0I7QUFDdkYsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFPLENBQUMsZ0pBQTREO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCw2QkFBNkIsOEJBQThCLCtCQUErQiwrQkFBK0IsV0FBVyxnQ0FBZ0MsNEJBQTRCLDhCQUE4QiwrQkFBK0IsdUNBQXVDLFdBQVcsNEJBQTRCLHFDQUFxQyxrQ0FBa0MsV0FBVyw4QkFBOEIscUNBQXFDLGtDQUFrQyxXQUFXLDhCQUE4QixxQ0FBcUMsaUNBQWlDLFdBQVcsK0JBQStCLHFDQUFxQyxpQ0FBaUMsV0FBVyw0QkFBNEIscUNBQXFDLGlDQUFpQyxXQUFXLDBCQUEwQiw0QkFBNEIsK0JBQStCLG9DQUFvQyxrQ0FBa0MsV0FBVyxnQ0FBZ0MsNEJBQTRCLHVDQUF1Qyx5QkFBeUIsV0FBVyx5Q0FBeUMsMEJBQTBCLDBCQUEwQiwrQkFBK0IsV0FBVywrREFBK0QsK0JBQStCLHFDQUFxQyxXQUFXLGlFQUFpRSxvQ0FBb0MsV0FBVyw2Q0FBNkMsK0NBQStDLFdBQVcseUJBQXlCLG9DQUFvQywwQkFBMEIsa0NBQWtDLFdBQVcsMEJBQTBCLG9DQUFvQyx5QkFBeUIscUNBQXFDLFdBQVc7QUFDMTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsY0FBYztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSw4RUFBOEUscUNBQXFDLElBQUk7QUFDdkg7QUFDQSx3SEFBd0gsNENBQTRDO0FBQ3BLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7O1VDNUhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aWRnZXQtYWRkLW9ucy8uL25vZGVfbW9kdWxlcy9Ad2ViY29tcG9uZW50cy93ZWJjb21wb25lbnRzanMvY3VzdG9tLWVsZW1lbnRzLWVzNS1hZGFwdGVyLmpzIiwid2VicGFjazovL3dpZGdldC1hZGQtb25zLy4vc3JjL3ZpelRvb2x0aXAudHMiLCJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbnMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93aWRnZXQtYWRkLW9ucy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbnMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG5AbGljZW5zZSBAbm9jb21waWxlXG5Db3B5cmlnaHQgKGMpIDIwMTggVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICAoZnVuY3Rpb24oKXtpZih2b2lkIDA9PT13aW5kb3cuUmVmbGVjdHx8dm9pZCAwPT09d2luZG93LmN1c3RvbUVsZW1lbnRzfHx3aW5kb3cuY3VzdG9tRWxlbWVudHMucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjaylyZXR1cm47Y29uc3QgYT1IVE1MRWxlbWVudDt3aW5kb3cuSFRNTEVsZW1lbnQ9e0hUTUxFbGVtZW50OmZ1bmN0aW9uIEhUTUxFbGVtZW50KCl7cmV0dXJuIFJlZmxlY3QuY29uc3RydWN0KGEsW10sdGhpcy5jb25zdHJ1Y3Rvcil9fS5IVE1MRWxlbWVudCxIVE1MRWxlbWVudC5wcm90b3R5cGU9YS5wcm90b3R5cGUsSFRNTEVsZW1lbnQucHJvdG90eXBlLmNvbnN0cnVjdG9yPUhUTUxFbGVtZW50LE9iamVjdC5zZXRQcm90b3R5cGVPZihIVE1MRWxlbWVudCxhKTt9KSgpO1xuXG59KCkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCJAd2ViY29tcG9uZW50cy93ZWJjb21wb25lbnRzanMvY3VzdG9tLWVsZW1lbnRzLWVzNS1hZGFwdGVyXCIpO1xudmFyIHJvd1RlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnJvd1RlbXBsYXRlLmlubmVySFRNTCA9IFwiXFxuICAgIDxkaXYgY2xhc3M9XFxcInRvb2x0aXAtcm93XFxcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJlbnRyeS1pY29uXFxcIj48L3NwYW4+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b29sdGlwLXJvdy1sYWJlbFxcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImVudHJ5LWxhYmVsXFxcIj48L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXCI7XG52YXIgY29udGFpbmVyVGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuY29udGFpbmVyVGVtcGxhdGUuaW5uZXJIVE1MID0gXCJcXG4gICAgPHN0eWxlPlxcbiAgICAgICAgOmhvc3Qge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIG1pbi13aWR0aDogODBweDtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI0cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9vbHRpcC1jb250YWluZXIge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI0cHg7XFxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByaWNlOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTQVAtaWNvbnM7XFxuICAgICAgICAgICAgY29udGVudDogXFxcIlxcXFxFMDI2XFxcIjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tYW5hZ2VyOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTQVAtaWNvbnM7XFxuICAgICAgICAgICAgY29udGVudDogXFxcIlxcXFxFMDM2XFxcIjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5wcm9kdWN0OjpiZWZvcmUge1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTQVAtaWNvbnM7XFxuICAgICAgICAgICAgY29udGVudCBcXFwiXFxcXEUxNkRcXFwiO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmxvY2F0aW9uOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTQVAtaWNvbnM7XFxuICAgICAgICAgICAgY29udGVudCBcXFwiXFxcXEUwMjFcXFwiO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnN0b3JlOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTQVAtaWNvbnM7XFxuICAgICAgICAgICAgY29udGVudCBcXFwiXFxcXEUwMEZcXFwiO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRvb2x0aXAtcm93IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9vbHRpcC1yb3ctbGFiZWwge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICAgICAgICAgIGZsZXg6IGF1dG87XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9vbHRpcC1yb3ctbGFiZWwgcHJvZ3Jlc3Mge1xcbiAgICAgICAgICAgIGhlaWdodDogNnB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9vbHRpcC1yb3ctbGFiZWwgcHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtYmFyIHtcXG4gICAgICAgICAgICBjb2xvcjogbGlnaHRibHVlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9vbHRpcC1yb3ctbGFiZWwgcHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b29sdGlwLXJvdzpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZTZlN2U4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmVudHJ5LWljb24ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmVudHJ5LWxhYmVsIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgZmxleDogYXV0bztcXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICAgICAgfVxcbiAgICA8L3N0eWxlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0b29sdGlwLWNvbnRhaW5lclxcXCI+XFxuICAgIDwvZGl2PlxcblxcblwiO1xudmFyIGljb25NYXBwaW5nID0ge1xuICAgICdMb2NhdGlvbic6ICdsb2NhdGlvbicsXG4gICAgJ1Byb2R1Y3QnOiAncHJvZHVjdCcsXG4gICAgJ1NhbGVzIE1hbmFnZXInOiAnbWFuYWdlcicsXG4gICAgJ09yaWdpbmFsIFNhbGVzIFByaWNlJzogJ3ByaWNlJyxcbn07XG52YXIgdG9vbHRpcEVudHJ5VG9Sb3cgPSBmdW5jdGlvbiAoZW50cnksIHdpdGhQZXJjZW50YWdlQmFyLCBtYXgpIHtcbiAgICBpZiAod2l0aFBlcmNlbnRhZ2VCYXIgPT09IHZvaWQgMCkgeyB3aXRoUGVyY2VudGFnZUJhciA9IGZhbHNlOyB9XG4gICAgaWYgKG1heCA9PT0gdm9pZCAwKSB7IG1heCA9IDEwMDsgfVxuICAgIHZhciByb3dFbGVtZW50ID0gcm93VGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgdmFyIGljb25FbCA9IHJvd0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVudHJ5LWljb24nKTtcbiAgICB2YXIgbGFiZWxFbCA9IHJvd0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVudHJ5LWxhYmVsJyk7XG4gICAgaWNvbkVsLmNsYXNzTGlzdC5hZGQoaWNvbk1hcHBpbmdbZW50cnkudGl0bGVdKTtcbiAgICBsYWJlbEVsLnRleHRDb250ZW50ID0gZW50cnkudmFsdWU7XG4gICAgaWYgKHdpdGhQZXJjZW50YWdlQmFyKSB7XG4gICAgICAgIHZhciBwZXJjZW50YWdlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJvZ3Jlc3MnKTtcbiAgICAgICAgcGVyY2VudGFnZUJhci52YWx1ZSA9IE51bWJlcigvWy4wLTldKy8uZXhlYyhlbnRyeS52YWx1ZSlbMF0pO1xuICAgICAgICBwZXJjZW50YWdlQmFyLm1heCA9IG1heDtcbiAgICAgICAgdmFyIHJvd0xhYmVsRGl2ID0gcm93RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcC1yb3ctbGFiZWwnKTtcbiAgICAgICAgLy8gKHBlcmNlbnRhZ2VCYXIgYXMgSFRNTEVsZW1lbnQpLnN0eWxlWyd3aWR0aCddID0gJzEwMCUnO1xuICAgICAgICByb3dMYWJlbERpdi5hcHBlbmRDaGlsZChwZXJjZW50YWdlQmFyKTtcbiAgICB9XG4gICAgcmV0dXJuIHJvd0VsZW1lbnQ7XG59O1xudmFyIFZpelRvb2x0aXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFZpelRvb2x0aXAsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVml6VG9vbHRpcCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX21heCA9IDEwMDtcbiAgICAgICAgX3RoaXMuX2NvbG9yID0gJ2xpZ2h0Ymx1ZSc7XG4gICAgICAgIF90aGlzLl9zaGFkb3dSb290ID0gX3RoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICBfdGhpcy5fc2hhZG93Um9vdC5hcHBlbmRDaGlsZChjb250YWluZXJUZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIF90aGlzLl90b29sdGlwQ29udGFpbmVyID0gX3RoaXMuX3NoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLnRvb2x0aXAtY29udGFpbmVyJyk7XG4gICAgICAgIF90aGlzLl9wcm9wcyA9IHt9O1xuICAgICAgICBfdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBWaXpUb29sdGlwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX3Rvb2x0aXBDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICh0aGlzLl9wcm9wcy5oZWFkZXJQcm9wcykge1xuICAgICAgICAgICAgdmFyIGhlYWRlckVudGl0aWVzID0gdGhpcy5fcHJvcHMuaGVhZGVyUHJvcHMuaGVhZGVyRW50aXRpZXM7XG4gICAgICAgICAgICBoZWFkZXJFbnRpdGllcyA9PT0gbnVsbCB8fCBoZWFkZXJFbnRpdGllcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGVhZGVyRW50aXRpZXMuZm9yRWFjaChmdW5jdGlvbiAoaGVhZGVyRW50cnkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fdG9vbHRpcENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b29sdGlwRW50cnlUb1JvdyhoZWFkZXJFbnRyeSwgdHJ1ZSwgX3RoaXMuX21heCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3Byb3BzLmRldGFpbHNQcm9wcykge1xuICAgICAgICAgICAgdmFyIGRldGFpbHNFbnRpdGllcyA9IHRoaXMuX3Byb3BzLmRldGFpbHNQcm9wcy5kZXRhaWxzRW50aXRpZXM7XG4gICAgICAgICAgICBkZXRhaWxzRW50aXRpZXMgPT09IG51bGwgfHwgZGV0YWlsc0VudGl0aWVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZXRhaWxzRW50aXRpZXMuZm9yRWFjaChmdW5jdGlvbiAoZGV0YWlsRW50cnkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fdG9vbHRpcENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b29sdGlwRW50cnlUb1JvdyhkZXRhaWxFbnRyeSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2NvbG9yKSB7XG4gICAgICAgICAgICB2YXIgcGVyY2VudGFnZUNvbG9yUmVnID0gL3Byb2dyZXNzOjpcXC13ZWJraXRcXC1wcm9ncmVzc1xcLXZhbHVlXFxzK1xce1xccytiYWNrZ3JvdW5kLWNvbG9yOlxccytbI2EtejAtOV0rXFxzPztcXHMrfS87XG4gICAgICAgICAgICB2YXIgc3R5bGVFbGVtZW50ID0gdGhpcy5fc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdzdHlsZScpO1xuICAgICAgICAgICAgdmFyIHN0eWxlQ29udGVudCA9IHN0eWxlRWxlbWVudC50ZXh0Q29udGVudC5yZXBsYWNlKHBlcmNlbnRhZ2VDb2xvclJlZywgXCJwcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7IGJhY2tncm91bmQtY29sb3I6IFwiLmNvbmNhdCh0aGlzLl9jb2xvciwgXCI7IH1cIikpO1xuICAgICAgICAgICAgc3R5bGVFbGVtZW50LmlubmVySFRNTCA9IHN0eWxlQ29udGVudDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZpelRvb2x0aXAucHJvdG90eXBlLCBcInRlc3RQcm9wc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICd0ZXN0UG9wJztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWaXpUb29sdGlwLnByb3RvdHlwZSwgXCJwcm9wc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKHt9LCB0aGlzLl9wcm9wcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9wcm9wcyA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWaXpUb29sdGlwLnByb3RvdHlwZSwgXCJzZXR0aW5nc1wiLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYXggPSAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhbHVlLm1heCkgfHwgdGhpcy5fbWF4O1xuICAgICAgICAgICAgdGhpcy5fY29sb3IgPSAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhbHVlLmNvbG9yKSB8fCB0aGlzLl9jb2xvcjtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gVml6VG9vbHRpcDtcbn0oSFRNTEVsZW1lbnQpKTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndml6LXRvb2x0aXAnLCBWaXpUb29sdGlwKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy92aXpUb29sdGlwLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9