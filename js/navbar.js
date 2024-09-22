function toggleNavbar() {
  const navbarCollapse = document.getElementById('navbar-collapse');
  navbarCollapse.classList.toggle('show'); // This should toggle the class
}

function initializeNavbar() {
  const navbarToggle = document.getElementById('navbar-toggle');
  if (navbarToggle) {
      navbarToggle.addEventListener('click', toggleNavbar); // Attach the event listener
  }
}
console.log('Navbar JS loaded'); // Add this line