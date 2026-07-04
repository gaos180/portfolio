/* =====================================================
   main.js — interacciones del portafolio
   ===================================================== */

// ---------- Preloader (hélice de ADN) ----------
window.addEventListener('load', function () {
    const pre = document.getElementById('preloader');
    if (!pre) return;
    setTimeout(function () {
        pre.style.opacity = '0';
        setTimeout(() => { pre.style.display = 'none'; }, 800);
    }, 1600);
});

// ---------- Efecto de tipeo en el rol ----------
(function typewriter() {
    const el = document.getElementById('typed');
    if (!el) return;
    const words = [
        'Estudiante de Bioinformática',
        'Analista de datos biológicos',
        'Desarrollador Python & Django',
        'Explorador de IA en genómica'
    ];
    let w = 0, c = 0, deleting = false;

    function tick() {
        const word = words[w];
        el.textContent = word.slice(0, c);
        if (!deleting) {
            if (c < word.length) { c++; setTimeout(tick, 55); }
            else { deleting = true; setTimeout(tick, 1600); }
        } else {
            if (c > 0) { c--; setTimeout(tick, 28); }
            else { deleting = false; w = (w + 1) % words.length; setTimeout(tick, 300); }
        }
    }
    tick();
})();

// ---------- Reveal al hacer scroll ----------
(function reveal() {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        items.forEach(i => i.classList.add('visible'));
        return;
    }
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });
    items.forEach(i => obs.observe(i));
})();

// ---------- Cerrar menú móvil al hacer clic en un enlace ----------
document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
        document.getElementById('navLinks')?.classList.remove('open');
    });
});
