document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Hide the form and show the thank-you message
    document.getElementById('appointmentForm').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';

    // Hide the footer
    document.getElementById('footer').classList.add('hidden');
});


// Thirumalai Balasubramani