function getTotalKgUsingObjectValues(frutas) {
    const values = Object.values(frutas);
    if (values.length === 0) {
      return 0;
    }
    const totalKg = values.reduce((sum, kg) => sum + kg, 0);
    return totalKg;
  }





  function getTotalKgUsingForOf(frutas) {
    let totalKg = 0;
    for (const kg of Object.values(frutas)) {
      totalKg += kg;
    }
    return totalKg;
  }