function calculateTotalKgs(frutas) {
    let result = {};
    for (const key in frutas) {
      if (frutas.hasOwnProperty(key)) {
        const fruitName = key.split(' ')[1];
        result[fruitName] = (result[fruitName] || 0) + frutas[key];
      }
    }
    return result;
  }
  let frutas = {
    "manzanas golden": 1234567890,
    "manzanas fuji": 200,
    "pera conferencia": 2,
    "pera ercolina": 1221,
  };
  let totalKgs = calculateTotalKgs(frutas);
  console.log(totalKgs);
  