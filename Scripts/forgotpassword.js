document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    document.getElementById('forgot-password-form').style.display = 'none';
    document.getElementById('reset-message').style.display = 'block';
});
/*Harish Kumar*/