/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

console.log('Initializing navbar...');
console.log('navMenu found:', navMenu ? 'Yes' : 'No');
console.log('navToggle found:', navToggle ? 'Yes' : 'No');
console.log('navClose found:', navClose ? 'Yes' : 'No');

if (navMenu) navMenu.classList.remove('show-menu');

if (navToggle) {
  navToggle.addEventListener('click', (e) => {
    e.preventDefault(); 
    console.log('Hamburger clicked! Adding show-menu');
    navMenu.classList.add('show-menu');
  });
} else {
  console.error('navToggle not found! Check HTML ID.');
}

if (navClose) {
  navClose.addEventListener('click', (e) => {
    e.preventDefault(); 
    console.log('Close button clicked! Removing show-menu');
    navMenu.classList.remove('show-menu');
  });
} else {
  console.error('navClose not found! Check HTML ID.');
}

const navLink = document.querySelectorAll('.nav__link');
console.log('Nav links found:', navLink.length);
function linkAction() {
  console.log('Link clicked, closing menu');
  navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


document.addEventListener('DOMContentLoaded', function() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
    console.log('AOS initialized!');
  } else {
    console.error('AOS not loaded!');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.dataset.tab;

      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      tabPanels.forEach(panel => panel.classList.remove('active'));
      document.getElementById(targetTab).classList.add('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const datetimeDisplayElement = document.getElementById('currentDateTime');
  if (datetimeDisplayElement) {
    const currentDateTime = new Date();
    const options = { year: 'numeric', month: 'long' };
    const formattedDateTime = currentDateTime.toLocaleDateString('en-US', options);
    datetimeDisplayElement.textContent = formattedDateTime;
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const datetimeDisplayElement = document.getElementById('currentDateTime2');
  if (datetimeDisplayElement) {
    const currentDateTime = new Date();
    const options = { year: 'numeric', month: 'long' };
    const formattedDateTime = currentDateTime.toLocaleDateString('en-US', options);
    datetimeDisplayElement.textContent = formattedDateTime;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const footerLinks = document.querySelectorAll('.footer-link');

  footerLinks.forEach(link => {
    link.addEventListener('click', () => {
      footerLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
});

window.addEventListener('resize', () => {
  console.log('Resizing... width:', window.innerWidth);

  const navMenu = document.getElementById('nav-menu');
  console.log('navMenu exist?', !!navMenu);

  if (navMenu && window.innerWidth > 768) {
    console.log('Removing show-menu karena desktop mode');
    navMenu.classList.remove('show-menu');
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');

  if (!navMenu || !navToggle || !navClose) return;

  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });

  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });

  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1150) {
      navMenu.classList.remove('show-menu');
    }
  });
});

const backToTopBtn = document.getElementById('back-to-top-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show-btn');
    } else {
        backToTopBtn.classList.remove('show-btn');
    }
});

backToTopBtn.addEventListener('click', (event) => {
    event.preventDefault(); 
    window.scrollTo({
        top: 0, 
        behavior: 'smooth' 
    });
});


