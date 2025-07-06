const hamburger = document.getElementById('hamburger');
const navButtons = document.getElementById('navButtons');

hamburger.addEventListener('click', () => {
    navButtons.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('themeToggle');

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');

        if (document.body.classList.contains('light-mode')) {
            toggleBtn.textContent = '🌞';
        } else {
            toggleBtn.textContent = '🌙';
        }

        localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        toggleBtn.textContent = '🌞';
    }
});

const bgImages = [
    "assets/images/bg.jpg",
    "assets/images/bg1.jpg",
    "assets/images/bg3.jpg"
];

let bgIndex = 0;
const fadeLayer = document.querySelector('.bg-fade-layer');

function fadeToNextBackground() {
    fadeLayer.style.backgroundImage = `url('${bgImages[bgIndex]}')`;
    fadeLayer.style.opacity = 1;

    setTimeout(() => {
        document.querySelector('.main').style.backgroundImage = `url('${bgImages[bgIndex]}')`;
        fadeLayer.style.opacity = 0;
    }, 1000);

    bgIndex = (bgIndex + 1) % bgImages.length;
}

document.querySelector('.main').style.backgroundImage = `url('${bgImages[0]}')`;


setInterval(fadeToNextBackground, 4000);

const emailInput = document.getElementById('emailInput');
const getStartedBtn = document.getElementById('getStartedBtn');

getStartedBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email === "") {
        alert("Please enter your email address.");
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.")
    } else {
        alert(`Thank you! We will proceed with: ${email}`);
    }

    if (email === "" || !emailPattern.test(email)) {
    emailInput.style.borderColor = "red";
    } else {
    emailInput.style.borderColor = "green";
    }
})

