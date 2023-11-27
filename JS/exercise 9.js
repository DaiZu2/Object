const fruits = {
    name: "",
    kg: 0,
  
    sell: function() {
      console.log(`Selling ${this.kg} kg of ${this.name}`);
    },
  
    buy: function() {
      console.log(`Buying ${this.kg} kg of ${this.name}`);
    },
  
    outOfStockDate: function() {
      console.log(`No information available for out of stock date.`);
    },
  
    buyingDate: function() {
      console.log(`No information available for buying date.`);
    }
  };