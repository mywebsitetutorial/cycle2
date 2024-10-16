const loginForm = document.getElementById('signInForm');
loginForm.addEventListener('submit', function(event){
    event.preventDefault();
    //perform input validation
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if(email && password){
        // Here you would typically check the email and password against a database or authentication service.
        // If successful, redirect to auditor.html:
        window.location.href = "auditorindex.html";
    }else{
        let errorMessage = document.createElement('div');
        errorMessage.id = 'errorMessage';
        errorMessage.textContent = "Invalid email or password";
        errorMessage.style.color = 'red';
        errorMessage.style.marginTop = '15px';
        errorMessage.style.fontSize = '20px';
        errorMessage.style.textAlign = 'center';
        document.getElementById('login-message').appendChild(errorMessage); // Append to the correct element
    }
});