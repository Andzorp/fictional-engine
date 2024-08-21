document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        let isValid = true;

        // Clear previous errors
        document.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');

        // Validate Name
        const nameInput = document.getElementById('name');
        const nameValue = nameInput.value.trim();
        if (nameValue === '' || nameValue.length < 2 || nameValue.length > 50 || !/^[a-zA-Z\s]+$/.test(nameValue)) {
            document.getElementById('name-error').textContent = 'Please enter a valid name (2-50 characters, alphabetic only).';
            isValid = false;
        }

        // Validate Email
        const emailInput = document.getElementById('email');
        if (!emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            document.getElementById('email-error').textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        // Validate Message
        const messageInput = document.getElementById('message');
        if (messageInput.value.trim() === '' || messageInput.value.length < 10 || messageInput.value.length > 500) {
            document.getElementById('message-error').textContent = 'Please enter a message (10-500 characters).';
            isValid = false;
        }

        // Prevent form submission if invalid
        if (!isValid) {
            event.preventDefault();
        }
    });
});
