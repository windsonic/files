if (sap && sap.importAddOnExtensions) {
    sap.importAddOnExtensions([
        {
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
                    }
                };
            }
        }
    ]);
}
