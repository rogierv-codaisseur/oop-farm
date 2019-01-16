const { Farm } = require('./index');
const { Wheat, Sugarcane } = require('./crops');
const { Cow, Horse, Pig } = require('./animals');

test('A new Farm can have a name', () => {
  const farm = new Farm('TEST_NAME');
  expect(farm.name).toBe('TEST_NAME');
});

test('We can add a crop to our farm', () => {
  const farm = new Farm('TEST_NAME');
  farm.addCrop(new Wheat(100));
});

test('The income of an empty farm is 0', () => {
  const farm = new Farm('TEST_NAME');
  expect(farm.calculateIncome()).toBe(0);
});

test('The income of a 100 Wheat + 100 Sugarcase farm is X', () => {
  const farm = new Farm('TEST_NAME');
  farm.addCrop(new Wheat(100));
  farm.addCrop(new Sugarcane(100));
  expect(farm.calculateIncome()).toBeCloseTo(1918.38, 2);
})

test('Animals can be added to the farm', () => {
  const farm = new Farm();
  farm.addAnimal(new Cow(100));
});

test('Animals will be takin into account for calculateIncome', () => {
  const farm = new Farm();
  farm.addAnimal(new Cow(100));
  expect(farm.calculateIncome()).not.toBe(0);
})

test('Integration test that combines all behaviours', () => {
  const farm = new Farm("The Farm");
  farm.addCrop(new Wheat(100));
  farm.addCrop(new Sugarcane(100));
  farm.addAnimal(new Pig(10));
  farm.addAnimal(new Horse(20));
  farm.addAnimal(new Cow(5));
  farm.printReport();
  expect(farm.calculateIncome()).toBeCloseTo(2387.88, 2);
})