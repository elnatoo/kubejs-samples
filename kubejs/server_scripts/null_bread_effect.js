ItemEvents.foodEaten(event => {
    if (event.item.id === 'thebrokenscript:null_bread') {
        let player = event.player
        
        // Give the player levitation for 5 seconds (20 ticks = 1 second), amplifier (0 = Level 1)
        player.potionEffects.add('minecraft:levitation', 100, 0)
    }
})