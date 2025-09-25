// Scroll animatsiya
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.movie-card, .genre-card');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    });
  
    cards.forEach(card => {
      card.style.opacity = 0;
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(card);
    });
  });

   // Sifatni o'zgartirish funksiyasi
   function changeQuality(quality) {
    const video = document.getElementById('movieVideo');
    const source = document.getElementById('videoSource');
    const videoUrl = `videos/Intelstellar-${quality}.mp4`;
    
    // Video pauza qilish
    video.pause();
    
    // Yangi manzilni o'rnatish
    source.src = videoUrl;
    
    // Video qayta yuklash
    video.load();
    
    // Video davom ettirish
    video.play().catch(e => console.log("Auto-play blocked"));
  }

  // Sahifa yuklanganda saqlangan sifatni qo'llash
  document.addEventListener('DOMContentLoaded', function() {
    const savedQuality = localStorage.getItem('interstellarQuality');
    if (savedQuality) {
      document.getElementById('quality').value = savedQuality;
      changeQuality(savedQuality);
    }
  });

  // Sifat tanlanganda saqlash
  document.getElementById('quality').addEventListener('change', function() {
    localStorage.setItem('interstellarQuality', this.value);
  });


    // Sifatni o'zgartirish funksiyasi
    function changeQuality(quality) {
      const video = document.getElementById('movieVideo');
      const source = document.getElementById('videoSource');
      const videoUrl = `videos/dark-knight-${quality}.mp4`;
      
      // Video pauza qilish
      video.pause();
      
      // Yangi manzilni o'rnatish
      source.src = videoUrl;
      
      // Video qayta yuklash
      video.load();
      
      // Video davom ettirish
      video.play().catch(e => console.log("Auto-play blocked"));
    }

    // Sahifa yuklanganda saqlangan sifatni qo'llash
    document.addEventListener('DOMContentLoaded', function() {
      const savedQuality = localStorage.getItem('darkKnightQuality');
      if (savedQuality) {
        document.getElementById('quality').value = savedQuality;
        changeQuality(savedQuality);
      }
    });

    // Sifat tanlanganda saqlash
    document.getElementById('quality').addEventListener('change', function() {
      localStorage.setItem('darkKnightQuality', this.value);
    });
