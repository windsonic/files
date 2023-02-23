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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/vizTooltip.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LXRvb2x0aXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLG1IQUFtSCxvQkFBb0Isb0JBQW9CLG1DQUFtQyxpREFBaUQsbUlBQW1JOztBQUVsWSxDQUFDOzs7Ozs7Ozs7Ozs7QUNmWTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCLHNDQUFzQyxrQkFBa0I7QUFDdkYsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBTyxDQUFDLGdKQUE0RDtBQUNwRTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsNkJBQTZCLDhCQUE4QiwrQkFBK0IsK0JBQStCLFdBQVcsZ0NBQWdDLDRCQUE0Qiw4QkFBOEIsK0JBQStCLHVDQUF1QyxXQUFXLDRCQUE0QixxQ0FBcUMsa0NBQWtDLFdBQVcsOEJBQThCLHFDQUFxQyxrQ0FBa0MsV0FBVyw4QkFBOEIscUNBQXFDLGlDQUFpQyxXQUFXLCtCQUErQixxQ0FBcUMsaUNBQWlDLFdBQVcsNEJBQTRCLHFDQUFxQyxpQ0FBaUMsV0FBVywwQkFBMEIsNEJBQTRCLCtCQUErQixvQ0FBb0Msa0NBQWtDLFdBQVcsZ0NBQWdDLDRCQUE0Qix1Q0FBdUMseUJBQXlCLFdBQVcseUNBQXlDLDBCQUEwQiwwQkFBMEIsK0JBQStCLFdBQVcsK0RBQStELCtCQUErQixxQ0FBcUMsV0FBVyxpRUFBaUUsb0NBQW9DLFdBQVcsNkNBQTZDLCtDQUErQyxXQUFXLHlCQUF5QixvQ0FBb0MsMEJBQTBCLGtDQUFrQyxXQUFXLDBCQUEwQixvQ0FBb0MseUJBQXlCLHFDQUFxQyxXQUFXO0FBQzE3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QywwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGNBQWM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsOEVBQThFLHFDQUFxQyxJQUFJO0FBQ3ZIO0FBQ0Esd0hBQXdILDRDQUE0QztBQUNwSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDs7Ozs7OztVQzFHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbnMvLi9ub2RlX21vZHVsZXMvQHdlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzL2N1c3RvbS1lbGVtZW50cy1lczUtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly93aWRnZXQtYWRkLW9ucy8uL3NyYy92aXpUb29sdGlwLnRzIiwid2VicGFjazovL3dpZGdldC1hZGQtb25zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dpZGdldC1hZGQtb25zL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbnMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dpZGdldC1hZGQtb25zL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuQGxpY2Vuc2UgQG5vY29tcGlsZVxuQ29weXJpZ2h0IChjKSAyMDE4IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgKGZ1bmN0aW9uKCl7aWYodm9pZCAwPT09d2luZG93LlJlZmxlY3R8fHZvaWQgMD09PXdpbmRvdy5jdXN0b21FbGVtZW50c3x8d2luZG93LmN1c3RvbUVsZW1lbnRzLnBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2spcmV0dXJuO2NvbnN0IGE9SFRNTEVsZW1lbnQ7d2luZG93LkhUTUxFbGVtZW50PXtIVE1MRWxlbWVudDpmdW5jdGlvbiBIVE1MRWxlbWVudCgpe3JldHVybiBSZWZsZWN0LmNvbnN0cnVjdChhLFtdLHRoaXMuY29uc3RydWN0b3IpfX0uSFRNTEVsZW1lbnQsSFRNTEVsZW1lbnQucHJvdG90eXBlPWEucHJvdG90eXBlLEhUTUxFbGVtZW50LnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1IVE1MRWxlbWVudCxPYmplY3Quc2V0UHJvdG90eXBlT2YoSFRNTEVsZW1lbnQsYSk7fSkoKTtcblxufSgpKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCJAd2ViY29tcG9uZW50cy93ZWJjb21wb25lbnRzanMvY3VzdG9tLWVsZW1lbnRzLWVzNS1hZGFwdGVyXCIpO1xudmFyIHJvd1RlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnJvd1RlbXBsYXRlLmlubmVySFRNTCA9IFwiXFxuICAgIDxkaXYgY2xhc3M9XFxcInRvb2x0aXAtcm93XFxcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJlbnRyeS1pY29uXFxcIj48L3NwYW4+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b29sdGlwLXJvdy1sYWJlbFxcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImVudHJ5LWxhYmVsXFxcIj48L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXCI7XG52YXIgY29udGFpbmVyVGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuY29udGFpbmVyVGVtcGxhdGUuaW5uZXJIVE1MID0gXCJcXG4gICAgPHN0eWxlPlxcbiAgICAgICAgOmhvc3Qge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIG1pbi13aWR0aDogODBweDtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI0cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9vbHRpcC1jb250YWluZXIge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI0cHg7XFxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByaWNlOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTQVAtaWNvbnM7XFxuICAgICAgICAgICAgY29udGVudDogXFxcIlxcXFxFMDI2XFxcIjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tYW5hZ2VyOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTQVAtaWNvbnM7XFxuICAgICAgICAgICAgY29udGVudDogXFxcIlxcXFxFMDM2XFxcIjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5wcm9kdWN0OjpiZWZvcmUge1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTQVAtaWNvbnM7XFxuICAgICAgICAgICAgY29udGVudCBcXFwiXFxcXEUxNkRcXFwiO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmxvY2F0aW9uOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTQVAtaWNvbnM7XFxuICAgICAgICAgICAgY29udGVudCBcXFwiXFxcXEUwMjFcXFwiO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnN0b3JlOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTQVAtaWNvbnM7XFxuICAgICAgICAgICAgY29udGVudCBcXFwiXFxcXEUwMEZcXFwiO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRvb2x0aXAtcm93IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9vbHRpcC1yb3ctbGFiZWwge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICAgICAgICAgIGZsZXg6IGF1dG87XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9vbHRpcC1yb3ctbGFiZWwgcHJvZ3Jlc3Mge1xcbiAgICAgICAgICAgIGhlaWdodDogNnB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9vbHRpcC1yb3ctbGFiZWwgcHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtYmFyIHtcXG4gICAgICAgICAgICBjb2xvcjogbGlnaHRibHVlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9vbHRpcC1yb3ctbGFiZWwgcHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b29sdGlwLXJvdzpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZTZlN2U4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmVudHJ5LWljb24ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmVudHJ5LWxhYmVsIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgZmxleDogYXV0bztcXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICAgICAgfVxcbiAgICA8L3N0eWxlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0b29sdGlwLWNvbnRhaW5lclxcXCI+XFxuICAgIDwvZGl2PlxcblxcblwiO1xudmFyIGljb25NYXBwaW5nID0ge1xuICAgICdMb2NhdGlvbic6ICdsb2NhdGlvbicsXG4gICAgJ1Byb2R1Y3QnOiAncHJvZHVjdCcsXG4gICAgJ1NhbGVzIE1hbmFnZXInOiAnbWFuYWdlcicsXG4gICAgJ09yaWdpbmFsIFNhbGVzIFByaWNlJzogJ3ByaWNlJyxcbn07XG52YXIgdG9vbHRpcEVudHJ5VG9Sb3cgPSBmdW5jdGlvbiAoZW50cnksIHdpdGhQZXJjZW50YWdlQmFyLCBtYXgpIHtcbiAgICBpZiAod2l0aFBlcmNlbnRhZ2VCYXIgPT09IHZvaWQgMCkgeyB3aXRoUGVyY2VudGFnZUJhciA9IGZhbHNlOyB9XG4gICAgaWYgKG1heCA9PT0gdm9pZCAwKSB7IG1heCA9IDEwMDsgfVxuICAgIHZhciByb3dFbGVtZW50ID0gcm93VGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgdmFyIGljb25FbCA9IHJvd0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVudHJ5LWljb24nKTtcbiAgICB2YXIgbGFiZWxFbCA9IHJvd0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVudHJ5LWxhYmVsJyk7XG4gICAgaWNvbkVsLmNsYXNzTGlzdC5hZGQoaWNvbk1hcHBpbmdbZW50cnkudGl0bGVdKTtcbiAgICBsYWJlbEVsLnRleHRDb250ZW50ID0gZW50cnkudmFsdWU7XG4gICAgaWYgKHdpdGhQZXJjZW50YWdlQmFyKSB7XG4gICAgICAgIHZhciBwZXJjZW50YWdlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJvZ3Jlc3MnKTtcbiAgICAgICAgcGVyY2VudGFnZUJhci52YWx1ZSA9IE51bWJlcigvWy4wLTldKy8uZXhlYyhlbnRyeS52YWx1ZSlbMF0pO1xuICAgICAgICBwZXJjZW50YWdlQmFyLm1heCA9IG1heDtcbiAgICAgICAgdmFyIHJvd0xhYmVsRGl2ID0gcm93RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcC1yb3ctbGFiZWwnKTtcbiAgICAgICAgLy8gKHBlcmNlbnRhZ2VCYXIgYXMgSFRNTEVsZW1lbnQpLnN0eWxlWyd3aWR0aCddID0gJzEwMCUnO1xuICAgICAgICByb3dMYWJlbERpdi5hcHBlbmRDaGlsZChwZXJjZW50YWdlQmFyKTtcbiAgICB9XG4gICAgcmV0dXJuIHJvd0VsZW1lbnQ7XG59O1xudmFyIFZpelRvb2x0aXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFZpelRvb2x0aXAsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVml6VG9vbHRpcCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX21heCA9IDEwMDtcbiAgICAgICAgX3RoaXMuX2NvbG9yID0gJ2xpZ2h0Ymx1ZSc7XG4gICAgICAgIF90aGlzLl9zaGFkb3dSb290ID0gX3RoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICBfdGhpcy5fc2hhZG93Um9vdC5hcHBlbmRDaGlsZChjb250YWluZXJUZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIF90aGlzLl90b29sdGlwQ29udGFpbmVyID0gX3RoaXMuX3NoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLnRvb2x0aXAtY29udGFpbmVyJyk7XG4gICAgICAgIF90aGlzLl9wcm9wcyA9IHt9O1xuICAgICAgICBfdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBWaXpUb29sdGlwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX3Rvb2x0aXBDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICh0aGlzLl9wcm9wcy5oZWFkZXJQcm9wcykge1xuICAgICAgICAgICAgdmFyIGhlYWRlckVudGl0aWVzID0gdGhpcy5fcHJvcHMuaGVhZGVyUHJvcHMuaGVhZGVyRW50aXRpZXM7XG4gICAgICAgICAgICBoZWFkZXJFbnRpdGllcyA9PT0gbnVsbCB8fCBoZWFkZXJFbnRpdGllcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGVhZGVyRW50aXRpZXMuZm9yRWFjaChmdW5jdGlvbiAoaGVhZGVyRW50cnkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fdG9vbHRpcENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b29sdGlwRW50cnlUb1JvdyhoZWFkZXJFbnRyeSwgdHJ1ZSwgX3RoaXMuX21heCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3Byb3BzLmRldGFpbHNQcm9wcykge1xuICAgICAgICAgICAgdmFyIGRldGFpbHNFbnRpdGllcyA9IHRoaXMuX3Byb3BzLmRldGFpbHNQcm9wcy5kZXRhaWxzRW50aXRpZXM7XG4gICAgICAgICAgICBkZXRhaWxzRW50aXRpZXMgPT09IG51bGwgfHwgZGV0YWlsc0VudGl0aWVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZXRhaWxzRW50aXRpZXMuZm9yRWFjaChmdW5jdGlvbiAoZGV0YWlsRW50cnkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fdG9vbHRpcENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b29sdGlwRW50cnlUb1JvdyhkZXRhaWxFbnRyeSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2NvbG9yKSB7XG4gICAgICAgICAgICB2YXIgcGVyY2VudGFnZUNvbG9yUmVnID0gL3Byb2dyZXNzOjpcXC13ZWJraXRcXC1wcm9ncmVzc1xcLXZhbHVlXFxzK1xce1xccytiYWNrZ3JvdW5kLWNvbG9yOlxccytbI2EtejAtOV0rXFxzPztcXHMrfS87XG4gICAgICAgICAgICB2YXIgc3R5bGVFbGVtZW50ID0gdGhpcy5fc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdzdHlsZScpO1xuICAgICAgICAgICAgdmFyIHN0eWxlQ29udGVudCA9IHN0eWxlRWxlbWVudC50ZXh0Q29udGVudC5yZXBsYWNlKHBlcmNlbnRhZ2VDb2xvclJlZywgXCJwcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7IGJhY2tncm91bmQtY29sb3I6IFwiLmNvbmNhdCh0aGlzLl9jb2xvciwgXCI7IH1cIikpO1xuICAgICAgICAgICAgc3R5bGVFbGVtZW50LmlubmVySFRNTCA9IHN0eWxlQ29udGVudDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVml6VG9vbHRpcC5wcm90b3R5cGUuc2V0RXh0ZW5zaW9uRGF0YSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9wcm9wcyA9IHtcbiAgICAgICAgICAgIGhlYWRlclByb3BzOiB2YWx1ZS5oZWFkZXIsXG4gICAgICAgICAgICBkZXRhaWxzUHJvcHM6IHZhbHVlLmRldGFpbHMsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVml6VG9vbHRpcC5wcm90b3R5cGUsIFwibWF4XCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX21heCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWaXpUb29sdGlwLnByb3RvdHlwZSwgXCJjb2xvclwiLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBWaXpUb29sdGlwO1xufShIVE1MRWxlbWVudCkpO1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd2aXotdG9vbHRpcCcsIFZpelRvb2x0aXApO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3ZpelRvb2x0aXAudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=