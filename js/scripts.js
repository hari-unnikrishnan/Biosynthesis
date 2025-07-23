 document.addEventListener('DOMContentLoaded', () => {
        const stepsGrid = document.querySelector('.steps-grid');
        const leftArrow = document.querySelector('.carousel-btn.left');
        const rightArrow = document.querySelector('.carousel-btn.right');
        const stepItems = document.querySelectorAll('.step-item');

        let currentIndex = 0;
        const itemsPerPage = 3;

        const updateCarousel = () => {
            if (stepItems.length > 0) {
                const itemWidth = stepItems[0].offsetWidth;
                const gap = 20;
                const scrollAmount = (itemWidth + gap) * currentIndex;
                stepsGrid.style.transform = `translateX(-${scrollAmount}px)`;
            }
        };

        rightArrow.addEventListener('click', () => {
            if (currentIndex < stepItems.length - itemsPerPage) {
                currentIndex++;
                updateCarousel();
            } else {
                currentIndex = 0;
                updateCarousel();
            }
        });

        leftArrow.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            } else {
                currentIndex = stepItems.length - itemsPerPage;
                updateCarousel();
            }
        });

        window.addEventListener('resize', () => {
            updateCarousel();
        });

        updateCarousel(); 
    });