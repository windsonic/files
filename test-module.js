sap.importAddOnExtensions([
    {
        extensionPoint: 'com.sap.addOn.viz.tooltip.tooltipLink',
        description: 'Add links on chart tooltip',
        getTooltipLink: function () {
            return {
                url: 'http://www.sap.com',
                label: 'SAPl Official'
            };
        }
    }
]);
