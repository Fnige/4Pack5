ServerEvents.recipes( event => {
	// Metro window
	event.remove({ id: "bellsandwhistles:metro/metro_window"})

	event.shapeless(
		Item.of("bellsandwhistles:metro_window", 6),
		[
			Ingredient.of("bellsandwhistles:metro_casing"),
			"#c:glass_blocks"
		]
	)

	// Cob pipe
	event.remove({ id: "corn_delight:cob_pipe"})

	event.shapeless(
		Item.of("corn_delight:cob_pipe"),
		[
			Ingredient.of("corn_delight:corncob"),
			"#c:rods/wooden"
		]
	)

	// Tree fertiliser
	event.remove({ id: "create:crafting/tree_fertilizer"})

	// Andesite train hull
	event.remove({ id: "minecraft:andesite_hull_from_stonecutting"})

	event.stonecutting(
		Item.of("createdeco:andesite_hull"),
		"#c:storage_blocks/andesite_alloy"
	)

	// Tomato sauce
	event.remove ({ id: "farmersdelight:integration/create/mixing/tomato_sauce_from_mixing"})

	// Removing XP from impure diamodns
	event.remove({ id: "create_synthetic_pressure:crushing/recycling"})
	
	event.recipes.create.crushing(
		[
			CreateItem.of("minecraft:gravel", 0.9),
			CreateItem.of("create_synthetic_pressure:graphite_powder", 0.5)
		],
		Item.of("create_synthetic_pressure:impure_diamond")
	).processingTime(500)
})