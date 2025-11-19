// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {
	//#region -- mixing

	// might not be needed, create has its own diorite recipe
	event.recipes.create.mixing(
		"minecraft:diorite", 
		[
			Ingredient.of("#c:cobblestones"), 
			Fluid.ingredientOf("minecraft:milk").withAmount(800)
		]
	).heated()

	event.recipes.create.mixing(
		"minecraft:gilded_blackstone",
		[
			Ingredient.of("minecraft:blackstone"),
			Ingredient.of("minecraft:gold_ingot")
		]
	).heated()

	event.recipes.create.mixing(
		"2x minecraft:calcite",
		[
			Ingredient.of("minecraft:stone"),
			Ingredient.of("minecraft:bone_block")
		]
	).heated()

	event.recipes.create.mixing(
		"2x minecraft:tuff",
		[
			Ingredient.of("minecraft:andesite"),
			Ingredient.of("minecraft:diorite")
		]
	)

	event.recipes.create.mixing(
		[
			"2x minecraft:ancient_debris",
			CreateItem.of("minecraft:ancient_debris", 0.04)
		],
		[
			Ingredient.of("minecraft:gilded_blackstone"),
			Ingredient.of("minecraft:gilded_blackstone"),
			Ingredient.of("minecraft:netherrack"),
			Ingredient.of("minecraft:netherrack"),
			Ingredient.of("minecraft:basalt"),
			Ingredient.of("minecraft:basalt"),
			Ingredient.of("minecraft:ancient_debris"),
			Ingredient.of("minecraft:ancient_debris"),
			Fluid.ingredientOf("minecraft:lava").withAmount(1000)
		]
	).superheated()

	event.recipes.create.mixing(
		"create:asurine",
		[
			Ingredient.of("minecraft:clay_ball"),
			Ingredient.of("minecraft:clay_ball"),
			Ingredient.of("minecraft:clay_ball"),
			Ingredient.of("minecraft:flint"),
			Fluid.ingredientOf("minecraft:water").withAmount(800)
		]
	)

	event.recipes.create.mixing(
		"create:veridium",
		[
			Ingredient.of("minecraft:clay_ball"),
			Ingredient.of("minecraft:clay_ball"),
			Ingredient.of("minecraft:clay_ball"),
			Ingredient.of("minecraft:flint"),
			Fluid.ingredientOf("minecraft:lava").withAmount(800)
		]
	)

	//#endregion

	//#region -- milling

	event.recipes.create.milling(
		"minecraft:soul_sand",
		[
			Ingredient.of("minecraft:soul_soil")
		]
	).processingTime(150)

	event.recipes.create.milling(
		"minecraft:cobblestone",
		[
			Ingredient.of("minecraft:stone")
		]
	).processingTime(200)

		event.recipes.create.milling(
		"minecraft:cobbled_deepslate",
		[
			Ingredient.of("minecraft:deepslate")
		]
	).processingTime(200)

	//#endregion

	//#region -- other

	event.recipes.create.compacting(
		"minecraft:soul_soil",
		[
			Ingredient.of("minecraft:soul_sand")
		]
	)

	event.recipes.create.haunting(
		"minecraft:nether_bricks",
		[
			Ingredient.of("minecraft:bricks")
		]
	)

	event.shapeless(
		Item.of('patchouli:guide_book[patchouli:book="advancedperipherals:manual"]'),
		[
			"minecraft:iron_ingot",
			"minecraft:book",
			"minecraft:light_blue_dye"
		]
	)

	//#endregion
})