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

// Click-to-play product thumbnail videos (SEO-friendly: poster shown until clicked)
// Opens fullscreen (16:9) so long demo videos aren't cramped inside the page layout.
document.querySelectorAll('.video-thumb').forEach(thumb => {
  const btn = thumb.querySelector('.play-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const media = thumb.querySelector('.thumb-media');
    const video = document.createElement('video');
    video.src = thumb.dataset.video;
    video.poster = thumb.dataset.poster;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    media.innerHTML = '';
    media.appendChild(video);
    video.play().catch(() => {});

    // Must call synchronously in the click handler, or browsers drop the
    // "user gesture" and silently block the fullscreen request.
    const req = video.requestFullscreen || video.webkitRequestFullscreen || video.webkitEnterFullscreen;
    if (req) {
      const result = req.call(video);
      if (result && result.catch) result.catch(() => {});
    }
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
