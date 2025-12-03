// Scroll animation
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('active'); }
    });
}, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));

// Hamburger menu
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
navToggle.addEventListener('click', () => { navLinks.classList.toggle('show'); });

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
document.querySelectorAll('.portfolio-item img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});
document.getElementById('close-lightbox').addEventListener('click', () => {
    lightbox.style.display = 'none';
});
lightbox.addEventListener('click', (e) => {
    if (e.target === lightboxImg) return;
    lightbox.style.display = 'none';
});

// Typing effect
const typedText = ["CV Writing", "Poster Design", "Assignment Formatting", "PDF Editing", "Front-End Web Development"];
let typedIndex = 0; let charIndex = 0; let typingElement = document.querySelector(".typed");
function type() { if (charIndex < typedText[typedIndex].length) { typingElement.textContent += typedText[typedIndex].charAt(charIndex); charIndex++; setTimeout(type, 150); } else { setTimeout(erase, 1500); } }
function erase() { if (charIndex > 0) { typingElement.textContent = typedText[typedIndex].substring(0, charIndex - 1); charIndex--; setTimeout(erase, 100); } else { typedIndex = (typedIndex + 1) % typedText.length; setTimeout(type, 500); } }
document.addEventListener("DOMContentLoaded", type);

// Service click to show samples dynamically
const serviceSamples = {
    "cv": [
        { img: "https://via.placeholder.com/400x250.png?text=CV+Sample+1", title: "CV Sample 1", desc: "Fresh graduate CV." },
        { img: "https://via.placeholder.com/400x250.png?text=CV+Sample+2", title: "CV Sample 2", desc: "Experienced professional CV." }
    ],
    "poster": [
        { img: "https://via.placeholder.com/400x250.png?text=Poster+1", title: "Poster Sample 1", desc: "Event poster design." },
        { img: "https://via.placeholder.com/400x250.png?text=Poster+2", title: "Poster Sample 2", desc: "Promotional poster design." }
    ],
    "assignment": [
        { img: "https://via.placeholder.com/400x250.png?text=Assignment+Sample", title: "Formatted Assignment", desc: "Academically formatted assignment." }
    ],
    "pdf": [
        { img: "https://via.placeholder.com/400x250.png?text=PDF+Edit", title: "PDF Edit", desc: "PDF content editing." }
    ],
    "web": [
        { img: "https://via.placeholder.com/400x250.png?text=Web+Project", title: "Web Project", desc: "Responsive website project." }
    ],
    "kra": [
        { img: "https://via.placeholder.com/400x250.png?text=KRA+Form", title: "KRA Sample", desc: "Sample tax form." }
    ],
    "helb": [
        { img: "https://via.placeholder.com/400x250.png?text=HELB+Form", title: "HELB Form", desc: "Student loan application." }
    ],
    "gov": [
        { img: "https://via.placeholder.com/400x250.png?text=Gov+Form", title: "Gov Form", desc: "Government application sample." }
    ]
};

document.querySelectorAll('.service').forEach(service => {
    service.addEventListener('click', () => {
        const name = service.getAttribute('data-service');
        const container = document.getElementById('service-samples-container');
        container.innerHTML = '';
        if (serviceSamples[name]) {
            serviceSamples[name].forEach(sample => {
                const div = document.createElement('div');
                div.classList.add('sample-item');
                div.innerHTML = `<img src="${sample.img}" alt="${sample.title}"><h4>${sample.title}</h4><p>${sample.desc}</p>`;
                div.addEventListener('click', () => {
                    lightbox.style.display = 'flex';
                    lightboxImg.src = sample.img;
                });
                container.appendChild(div);
            });
            container.scrollIntoView({ behavior: 'smooth' });
        }
    });
});