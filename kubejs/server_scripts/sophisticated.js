ServerEvents.recipes(event => {
	function copperise(arr) {
		event.remove({ output: `sophisticatedstorage:${arr[0]}iron${arr[1]}` })

		event.custom({
			"type": "sophisticatedstorage:storage_tier_upgrade",
			"conditions": [
				{
					"type": "sophisticatedcore:item_enabled",
					"itemRegistryName": `sophisticatedstorage:${arr[0]}iron${arr[1]}`
				}
			],
			"pattern": [
				"CCC",
				"CSC",
				"CCC"
			],
			"key": {
					"C": {
						"item": "minecraft:iron_ingot"
					},
					"S": {
						"item": `sophisticatedstorage:${arr[0]}copper${arr[1]}`
					}
			},
			"result": {
					"id": `sophisticatedstorage:${arr[0]}iron${arr[1]}`
			}
		})
	};

	let copper = [
		["","_barrel"],
		["limited_","_barrel_1"],
		["limited_","_barrel_2"],
		["limited_","_barrel_3"],
		["limited_","_barrel_4"],
		["","_chest"]
	]

	for (let index = 0; index < copper.length; index++) {
		copperise(copper[index])
	}
})