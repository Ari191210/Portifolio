// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
  
  // Scroll to top button logic
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  };
  
  scrollToTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Toggle Light and Dark Mode
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const canvas = document.getElementById('wave');
  const ctx = canvas.getContext('2d');
  let waveColor = '#4f46e5';  // Default wave color for dark mode
  
  function createWave() {
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = 150;
    const waveLength = 0.02;
    const waveHeight = 15;
    let offset = 0;
  
    function drawWave() {
      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
  
      for (let x = 0; x < width; x++) {
        let y = Math.sin(x * waveLength + offset) * waveHeight + height / 2;
        ctx.lineTo(x, y);
      }
  
      ctx.strokeStyle = waveColor;
      ctx.lineWidth = 2;
      ctx.stroke();
  
      offset += 0.03;
      requestAnimationFrame(drawWave);
    }
  
    drawWave();
  }
  
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLightMode = body.classList.contains('light-mode');
    themeToggle.textContent = isLightMode ? '🌙' : '🌞';
  
    // Change wave color based on theme
    if (isLightMode) {
      waveColor = '#e0e0e0';
    } else {
      waveColor = '#4f46e5';
    }
  });
  
  createWave();
  