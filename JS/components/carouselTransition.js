document.addEventListener('DOMContentLoaded', function () {
  const carouselTrack = document.querySelector('.carousel-track');
  const carouselItems = Array.from(carouselTrack.children);
  const leftButton = document.querySelector('.left-button');
  const rightButton = document.querySelector('.right-button');

  let startIndex = 0;
  let itemsToShow = window.innerWidth <= 500 ? 2 : 3; // Initial number of items to show

  function updateTransition() {
    itemsToShow = window.innerWidth <= 500 ? 2 : 3; // Adjust based on window size
    const itemWidth = carouselItems[0].getBoundingClientRect().width;
    const newTransformValue = -(startIndex * itemWidth);
    carouselTrack.style.transform = `translateX(${newTransformValue}px)`;
  }

  leftButton.addEventListener('click', function () {
    if (startIndex > 0) {
      startIndex -= 1;
      updateTransition();
    }
  });

  rightButton.addEventListener('click', function () {
    if (startIndex < carouselItems.length - itemsToShow) {
      startIndex += 1;
      updateTransition();
    }
  });

  window.addEventListener('resize', updateTransition); // Recalculate on resize

  // Initialize the carousel transition
  updateTransition();
});
