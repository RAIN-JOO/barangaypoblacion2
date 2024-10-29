// Function to open the popup
function openPopup() {
    // Check if the form has been submitted before (using localStorage)
    if (!localStorage.getItem('newsletterSubmitted')) {
        document.getElementById('newsletter-popup').style.display = 'block';
        document.getElementById('popupOverlay').style.display = 'block';
    }
}

// Function to close the popup
function closePopup() {
    document.getElementById('newsletter-popup').style.display = 'none';
    document.getElementById('popupOverlay').style.display = 'none';
}

// Automatically show the popup after 5 seconds if not submitted
setTimeout(openPopup, 5000); // 5000 milliseconds = 5 seconds

// Handle form submission
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Mark the form as submitted in localStorage
    localStorage.setItem('newsletterSubmitted', 'true');

    // Close the popup after submission
    closePopup();
    alert('Thank you for subscribing!'); // Optional: You can remove this line if you don't want an alert
});