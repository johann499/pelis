// Get modal elements
const modal = document.getElementById('movieModal');
const modalTitle = document.getElementById('movieTitle');
const modalDescription = document.getElementById('movieDescription');
const modalTrailer = document.getElementById('movieTrailer');
const closeModal = document.querySelector('.close');

// Function to open modal
function openModal(movie) {
    const title = movie.getAttribute('data-title');
    const description = movie.getAttribute('data-description');
    const trailer = movie.getAttribute('data-trailer');

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalTrailer.href = trailer;

    modal.style.display = 'flex';
}

// Close modal when "X" is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Add event listeners to each movie
document.querySelectorAll('.movie').forEach(movie => {
    movie.addEventListener('click', () => {
        openModal(movie);
    });
});