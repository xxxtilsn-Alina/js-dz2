// 1.
const celsius = 11;
const fahrenheit = (celsius * 9) / 5 + 32;
console.log(`${celsius}°C = ${fahrenheit}°F`);

// 2.

const daymounth = 31;
const hour = daymounth * 24;
const minute = hour * 60;
console.log(`днів в місяці:${daymounth}`);
console.log(`годин в місяці: ${hour}`);
console.log(`хвилин в місяці: ${minute}`);

// 3.

let health = 100;
let energy = 100;
health -= 38;
energy -= 49;
console.log(`здоров'я ${health}`);
console.log(`енергія ${energy}`);

// 4.

const sum = 1000;
const discount = sum * 0.1;
const sumDiscount = sum - discount;
console.log(`кінцева сумв ${sumDiscount}`);

// 5

const min = 4.6;
console.log(Math.floor(min));

// 6.

const number = "11.9";
const number2 = Number.parseFloat(number);
console.log(number2);

// 7.

const whole = "100";
const whole2 = Number.parseInt(whole);
console.log(whole2);

// 8.

const numb = 9;
console.log(Math.sqrt(numb));

// 9.

const integer = 36;
const string = "27";
const newString = Number.parseInt(string);
console.log(newString);
const newInteger = String(integer);
console.log(newInteger);
