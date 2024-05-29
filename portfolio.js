let currentSlide = 0;
  const slides = document.querySelectorAll('.lookbook img');
  const description = document.getElementById('image-description');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }

  function updateDescription(index) {
    const descriptions = [
      "I created a fashion website where you can browse looks and outfits based on the aesthetic you have or the look youre going for. Categorized into 6 initial styles, i also included a home page and a contact page for this website. i created this website on Visual Studio with the help of Codepen to see my CSS come together in real time.",
      "I coded a skincare application that shows you makeup products you should be using based on your skin type. this application was made in Visual Studio and i used JSON to store the makeup products. This application can help women who have issues with their makeup seperating during the day or just with product compatibility.",
      "I made this small application when i was starting out with JavaScript and i was practicing switching between images and i used memes to show it." 
      
    ];
    description.textContent = descriptions[index];
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
    updateDescription(currentSlide);
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    updateDescription(currentSlide);
  }