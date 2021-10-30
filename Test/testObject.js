let inventory={
    'gold':500,
    'pouch':['flint','twine','gemstone'],
    'backpack':['xylophone','dagger','bedroll','bread loaf']
}
console.log(inventory);
inventory.pocket=[ "seashell", "strange berry", "lint"];
console.log(inventory);
inventory.backpack.splice(1,1);
console.log(inventory);
inventory.gold+=50;
console.log(inventory);
delete inventory.pouch;
console.log(inventory);