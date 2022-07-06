

if (sap && sap.importAddOnExtensions) {
    sap.importAddOnExtensions([
        {
            extensionPoint: 'sap.addOn.viz.tooltip.tooltipLink',
            description: 'Add links on chart tooltip',
            factory: function () {
                return {
                    getTooltipLink: function () {
                        return {
                            url: 'http://www.sap.com',
                            label: 'SAPl Official'
                        };
                    }
                };
            }
        }
    ]);
}
