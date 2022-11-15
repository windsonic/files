/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/vizTooltipBuilderPanel.ts":
/*!***************************************!*\
  !*** ./src/vizTooltipBuilderPanel.ts ***!
  \***************************************/
/***/ (function() {

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/vizTooltipBuilderPanel.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LXRvb2x0aXAtYnVpbGRlci1wYW5lbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQixzQ0FBc0Msa0JBQWtCO0FBQ3ZGLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDBrQkFBMGtCLCtEQUErRCx5QkFBeUIsbUNBQW1DLE9BQU87QUFDNXNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGNBQWM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7VUVuRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dpZGdldC1hZGQtb25zLy4vc3JjL3ZpelRvb2x0aXBCdWlsZGVyUGFuZWwudHMiLCJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbnMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93aWRnZXQtYWRkLW9ucy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbnMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBcIlxcbiAgICA8Zm9ybSBpZD1cXFwiZm9ybVxcXCI+XFxuICAgICAgICA8ZmllbGRzZXQ+XFxuICAgICAgICAgICAgPGxlZ2VuZD5Ub29sdGlwIEhlYWRlciBQcm9wZXJ0aWVzPC9sZWdlbmQ+XFxuICAgICAgICAgICAgPHRhYmxlPlxcbiAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+TWF4PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgaWQ9XFxcImJwc19tYXhcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgc2l6ZT1cXFwiMTBcXFwiIG1heGxlbmd0aD1cXFwiMTBcXFwiPk1pbGxpYW48L3RkPlxcbiAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+Q29sb3I8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCBpZD1cXFwiYnBzX2NvbG9yXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBzaXplPVxcXCIxMFxcXCIgbWF4bGVuZ3RoPVxcXCIxMFxcXCI+PC90ZD5cXG4gICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJzdWJtaXRcXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmU7XFxcIj5cXG4gICAgICAgIDwvZmllbGRzZXQ+XFxuICAgIDwvZm9ybT5cXG4gICAgPHN0eWxlPlxcbiAgICA6aG9zdCB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBhZGRpbmc6IDFlbSAxZW0gMWVtIDFlbTtcXG4gICAgfVxcbiAgICA8L3N0eWxlPlxcblwiO1xudmFyIFZpelRvb2x0aXBCdWlsZGVyUGFuZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFZpelRvb2x0aXBCdWlsZGVyUGFuZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVml6VG9vbHRpcEJ1aWxkZXJQYW5lbCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX3NoYWRvd1Jvb3QgPSBfdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KTtcbiAgICAgICAgX3RoaXMuX3NoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICBfdGhpcy5fc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcImZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBfdGhpcy5fc3VibWl0LmJpbmQoX3RoaXMpKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBWaXpUb29sdGlwQnVpbGRlclBhbmVsLnByb3RvdHlwZS5fc3VibWl0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwicHJvcGVydGllc0NoYW5nZWRcIiwge1xuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5jb2xvcixcbiAgICAgICAgICAgICAgICAgICAgbWF4OiB0aGlzLm1heFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZpelRvb2x0aXBCdWlsZGVyUGFuZWwucHJvdG90eXBlLCBcImNvbG9yXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcImJwc19jb2xvclwiKS52YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3Q29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJicHNfY29sb3JcIikudmFsdWUgPSBuZXdDb2xvcjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWaXpUb29sdGlwQnVpbGRlclBhbmVsLnByb3RvdHlwZSwgXCJtYXhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwiYnBzX21heFwiKS52YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJicHNfbWF4XCIpLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVml6VG9vbHRpcEJ1aWxkZXJQYW5lbC5wcm90b3R5cGUsIFwic2V0dGluZ3NcIiwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChzZXR0aW5ncykge1xuICAgICAgICAgICAgdGhpcy5jb2xvciA9IChzZXR0aW5ncyA9PT0gbnVsbCB8fCBzZXR0aW5ncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2V0dGluZ3MuY29sb3IpIHx8IHRoaXMuY29sb3I7XG4gICAgICAgICAgICB0aGlzLm1heCA9IChzZXR0aW5ncyA9PT0gbnVsbCB8fCBzZXR0aW5ncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2V0dGluZ3MubWF4KSB8fCB0aGlzLm1heDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBWaXpUb29sdGlwQnVpbGRlclBhbmVsO1xufShIVE1MRWxlbWVudCkpO1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwidml6LXRvb2x0aXAtYnVpbGRcIiwgVml6VG9vbHRpcEJ1aWxkZXJQYW5lbCk7XG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL3ZpelRvb2x0aXBCdWlsZGVyUGFuZWwudHNcIl0oKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==