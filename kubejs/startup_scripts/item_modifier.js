ItemEvents.modification(event => {
  event.modify('minecraft:potion', item => {
    item.maxStackSize = 16
  })

  event.modify('minecraft:splash_potion', item => {
    item.maxStackSize = 16
  })

  event.modify('minecraft:lingering_potion', item => {
    item.maxStackSize = 16
  })

  event.modify('minecraft:turtle_helmet', item => {
    item.rarity = 'EPIC'
    item.maxDamage = 481
    item.craftingRemainder = Item.of('minecraft:turtle_scute').item
  })

  event.modify('creaturefeature:flintlock', item => {
    item.maxDamage = 64
  })

  event.modify('dungeonsdelight:stained_knife', item => {
    item.maxDamage = 2031
    item.attackDamage = 4.5
  })

  event.modify('dungeonsdelight:stained_cleaver', item => {
    item.maxDamage = 2031
    item.attackDamage = 6.5
  })

  event.modify('aquamirae:sea_stew', item => {
    item.maxStackSize = 16
  })

  event.modify('aquamirae:poseidon_breakfast', item => {
    item.maxStackSize = 16
  })
})