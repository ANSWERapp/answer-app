
		
function changeLabelsHectare(){
			
	$$("quotaPerDunam").define("label", "Quota per hectare [m^3]:");
	$$("quotaPerDunam").refresh();

	$$("dunamAmount").define("label", "Hectare amount:");
	$$("dunamAmount").refresh();

	$$("returnPerDunam").define("label", "Return (per hectare):");
	$$("returnPerDunam").refresh();

	$$("fixedCostsPerDunam").define("label", "Fixed (per hectare):");
	$$("fixedCostsPerDunam").refresh();

	$$("maxYieldLabel").define("label", "[ton/hectare]");
	$$("maxYieldLabel").refresh();
	
	$$("landChosenUnit").define("value", "Hectare");
	$$("landChosenUnit").refresh();
}
	
		
		
