// ---------------- TEXTO DIGITANDO ----------------
const linhas = document.querySelectorAll('.linha1, .linha2, .linha3');

const animarTexto = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('digitando');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(animarTexto, { threshold: 0.5 });
linhas.forEach(linha => observer.observe(linha));

// ---------------- CARROSSEL DE CARDS ----------------
function carrosselCard(wrapperSelector, intervalo = 3000) {
    const wrapper = document.querySelector(wrapperSelector);
    if (!wrapper) return;

    const cards = Array.from(wrapper.children);
    let index = 0;

    function mostrarCard(i) {
        const gap = parseInt(getComputedStyle(cards[0]).marginRight) || 20;
        const cardWidth = cards[0].offsetWidth + gap;
        wrapper.style.transform = `translateX(-${i * cardWidth}px)`;
        wrapper.style.transition = "transform 0.5s ease-in-out";
    }

    // Inicia mostrando o primeiro card
    mostrarCard(index);

    setInterval(() => {
        index++;
        if (index >= cards.length) index = 0;
        mostrarCard(index);
    }, intervalo);
}

// ---------------- INICIA TODOS OS CARROSSEIS ----------------

carrosselCard(".carousel-depoimentos .cards", 3500);
