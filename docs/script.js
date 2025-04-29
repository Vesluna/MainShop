// KarmaTsukino Shop JavaScript
document.addEventListener('DOMContentLoaded', function() {
  console.log('KarmaTsukino Shop - Loaded');
  
  // Music Player Setup
  const backgroundMusic = document.getElementById('backgroundMusic');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const trackSelector = document.getElementById('trackSelector');
  
  // Music tracks
  const musicTracks = {
    undertale: {
      name: 'Undertale - Shop Theme (Toni Leys Remix)',
      src: 'music/Undertale - Shop Theme (Toni Leys Remix).mp3'
    },
    wii: {
      name: 'Wii Shopping Channel Remix - Nicky Flowers',
      src: 'music/Wii Shopping Channel Remix - Nicky Flowers.mp3'
    }
  };
  
  // Initialize music
  let isPlaying = false;
  let currentTrack = 'undertale';
  
  // Set initial track
  backgroundMusic.src = musicTracks[currentTrack].src;
  
  // Handle play/pause
  playPauseBtn.addEventListener('click', function() {
    if (isPlaying) {
      backgroundMusic.pause();
      playPauseBtn.textContent = '▶️ Play';
    } else {
      // Handle autoplay issues
      const playPromise = backgroundMusic.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Playback started successfully
        }).catch(error => {
          console.error('Playback failed: ', error);
          alert('Music playback failed. This may be due to browser autoplay restrictions. Please try again by clicking the Play button.');
        });
      }
      
      playPauseBtn.textContent = '⏸️ Pause';
    }
    
    isPlaying = !isPlaying;
  });
  
  // Handle track selection
  trackSelector.addEventListener('change', function() {
    currentTrack = this.value;
    backgroundMusic.src = musicTracks[currentTrack].src;
    
    if (isPlaying) {
      backgroundMusic.play().catch(error => {
        console.error('Track change failed: ', error);
        isPlaying = false;
        playPauseBtn.textContent = '▶️ Play';
      });
    }
  });
  
  // Theme Toggle
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  
  themeToggle.addEventListener('click', function() {
    body.classList.toggle('light-theme');
    
    if (body.classList.contains('light-theme')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  });
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-theme');
  }
  
  // Category Filtering
  const categoryButtons = document.querySelectorAll('.category-btn');
  const productCards = document.querySelectorAll('.product-card');
  
  categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      const selectedCategory = this.getAttribute('data-category');
      
      // Filter products
      productCards.forEach(card => {
        if (selectedCategory === 'all' || card.getAttribute('data-category') === selectedCategory) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  
  // Terms of Service Modal
  const termsModal = document.getElementById('termsModal');
  const tosLink = document.getElementById('tosLink');
  const acceptTerms = document.getElementById('acceptTerms');
  const declineTerms = document.getElementById('declineTerms');
  
  // Show terms on first visit
  const hasAcceptedTerms = localStorage.getItem('termsAccepted');
  if (!hasAcceptedTerms) {
    termsModal.style.display = 'flex';
  }
  
  // Show terms when TOS link clicked
  tosLink.addEventListener('click', function(e) {
    e.preventDefault();
    termsModal.style.display = 'flex';
  });
  
  // Handle terms acceptance
  acceptTerms.addEventListener('click', function() {
    localStorage.setItem('termsAccepted', 'true');
    termsModal.style.display = 'none';
  });
  
  // Handle terms decline
  declineTerms.addEventListener('click', function() {
    alert('You must accept the Terms of Service to use this website.');
    // Optionally redirect to another page if terms are declined
  });
  
  // Simple Shopping Cart
  const buyButtons = document.querySelectorAll('.buy-btn');
  let cartItems = [];
  
  buyButtons.forEach(button => {
    button.addEventListener('click', function() {
      const card = this.closest('.product-card');
      const productName = card.querySelector('h4').textContent;
      const productPrice = card.querySelector('.price').textContent;
      
      alert(`Added to cart: ${productName} - ${productPrice}`);
      
      // Add to cart array
      cartItems.push({
        name: productName,
        price: productPrice
      });
      
      // Save cart to localStorage
      localStorage.setItem('cart', JSON.stringify(cartItems));
    });
  });
  
  // Load cart from localStorage
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cartItems = JSON.parse(savedCart);
  }
  
  // Handle any errors with audio playback
  backgroundMusic.addEventListener('error', function(e) {
    console.error('Audio error: ', e);
    alert('There was an error loading the music file. Please check your internet connection and try again.');
    isPlaying = false;
    playPauseBtn.textContent = '▶️ Play';
  });
});