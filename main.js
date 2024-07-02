document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('#menu');
    const navbar = document.querySelector('.header .navbar');

    // Toggle the 'active' class on the navbar when the menu button is clicked
    menuButton.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Add smooth scroll behavior to all navbar links
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close the navbar menu on link click
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
            }
        });
    });
});
