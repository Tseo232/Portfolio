document.addEventListener('DOMContentLoaded', () => {
    const overviewCard = document.getElementById('overviewCard');

    // Function to toggle overview details
    function showOverviewDetails() {
        const overviewDetails = document.getElementById('overviewDetails');
        const additionalCards = document.getElementById('additionalCards');
        overviewDetails.classList.toggle('active');

        if (overviewDetails.classList.contains('active')) {
            additionalCards.style.display = 'flex';
            setTimeout(() => {
                additionalCards.style.opacity = 1;
            }, 10);
        } else {
            additionalCards.style.opacity = 0;
            setTimeout(() => {
                additionalCards.style.display = 'none';
            }, 300);
        }
    }

    // Add event listener for clicking the overview card
    overviewCard.addEventListener('click', showOverviewDetails);

    // Add event listeners for the overview card's 3D effect
    overviewCard.addEventListener('mousemove', (event) => {
        const rect = overviewCard.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = (x / overviewCard.offsetWidth - 0.5) * 30;
        const rotateX = (y / overviewCard.offsetHeight - 0.5) * -30;

        overviewCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    overviewCard.addEventListener('mouseleave', () => {
        overviewCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});
