ServerEvents.recipes(event => {
	//#region -- Storage
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
	//#endregion

	//#region -- Backpacks
	let bprem = [
		"sophisticatedbackpacks:iron_backpack",
		"sophisticatedbackpacks:tool_swapper_upgrade"
	]

	for (let index = 0; index < bprem.length; index++) {
		event.remove({ output: bprem[index] })
	}

	event.custom({
		"type": "sophisticatedbackpacks:backpack_upgrade",
		"conditions": [
			{
				"type": "sophisticatedcore:item_enabled",
				"itemRegistryName": "sophisticatedbackpacks:iron_backpack"
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
					"item": "sophisticatedbackpacks:copper_backpack"
				}
		},
		"result": {
				"id": "sophisticatedbackpacks:iron_backpack"
		}
	})

	event.shaped(
		Item.of("sophisticatedbackpacks:tool_swapper_upgrade", 1),
		[
			"RWR",
			"PTA",
			"ISI"
		],
		{
			// Base
			R: "minecraft:redstone",
			I: "minecraft:iron_ingot",
			T: "sophisticatedbackpacks:upgrade_base",
			// Tools
			W: "minecraft:golden_sword",
			A: "minecraft:golden_axe",
			S: "minecraft:golden_shovel",
			P: "minecraft:golden_pickaxe"
		}
	)
})