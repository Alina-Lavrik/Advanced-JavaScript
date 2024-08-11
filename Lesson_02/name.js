function sayHello() {
    console.log('Hello!');
}

// console.log(sayHello.name); // выводит имя функции sayHello

// console.log(window.name); // выводит имя окна браузера, пустую строку или имя окна, если оно было задано

// console.log(frames[0].name); // выводит имя фркйма, пустую строку или имя фреймаб если оно было задано

// const obj = {};
// console.log(obj.name); // Выводит значение underfined тк свойство "name" не было определено для объекта

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
// }

// const rect = new Rectangle(10, 5);
// console.log(rect.constructor.name); 
// Выводит имя класса Rectangle через свойство "name" конструктора объекта
