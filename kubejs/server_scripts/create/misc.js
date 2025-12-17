ServerEvents.recipes(event => {
	//#region -- Ores

	event.recipes.create.mixing(
		[
			Item.of("minecraft:ancient_debris", 2),
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

	//#endregion

	//#region -- Building blocks

	// See, there is a recipe that breaks it back down. And you get xp from it... I am going to choose to not care for now
	event.recipes.create.mixing(
		Item.of("minecraft:gilded_blackstone"),
		[
			Ingredient.of("minecraft:blackstone"),
			Ingredient.of("minecraft:gold_ingot"),
			Ingredient.of("minecraft:gold_ingot")
		]
	).heated()
	
	event.recipes.create.haunting(
		Item.of("minecraft:nether_bricks"),
		[
			Ingredient.of("minecraft:bricks")
		]
	)

	//#endregion

	//#region -- Swapping

	event.recipes.create.milling(
		Item.of("minecraft:soul_sand"),
		[
			Ingredient.of("minecraft:soul_soil")
		]
	).processingTime(150)

	event.recipes.create.compacting(
		Item.of("minecraft:soul_soil"),
		[
			Ingredient.of("minecraft:soul_sand")
		]
	)

	event.recipes.create.haunting(
		Item.of("minecraft:charcoal"),
		[
			Ingredient.of("minecraft:coal")
		]
	)

	event.recipes.create.haunting(
		Item.of("minecraft:coal"),
		[
			Ingredient.of("minecraft:charcoal")
		]
	)
	//#endregion
})