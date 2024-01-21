document.addEventListener('DOMContentLoaded', function () {
    const miscButton = document.createElement('button');
    miscButton.textContent = 'Toggle Mode';
    miscButton.addEventListener('click', toggleMode);

    const miscLink = document.querySelector('nav a[href="https://www.youtube.com/watch?v=H8WMmcYF0Cg"]');
    miscLink.insertAdjacentElement('afterend', miscButton);

    function toggleMode() {
        document.body.classList.toggle('light-mode');
    }
});
