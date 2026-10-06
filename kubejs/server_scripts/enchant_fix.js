ServerEvents.tags('item', event => {
    // Makes the item eligible for Mending and Unbreaking by simply adding the item to an enchantment tag
    // (Both of these enchantments accept items in the '#minecraft:enchantable/durability' tag)
    event.add('minecraft:enchantable/durability', 'creaturefeature:flintlock')
})
