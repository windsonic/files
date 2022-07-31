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

/***/ "./src/extensions/TooltipExtension.ts":
/*!********************************************!*\
  !*** ./src/extensions/TooltipExtension.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tooltipExtension = void 0;
__webpack_require__(/*! ./web-components/VizTooltip */ "./src/extensions/web-components/VizTooltip.ts");
__webpack_require__(/*! ./web-components/VizTooltipBuilderPanel */ "./src/extensions/web-components/VizTooltipBuilderPanel.ts");
exports.tooltipExtension = {
    id: 'com.sap.addOn.tooltip',
    extensionPoint: 'sap.addOn.viz.tooltip',
    description: 'Replace existing tooltip component',
    factory: function () { return ({
        tag: 'viz-tooltip',
        buildPanelTag: 'viz-tooltip-build',
        stylePanelTag: 'viz-tooltip-style'
    }); }
};


/***/ }),

/***/ "./src/extensions/TooltipLinkExtension.ts":
/*!************************************************!*\
  !*** ./src/extensions/TooltipLinkExtension.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tooltipLinkExtension = void 0;
exports.tooltipLinkExtension = {
    id: 'com.sap.addOn.tooltip.tooltipLink',
    extensionPoint: 'sap.addOn.viz.tooltip.tooltipLink',
    description: 'Add links on chart tooltip',
    factory: function () {
        return {
            getTooltipLink: function (header, details) {
                var headerEntities = header.headerEntities || [];
                var detailsEntities = details.detailsEntities || [];
                var detailsPath = detailsEntities
                    .map(function (entry) { return entry.value; })
                    .reduce(function (result, curItem) {
                    return "".concat(result, "/").concat(curItem);
                }, '');
                var label = headerEntities[0] ? headerEntities[0].title : 'Details Link';
                return {
                    url: "http://www.sap.com/".concat(detailsPath),
                    label: label
                };
            },
        };
    }
};


/***/ }),

/***/ "./src/extensions/web-components/VizTooltip.ts":
/*!*****************************************************!*\
  !*** ./src/extensions/web-components/VizTooltip.ts ***!
  \*****************************************************/
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


/***/ }),

/***/ "./src/extensions/web-components/VizTooltipBuilderPanel.ts":
/*!*****************************************************************!*\
  !*** ./src/extensions/web-components/VizTooltipBuilderPanel.ts ***!
  \*****************************************************************/
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


/***/ }),

/***/ "./src/registry.ts":
/*!*************************!*\
  !*** ./src/registry.ts ***!
  \*************************/
/***/ (() => {



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var TooltipExtension_1 = __webpack_require__(/*! ./extensions/TooltipExtension */ "./src/extensions/TooltipExtension.ts");
var TooltipLinkExtension_1 = __webpack_require__(/*! ./extensions/TooltipLinkExtension */ "./src/extensions/TooltipLinkExtension.ts");
__webpack_require__(/*! ./registry */ "./src/registry.ts");
var global = window;
if (global.sap && global.sap.importAddOnExtensions) {
    global.sap.importAddOnExtensions([
        TooltipLinkExtension_1.tooltipLinkExtension,
        TooltipExtension_1.tooltipExtension,
    ]);
}
var sampleProps = {
    headerProps: {
        headerEntities: [
            {
                "title": "Original Sales Price",
                "value": "$27.66 Million"
            }
        ],
    },
    detailsProps: {
        detailsEntities: [
            {
                "title": "Location",
                "value": "California"
            },
            {
                "title": "Product",
                "value": "Alcohol"
            },
            {
                "title": "Sales Manager",
                "value": "David Carl"
            }
        ],
    },
};
var tooltip = document.createElement('viz-tooltip');
tooltip.setAttribute('id', 'viz-tooltip');
tooltip.props = sampleProps;
// document.body.appendChild(tooltip);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbnMvLi9ub2RlX21vZHVsZXMvQHdlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzL2N1c3RvbS1lbGVtZW50cy1lczUtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly93aWRnZXQtYWRkLW9ucy8uL3NyYy9leHRlbnNpb25zL1Rvb2x0aXBFeHRlbnNpb24udHMiLCJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbnMvLi9zcmMvZXh0ZW5zaW9ucy9Ub29sdGlwTGlua0V4dGVuc2lvbi50cyIsIndlYnBhY2s6Ly93aWRnZXQtYWRkLW9ucy8uL3NyYy9leHRlbnNpb25zL3dlYi1jb21wb25lbnRzL1ZpelRvb2x0aXAudHMiLCJ3ZWJwYWNrOi8vd2lkZ2V0LWFkZC1vbnMvLi9zcmMvZXh0ZW5zaW9ucy93ZWItY29tcG9uZW50cy9WaXpUb29sdGlwQnVpbGRlclBhbmVsLnRzIiwid2VicGFjazovL3dpZGdldC1hZGQtb25zLy4vc3JjL3JlZ2lzdHJ5LnRzIiwid2VicGFjazovL3dpZGdldC1hZGQtb25zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dpZGdldC1hZGQtb25zLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG5AbGljZW5zZSBAbm9jb21waWxlXG5Db3B5cmlnaHQgKGMpIDIwMTggVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuKGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICAoZnVuY3Rpb24oKXtpZih2b2lkIDA9PT13aW5kb3cuUmVmbGVjdHx8dm9pZCAwPT09d2luZG93LmN1c3RvbUVsZW1lbnRzfHx3aW5kb3cuY3VzdG9tRWxlbWVudHMucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjaylyZXR1cm47Y29uc3QgYT1IVE1MRWxlbWVudDt3aW5kb3cuSFRNTEVsZW1lbnQ9e0hUTUxFbGVtZW50OmZ1bmN0aW9uIEhUTUxFbGVtZW50KCl7cmV0dXJuIFJlZmxlY3QuY29uc3RydWN0KGEsW10sdGhpcy5jb25zdHJ1Y3Rvcil9fS5IVE1MRWxlbWVudCxIVE1MRWxlbWVudC5wcm90b3R5cGU9YS5wcm90b3R5cGUsSFRNTEVsZW1lbnQucHJvdG90eXBlLmNvbnN0cnVjdG9yPUhUTUxFbGVtZW50LE9iamVjdC5zZXRQcm90b3R5cGVPZihIVE1MRWxlbWVudCxhKTt9KSgpO1xuXG59KCkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnRvb2x0aXBFeHRlbnNpb24gPSB2b2lkIDA7XG5yZXF1aXJlKFwiLi93ZWItY29tcG9uZW50cy9WaXpUb29sdGlwXCIpO1xucmVxdWlyZShcIi4vd2ViLWNvbXBvbmVudHMvVml6VG9vbHRpcEJ1aWxkZXJQYW5lbFwiKTtcbmV4cG9ydHMudG9vbHRpcEV4dGVuc2lvbiA9IHtcbiAgICBpZDogJ2NvbS5zYXAuYWRkT24udG9vbHRpcCcsXG4gICAgZXh0ZW5zaW9uUG9pbnQ6ICdzYXAuYWRkT24udml6LnRvb2x0aXAnLFxuICAgIGRlc2NyaXB0aW9uOiAnUmVwbGFjZSBleGlzdGluZyB0b29sdGlwIGNvbXBvbmVudCcsXG4gICAgZmFjdG9yeTogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHtcbiAgICAgICAgdGFnOiAndml6LXRvb2x0aXAnLFxuICAgICAgICBidWlsZFBhbmVsVGFnOiAndml6LXRvb2x0aXAtYnVpbGQnLFxuICAgICAgICBzdHlsZVBhbmVsVGFnOiAndml6LXRvb2x0aXAtc3R5bGUnXG4gICAgfSk7IH1cbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudG9vbHRpcExpbmtFeHRlbnNpb24gPSB2b2lkIDA7XG5leHBvcnRzLnRvb2x0aXBMaW5rRXh0ZW5zaW9uID0ge1xuICAgIGlkOiAnY29tLnNhcC5hZGRPbi50b29sdGlwLnRvb2x0aXBMaW5rJyxcbiAgICBleHRlbnNpb25Qb2ludDogJ3NhcC5hZGRPbi52aXoudG9vbHRpcC50b29sdGlwTGluaycsXG4gICAgZGVzY3JpcHRpb246ICdBZGQgbGlua3Mgb24gY2hhcnQgdG9vbHRpcCcsXG4gICAgZmFjdG9yeTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0VG9vbHRpcExpbms6IGZ1bmN0aW9uIChoZWFkZXIsIGRldGFpbHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGVhZGVyRW50aXRpZXMgPSBoZWFkZXIuaGVhZGVyRW50aXRpZXMgfHwgW107XG4gICAgICAgICAgICAgICAgdmFyIGRldGFpbHNFbnRpdGllcyA9IGRldGFpbHMuZGV0YWlsc0VudGl0aWVzIHx8IFtdO1xuICAgICAgICAgICAgICAgIHZhciBkZXRhaWxzUGF0aCA9IGRldGFpbHNFbnRpdGllc1xuICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChlbnRyeSkgeyByZXR1cm4gZW50cnkudmFsdWU7IH0pXG4gICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwgY3VySXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQocmVzdWx0LCBcIi9cIikuY29uY2F0KGN1ckl0ZW0pO1xuICAgICAgICAgICAgICAgIH0sICcnKTtcbiAgICAgICAgICAgICAgICB2YXIgbGFiZWwgPSBoZWFkZXJFbnRpdGllc1swXSA/IGhlYWRlckVudGl0aWVzWzBdLnRpdGxlIDogJ0RldGFpbHMgTGluayc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly93d3cuc2FwLmNvbS9cIi5jb25jYXQoZGV0YWlsc1BhdGgpLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCJAd2ViY29tcG9uZW50cy93ZWJjb21wb25lbnRzanMvY3VzdG9tLWVsZW1lbnRzLWVzNS1hZGFwdGVyXCIpO1xudmFyIHJvd1RlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnJvd1RlbXBsYXRlLmlubmVySFRNTCA9IFwiXFxuICAgIDxkaXYgY2xhc3M9XFxcInRvb2x0aXAtcm93XFxcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJlbnRyeS1pY29uXFxcIj48L3NwYW4+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0b29sdGlwLXJvdy1sYWJlbFxcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImVudHJ5LWxhYmVsXFxcIj48L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXCI7XG52YXIgY29udGFpbmVyVGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuY29udGFpbmVyVGVtcGxhdGUuaW5uZXJIVE1MID0gXCJcXG4gICAgPHN0eWxlPlxcbiAgICAgICAgOmhvc3Qge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIG1pbi13aWR0aDogODBweDtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI0cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9vbHRpcC1jb250YWluZXIge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI0cHg7XFxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByaWNlOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTQVAtaWNvbnM7XFxuICAgICAgICAgICAgY29udGVudDogXFxcIlxcXFxFMDI2XFxcIjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tYW5hZ2VyOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTQVAtaWNvbnM7XFxuICAgICAgICAgICAgY29udGVudDogXFxcIlxcXFxFMDM2XFxcIjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5wcm9kdWN0OjpiZWZvcmUge1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTQVAtaWNvbnM7XFxuICAgICAgICAgICAgY29udGVudCBcXFwiXFxcXEUxNkRcXFwiO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmxvY2F0aW9uOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTQVAtaWNvbnM7XFxuICAgICAgICAgICAgY29udGVudCBcXFwiXFxcXEUwMjFcXFwiO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnN0b3JlOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTQVAtaWNvbnM7XFxuICAgICAgICAgICAgY29udGVudCBcXFwiXFxcXEUwMEZcXFwiO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRvb2x0aXAtcm93IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9vbHRpcC1yb3ctbGFiZWwge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICAgICAgICAgIGZsZXg6IGF1dG87XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9vbHRpcC1yb3ctbGFiZWwgcHJvZ3Jlc3Mge1xcbiAgICAgICAgICAgIGhlaWdodDogNnB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9vbHRpcC1yb3ctbGFiZWwgcHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtYmFyIHtcXG4gICAgICAgICAgICBjb2xvcjogbGlnaHRibHVlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9vbHRpcC1yb3ctbGFiZWwgcHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b29sdGlwLXJvdzpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZTZlN2U4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmVudHJ5LWljb24ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmVudHJ5LWxhYmVsIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgZmxleDogYXV0bztcXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICAgICAgfVxcbiAgICA8L3N0eWxlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0b29sdGlwLWNvbnRhaW5lclxcXCI+XFxuICAgIDwvZGl2PlxcblxcblwiO1xudmFyIGljb25NYXBwaW5nID0ge1xuICAgICdMb2NhdGlvbic6ICdsb2NhdGlvbicsXG4gICAgJ1Byb2R1Y3QnOiAncHJvZHVjdCcsXG4gICAgJ1NhbGVzIE1hbmFnZXInOiAnbWFuYWdlcicsXG4gICAgJ09yaWdpbmFsIFNhbGVzIFByaWNlJzogJ3ByaWNlJyxcbn07XG52YXIgdG9vbHRpcEVudHJ5VG9Sb3cgPSBmdW5jdGlvbiAoZW50cnksIHdpdGhQZXJjZW50YWdlQmFyLCBtYXgpIHtcbiAgICBpZiAod2l0aFBlcmNlbnRhZ2VCYXIgPT09IHZvaWQgMCkgeyB3aXRoUGVyY2VudGFnZUJhciA9IGZhbHNlOyB9XG4gICAgaWYgKG1heCA9PT0gdm9pZCAwKSB7IG1heCA9IDEwMDsgfVxuICAgIHZhciByb3dFbGVtZW50ID0gcm93VGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgdmFyIGljb25FbCA9IHJvd0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVudHJ5LWljb24nKTtcbiAgICB2YXIgbGFiZWxFbCA9IHJvd0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVudHJ5LWxhYmVsJyk7XG4gICAgaWNvbkVsLmNsYXNzTGlzdC5hZGQoaWNvbk1hcHBpbmdbZW50cnkudGl0bGVdKTtcbiAgICBsYWJlbEVsLnRleHRDb250ZW50ID0gZW50cnkudmFsdWU7XG4gICAgaWYgKHdpdGhQZXJjZW50YWdlQmFyKSB7XG4gICAgICAgIHZhciBwZXJjZW50YWdlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJvZ3Jlc3MnKTtcbiAgICAgICAgcGVyY2VudGFnZUJhci52YWx1ZSA9IE51bWJlcigvWy4wLTldKy8uZXhlYyhlbnRyeS52YWx1ZSlbMF0pO1xuICAgICAgICBwZXJjZW50YWdlQmFyLm1heCA9IG1heDtcbiAgICAgICAgdmFyIHJvd0xhYmVsRGl2ID0gcm93RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcC1yb3ctbGFiZWwnKTtcbiAgICAgICAgLy8gKHBlcmNlbnRhZ2VCYXIgYXMgSFRNTEVsZW1lbnQpLnN0eWxlWyd3aWR0aCddID0gJzEwMCUnO1xuICAgICAgICByb3dMYWJlbERpdi5hcHBlbmRDaGlsZChwZXJjZW50YWdlQmFyKTtcbiAgICB9XG4gICAgcmV0dXJuIHJvd0VsZW1lbnQ7XG59O1xudmFyIFZpelRvb2x0aXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFZpelRvb2x0aXAsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVml6VG9vbHRpcCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX21heCA9IDEwMDtcbiAgICAgICAgX3RoaXMuX2NvbG9yID0gJ2xpZ2h0Ymx1ZSc7XG4gICAgICAgIF90aGlzLl9zaGFkb3dSb290ID0gX3RoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICBfdGhpcy5fc2hhZG93Um9vdC5hcHBlbmRDaGlsZChjb250YWluZXJUZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIF90aGlzLl90b29sdGlwQ29udGFpbmVyID0gX3RoaXMuX3NoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLnRvb2x0aXAtY29udGFpbmVyJyk7XG4gICAgICAgIF90aGlzLl9wcm9wcyA9IHt9O1xuICAgICAgICBfdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBWaXpUb29sdGlwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX3Rvb2x0aXBDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICh0aGlzLl9wcm9wcy5oZWFkZXJQcm9wcykge1xuICAgICAgICAgICAgdmFyIGhlYWRlckVudGl0aWVzID0gdGhpcy5fcHJvcHMuaGVhZGVyUHJvcHMuaGVhZGVyRW50aXRpZXM7XG4gICAgICAgICAgICBoZWFkZXJFbnRpdGllcyA9PT0gbnVsbCB8fCBoZWFkZXJFbnRpdGllcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGVhZGVyRW50aXRpZXMuZm9yRWFjaChmdW5jdGlvbiAoaGVhZGVyRW50cnkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fdG9vbHRpcENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b29sdGlwRW50cnlUb1JvdyhoZWFkZXJFbnRyeSwgdHJ1ZSwgX3RoaXMuX21heCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3Byb3BzLmRldGFpbHNQcm9wcykge1xuICAgICAgICAgICAgdmFyIGRldGFpbHNFbnRpdGllcyA9IHRoaXMuX3Byb3BzLmRldGFpbHNQcm9wcy5kZXRhaWxzRW50aXRpZXM7XG4gICAgICAgICAgICBkZXRhaWxzRW50aXRpZXMgPT09IG51bGwgfHwgZGV0YWlsc0VudGl0aWVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZXRhaWxzRW50aXRpZXMuZm9yRWFjaChmdW5jdGlvbiAoZGV0YWlsRW50cnkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fdG9vbHRpcENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b29sdGlwRW50cnlUb1JvdyhkZXRhaWxFbnRyeSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2NvbG9yKSB7XG4gICAgICAgICAgICB2YXIgcGVyY2VudGFnZUNvbG9yUmVnID0gL3Byb2dyZXNzOjpcXC13ZWJraXRcXC1wcm9ncmVzc1xcLXZhbHVlXFxzK1xce1xccytiYWNrZ3JvdW5kLWNvbG9yOlxccytbI2EtejAtOV0rXFxzPztcXHMrfS87XG4gICAgICAgICAgICB2YXIgc3R5bGVFbGVtZW50ID0gdGhpcy5fc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdzdHlsZScpO1xuICAgICAgICAgICAgdmFyIHN0eWxlQ29udGVudCA9IHN0eWxlRWxlbWVudC50ZXh0Q29udGVudC5yZXBsYWNlKHBlcmNlbnRhZ2VDb2xvclJlZywgXCJwcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7IGJhY2tncm91bmQtY29sb3I6IFwiLmNvbmNhdCh0aGlzLl9jb2xvciwgXCI7IH1cIikpO1xuICAgICAgICAgICAgc3R5bGVFbGVtZW50LmlubmVySFRNTCA9IHN0eWxlQ29udGVudDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZpelRvb2x0aXAucHJvdG90eXBlLCBcInRlc3RQcm9wc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICd0ZXN0UG9wJztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWaXpUb29sdGlwLnByb3RvdHlwZSwgXCJwcm9wc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKHt9LCB0aGlzLl9wcm9wcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9wcm9wcyA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWaXpUb29sdGlwLnByb3RvdHlwZSwgXCJzZXR0aW5nc1wiLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYXggPSAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhbHVlLm1heCkgfHwgdGhpcy5fbWF4O1xuICAgICAgICAgICAgdGhpcy5fY29sb3IgPSAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhbHVlLmNvbG9yKSB8fCB0aGlzLl9jb2xvcjtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gVml6VG9vbHRpcDtcbn0oSFRNTEVsZW1lbnQpKTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndml6LXRvb2x0aXAnLCBWaXpUb29sdGlwKTtcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBcIlxcbiAgICA8Zm9ybSBpZD1cXFwiZm9ybVxcXCI+XFxuICAgICAgICA8ZmllbGRzZXQ+XFxuICAgICAgICAgICAgPGxlZ2VuZD5Ub29sdGlwIEhlYWRlciBQcm9wZXJ0aWVzPC9sZWdlbmQ+XFxuICAgICAgICAgICAgPHRhYmxlPlxcbiAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+TWF4PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgaWQ9XFxcImJwc19tYXhcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgc2l6ZT1cXFwiMTBcXFwiIG1heGxlbmd0aD1cXFwiMTBcXFwiPk1pbGxpYW48L3RkPlxcbiAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+Q29sb3I8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCBpZD1cXFwiYnBzX2NvbG9yXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBzaXplPVxcXCIxMFxcXCIgbWF4bGVuZ3RoPVxcXCIxMFxcXCI+PC90ZD5cXG4gICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJzdWJtaXRcXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmU7XFxcIj5cXG4gICAgICAgIDwvZmllbGRzZXQ+XFxuICAgIDwvZm9ybT5cXG4gICAgPHN0eWxlPlxcbiAgICA6aG9zdCB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBhZGRpbmc6IDFlbSAxZW0gMWVtIDFlbTtcXG4gICAgfVxcbiAgICA8L3N0eWxlPlxcblwiO1xudmFyIFZpelRvb2x0aXBCdWlsZGVyUGFuZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFZpelRvb2x0aXBCdWlsZGVyUGFuZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVml6VG9vbHRpcEJ1aWxkZXJQYW5lbCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX3NoYWRvd1Jvb3QgPSBfdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KTtcbiAgICAgICAgX3RoaXMuX3NoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICBfdGhpcy5fc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcImZvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBfdGhpcy5fc3VibWl0LmJpbmQoX3RoaXMpKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBWaXpUb29sdGlwQnVpbGRlclBhbmVsLnByb3RvdHlwZS5fc3VibWl0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwicHJvcGVydGllc0NoYW5nZWRcIiwge1xuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5jb2xvcixcbiAgICAgICAgICAgICAgICAgICAgbWF4OiB0aGlzLm1heFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZpelRvb2x0aXBCdWlsZGVyUGFuZWwucHJvdG90eXBlLCBcImNvbG9yXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcImJwc19jb2xvclwiKS52YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3Q29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJicHNfY29sb3JcIikudmFsdWUgPSBuZXdDb2xvcjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWaXpUb29sdGlwQnVpbGRlclBhbmVsLnByb3RvdHlwZSwgXCJtYXhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwiYnBzX21heFwiKS52YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJicHNfbWF4XCIpLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVml6VG9vbHRpcEJ1aWxkZXJQYW5lbC5wcm90b3R5cGUsIFwic2V0dGluZ3NcIiwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChzZXR0aW5ncykge1xuICAgICAgICAgICAgdGhpcy5jb2xvciA9IChzZXR0aW5ncyA9PT0gbnVsbCB8fCBzZXR0aW5ncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2V0dGluZ3MuY29sb3IpIHx8IHRoaXMuY29sb3I7XG4gICAgICAgICAgICB0aGlzLm1heCA9IChzZXR0aW5ncyA9PT0gbnVsbCB8fCBzZXR0aW5ncyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2V0dGluZ3MubWF4KSB8fCB0aGlzLm1heDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBWaXpUb29sdGlwQnVpbGRlclBhbmVsO1xufShIVE1MRWxlbWVudCkpO1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwidml6LXRvb2x0aXAtYnVpbGRcIiwgVml6VG9vbHRpcEJ1aWxkZXJQYW5lbCk7XG4iLCIiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgVG9vbHRpcEV4dGVuc2lvbl8xID0gcmVxdWlyZShcIi4vZXh0ZW5zaW9ucy9Ub29sdGlwRXh0ZW5zaW9uXCIpO1xudmFyIFRvb2x0aXBMaW5rRXh0ZW5zaW9uXzEgPSByZXF1aXJlKFwiLi9leHRlbnNpb25zL1Rvb2x0aXBMaW5rRXh0ZW5zaW9uXCIpO1xucmVxdWlyZShcIi4vcmVnaXN0cnlcIik7XG52YXIgZ2xvYmFsID0gd2luZG93O1xuaWYgKGdsb2JhbC5zYXAgJiYgZ2xvYmFsLnNhcC5pbXBvcnRBZGRPbkV4dGVuc2lvbnMpIHtcbiAgICBnbG9iYWwuc2FwLmltcG9ydEFkZE9uRXh0ZW5zaW9ucyhbXG4gICAgICAgIFRvb2x0aXBMaW5rRXh0ZW5zaW9uXzEudG9vbHRpcExpbmtFeHRlbnNpb24sXG4gICAgICAgIFRvb2x0aXBFeHRlbnNpb25fMS50b29sdGlwRXh0ZW5zaW9uLFxuICAgIF0pO1xufVxudmFyIHNhbXBsZVByb3BzID0ge1xuICAgIGhlYWRlclByb3BzOiB7XG4gICAgICAgIGhlYWRlckVudGl0aWVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIk9yaWdpbmFsIFNhbGVzIFByaWNlXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIiQyNy42NiBNaWxsaW9uXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICB9LFxuICAgIGRldGFpbHNQcm9wczoge1xuICAgICAgICBkZXRhaWxzRW50aXRpZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiTG9jYXRpb25cIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiQ2FsaWZvcm5pYVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJQcm9kdWN0XCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIkFsY29ob2xcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiU2FsZXMgTWFuYWdlclwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJEYXZpZCBDYXJsXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICB9LFxufTtcbnZhciB0b29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndml6LXRvb2x0aXAnKTtcbnRvb2x0aXAuc2V0QXR0cmlidXRlKCdpZCcsICd2aXotdG9vbHRpcCcpO1xudG9vbHRpcC5wcm9wcyA9IHNhbXBsZVByb3BzO1xuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b29sdGlwKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==