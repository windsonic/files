declare const sap;

if (sap && sap.importAddOnExtensions) {
	sap.importAddOnExtensions(
		[
			{
				extensionPoint: 'com.sap.addOn.viz.tooltip.tooltipLink',
				description: 'Add links on chart tooltip',
				factory: {
					getTooltipLink: () => {
						return {
							url: 'http://www.sap.com',
							label: 'SAPl Official'
						};
					}
				}
			}
		]
	);
}
