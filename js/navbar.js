function toggleNavbar() {
  const navbarCollapse = document.getElementById('navbar-collapse');
  navbarCollapse.classList.toggle('show'); // Toggle the sliding menu
}

function initializeNavbar() {
  const navbarToggle = document.getElementById('navbar-toggle');
  if (navbarToggle) {
      navbarToggle.addEventListener('click', toggleNavbar);
  }
}

document.addEventListener('DOMContentLoaded', initializeNavbar);