document.addEventListener("DOMContentLoaded", function() {
    function loadScreen(screen) {
        console.log('Loading screen:', screen); // Debugging log
        fetch(screen)
            .then(response => response.text())
            .then(html => {
                document.getElementById('content').innerHTML = html;
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

    // Load the login screen by default
    loadScreen('login/login.html');

    // Attach event listeners to navigation links
    document.getElementById('authLink').addEventListener('click', function(event) {
        event.preventDefault();
        loadScreen('login/login.html');
    });

    document.getElementById('calculateLink').addEventListener('click', function(event) {
        event.preventDefault();
        loadScreen('calculate/calculate.html');
    });

    document.getElementById('recipientLink').addEventListener('click', function(event) {
        event.preventDefault();
        loadScreen('recipient/recipient.html');
    });

    document.getElementById('senderLink').addEventListener('click', function(event) {
        event.preventDefault();
        loadScreen('sender/sender.html');
    });

    document.getElementById('deliveryLink').addEventListener('click', function(event) {
        event.preventDefault();
        loadScreen('delivery/delivery.html');
    });

    document.getElementById('profileLink').addEventListener('click', function(event) {
        event.preventDefault();
        loadScreen('profile/profile.html');
    });

    // Make loadScreen function available globally
    window.loadScreen = loadScreen;
});

