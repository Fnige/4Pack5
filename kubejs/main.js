// Visit the wiki for more info - https://kubejs.com/

/* TODO: 
 * - split create recipes up in files maybe?
 * 
 * - more recipes:
 * 	- asurine
 * 	- veridium
 */

ServerEvents.recipes(event => {

	//#region -- mixing
	
	function mixing(heat, input, output) {
		event.custom({
			"type": "create:mixing",
			// options "none", "heated", "superheated"
			"heat_requirement": heat,
			"ingredients": input,
			"results": output
		})
	}
	
	// diorite
	mixing(
		"heated",
		[
			{
				"tag": "c:cobblestones"
			},
			{
				"type": "fluid_tag",
				"amount": 800,
				"fluid_tag": "c:milk"
			}
		],
		[
			{
				"id": "minecraft:diorite"
			}
		]
	)
	
	// gilded blackstone
	mixing(
		"heated",
		[
			{
				"item": "minecraft:blackstone"
			},
			{
				"item": "minecraft:gold_ingot"
			}
		],
		[
			{
				"id": "minecraft:gilded_blackstone"
			}
		]
	)

	// calcite
	mixing(
		"heated",
		[
			{
				"item": "minecraft:stone"
			},
			{
				"item": "minecraft:bone_block"
			}
		],
		[
			{
				"count": 2,
				"id": "minecraft:calcite"
			}
		]
	)

	// tuff
	mixing(
		"none",
		[
			{
				"item": "minecraft:andesite"
			},
			{
				"item": "minecraft:diorite"
			}
		],
		[
			{
				"count": 2,
				"id": "minecraft:tuff"
			}
		]
	)

	// ancient debris
	mixing(
		"superheated",
		[
			{
				"item": "minecraft:gilded_blackstone"
			},
			{
				"item": "minecraft:gilded_blackstone"
			},
			{
				"item": "minecraft:netherrack"
			},
			{
				"item": "minecraft:netherrack"
			},
			{
				"item": "minecraft:basalt"
			},
			{
				"item": "minecraft:basalt"
			},
			{
				"item": "ancient_debris"
			},
			{
				"item": "ancient_debris"
			},
			{
				"type": "fluid_stack",
				"amount": 1000,
				"fluid": "minecraft:lava"
			}
		],
		[
			{
				"count": 2,
				"id": "minecraft:ancient_debris"
			},
			{
				"chance": 0.04,
				"id": "minecraft:ancient_debris"
			}
		]
	)

	// asurine
	mixing(
		"none",
		[
			{
				"item": "minecraft:clay_ball"
			},
			{
				"item": "minecraft:clay_ball"
			},
			{
				"item": "minecraft:clay_ball"
			},
			{
				"item": "minecraft:flint"
			},
			{
				"type": "fluid_stack",
				"amount": 800,
				"fluid": "minecraft:water"
			}
		],
		[
			{
				"id": "create:asurine"
			}
		]
	)

	// veridium
	mixing(
		"none",
		[
			{
				"item": "minecraft:clay_ball"
			},
			{
				"item": "minecraft:clay_ball"
			},
			{
				"item": "minecraft:clay_ball"
			},
			{
				"item": "minecraft:flint"
			},
			{
				"type": "fluid_stack",
				"amount": 800,
				"fluid": "minecraft:lava"
			}
		],
		[
			{
				"id": "create:veridium"
			}
		]
	)

	//#endregion

	//#region -- milling

	function milling(time, input, output) {
		event.custom({
			"type": "create:milling",
			"processing_time": time,
			"ingredients": input,
			"results": output
		})
	}

	// soul sand
	milling(
		150,
		[
			{
				"item": "minecraft:soul_soil"
			}
		],
		[
			{
				"id": "minecraft:soul_sand"
			}
		]
	)

	// cobblestone
	milling(
		200,
		[
			{
				"item": "minecraft:stone"
			}
		],
		[
			{
				"id": "minecraft:cobblestone"
			}
		]
	)

	// cobbled deepslate
	milling(
		200,
		[
			{
				"item": "minecraft:deepslate"
			}
		],
		[
			{
				"id": "minecraft:cobbled_deepslate"
			}
		]
	)

	//#endregion

	event.custom({
		"type": "create:compacting",
		"ingredients": [
			{
				"item": "minecraft:soul_sand"
			}
		],
		"results": [
			{
				"id": "minecraft:soul_soil"
			}
		]
	})

	event.custom({
		"type": "create:haunting",
		"ingredients": [
			{
				"item": "minecraft:bricks"
			}
		],
		"results": [
			{
				"id": "minecraft:nether_bricks"
			}
		]
	})
})