// ---- Scroll Reveal (fixed) ----
function revealAll() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    // If IntersectionObserver not supported, show everything
    if (!('IntersectionObserver' in window)) {
        reveals.forEach(el => el.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Stagger delay based on siblings
                const siblings = entry.target.parentElement.querySelectorAll('.reveal, .reveal-left, .reveal-right');
                let idx = 0;
                siblings.forEach((s, i) => { if (s === entry.target) idx = i; });
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, idx * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0, rootMargin: '0px 0px -30px 0px' });

    reveals.forEach(el => observer.observe(el));
}

// Run immediately on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', revealAll);
} else {
    revealAll();
}

// ---- Counter Animation ----
const counters = document.querySelectorAll('.stat-number');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = +entry.target.getAttribute('data-target');
            let count = 0;
            const step = Math.ceil(target / 60);
            const interval = setInterval(() => {
                count += step;
                if (count >= target) { count = target; clearInterval(interval); }
                entry.target.textContent = count;
            }, 25);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });
counters.forEach(c => counterObserver.observe(c));