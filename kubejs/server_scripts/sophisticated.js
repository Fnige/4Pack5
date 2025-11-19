ServerEvents.recipes(event => {
	//#region -- Storage

	function chest(arr) {
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

	let chest_list = [
		["","_barrel"],
		["limited_","_barrel_1"],
		["limited_","_barrel_2"],
		["limited_","_barrel_3"],
		["limited_","_barrel_4"],
		["","_chest"]
	]

	for (let index = 0; index < chest_list.length; index++) {
		chest(chest_list[index])
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

	//#endregion

	//#region -- Upgrades

	// Tool Swapper Upgrade
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

	// Basic to Iron Tier Upgrade
	event.remove({ output: "sophisticatedstorage:basic_to_iron_tier_upgrade" })
	event.shaped(
		Item.of("sophisticatedstorage:basic_to_iron_tier_upgrade"),
		[
			"BBB",
			"BCB",
			"BBB"
		],
		{
			B: "minecraft:iron_ingot",
			C: "sophisticatedstorage:basic_to_copper_tier_upgrade"
		}
	)
	
	// Copper to Iron Tier Upgrade
	event.remove({ output: "sophisticatedstorage:copper_to_iron_tier_upgrade" })
	event.shaped(
		Item.of("sophisticatedstorage:copper_to_iron_tier_upgrade"),
		[
			"BBB",
			"BCB",
			"BBB"
		],
		{
			B: "minecraft:iron_ingot",
			C: "minecraft:redstone_torch"
		}
	)

	//#endregion
})