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
      // Handle the JSON response here
      console.log('Message:', data.message);

      // Find the paragraph element in the learnersThink_section
      const learnersThinkSection = document.querySelector('.learnersThink_section p');

      // Create a string to hold the HTML content
      let content = '';

      data.response.forEach(item => {
        content += `<strong>ID:</strong> ${item._id}<br>`;
        content += `<strong>Name:</strong> ${item.name}<br>`;
        content += `<strong>Description:</strong> ${item.description}<br><br>`;
      });

      // Populate the paragraph element with the fetched data
      learnersThinkSection.innerHTML = content;
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
});
