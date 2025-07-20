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
});

