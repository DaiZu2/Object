function createUser(name, address, bodyDimensions) {
    return {
        getInfo: function () {
            return {
                name,
                address,
                bodyDimensions
            };
        }
    };
}
const usuario1 = createUser("Piotr Duponogi", "Pod grzegorzem floryda 18", { height: 180, weight: 75 });
const usuario2 = Object.assign({}, usuario1.getInfo());
usuario2.name = "Daniel Dupomorda";
usuario2.address = "wlodziemierza bialego";
usuario2.bodyDimensions.height = 160;
console.log("Usuario 1:", usuario1.getInfo());
console.log("Usuario 2:", usuario2);