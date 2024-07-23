document.addEventListener('DOMContentLoaded', function () {
  const cookieStatus = document.getElementById('cookieStatus');

  // Function to update cookie status
  function updateCookieStatus() {
    fetch('/check-cookie')
      .then((response) => response.text())
      .then((status) => {
        cookieStatus.textContent = status;
      });
  }

  // Event listener for login
  document.getElementById('loginBtn').addEventListener('click', () => {
    fetch('/login', { method: 'POST' }).then(() => {
      alert('Logged in');
      updateCookieStatus();
    });
  });

  // Event listener for logout
  document.getElementById('logoutBtn').addEventListener('click', () => {
    fetch('/logout', { method: 'POST' }).then(() => {
      alert('Logged out');
      updateCookieStatus();
    });
  });

  // Initial cookie status check
  updateCookieStatus();
});
