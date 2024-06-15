// --------Итерируемые объекты ------------------
// Перебираемые или итерируемые объекты — это обобщение массивов. Концепция,
// позволяющая любой объект использовать в цикле for(… of …). Естественно, массивы
// сами по себе являются итерируемыми. Но есть большое количество других
// встроенных объектов, которые являются итерируемыми. Например, строки


const string = "Hello";

// console.log(string[1]); // e
// console.log(string.length);  // 5

for (let str of string) {
    console.log(str);
}
// работает как с циклом, работает с нестандарными символами, имеющими свои ASCII-коды

// Например, у нас есть объект с диапазоном чисел

let range = {
    from: 1,
    to: 10
};

// 1. вызов for..of сначала вызывает эту функцию

range[Symbol.iterator] = function () {
    // ... она возвращает объект итератора
    // 2. Далее, for(..of..) работает только с этим итератором, запрашивая у него новые значения

    return {
        current: this.from,
        last: this.to,

        // 3. next() вызывается на каждой итерации цикла for(..of..)
        next() {
            // 4. он должен вернуть значение в виде объекта {done:.., value:...}
            return this.current <= this.last ? { done: false, value: this.current++ } : { done: true };
        }

    };
};

for (let number of range) {
    console.log(number);
};

// ------ Array.from --------
// Сделать массив из подобного псевдомассива или итерируемого объекта поможет
// метод Array.from.

let pseudo = {
    0: 'first',
    1: 'second',
    2: 'new elem',
    length: 3
}

let array = Array.from(pseudo);
console.log(array);
console.log(array.pop());  // вырежет и выведет последний элемент массива

// (3) ['first', 'second', 'new elem']
// 0: "first"
// 1: "second"
// length: 2
// [[Prototype]]: Array(0)

// new elem


// --- Работает со строкой ---

let pseudo2 = "It's Array Like!";
let array2 = Array.from(pseudo2);
console.log(array2);

// (16) ['I', 't', "'", 's', ' ', 'A', 'r', 'r', 'a', 'y', ' ', 'L', 'i', 'k', 'e', '!']