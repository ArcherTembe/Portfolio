const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
// FIX: Changed querySelector to querySelectorAll so .forEach() works on sections and navLinks
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

const translations = {
    en: {
        'nav.home': 'Home', 'nav.services': 'Services', 'nav.projects': 'Projects', 'nav.education': 'Education', 'nav.contact': 'Contact',
        'hero.greeting': "Hi, It's <span>Árcher</span>", 'hero.rolePrefix': "I'm a", 'hero.hire': 'HIRE',
        'hero.description': "I'm a 17-year-old technology enthusiast with intermediate skills in Microsoft Office Suite, graphic design, and frontend web development. I am currently expanding my skills in backend and mobile development. Fluent in English and Portuguese.",
        'sections.services': 'Services', 'sections.projects': 'Projects', 'sections.education': 'Education', 'sections.contact': 'Contact <span>Me</span>',
        'common.learnMore': 'Learn more', 'common.comingSoon': 'Coming Soon', 'common.unavailable': 'This is currently not available.', 'common.moreInfo': 'For more information, please use the contact form.', 'common.close': 'Close',
        'services.fullStack.title': 'Full-Stack Development', 'services.fullStack.text': 'Building clean, responsive web experiences with HTML, CSS and JavaScript. Currently expanding into full-stack development with the PERN stack (PostgreSQL, Express, React, Node.js) along Python. My future goal is learning React Native with TypeScript for cross-platform mobile applications.',
        'services.office.title': 'Office Suite', 'services.office.text': 'Intermediate proficiency in Microsoft Excel, Access, and Word. Experienced in managing data, and producing professional documents.',
        'services.design.title': 'Graphic Design', 'services.design.text': 'Creating visual identities and marketing materials using CorelDRAW and Canva. Skilled in designing flyers, shirt graphics, and promotional assets with a focus on clean, creative, and effective designs.',
        'services.marketing.title': 'Digital Marketing',
        'projects.design.title': 'Graphic Design', 'projects.design.text': 'Designed 50+ custom shirt graphics for my own brand and clients, including school senior year shirts. Created event flyers and promotional materials focused on clean, engaging, and professional designs.',
        'projects.fullStack.title': 'Full-Stack Development', 'projects.fullStack.text': 'Built 10+ web projects using HTML, CSS, JavaScript, and Python. Collaborated with a friend to develop a website and participated in a hackathon, applying problem-solving and development skills in real-world scenarios.',
        'projects.office.title': 'Office Suite', 'projects.office.text': 'Applied advanced Excel, Access, and Word skills to solve real-world problems, including creating and improving spreadsheets, managing databases, and supporting school documentation. Completed 100+ Excel and database exercises, assisted students with projects, and developed high-quality university application essays, creative writing pieces, and professional documents.',
        'education.maria': 'Ranked Top 1 student in the school consistently every academic year.', 'education.birlik': 'Cambridge Checkpoint Grade 9: Ranked Top 2 student overall and achieved Top 1 in Mathematics.', 'education.trichardt': 'Completed ISC Certificate.<br>Ranked Top 1 in both Computer Applications Technology (CAT) and Accounting.<br>Elected prefect for the academic year of 2024-2025.',
        'form.name': 'Full Name', 'form.email': 'Email Address', 'form.phone': 'Phone Number', 'form.message': 'Your Message', 'form.send': 'Send Message',
        'footer.about': 'About me', 'footer.privacy': 'Privacy Policy', 'footer.copyright': '© Árcher Tembe | All Rights Reserved'
    },
    pt: {
        'nav.home': 'Início', 'nav.services': 'Serviços', 'nav.projects': 'Projetos', 'nav.education': 'Educação', 'nav.contact': 'Contacto',
        'hero.greeting': 'Olá, sou <span>Árcher</span>', 'hero.rolePrefix': 'Sou', 'hero.hire': 'CONTRATAR',
        'hero.description': 'Sou um entusiasta de tecnologia de 17 anos, com conhecimentos intermédios em Microsoft Office, design gráfico e desenvolvimento web frontend. Estou a desenvolver competências em backend e desenvolvimento mobile. Sou fluente em inglês e português.',
        'sections.services': 'Serviços', 'sections.projects': 'Projetos', 'sections.education': 'Educação', 'sections.contact': 'Contacte <span>me</span>',
        'common.learnMore': 'Saiba mais', 'common.comingSoon': 'Em breve', 'common.unavailable': 'De momento, isto não está disponível.', 'common.moreInfo': 'Para mais informações, utilize o formulário de contacto.', 'common.close': 'Fechar',
        'services.fullStack.title': 'Desenvolvimento Full-Stack', 'services.fullStack.text': 'Criação de experiências web limpas e responsivas com HTML, CSS e JavaScript. Atualmente estou a aprofundar o desenvolvimento full-stack com a stack PERN (PostgreSQL, Express, React, Node.js) e Python. O meu objetivo é aprender React Native com TypeScript para aplicações mobile multiplataforma.',
        'services.office.title': 'Pacote Office', 'services.office.text': 'Conhecimentos intermédios em Microsoft Excel, Access e Word. Experiência em gestão de dados e produção de documentos profissionais.',
        'services.design.title': 'Design Gráfico', 'services.design.text': 'Criação de identidades visuais e materiais de marketing com CorelDRAW e Canva. Competências na criação de flyers, estampas e materiais promocionais limpos, criativos e eficazes.',
        'services.marketing.title': 'Marketing Digital',
        'projects.design.title': 'Design Gráfico', 'projects.design.text': 'Criei mais de 50 estampas personalizadas para a minha marca e clientes, incluindo camisolas de finalistas. Também criei flyers de eventos e materiais promocionais profissionais.',
        'projects.fullStack.title': 'Desenvolvimento Full-Stack', 'projects.fullStack.text': 'Criei mais de 10 projetos web com HTML, CSS, JavaScript e Python. Colaborei com um amigo num website e participei num hackathon, aplicando competências de resolução de problemas em cenários reais.',
        'projects.office.title': 'Pacote Office', 'projects.office.text': 'Apliquei competências avançadas de Excel, Access e Word em problemas reais, criando folhas de cálculo, gerindo bases de dados e apoiando documentação escolar. Completei mais de 100 exercícios e ajudei estudantes nos seus projetos e documentos profissionais.',
        'education.maria': 'Classificado consistentemente como o aluno número 1 da escola em todos os anos letivos.', 'education.birlik': 'Cambridge Checkpoint do 9.º ano: classificado em 2.º lugar geral e em 1.º lugar em Matemática.', 'education.trichardt': 'Concluí o certificado ISC.<br>Classificado em 1.º lugar em Tecnologia de Aplicações Informáticas (CAT) e Contabilidade.<br>Eleito delegado no ano letivo de 2024-2025.',
        'form.name': 'Nome completo', 'form.email': 'Endereço de email', 'form.phone': 'Número de telefone', 'form.message': 'A sua mensagem', 'form.send': 'Enviar mensagem',
        'footer.about': 'Sobre mim', 'footer.privacy': 'Política de privacidade', 'footer.copyright': '© Árcher Tembe | Todos os direitos reservados'
    }
};

const languageButtons = document.querySelectorAll('.language-button');
const setLanguage = (language) => {
    const selectedLanguage = translations[language] ? language : 'en';
    document.body.dataset.language = selectedLanguage;
    document.documentElement.lang = selectedLanguage;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        element.innerHTML = translations[selectedLanguage][element.dataset.i18n];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        element.placeholder = translations[selectedLanguage][element.dataset.i18nPlaceholder];
    });
    document.querySelectorAll('[data-i18n-value]').forEach(element => {
        element.value = translations[selectedLanguage][element.dataset.i18nValue];
    });
    const popupMessage = document.querySelector('.social-popup-message');
    const popupCloseButton = document.querySelector('.social-popup-link');
    if (popupMessage) popupMessage.textContent = translations[selectedLanguage]['common.unavailable'];
    if (popupCloseButton) popupCloseButton.textContent = translations[selectedLanguage]['common.close'];
    languageButtons.forEach(button => {
        const isActive = button.dataset.language === selectedLanguage;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });
    localStorage.setItem('portfolio-language', selectedLanguage);
};

languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
setLanguage(localStorage.getItem('portfolio-language') || 'en');

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
menuIcon.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents the document click listener from triggering immediately
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
    menuIcon.setAttribute('aria-expanded', String(navbar.classList.contains('active')));
});

menuIcon.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        menuIcon.click();
    }
});

navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('fa-x');
        navbar.classList.remove('active');
        menuIcon.setAttribute('aria-expanded', 'false');
    });
});

// NEW: Close the menu when tapping outside of it
document.addEventListener('click', (e) => {
    // Check if the click happened outside both the menu icon and the navbar
    if (!menuIcon.contains(e.target) && !navbar.contains(e.target)) {
        menuIcon.classList.remove('fa-x');
        navbar.classList.remove('active');
        menuIcon.setAttribute('aria-expanded', 'false');
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
        message: 'common.unavailable',
        url: 'https://www.linkedin.com/'
    },
    instagram: {
        title: 'Instagram',
        message: 'common.unavailable',
        url: 'https://www.instagram.com/'
    },
    comingSoon: {
        title: 'Digital Marketing',
        message: 'common.moreInfo'
    }
};

socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = link.dataset.popup;
        const content = popupContent[platform];
        if (!content) return;

        socialPopupTitle.textContent = content.title;
        socialPopupMessage.textContent = translations[document.body.dataset.language][content.message];
        socialPopupLink.textContent = translations[document.body.dataset.language]['common.close'];
        socialPopupOverlay.classList.add('active');
        socialPopupOverlay.setAttribute('aria-hidden', 'false');
    });
});

socialPopupLink.addEventListener('click', () => {
    socialPopupOverlay.classList.remove('active');
    socialPopupOverlay.setAttribute('aria-hidden', 'true');
});

socialPopupOverlay.addEventListener('click', (e) => {
    if (e.target === socialPopupOverlay) {
        socialPopupOverlay.classList.remove('active');
        socialPopupOverlay.setAttribute('aria-hidden', 'true');
    }
});
