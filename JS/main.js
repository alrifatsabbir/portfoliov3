// For Navigation Hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".c1").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// For Dropdown bar 

function showParts(){
    var project = document.getElementById("prj");
    project.classList.toggle("show")
}
// Close the dropdown menu if the user clicks outside of it
window.mouseover= function(event) {
    if (!event.target.matches('.prj')) {
      var dropdowns = document.getElementsByClassName("pack");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}





