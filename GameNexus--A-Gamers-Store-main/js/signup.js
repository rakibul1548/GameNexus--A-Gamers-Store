document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    // You can replace this with your real backend API call
    console.log('Signup successful:', { username, email, password });
    alert('Signup successful! You can now login.');
    window.location.href = 'login.html';
  });
  