document.addEventListener('DOMContentLoaded', function() {

    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }

    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle'),
          navClose = document.getElementById('nav-close'),
          navLinks = document.querySelectorAll('.nav__link');

    const showMenu = () => navMenu.classList.add('show-menu');
    const hideMenu = () => navMenu.classList.remove('show-menu');

    if (navToggle) navToggle.addEventListener('click', showMenu);
    if (navClose) navClose.addEventListener('click', hideMenu);
    
    navLinks.forEach(link => link.addEventListener('click', hideMenu));

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1150) {
            hideMenu();
        }
    });

    const backToTopBtn = document.getElementById('back-to-top-btn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show-btn');
        } else {
            backToTopBtn.classList.remove('show-btn');
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;

            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            btn.classList.add('active');
            const targetPanel = document.getElementById(targetTab);
            if(targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    const updateDateTime = () => {
        const now = new Date();
        const options = { year: 'numeric', month: 'long' };
        const formattedDate = now.toLocaleDateString('en-US', options);
        
        const dateTimeSpans = document.querySelectorAll('[id^="currentDateTime"]');
        dateTimeSpans.forEach(span => {
            span.textContent = formattedDate;
        });
    };
    updateDateTime();

    const videoWrappers = document.querySelectorAll('.video-wrapper');

    videoWrappers.forEach(wrapper => {
        const video = wrapper.querySelector('.project-video');
        const overlay = wrapper.querySelector('.video-overlay');
        const playButton = wrapper.querySelector('.play-button');
        const fullscreenButton = wrapper.querySelector('.fullscreen-button');

        if (!video || !overlay || !playButton || !fullscreenButton) {
            console.error('Salah satu elemen video tidak ditemukan:', { video, overlay, playButton, fullscreenButton });
            return; 
        }

        const togglePlay = () => {
            if (video.paused) {
                video.play().catch(err => {
                    console.error('Gagal memutar video:', err);
                });
            } else {
                video.pause();
            }
        };

      const toggleFullscreen = (event) => {
          if (event) event.stopPropagation();

          const fsDoc = document;
          const fsElem = video;

          if (!fsDoc.fullscreenElement && !fsDoc.webkitFullscreenElement && !fsDoc.msFullscreenElement) {
              if (fsElem.requestFullscreen) {
                  fsElem.requestFullscreen();
              } else if (fsElem.webkitRequestFullscreen) { 
                  fsElem.webkitRequestFullscreen();
              } else if (fsElem.msRequestFullscreen) { 
                  fsElem.msRequestFullscreen();
              } else {
                  console.error('Fullscreen API tidak didukung browser ini.');
              }
          } else {
              
              if (fsDoc.exitFullscreen) {
                  fsDoc.exitFullscreen();
              } else if (fsDoc.webkitExitFullscreen) { 
                  fsDoc.webkitExitFullscreen();
              } else if (fsDoc.msExitFullscreen) { 
                  fsDoc.msExitFullscreen();
              }
          }
      };

        playButton.addEventListener('click', togglePlay);
        fullscreenButton.addEventListener('click', toggleFullscreen);

        video.addEventListener('play', () => wrapper.classList.add('playing'));
        video.addEventListener('pause', () => wrapper.classList.remove('playing'));
        video.addEventListener('ended', () => wrapper.classList.remove('playing'));
    });

}); 