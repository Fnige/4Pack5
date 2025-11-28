// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {
	//#region -- mixing

	/* create has its own diorite recipe. 
	 * this will stay in case people want 
	 * an easier diorite recipe.
	 * but we would probably have to do the
	 * same with granite if thats the case.
	 */
	// event.recipes.create.mixing(
	// 	Item.of("minecraft:diorite"), 
	// 	[
	// 		Ingredient.of("#c:cobblestones"), 
	// 		Fluid.ingredientOf("minecraft:milk").withAmount(800)
	// 	]
	// ).heated()

	event.recipes.create.mixing(
		Item.of("minecraft:gilded_blackstone"),
		[
			Ingredient.of("minecraft:blackstone"),
			Ingredient.of("minecraft:gold_ingot")
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

	//#endregion

	//#region -- milling

	event.recipes.create.milling(
		Item.of("minecraft:soul_sand"),
		[
			Ingredient.of("minecraft:soul_soil")
		]
	).processingTime(150)

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

	//#endregion

	//#region -- other

	event.recipes.create.compacting(
		Item.of("minecraft:soul_soil"),
		[
			Ingredient.of("minecraft:soul_sand")
		]
	)

	event.recipes.create.haunting(
		Item.of("minecraft:nether_bricks"),
		[
			Ingredient.of("minecraft:bricks")
		]
	)

	// event.remove({ id: "create_synthetic_pressure:crushing/recycling"})
	event.recipes.create.crushing(
		[
			CreateItem.of("minecraft:gravel", 0.9),
			CreateItem.of("create_synthetic_pressure:graphite_powder", 0.5)
		],
		Item.of("create_synthetic_pressure:impure_diamond")
	).processingTime(500)

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