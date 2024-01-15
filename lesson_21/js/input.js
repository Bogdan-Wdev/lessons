document.addEventListener('DOMContentLoaded', function () {
    let input = document.getElementById('search-input');
    let label = document.querySelector('.form-header__label');

    label.addEventListener('click', function () {
        input.classList.toggle('_active');
    });

    document.addEventListener('click', function (event) {
        // Проверяем, был ли клик вне элемента label
        if (!label.contains(event.target) && !input.contains(event.target)) {
            input.classList.remove('_active');
        }
    });
});