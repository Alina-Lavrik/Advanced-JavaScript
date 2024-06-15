// Задание 1 
// Создать механизм для безопасного добавления метаданных к 
// объектам книг с использованием Symbol.
// 1. Создать уникальные символы для метаданных: отзывы, 
// рейтинг, теги.
// 2. Реализовать функции addMetadata (добавление метаданных) 
// и getMetadata (получение метаданных).
// 3. Создать объект книги, добавить метаданные и вывести их на 
// консоль.


// Функция для добавления метаданных к объектам

function addMetadata(book, metadataType, data) {
    // добавить код
    if (book[metadataType]) {
        book[metadataType].push(data);

    } else {
        book[metadataType] = [data];
    }
    // book[metadataType] = [data];
}

// Функция для извлечения метаданных из объекта

function getMetadata(book, metadataType) {
    // вернуть
    return book[metadataType];
}

// Создание объекта книги и добавление метаданных

const book = {
    title: '1984',
    author: 'George Orwell'
};

// создали метаданные
const reviewSymbol = Symbol('review');
const ratingSymbol = Symbol('rating');
const tagsSymbol = Symbol('tags');

// вызвали для долбавления
addMetadata(book, reviewSymbol, 'Отличная книга о дистопии!');
addMetadata(book, ratingSymbol, 5);
addMetadata(book, tagsSymbol, 'dystopia');

// Вывод метаданных для книги 
console.log(getMetadata(book, reviewSymbol)); 
console.log(getMetadata(book, ratingSymbol)); 
console.log(getMetadata(book, tagsSymbol)); 

// Задание 2 (тайминг 20 минут)
// Используя Symbol.iterator, создайте объект "Библиотека", который можно
// итерировать. Каждая итерация должна возвращать следующую книгу из библиотеки.
// 1. Создайте объект library, который содержит массив книг и имеет свойство символ Symbol.iterator.
// 2. Реализуйте кастомный итератор для объекта library. Итератор должен
// перебирать книги по порядку.
// 3. Используйте цикл for...of для перебора книг в библиотеке и вывода их на
// консоль.
// Массив книг: 

const books = [
    { title: "1984", author: "George Orwell" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "Fahrenheit 451", author: "Ray Bradbury" }
];

books[Symbol.iterator] = function () {
    return {
        current: 0,
        to: this.length,
        next() {
            return this.current < this.to
                ? { done: false, value: books[this.current++] }
                : { done: true };
            
        }
    }
};

for (let book of books) {
    console.log(`Название: ${book.title}, Автор: ${book.author}`);
};

// Название: 1984, Автор: George Orwell
// Название: Brave New World, Автор: Aldous Huxley
// Название: Fahrenheit 451, Автор: Ray Bradbury