setTimeout(() => {
    document.querySelector('.loader').style.display = 'none';
    const welcomeSection = document.querySelector('.welcome-section');
    welcomeSection.style.display = 'block';
    setTimeout(() => {
        welcomeSection.style.opacity = '1';
        welcomeSection.style.transform = 'translateY(-50px)';
    }, 100);
}, 3000); // 3 seconds delay