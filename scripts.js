// JavaScript Section
document.addEventListener('DOMContentLoaded', () => {
    const car = document.getElementById('car');
    const yearMarkers = document.querySelectorAll('.year-marker');
    const yearDetails = document.querySelectorAll('.year-details');

    // Data for year positions
    const yearPositions = {
        2020: { left: 50, top: 50 },
        2022: { left: 200, top: 150 },
        2023: { left: 350, top: 300 },
        2024: { left: 500, top: 400 },
        2025: { left: 700, top: 500 }
    };

    // Move the car to the clicked year
    yearMarkers.forEach(marker => {
        marker.addEventListener('click', () => {
            const year = marker.getAttribute('data-year');
            const position = yearPositions[year];

            // Move the car smoothly to the clicked year
            car.style.left = `${position.left}px`;
            car.style.top = `${position.top}px`;

            // Hide all year details and show the selected year details
            yearDetails.forEach(detail => detail.style.display = 'none');
            document.getElementById(`details-${year}`).style.display = 'block';
        });
    });
});