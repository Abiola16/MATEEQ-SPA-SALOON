let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Show the specific slide
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    if (n >= slides.length) {
        slideIndex = 0; // Loop back to the first slide
    }

    if (n < 0) {
        slideIndex = slides.length - 1; // Loop back to the last slide
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show the current slide
    slides[slideIndex].style.display = "block";
}

// Auto slide every 3 seconds
setInterval(() => {
    changeSlide(1);
}, 3000); // Change every 3 seconds
