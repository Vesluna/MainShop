// This file contains JavaScript for the GitHub Pages landing page
document.addEventListener('DOMContentLoaded', function() {
  console.log('KarmaTsukino Shop - Redirecting to main application...');
  
  // Automatically redirect to the main application
  setTimeout(function() {
    window.location.href = '../client/public/index.html';
  }, 2000); // Redirect after 2 seconds if meta refresh doesn't work
});