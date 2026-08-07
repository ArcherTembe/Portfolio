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

const socialPopupOverlay = document.querySelector('.social-popup-overlay');
const socialPopupTitle = document.querySelector('.social-popup-title');
const socialPopupMessage = document.querySelector('.social-popup-message');
const socialPopupLink = document.querySelector('.social-popup-link');
const socialLinks = document.querySelectorAll('.social-link[data-popup]');
const popupContent = {
    linkedin: {
        title: 'LinkedIn',
        message: 'This is currently not available.',
        url: 'https://www.linkedin.com/'
    },
    instagram: {
        title: 'Instagram',
        message: 'Follow me on Instagram to view design work, behind-the-scenes content, and creative updates.',
        url: 'https://www.instagram.com/'
    }
};

socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = link.dataset.popup;
        const content = popupContent[platform];
        if (!content) return;

        socialPopupTitle.textContent = content.title;
        socialPopupMessage.textContent = content.message;
        socialPopupLink.textContent = 'Close';
        socialPopupOverlay.classList.add('active');
    });
});

socialPopupLink.addEventListener('click', () => {
    socialPopupOverlay.classList.remove('active');
});

socialPopupOverlay.addEventListener('click', (e) => {
    if (e.target === socialPopupOverlay) {
        socialPopupOverlay.classList.remove('active');
    }
});
