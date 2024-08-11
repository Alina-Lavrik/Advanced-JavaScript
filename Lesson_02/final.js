// Разработать систему регистрации пользователей для веб-приложения

// Глобальный объект

const App = {};

// защищенные свойства класса

class User {
    // Защищенное свойство _name
    #_name;

    constructor(name) {
        this.#_name = name;
    }

    getName() {
        return this.#_name;
    }
}

// Функция регистрации пользователя

App.registerUser = (name, email, password) => {
    try {
        // Проверка введенных данных
        if (!name || !email || !password) { // если не name или ни email или не password
            throw new Error('Не все данные были введены');
        }

        // Создание экземпляра класса User
        const user = new User(name);

        // Дополнительная обработка и сохранение пользователя
        const userData = {
            name: user.getName(),
            email,
            password
        };

        // Здесь можно добавить логику сохранения пользователя в базу данных
        // или отправку данных на сервер
        
        console.log('Пользователь успешно зарегистрирован:', user.getName());
        console.log('Дополнительные данные пользователя:', userData);
    } catch (error) {
        console.error('Ошибка регистрации:', error.message);
    } finally {
        console.log('Завершение регистрации пользователя');
    }
}

// Вызов функции регистрации пользователя

App.registerUser('John Doe', 'john@gmail.com', 'password888');
App.registerUser('Marry Wids', '', 'passwordM888');

// Пользователь успешно зарегистрирован: John Doe
// Дополнительные данные пользователя: {name: 'John Doe', email: 'john@gmail.com', password: 'password888'}email: "john@gmail.com"name: "John Doe"password: "password888"[[Prototype]]: Object
// Завершение регистрации пользователя
// Ошибка регистрации: Не все данные были введены
// Завершение регистрации пользователя