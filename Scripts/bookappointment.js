// Handle form submission
document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting in the traditional way

    // Get values from the form
    const therapist = document.getElementById('therapist').value;
    const location = document.getElementById('location').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Basic validation (ensure all fields are filled)
    if (therapist === '' || location === '' || date === '' || time === '') {
        displayMessage('Please fill in all fields.', 'error');
        return;
    }

    // Display confirmation message
    displayMessage(`Appointment booked with ${therapist} at ${location} on ${date} at ${time}.`, 'success');
});

// Function to display confirmation or error messages
function displayMessage(message, type) {
    const messageDiv = document.getElementById('confirmation-message');
    messageDiv.textContent = message;
    messageDiv.className = type; // Adds either 'success' or 'error' class for styling
}
