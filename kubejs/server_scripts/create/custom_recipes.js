ServerEvents.recipes(event => {

	//#region -- peeling
	
	// pearls
	event.custom({
		"type": "createfisheryindustry:peeling",
		"ingredients": [
			{
				"item": "crittersandcompanions:clam"
			}
		],
		"results": [
			{
				"id": "crittersandcompanions:pearl",
				"count": 1,
				"chance": 0.1
			}
		]
	})

	//#endregion

	//#region -- cutting

	//pearls
	event.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [
			{
				"item": "crittersandcompanions:clam"
			}
		],
		"result": [
			{
				"chance": 0.05,
				"item": {
					"id": "crittersandcompanions:pearl",
					"count": 1,
				}
			}
		],
		"tool": {
			"tag": "c:tools/knife"
		}
	})

	//#endregion
})