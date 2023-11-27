let carPartsInventory = [
    { name: "Brake Pads", quantity: 2 },
    { name: "Headlights", quantity: 1 },
    { name: "Spark Plugs", quantity: 11 },
    { name: "Oil Filters", quantity: 176548 }
];

function addQuantityToParts(inventory, numberToAdd) {
    for (let i = 0; i < inventory.length; i++) {
        inventory[i].quantity += numberToAdd;
    }
}
addQuantityToParts(carPartsInventory, 5);
console.log("Updated Car Parts Inventory:");
console.log(carPartsInventory);
