class Farm {
  constructor(name) {
    this.name = name;
    this.crops = [];
    this.animals = [];
  };

  addCrop(crop) {
    this.crops.push(crop);
  };

  addAnimal(animal) {
    this.animals.push(animal);
  };

  calculateIncomeCrop() {
    return this.crops
      .map(crop => crop.getYieldInEuros())
      .reduce((a, b) => a + b, 0);
  };

  calculateIncomeAnimal() {
    return this.animals
      .map(animal => animal.getValueInEuros())
      .reduce((a, b) => a + b, 0);
  };

  calculateIncome() {
    return this.calculateIncomeCrop() + this.calculateIncomeAnimal();
  };

  printReport() {
    console.log(`----------------------`);
    console.log(`- Farm: ${this.name}     -`);
    console.log(`- No. of crops: ${this.crops.length}    -`);
    console.log(`- No. of animals: ${this.animals.length}  -`);
    console.log(`- Total income: ${Math.round(this.calculateIncome())}  -`);
    console.log(`- Crops income: ${Math.round(this.calculateIncomeCrop())}  -`);
    console.log(`- Animals income: ${Math.round(this.calculateIncomeAnimal())} -`);
    console.log(`----------------------`);
  }
}

module.exports = { Farm }

