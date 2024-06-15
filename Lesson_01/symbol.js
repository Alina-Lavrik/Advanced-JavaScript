
const symbol = Symbol();  // объявление

const dogID = Symbol('dog'); // значение уникально, даже если мы создадим несколько символов с
// одинаковым описанием

const dog1 = Symbol('dog');
const dog2 = Symbol('dog');

console.log(dog1);
// console.log(dog2);

// console.log(dog1 == dog2);

console.log(dogID.description);  // dog
 

// 2

// let id = Symbol('dogID');

// let buddy = {
//     [id]: 'Жучка'
// }

// console.log(buddy[id]); // Жучка

// 3

let buddy2 = { name: 'Nepbr ' }; // объявляем свойство 'id'
buddy2.id = "Наш идентификатор";  // это забыли
buddy2.id = "Их идентификатор";

console.log(buddy2.id);  // Их идентификатор

// 3 Как решить

let buddies = {
    [Symbol('Жучка')]: 'Жучка',
    [Symbol('Бобик')]: 'Бобик',
    [Symbol('Мурка')]: 'Мурка',
    elephant: 'Слон'
}

console.log(buddies);

let newBuddies = {};

// Object.assign скопирует все свойства, в том числе, и символьные
Object.assign(newBuddies, buddies);

buddies.cat = "Барсик";

console.log(newBuddies);

console.log(buddies);
// {elephant: 'Слон', cat: 'Барсик', Symbol(Жучка): 'Жучка', Symbol(Бобик): 'Бобик', Symbol(Мурка): 'Мурка'}
// cat: "Барсик"
// elephant: "Слон"
// Symbol(Бобик): "Бобик"
// Symbol(Жучка): "Жучка"
// Symbol(Мурка): "Мурка"
// [[Prototype]]: Object



// ------------- Symbol.for ------------

// читаем символ из глобального реестра и записываем его в переменную
let id = Symbol.for('id'); // если символа не существует, он будет создан

// читаем его снова и записываем в другую переменную 
let idAgain = Symbol.for('id'); 

// проверяем: это один и тот же символ
alert(id === idAgain); // true

// -------------  Symbol.keyFor ------------

// получаем символ по имени

let sym = Symbol.for('name');
let sym2 = Symbol.for('id');

// получаем имя по символу
console.log(Symbol.keyFor(sym)); // name 
console.log(Symbol.keyFor(sym2)); // id



