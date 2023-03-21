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
    // 'Original Sales Price': 'https://cdn-icons-png.flaticon.com/128/791/791968.png',
    'Date': 'https://cdn-icons-png.flaticon.com/128/425/425868.png',
    'Store': 'https://cdn-icons-png.flaticon.com/128/9977/9977589.png',
    'Category': 'https://cdn-icons-png.flaticon.com/128/10008/10008517.png',
    // 'Gross Margin': 'https://cdn-icons-png.flaticon.com/128/4647/4647763.png',
    // 'Discount': 'https://cdn-icons-png.flaticon.com/128/726/726476.png',
    'Price (fixed)': 'https://cdn-icons-png.flaticon.com/128/919/919790.png',
    'Quantity Sold': 'https://cdn-icons-png.flaticon.com/128/3338/3338632.png',
    'California': 'https://cdn-icons-png.flaticon.com/128/7906/7906455.png',
    'Nevada': 'https://cdn-icons-png.flaticon.com/128/7906/7906606.png',
    'Oregon': 'https://cdn-icons-png.flaticon.com/128/7906/7906729.png',
    'Carbonated Drinks': 'https://cdn-icons-png.flaticon.com/128/4329/4329542.png',
    'Juices': 'https://cdn-icons-png.flaticon.com/128/3165/3165589.png',
    'Alcohol': 'https://cdn-icons-png.flaticon.com/128/3174/3174535.png',
    'Others': 'https://cdn-icons-png.flaticon.com/128/2521/2521122.png',
    'Gross Margin': 'https://cdn-icons-png.flaticon.com/128/5047/5047713.png',
    'Discount': 'https://cdn-icons-png.flaticon.com/128/726/726476.png',
    'Original Sales Price': 'https://cdn-icons-png.flaticon.com/128/6895/6895168.png',
    'City': 'https://cdn-icons-png.flaticon.com/128/1719/1719666.png'
};
var tooltipEntryToRow = function (entry, withPercentageBar, max) {
    if (withPercentageBar === void 0) { withPercentageBar = false; }
    if (max === void 0) { max = 100; }
    var rowElement = rowTemplate.content.cloneNode(true);
    var iconEl = rowElement.querySelector('.entry-icon');
    var labelEl = rowElement.querySelector('.entry-label');
    iconEl.setAttribute('src', iconMapping[entry.value] || iconMapping[entry.title]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LXRvb2x0aXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsbUhBQW1ILG9CQUFvQixvQkFBb0IsbUNBQW1DLGlEQUFpRCxtSUFBbUk7O0FBRWxZLENBQUM7Ozs7Ozs7Ozs7OztBQ2RZO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0Isc0NBQXNDLGtCQUFrQjtBQUN2Riw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFPLENBQUMsZ0pBQTREO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCw2QkFBNkIsOEJBQThCLCtCQUErQiwrQkFBK0IsV0FBVyxnQ0FBZ0MsNEJBQTRCLDRCQUE0Qiw4QkFBOEIsK0JBQStCLHVDQUF1QyxXQUFXLDRCQUE0QixxQ0FBcUMsa0NBQWtDLFdBQVcsOEJBQThCLHFDQUFxQyxrQ0FBa0MsV0FBVyw4QkFBOEIscUNBQXFDLGlDQUFpQyxXQUFXLCtCQUErQixxQ0FBcUMsaUNBQWlDLFdBQVcsNEJBQTRCLHFDQUFxQyxpQ0FBaUMsV0FBVywwQkFBMEIsNEJBQTRCLCtCQUErQixvQ0FBb0Msa0NBQWtDLFdBQVcsZ0NBQWdDLDRCQUE0Qix1Q0FBdUMseUJBQXlCLFdBQVcseUNBQXlDLDBCQUEwQiwwQkFBMEIsK0JBQStCLFdBQVcsK0RBQStELCtCQUErQixxQ0FBcUMsV0FBVyxpRUFBaUUsb0NBQW9DLFdBQVcsNkNBQTZDLCtDQUErQyxXQUFXLHlCQUF5QixvQ0FBb0MsMEJBQTBCLGtDQUFrQyxXQUFXLDBCQUEwQixvQ0FBb0MseUJBQXlCLHFDQUFxQyxXQUFXO0FBQ3Q5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QywwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsY0FBYztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSw4RUFBOEUscUNBQXFDLElBQUk7QUFDdkg7QUFDQSx3SEFBd0gsNENBQTRDO0FBQ3BLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7O1VDN0hBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aWRnZXQtYWRkLW9ucy8uL25vZGVfbW9kdWxlcy9Ad2ViY29tcG9uZW50cy93ZWJjb21wb25lbnRzanMvY3VzdG9tLWVsZW1lbnRzLWVzNS1hZGFwdGVyLmpzIiwid2VicGFjazovL3dpZGdldC1hZGQtb25zLy4vc3JjL1ZpelRvb2x0aXAudHMiLCJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbnMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93aWRnZXQtYWRkLW9ucy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbnMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2UgQG5vY29tcGlsZVxuQ29weXJpZ2h0IChjKSAyMDE4IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgKGZ1bmN0aW9uKCl7aWYodm9pZCAwPT09d2luZG93LlJlZmxlY3R8fHZvaWQgMD09PXdpbmRvdy5jdXN0b21FbGVtZW50c3x8d2luZG93LmN1c3RvbUVsZW1lbnRzLnBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2spcmV0dXJuO2NvbnN0IGE9SFRNTEVsZW1lbnQ7d2luZG93LkhUTUxFbGVtZW50PXtIVE1MRWxlbWVudDpmdW5jdGlvbiBIVE1MRWxlbWVudCgpe3JldHVybiBSZWZsZWN0LmNvbnN0cnVjdChhLFtdLHRoaXMuY29uc3RydWN0b3IpfX0uSFRNTEVsZW1lbnQsSFRNTEVsZW1lbnQucHJvdG90eXBlPWEucHJvdG90eXBlLEhUTUxFbGVtZW50LnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1IVE1MRWxlbWVudCxPYmplY3Quc2V0UHJvdG90eXBlT2YoSFRNTEVsZW1lbnQsYSk7fSkoKTtcblxufSgpKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCJAd2ViY29tcG9uZW50cy93ZWJjb21wb25lbnRzanMvY3VzdG9tLWVsZW1lbnRzLWVzNS1hZGFwdGVyXCIpO1xudmFyIHJvd1RlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnJvd1RlbXBsYXRlLmlubmVySFRNTCA9IFwiXFxuICAgIDxkaXYgY2xhc3M9XFxcInRvb2x0aXAtcm93XFxcIj5cXG4gICAgICAgIDxpbWcgY2xhc3M9XFxcImVudHJ5LWljb25cXFwiXFxuICAgICAgICAgICAgd2lkdGg9XFxcIjIwXFxcIlxcbiAgICAgICAgICAgIGhlaWdodD1cXFwiMjBcXFwiXFxuICAgICAgICA+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b29sdGlwLXJvdy1sYWJlbFxcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImVudHJ5LWxhYmVsXFxcIj48L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXCI7XG52YXIgY29udGFpbmVyVGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuY29udGFpbmVyVGVtcGxhdGUuaW5uZXJIVE1MID0gXCJcXG4gICAgPHN0eWxlPlxcbiAgICAgICAgOmhvc3Qge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIG1pbi13aWR0aDogODBweDtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI0cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9vbHRpcC1jb250YWluZXIge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBtaW4td2lkdGg6IDgwcHg7XFxuICAgICAgICAgICAgbWluLWhlaWdodDogMjRweDtcXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAucHJpY2U6OmJlZm9yZSB7XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFNBUC1pY29ucztcXG4gICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcXEUwMjZcXFwiO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm1hbmFnZXI6OmJlZm9yZSB7XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFNBUC1pY29ucztcXG4gICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcXEUwMzZcXFwiO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByb2R1Y3Q6OmJlZm9yZSB7XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFNBUC1pY29ucztcXG4gICAgICAgICAgICBjb250ZW50IFxcXCJcXFxcRTE2RFxcXCI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubG9jYXRpb246OmJlZm9yZSB7XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFNBUC1pY29ucztcXG4gICAgICAgICAgICBjb250ZW50IFxcXCJcXFxcRTAyMVxcXCI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc3RvcmU6OmJlZm9yZSB7XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFNBUC1pY29ucztcXG4gICAgICAgICAgICBjb250ZW50IFxcXCJcXFxcRTAwRlxcXCI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9vbHRpcC1yb3cge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgbWluLWhlaWdodDogMzBweDtcXG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b29sdGlwLXJvdy1sYWJlbCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgICAgICAgICAgZmxleDogYXV0bztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b29sdGlwLXJvdy1sYWJlbCBwcm9ncmVzcyB7XFxuICAgICAgICAgICAgaGVpZ2h0OiA2cHg7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b29sdGlwLXJvdy1sYWJlbCBwcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy1iYXIge1xcbiAgICAgICAgICAgIGNvbG9yOiBsaWdodGJsdWU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b29sdGlwLXJvdy1sYWJlbCBwcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRvb2x0aXAtcm93Om5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNlNmU3ZTg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZW50cnktaWNvbiB7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZW50cnktbGFiZWwge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICBmbGV4OiBhdXRvO1xcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgICAgICB9XFxuICAgIDwvc3R5bGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRvb2x0aXAtY29udGFpbmVyXFxcIj5cXG4gICAgPC9kaXY+XFxuXFxuXCI7XG52YXIgaWNvbk1hcHBpbmcgPSB7XG4gICAgJ0xvY2F0aW9uJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzY4NC82ODQ5MDgucG5nJyxcbiAgICAnUHJvZHVjdCc6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC8xMzEyLzEzMTIwOTEucG5nJyxcbiAgICAnU2FsZXMgTWFuYWdlcic6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC80MjA1LzQyMDU5MDYucG5nJyxcbiAgICAvLyAnT3JpZ2luYWwgU2FsZXMgUHJpY2UnOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvNzkxLzc5MTk2OC5wbmcnLFxuICAgICdEYXRlJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzQyNS80MjU4NjgucG5nJyxcbiAgICAnU3RvcmUnOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvOTk3Ny85OTc3NTg5LnBuZycsXG4gICAgJ0NhdGVnb3J5JzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzEwMDA4LzEwMDA4NTE3LnBuZycsXG4gICAgLy8gJ0dyb3NzIE1hcmdpbic6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC80NjQ3LzQ2NDc3NjMucG5nJyxcbiAgICAvLyAnRGlzY291bnQnOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvNzI2LzcyNjQ3Ni5wbmcnLFxuICAgICdQcmljZSAoZml4ZWQpJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzkxOS85MTk3OTAucG5nJyxcbiAgICAnUXVhbnRpdHkgU29sZCc6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC8zMzM4LzMzMzg2MzIucG5nJyxcbiAgICAnQ2FsaWZvcm5pYSc6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC83OTA2Lzc5MDY0NTUucG5nJyxcbiAgICAnTmV2YWRhJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4Lzc5MDYvNzkwNjYwNi5wbmcnLFxuICAgICdPcmVnb24nOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvNzkwNi83OTA2NzI5LnBuZycsXG4gICAgJ0NhcmJvbmF0ZWQgRHJpbmtzJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzQzMjkvNDMyOTU0Mi5wbmcnLFxuICAgICdKdWljZXMnOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvMzE2NS8zMTY1NTg5LnBuZycsXG4gICAgJ0FsY29ob2wnOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvMzE3NC8zMTc0NTM1LnBuZycsXG4gICAgJ090aGVycyc6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC8yNTIxLzI1MjExMjIucG5nJyxcbiAgICAnR3Jvc3MgTWFyZ2luJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzUwNDcvNTA0NzcxMy5wbmcnLFxuICAgICdEaXNjb3VudCc6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC83MjYvNzI2NDc2LnBuZycsXG4gICAgJ09yaWdpbmFsIFNhbGVzIFByaWNlJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzY4OTUvNjg5NTE2OC5wbmcnLFxuICAgICdDaXR5JzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzE3MTkvMTcxOTY2Ni5wbmcnXG59O1xudmFyIHRvb2x0aXBFbnRyeVRvUm93ID0gZnVuY3Rpb24gKGVudHJ5LCB3aXRoUGVyY2VudGFnZUJhciwgbWF4KSB7XG4gICAgaWYgKHdpdGhQZXJjZW50YWdlQmFyID09PSB2b2lkIDApIHsgd2l0aFBlcmNlbnRhZ2VCYXIgPSBmYWxzZTsgfVxuICAgIGlmIChtYXggPT09IHZvaWQgMCkgeyBtYXggPSAxMDA7IH1cbiAgICB2YXIgcm93RWxlbWVudCA9IHJvd1RlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgIHZhciBpY29uRWwgPSByb3dFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbnRyeS1pY29uJyk7XG4gICAgdmFyIGxhYmVsRWwgPSByb3dFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbnRyeS1sYWJlbCcpO1xuICAgIGljb25FbC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGljb25NYXBwaW5nW2VudHJ5LnZhbHVlXSB8fCBpY29uTWFwcGluZ1tlbnRyeS50aXRsZV0pO1xuICAgIGljb25FbC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgZW50cnkudGl0bGUpO1xuICAgIGxhYmVsRWwudGV4dENvbnRlbnQgPSBlbnRyeS52YWx1ZTtcbiAgICBpZiAod2l0aFBlcmNlbnRhZ2VCYXIpIHtcbiAgICAgICAgdmFyIHBlcmNlbnRhZ2VCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcm9ncmVzcycpO1xuICAgICAgICBwZXJjZW50YWdlQmFyLnZhbHVlID0gTnVtYmVyKC9bLjAtOV0rLy5leGVjKGVudHJ5LnZhbHVlKVswXSk7XG4gICAgICAgIHBlcmNlbnRhZ2VCYXIubWF4ID0gbWF4O1xuICAgICAgICB2YXIgcm93TGFiZWxEaXYgPSByb3dFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b29sdGlwLXJvdy1sYWJlbCcpO1xuICAgICAgICAvLyAocGVyY2VudGFnZUJhciBhcyBIVE1MRWxlbWVudCkuc3R5bGVbJ3dpZHRoJ10gPSAnMTAwJSc7XG4gICAgICAgIHJvd0xhYmVsRGl2LmFwcGVuZENoaWxkKHBlcmNlbnRhZ2VCYXIpO1xuICAgIH1cbiAgICByZXR1cm4gcm93RWxlbWVudDtcbn07XG52YXIgVml6VG9vbHRpcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVml6VG9vbHRpcCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBWaXpUb29sdGlwKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fbWF4ID0gMTAwO1xuICAgICAgICBfdGhpcy5fY29sb3IgPSAnbGlnaHRibHVlJztcbiAgICAgICAgX3RoaXMuX3NoYWRvd1Jvb3QgPSBfdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgIF90aGlzLl9zaGFkb3dSb290LmFwcGVuZENoaWxkKGNvbnRhaW5lclRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgX3RoaXMuX3Rvb2x0aXBDb250YWluZXIgPSBfdGhpcy5fc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcC1jb250YWluZXInKTtcbiAgICAgICAgX3RoaXMuX3Byb3BzID0ge307XG4gICAgICAgIF90aGlzLnJlbmRlcigpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFZpelRvb2x0aXAucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5fdG9vbHRpcENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgaWYgKHRoaXMuX3Byb3BzLmhlYWRlclByb3BzKSB7XG4gICAgICAgICAgICB2YXIgaGVhZGVyRW50aXRpZXMgPSB0aGlzLl9wcm9wcy5oZWFkZXJQcm9wcy5oZWFkZXJFbnRpdGllcztcbiAgICAgICAgICAgIGhlYWRlckVudGl0aWVzID09PSBudWxsIHx8IGhlYWRlckVudGl0aWVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBoZWFkZXJFbnRpdGllcy5mb3JFYWNoKGZ1bmN0aW9uIChoZWFkZXJFbnRyeSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl90b29sdGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvb2x0aXBFbnRyeVRvUm93KGhlYWRlckVudHJ5LCB0cnVlLCBfdGhpcy5fbWF4KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fcHJvcHMuZGV0YWlsc1Byb3BzKSB7XG4gICAgICAgICAgICB2YXIgZGV0YWlsc0VudGl0aWVzID0gdGhpcy5fcHJvcHMuZGV0YWlsc1Byb3BzLmRldGFpbHNFbnRpdGllcztcbiAgICAgICAgICAgIGRldGFpbHNFbnRpdGllcyA9PT0gbnVsbCB8fCBkZXRhaWxzRW50aXRpZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRldGFpbHNFbnRpdGllcy5mb3JFYWNoKGZ1bmN0aW9uIChkZXRhaWxFbnRyeSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl90b29sdGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvb2x0aXBFbnRyeVRvUm93KGRldGFpbEVudHJ5KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY29sb3IpIHtcbiAgICAgICAgICAgIHZhciBwZXJjZW50YWdlQ29sb3JSZWcgPSAvcHJvZ3Jlc3M6OlxcLXdlYmtpdFxcLXByb2dyZXNzXFwtdmFsdWVcXHMrXFx7XFxzK2JhY2tncm91bmQtY29sb3I6XFxzK1sjYS16MC05XStcXHM/O1xccyt9LztcbiAgICAgICAgICAgIHZhciBzdHlsZUVsZW1lbnQgPSB0aGlzLl9zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlJyk7XG4gICAgICAgICAgICB2YXIgc3R5bGVDb250ZW50ID0gc3R5bGVFbGVtZW50LnRleHRDb250ZW50LnJlcGxhY2UocGVyY2VudGFnZUNvbG9yUmVnLCBcInByb2dyZXNzOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHsgYmFja2dyb3VuZC1jb2xvcjogXCIuY29uY2F0KHRoaXMuX2NvbG9yLCBcIjsgfVwiKSk7XG4gICAgICAgICAgICBzdHlsZUVsZW1lbnQuaW5uZXJIVE1MID0gc3R5bGVDb250ZW50O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBWaXpUb29sdGlwLnByb3RvdHlwZS5zZXRFeHRlbnNpb25EYXRhID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3Byb3BzID0ge1xuICAgICAgICAgICAgaGVhZGVyUHJvcHM6IHZhbHVlLmhlYWRlcixcbiAgICAgICAgICAgIGRldGFpbHNQcm9wczogdmFsdWUuZGV0YWlscyxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWaXpUb29sdGlwLnByb3RvdHlwZSwgXCJtYXhcIiwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbWF4ID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZpelRvb2x0aXAucHJvdG90eXBlLCBcImNvbG9yXCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIFZpelRvb2x0aXA7XG59KEhUTUxFbGVtZW50KSk7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3Zpei10b29sdGlwJywgVml6VG9vbHRpcCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvVml6VG9vbHRpcC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==