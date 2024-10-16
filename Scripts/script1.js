document.getElementById('enquiryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Hide the form and show the thank-you message
    document.getElementById('enquiryForm').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';

    // Hide the footer
    document.getElementById('footer').classList.add('hidden');
});


// Thirumalai Balasubramani
