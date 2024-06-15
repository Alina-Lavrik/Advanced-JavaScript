// Задание 1
// Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать.
// Каждая итерация должна возвращать следующий альбом из коллекции.
// Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator.
// Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// Используйте цикл for...of для перебора альбомов в музыкальной коллекции и
// вывода их на консоль в формате: Название альбома - Исполнитель(Год выпуска)


const musicCollection = [
    { title: "Rock and Roll", artist: "Jack Forward", year: "1984" },
    { title: "Romantic near sea", artist: "Perry Berry", year: "1999"  },
    { title: "City drive", artist: "Jast Miky", year: "2008"  }
];

musicCollection[Symbol.iterator] = function () {
    return {
        current: 0,
        to: this.length,
        next() {
            return this.current < this.to
                ? { done: false, value: musicCollection[this.current++] }
                : { done: true };
            
        }
    }
};

for (let album of musicCollection) {
    console.log(`Название альбома ${album.title} - Исполнитель ${album.artist}(Год выпуска ${album.year})`);
};

// Вывод:
// Название альбома Rock and Roll - Исполнитель Jack Forward(Год выпуска 1984)
// Название альбома Romantic near sea - Исполнитель Perry Berry(Год выпуска 1999)
// Название альбома City drive - Исполнитель Jast Miky(Год выпуска 2008)