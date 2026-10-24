// Scroll reveal (disabled automatically under prefers-reduced-motion via CSS)
const els = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  els.forEach((el) => io.observe(el));
} else {
  els.forEach((el) => el.classList.add('in'));
}

// Contact form: frontend only. Set data-endpoint on the form (e.g. a Formspree URL) to enable sending.
const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const status = document.querySelector('#form-status');
    const endpoint = form.dataset.endpoint;
    if (!endpoint) {
      const d = new FormData(form);
      const body = encodeURIComponent(`${d.get('message')}\n\n— ${d.get('name')}`);
      window.location.href = `mailto:Blackcleaver13@gmail.com?subject=${encodeURIComponent('Portfolio inquiry')}&body=${body}`;
      status.textContent = 'Opening your email app…';
      return;
    }
    try {
      const r = await fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      status.textContent = r.ok ? 'Thanks! Your message was sent.' : 'Something went wrong. Please email me directly.';
      if (r.ok) form.reset();
    } catch { status.textContent = 'Network error. Please email me directly.'; }
  });
}
