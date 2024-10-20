
// Если введенные данные совпадают с данными из LocalStorage, пользователь перенаправляется на страницу приветствия.
// Если данные не совпадают, выводится сообщение об ошибке.

document.getElementById('enter-btn').addEventListener('click', () => {
    // получить из localStorage значение

    const nameInput = document.getElementById('name-input').value;
    const passInput = document.getElementById('pass-input').value;
    if (nameInput === localStorage.getItem('Name') && passInput === localStorage.getItem('Password')) {
        alert(`Имя и пароль из LocalStorage совпадают: ${nameInput}, ${passInput}`);
        window.location.href ='greating_page.html';
    } else {
        alert('Ошибка');
    }

});


    