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

/***/ "./src/VizTooltipBuilderPanel.ts":
/*!***************************************!*\
  !*** ./src/VizTooltipBuilderPanel.ts ***!
  \***************************************/
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
template.innerHTML = "\n    <form id=\"form\">\n        <fieldset>\n            <legend>Tooltip Header Properties</legend>\n            <table>\n                <tr>\n                    <td>Max</td>\n                    <td><input id=\"bps_max\" type=\"number\" size=\"10\" maxlength=\"10\">Millian</td>\n                </tr>\n                <tr>\n                    <td>Color</td>\n                    <td><input id=\"bps_color\" type=\"text\" size=\"10\" maxlength=\"10\"></td>\n                </tr>\n            </table>\n            <input type=\"submit\" style=\"display:none;\">\n        </fieldset>\n    </form>\n    <style>\n    :host {\n        display: block;\n        padding: 1em 1em 1em 1em;\n    }\n    </style>\n";
var VizTooltipBuilderPanel = /** @class */ (function (_super) {
    __extends(VizTooltipBuilderPanel, _super);
    function VizTooltipBuilderPanel() {
        var _this = _super.call(this) || this;
        _this._shadowRoot = _this.attachShadow({ mode: "open" });
        _this._shadowRoot.appendChild(template.content.cloneNode(true));
        _this._shadowRoot.getElementById("form").addEventListener("submit", _this._submit.bind(_this));
        return _this;
    }
    VizTooltipBuilderPanel.prototype._submit = function (e) {
        e.preventDefault();
        this.dispatchEvent(new CustomEvent("propertiesChanged", {
            detail: {
                properties: {
                    color: this.color,
                    max: this.max
                }
            }
        }));
    };
    Object.defineProperty(VizTooltipBuilderPanel.prototype, "color", {
        get: function () {
            return this._shadowRoot.getElementById("bps_color").value;
        },
        set: function (newColor) {
            this._shadowRoot.getElementById("bps_color").value = newColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VizTooltipBuilderPanel.prototype, "max", {
        get: function () {
            return this._shadowRoot.getElementById("bps_max").value;
        },
        set: function (value) {
            this._shadowRoot.getElementById("bps_max").value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VizTooltipBuilderPanel.prototype, "settings", {
        set: function (settings) {
            this.color = (settings === null || settings === void 0 ? void 0 : settings.color) || this.color;
            this.max = (settings === null || settings === void 0 ? void 0 : settings.max) || this.max;
        },
        enumerable: false,
        configurable: true
    });
    return VizTooltipBuilderPanel;
}(HTMLElement));
customElements.define("viz-tooltip-build", VizTooltipBuilderPanel);


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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/VizTooltipBuilderPanel.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LXRvb2x0aXAtYnVpbGRlci1wYW5lbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixtSEFBbUgsb0JBQW9CLG9CQUFvQixtQ0FBbUMsaURBQWlELG1JQUFtSTs7QUFFbFksQ0FBQzs7Ozs7Ozs7Ozs7O0FDZFk7QUFDYjtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQixzQ0FBc0Msa0JBQWtCO0FBQ3ZGLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLENBQUM7QUFDRCw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQU8sQ0FBQyxnSkFBNEQ7QUFDcEU7QUFDQSwwa0JBQTBrQiwrREFBK0QseUJBQXlCLG1DQUFtQyxPQUFPO0FBQzVzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxjQUFjO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7VUN0RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dpZGdldC1hZGQtb25zLy4vbm9kZV9tb2R1bGVzL0B3ZWJjb21wb25lbnRzL3dlYmNvbXBvbmVudHNqcy9jdXN0b20tZWxlbWVudHMtZXM1LWFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbnMvLi9zcmMvVml6VG9vbHRpcEJ1aWxkZXJQYW5lbC50cyIsIndlYnBhY2s6Ly93aWRnZXQtYWRkLW9ucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93aWRnZXQtYWRkLW9ucy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dpZGdldC1hZGQtb25zL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93aWRnZXQtYWRkLW9ucy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZSBAbm9jb21waWxlXG5Db3B5cmlnaHQgKGMpIDIwMTggVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICAoZnVuY3Rpb24oKXtpZih2b2lkIDA9PT13aW5kb3cuUmVmbGVjdHx8dm9pZCAwPT09d2luZG93LmN1c3RvbUVsZW1lbnRzfHx3aW5kb3cuY3VzdG9tRWxlbWVudHMucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjaylyZXR1cm47Y29uc3QgYT1IVE1MRWxlbWVudDt3aW5kb3cuSFRNTEVsZW1lbnQ9e0hUTUxFbGVtZW50OmZ1bmN0aW9uIEhUTUxFbGVtZW50KCl7cmV0dXJuIFJlZmxlY3QuY29uc3RydWN0KGEsW10sdGhpcy5jb25zdHJ1Y3Rvcil9fS5IVE1MRWxlbWVudCxIVE1MRWxlbWVudC5wcm90b3R5cGU9YS5wcm90b3R5cGUsSFRNTEVsZW1lbnQucHJvdG90eXBlLmNvbnN0cnVjdG9yPUhUTUxFbGVtZW50LE9iamVjdC5zZXRQcm90b3R5cGVPZihIVE1MRWxlbWVudCxhKTt9KSgpO1xuXG59KCkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xucmVxdWlyZShcIkB3ZWJjb21wb25lbnRzL3dlYmNvbXBvbmVudHNqcy9jdXN0b20tZWxlbWVudHMtZXM1LWFkYXB0ZXJcIik7XG52YXIgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBcIlxcbiAgICA8Zm9ybSBpZD1cXFwiZm9ybVxcXCI+XFxuICAgICAgICA8ZmllbGRzZXQ+XFxuICAgICAgICAgICAgPGxlZ2VuZD5Ub29sdGlwIEhlYWRlciBQcm9wZXJ0aWVzPC9sZWdlbmQ+XFxuICAgICAgICAgICAgPHRhYmxlPlxcbiAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+TWF4PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgaWQ9XFxcImJwc19tYXhcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgc2l6ZT1cXFwiMTBcXFwiIG1heGxlbmd0aD1cXFwiMTBcXFwiPk1pbGxpYW48L3RkPlxcbiAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+Q29sb3I8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCBpZD1cXFwiYnBzX2NvbG9yXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBzaXplPVxcXCIxMFxcXCIgbWF4bGVuZ3RoPVxcXCIxMFxcXCI+PC90ZD5cXG4gICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJzdWJtaXRcXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmU7XFxcIj5cXG4gICAgICAgIDwvZmllbGRzZXQ+XFxuICAgIDwvZm9ybT5cXG4gICAgPHN0eWxlPlxcbiAgICA6aG9zdCB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBhZGRpbmc6IDFlbSAxZW0gMWVtIDFlbTtcXG4gICAgfVxcbiAgICA8L3N0eWxlPlxcblwiO1xudmFyIFZpelRvb2x0aXBCdWlsZGVyUGFuZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFZpelRvb2x0aXBCdWlsZGVyUGFuZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVml6VG9vbHRpcEJ1aWxkZXJQYW5lbCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX3NoYWRvd1Jvb3QgPSBfdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KTtcbiAgICAgICAgX3RoaXMuX3NoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICBfdGhpcy5fc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcImZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBfdGhpcy5fc3VibWl0LmJpbmQoX3RoaXMpKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBWaXpUb29sdGlwQnVpbGRlclBhbmVsLnByb3RvdHlwZS5fc3VibWl0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwicHJvcGVydGllc0NoYW5nZWRcIiwge1xuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5jb2xvcixcbiAgICAgICAgICAgICAgICAgICAgbWF4OiB0aGlzLm1heFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZpelRvb2x0aXBCdWlsZGVyUGFuZWwucHJvdG90eXBlLCBcImNvbG9yXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcImJwc19jb2xvclwiKS52YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3Q29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJicHNfY29sb3JcIikudmFsdWUgPSBuZXdDb2xvcjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWaXpUb29sdGlwQnVpbGRlclBhbmVsLnByb3RvdHlwZSwgXCJtYXhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwiYnBzX21heFwiKS52YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJicHNfbWF4XCIpLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVml6VG9vbHRpcEJ1aWxkZXJQYW5lbC5wcm90b3R5cGUsIFwic2V0dGluZ3NcIiwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChzZXR0aW5ncykge1xuICAgICAgICAgICAgdGhpcy5jb2xvciA9IChzZXR0aW5ncyA9PT0gbnVsbCB8fCBzZXR0aW5ncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2V0dGluZ3MuY29sb3IpIHx8IHRoaXMuY29sb3I7XG4gICAgICAgICAgICB0aGlzLm1heCA9IChzZXR0aW5ncyA9PT0gbnVsbCB8fCBzZXR0aW5ncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2V0dGluZ3MubWF4KSB8fCB0aGlzLm1heDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBWaXpUb29sdGlwQnVpbGRlclBhbmVsO1xufShIVE1MRWxlbWVudCkpO1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwidml6LXRvb2x0aXAtYnVpbGRcIiwgVml6VG9vbHRpcEJ1aWxkZXJQYW5lbCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvVml6VG9vbHRpcEJ1aWxkZXJQYW5lbC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==