let menuButton = document.getElementById('menuButton');

menuButton.addEventListener('click', function() {
  let menubar = document.getElementById('menubar');

  // Toggle visibility state using classList
  menubar.classList.toggle('expanded');
});