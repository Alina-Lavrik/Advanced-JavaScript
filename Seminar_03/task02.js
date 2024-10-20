

document.getElementById('save-btn').addEventListener('click', () => {
    const textInput = document.getElementById('text-input').value;
    localStorage.setItem('Text', textInput);
    alert(`Текст сохранен: ${textInput}`);

});

document.getElementById('load-btn').addEventListener('click', () => {
    // получить из localStorage значение
    const savedText = localStorage.getItem('Text');
    // текстконтентом записать значение из localStorage
    document.getElementById('new-text').textContent = savedText ? savedText: 'Введите текст';
    // alert(`Значение из LocalStorage: ${savedText}`);
});

document.getElementById('delete-btn').addEventListener('click', () => {
  
    localStorage.removeItem('Text');
    document.getElementById('new-text').textContent = 'Текст очищен';
    // alert(`Значение из LocalStorage удалено`);

});