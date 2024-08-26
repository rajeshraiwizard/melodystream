// Form Validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const feedback = document.getElementById('formFeedback');

    if (name === '' || email === '' || message === '') {
        feedback.textContent = 'All fields are required!';
        feedback.style.color = 'red';
        return false;
    }

    feedback.textContent = 'Form submitted successfully!';
    feedback.style.color = 'green';
    return false; // Prevent actual submission for demonstration
}

// Gallery Modal
function showImage(src) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImage.src = src;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
