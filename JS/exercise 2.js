let salaries = {
    John: 100,
    Gumis: 160,
    Pete: 130
  };
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  alert(sum);