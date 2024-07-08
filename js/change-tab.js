
    document.addEventListener('DOMContentLoaded', function() {
        const buttons = document.querySelectorAll('.tab-button');
        const cards = document.querySelectorAll('.fcard');
        const sliderBg = document.querySelector('.slider-bg');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const targetId = button.getAttribute('data-target');
                const buttonIndex = Array.from(buttons).indexOf(button);
                const buttonWidth = button.offsetWidth + 16; // Added margin adjustment

                sliderBg.style.transform = `translateX(${buttonIndex * buttonWidth}px)`;

                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                cards.forEach(card => {
                    if (card.id === targetId) {
                        card.classList.add('active');
                    } else {
                        card.classList.remove('active');
                    }
                });
            });
        });

        // Optionally, set the initial active tab
        buttons[0].click();
    });
