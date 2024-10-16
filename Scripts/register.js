document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('success-message').style.display = 'block';
});
/*Harish Kumar*/