// Login form validation and redirect
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Basic validation
    if (email && password) {
        // Simulate login success
        alert('Login successful! Redirecting to Netflix...');
        window.location.href = 'index.html';
    } else {
        alert('Please enter both email and password.');
    }
});
