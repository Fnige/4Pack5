ServerEvents.recipes(event => {
	function oxidising(list) {
		for (let i of list) {
			for (let j = 0; j < 3; j++) {
				event.custom({
					"type": "create:filling",
					"ingredients": [
						{
							"item": i[j]
						},
						{
							"type": "fluid_stack",
							"amount": 250,
							"fluid": "minecraft:water"
						}
					],
					"results": [
						{
							"id": i[j+1]
						}
					]
				})
			}
		}
	}

	oxidising(
		[
			[
				"minecraft:copper_block", 
				"minecraft:exposed_copper", 
				"minecraft:weathered_copper", 
				"minecraft:oxidized_copper"
			],
			[
				"minecraft:chiseled_copper",
				"minecraft:exposed_chiseled_copper",
				"minecraft:weathered_chiseled_copper", "minecraft:oxidized_chiseled_copper"
			],
			[
				"minecraft:copper_bulb", 
				"minecraft:exposed_copper_bulb", 
				"minecraft:weathered_copper_bulb", 
				"minecraft:oxidized_copper_bulb"
			],
			[
				"minecraft:copper_door", 
				"minecraft:exposed_copper_door", 
				"minecraft:weathered_copper_door", 
				"minecraft:oxidized_copper_door"
			],
			[
				"minecraft:copper_grate", 
				"minecraft:exposed_copper_grate", 
				"minecraft:weathered_copper_grate", 
				"minecraft:oxidized_copper_grate"
			],
			[
				"minecraft:copper_trapdoor", 
				"minecraft:exposed_copper_trapdoor", 
				"minecraft:weathered_copper_trapdoor", 
				"minecraft:oxidized_copper_trapdoor"
			],
			[
				"minecraft:cut_copper", 
				"minecraft:exposed_cut_copper", 
				"minecraft:weathered_cut_copper", 
				"minecraft:oxidized_cut_copper"
			],
			[
				"minecraft:cut_copper_slab", 
				"minecraft:exposed_cut_copper_slab", 
				"minecraft:weathered_cut_copper_slab", 
				"minecraft:oxidized_cut_copper_slab"
			],
			[
				"minecraft:cut_copper_stairs",
				"minecraft:exposed_cut_copper_stairs",
				"minecraft:weathered_cut_copper_stairs",
				"minecraft:oxidized_cut_copper_stairs"
			],
			[
				"create:copper_shingles",
				"create:exposed_copper_shingles",
				"create:weathered_copper_shingles",
				"create:oxidized_copper_shingles"
			],
			[
				"create:copper_shingle_slab",
				"create:exposed_copper_shingle_slab",
				"create:weathered_copper_shingle_slab",
				"create:oxidized_copper_shingle_slab"
			],
			[
				"create:copper_shingle_stairs",
				"create:exposed_copper_shingle_stairs",
				"create:weathered_copper_shingle_stairs",
				"create:oxidized_copper_shingle_stairs"
			],
			[
				"create:copper_tiles",
				"create:exposed_copper_tiles",
				"create:weathered_copper_tiles",
				"create:oxidized_copper_tiles"
			],
			[
				"create:copper_tile_slab",
				"create:exposed_copper_tile_slab",
				"create:weathered_copper_tile_slab",
				"create:oxidized_copper_tile_slab"
			],
			[
				"create:copper_tile_stairs",
				"create:exposed_copper_tile_stairs",
				"create:weathered_copper_tile_stairs",
				"create:oxidized_copper_tile_stairs"
			]
		]
	)
})