// Select the hamburger menu, the mobile nav, and all mobile dropdowns
var hamburgerMenu = document.querySelector('.hamburger');
var mobileNav = document.querySelector('.mobile-nav');
var mobileDropdowns = document.querySelectorAll('.mobile-nav-dropdown');
var mobileDropdownItems = document.querySelectorAll('.mobile-nav-dropdown-items a');

// Toggle the mobile nav and the hamburger icon when the hamburger menu is clicked
hamburgerMenu.addEventListener('click', function(event) {
    event.stopPropagation();
    this.classList.toggle('close');
    mobileNav.classList.toggle('active');
    mobileDropdowns.forEach(function(dropdown) {
        dropdown.classList.remove('active'); // Always hide the dropdown items
    });
});

// Add click event listeners to each mobile dropdown
mobileDropdowns.forEach(function(dropdown) {
    dropdown.addEventListener('click', function(event) {
        event.stopPropagation();
        this.classList.toggle('active');
    });
});

// Close mobile nav and revert hamburger icon when a dropdown item is clicked
mobileDropdownItems.forEach(function(item) {
    item.addEventListener('click', function() {
        hamburgerMenu.classList.remove('close');
        mobileNav.classList.remove('active');
        mobileDropdowns.forEach(function(dropdown) {
            dropdown.classList.remove('active'); // Always hide the dropdown items
        });
    });
});

// Close mobile nav and revert hamburger icon when clicked outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.mobile-nav-dropdown')) {
        hamburgerMenu.classList.remove('close');
        mobileNav.classList.remove('active');
        mobileDropdowns.forEach(function(dropdown) {
            dropdown.classList.remove('active'); // Always hide the dropdown items
        });
    }
});

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        // downscroll code
        header.classList.add('header-hidden');
    } else {
       // upscroll code
       header.classList.remove('header-hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
}, false);


var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");

Array.from(document.querySelectorAll('.fci-insert-img img')).forEach(img => {
  img.onclick = function(){
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
    modalImg.src = this.src;
    console.log(this.src);
  }
})

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
}

document.onclick = function(event) {
    if (event.target == modal) {
      modal.style.opacity = "0";
      modal.style.visibility = "hidden";
    }
  }


  let video = document.querySelector('video');

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.play();
    } else {
      entry.target.pause();
    }
  });
}, { threshold: 0.5 }); // Adjust as needed

observer.observe(video);
