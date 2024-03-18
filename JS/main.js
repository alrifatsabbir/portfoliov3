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

// For Automation of Carousel
document.addEventListener("DOMContentLoaded", function() {
  var carousel = document.querySelector("#carouselExampleCaptions");
  var carouselItems = carousel.querySelectorAll(".carousel-item");
  var carouselIndicators = carousel.querySelectorAll(".carousel-indicators button");
  var currentIndex = 0;
  var interval = 5000; // Set the interval time (in milliseconds)

  function activateIndicator(index) {
    carouselIndicators.forEach(function(indicator) {
      indicator.classList.remove("active");
    });
    carouselIndicators[index].classList.add("active");
  }

  function nextSlide() {
    carouselItems[currentIndex].classList.remove("active");
    carouselIndicators[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].classList.add("active");
    carouselIndicators[currentIndex].classList.add("active");
  }

  setInterval(nextSlide, interval);
});




