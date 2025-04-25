// Initialize animated particles background
particlesJS('particles-js', {
    particles: {
      number: { value: 50, density: { enable: true, value_area: 800 } },
      color: { value: '#ffffff' },
      shape: { type: 'star', stroke: { width: 0 }, polygon: { nb_sides: 5 } },
      opacity: { value: 0.7 },
      size: { value: 4, random: true },
      move: { enable: true, speed: 2, out_mode: 'out' }
    },
    interactivity: {
      detect_on: 'canvas',
      events: { resize: true }
    },
    retina_detect: true
  });
  
  // Typing effect for message
  function typeWriter() {
    const elem = document.getElementById('typed-message');
    const text = elem.getAttribute('data-text');
    let i = 0;
    elem.innerHTML = '';
  
    function type() {
      if (i < text.length) {
        elem.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 50);
      } else {
        // Show photo and play voice note after typing
        document.getElementById('photo-container').style.display = 'block';
        const voice = document.getElementById('voiceNote');
        voice.play();
      }
    }
    type();
  }
  
  // On gift click
  function openGift() {
    // Change gift image
    document.getElementById('giftImage').src = 'open-gift.png';
    // Hide tagline
    document.getElementById('tagline').style.display = 'none';
    // Show message container & title
    document.getElementById('message').style.display = 'block';
    document.getElementById('message-title').style.display = 'block';
  
    // Confetti
    confetti({ particleCount: 200, spread: 70, origin: { y: 0.6 } });
  
    // Restart background music
    const music = document.getElementById('bgMusic');
    music.currentTime = 0;
    music.play();
  
    // Start typing message
    typeWriter();
  }