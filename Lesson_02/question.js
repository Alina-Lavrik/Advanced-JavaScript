// Опциональная цепочка вызовов методов и оператор нулевого слияния
// Обьект с информцией о пользователе

const user = {
    name: 'John',
    age: 30,
    adress: {
        city: 'New York',
        street: '123 Main St'
    },
    contacts: {
        email: 'john@example.com',
        phone: '+7888080888'
    }
};

// Опциональная цепочка вызовов методов
// Сразу проверяем есть ли user затем есть ли contacts в котором email, если есть выводим
const email = user?.contacts?.email;
console.log(email); // john@example.com

// Если значение не определено или равно null или undefinded, используктся значение по умолчанию
const defaultValue = user?.otherValue ?? 'Default Value';
console.log(defaultValue); // Default Value тк свойство otherValue не существует в объекте user

// Опциональная цепочка вызовов методов и оператор нулевого слияния вместе 
// Проверяет и если есть выводит улицу если нет ?? выводит Unknown
const streetName = user?.adress?.street ?? 'Unknown';
console.log(streetName); // 123 Main St тк свойство 'street' существует в объекте user.adress