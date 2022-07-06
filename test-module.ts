declare const sap;

if (sap && sap.importAddOnExtensions) {
	sap.importAddOnExtensions(
		[
			{
				extensionPoint: 'sap.addOn.viz.tooltip.tooltipLink',
				description: 'Add links on chart tooltip',
				factory: () => {
					return {
						getTooltipLink: () => {
							return {
								url: 'http://www.sap.com',
								label: 'SAPl Official'
							};
						}
					};
				}
			}
		]
	);
}
