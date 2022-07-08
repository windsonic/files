if (sap && sap.importAddOnExtensions) {
    sap.importAddOnExtensions([
        {
            extensionPoint: 'sap.addOn.viz.tooltip.tooltipLink',
            description: 'Add links on chart tooltip',
            factory: function () {
                return {
                    getTooltipLink: function (title, value) {
                        return {
                            url: "http://www.sap.com/".concat(value ? value : ''),
                            label: "".concat(title ? title : 'Link')
                        };
                    }
                };
            }
        }
    ]);
}
