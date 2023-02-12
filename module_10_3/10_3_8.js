// Создайте произвольный массив Map. Получите его ключи и
//  выведите в консоль все значения в виде «Ключ — Х, значение — Y».

let myMap = new Map();
myMap.set('orange', 'orange');
myMap.set('red', 'apple');
myMap.set('blue', 'blueberry');
myMap.set('green', 'greenberry');

console.log(myMap.keys());
console.log(myMap.values());



for (let entry of myMap) { 
  console.log(entry)
}