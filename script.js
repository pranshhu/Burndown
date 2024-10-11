const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true // Enable smooth scrolling
});

function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block";
    });
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none";
    });

    var elems = document.querySelectorAll(".elem");
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`;
        });
    });
}

function menuAnimation() {
    var menu = document.querySelector("nav h3");
    var full = document.querySelector("#full-scr");
    var navimg = document.querySelector("nav img");
    var flag = 0;
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0;
            navimg.style.opacity = 0;
            flag = 1;
        } else {
            full.style.top = "-100%";
            navimg.style.opacity = 1;
            flag = 0;
        }
    });
}

function loaderAnimation() {
    var loader = document.querySelector("#loader");
    setTimeout(function () {
        loader.style.top = "-100%";
    }, 4200);
}

// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function() {
    // Function to smooth scroll to an element
    function smoothScrollTo(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Attach event listeners to the navigation links
    document.getElementById("work-link").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        smoothScrollTo("page2-bottom"); // Scroll to page2-bottom div
    });

    document.getElementById("studio-link").addEventListener("click", function(event) {
        event.preventDefault();
        smoothScrollTo("page4"); // Scroll to page4 div
    });

    document.getElementById("contact-link").addEventListener("click", function(event) {
        event.preventDefault();
        smoothScrollTo("page5"); // Scroll to footer div
    });
});

// Initialize animations
page4Animation();
menuAnimation();
loaderAnimation();
