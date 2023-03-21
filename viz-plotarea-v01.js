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
        _this._bgColor = '#fff';
        _this._axisLabelColor = '#999';
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
        var bgColor = this._bgColor;
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
        barColumnContainer.setAttribute('style', "background-color: ".concat(bgColor, "; position: absolute; top: ").concat(y, "px; left: ").concat(x, "px; width: ").concat(width, "px; height: ").concat(height, "px;"));
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
        var bgColor = this._bgColor;
        labelContainer.setAttribute('style', "background-color: ".concat(bgColor, "; width: ").concat(width + 36, "px; left: ").concat(x - 30, "px; top: ").concat(y - 2, "px;"));
        this._containerElement.appendChild(labelEl);
        var labelSpan = labelContainer.querySelector('.axis-label');
        var _axisLabelColor = this._axisLabelColor;
        labelSpan.setAttribute('style', "color: ".concat(_axisLabelColor));
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
        var bgColor = this._bgColor;
        labelSpan.setAttribute('style', "background-color: ".concat(bgColor, "; position: absolute; top: ").concat(y, "px; left: ").concat(x, "px; width: ").concat(width, "px; height: ").concat(height, "px; color: ").concat(options.color, ";"));
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
    Object.defineProperty(ChartOverlayComponent.prototype, "bgColor", {
        set: function (value) {
            this._bgColor = value;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChartOverlayComponent.prototype, "axisLabelColor", {
        set: function (value) {
            this._axisLabelColor = value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml6LXBsb3RhcmVhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCLHNDQUFzQyxrQkFBa0I7QUFDdkYsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsdUZBQXVGLGlDQUFpQyxtQ0FBbUMsK0JBQStCLFdBQVcsd0NBQXdDLHFDQUFxQyxXQUFXLDhCQUE4QiwwQkFBMEIsMkJBQTJCLFdBQVcsaUNBQWlDLGlDQUFpQyw0QkFBNEIsMkJBQTJCLG9DQUFvQyxrQ0FBa0Msd0NBQXdDLHFDQUFxQyxXQUFXLHVCQUF1QixnQ0FBZ0MsOEJBQThCLHNDQUFzQyxXQUFXLDRCQUE0QixnQ0FBZ0MsV0FBVztBQUMvMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxjQUFjO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLHNCQUFzQixrQkFBa0IsaUNBQWlDLG9DQUFvQyx1R0FBdUc7QUFDOVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0dBQWtHO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0dBQWdHO0FBQ2hHO0FBQ0EseUZBQXlGLG9CQUFvQix1QkFBdUIsd0JBQXdCLDZCQUE2Qiw4QkFBOEI7QUFDdk47QUFDQTtBQUNBLGtEQUFrRDtBQUNsRCxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFGQUFxRixrQ0FBa0MsNkJBQTZCLDBCQUEwQjtBQUM5SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsd0NBQXdDO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUFnRixvQkFBb0IsdUJBQXVCLHdCQUF3Qiw2QkFBNkIsK0JBQStCLGtDQUFrQztBQUNqUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7VUUzTEE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dpZGdldC1hZGQtb25zLy4vc3JjL1Bsb3RhcmVhT3ZlcmxheS50cyIsIndlYnBhY2s6Ly93aWRnZXQtYWRkLW9ucy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dpZGdldC1hZGQtb25zL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93aWRnZXQtYWRkLW9ucy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBPdmVybGF5Q29udGFpbmVyVGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuT3ZlcmxheUNvbnRhaW5lclRlbXBsYXRlLmlubmVySFRNTCA9IFwiXFxuICAgIDxzdHlsZT5cXG4gICAgICAgIC5jaGFydC1vdmVybGF5LWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB9XFxuICAgICAgICAuc2VyaWVzLWJhci1jb2x1bW4tY29udGFpbmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnNlcmllcy1iYXItY29sdW1uIHtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB9XFxuICAgICAgICAuYXhpcy1sYWJlbC1jb250YWluZXIge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcXG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgICAgICB9XFxuICAgICAgICAuYXhpcy1sYWJlbCB7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmF4aXMtbGFiZWwtaWNvbiB7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XFxuICAgICAgICB9XFxuICAgIDwvc3R5bGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNoYXJ0LW92ZXJsYXktY29udGFpbmVyXFxcIi8+XFxuXCI7XG52YXIgQmFyQ29sdW1uVGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuQmFyQ29sdW1uVGVtcGxhdGUuaW5uZXJIVE1MID0gXCI8ZGl2IGNsYXNzPVxcXCJzZXJpZXMtYmFyLWNvbHVtbi1jb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzZXJpZXMtYmFyLWNvbHVtblxcXCIvPlxcbjwvZGl2PlwiO1xudmFyIEF4aXNMYWJlbFRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbkF4aXNMYWJlbFRlbXBsYXRlLmlubmVySFRNTCA9IFwiXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJheGlzLWxhYmVsLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYXhpcy1sYWJlbFxcXCI+PC9zcGFuPlxcbiAgICAgICAgPGltZyBjbGFzcz1cXFwiYXhpcy1sYWJlbC1pY29uXFxcIlxcbiAgICAgICAgICAgIHdpZHRoPVxcXCIxNlxcXCJcXG4gICAgICAgICAgICBoZWlnaHQ9XFxcIjE2XFxcIlxcbiAgICAgICAgPlxcbiAgICA8L3NwYW4+XFxuXCI7XG52YXIgaWNvbk1hcCA9IHtcbiAgICAnQ2FsaWZvcm5pYSc6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC83OTA2Lzc5MDY0NTUucG5nJyxcbiAgICAnTmV2YWRhJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4Lzc5MDYvNzkwNjYwNi5wbmcnLFxuICAgICdPcmVnb24nOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvNzkwNi83OTA2NzI5LnBuZycsXG4gICAgJ0NhcmJvbmF0ZWQgRHJpbmtzJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzQzMjkvNDMyOTU0Mi5wbmcnLFxuICAgICdKdWljZXMnOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvMzE2NS8zMTY1NTg5LnBuZycsXG4gICAgJ0FsY29ob2wnOiAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8xMjgvMzE3NC8zMTc0NTM1LnBuZycsXG4gICAgJ090aGVycyc6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC8yNTIxLzI1MjExMjIucG5nJyxcbiAgICAnR3Jvc3MgTWFyZ2luJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzUwNDcvNTA0NzcxMy5wbmcnLFxuICAgICdEaXNjb3VudCc6ICdodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzEyOC83MjYvNzI2NDc2LnBuZycsXG4gICAgJ09yaWdpbmFsIFNhbGVzIFByaWNlJzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzY4OTUvNjg5NTE2OC5wbmcnLFxuICAgICdDaXR5JzogJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vMTI4LzE3MTkvMTcxOTY2Ni5wbmcnXG59O1xuLy8gRm9yIFBvQ1xudmFyIENoYXJ0T3ZlcmxheUNvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ2hhcnRPdmVybGF5Q29tcG9uZW50LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENoYXJ0T3ZlcmxheUNvbXBvbmVudCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX3JvdW5kZWQgPSB0cnVlO1xuICAgICAgICBfdGhpcy5fc2l6ZUluY3JlbWVudCA9IDA7XG4gICAgICAgIF90aGlzLl9iZ0NvbG9yID0gJyNmZmYnO1xuICAgICAgICBfdGhpcy5fYXhpc0xhYmVsQ29sb3IgPSAnIzk5OSc7XG4gICAgICAgIF90aGlzLnNoYWRvd1Jvb3QgPSBfdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBPdmVybGF5Q29udGFpbmVyVGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIF90aGlzLl9jb250YWluZXJFbGVtZW50ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jaGFydC1vdmVybGF5LWNvbnRhaW5lcicpO1xuICAgICAgICBfdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQ2hhcnRPdmVybGF5Q29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICh0aGlzLl9jaGFydFR5cGUgIT09ICdiYXJjb2x1bW4nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9hID0gdGhpcy5fc2l6ZSwgY2hhcnRXaWR0aCA9IF9hLndpZHRoLCBjaGFydEhlaWdodCA9IF9hLmhlaWdodDtcbiAgICAgICAgdmFyIF9iID0gdGhpcy5fY2xpcFBhdGgsIGNsaXBQYXRoWSA9IF9iLnksIGNsaXBQYXRoSGVpZ2h0ID0gX2IuaGVpZ2h0O1xuICAgICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBcInBvc2l0aW9uOiByZWxhdGl2ZTsgcG9pbnRlci1ldmVudHM6IG5vbmU7IG92ZXJmbG93OiBoaWRkZW47IHdpZHRoOiBcIi5jb25jYXQoY2hhcnRXaWR0aCwgXCJweDsgaGVpZ2h0OiBcIikuY29uY2F0KGNoYXJ0SGVpZ2h0LCBcInB4OyBjbGlwLXBhdGg6IGluc2V0KFwiKS5jb25jYXQoY2xpcFBhdGhZLCBcInB4IDAgXCIpLmNvbmNhdChjaGFydEhlaWdodCAtIGNsaXBQYXRoWSAtIGNsaXBQYXRoSGVpZ2h0LCBcInB4IDApO1wiKSk7XG4gICAgICAgIHRoaXMuX3Nlcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChzaW5nbGVTZXJpZXMpIHtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBzaW5nbGVTZXJpZXMuY29sb3JcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfdGhpcy5yZW5kZXJBU2VyaWVzKHNpbmdsZVNlcmllcywgb3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlbmRlckF4aXNMYWJlbHModGhpcy5feEF4aXNMYWJlbHMpO1xuICAgICAgICB0aGlzLnJlbmRlckF4aXNMYWJlbHModGhpcy5feUF4aXNMYWJlbHMpO1xuICAgIH07XG4gICAgQ2hhcnRPdmVybGF5Q29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXJBU2VyaWVzID0gZnVuY3Rpb24gKHNpbmdsZVNlcmllcywgb3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBzaW5nbGVTZXJpZXMuZGF0YVBvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChkYXRhUG9pbnQpIHtcbiAgICAgICAgICAgIHZhciBkYXRhSW5mbyA9IGRhdGFQb2ludC5kYXRhSW5mbywgbGFiZWxJbmZvID0gZGF0YVBvaW50LmxhYmVsSW5mbztcbiAgICAgICAgICAgIF90aGlzLnJlbmRlckRhdGEoZGF0YUluZm8sIG9wdGlvbnMpO1xuICAgICAgICAgICAgX3RoaXMucmVuZGVyTGFiZWwobGFiZWxJbmZvLCBvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDaGFydE92ZXJsYXlDb21wb25lbnQucHJvdG90eXBlLnJlbmRlckRhdGEgPSBmdW5jdGlvbiAoZGF0YUluZm8sIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFkYXRhSW5mbykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB4ID0gZGF0YUluZm8ueCwgeSA9IGRhdGFJbmZvLnksIHdpZHRoID0gZGF0YUluZm8ud2lkdGgsIGhlaWdodCA9IGRhdGFJbmZvLmhlaWdodDtcbiAgICAgICAgdmFyIGRhdGFFbGVtZW50ID0gQmFyQ29sdW1uVGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIHZhciBiYXJDb2x1bW5Db250YWluZXIgPSBkYXRhRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2VyaWVzLWJhci1jb2x1bW4tY29udGFpbmVyJyk7XG4gICAgICAgIHZhciBiYXJDb2x1bW4gPSBkYXRhRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2VyaWVzLWJhci1jb2x1bW4nKTtcbiAgICAgICAgdmFyIGluY3JlbWVudCA9IHRoaXMuX3NpemVJbmNyZW1lbnQgLyAxMDA7XG4gICAgICAgIHZhciBiZ0NvbG9yID0gdGhpcy5fYmdDb2xvcjtcbiAgICAgICAgdmFyIHJvdW5kZWRTdHlsZSA9ICcnO1xuICAgICAgICBpZiAodGhpcy5faXNIb3Jpem9udGFsKSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBoZWlnaHQgKiAoMSArIGluY3JlbWVudCkgKyAyO1xuICAgICAgICAgICAgeSA9IHkgLSBoZWlnaHQgKiBpbmNyZW1lbnQgLyAyIC0gMTtcbiAgICAgICAgICAgIHJvdW5kZWRTdHlsZSA9IFwiYm9yZGVyLXJhZGl1czogMCBcIi5jb25jYXQoaGVpZ2h0IC8gMiwgXCJweCBcIikuY29uY2F0KGhlaWdodCAvIDIsIFwicHggMDtcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3aWR0aCA9IHdpZHRoICogKDEgKyBpbmNyZW1lbnQpICsgMjtcbiAgICAgICAgICAgIHggPSB4IC0gd2lkdGggKiBpbmNyZW1lbnQgLyAyIC0gMTtcbiAgICAgICAgICAgIHJvdW5kZWRTdHlsZSA9IFwiYm9yZGVyLXJhZGl1czogXCIuY29uY2F0KHdpZHRoIC8gMiwgXCJweCBcIikuY29uY2F0KHdpZHRoIC8gMiwgXCJweCAwIDA7XCIpO1xuICAgICAgICB9XG4gICAgICAgIGJhckNvbHVtbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgXCJiYWNrZ3JvdW5kLWNvbG9yOiBcIi5jb25jYXQoYmdDb2xvciwgXCI7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiBcIikuY29uY2F0KHksIFwicHg7IGxlZnQ6IFwiKS5jb25jYXQoeCwgXCJweDsgd2lkdGg6IFwiKS5jb25jYXQod2lkdGgsIFwicHg7IGhlaWdodDogXCIpLmNvbmNhdChoZWlnaHQsIFwicHg7XCIpKTtcbiAgICAgICAgdmFyIGNvbG9yID0gZGF0YUluZm8uY29sb3IgfHwgb3B0aW9ucy5jb2xvcjtcbiAgICAgICAgdmFyIGJhclN0eWxlID0gdGhpcy5fcm91bmRlZCA/XG4gICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3I6IFwiLmNvbmNhdChjb2xvciwgXCI7IFwiKS5jb25jYXQocm91bmRlZFN0eWxlKSA6XG4gICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3I6IFwiLmNvbmNhdChjb2xvciwgXCI7XCIpO1xuICAgICAgICBiYXJDb2x1bW4uc2V0QXR0cmlidXRlKCdzdHlsZScsIGJhclN0eWxlKTtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChkYXRhRWxlbWVudCk7XG4gICAgfTtcbiAgICBDaGFydE92ZXJsYXlDb21wb25lbnQucHJvdG90eXBlLl9yZW5kZXJBeGlzTGFiZWwgPSBmdW5jdGlvbiAobGFiZWwpIHtcbiAgICAgICAgaWYgKCFsYWJlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB4ID0gbGFiZWwueCwgeSA9IGxhYmVsLnksIHdpZHRoID0gbGFiZWwud2lkdGgsIHBvaW50VmFsdWUgPSBsYWJlbC5wb2ludFZhbHVlLCBmb3JtYXR0ZWRWYWx1ZSA9IGxhYmVsLmZvcm1hdHRlZFZhbHVlO1xuICAgICAgICB2YXIgbGFiZWxFbCA9IEF4aXNMYWJlbFRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICB2YXIgbGFiZWxDb250YWluZXIgPSBsYWJlbEVsLnF1ZXJ5U2VsZWN0b3IoJy5heGlzLWxhYmVsLWNvbnRhaW5lcicpO1xuICAgICAgICB2YXIgYmdDb2xvciA9IHRoaXMuX2JnQ29sb3I7XG4gICAgICAgIGxhYmVsQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBcImJhY2tncm91bmQtY29sb3I6IFwiLmNvbmNhdChiZ0NvbG9yLCBcIjsgd2lkdGg6IFwiKS5jb25jYXQod2lkdGggKyAzNiwgXCJweDsgbGVmdDogXCIpLmNvbmNhdCh4IC0gMzAsIFwicHg7IHRvcDogXCIpLmNvbmNhdCh5IC0gMiwgXCJweDtcIikpO1xuICAgICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsRWwpO1xuICAgICAgICB2YXIgbGFiZWxTcGFuID0gbGFiZWxDb250YWluZXIucXVlcnlTZWxlY3RvcignLmF4aXMtbGFiZWwnKTtcbiAgICAgICAgdmFyIF9heGlzTGFiZWxDb2xvciA9IHRoaXMuX2F4aXNMYWJlbENvbG9yO1xuICAgICAgICBsYWJlbFNwYW4uc2V0QXR0cmlidXRlKCdzdHlsZScsIFwiY29sb3I6IFwiLmNvbmNhdChfYXhpc0xhYmVsQ29sb3IpKTtcbiAgICAgICAgbGFiZWxTcGFuLmlubmVySFRNTCA9IGZvcm1hdHRlZFZhbHVlO1xuICAgICAgICB2YXIgaWNvbkltZyA9IGxhYmVsQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuICAgICAgICBpY29uSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgaWNvbk1hcFtwb2ludFZhbHVlXSB8fCBpY29uTWFwLkNpdHkpO1xuICAgIH07XG4gICAgO1xuICAgIENoYXJ0T3ZlcmxheUNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyQXhpc0xhYmVscyA9IGZ1bmN0aW9uIChheGlzTGFiZWxzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChheGlzTGFiZWxzICYmICFBcnJheS5pc0FycmF5KGF4aXNMYWJlbHMpKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJBeGlzTGFiZWwoYXhpc0xhYmVscyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBheGlzTGFiZWxzLmZvckVhY2goZnVuY3Rpb24gKGxhYmVscykgeyByZXR1cm4gX3RoaXMucmVuZGVyQXhpc0xhYmVscyhsYWJlbHMpOyB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ2hhcnRPdmVybGF5Q29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXJMYWJlbCA9IGZ1bmN0aW9uIChsYWJlbEluZm8sIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFsYWJlbEluZm8pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgeCA9IGxhYmVsSW5mby54LCB5ID0gbGFiZWxJbmZvLnksIHdpZHRoID0gbGFiZWxJbmZvLndpZHRoLCBoZWlnaHQgPSBsYWJlbEluZm8uaGVpZ2h0O1xuICAgICAgICB2YXIgbGFiZWxTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB2YXIgYmdDb2xvciA9IHRoaXMuX2JnQ29sb3I7XG4gICAgICAgIGxhYmVsU3Bhbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgXCJiYWNrZ3JvdW5kLWNvbG9yOiBcIi5jb25jYXQoYmdDb2xvciwgXCI7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiBcIikuY29uY2F0KHksIFwicHg7IGxlZnQ6IFwiKS5jb25jYXQoeCwgXCJweDsgd2lkdGg6IFwiKS5jb25jYXQod2lkdGgsIFwicHg7IGhlaWdodDogXCIpLmNvbmNhdChoZWlnaHQsIFwicHg7IGNvbG9yOiBcIikuY29uY2F0KG9wdGlvbnMuY29sb3IsIFwiO1wiKSk7XG4gICAgICAgIGxhYmVsU3Bhbi5pbm5lckhUTUwgPSBsYWJlbEluZm8uZm9ybWF0dGVkVmFsdWU7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWxTcGFuKTtcbiAgICB9O1xuICAgIENoYXJ0T3ZlcmxheUNvbXBvbmVudC5wcm90b3R5cGUuc2V0RXh0ZW5zaW9uRGF0YSA9IGZ1bmN0aW9uIChleHRlbnNpb25EYXRhKSB7XG4gICAgICAgIHZhciBjaGFydFR5cGUgPSBleHRlbnNpb25EYXRhLmNoYXJ0VHlwZSwgaXNIb3Jpem9udGFsID0gZXh0ZW5zaW9uRGF0YS5pc0hvcml6b250YWwsIGNoYXJ0U2l6ZSA9IGV4dGVuc2lvbkRhdGEuY2hhcnRTaXplLCBjbGlwUGF0aCA9IGV4dGVuc2lvbkRhdGEuY2xpcFBhdGgsIHNlcmllcyA9IGV4dGVuc2lvbkRhdGEuc2VyaWVzLCB4QXhpc0xhYmVscyA9IGV4dGVuc2lvbkRhdGEueEF4aXNMYWJlbHMsIHlBeGlzTGFiZWxzID0gZXh0ZW5zaW9uRGF0YS55QXhpc0xhYmVscztcbiAgICAgICAgdGhpcy5fc2l6ZSA9IGNoYXJ0U2l6ZTtcbiAgICAgICAgdGhpcy5fY2xpcFBhdGggPSBjbGlwUGF0aDtcbiAgICAgICAgdGhpcy5fc2VyaWVzID0gc2VyaWVzO1xuICAgICAgICB0aGlzLl94QXhpc0xhYmVscyA9IHhBeGlzTGFiZWxzO1xuICAgICAgICB0aGlzLl95QXhpc0xhYmVscyA9IHlBeGlzTGFiZWxzO1xuICAgICAgICB0aGlzLl9jaGFydFR5cGUgPSBjaGFydFR5cGU7XG4gICAgICAgIHRoaXMuX2lzSG9yaXpvbnRhbCA9IGlzSG9yaXpvbnRhbDtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDaGFydE92ZXJsYXlDb21wb25lbnQucHJvdG90eXBlLCBcInJvdW5kZWRcIiwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcm91bmRlZCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDaGFydE92ZXJsYXlDb21wb25lbnQucHJvdG90eXBlLCBcInNpemVJbmNyZW1lbnRcIiwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2l6ZUluY3JlbWVudCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDaGFydE92ZXJsYXlDb21wb25lbnQucHJvdG90eXBlLCBcImJnQ29sb3JcIiwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fYmdDb2xvciA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDaGFydE92ZXJsYXlDb21wb25lbnQucHJvdG90eXBlLCBcImF4aXNMYWJlbENvbG9yXCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2F4aXNMYWJlbENvbG9yID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIENoYXJ0T3ZlcmxheUNvbXBvbmVudDtcbn0oSFRNTEVsZW1lbnQpKTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndml6LW92ZXJsYXknLCBDaGFydE92ZXJsYXlDb21wb25lbnQpO1xuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NyYy9QbG90YXJlYU92ZXJsYXkudHNcIl0oKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==