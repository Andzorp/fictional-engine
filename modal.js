document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('product-modal');
    const closeBtn = document.querySelector('.modal .close');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');

    // Add event listener to Quick View buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.closest('.product-card');
            const productId = event.target.getAttribute('data-product');
            const imageSrc = productCard.getAttribute('data-image');
            const title = productCard.querySelector('h3').textContent;
            const description = productCard.querySelector('p').textContent;
            
            showModal(title, imageSrc, description);
        });
    });

    // Function to show modal with product details
    function showModal(title, imageSrc, description) {
        modalTitle.textContent = title;
        modalImage.src = imageSrc;
        modalImage.alt = title;
        modalDescription.textContent = description;
        modal.style.display = 'block';
    }

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
