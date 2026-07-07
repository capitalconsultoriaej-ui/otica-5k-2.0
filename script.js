(function () {
  const hero = document.getElementById('hero');
  const scatter = document.getElementById('heroScatter');
  const lens = document.getElementById('lensCursor');

  if (!hero || !lens) return;

  const isFinePointer = window.matchMedia('(pointer: fine)').matches;

  if (isFinePointer) {
    const activate = (x, y) => {
      lens.style.left = x + 'px';
      lens.style.top = y + 'px';
      lens.classList.add('is-active');
    };
    const deactivate = () => lens.classList.remove('is-active');

    hero.addEventListener('mousemove', (e) => activate(e.clientX, e.clientY));
    hero.addEventListener('mouseleave', deactivate);
    if (scatter) {
      scatter.addEventListener('mousemove', (e) => activate(e.clientX, e.clientY));
    }
  } else {
    // Touch / coarse pointers: auto-drift the lens across the hero once,
    // so the "in focus" moment still reads without a cursor.
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      const rect = () => hero.getBoundingClientRect();
      let t = 0;
      const drift = () => {
        const r = rect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          t += 0.01;
          const x = r.left + r.width * (0.3 + 0.25 * Math.sin(t));
          const y = r.top + r.height * 0.55;
          lens.style.left = x + 'px';
          lens.style.top = y + 'px';
          lens.classList.add('is-active');
        }
        requestAnimationFrame(drift);
      };
      requestAnimationFrame(drift);
    }
  }

  // Smooth-scroll fallback for older browsers is handled by CSS `scroll-behavior`.
})();
