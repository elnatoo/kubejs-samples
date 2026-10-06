ServerEvents.tags('item', event => {
    // Tag used for allowing craft of the Error Item from Places and giving an additional use to TBS items
    event.add('c:null_items', [
        'thebrokenscript:null',
        'thebrokenscript:n'
    ])
})
