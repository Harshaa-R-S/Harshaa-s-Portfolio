document.addEventListener('DOMContentLoaded', function() {
    var icons = document.querySelectorAll('.icon-link img');

    icons.forEach(function(icon) {
        icon.addEventListener('click', function() {
            this.classList.add('clicked');
            // Remove the class after the animation ends
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300); // Match the animation duration
        });
    });
});
