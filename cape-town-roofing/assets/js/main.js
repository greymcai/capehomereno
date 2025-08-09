document.addEventListener('DOMContentLoaded', () => {
  const imgs = document.querySelectorAll('img[loading="lazy"][data-src]');
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ const img=e.target; img.src=img.dataset.src; io.unobserve(img); }
    });
  }) : null;
  imgs.forEach(img => io ? io.observe(img) : (img.src = img.dataset.src));
});
document.querySelectorAll('[data-track="call"]').forEach(el=>{
  el.addEventListener('click',()=>console.log('Call click', el.href));
});
