// Задание 3

// Дана строка. Необходимо вывести в консоль перевёрнутый вариант.
//  Например, "Hello" -> "olleH".

let x = 'Hello';

x = x.split("").reverse().join("");

console.log(x)