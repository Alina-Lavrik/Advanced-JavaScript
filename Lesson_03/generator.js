// Генератор для генерациии последовательности чисел

function numberGenerator() {

    let number = 1;

    while (true) {
        yield number;
        number++;
    }
};
// Создаем экземпляр генератора 
const generator = numberGenerator();


// Генерируем итератор, который будет возвращать следущее число при каждом вызове next()

console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3