// // Пример 1: Установка и получение значения из LocalStorage

// // Установка значения в LocalStorage

// localStorage.setItem('username', 'Dima');


// // Получить значение из LocalStorage

// let storedUsername = localStorage.getItem('username');
// console.log('Значение из LocalStorage:', storedUsername);


// // Удаление

// // Удаление значения из LocalStorage

// localStorage.removeItem('username');

// // Проверка, что значение удалено

// let storedUsername2 = localStorage.getItem('username');
// console.log('Значение из LocalStorage удалено:', storedUsername2);

// // Очистка LocalStorage

// localStorage.clear(); // удаляет все

// // Проверка, что LocalStorage пустой
// console.log('LocalStorage:', localStorage);


// // Проверяем, есть ли значение счетчика в LocalStorage

// if (localStorage.getItem('counrter')) {
//     // если значение счетчика уже есть, увеличиваем его на 1
//     let counter = parseInt(localStorage.getItem('counter')) + 1;  // Функция parseInt возвращает целое число
//     localStorage.setItem('counter', counter.toString());
// } else {
//     // если значение счетчика не существует, устанавливаем его в 1
//     localStorage.setItem('counter', '1');
// }

// // Выводим значение счетчика в консоль
// console.log('Счетчик посещений:', localStorage.getItem('counter'));

// localStorage.clear();

// Проверяем, есть ли значение счетчика в LocalStorage
// если есть подставляем значение counter, если нет значение 0
let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

// Обновляем значение счетчика и сохраняем его в LocalStorage

const updateCounter = () => {
    counter++;
    localStorage.setItem('counter', counter.toString());

};

// Выводим текущее значение счетчика на страницу

document.querySelector('.counter').textContent = counter;

// Обработчик события для кнопки "Увелимчить счетчик"

document.querySelector('.increment').addEventListener('click', () => {
    updateCounter();
    document.querySelector('.counter').textContent = counter;
});

