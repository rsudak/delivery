document.addEventListener("DOMContentLoaded", function() {
    // Функция для загрузки экранов
    function loadScreen(screen) {
        fetch(screen)
            .then(response => response.text())
            .then(html => {
                document.getElementById('content').innerHTML = html;
                // Добавьте вызовы скриптов, необходимых для каждого экрана, если они есть
            })
            .catch(error => {
                console.error('Ошибка загрузки экрана:', error);
            })
    }

    // Загрузка начального экрана (например, логин)
    loadScreen('authorization/login.html')

    // Пример для смены экрана
    // Вы можете использовать события, такие как нажатие кнопок, для вызова этой функции
    document.getElementById('someButton').addEventListener('click', function() {
        loadScreen('calculate/calculate.html')
    })
})

