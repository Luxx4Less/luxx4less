// Product modal functionality
document.querySelectorAll('.open-product').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    const customUrl = card.dataset.url;

    if (customUrl) {
      window.open(customUrl, '_blank');
      return;
    }

    const name = card.dataset.name;
    const price = card.dataset.price;
    const desc = card.dataset.desc;

    document.getElementById('modalName').textContent = name;
    document.getElementById('modalPrice').textContent = price;
    document.getElementById('modalDesc').textContent = desc;
    document.getElementById('productModal').hidden = false;
  });
});

// Close modal
document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('productModal').hidden = true;
});

// Close modal when clicking outside
document.getElementById('productModal').addEventListener('click', (e) => {
  if (e.target.id === 'productModal') {
    document.getElementById('productModal').hidden = true;
  }
});

// Close modal on Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('productModal');
    if (!modal.hidden) {
      modal.hidden = true;
    }
  }
});

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', (e) => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMsg = document.getElementById('formMsg');

  if (!name || !email || !message) {
    e.preventDefault();
    formMsg.textContent = 'Please fill in all fields before sending your message.';
    formMsg.style.color = '#ff6b6b';
    return;
  }

  formMsg.textContent = 'Sending your concern to support now...';
  formMsg.style.color = '#d4af37';
});

