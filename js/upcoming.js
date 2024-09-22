document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.querySelector('.image-container');
    const images = Array.from(imageContainer.children);
    
    let currentImageIndex = 0;

    // Function to show the next image
    function showNextImage() {
        // Hide the current image
        images[currentImageIndex].style.display = 'none';

        currentImageIndex = (currentImageIndex + 1) % images.length; // Loop back to the first image

        // Show the next image
        images[currentImageIndex].style.display = 'block';
    }

    // Initially hide all images except the first one
    images.forEach((img, index) => {
        img.style.display = index === 0 ? 'block' : 'none';
    });

    // Show images at intervals
    setInterval(showNextImage, 2000); // Change image every 2 seconds
});