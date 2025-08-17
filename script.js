document.addEventListener('DOMContentLoaded', () => {
  // Add-to-cart buttons (store and services)
  const cartButtons = document.querySelectorAll('button[data-action="add-to-cart"]');
  cartButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Producto añadido al carrito.');
    });
  });

  // Contact form submission
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Gracias por tu mensaje. Pronto nos pondremos en contacto contigo.');
      contactForm.reset();
    });
  }
});