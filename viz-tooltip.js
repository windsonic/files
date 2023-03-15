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

/***/ "./src/VizTooltip.ts":
/*!***************************!*\
  !*** ./src/VizTooltip.ts ***!
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! @webcomponents/webcomponentsjs/custom-elements-es5-adapter */ "./node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js");
var rowTemplate = document.createElement('template');
rowTemplate.innerHTML = "\n    <div class=\"tooltip-row\">\n        <img class=\"entry-icon\"\n            width=\"20\"\n            height=\"20\"\n        >\n        <div class=\"tooltip-row-label\">\n            <span class=\"entry-label\"></span>\n        </div>\n    </div>\n";
var containerTemplate = document.createElement('template');
containerTemplate.innerHTML = "\n    <style>\n        :host {\n            display: block;\n            min-width: 80px;\n            max-width: 250px;\n            min-height: 24px;\n        }\n\n        .tooltip-container {\n            padding: 12px;\n            display: flex;\n            min-width: 80px;\n            min-height: 24px;\n            flex-flow: column nowrap;\n        }\n\n        .price::before {\n            font-family: SAP-icons;\n            content: \"\\E026\";\n        }\n\n        .manager::before {\n            font-family: SAP-icons;\n            content: \"\\E036\";\n        }\n\n        .product::before {\n            font-family: SAP-icons;\n            content \"\\E16D\";\n        }\n\n        .location::before {\n            font-family: SAP-icons;\n            content \"\\E021\";\n        }\n\n        .store::before {\n            font-family: SAP-icons;\n            content \"\\E00F\";\n        }\n\n        .tooltip-row {\n            display: flex;\n            min-height: 30px;\n            flex-flow: row nowrap;\n            align-items: center;\n        }\n\n        .tooltip-row-label {\n            display: flex;\n            flex-flow: column nowrap;\n            flex: auto;\n        }\n\n        .tooltip-row-label progress {\n            height: 6px;\n            width: 100%;\n            border-radius: 0;\n        }\n\n        .tooltip-row-label progress::-webkit-progress-bar {\n            color: lightblue;\n            background-color: #eee;\n        }\n\n        .tooltip-row-label progress::-webkit-progress-value {\n            background-color: red;\n        }\n\n        .tooltip-row:not(:last-of-type) {\n            border-bottom: solid 1px #e6e7e8;\n        }\n\n        .entry-icon {\n            display: inline-block;\n            width: 20px;\n            padding-right: 12px;\n        }\n\n        .entry-label {\n            display: inline-block;\n            flex: auto;\n            vertical-align: middle;\n        }\n    </style>\n    <div class=\"tooltip-container\">\n    </div>\n\n";
var iconMapping = {
    'Location': 'https://cdn-icons-png.flaticon.com/128/684/684908.png',
    'Product': 'https://cdn-icons-png.flaticon.com/128/1312/1312091.png',
    'Sales Manager': 'https://cdn-icons-png.flaticon.com/128/4205/4205906.png',
    'Original Sales Price': 'https://cdn-icons-png.flaticon.com/128/791/791968.png',
    'Date': 'https://cdn-icons-png.flaticon.com/128/425/425868.png',
    'Store': 'https://cdn-icons-png.flaticon.com/128/9977/9977589.png',
    'Category': 'https://cdn-icons-png.flaticon.com/128/10008/10008517.png',
    'Gross Margin': 'https://cdn-icons-png.flaticon.com/128/4647/4647763.png',
    'Discount': 'https://cdn-icons-png.flaticon.com/128/726/726476.png',
    'Price (fixed)': 'https://cdn-icons-png.flaticon.com/128/919/919790.png',
    'Quantity Sold': 'https://cdn-icons-png.flaticon.com/128/3338/3338632.png',
};
var tooltipEntryToRow = function (entry, withPercentageBar, max) {
    if (withPercentageBar === void 0) { withPercentageBar = false; }
    if (max === void 0) { max = 100; }
    var rowElement = rowTemplate.content.cloneNode(true);
    var iconEl = rowElement.querySelector('.entry-icon');
    var labelEl = rowElement.querySelector('.entry-label');
    iconEl.setAttribute('src', iconMapping[entry.title]);
    iconEl.setAttribute('title', entry.title);
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
    VizTooltip.prototype.setExtensionData = function (value) {
        this._props = {
            headerProps: value.header,
            detailsProps: value.details,
        };
        this.render();
    };
    Object.defineProperty(VizTooltip.prototype, "max", {
        set: function (value) {
            this._max = value;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VizTooltip.prototype, "color", {
        set: function (value) {
            this._color = value;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/VizTooltip.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LXRvb2x0aXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsbUhBQW1ILG9CQUFvQixvQkFBb0IsbUNBQW1DLGlEQUFpRCxtSUFBbUk7O0FBRWxZLENBQUM7Ozs7Ozs7Ozs7OztBQ2RZO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0Isc0NBQXNDLGtCQUFrQjtBQUN2Riw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFPLENBQUMsZ0pBQTREO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCw2QkFBNkIsOEJBQThCLCtCQUErQiwrQkFBK0IsV0FBVyxnQ0FBZ0MsNEJBQTRCLDRCQUE0Qiw4QkFBOEIsK0JBQStCLHVDQUF1QyxXQUFXLDRCQUE0QixxQ0FBcUMsa0NBQWtDLFdBQVcsOEJBQThCLHFDQUFxQyxrQ0FBa0MsV0FBVyw4QkFBOEIscUNBQXFDLGlDQUFpQyxXQUFXLCtCQUErQixxQ0FBcUMsaUNBQWlDLFdBQVcsNEJBQTRCLHFDQUFxQyxpQ0FBaUMsV0FBVywwQkFBMEIsNEJBQTRCLCtCQUErQixvQ0FBb0Msa0NBQWtDLFdBQVcsZ0NBQWdDLDRCQUE0Qix1Q0FBdUMseUJBQXlCLFdBQVcseUNBQXlDLDBCQUEwQiwwQkFBMEIsK0JBQStCLFdBQVcsK0RBQStELCtCQUErQixxQ0FBcUMsV0FBVyxpRUFBaUUsb0NBQW9DLFdBQVcsNkNBQTZDLCtDQUErQyxXQUFXLHlCQUF5QixvQ0FBb0MsMEJBQTBCLGtDQUFrQyxXQUFXLDBCQUEwQixvQ0FBb0MseUJBQXlCLHFDQUFxQyxXQUFXO0FBQ3Q5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxjQUFjO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLDhFQUE4RSxxQ0FBcUMsSUFBSTtBQUN2SDtBQUNBLHdIQUF3SCw0Q0FBNEM7QUFDcEs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7VUNsSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dpZGdldC1hZGQtb25zLy4vbm9kZV9tb2R1bGVzL0B3ZWJjb21wb25lbnRzL3dlYmNvbXBvbmVudHNqcy9jdXN0b20tZWxlbWVudHMtZXM1LWFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbnMvLi9zcmMvVml6VG9vbHRpcC50cyIsIndlYnBhY2s6Ly93aWRnZXQtYWRkLW9ucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93aWRnZXQtYWRkLW9ucy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dpZGdldC1hZGQtb25zL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93aWRnZXQtYWRkLW9ucy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZSBAbm9jb21waWxlXG5Db3B5cmlnaHQgKGMpIDIwMTggVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICAoZnVuY3Rpb24oKXtpZih2b2lkIDA9PT13aW5kb3cuUmVmbGVjdHx8dm9pZCAwPT09d2luZG93LmN1c3RvbUVsZW1lbnRzfHx3aW5kb3cuY3VzdG9tRWxlbWVudHMucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjaylyZXR1cm47Y29uc3QgYT1IVE1MRWxlbWVudDt3aW5kb3cuSFRNTEVsZW1lbnQ9e0hUTUxFbGVtZW50OmZ1bmN0aW9uIEhUTUxFbGVtZW50KCl7cmV0dXJuIFJlZmxlY3QuY29uc3RydWN0KGEsW10sdGhpcy5jb25zdHJ1Y3Rvcil9fS5IVE1MRWxlbWVudCxIVE1MRWxlbWVudC5wcm90b3R5cGU9YS5wcm90b3R5cGUsSFRNTEVsZW1lbnQucHJvdG90eXBlLmNvbnN0cnVjdG9yPUhUTUxFbGVtZW50LE9iamVjdC5zZXRQcm90b3R5cGVPZihIVE1MRWxlbWVudCxhKTt9KSgpO1xuXG59KCkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xucmVxdWlyZShcIkB3ZWJjb21wb25lbnRzL3dlYmNvbXBvbmVudHNqcy9jdXN0b20tZWxlbWVudHMtZXM1LWFkYXB0ZXJcIik7XG52YXIgcm93VGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xucm93VGVtcGxhdGUuaW5uZXJIVE1MID0gXCJcXG4gICAgPGRpdiBjbGFzcz1cXFwidG9vbHRpcC1yb3dcXFwiPlxcbiAgICAgICAgPGltZyBjbGFzcz1cXFwiZW50cnktaWNvblxcXCJcXG4gICAgICAgICAgICB3aWR0aD1cXFwiMjBcXFwiXFxuICAgICAgICAgICAgaGVpZ2h0PVxcXCIyMFxcXCJcXG4gICAgICAgID5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRvb2x0aXAtcm93LWxhYmVsXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZW50cnktbGFiZWxcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cIjtcbnZhciBjb250YWluZXJUZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5jb250YWluZXJUZW1wbGF0ZS5pbm5lckhUTUwgPSBcIlxcbiAgICA8c3R5bGU+XFxuICAgICAgICA6aG9zdCB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xcbiAgICAgICAgICAgIG1heC13aWR0aDogMjUwcHg7XFxuICAgICAgICAgICAgbWluLWhlaWdodDogMjRweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b29sdGlwLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIG1pbi13aWR0aDogODBweDtcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyNHB4O1xcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5wcmljZTo6YmVmb3JlIHtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogU0FQLWljb25zO1xcbiAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTAyNlxcXCI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubWFuYWdlcjo6YmVmb3JlIHtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogU0FQLWljb25zO1xcbiAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcRTAzNlxcXCI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAucHJvZHVjdDo6YmVmb3JlIHtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogU0FQLWljb25zO1xcbiAgICAgICAgICAgIGNvbnRlbnQgXFxcIlxcXFxFMTZEXFxcIjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5sb2NhdGlvbjo6YmVmb3JlIHtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogU0FQLWljb25zO1xcbiAgICAgICAgICAgIGNvbnRlbnQgXFxcIlxcXFxFMDIxXFxcIjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5zdG9yZTo6YmVmb3JlIHtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogU0FQLWljb25zO1xcbiAgICAgICAgICAgIGNvbnRlbnQgXFxcIlxcXFxFMDBGXFxcIjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b29sdGlwLXJvdyB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRvb2x0aXAtcm93LWxhYmVsIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgICAgICAgICBmbGV4OiBhdXRvO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRvb2x0aXAtcm93LWxhYmVsIHByb2dyZXNzIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDZweDtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRvb2x0aXAtcm93LWxhYmVsIHByb2dyZXNzOjotd2Via2l0LXByb2dyZXNzLWJhciB7XFxuICAgICAgICAgICAgY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRvb2x0aXAtcm93LWxhYmVsIHByb2dyZXNzOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9vbHRpcC1yb3c6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2U2ZTdlODtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5lbnRyeS1pY29uIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTJweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5lbnRyeS1sYWJlbCB7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICAgIGZsZXg6IGF1dG87XFxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgICAgIH1cXG4gICAgPC9zdHlsZT5cXG4gICAgPGRpdiBjbGFzcz1cXFwidG9vbHRpcC1jb250YWluZXJcXFwiPlxcbiAgICA8L2Rpdj5cXG5cXG5cIjtcbnZhciBpY29uTWFwcGluZyA9IHtcbiAgICAnTG9jYXRpb24nOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvNjg0LzY4NDkwOC5wbmcnLFxuICAgICdQcm9kdWN0JzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzEzMTIvMTMxMjA5MS5wbmcnLFxuICAgICdTYWxlcyBNYW5hZ2VyJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzQyMDUvNDIwNTkwNi5wbmcnLFxuICAgICdPcmlnaW5hbCBTYWxlcyBQcmljZSc6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC83OTEvNzkxOTY4LnBuZycsXG4gICAgJ0RhdGUnOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvNDI1LzQyNTg2OC5wbmcnLFxuICAgICdTdG9yZSc6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC85OTc3Lzk5Nzc1ODkucG5nJyxcbiAgICAnQ2F0ZWdvcnknOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvMTAwMDgvMTAwMDg1MTcucG5nJyxcbiAgICAnR3Jvc3MgTWFyZ2luJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzQ2NDcvNDY0Nzc2My5wbmcnLFxuICAgICdEaXNjb3VudCc6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC83MjYvNzI2NDc2LnBuZycsXG4gICAgJ1ByaWNlIChmaXhlZCknOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvOTE5LzkxOTc5MC5wbmcnLFxuICAgICdRdWFudGl0eSBTb2xkJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzMzMzgvMzMzODYzMi5wbmcnLFxufTtcbnZhciB0b29sdGlwRW50cnlUb1JvdyA9IGZ1bmN0aW9uIChlbnRyeSwgd2l0aFBlcmNlbnRhZ2VCYXIsIG1heCkge1xuICAgIGlmICh3aXRoUGVyY2VudGFnZUJhciA9PT0gdm9pZCAwKSB7IHdpdGhQZXJjZW50YWdlQmFyID0gZmFsc2U7IH1cbiAgICBpZiAobWF4ID09PSB2b2lkIDApIHsgbWF4ID0gMTAwOyB9XG4gICAgdmFyIHJvd0VsZW1lbnQgPSByb3dUZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICB2YXIgaWNvbkVsID0gcm93RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZW50cnktaWNvbicpO1xuICAgIHZhciBsYWJlbEVsID0gcm93RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZW50cnktbGFiZWwnKTtcbiAgICBpY29uRWwuc2V0QXR0cmlidXRlKCdzcmMnLCBpY29uTWFwcGluZ1tlbnRyeS50aXRsZV0pO1xuICAgIGljb25FbC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgZW50cnkudGl0bGUpO1xuICAgIGxhYmVsRWwudGV4dENvbnRlbnQgPSBlbnRyeS52YWx1ZTtcbiAgICBpZiAod2l0aFBlcmNlbnRhZ2VCYXIpIHtcbiAgICAgICAgdmFyIHBlcmNlbnRhZ2VCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcm9ncmVzcycpO1xuICAgICAgICBwZXJjZW50YWdlQmFyLnZhbHVlID0gTnVtYmVyKC9bLjAtOV0rLy5leGVjKGVudHJ5LnZhbHVlKVswXSk7XG4gICAgICAgIHBlcmNlbnRhZ2VCYXIubWF4ID0gbWF4O1xuICAgICAgICB2YXIgcm93TGFiZWxEaXYgPSByb3dFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b29sdGlwLXJvdy1sYWJlbCcpO1xuICAgICAgICAvLyAocGVyY2VudGFnZUJhciBhcyBIVE1MRWxlbWVudCkuc3R5bGVbJ3dpZHRoJ10gPSAnMTAwJSc7XG4gICAgICAgIHJvd0xhYmVsRGl2LmFwcGVuZENoaWxkKHBlcmNlbnRhZ2VCYXIpO1xuICAgIH1cbiAgICByZXR1cm4gcm93RWxlbWVudDtcbn07XG52YXIgVml6VG9vbHRpcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVml6VG9vbHRpcCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBWaXpUb29sdGlwKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fbWF4ID0gMTAwO1xuICAgICAgICBfdGhpcy5fY29sb3IgPSAnbGlnaHRibHVlJztcbiAgICAgICAgX3RoaXMuX3NoYWRvd1Jvb3QgPSBfdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgIF90aGlzLl9zaGFkb3dSb290LmFwcGVuZENoaWxkKGNvbnRhaW5lclRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgX3RoaXMuX3Rvb2x0aXBDb250YWluZXIgPSBfdGhpcy5fc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcC1jb250YWluZXInKTtcbiAgICAgICAgX3RoaXMuX3Byb3BzID0ge307XG4gICAgICAgIF90aGlzLnJlbmRlcigpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFZpelRvb2x0aXAucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5fdG9vbHRpcENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgaWYgKHRoaXMuX3Byb3BzLmhlYWRlclByb3BzKSB7XG4gICAgICAgICAgICB2YXIgaGVhZGVyRW50aXRpZXMgPSB0aGlzLl9wcm9wcy5oZWFkZXJQcm9wcy5oZWFkZXJFbnRpdGllcztcbiAgICAgICAgICAgIGhlYWRlckVudGl0aWVzID09PSBudWxsIHx8IGhlYWRlckVudGl0aWVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBoZWFkZXJFbnRpdGllcy5mb3JFYWNoKGZ1bmN0aW9uIChoZWFkZXJFbnRyeSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl90b29sdGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvb2x0aXBFbnRyeVRvUm93KGhlYWRlckVudHJ5LCB0cnVlLCBfdGhpcy5fbWF4KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fcHJvcHMuZGV0YWlsc1Byb3BzKSB7XG4gICAgICAgICAgICB2YXIgZGV0YWlsc0VudGl0aWVzID0gdGhpcy5fcHJvcHMuZGV0YWlsc1Byb3BzLmRldGFpbHNFbnRpdGllcztcbiAgICAgICAgICAgIGRldGFpbHNFbnRpdGllcyA9PT0gbnVsbCB8fCBkZXRhaWxzRW50aXRpZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRldGFpbHNFbnRpdGllcy5mb3JFYWNoKGZ1bmN0aW9uIChkZXRhaWxFbnRyeSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl90b29sdGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvb2x0aXBFbnRyeVRvUm93KGRldGFpbEVudHJ5KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY29sb3IpIHtcbiAgICAgICAgICAgIHZhciBwZXJjZW50YWdlQ29sb3JSZWcgPSAvcHJvZ3Jlc3M6OlxcLXdlYmtpdFxcLXByb2dyZXNzXFwtdmFsdWVcXHMrXFx7XFxzK2JhY2tncm91bmQtY29sb3I6XFxzK1sjYS16MC05XStcXHM/O1xccyt9LztcbiAgICAgICAgICAgIHZhciBzdHlsZUVsZW1lbnQgPSB0aGlzLl9zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlJyk7XG4gICAgICAgICAgICB2YXIgc3R5bGVDb250ZW50ID0gc3R5bGVFbGVtZW50LnRleHRDb250ZW50LnJlcGxhY2UocGVyY2VudGFnZUNvbG9yUmVnLCBcInByb2dyZXNzOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHsgYmFja2dyb3VuZC1jb2xvcjogXCIuY29uY2F0KHRoaXMuX2NvbG9yLCBcIjsgfVwiKSk7XG4gICAgICAgICAgICBzdHlsZUVsZW1lbnQuaW5uZXJIVE1MID0gc3R5bGVDb250ZW50O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBWaXpUb29sdGlwLnByb3RvdHlwZS5zZXRFeHRlbnNpb25EYXRhID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3Byb3BzID0ge1xuICAgICAgICAgICAgaGVhZGVyUHJvcHM6IHZhbHVlLmhlYWRlcixcbiAgICAgICAgICAgIGRldGFpbHNQcm9wczogdmFsdWUuZGV0YWlscyxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWaXpUb29sdGlwLnByb3RvdHlwZSwgXCJtYXhcIiwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbWF4ID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZpelRvb2x0aXAucHJvdG90eXBlLCBcImNvbG9yXCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIFZpelRvb2x0aXA7XG59KEhUTUxFbGVtZW50KSk7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3Zpei10b29sdGlwJywgVml6VG9vbHRpcCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvVml6VG9vbHRpcC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==