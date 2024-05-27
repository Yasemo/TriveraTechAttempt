document.addEventListener('DOMContentLoaded', function () {
  const quickSkillsCircle = document.querySelector('.quickSkills__circle');
  const text = 'Quick\nSkills';
  let isInViewport = false;

  function typeWriter(element, text, delay = 100) {
    let i = 0;
    let typingInterval;

    function startTyping() {
      element.innerHTML = ''; // Clear the text
      i = 0;
      typingInterval = setInterval(() => {
        if (i < text.length) {
          element.innerHTML += text.charAt(i) === '\n' ? '<br>' : text.charAt(i);
          i++;
        } else {
          clearInterval(typingInterval);
          setTimeout(startUntyping, 1000); // Start untyping after a delay
        }
      }, delay);
    }

    function startUntyping() {
      typingInterval = setInterval(() => {
        if (i > 0) {
          element.innerHTML = element.innerHTML.slice(0, i === 1 && text.charAt(i - 1) === '\n' ? -5 : -1);
          i--;
        } else {
          clearInterval(typingInterval);
          setTimeout(startTyping, 1000); // Start typing after a delay
        }
      }, delay);
    }

    startTyping();
  }

  function checkViewport() {
    const rect = quickSkillsCircle.getBoundingClientRect();
    isInViewport = rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    if (isInViewport) {
      window.removeEventListener('scroll', checkViewport); // Remove scroll event listener
      typeWriter(quickSkillsCircle, text);
    }
  }

  window.addEventListener('scroll', checkViewport);
  checkViewport(); // Initial check in case the element is already in the viewport
});
