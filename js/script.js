// Получаем ссылки на элементы меню
const menuItems = document.querySelectorAll('.menu-item');

// Функция для обработки клика по пункту меню
function handleClick(event) {
    // Удаляем класс 'active' у всех пунктов меню
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Добавляем класс 'active' к текущему пункту меню
    event.target.classList.add('active');
}

// Назначаем обработчик события клика для каждого пункта меню
menuItems.forEach(item => {
    item.addEventListener('click', handleClick);
});
