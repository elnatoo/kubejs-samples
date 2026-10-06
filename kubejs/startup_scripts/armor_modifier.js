/*  ========== SCRIPT ==========
*   This is a script I utilized to modify armor attributes and can be repurposed for any similar cases.
*   Credit to Seraphaestus on Reddit for kindly sharing their implementation! 
*/

ItemEvents.modification(event => {
    // NOTE: Because we replace the attribute modifiers object entirely, the "add" modifiers are NOT relative and will get replaced by the new values.
    const modifier_add = (id, amount) => { return { id: id, operation: "add_value", amount: amount } }
    const modify_armor = (id, type, slot, uses, armor, toughness, stability) => {
        event.modify(id, item => {
            item.maxDamage = uses
            let modifier_ID = "minecraft:armor." + type
            let attributeModifiers = Item.of(item.item().id).attributeModifiers
            if (armor != 0) {
                attributeModifiers = attributeModifiers.withModifierAdded("generic.armor", modifier_add(modifier_ID, armor), slot)
            }
            if (toughness != 0) {
                attributeModifiers = attributeModifiers.withModifierAdded("generic.armor_toughness", modifier_add(modifier_ID, toughness), slot)
            }
            if (stability != 0) {
                attributeModifiers = attributeModifiers.withModifierAdded("generic.knockback_resistance", modifier_add(modifier_ID, stability), slot)
            }
            item.setAttributeModifiersWithTooltip(attributeModifiers.modifiers())
        })
    }

    modify_armor("the_beyond:anchor_leggings", "leggings", "legs", 528, 6.5, 3.0, 0.1)
    modify_armor("curiosities:heavy_boots", "boots", "feet", 429, 3.5, 3.0, 0.1)
})