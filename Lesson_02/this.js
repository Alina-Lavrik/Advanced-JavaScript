// Обычная функция

// function regularFunction() {
//     console.log(this);
// }

// // Стрелочная функция

// const arrowFunction = () => {
//     console.log(this);
// }
 
// Вызываем фунции

// regularFunction(); // Выводит коньтекст выполнения, например, объект Window (в браузере)
// // или объект Global (в Node.js)
// arrowFunction(); // Выводит контекст выполнения, который был определен во время создания функции (лексический контекст)

// Внутри объекта

// const obj = {
//     regularMethod: function () {
//         console.log(this);
//     },
//     arrowMethod: () => {
//         console.log(this);
//     }
// };

// obj.regularMethod(); // Выводит объект obj - 
// {regularMethod: ƒ, arrowMethod: ƒ}
// obj.arrowMethod(); // Выводит контекст выполнения, в ктором была создана стрелочная функция, 
// например объект Window или объект Global