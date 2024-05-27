document.addEventListener('DOMContentLoaded', function () {
  const carouselContainer = document.querySelector('.carousel__container');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const leftButton = document.querySelector('.left-button');
  const rightButton = document.querySelector('.right-button');

  let startIndex = 1;
  let itemsToShow = window.innerWidth <= 500 ? 2 : 3; // Initial number of items to show

  function updateCarousel() {
    itemsToShow = window.innerWidth <= 500 ? 2 : 3; // Adjust based on window size
    carouselItems.forEach((item, index) => {
      const h4Element = item.querySelector('h4');
      if (index >= startIndex && index < startIndex + itemsToShow) {
        item.style.display = 'block';

        // Reset background color for all h4 elements
        if (h4Element) {
          h4Element.style.backgroundColor = '';
        }

        // Apply background colors based on position
        if (index === startIndex && h4Element) {
          h4Element.style.backgroundColor = 'var(--green)';
        } else if (index === startIndex + 1 && h4Element) {
          h4Element.style.backgroundColor = 'var(--orange)';
        } else if (index === startIndex + (itemsToShow - 1) && h4Element) {
          h4Element.style.backgroundColor = 'var(--blue)';
        }


      } else {
        item.style.display = 'none';
      }
    });
  }

  leftButton.addEventListener('click', function () {
    if (startIndex > 0) {
      startIndex -= 1;
      updateCarousel();
    }
  });

  rightButton.addEventListener('click', function () {
    if (startIndex < carouselItems.length - itemsToShow) {
      startIndex += 1;
      updateCarousel();
    }
  });

  window.addEventListener('resize', updateCarousel); // Recalculate on resize

  // Initialize the carousel
  updateCarousel();
});




