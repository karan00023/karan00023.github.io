// Shows initials when a photo is missing or fails to load, so the page never shows a broken image.
for (const img of document.querySelectorAll('img[data-fallback]')) {
  const fallback = () => {
    const box = document.createElement('div');
    box.className = 'photo-fallback';
    box.setAttribute('role', 'img');
    box.setAttribute('aria-label', img.alt);
    box.textContent = img.dataset.fallback;
    img.replaceWith(box);
  };
  if (img.complete && img.naturalWidth === 0) fallback();
  else img.addEventListener('error', fallback, {once: true});
}
document.getElementById('year').textContent = new Date().getFullYear();
