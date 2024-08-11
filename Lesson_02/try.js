// try {
//     undefined = 1;
// } catch {
//     console.log('Что-то пошло не так');
// }
// finally {
//     console.log('Отличный результат');
// }

// Пример: Работа с делением чисел

// function divideNumbers(a, b) {
//     try {
//         const result = a / b; // Попытка выполнить деление
//         if (isNaN(result)) {
//             throw new Error('Результат не является числом');
//         }
//         console.log('Результат деления:', result);
//     } catch (error) {
//         console.log('Ошибка деления:', error);
//     } finally {
//         console.log('Операция деления завершена');
//     }

// }

// divideNumbers(10, 2); // 5, Операция деления завершена
// divideNumbers(10, 0); // Infinity, Операция деления завершена
// divideNumbers('ccc', 'fff'); // Результат не является числом, Операция деления завершена

// Пользовательские ошибки
// Создание пользовательской ошибки

class CustomError extends Error {
    constructor(message) {
        super(message); // Вызов конструктора родительского класса (Error) с переданным сообщением
        this.name = 'CustomError'; // установка имени ошибки
    }
}

function validateNumber(value) {
    if (typeof value !== 'number') {
        throw new CustomError('Значение должно быть числом'); // Выбрасование пользовательской ошибки с солбщением 
    }
    console.log('Валидация успешна');
}

try {
    validateNumber('hello'); // Проверка на число с передачей строки вместо числа
} catch (error) {
    if (error instanceof CustomError) {  // Проверка, является ли ошибка экземпляром пользовательской ошибки
        console.error('Ошибка:', error.message); // Вывод сообщения о ошибки
        console.log('Тип ошибки:', error.name);  // Вывод имени ошибки
        
    } else {
        console.error('Произошла ошибка:', error); // Вывод сообщения об ошибке по умолчанияю

    }
    
}

// try.js:52  Ошибка: Значение должно быть числом

// try.js:53 Тип ошибки: CustomError