const container = document.querySelector('.scroll-container');
const content = document.querySelector('.content');

// Duplicate images for seamless effect
const images = Array.from(content.children);
images.forEach(image => content.appendChild(image.cloneNode(true)));

let scrollInterval;

// Function to handle auto-scrolling
function startAutoScroll() {
    scrollInterval = setInterval(() => {
        // Scroll manually to create a smooth effect
        container.scrollLeft += 1;
        // Reset scroll position to create seamless effect
        if (container.scrollLeft >= content.scrollWidth / 2) {
            container.scrollLeft = 0;
        }
    }, 20); // Adjust speed as needed
}

// Function to stop auto-scrolling
function stopAutoScroll() {
    clearInterval(scrollInterval);
}

// Event listeners for manual scrolling
container.addEventListener('mouseenter', stopAutoScroll);
container.addEventListener('mouseleave', startAutoScroll);

// Start auto-scrolling on page load
startAutoScroll();