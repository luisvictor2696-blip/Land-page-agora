const number = '558233266762';
document.querySelectorAll('[data-wa]').forEach(link => {
  const message = link.dataset.message || 'Olá! Quero saber mais sobre os tratamentos da Odonto Smiles e agendar uma avaliação.';
  link.href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
const products = document.querySelector('.products');
const scrollCards = direction => products.scrollBy({left: direction * (products.querySelector('.product').offsetWidth + parseFloat(getComputedStyle(products).gap)), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
document.querySelector('#previous').addEventListener('click', () => scrollCards(-1));
document.querySelector('#next').addEventListener('click', () => scrollCards(1));
document.querySelector('#year').textContent = new Date().getFullYear();
const privacy = document.querySelector('#privacy-dialog');
document.querySelector('#open-privacy').addEventListener('click', () => privacy.showModal());
document.querySelector('#close-privacy').addEventListener('click', () => privacy.close());
privacy.addEventListener('click', event => {if(event.target === privacy) { const r=privacy.getBoundingClientRect(); if(event.clientX<r.left || event.clientX>r.right || event.clientY<r.top || event.clientY>r.bottom) privacy.close(); }});
