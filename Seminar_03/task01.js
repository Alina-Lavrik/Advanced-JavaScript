const addButton = document.getElementById('button-news');
const findHeader = document.querySelector('.news-container');
const news = [
    {
    title: 'Новость 1', content: 'Бывший министр финансов Шри-Ланки Али Сабри сообщил о завершении реструктуризации государственного долга и выходе страны из состояния банкротства'
    },
        {
    title: 'Новость 2', content: 'Шри-Ланка продолжает борьбу с начавшемся в 2020-2021 годах экономическим кризисом, который эксперты назвали худшим с момента обретения страной независимости'
    },
];

function fetchNews() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve(news);

            } else {
                reject('Ошибка загрузки');
            }
        }, 2000); // 2 секунды
    });    
};

// Запускаем

addButton.addEventListener('click', () => {
    fetchNews()
        .then((data) => {
            data.forEach(elem => {
                const textP = document.createElement('p');
                textP.textContent = elem.content;
                const textH = document.createElement('h1');
                textH.textContent = elem.title;
                findHeader.appendChild(textH);
                findHeader.appendChild(textP);

            });
        }).catch((error) => {
            findHeader.textContent = error;
           
        });
});