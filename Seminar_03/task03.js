document.addEventListener('DOMContentLoaded', () => {
    // Загрузка сохраненных настроек
    const loadSettings = () => {
        const saveSettings = localStorage.getItem('furnitureSet');
        if (saveSettings) {
            const settings = JSON.parse(saveSettings);
            //document.querySelector('#table-color').value = settings.tableColor;
            document.querySelector('#table-material').value = settings.tableMaterial;
            //document.querySelector('#chair-color').value = settings.chairColor;
            document.querySelector('#chair-material').value = settings.chairMaterial;
            document.querySelector('#sofa-style').value = settings.sofaStyle;

        }
    };
    loadSettings(); // Загрузка настроек при открытии страницы

    // Сохранение настроек

    document.querySelector('#save-btn').addEventListener('click', () => {
        const furnitureSet = {
            //tableColor: document.querySelector('#table-color').value,
            tableMaterial: document.querySelector('#table-material').value,
            //chairColor: document.querySelector('#chair-color').value,
            chairMaterial: document.querySelector('#chair-material').value,
            sofaStyle: document.querySelector('#sofa-style').value,
        };
        localStorage.setItem('furnitureSet', JSON.stringify(furnitureSet));
        alert('Комплект сохранен!');
    });

    // Загрузка сохраненных настроек
    document.querySelector('#load-btn').addEventListener('click', () => {
        loadSettings();
    });

    // Очистка настроек

    document.querySelector('#clear-btn').addEventListener('click', () => {
        localStorage.removeItem('furnitureSet');
        alert('Настройки очищены!');
        // Очищаем форму
        //document.querySelector('#table-color').selectedIndex = 0;
        document.querySelector('#table-material').selectedIndex = 0;
        //document.querySelector('#chair-color').selectedIndex = 0;
        document.querySelector('#chair-material').selectedIndex = 0;
        document.querySelector('#sofa-style').selectedIndex = 0;

    });

});