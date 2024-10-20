// 1. Напишите функцию которая возвращает Promise, выполняющийся через секунду и резолвит случайное число от 1 до 10.
// Если возникла ошибка при генерации числа, Promise должен быть отклонен с сообщением об ошибке


let generateRandomeNumber = () => {
    return new Promise((resolve, reject) => { // resolve выполняетсяф если все хорощо, reject если ошибка
        setTimeout(() => {  // чтобы код выполнился через 1 секунду
            const randomNumber = Math.floor(Math.random() * 10) + 1;
            if (randomNumber) {
                resolve(randomNumber);

            } else {
                reject('Ошибка генерации случайного числа');
            }
        }, 1000); // 1 секунда
    });
};

// Вызов функции, чаще всего с then

generateRandomeNumber()
    .then((number) => {
        console.log('Сгенерированно случайное число:', number);
    }).catch((error) => {
        console.log('Ошибка:', error);
    });

// 2. Напишите функцию fetchData(url), которая принимает URL в качестве аргумента и возвращает Promise,
// выполняющий запрос данных по указанному URL. Если запрос завершится успешно, Promise должен резолвить полученные данные.
// В случае ошибки запроса, Promise должен быть отклонен с сообщением об ошибке.

// let fetchData = (url) => {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then((response) => response.json())
//             .then((data) => resolve(data))
//             .catch((error) => reject('Ошибка загрузки данных'));
//     });
// };

// fetchData('https://randombig.cat/roar.json')
//     .then((data) => {
//         console.log('Порлучены данные:', data);
//     })
//     .catch((error) => {
//         console.log('Ошибка:', error);
//     });


// 3. Напишите функцию checkFileExists(file), которая принимает имя файла в качестве аргумента и
// возвращает Promise, выполняющийся через 2 секунды.Promise должен резолвится, если файл существует,
// и отклониться, если файла нет

let checkIfFileExists = (file) => {

};

let checkFileExists = (file) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fileExists = checkIfFileExists(file);
            if (fileExists) {
                resolve('Файл существует');
                
            } else {
                reject('Файла нет');
                
            }
        },
        2000);  // 2 секунды
    });
}

checkFileExists('example.txt')
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log('Ошибка:', error);
    }
);

// 4. then Напишите функцию calculateSum(a, b), которая принимает 2 числа в качестве аргумента и
// возвращает Promise. Promise должен быть суммой двух чисел.

const calculateSum = (a, b) => {
    return new Promise((resolve, reject) => {
        const sum = a + b;
        if (sum) {
            resolve(sum);
        } else {
            
            reject('Ошибка в сложении');
        }
    });
    
};

calculateSum(1, 9)
    .then((result) => {
        console.log('Сумма чисел:', result);
    })
    .catch((error) => {
        console.log('Ошибка:', error);
    });


// 5. then Напишите функцию divideNumbers(a, b), которая принимает 2 числа в качестве аргумента и
// возвращает Promise. Promise должен выполнить деление первого числа на второе.
// Если второе число равно 0, Promise должен быть отклонен с сообщением о невозможности деления на 0.

const divideNumbers = (a, b) => {
    return new Promise((resolve, reject) => {
        const divide = a / b;
        if (b === 0) {
            reject('Деление на ноль невозможно');
        } else {
            resolve(divide);
        }
    });
    
};

divideNumbers(40, 5)
    .then((result) => {
        console.log('Результат деления:', result);
    }).catch((error) => {
        console.log('Ошибка:', error);
    });

// Цепочки прописов

new Promise((resolve) => {
    setTimeout(() => resolve(1), 1000);
}).then(function (result) {
    console.log(result);
    return new Promise((resolve) => {
        setTimeout(() => resolve(result * 2), 1000);
    });
}).then(function (result) {
    console.log(result);
    return new Promise((resolve) => {
        setTimeout(() => resolve(result * 2), 1000);
    });
}).then(function (result) {
    console.log(result);
});

// 6. finally

let processData = (data) => { };

let performOperation = (data) => {
    return new Promise((resolve, reject) => {
        let result = processData(data);

        // Complite the promise
        if (result) {
            resolve(result);
        } else {
            reject('Ошибка операции');
        }
    }).finally(() => {
        console.log('Операция завершена');
    });
};

performOperation('example')
    .then((result) => {
        console.log('Результат операции:', result);
    }).catch((error) => {
        console.log('Ошибка:', error);
    });

// 7. Promise.all()

Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    //new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ошибка!')), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(console.log)
    .catch(console.log);

// Вы разрабатываете приложение, которое отправляет запросы к разным серверам и хотите определить, какойсервер отвечает быстрее.
// Напишите функцию checkServerResponse(urls), которая принимает массив URL-адресов в качестве аргумента и возвращает Promise.
// Promise должен быть выполнен с URL-адресом сервераб который первый ответил на запрос.

let checkServerResponse = (urls) => {
    let promises = urls.map((url) => fetch(url));

    return Promise.race(promises)
        .then((response) => {
            return response.url;
        });
};

let urls = [
    'https://dzen.ru/?clid=2233626&yredirect=true',
    'https://mail.ru',
    'https://www.rbc.ru/?ysclid=m13fyvf5k1177523262'
];

checkServerResponse(urls).then((fastesServer) => {
    console.log('Самый быстрый сервер:', fastesServer);
}).catch((error) => {
    console.log('Ошибка:', error);
});