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

/***/ "./src/PlotareaBuilderPanel.ts":
/*!*************************************!*\
  !*** ./src/PlotareaBuilderPanel.ts ***!
  \*************************************/
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
var template = document.createElement("template");
template.innerHTML = "\n    <form id=\"form\">\n        <fieldset>\n            <legend>Plotarea Properties</legend>\n            <table>\n                <tr>\n                    <td>Rounded Bar/Column</td>\n                    <td><input id=\"bps_rounded\" type=\"checkbox\" checked></td>\n                </tr>\n                <tr>\n                    <td>Increate Size</td>\n                    <td><input id=\"bps_size_increment\" type=\"number\" value=\"0\">%</td>\n                </tr>\n            </table>\n            <input type=\"submit\" style=\"display:none;\">\n        </fieldset>\n    </form>\n    <style>\n    :host {\n        display: block;\n        padding: 1em 1em 1em 1em;\n    }\n    </style>\n";
var VizPlotareaBuilderPanel = /** @class */ (function (_super) {
    __extends(VizPlotareaBuilderPanel, _super);
    function VizPlotareaBuilderPanel() {
        var _this = _super.call(this) || this;
        _this._shadowRoot = _this.attachShadow({ mode: "open" });
        _this._shadowRoot.appendChild(template.content.cloneNode(true));
        _this._shadowRoot.getElementById("form").addEventListener("submit", _this._submit.bind(_this));
        _this._shadowRoot.getElementById('bps_rounded').addEventListener('change', _this._submit.bind(_this));
        return _this;
    }
    VizPlotareaBuilderPanel.prototype._submit = function (e) {
        e.preventDefault();
        this.dispatchEvent(new CustomEvent("propertiesChanged", {
            detail: {
                properties: {
                    rounded: this.rounded,
                    sizeIncrement: this.sizeIncrement
                }
            }
        }));
    };
    Object.defineProperty(VizPlotareaBuilderPanel.prototype, "rounded", {
        get: function () {
            return this._shadowRoot.getElementById("bps_rounded").checked;
        },
        set: function (value) {
            this._shadowRoot.getElementById("bps_rounded").checked = !!value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VizPlotareaBuilderPanel.prototype, "sizeIncrement", {
        get: function () {
            return this._shadowRoot.getElementById("bps_size_increment").value;
        },
        set: function (value) {
            this._shadowRoot.getElementById("bps_size_increment").value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VizPlotareaBuilderPanel.prototype, "settings", {
        set: function (settings) {
            this.rounded = (settings === null || settings === void 0 ? void 0 : settings.rounded) || this.rounded;
            this.sizeIncrement = (settings === null || settings === void 0 ? void 0 : settings.sizeIncrement) || this.sizeIncrement;
        },
        enumerable: false,
        configurable: true
    });
    return VizPlotareaBuilderPanel;
}(HTMLElement));
customElements.define("viz-plotarea-build", VizPlotareaBuilderPanel);


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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/PlotareaBuilderPanel.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LXBsb3RhcmVhLWJ1aWxkZXItcGFuZWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsbUhBQW1ILG9CQUFvQixvQkFBb0IsbUNBQW1DLGlEQUFpRCxtSUFBbUk7O0FBRWxZLENBQUM7Ozs7Ozs7Ozs7OztBQ2RZO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0Isc0NBQXNDLGtCQUFrQjtBQUN2Riw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFPLENBQUMsZ0pBQTREO0FBQ3BFO0FBQ0EsZ2tCQUFna0IsK0RBQStELHlCQUF5QixtQ0FBbUMsT0FBTztBQUNsc0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsY0FBYztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7VUN2RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dpZGdldC1hZGQtb25zLy4vbm9kZV9tb2R1bGVzL0B3ZWJjb21wb25lbnRzL3dlYmNvbXBvbmVudHNqcy9jdXN0b20tZWxlbWVudHMtZXM1LWFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbnMvLi9zcmMvUGxvdGFyZWFCdWlsZGVyUGFuZWwudHMiLCJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbnMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93aWRnZXQtYWRkLW9ucy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbnMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2UgQG5vY29tcGlsZVxuQ29weXJpZ2h0IChjKSAyMDE4IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgKGZ1bmN0aW9uKCl7aWYodm9pZCAwPT09d2luZG93LlJlZmxlY3R8fHZvaWQgMD09PXdpbmRvdy5jdXN0b21FbGVtZW50c3x8d2luZG93LmN1c3RvbUVsZW1lbnRzLnBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2spcmV0dXJuO2NvbnN0IGE9SFRNTEVsZW1lbnQ7d2luZG93LkhUTUxFbGVtZW50PXtIVE1MRWxlbWVudDpmdW5jdGlvbiBIVE1MRWxlbWVudCgpe3JldHVybiBSZWZsZWN0LmNvbnN0cnVjdChhLFtdLHRoaXMuY29uc3RydWN0b3IpfX0uSFRNTEVsZW1lbnQsSFRNTEVsZW1lbnQucHJvdG90eXBlPWEucHJvdG90eXBlLEhUTUxFbGVtZW50LnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1IVE1MRWxlbWVudCxPYmplY3Quc2V0UHJvdG90eXBlT2YoSFRNTEVsZW1lbnQsYSk7fSkoKTtcblxufSgpKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCJAd2ViY29tcG9uZW50cy93ZWJjb21wb25lbnRzanMvY3VzdG9tLWVsZW1lbnRzLWVzNS1hZGFwdGVyXCIpO1xudmFyIHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xudGVtcGxhdGUuaW5uZXJIVE1MID0gXCJcXG4gICAgPGZvcm0gaWQ9XFxcImZvcm1cXFwiPlxcbiAgICAgICAgPGZpZWxkc2V0PlxcbiAgICAgICAgICAgIDxsZWdlbmQ+UGxvdGFyZWEgUHJvcGVydGllczwvbGVnZW5kPlxcbiAgICAgICAgICAgIDx0YWJsZT5cXG4gICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPlJvdW5kZWQgQmFyL0NvbHVtbjwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IGlkPVxcXCJicHNfcm91bmRlZFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNoZWNrZWQ+PC90ZD5cXG4gICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPkluY3JlYXRlIFNpemU8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCBpZD1cXFwiYnBzX3NpemVfaW5jcmVtZW50XFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIHZhbHVlPVxcXCIwXFxcIj4lPC90ZD5cXG4gICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJzdWJtaXRcXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmU7XFxcIj5cXG4gICAgICAgIDwvZmllbGRzZXQ+XFxuICAgIDwvZm9ybT5cXG4gICAgPHN0eWxlPlxcbiAgICA6aG9zdCB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBhZGRpbmc6IDFlbSAxZW0gMWVtIDFlbTtcXG4gICAgfVxcbiAgICA8L3N0eWxlPlxcblwiO1xudmFyIFZpelBsb3RhcmVhQnVpbGRlclBhbmVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhWaXpQbG90YXJlYUJ1aWxkZXJQYW5lbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBWaXpQbG90YXJlYUJ1aWxkZXJQYW5lbCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX3NoYWRvd1Jvb3QgPSBfdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KTtcbiAgICAgICAgX3RoaXMuX3NoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICBfdGhpcy5fc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcImZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBfdGhpcy5fc3VibWl0LmJpbmQoX3RoaXMpKTtcbiAgICAgICAgX3RoaXMuX3NoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2Jwc19yb3VuZGVkJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgX3RoaXMuX3N1Ym1pdC5iaW5kKF90aGlzKSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgVml6UGxvdGFyZWFCdWlsZGVyUGFuZWwucHJvdG90eXBlLl9zdWJtaXQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJwcm9wZXJ0aWVzQ2hhbmdlZFwiLCB7XG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdW5kZWQ6IHRoaXMucm91bmRlZCxcbiAgICAgICAgICAgICAgICAgICAgc2l6ZUluY3JlbWVudDogdGhpcy5zaXplSW5jcmVtZW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVml6UGxvdGFyZWFCdWlsZGVyUGFuZWwucHJvdG90eXBlLCBcInJvdW5kZWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwiYnBzX3JvdW5kZWRcIikuY2hlY2tlZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJicHNfcm91bmRlZFwiKS5jaGVja2VkID0gISF2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWaXpQbG90YXJlYUJ1aWxkZXJQYW5lbC5wcm90b3R5cGUsIFwic2l6ZUluY3JlbWVudFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJicHNfc2l6ZV9pbmNyZW1lbnRcIikudmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwiYnBzX3NpemVfaW5jcmVtZW50XCIpLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVml6UGxvdGFyZWFCdWlsZGVyUGFuZWwucHJvdG90eXBlLCBcInNldHRpbmdzXCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIHRoaXMucm91bmRlZCA9IChzZXR0aW5ncyA9PT0gbnVsbCB8fCBzZXR0aW5ncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2V0dGluZ3Mucm91bmRlZCkgfHwgdGhpcy5yb3VuZGVkO1xuICAgICAgICAgICAgdGhpcy5zaXplSW5jcmVtZW50ID0gKHNldHRpbmdzID09PSBudWxsIHx8IHNldHRpbmdzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZXR0aW5ncy5zaXplSW5jcmVtZW50KSB8fCB0aGlzLnNpemVJbmNyZW1lbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gVml6UGxvdGFyZWFCdWlsZGVyUGFuZWw7XG59KEhUTUxFbGVtZW50KSk7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ2aXotcGxvdGFyZWEtYnVpbGRcIiwgVml6UGxvdGFyZWFCdWlsZGVyUGFuZWwpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL1Bsb3RhcmVhQnVpbGRlclBhbmVsLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9