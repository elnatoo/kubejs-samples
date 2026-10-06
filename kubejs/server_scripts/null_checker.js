/*  ========== SCRIPT ==========
*   This is a script I utilized to be able to allow players to check their current reputation with the Null entity
*   Because The Broken Script requires elevated privileges to run dev mode, I simply grant the player temporary access
*   to operator to execute the action. See void_mist_purifier.js for a similar approach.
*/

ItemEvents.rightClicked('kubejs:null_checker', event => {
    let player = event.player
    let item = event.item
    let server = player.level.server

    // 300 ticks = 15 seconds cooldown
    player.addItemCooldown(item, 300)

    // Safely get the player's current OP level (Defaults to 0 if not an OP)
    let opsList = server.playerList.ops
    let opEntry = opsList.get(player.gameProfile)
    let originalOpLevel = opEntry ? opEntry.level : 0

    // Temporarily elevate the player to OP Level 4
    let newOpEntry = new Java.loadClass('net.minecraft.server.players.ServerOpListEntry')(
        player.gameProfile, 
        4, 
        false // bypassesPlayerLimit
    )
    opsList.add(newOpEntry)
    
    // Refresh network capabilities so the client can run it
    server.playerList.sendPlayerPermissionLevel(player)

    // Execute the command natively as the player
    server.commands.performPrefixedCommand(player.createCommandSourceStack(), 'tbs reputation')

    // Instantly demote them back or restore their original OP status
    if (originalOpLevel > 0) {
        let restoredEntry = new Java.loadClass('net.minecraft.server.players.ServerOpListEntry')(
            player.gameProfile, 
            originalOpLevel, 
            false
        )
        opsList.add(restoredEntry)
    } else {
        opsList.remove(player.gameProfile)
    }
    
    // Refresh user capabilities back to standard player status
    server.playerList.sendPlayerPermissionLevel(player)

    player.swing()
})