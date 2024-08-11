// class AutoMobile {
//     _horsePowers = 0;  // Объявление приватного поля

// //Свойство _horsePowers написали со знаком нижнего подчёркивания для обозначения, что свойство
// // защищённое.
    
//     set horsePowers(value) {
//         if (value < 0) throw new Error("Отрицательное количество сил");
//         this._horsePowers = value; // Установка значения свойства _horsePowers
//     }
    
//     get horsePowers() { // определение геттера для свойства horsePowers
//         return this._horsePowers; // Возвращает значение свойства _horsePowers
//     }
    
//     constructor(power) { // Определение конструктора класса
//         this._horsePowers = power; // установка значения свойства _horsePowers при создании  объекта класса
//     }
// }

// // создаем новую машину
// let auto = new AutoMobile(100); // создание нового объекта класса AutoMobile и передача значения 100 в конструктор
// console.log(auto);  // AutoMobile {_horsePowers: 100}

// установка количества сил
// auto.horsePowers = -10; // вызовет ошибку "Отрицательное количество сил"
// auto.horsePowers = 200;
// console.log(auto);  // AutoMobile {_horsePowers: 200}

// Приватные свойства начинаются со ззнака # и имют защиту на уровне языка

class AutoMobile {
    #horsePowers = 0;  // Объявление приватного поля

    
    set horsePowers(value) {
        if (value < 0) throw new Error("Отрицательное количество сил"); 
        this._horsePowers = value; 
    }
    
    get horsePowers() { 
        return this._horsePowers; 
    }
    
    constructor(power) { 
        this._horsePowers = power; 
    } 
}

// создаем новую машину
let auto = new AutoMobile(100); 
// устанавливаем количество сил через сеттер
auto.horsePowers = 50;
console.log(auto.horsePowers);  // 50
// устанавливаем количество сил напрямую
// auto.#horsePowers = 10;
// console.log(auto.#horsePowers); 