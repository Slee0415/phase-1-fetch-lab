// Function to fetch books from the API
function fetchBooks() {
  // Make a fetch request to the API endpoint
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      // Check if the response is successful
      if (!response.ok) throw new Error('Network response was not ok');
      // Parse the response as JSON and return the promise
      return response.json();
    })
    .catch(error => console.error('There was a problem with the fetch operation:', error)); // Catch any errors during the fetch operation
}

// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Call fetchBooks() to fetch the books and then render them
  fetchBooks()
    .then(data => renderBooks(data)) // Call renderBooks() with the fetched data
    .catch(error => console.error('There was a problem rendering books:', error)); // Handle any errors during rendering
});

// Function to render books into the DOM
function renderBooks(books) {
  // Get the element where books will be rendered
  const bookList = document.getElementById('book-list');
  // Clear any existing content
  bookList.innerHTML = '';

  // Loop through each book and create a list item for its title
  books.forEach(book => {
    const listItem = document.createElement('li');
    listItem.textContent = book.name; // Assuming 'name' is the property containing the book title
    bookList.appendChild(listItem);
  });
}