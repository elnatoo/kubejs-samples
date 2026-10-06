PlayerEvents.loggedIn(event => {
      if (!event.player.stages.has('starter')) {
        event.player.stages.add('starter')
        event.server.runCommandSilent(`give ${event.entity.username} caverns_and_chasms:copper_sword`)
        event.server.runCommandSilent(`give ${event.entity.username} shield`)
        event.server.runCommandSilent(`give ${event.entity.username} torch 32`)
        event.server.runCommandSilent(`give ${event.entity.username} bread 16`)
        event.server.runCommandSilent(`give ${event.entity.username} compass`)
        event.server.runCommandSilent(`give ${event.entity.username} lantern`)
        event.server.runCommandSilent(`give ${event.entity.username} camping:small_backpack`)
        event.server.runCommandSilent(`give ${event.entity.username} camping:marshmallow 8`)
        event.server.runCommandSilent(`give ${event.entity.username} places:soda 4`)
        event.entity.setItemSlot(5, 'minecraft:leather_helmet')
        event.entity.setItemSlot(4, 'minecraft:leather_chestplate')
        event.entity.setItemSlot(3, 'minecraft:leather_leggings')
        event.entity.setItemSlot(2, 'minecraft:leather_boots')
      }
    });