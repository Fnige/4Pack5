ServerEvents.recipes( e => {
	/* TODO:
	 * 
	 * 
	 */

	//#region -- block shortcuts
	let logs = "#minecraft:logs"
	let iron_ingot = "minecraft:iron_ingot"

	//#endregion

	//#region -- bulk crafting
	
	//bowl
	e.shaped(
		Item.of("minecraft:bowl", 16),
		[
			"L L",
			" L "
		],
		{
			L: logs
		}
	)

	// cauldron
	e.shaped(
		Item.of("minecraft:cauldron", 9),
		[
			"I I",
			"I I",
			"III"
		],
		{
			I: "minecraft:iron_block"
		}
	)

	// chain
	e.shaped(
		Item.of("minecraft:chain", 9),
		[
			"I",
			"B",
			"I"
		],
		{
			I: iron_ingot,
			B: "minecraft:iron_block"
		}
	)

	e.shaped(
		Item.of("minecraft:chain", 9),
		[
			"I",
			"B",
			"I"
		],
		{
			I: "create:zinc_ingot",
			B: "create:zinc_block"
		}
	)

	// chest
	e.shaped(
		Item.of("minecraft:chest", 4),
		[
			"LLL",
			"L L",
			"LLL"
		],
		{
			L: logs
		}
	)

	e.shaped(
		Item.of("minecraft:stick", 16),
		[
			"L",
			"L"
		],
		{
			L: logs
		}
	)

	//#endregion

	//#region -- bulk smelting

	function bulk_blasting(item, input, xp, time) {
		e.smelting( item, input, xp, time )
		e.blasting( item, input, xp, time / 2)
	}

	// iron block
	bulk_blasting(
		Item.of("minecraft:iron_block"),
		"minecraft:raw_iron_block",
		6.3,
		1620 // 81 seconds
	)

	// copper block
	bulk_blasting(
		Item.of("minecraft:copper_block"),
		"minecraft:raw_copper_block",
		6.3,
		1620 // 81 seconds
	)

	// gold block
	bulk_blasting(
		Item.of("minecraft:gold_block"),
		"minecraft:raw_gold_block",
		6.3,
		1620 // 81 seconds
	)

	// shadoline block
	bulk_blasting(
		Item.of("enderscape:shadoline_block"),
		"enderscape:raw_shadoline_block",
		6.3,
		1620 // 81 seconds
	)

	// zinc block
	bulk_blasting(
		Item.of("create:zinc_block"),
		"create:raw_zinc_block",
		6.3,
		1620 // 81 seconds
	)

	//#endregion

	//#region -- multi-step crafting

	// dispenser
	e.shapeless(
		Item.of("minecraft:dispenser"),
		[
			"minecraft:dropper",
			"minecraft:bow"
		]
	)

	e.shaped(
		Item.of("minecraft:dispenser"),
		[
			" IS",
			"IDS",
			" IS"
		],
		{
			I: "minecraft:stick",
			S: "minecraft:string",
			D: "minecraft:dropper"
		}
	)

	// Minecart with Chest
	e.shaped(
		Item.of("minecraft:chest_minecart"),
		[
			" L ",
			"ILI",
			"III"
		],
		{
			L: logs,
			I: iron_ingot
		}
	)

	e.shaped(
		Item.of("minecraft:chest_minecart"),
		[
			"ICI",
			"III"
		],
		{
			C: "minecraft:chest",
			I: iron_ingot
		}
	)

	// Hopper
	e.shaped(
		Item.of("minecraft:hopper"),
		[
			"ILI",
			"ILI",
			" I "
		],
		{
			L: logs,
			I: iron_ingot
		}
	)

	//#endregion

	//#region -- packing / unpacking

	// dripstone unpacking
	e.shapeless(
		Item.of("minecraft:pointed_dripstone", 4),
		[
			"minecraft:dripstone_block"
		]
	)

	// glowstone unpacking
	e.shapeless(
		Item.of("minecraft:glowstone_dust", 4),
		[
			"minecraft:glowstone"
		]
	)

	// quartz unpacking
	e.shapeless(
		Item.of("minecraft:quartz", 4),
		[
			"minecraft:quartz_block"
		]
	)

	//#endregion

	//#region -- shapeless recipes

	e.shapeless(
		Item.of("minecraft:shulker_box"),
		[
			Ingredient.of("minecraft:shulker_shell", 2),
			"minecraft:chest"
		]
	)

	// paper
	let paper_ingredients = [
		"minecraft:sugar_cane",
		"farmersdelight:tree_bark",
		"rusticdelight:cotton_boll",
		"corn_delight:corncob"
	]

	for (let i = 0; i < paper_ingredients.length; i++) {
		
		e.remove({ input: paper_ingredients[i], output: "minecraft:paper" })

		e.shapeless(
			Item.of("minecraft:paper"),
			[
				Ingredient.of(paper_ingredients[i], 3)
			]
		)
	}

	//#endregion

	//#region -- misc - mushroom stuff

	e.shaped(
		Item.of("minecraft:brown_mushroom_block"),
		[
			"BB",
			"BB"
		],
		{
			B: "minecraft:brown_mushroom"
		}
	)

	e.shaped(
		Item.of("minecraft:red_mushroom_block"),
		[
			"RR",
			"RR"
		],
		{
			R: "minecraft:red_mushroom"
		}
	)

	e.shaped(
		Item.of("minecraft:mushroom_stem"),
		[
			"BR",
			"RB"
		],
		{
			R: "minecraft:red_mushroom",
			B: "minecraft:brown_mushroom"
		}
	)

	//#endregion

	//#region -- misc
	
	// easier brown dye
	e.shapeless(
		Item.of("minecraft:brown_dye"),
		[
			"minecraft:red_dye",
			"minecraft:green_dye"
		]
	)
	
	// cobweb crafting
	e.shaped(
		Item.of("minecraft:cobweb", 2),
		[
			"S S",
			" S ",
			"S S"
		],
		{
			S: "minecraft:string"
		}
	)
	
	//#endregion
})