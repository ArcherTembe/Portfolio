let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
// FIX: Changed querySelector to querySelectorAll so .forEach() works on sections and navLinks
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                // FIX: Removed the extra space before [href*=] so it correctly selects the element
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

// Toggle menu when clicking the burger icon
menuIcon.onclick = (e) => {
    e.stopPropagation(); // Prevents the document click listener from triggering immediately
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

// NEW: Close the menu when tapping outside of it
document.addEventListener('click', (e) => {
    // Check if the click happened outside both the menu icon and the navbar
    if (!menuIcon.contains(e.target) && !navbar.contains(e.target)) {
        menuIcon.classList.remove('fa-x');
        navbar.classList.remove('active');
    }
});
