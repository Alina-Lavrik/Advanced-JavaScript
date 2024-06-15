// Экспорт

// Чтобы получить доступ к объектам модулей, надо их экспортировать

export const name = 'square'; 

export function drawe(ctx, length, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, length, length);

    return {
        length: length,
        x: x,
        y: y,
        color: color
    };
}

// внутри блоков экспортировать нельзя


// Импорт

import { name, draw, reportArea, reportPerimeter } from './modules/square.js';

import * as Square from './modules/square.js';

// Точка в начале пути мы можем использовать для обозначения текущей директории.
// Две точки — директория выше. Тем самым, мы сокращаем длину написанного пути.

// Далее нам необходимо подключить модуль main.js на нашу HTML-страницу. Это
// очень похоже на то, как мы подключаем обычный скрипт на страницу, с некоторыми
// заметными отличиями.
// Прежде всего, вам нужно добавить type="module" в <script>-элемент, чтобы
// объявить, что скрипт является модулем. Чтобы подключить модуль main.js, нужно
// написать следующее:
// <script type="module" src="main.js"></script>
// Мы можем также встроить скрипт модуля непосредственно в HTML-файл, поместив
// JavaScript-код внутрь <script>-элемента