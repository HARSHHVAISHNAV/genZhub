document.getElementById("title").innerHTML = "genZhub";
document.getElementsByClassName("navone")[0].innerHTML = "Home";
document.getElementsByClassName("navone")[1].innerHTML = "Technology";
document.getElementsByClassName("navone")[2].innerHTML = "Social Media";
document.getElementsByClassName("navone")[3].innerHTML = "Business";
document.getElementsByClassName("navone")[4].innerHTML = "Sports";
document.getElementsByClassName("navone")[5].innerHTML = "Entertainment";

function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  }