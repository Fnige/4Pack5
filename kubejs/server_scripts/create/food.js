ServerEvents.recipes(event => {

	event.recipes.create.mixing(
		Item.of("corn_delight:tortilla_raw", 3),
		[
			Ingredient.of("corn_delight:corn"),
			Ingredient.of("corn_delight:corn"),
			Ingredient.of("corn_delight:corn"),
			Fluid.ingredientOf("minecraft:water").withAmount(1000)
		]
	)
	
})