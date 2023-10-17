// Array of possible page URLs
const pages = [
    'purplepage.html',
    'orangepage.html',
    'yellowpage.html',
    
];

// Function to navigate to a random page
function navigateToRandomPage() {
    // Get a random index from the array
    const randomIndex = Math.floor(Math.random() * pages.length);
    
    // Get the URL at the random index
    const randomPageURL = pages[randomIndex];
    
    // Navigate to the random page
    window.location.href = randomPageURL;
}

// Attach a click event listener to the button
document.getElementById('randomPageButton').addEventListener('click', navigateToRandomPage);
