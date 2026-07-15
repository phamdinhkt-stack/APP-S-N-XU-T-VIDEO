// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Reveal QR payment panel on "Mua Ngay" click
document.querySelectorAll('.buy-toggle').forEach(btn => {
  const originalLabel = btn.textContent;
  btn.addEventListener('click', () => {
    const reveal = btn.parentElement.querySelector('.qr-reveal');
    if (!reveal) return;
    const willOpen = !reveal.classList.contains('open');
    reveal.classList.toggle('open', willOpen);
    btn.textContent = willOpen ? 'Ẩn mã QR' : originalLabel;
    if (willOpen) {
      setTimeout(() => reveal.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 200);
    }
  });
});
