// После ввода данных, сохраняем данные в LocalStorage.

document.getElementById('save-btn').addEventListener('click', () => {
    const nameInput = document.getElementById('name-input').value;
    localStorage.setItem('Name', nameInput);
    alert(`Имя пользователя сохранено: ${nameInput}`);

    const passInput = document.getElementById('pass-input').value;
    localStorage.setItem('Password', passInput);
    alert(`Пароль сохранен: ${passInput}`);

    setTimeout(function(){
        window.location.href ='enter_page.html';
    }, 1000);

});




