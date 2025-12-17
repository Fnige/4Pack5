ServerEvents.recipes(event => {
	event.recipes.create.mixing(
		Item.of("minecraft:diorite"), 
		[
			Ingredient.of("#c:cobblestones"), 
			Fluid.ingredientOf("minecraft:milk").withAmount(800)
		]
	).heated()

	event.recipes.create.mixing(
		Item.of("minecraft:calcite", 2),
		[
			Ingredient.of("minecraft:stone"),
			Ingredient.of("minecraft:bone_block")
		]
	).heated()

	event.recipes.create.mixing(
		Item.of("minecraft:tuff", 2),
		[
			Ingredient.of("minecraft:andesite"),
			Ingredient.of("minecraft:diorite")
		]
	)

	event.recipes.create.mixing(
		Item.of("create:asurine"),
		[
			Ingredient.of("minecraft:clay_ball"),
			Ingredient.of("minecraft:clay_ball"),
			Ingredient.of("minecraft:clay_ball"),
			Ingredient.of("minecraft:flint"),
			Fluid.ingredientOf("minecraft:water").withAmount(800)
		]
	)

	event.recipes.create.mixing(
		Item.of("create:veridium"),
		[
			Ingredient.of("minecraft:clay_ball"),
			Ingredient.of("minecraft:clay_ball"),
			Ingredient.of("minecraft:clay_ball"),
			Ingredient.of("minecraft:flint"),
			Fluid.ingredientOf("minecraft:lava").withAmount(800)
		]
	)

	event.recipes.create.mixing(
		Item.of("minecraft:stone"),
		[
			Fluid.ingredientOf("minecraft:water").withAmount(250),
			Fluid.ingredientOf("minecraft:lava").withAmount(250)
		]
	)

	event.recipes.create.mixing(
		Item.of("minecraft:deepslate"),
		[
			Ingredient.of("minecraft:stone"),
			Fluid.ingredientOf("minecraft:lava").withAmount(250)
		]
	)

	event.recipes.create.milling(
		Item.of("minecraft:cobblestone"),
		[
			Ingredient.of("minecraft:stone")
		]
	).processingTime(200)

		event.recipes.create.milling(
		Item.of("minecraft:cobbled_deepslate"),
		[
			Ingredient.of("minecraft:deepslate")
		]
	).processingTime(200)
})