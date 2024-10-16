document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === '' || password === '') {
        displayMessage('Please fill in both fields.', 'error');
        return;
    }

    if (email === 'lauraemmanuel@gmail.com' && password === 'qwerty*24') {
        displayMessage('Login successful! Redirecting to dashboard...', 'success');
        
        setTimeout(() => {
            window.location.href = 'adminindex.html';
        }, 2000);
    } else {
        displayMessage('Invalid email or password. Please try again.', 'error');
    }
});

function displayMessage(message, type) {
    const messageDiv = document.getElementById('login-message');
    messageDiv.textContent = message;
    messageDiv.className = type; 
    messageDiv.style.marginTop = '20px';
}
const style = document.createElement('style');
style.innerHTML = `
    #login-message {
        font-size: 16px;
        padding: 10px;
        border-radius: 5px;
        text-align: center;
        width: 100%;
    }
    .success {
        background-color: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
    }
    .error {
        background-color: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
    }
`;
document.head.appendChild(style);
/*Harish Kumar*/