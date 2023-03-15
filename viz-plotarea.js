/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/PlotareaOverlay.ts":
/*!********************************!*\
  !*** ./src/PlotareaOverlay.ts ***!
  \********************************/
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
var OverlayContainerTemplate = document.createElement('template');
OverlayContainerTemplate.innerHTML = "\n    <style>\n        .chart-overlay-container {\n            position: relative;\n            pointer-events: none;\n            overflow: hidden;\n        }\n        .series-bar-column-container {\n            background-color: #fff;\n        }\n        .series-bar-column {\n            width: 100%;\n            height: 100%;\n        }\n        .axis-label-container {\n            position: absolute;\n            display: flex;\n            height: 18px;\n            flex-flow: row nowrap;\n            align-items: center;\n            justify-content: flex-end;\n            background-color: #fff;\n        }\n        .axis-label {\n            line-height: 14px;\n            font-size: 11px;\n            text-overflow: ellipsis;\n        }\n        .axis-label-icon {\n            padding-left: 4px;\n        }\n    </style>\n    <div class=\"chart-overlay-container\"/>\n";
var BarColumnTemplate = document.createElement('template');
BarColumnTemplate.innerHTML = "<div class=\"series-bar-column-container\">\n    <div class=\"series-bar-column\"/>\n</div>";
var AxisLabelTemplate = document.createElement('template');
AxisLabelTemplate.innerHTML = "\n    <span class=\"axis-label-container\">\n        <span class=\"axis-label\"></span>\n        <img class=\"axis-label-icon\"\n            width=\"16\"\n            height=\"16\"\n        >\n    </span>\n";
var iconMap = {
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
// For PoC
var ChartOverlayComponent = /** @class */ (function (_super) {
    __extends(ChartOverlayComponent, _super);
    function ChartOverlayComponent() {
        var _this = _super.call(this) || this;
        _this._rounded = true;
        _this._sizeIncrement = 0;
        _this.shadowRoot = _this.attachShadow({ mode: 'open' });
        var container = OverlayContainerTemplate.content.cloneNode(true);
        _this._containerElement = container.querySelector('.chart-overlay-container');
        _this.shadowRoot.appendChild(container);
        return _this;
    }
    ChartOverlayComponent.prototype.render = function () {
        var _this = this;
        this._containerElement.innerHTML = '';
        if (this._chartType !== 'barcolumn') {
            return;
        }
        var _a = this._size, chartWidth = _a.width, chartHeight = _a.height;
        var _b = this._clipPath, clipPathY = _b.y, clipPathHeight = _b.height;
        this._containerElement.setAttribute('style', "position: relative; pointer-events: none; overflow: hidden; width: ".concat(chartWidth, "px; height: ").concat(chartHeight, "px; clip-path: inset(").concat(clipPathY, "px 0 ").concat(chartHeight - clipPathY - clipPathHeight, "px 0);"));
        this._series.forEach(function (singleSeries) {
            var options = {
                color: singleSeries.color
            };
            _this.renderASeries(singleSeries, options);
        });
        this.renderAxisLabels(this._xAxisLabels);
        this.renderAxisLabels(this._yAxisLabels);
    };
    ChartOverlayComponent.prototype.renderASeries = function (singleSeries, options) {
        var _this = this;
        singleSeries.dataPoints.forEach(function (dataPoint) {
            var dataInfo = dataPoint.dataInfo, labelInfo = dataPoint.labelInfo;
            _this.renderData(dataInfo, options);
            _this.renderLabel(labelInfo, options);
        });
    };
    ChartOverlayComponent.prototype.renderData = function (dataInfo, options) {
        if (!dataInfo) {
            return;
        }
        var x = dataInfo.x, y = dataInfo.y, width = dataInfo.width, height = dataInfo.height;
        var dataElement = BarColumnTemplate.content.cloneNode(true);
        var barColumnContainer = dataElement.querySelector('.series-bar-column-container');
        var barColumn = dataElement.querySelector('.series-bar-column');
        var increment = this._sizeIncrement / 100;
        var roundedStyle = '';
        if (this._isHorizontal) {
            height = height * (1 + increment) + 2;
            y = y - height * increment / 2 - 1;
            roundedStyle = "border-radius: 0 ".concat(height / 2, "px ").concat(height / 2, "px 0;");
        }
        else {
            width = width * (1 + increment) + 2;
            x = x - width * increment / 2 - 1;
            roundedStyle = "border-radius: ".concat(width / 2, "px ").concat(width / 2, "px 0 0;");
        }
        barColumnContainer.setAttribute('style', "position: absolute; top: ".concat(y, "px; left: ").concat(x, "px; width: ").concat(width, "px; height: ").concat(height, "px;"));
        var color = dataInfo.color || options.color;
        var barStyle = this._rounded ?
            "background-color: ".concat(color, "; ").concat(roundedStyle) :
            "background-color: ".concat(color, ";");
        barColumn.setAttribute('style', barStyle);
        this._containerElement.appendChild(dataElement);
    };
    ChartOverlayComponent.prototype._renderAxisLabel = function (label) {
        if (!label) {
            return;
        }
        var x = label.x, y = label.y, width = label.width, pointValue = label.pointValue, formattedValue = label.formattedValue;
        var labelEl = AxisLabelTemplate.content.cloneNode(true);
        var labelContainer = labelEl.querySelector('.axis-label-container');
        labelContainer.setAttribute('style', "width: ".concat(width + 36, "px; left: ").concat(x - 30, "px; top: ").concat(y - 2, "px;"));
        this._containerElement.appendChild(labelEl);
        var labelSpan = labelContainer.querySelector('.axis-label');
        labelSpan.innerHTML = formattedValue;
        var iconImg = labelContainer.querySelector('img');
        iconImg.setAttribute('src', iconMap[pointValue] || iconMap.City);
    };
    ;
    ChartOverlayComponent.prototype.renderAxisLabels = function (axisLabels) {
        var _this = this;
        if (axisLabels && !Array.isArray(axisLabels)) {
            this._renderAxisLabel(axisLabels);
        }
        else {
            axisLabels.forEach(function (labels) { return _this.renderAxisLabels(labels); });
        }
    };
    ChartOverlayComponent.prototype.renderLabel = function (labelInfo, options) {
        if (!labelInfo) {
            return;
        }
        var x = labelInfo.x, y = labelInfo.y, width = labelInfo.width, height = labelInfo.height;
        var labelSpan = document.createElement('span');
        labelSpan.setAttribute('style', "position: absolute; top: ".concat(y, "px; left: ").concat(x, "px; width: ").concat(width, "px; height: ").concat(height, "px; background-color: #fff; color: ").concat(options.color, ";"));
        labelSpan.innerHTML = labelInfo.formattedValue;
        this._containerElement.appendChild(labelSpan);
    };
    ChartOverlayComponent.prototype.setExtensionData = function (extensionData) {
        var chartType = extensionData.chartType, isHorizontal = extensionData.isHorizontal, chartSize = extensionData.chartSize, clipPath = extensionData.clipPath, series = extensionData.series, xAxisLabels = extensionData.xAxisLabels, yAxisLabels = extensionData.yAxisLabels;
        this._size = chartSize;
        this._clipPath = clipPath;
        this._series = series;
        this._xAxisLabels = xAxisLabels;
        this._yAxisLabels = yAxisLabels;
        this._chartType = chartType;
        this._isHorizontal = isHorizontal;
        this.render();
    };
    Object.defineProperty(ChartOverlayComponent.prototype, "rounded", {
        set: function (value) {
            this._rounded = value;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChartOverlayComponent.prototype, "sizeIncrement", {
        set: function (value) {
            this._sizeIncrement = value;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    return ChartOverlayComponent;
}(HTMLElement));
customElements.define('viz-overlay', ChartOverlayComponent);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/PlotareaOverlay.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LXBsb3RhcmVhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCLHNDQUFzQyxrQkFBa0I7QUFDdkYsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsdUZBQXVGLGlDQUFpQyxtQ0FBbUMsK0JBQStCLFdBQVcsd0NBQXdDLHFDQUFxQyxXQUFXLDhCQUE4QiwwQkFBMEIsMkJBQTJCLFdBQVcsaUNBQWlDLGlDQUFpQyw0QkFBNEIsMkJBQTJCLG9DQUFvQyxrQ0FBa0Msd0NBQXdDLHFDQUFxQyxXQUFXLHVCQUF1QixnQ0FBZ0MsOEJBQThCLHNDQUFzQyxXQUFXLDRCQUE0QixnQ0FBZ0MsV0FBVztBQUMvMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGNBQWM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsc0JBQXNCLGtCQUFrQixpQ0FBaUMsb0NBQW9DLHVHQUF1RztBQUM5UjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0dBQWtHO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0dBQWdHO0FBQ2hHO0FBQ0Esc0VBQXNFLHNCQUFzQix3QkFBd0IsNkJBQTZCLDhCQUE4QjtBQUMvSztBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xELGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSw2QkFBNkIsMEJBQTBCO0FBQ3RJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELHdDQUF3QztBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELHNCQUFzQix3QkFBd0IsNkJBQTZCLCtCQUErQix3QkFBd0Isa0NBQWtDO0FBQ2pPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7O1VFcEtBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aWRnZXQtYWRkLW9ucy8uL3NyYy9QbG90YXJlYU92ZXJsYXkudHMiLCJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbnMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93aWRnZXQtYWRkLW9ucy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbnMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgT3ZlcmxheUNvbnRhaW5lclRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbk92ZXJsYXlDb250YWluZXJUZW1wbGF0ZS5pbm5lckhUTUwgPSBcIlxcbiAgICA8c3R5bGU+XFxuICAgICAgICAuY2hhcnQtb3ZlcmxheS1jb250YWluZXIge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnNlcmllcy1iYXItY29sdW1uLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgICAgIH1cXG4gICAgICAgIC5zZXJpZXMtYmFyLWNvbHVtbiB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmF4aXMtbGFiZWwtY29udGFpbmVyIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XFxuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmF4aXMtbGFiZWwge1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgICAgIH1cXG4gICAgICAgIC5heGlzLWxhYmVsLWljb24ge1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xcbiAgICAgICAgfVxcbiAgICA8L3N0eWxlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjaGFydC1vdmVybGF5LWNvbnRhaW5lclxcXCIvPlxcblwiO1xudmFyIEJhckNvbHVtblRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbkJhckNvbHVtblRlbXBsYXRlLmlubmVySFRNTCA9IFwiPGRpdiBjbGFzcz1cXFwic2VyaWVzLWJhci1jb2x1bW4tY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2VyaWVzLWJhci1jb2x1bW5cXFwiLz5cXG48L2Rpdj5cIjtcbnZhciBBeGlzTGFiZWxUZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5BeGlzTGFiZWxUZW1wbGF0ZS5pbm5lckhUTUwgPSBcIlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiYXhpcy1sYWJlbC1jb250YWluZXJcXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImF4aXMtbGFiZWxcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDxpbWcgY2xhc3M9XFxcImF4aXMtbGFiZWwtaWNvblxcXCJcXG4gICAgICAgICAgICB3aWR0aD1cXFwiMTZcXFwiXFxuICAgICAgICAgICAgaGVpZ2h0PVxcXCIxNlxcXCJcXG4gICAgICAgID5cXG4gICAgPC9zcGFuPlxcblwiO1xudmFyIGljb25NYXAgPSB7XG4gICAgJ0NhbGlmb3JuaWEnOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvNzkwNi83OTA2NDU1LnBuZycsXG4gICAgJ05ldmFkYSc6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC83OTA2Lzc5MDY2MDYucG5nJyxcbiAgICAnT3JlZ29uJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4Lzc5MDYvNzkwNjcyOS5wbmcnLFxuICAgICdDYXJib25hdGVkIERyaW5rcyc6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC80MzI5LzQzMjk1NDIucG5nJyxcbiAgICAnSnVpY2VzJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzMxNjUvMzE2NTU4OS5wbmcnLFxuICAgICdBbGNvaG9sJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzMxNzQvMzE3NDUzNS5wbmcnLFxuICAgICdPdGhlcnMnOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvMjUyMS8yNTIxMTIyLnBuZycsXG4gICAgJ0dyb3NzIE1hcmdpbic6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC81MDQ3LzUwNDc3MTMucG5nJyxcbiAgICAnRGlzY291bnQnOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvNzI2LzcyNjQ3Ni5wbmcnLFxuICAgICdPcmlnaW5hbCBTYWxlcyBQcmljZSc6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC82ODk1LzY4OTUxNjgucG5nJyxcbiAgICAnQ2l0eSc6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC8xNzE5LzE3MTk2NjYucG5nJ1xufTtcbi8vIEZvciBQb0NcbnZhciBDaGFydE92ZXJsYXlDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENoYXJ0T3ZlcmxheUNvbXBvbmVudCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDaGFydE92ZXJsYXlDb21wb25lbnQoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9yb3VuZGVkID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMuX3NpemVJbmNyZW1lbnQgPSAwO1xuICAgICAgICBfdGhpcy5zaGFkb3dSb290ID0gX3RoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICB2YXIgY29udGFpbmVyID0gT3ZlcmxheUNvbnRhaW5lclRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBfdGhpcy5fY29udGFpbmVyRWxlbWVudCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2hhcnQtb3ZlcmxheS1jb250YWluZXInKTtcbiAgICAgICAgX3RoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIENoYXJ0T3ZlcmxheUNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAodGhpcy5fY2hhcnRUeXBlICE9PSAnYmFyY29sdW1uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfYSA9IHRoaXMuX3NpemUsIGNoYXJ0V2lkdGggPSBfYS53aWR0aCwgY2hhcnRIZWlnaHQgPSBfYS5oZWlnaHQ7XG4gICAgICAgIHZhciBfYiA9IHRoaXMuX2NsaXBQYXRoLCBjbGlwUGF0aFkgPSBfYi55LCBjbGlwUGF0aEhlaWdodCA9IF9iLmhlaWdodDtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgXCJwb3NpdGlvbjogcmVsYXRpdmU7IHBvaW50ZXItZXZlbnRzOiBub25lOyBvdmVyZmxvdzogaGlkZGVuOyB3aWR0aDogXCIuY29uY2F0KGNoYXJ0V2lkdGgsIFwicHg7IGhlaWdodDogXCIpLmNvbmNhdChjaGFydEhlaWdodCwgXCJweDsgY2xpcC1wYXRoOiBpbnNldChcIikuY29uY2F0KGNsaXBQYXRoWSwgXCJweCAwIFwiKS5jb25jYXQoY2hhcnRIZWlnaHQgLSBjbGlwUGF0aFkgLSBjbGlwUGF0aEhlaWdodCwgXCJweCAwKTtcIikpO1xuICAgICAgICB0aGlzLl9zZXJpZXMuZm9yRWFjaChmdW5jdGlvbiAoc2luZ2xlU2VyaWVzKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogc2luZ2xlU2VyaWVzLmNvbG9yXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3RoaXMucmVuZGVyQVNlcmllcyhzaW5nbGVTZXJpZXMsIG9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZW5kZXJBeGlzTGFiZWxzKHRoaXMuX3hBeGlzTGFiZWxzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJBeGlzTGFiZWxzKHRoaXMuX3lBeGlzTGFiZWxzKTtcbiAgICB9O1xuICAgIENoYXJ0T3ZlcmxheUNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyQVNlcmllcyA9IGZ1bmN0aW9uIChzaW5nbGVTZXJpZXMsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgc2luZ2xlU2VyaWVzLmRhdGFQb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoZGF0YVBvaW50KSB7XG4gICAgICAgICAgICB2YXIgZGF0YUluZm8gPSBkYXRhUG9pbnQuZGF0YUluZm8sIGxhYmVsSW5mbyA9IGRhdGFQb2ludC5sYWJlbEluZm87XG4gICAgICAgICAgICBfdGhpcy5yZW5kZXJEYXRhKGRhdGFJbmZvLCBvcHRpb25zKTtcbiAgICAgICAgICAgIF90aGlzLnJlbmRlckxhYmVsKGxhYmVsSW5mbywgb3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ2hhcnRPdmVybGF5Q29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXJEYXRhID0gZnVuY3Rpb24gKGRhdGFJbmZvLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICghZGF0YUluZm8pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgeCA9IGRhdGFJbmZvLngsIHkgPSBkYXRhSW5mby55LCB3aWR0aCA9IGRhdGFJbmZvLndpZHRoLCBoZWlnaHQgPSBkYXRhSW5mby5oZWlnaHQ7XG4gICAgICAgIHZhciBkYXRhRWxlbWVudCA9IEJhckNvbHVtblRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICB2YXIgYmFyQ29sdW1uQ29udGFpbmVyID0gZGF0YUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlcmllcy1iYXItY29sdW1uLWNvbnRhaW5lcicpO1xuICAgICAgICB2YXIgYmFyQ29sdW1uID0gZGF0YUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlcmllcy1iYXItY29sdW1uJyk7XG4gICAgICAgIHZhciBpbmNyZW1lbnQgPSB0aGlzLl9zaXplSW5jcmVtZW50IC8gMTAwO1xuICAgICAgICB2YXIgcm91bmRlZFN0eWxlID0gJyc7XG4gICAgICAgIGlmICh0aGlzLl9pc0hvcml6b250YWwpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodCAqICgxICsgaW5jcmVtZW50KSArIDI7XG4gICAgICAgICAgICB5ID0geSAtIGhlaWdodCAqIGluY3JlbWVudCAvIDIgLSAxO1xuICAgICAgICAgICAgcm91bmRlZFN0eWxlID0gXCJib3JkZXItcmFkaXVzOiAwIFwiLmNvbmNhdChoZWlnaHQgLyAyLCBcInB4IFwiKS5jb25jYXQoaGVpZ2h0IC8gMiwgXCJweCAwO1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHdpZHRoID0gd2lkdGggKiAoMSArIGluY3JlbWVudCkgKyAyO1xuICAgICAgICAgICAgeCA9IHggLSB3aWR0aCAqIGluY3JlbWVudCAvIDIgLSAxO1xuICAgICAgICAgICAgcm91bmRlZFN0eWxlID0gXCJib3JkZXItcmFkaXVzOiBcIi5jb25jYXQod2lkdGggLyAyLCBcInB4IFwiKS5jb25jYXQod2lkdGggLyAyLCBcInB4IDAgMDtcIik7XG4gICAgICAgIH1cbiAgICAgICAgYmFyQ29sdW1uQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBcInBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiBcIi5jb25jYXQoeSwgXCJweDsgbGVmdDogXCIpLmNvbmNhdCh4LCBcInB4OyB3aWR0aDogXCIpLmNvbmNhdCh3aWR0aCwgXCJweDsgaGVpZ2h0OiBcIikuY29uY2F0KGhlaWdodCwgXCJweDtcIikpO1xuICAgICAgICB2YXIgY29sb3IgPSBkYXRhSW5mby5jb2xvciB8fCBvcHRpb25zLmNvbG9yO1xuICAgICAgICB2YXIgYmFyU3R5bGUgPSB0aGlzLl9yb3VuZGVkID9cbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvcjogXCIuY29uY2F0KGNvbG9yLCBcIjsgXCIpLmNvbmNhdChyb3VuZGVkU3R5bGUpIDpcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvcjogXCIuY29uY2F0KGNvbG9yLCBcIjtcIik7XG4gICAgICAgIGJhckNvbHVtbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYmFyU3R5bGUpO1xuICAgICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGRhdGFFbGVtZW50KTtcbiAgICB9O1xuICAgIENoYXJ0T3ZlcmxheUNvbXBvbmVudC5wcm90b3R5cGUuX3JlbmRlckF4aXNMYWJlbCA9IGZ1bmN0aW9uIChsYWJlbCkge1xuICAgICAgICBpZiAoIWxhYmVsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHggPSBsYWJlbC54LCB5ID0gbGFiZWwueSwgd2lkdGggPSBsYWJlbC53aWR0aCwgcG9pbnRWYWx1ZSA9IGxhYmVsLnBvaW50VmFsdWUsIGZvcm1hdHRlZFZhbHVlID0gbGFiZWwuZm9ybWF0dGVkVmFsdWU7XG4gICAgICAgIHZhciBsYWJlbEVsID0gQXhpc0xhYmVsVGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIHZhciBsYWJlbENvbnRhaW5lciA9IGxhYmVsRWwucXVlcnlTZWxlY3RvcignLmF4aXMtbGFiZWwtY29udGFpbmVyJyk7XG4gICAgICAgIGxhYmVsQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBcIndpZHRoOiBcIi5jb25jYXQod2lkdGggKyAzNiwgXCJweDsgbGVmdDogXCIpLmNvbmNhdCh4IC0gMzAsIFwicHg7IHRvcDogXCIpLmNvbmNhdCh5IC0gMiwgXCJweDtcIikpO1xuICAgICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsRWwpO1xuICAgICAgICB2YXIgbGFiZWxTcGFuID0gbGFiZWxDb250YWluZXIucXVlcnlTZWxlY3RvcignLmF4aXMtbGFiZWwnKTtcbiAgICAgICAgbGFiZWxTcGFuLmlubmVySFRNTCA9IGZvcm1hdHRlZFZhbHVlO1xuICAgICAgICB2YXIgaWNvbkltZyA9IGxhYmVsQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuICAgICAgICBpY29uSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaWNvbk1hcFtwb2ludFZhbHVlXSB8fCBpY29uTWFwLkNpdHkpO1xuICAgIH07XG4gICAgO1xuICAgIENoYXJ0T3ZlcmxheUNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyQXhpc0xhYmVscyA9IGZ1bmN0aW9uIChheGlzTGFiZWxzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChheGlzTGFiZWxzICYmICFBcnJheS5pc0FycmF5KGF4aXNMYWJlbHMpKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJBeGlzTGFiZWwoYXhpc0xhYmVscyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBheGlzTGFiZWxzLmZvckVhY2goZnVuY3Rpb24gKGxhYmVscykgeyByZXR1cm4gX3RoaXMucmVuZGVyQXhpc0xhYmVscyhsYWJlbHMpOyB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ2hhcnRPdmVybGF5Q29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXJMYWJlbCA9IGZ1bmN0aW9uIChsYWJlbEluZm8sIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFsYWJlbEluZm8pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgeCA9IGxhYmVsSW5mby54LCB5ID0gbGFiZWxJbmZvLnksIHdpZHRoID0gbGFiZWxJbmZvLndpZHRoLCBoZWlnaHQgPSBsYWJlbEluZm8uaGVpZ2h0O1xuICAgICAgICB2YXIgbGFiZWxTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBsYWJlbFNwYW4uc2V0QXR0cmlidXRlKCdzdHlsZScsIFwicG9zaXRpb246IGFic29sdXRlOyB0b3A6IFwiLmNvbmNhdCh5LCBcInB4OyBsZWZ0OiBcIikuY29uY2F0KHgsIFwicHg7IHdpZHRoOiBcIikuY29uY2F0KHdpZHRoLCBcInB4OyBoZWlnaHQ6IFwiKS5jb25jYXQoaGVpZ2h0LCBcInB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBjb2xvcjogXCIpLmNvbmNhdChvcHRpb25zLmNvbG9yLCBcIjtcIikpO1xuICAgICAgICBsYWJlbFNwYW4uaW5uZXJIVE1MID0gbGFiZWxJbmZvLmZvcm1hdHRlZFZhbHVlO1xuICAgICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsU3Bhbik7XG4gICAgfTtcbiAgICBDaGFydE92ZXJsYXlDb21wb25lbnQucHJvdG90eXBlLnNldEV4dGVuc2lvbkRhdGEgPSBmdW5jdGlvbiAoZXh0ZW5zaW9uRGF0YSkge1xuICAgICAgICB2YXIgY2hhcnRUeXBlID0gZXh0ZW5zaW9uRGF0YS5jaGFydFR5cGUsIGlzSG9yaXpvbnRhbCA9IGV4dGVuc2lvbkRhdGEuaXNIb3Jpem9udGFsLCBjaGFydFNpemUgPSBleHRlbnNpb25EYXRhLmNoYXJ0U2l6ZSwgY2xpcFBhdGggPSBleHRlbnNpb25EYXRhLmNsaXBQYXRoLCBzZXJpZXMgPSBleHRlbnNpb25EYXRhLnNlcmllcywgeEF4aXNMYWJlbHMgPSBleHRlbnNpb25EYXRhLnhBeGlzTGFiZWxzLCB5QXhpc0xhYmVscyA9IGV4dGVuc2lvbkRhdGEueUF4aXNMYWJlbHM7XG4gICAgICAgIHRoaXMuX3NpemUgPSBjaGFydFNpemU7XG4gICAgICAgIHRoaXMuX2NsaXBQYXRoID0gY2xpcFBhdGg7XG4gICAgICAgIHRoaXMuX3NlcmllcyA9IHNlcmllcztcbiAgICAgICAgdGhpcy5feEF4aXNMYWJlbHMgPSB4QXhpc0xhYmVscztcbiAgICAgICAgdGhpcy5feUF4aXNMYWJlbHMgPSB5QXhpc0xhYmVscztcbiAgICAgICAgdGhpcy5fY2hhcnRUeXBlID0gY2hhcnRUeXBlO1xuICAgICAgICB0aGlzLl9pc0hvcml6b250YWwgPSBpc0hvcml6b250YWw7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2hhcnRPdmVybGF5Q29tcG9uZW50LnByb3RvdHlwZSwgXCJyb3VuZGVkXCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JvdW5kZWQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2hhcnRPdmVybGF5Q29tcG9uZW50LnByb3RvdHlwZSwgXCJzaXplSW5jcmVtZW50XCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NpemVJbmNyZW1lbnQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQ2hhcnRPdmVybGF5Q29tcG9uZW50O1xufShIVE1MRWxlbWVudCkpO1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd2aXotb3ZlcmxheScsIENoYXJ0T3ZlcmxheUNvbXBvbmVudCk7XG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL1Bsb3RhcmVhT3ZlcmxheS50c1wiXSgpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9