// Animação simples ao rolar a página
const elements = document.querySelectorAll('.info-section, .info-section2, .processo, .hemocentro, .hero');

function showOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.classList.add('show');
        } else {
            el.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', showOnScroll);
showOnScroll(); // Para que já apareça os primeiros elementos
