class Animal {
  constructor(age) {
    this.age = age;
  };

  getValueInEuros() {
    return this.getWeightInKg() * this.price;
  };
};

class Pig extends Animal {
  constructor(age) {
    super(age);
    this.weight = 700;
    this.price = 4;
  };

  getWeightInKg() {
    return Math.min(this.age * 2.3, this.weight);
  };
};

class Cow extends Animal {
  constructor(age) {
    super(age);
    this.weight = 1200;
    this.price = 5;
  };

  getWeightInKg() {
    return Math.min(this.age * 1.5, this.weight);
  };
};

class Horse extends Animal {
  constructor(age) {
    super(age);
    this.weight = 1000;
    this.price = 10;
  };

  getWeightInKg() {
    return Math.min(this.age * 1.7, this.weight);
  };
};

module.exports = { Pig, Cow, Horse };