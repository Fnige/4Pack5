// ServerEvents.recipes( event => {
// 	let material = ["wooden", "stone", "iron", "golden", "diamond", "netherite"]
// 	let weapons = ["sword", "broadsword", "shortsword", "cutlass", "honed_sword", "gladius", "cleaver", "greatsword", "scythe", "spear"]

// 	for (let i = 0; i < material.length; i++) {
// 		for (let j = 0; j < weapons.length; j++) {
// 			let mat = material[i]
// 			let wpn = weapons[j]

// 			event.shapeless(
// 				Item.of("minecraft:" + mat + "_sword"),
// 				[
// 					Ingredient.of("lookinsharp:" + mat + "_" + wpn),
// 					Ingredient.of("minecraft:grindstone")
// 				]
// 			).keepIngredient("minecraft:grindstone")
// 		}
// 	}
// })

ServerEvents.recipes(event => {
	let material = ["wooden", "stone", "iron", "golden", "diamond", "netherite"]
	let weapons = ["sword", "broadsword", "shortsword", "cutlass", "honed_sword", "gladius", "cleaver", "greatsword", "scythe", "spear"]

	for (let i = 0; i < material.length; i++) {
		for (let j = 0; j < weapons.length; j++) {
			let mat = material[i]
			let wpn = weapons[j]

			event.shapeless(
				'minecraft:' + mat + "_sword", [
				Ingredient.of("lookinsharp:" + mat + "_" + wpn),
				Ingredient.of("minecraft:grindstone")
			]).keepIngredient('minecraft:grindstone')

			event.shapeless(
				'minecraft:' + mat + "_sword", [
				Ingredient.of("lookinsharp:" + mat + "_" + wpn),
				Ingredient.of("minecraft:enchanted_book"),
				Ingredient.of("minecraft:lapis_lazuli")
			]).modifyResult('weapon_enchants')
		}
	}
})

ServerEvents.modifyRecipeResult('weapon_enchants', event => {
	let tool = event.grid.find('@lookinsharp')
	let book = event.grid.find('minecraft:enchanted_book')
	event.success(tool.copy().enchant(book.enchantments))
})