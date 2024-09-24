// Function to toggle the navbar menu

function toggleNavbar() {
  const navbarCollapse = document.getElementById('navbar-collapse');
  navbarCollapse.classList.toggle('show'); // Toggle the sliding menu
}

// Function to toggle the navbar icon image
function toggleNavbarIcon() {
  const navbarIcon = document.getElementById('navbar-icon'); // Select the image inside the navbar-toggle
  let isImage1 = navbarIcon.getAttribute('src') === "resources/images/cricket-wicket-filled-stroke-by-Vexels.svg"; // Check which image is currently displayed

  // Toggle between the two images
  navbarIcon.src = isImage1 ? "resources/images/cricket-wicket-with-fire-filled-stroke-by-Vexels.svg" : "resources/images/cricket-wicket-filled-stroke-by-Vexels.svg";
}

// Initialize both toggle functionalities
function initializeNavbar() {
  const navbarToggle = document.getElementById('navbar-toggle');
  if (navbarToggle) {
      navbarToggle.addEventListener('click', () => {
          toggleNavbar(); // Toggle the sliding menu
          toggleNavbarIcon(); // Toggle the image
      });
  }
}
    

// Initialize the event listeners once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeNavbar);

    // Check if the user is logged in by checking localStorage
    const loggedInUser = localStorage.getItem('loggedInUser');
    const loginLink = document.getElementById('login-link');

    if (loggedInUser) {
        // Replace the login link with the username
        loginLink.innerHTML = `<div class="nav-elements">${loggedInUser}</div>`;
        loginLink.href = '#'; // Optional: change the link to something else if needed
    }
// Check if the user is logged in by checking localStorage
