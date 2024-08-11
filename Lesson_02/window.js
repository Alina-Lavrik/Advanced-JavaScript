// // Работа с window

// console.log(window);
// const newWindow = window.open('https://www.example.com', '_blank'); // Открываем новое окно браузера
// window.resizeTo(800, 600); // Изменяет размер окна на 800х600 пикселей
// window.location.href = "https://www.example.com"; // перенаправляет на другую страницу
// console.log(window.location);
// const windowWidth = window.innerWidth; // Получает ширину окна

// // Работа с window.window

// const isWindowOpen = window.window.open('https://www.example.com') !== null; // Проверяет открыто ли окно
// const windowHeight = window.window.innerHeight; // Получает высоту окна
// console.log(windowHeight);
// window.window.location.href = 'https://www.example.com'; // /Перенаправляет на другую страницу ао вложенном окне

// Работа с self

// const newWindowSelf = self.open('https://www.example.com', '_blank'); // Открываем новое окно браузера с использованием self
// self.close(); // закрывает текущее окно с исп self
// self.resizeTo(800, 600); // Изменяет размер окна на 800х600 пикселей
// self.location.href = "https://www.example.com"; // перенаправляет на другую страницу

// // Работа с frames

// const frame = frames[0]; // Получаем ссылку на фрейм по индексу
// frames[0].location.href = 'https://www.example.com'; // Перенаправляет на другую страницу на фрейме
// const frameCount = frames.length; // Получает количество фреймов на станице
// const parantWindow = window.parent; // Получает доступ у родительскому окну из фрейма

// // Работа с globalThis

// const globalObject = globalThis; // Получает глобальный объект
// console.log(globalObject); // Window глобальный объект
// globalThis.newVariable = 'Hello, world'; // Определяет новую глобальную переменную
// console.log(newVariable); // Hello, world
// const globalVariable = globalThis.window === globalThis.self ? 'Window' : 'Worker'; // Получает доступ к глобальным переменным из разных сред исполнния
// console.log(globalVariable); // Window

// // alert

// console.log(alert() === window.alert()); //

// alert('Можно так');
// window.alert('А можно и так');

// // const let

// const local = 5;
// let localFunc = () => 'localFunc'; // внутри уже есть return
// console.log(local); // 5
// console.log(localFunc()); // localFunc
// console.log(window.local); // undefined
// console.log(window.localFunc); // undefined

// // Из прошлой части

// console.log(window.Symbol.for); // ƒ for() { [native code] }
// console.log(window.Symbol.iterator); // Symbol(Symbol.iterator)
// console.log(window.Array.from); // ƒ for() { [native code] }




