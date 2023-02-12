// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
// Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

let where = [4, 3, 1, 2, 5, 6];
let what = [3, 4, 11];

function contains(where, what) {
    let n = 0;
    let x = 0;
    for (let j = 0; j < what.length; j++) {

        for (var i = 0; i < where.length; i++) {

            if (where[i] == what[j]) {
                n++;
            }
            if (n == what.length)
                x = Boolean(true);
            else
                x = Boolean(false);

        }
    }

    console.log("n", n);

    return x;
}
contains(where, what);