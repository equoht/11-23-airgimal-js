document.addEventListener('DOMContentLoaded', function() {
    // Бургер меню
    const burgerMenu = document.querySelector('.burger-menu');
    const navList = document.querySelector('.nav-list');
  
    burgerMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
  
    // Слайдер
    const slider = document.querySelector('.slider');
      const slides = document.querySelectorAll('.slide');
      const prevButton = document.querySelector('.prev-slide');
      const nextButton = document.querySelector('.next-slide');
      let currentSlide = 0;
  
      function showSlide(index) {
          slides.forEach(slide => slide.classList.remove('active'));
          slides[index].classList.add('active');
          slider.style.transform = `translateX(-${index * 100}%)`;
      }
  
      function nextSlide() {
          currentSlide = (currentSlide + 1) % slides.length;
          showSlide(currentSlide);
      }
  
      function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
  
      nextButton.addEventListener('click', nextSlide);
      prevButton.addEventListener('click', prevSlide);
  
      // Аккордеон
      const accordionItems = document.querySelectorAll('.accordion-item');
  
      accordionItems.forEach(item => {
          const header = item.querySelector('.accordion-header');
          const content = item.querySelector('.accordion-content');
  
          header.addEventListener('click', () => {
              content.style.display = content.style.display === 'block' ? 'none' : 'block';
          });
      });
  
      // Модальное окно
      const phoneButton = document.querySelector('.phone-button');
          const modal = document.getElementById('modal');
          const closeModal = document.querySelector('.close-modal');
  
      phoneButton.addEventListener('click', () => {
          modal.style.display = 'flex';
      });
  
      closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
      });
  
      window.addEventListener('click', (event) => {
          if(event.target == modal) {
              modal.style.display = 'none';
          }
      })
  });