ServerEvents.recipes(event => {
    // ========== Crafting Recipes ==========

    event.shaped('additionaladditions:rose_gold_helmet', [
        'AAA',
        'A A'
    ],
        {
            A: 'additionaladditions:rose_gold_ingot'
        })

    event.shaped('additionaladditions:rose_gold_chestplate', [
        'A A',
        'AAA',
        'AAA'
    ],
        {
            A: 'additionaladditions:rose_gold_ingot'
        })

    event.shaped('additionaladditions:rose_gold_leggings', [
        'AAA',
        'A A',
        'A A'
    ],
        {
            A: 'additionaladditions:rose_gold_ingot'
        })

    event.shaped('additionaladditions:rose_gold_boots', [
        'A A',
        'A A'
    ],
        {
            A: 'additionaladditions:rose_gold_ingot'
        })

    event.shaped('additionaladditions:rose_gold_sword', [
        'A',
        'A',
        'B'
    ],
        {
            A: 'additionaladditions:rose_gold_ingot',
            B: 'minecraft:stick'
        })

    event.shaped('additionaladditions:rose_gold_shovel', [
        'A',
        'B',
        'B'
    ],
        {
            A: 'additionaladditions:rose_gold_ingot',
            B: 'minecraft:stick'
        })

    event.shaped('additionaladditions:rose_gold_axe', [
        'AA',
        'AB',
        ' B'
    ],
        {
            A: 'additionaladditions:rose_gold_ingot',
            B: 'minecraft:stick'
        })

    event.shaped('additionaladditions:rose_gold_pickaxe', [
        'AAA',
        ' B ',
        ' B '
    ],
        {
            A: 'additionaladditions:rose_gold_ingot',
            B: 'minecraft:stick'
        })

    event.shaped('additionaladditions:rose_gold_hoe', [
        'AA',
        ' B',
        ' B'
    ],
        {
            A: 'additionaladditions:rose_gold_ingot',
            B: 'minecraft:stick'
        })

    event.shaped('creaturefeature:thingamabob', [
        ' C ',
        'ABA',
        'AAA'
    ],
        {
            A: 'minecraft:gold_nugget',
            B: 'minecraft:diamond',
            C: 'minecraft:iron_ingot'
        })

    event.shapeless(Item.of('spelunkers_charm:rock', 9), [
        'minecraft:cobblestone'
    ])

    event.shaped('spelunkers_charm:mining_helmet', [
        'ABA',
        'A A'
    ],
        {
            A: 'minecraft:gold_ingot',
            B: 'minecraft:lantern'
        })

    event.shaped('creaturefeature:flintlock', [
        'CCC',
        'CBA',
        'CA '
    ],
        {
            A: 'minecraft:gunpowder',
            B: 'minecraft:flint',
            C: 'minecraft:iron_ingot'
        })

    event.shapeless('places:aluminium_ingot', [
        'minecraft:iron_nugget',
        'minecraft:coal',
        'minecraft:clay_ball',
        'spelunkers_charm:rock'
    ])

    event.shapeless('places:soda', [
        'minecraft:sugar',
        'places:cans_1',
        'minersdelight:water_cup'
    ])

    event.shapeless(Item.of('places:error_item', 1), [
        '#c:null_items'
    ])

    event.shapeless('places:twinfingers', [
        'minecraft:sugar',
        'minecraft:sweet_berries',
        'minecraft:cocoa_beans',
        'minecraft:paper'
    ])

    event.shapeless('places:twinfingers_mint', [
        'places:twinfingers',
        'windswept:lavender'
    ])

    event.shapeless('places:twinfingers_mint', [
        'places:twinfingers',
        'windswept:candy_cane'
    ])

    event.shapeless('places:twinfingers_rocky_road', [
        'places:twinfingers',
        'camping:marshmallow',
        'windswept:chestnuts'
    ])

    event.shapeless('places:twinfingers_invisible', [
        'places:twinfingers',
        'minecraft:phantom_membrane'
    ])

    event.shapeless('places:twinfingers_green', [
        'places:twinfingers',
        'biomeswevegone:green_glowcane_powder'
    ])

    event.shapeless('places:twinfingers_green', [
        'places:twinfingers',
        'biomeswevegone:green_apple'
    ])

    event.shaped('camping:enderbag', [
        'ABA',
        'AAA',
        'CDC'
    ],
        {
            A: 'minecraft:green_wool',
            B: 'minecraft:gold_ingot',
            C: 'minecraft:leather',
            D: 'minecraft:ender_chest'
        })

    event.shaped('kubejs:null_checker', [
        ' A ',
        'ABA',
        ' A '
    ],
        {
            A: 'caverns_and_chasms:silver_ingot',
            B: 'places:error_item'
        })

    event.shapeless('thebrokenscript:null_bread', [
        '#c:null_items',
        'minecraft:bread'
    ])

    event.shapeless('windswept:ginger_root', [
        'minecraft:hanging_roots',
        'minecraft:sugar'
    ])

    event.shaped('oddaccessories:piece_of_love', [
        'CBC',
        'BAB',
        'CBC'
    ],
        {
            A: 'caverns_and_chasms:turquoise',
            B: 'minecraft:blaze_powder',
            C: 'minecraft:redstone_block'
        })

    event.shaped('kubejs:void_mist_purifier', [
        ' A ',
        'ABA',
        ' A '
    ],
        {
            A: 'caverns_and_chasms:silver_ingot',
            B: 'minecraft:glowstone_dust'
        })

    // ========== Replace Crafting Recipes ==========

    event.remove({ id: 'curiosities:heavy_boots' })

    event.shaped('curiosities:heavy_boots', [
        ' B ',
        'C C',
        'A A'
    ],
        {
            A: 'caverns_and_chasms:silver_ingot',
            B: 'minecraft:heavy_core',
            C: 'minecraft:breeze_rod'
        })

    // ========== Smithing Recipes ==========

    // FORMAT:
    // Output/Result Item
    // Template Item
    // Base Item to Upgrade
    // Addition Item / Material

    event.smithing(
        'dungeonsdelight:stained_knife',
        'minecraft:netherite_upgrade_smithing_template',
        'farmersdelight:netherite_knife',
        'dungeonsdelight:stained_scrap'
    )

    event.smithing(
        'dungeonsdelight:stained_cleaver',
        'minecraft:netherite_upgrade_smithing_template',
        'dungeonsdelight:netherite_cleaver',
        'dungeonsdelight:stained_scrap'
    )
})