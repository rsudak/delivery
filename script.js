document.addEventListener("DOMContentLoaded", function() {
    // Функция для загрузки экранов
    function loadScreen(screen) {
        fetch(screen)
            .then(response => response.text())
            .then(html => {
                document.getElementById('content').innerHTML = html;
                // Выполнение скриптов, необходимых для загруженного экрана
                const scripts = document.querySelectorAll('#content script');
                scripts.forEach(oldScript => {
                    const newScript = document.createElement('script');
                    newScript.innerHTML = oldScript.innerHTML;
                    document.body.appendChild(newScript);
                });
            })
            .catch(error => {
                console.error('Ошибка загрузки экрана:', error);
            });
    }

    // Загрузка начального экрана (например, логин)
    loadScreen('login/login.html');
});
