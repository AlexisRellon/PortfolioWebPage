document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-button');
    const feedbackForm = document.querySelector('.form');
    const messageContainer = document.getElementById('texts');

    submitButton.addEventListener('click', submit);

    function submit() {

        feedbackForm.style.display = 'none';

        const message = document.createElement('p');
        message.className = "message";
        message.textContent = 'Thank you for submitting your feedback.';

        messageContainer.appendChild(message);

        console.log('Hidden');
    }
});
