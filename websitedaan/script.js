// Theme toggle
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
    document.querySelector('.theme-toggle').textContent = '☀️';
}

function toggleTheme() {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    document.querySelector('.theme-toggle').textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

// Newsletter subscribe message
const params = new URLSearchParams(window.location.search);
const status = params.get('subscribed');
const messageBox = document.getElementById('subscribe-message');

if (status === 'success' && messageBox) {
    messageBox.textContent = 'Bedankt voor je inschrijving!';
    messageBox.classList.add('show', 'success');
} else if (status === 'error' && messageBox) {
    messageBox.textContent = 'Ongeldig e-mailadres, probeer het opnieuw.';
    messageBox.classList.add('show', 'error');
}

// Product modal (producten.html only)
function openModal(product) {
    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('modal-specs').textContent = product.specs;
    document.getElementById('modal-price').textContent = product.price;
    document.getElementById('product-modal').classList.add('active');
}
function closeModal() {
    document.getElementById('product-modal').classList.remove('active');
}

// Category filter (producten.html only)
function filterCategory(category, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('[data-category]').forEach(el => {
        if (category === 'all' || el.dataset.category === category) {
            el.style.display = '';
        } else {
            el.style.display = 'none';
        }
    });
}