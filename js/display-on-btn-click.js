    // Get the button element by ID
    const pageDownButton = document.getElementById('page-down-button');

    // Get the next-section-wrapper element by class name
    const nextSectionWrapper = document.querySelector('.next-section-wrapper');

    // Add click event listener to the button
    pageDownButton.addEventListener('click', function() {
        // Toggle display property of next-section-wrapper
        if (nextSectionWrapper.style.display === 'none') {
            nextSectionWrapper.style.display = 'block';
        } else {
            nextSectionWrapper.style.display = 'none';
        }
           // Scroll to the next-section-wrapper
    nextSectionWrapper.scrollIntoView({ behavior: 'smooth' });
    });