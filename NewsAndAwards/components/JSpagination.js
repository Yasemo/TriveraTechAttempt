function showPage(page) {
  const itemsPerPage = 9;
  const grid = document.querySelector('.articles__grid');
  const children = grid.children;

  for (let i = 0; i < children.length; i++) {
    if (page === 1 && i < itemsPerPage) {
      children[i].classList.remove('hidden');
    } else if (page === 2 && i >= itemsPerPage) {
      children[i].classList.remove('hidden');
    } else {
      children[i].classList.add('hidden');
    }
  }
}

// Initially display the first page
showPage(1);