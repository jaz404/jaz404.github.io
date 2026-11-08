// Optional videos and animation are shown only when the media files are present.
// This keeps the page complete when only still photographs are available.
(() => {
  // Use poster-derived previews until the original media files are copied into assets.
  document.querySelectorAll('img[data-fallback]').forEach((img) => {
    img.addEventListener('error', () => {
      if (img.dataset.fallback && img.src !== img.dataset.fallback) {
        const fallback = img.dataset.fallback;
        img.removeAttribute('data-fallback');
        img.src = fallback;
      }
    });
  });
  async function fileExists(url) {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch (_) {
      return false;
    }
  }

  document.querySelectorAll('[data-upgrade-video]').forEach(async (figure) => {
    const src = figure.getAttribute('data-video-src');
    if (!src || !(await fileExists(src))) return;
    const stage = figure.querySelector('.media-stage');
    const still = stage && stage.querySelector('img');
    if (!still) return;
    const video = document.createElement('video');
    video.src = src;
    video.poster = still.currentSrc || still.src;
    video.controls = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.setAttribute('aria-label', 'TSHOR demonstration recording');
    stage.replaceChildren(video);
    // Keep the authored research caption unchanged.
  });

  if ('IntersectionObserver' in window) {
    const links = Array.from(document.querySelectorAll('.side-index nav a'));
    const sections = links.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => {
          const active = a.getAttribute('href') === '#' + entry.target.id;
          a.classList.toggle('active', active);
          if (active) a.setAttribute('aria-current', 'location');
          else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-12% 0px -67% 0px' });
    sections.forEach((section) => observer.observe(section));
  }
})();
