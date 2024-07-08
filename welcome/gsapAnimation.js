
  // Ensure the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", function() {
    // Select all the span elements within the .intro-p class
    const spans = document.querySelectorAll('.intro-p span');

    // Use GSAP to animate each letter individually
    gsap.to(spans, {
      scrollTrigger: {
        trigger: ".intro-p",
        start: "top 80%",  // Adjust the start point as needed
        end: "bottom 20%", // Adjust the end point as needed
        scrub: true,       // Smooth scrubbing
      },
      color: "white",       // Target color
      stagger: 0.05,      // Delay between each letter's animation
    });
  });
