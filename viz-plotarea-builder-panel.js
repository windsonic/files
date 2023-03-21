/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/PlotareaBuilderPanel.ts":
/*!*************************************!*\
  !*** ./src/PlotareaBuilderPanel.ts ***!
  \*************************************/
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
template.innerHTML = "\n    <form id=\"form\">\n        <fieldset>\n            <legend>Plotarea Properties</legend>\n            <table>\n                <tr>\n                    <td>Rounded Bar/Column</td>\n                    <td><input id=\"bps_rounded\" type=\"checkbox\" checked></td>\n                </tr>\n                <tr>\n                    <td>Increate Size</td>\n                    <td><input id=\"bps_size_increment\" type=\"number\" value=\"0\">%</td>\n                </tr>\n                <tr>\n                    <td>Axis Label Color</td>\n                    <td><input id=\"bps_axis_label_color\" type=\"text\" size=\"10\" maxlength=\"10\" value=\"#fff\"></td>\n                </tr>\n                <tr>\n                    <td>Background Color</td>\n                    <td><input id=\"bps_bg_color\" type=\"text\" size=\"10\" maxlength=\"10\" value=\"#999\"></td>\n                </tr>\n            </table>\n            <input type=\"submit\" style=\"display:none;\">\n        </fieldset>\n    </form>\n    <style>\n    :host {\n        display: block;\n        padding: 1em 1em 1em 1em;\n    }\n    </style>\n";
var VizPlotareaBuilderPanel = /** @class */ (function (_super) {
    __extends(VizPlotareaBuilderPanel, _super);
    function VizPlotareaBuilderPanel() {
        var _this = _super.call(this) || this;
        _this._shadowRoot = _this.attachShadow({ mode: "open" });
        _this._shadowRoot.appendChild(template.content.cloneNode(true));
        _this._shadowRoot.getElementById("form").addEventListener("submit", _this._submit.bind(_this));
        _this._shadowRoot.getElementById('bps_rounded').addEventListener('change', _this._submit.bind(_this));
        _this._shadowRoot.getElementById('bps_size_increment').addEventListener('change', _this._submit.bind(_this));
        _this._shadowRoot.getElementById('bps_bg_color').addEventListener('change', _this._submit.bind(_this));
        _this._shadowRoot.getElementById('bps_axis_label_color').addEventListener('change', _this._submit.bind(_this));
        return _this;
    }
    VizPlotareaBuilderPanel.prototype._submit = function (e) {
        e.preventDefault();
        this.dispatchEvent(new CustomEvent("propertiesChanged", {
            detail: {
                properties: {
                    rounded: this.rounded,
                    sizeIncrement: this.sizeIncrement,
                    bgColor: this.bgColor,
                    axisLabelColor: this.axisLabelColor,
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
    Object.defineProperty(VizPlotareaBuilderPanel.prototype, "bgColor", {
        get: function () {
            return this._shadowRoot.getElementById("bps_bg_color").value;
        },
        set: function (value) {
            this._shadowRoot.getElementById("bps_bg_color").value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VizPlotareaBuilderPanel.prototype, "axisLabelColor", {
        get: function () {
            return this._shadowRoot.getElementById("bps_axis_label_color").value;
        },
        set: function (value) {
            this._shadowRoot.getElementById("bps_axis_label_color").value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VizPlotareaBuilderPanel.prototype, "settings", {
        set: function (settings) {
            this.rounded = (settings === null || settings === void 0 ? void 0 : settings.rounded) || this.rounded;
            this.sizeIncrement = (settings === null || settings === void 0 ? void 0 : settings.sizeIncrement) || this.sizeIncrement;
            this.bgColor = (settings === null || settings === void 0 ? void 0 : settings.bgColor) || this.bgColor;
            this.axisLabelColor = (settings === null || settings === void 0 ? void 0 : settings.axisLabelColor) || this.axisLabelColor;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/PlotareaBuilderPanel.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LXBsb3RhcmVhLWJ1aWxkZXItcGFuZWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0Isc0NBQXNDLGtCQUFrQjtBQUN2Riw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSx3K0JBQXcrQiwrREFBK0QseUJBQXlCLG1DQUFtQyxPQUFPO0FBQzFtQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxjQUFjO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7VUUvRkE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dpZGdldC1hZGQtb25zLy4vc3JjL1Bsb3RhcmVhQnVpbGRlclBhbmVsLnRzIiwid2VicGFjazovL3dpZGdldC1hZGQtb25zL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbnMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dpZGdldC1hZGQtb25zL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xudGVtcGxhdGUuaW5uZXJIVE1MID0gXCJcXG4gICAgPGZvcm0gaWQ9XFxcImZvcm1cXFwiPlxcbiAgICAgICAgPGZpZWxkc2V0PlxcbiAgICAgICAgICAgIDxsZWdlbmQ+UGxvdGFyZWEgUHJvcGVydGllczwvbGVnZW5kPlxcbiAgICAgICAgICAgIDx0YWJsZT5cXG4gICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPlJvdW5kZWQgQmFyL0NvbHVtbjwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IGlkPVxcXCJicHNfcm91bmRlZFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNoZWNrZWQ+PC90ZD5cXG4gICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPkluY3JlYXRlIFNpemU8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCBpZD1cXFwiYnBzX3NpemVfaW5jcmVtZW50XFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIHZhbHVlPVxcXCIwXFxcIj4lPC90ZD5cXG4gICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPkF4aXMgTGFiZWwgQ29sb3I8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCBpZD1cXFwiYnBzX2F4aXNfbGFiZWxfY29sb3JcXFwiIHR5cGU9XFxcInRleHRcXFwiIHNpemU9XFxcIjEwXFxcIiBtYXhsZW5ndGg9XFxcIjEwXFxcIiB2YWx1ZT1cXFwiI2ZmZlxcXCI+PC90ZD5cXG4gICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPkJhY2tncm91bmQgQ29sb3I8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCBpZD1cXFwiYnBzX2JnX2NvbG9yXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBzaXplPVxcXCIxMFxcXCIgbWF4bGVuZ3RoPVxcXCIxMFxcXCIgdmFsdWU9XFxcIiM5OTlcXFwiPjwvdGQ+XFxuICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwic3VibWl0XFxcIiBzdHlsZT1cXFwiZGlzcGxheTpub25lO1xcXCI+XFxuICAgICAgICA8L2ZpZWxkc2V0PlxcbiAgICA8L2Zvcm0+XFxuICAgIDxzdHlsZT5cXG4gICAgOmhvc3Qge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwYWRkaW5nOiAxZW0gMWVtIDFlbSAxZW07XFxuICAgIH1cXG4gICAgPC9zdHlsZT5cXG5cIjtcbnZhciBWaXpQbG90YXJlYUJ1aWxkZXJQYW5lbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVml6UGxvdGFyZWFCdWlsZGVyUGFuZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVml6UGxvdGFyZWFCdWlsZGVyUGFuZWwoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9zaGFkb3dSb290ID0gX3RoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogXCJvcGVuXCIgfSk7XG4gICAgICAgIF90aGlzLl9zaGFkb3dSb290LmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgX3RoaXMuX3NoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgX3RoaXMuX3N1Ym1pdC5iaW5kKF90aGlzKSk7XG4gICAgICAgIF90aGlzLl9zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdicHNfcm91bmRlZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIF90aGlzLl9zdWJtaXQuYmluZChfdGhpcykpO1xuICAgICAgICBfdGhpcy5fc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnYnBzX3NpemVfaW5jcmVtZW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgX3RoaXMuX3N1Ym1pdC5iaW5kKF90aGlzKSk7XG4gICAgICAgIF90aGlzLl9zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdicHNfYmdfY29sb3InKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBfdGhpcy5fc3VibWl0LmJpbmQoX3RoaXMpKTtcbiAgICAgICAgX3RoaXMuX3NoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ2Jwc19heGlzX2xhYmVsX2NvbG9yJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgX3RoaXMuX3N1Ym1pdC5iaW5kKF90aGlzKSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgVml6UGxvdGFyZWFCdWlsZGVyUGFuZWwucHJvdG90eXBlLl9zdWJtaXQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJwcm9wZXJ0aWVzQ2hhbmdlZFwiLCB7XG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdW5kZWQ6IHRoaXMucm91bmRlZCxcbiAgICAgICAgICAgICAgICAgICAgc2l6ZUluY3JlbWVudDogdGhpcy5zaXplSW5jcmVtZW50LFxuICAgICAgICAgICAgICAgICAgICBiZ0NvbG9yOiB0aGlzLmJnQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGF4aXNMYWJlbENvbG9yOiB0aGlzLmF4aXNMYWJlbENvbG9yLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZpelBsb3RhcmVhQnVpbGRlclBhbmVsLnByb3RvdHlwZSwgXCJyb3VuZGVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcImJwc19yb3VuZGVkXCIpLmNoZWNrZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwiYnBzX3JvdW5kZWRcIikuY2hlY2tlZCA9ICEhdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVml6UGxvdGFyZWFCdWlsZGVyUGFuZWwucHJvdG90eXBlLCBcInNpemVJbmNyZW1lbnRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwiYnBzX3NpemVfaW5jcmVtZW50XCIpLnZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcImJwc19zaXplX2luY3JlbWVudFwiKS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZpelBsb3RhcmVhQnVpbGRlclBhbmVsLnByb3RvdHlwZSwgXCJiZ0NvbG9yXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcImJwc19iZ19jb2xvclwiKS52YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJicHNfYmdfY29sb3JcIikudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWaXpQbG90YXJlYUJ1aWxkZXJQYW5lbC5wcm90b3R5cGUsIFwiYXhpc0xhYmVsQ29sb3JcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwiYnBzX2F4aXNfbGFiZWxfY29sb3JcIikudmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwiYnBzX2F4aXNfbGFiZWxfY29sb3JcIikudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWaXpQbG90YXJlYUJ1aWxkZXJQYW5lbC5wcm90b3R5cGUsIFwic2V0dGluZ3NcIiwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChzZXR0aW5ncykge1xuICAgICAgICAgICAgdGhpcy5yb3VuZGVkID0gKHNldHRpbmdzID09PSBudWxsIHx8IHNldHRpbmdzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZXR0aW5ncy5yb3VuZGVkKSB8fCB0aGlzLnJvdW5kZWQ7XG4gICAgICAgICAgICB0aGlzLnNpemVJbmNyZW1lbnQgPSAoc2V0dGluZ3MgPT09IG51bGwgfHwgc2V0dGluZ3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNldHRpbmdzLnNpemVJbmNyZW1lbnQpIHx8IHRoaXMuc2l6ZUluY3JlbWVudDtcbiAgICAgICAgICAgIHRoaXMuYmdDb2xvciA9IChzZXR0aW5ncyA9PT0gbnVsbCB8fCBzZXR0aW5ncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2V0dGluZ3MuYmdDb2xvcikgfHwgdGhpcy5iZ0NvbG9yO1xuICAgICAgICAgICAgdGhpcy5heGlzTGFiZWxDb2xvciA9IChzZXR0aW5ncyA9PT0gbnVsbCB8fCBzZXR0aW5ncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2V0dGluZ3MuYXhpc0xhYmVsQ29sb3IpIHx8IHRoaXMuYXhpc0xhYmVsQ29sb3I7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gVml6UGxvdGFyZWFCdWlsZGVyUGFuZWw7XG59KEhUTUxFbGVtZW50KSk7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ2aXotcGxvdGFyZWEtYnVpbGRcIiwgVml6UGxvdGFyZWFCdWlsZGVyUGFuZWwpO1xuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NyYy9QbG90YXJlYUJ1aWxkZXJQYW5lbC50c1wiXSgpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9