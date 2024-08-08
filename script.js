document.addEventListener('DOMContentLoaded', () => {
    const quickView = document.getElementById('quick-view');
    const quickViewContent = document.querySelector('.quick-view-content');
    const closeView = document.querySelector('.close-view');

    document.querySelectorAll('.btn-primary').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const productItem = button.closest('.product-item');

            document.getElementById('quick-view-title').textContent = productItem.getAttribute('data-title');
            document.getElementById('quick-view-description').textContent = productItem.getAttribute('data-description');
            document.getElementById('quick-view-price').textContent = productItem.getAttribute('data-price');
            document.getElementById('quick-view-image').src = productItem.getAttribute('data-image');

            quickView.style.display = 'flex'; // Use flex to center the content
        });
    });

    closeView.addEventListener('click', () => {
        quickView.style.display = 'none';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === quickView) {
            quickView.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});

