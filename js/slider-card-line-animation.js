gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.hero-example').forEach((arrow) => {
    const tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: arrow,
            start: "top center", // Adjust the start trigger position as needed
            end: "center center", // Adjust the end trigger position as needed
            scrub: true,
            markers: false // Remove markers in production
        }
    });

    tl1.to('.line-1', {
        height: "234px", // Adjust the final height as needed
        duration: 2,
        ease: "power2.inOut"
    });
    tl1.to('.square-1', {
        opacity: 1, // Adjust the final height as needed
        duration: 1,
        ease: "power2.inOut"
    });

    tl1.to('.line-2', {
        height: "206px", // Adjust the final height as needed
        duration: 2,
        ease: "power2.inOut"
    });
});