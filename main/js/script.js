document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.header-burger');
    const nav = document.querySelector('.header-navigation');

    function toggleNav() {
        nav.classList.toggle('burger-active');
    }
    btn.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleNav();
    });

    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !btn.contains(event.target)) {
            nav.classList.remove('burger-active');
        }
    });
    document.getElementById('submitBtn').addEventListener('click', function() {
        const name = document.getElementById('inputName').value.trim();
        const email = document.getElementById('inputEmail').value.trim();
        const sum = document.getElementById('inputSumm').value.trim();
    
        if (!name || !email || !sum) {
            alert('Пожалуйста, заполните все поля формы.');
            return;
        }
        window.location.href = 'payer.html';
    });
});

