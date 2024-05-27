document.addEventListener('DOMContentLoaded', function () {
  // Define the endpoint URL
  const endpoint = 'https://project-dumbass-server.vercel.app/categories';

  // Fetch data from the endpoint
  fetch(endpoint)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {

      entries = document.querySelector('.carouselGrid').children

      // note to self: i is a string, not an integer for some reason
      for (let i in data.response) {
        entries[parseInt(i) + 1].querySelector('p').innerText = data.response[i].description;
      }
    })

    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
});
