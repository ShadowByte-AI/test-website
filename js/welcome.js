document.addEventListener("DOMContentLoaded", function() {
    const welcomeWrapper = document.querySelector(".welcome-wrapper");
    const welcomeTextSpans = document.querySelectorAll(".welcome-text span");
    const welcomeImg = document.querySelector(".welcome-img");

    // Function to set a cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    // Function to get a cookie
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Check if the welcome screen has already been shown
    if (getCookie("welcomeShown") === "true") {
        welcomeWrapper.style.display = 'none';
    } else {
        // Show the welcome wrapper
        welcomeWrapper.style.display = 'block';

        // Create a GSAP timeline
        const tl = gsap.timeline();

        // Fade in the welcome text span by span
        tl.to(welcomeTextSpans, { 
            opacity: 1, 
            stagger: 0.4, 
            duration: 1, 
            ease: "power2.inOut" 
        });

        tl.to(".welcome-text #first-p", { 
            x: "100%",
            opacity: 0, 
            duration: 1, 
            ease: "power2.inOut" 
        });

        tl.to(".welcome-text #second-p", { 
            x: "-100%",
            opacity: 0, 
            duration: 1, 
            delay: -1,
            ease: "power2.inOut" 
        });

        // Fade in the logo
        tl.to(welcomeImg, { 
            visibility: "visible", 
            opacity: 1, 
            duration: 1, 
            ease: "power2.inOut" 
        });

        tl.to("#sign", {
            strokeDashoffset: 0,
            duration: 6,
           ease: "power2.inOut" 
        });

        // Fade out the welcome wrapper
        tl.to(welcomeWrapper, { 
            opacity: 0, 
            duration: 1, 
            ease: "power2.inOut", 
            onComplete: () => {
                welcomeWrapper.style.display = 'none';
                setCookie("welcomeShown", "true", 30); // Set cookie to expire in 30 days
            }
        });
    }
});