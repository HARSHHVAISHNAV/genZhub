function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
  }
  
  document.addEventListener('click', function(event) {
    var dropdown = document.getElementById("myDropdown");
    var dropdownButton = document.querySelector('.dropdown-button');
    if (!dropdown.contains(event.target) && event.target !== dropdownButton) {
        dropdown.classList.remove('show');
    }
  });
  