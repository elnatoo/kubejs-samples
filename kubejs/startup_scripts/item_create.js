StartupEvents.registry('item', event => {
    event.create('null_checker') 
         .displayName('Reputation Checker')
         .maxStackSize(1)

    event.create('void_mist_purifier') 
         .displayName('Void Mist Purifier')
         .maxStackSize(1)
})