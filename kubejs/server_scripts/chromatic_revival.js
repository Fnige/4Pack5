RecipeViewerEvents.addEntries("item", event => {
	let to_add = [
		"create:chromatic_compound",
		"create:refined_radiance",
		"create:refined_radiance_casing",
		"create:shadow_steel",
		"create:shadow_steel_casing"
	]

	for (let index = 0; index < to_add.length; index++) {
		event.add(to_add[index])
	}
})

ServerEvents.recipes(event => {

	function item_application(input, catalyst, output) {
		event.custom({
			"type": "create:item_application",
			"ingredients": [
				{
					"item": input
				},
				{
					"item": catalyst
				}
			],
			"results": [
				{
					"id": output
				}
			]
		})
	}

	item_application("create:framed_glass", "create:refined_radiance", "create:refined_radiance_casing")
	item_application("minecraft:obsidian", "create:shadow_steel", "create:shadow_steel_casing")

	event.recipes.create.mixing(
		Item.of("create:chromatic_compound"),
		[
			Ingredient.of("minecraft:glowstone_dust"),
			Ingredient.of("minecraft:glowstone_dust"),
			Ingredient.of("minecraft:glowstone_dust"),
			Ingredient.of("create:powdered_obsidian"),
			Ingredient.of("create:powdered_obsidian"),
			Ingredient.of("create:powdered_obsidian"),
			Ingredient.of("create:polished_rose_quartz"),
		]
	).superheated()

})

ItemEvents.modifyTooltips(event => {
	event.modify("create:chromatic_compound", tooltip => {
		tooltip.insert(1, Text.of("Drop this into a beacon").color(0xCFC7D9))
		tooltip.insert(2, Text.of("or drop it into the void").color(0x4C4760))
	})
})

// Refined casing: Framed Glass + Refined Radiance
// Shadow casing : Obsidian + Shadow Steel