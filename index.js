// Function to fetch books from the API
function fetchBooks() {
  // Send a fetch request to the API endpoint
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      // Check if the response is successful
      if (!response.ok) {
        // If not successful, throw an error
        throw new Error('Network response was not ok');
      }
      // Parse the response as JSON and return the promise
      return response.json();
    })
    .then(data => renderBooks(data)) // Render books once data is retrieved
    .catch(error => console.error('There was a problem fetching books:', error)); // Handle any errors during fetch operation
}

// Function to render books into the DOM
function renderBooks(books) {
  // Get the main element where books will be rendered
  const main = document.querySelector('main');
  // Loop through each book and create a heading element for its title
  books.forEach(book => {
    const h2 = document.createElement('h2');
    // Set the text content of the heading element to the book's name
    h2.textContent = book.name;
    // Append the heading element to the main element
    main.appendChild(h2);
  });
}

// Event listener to execute code when DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Call fetchBooks() to fetch the books and render them
  fetchBooks();
});