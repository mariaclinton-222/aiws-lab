// Set the future event date (using Date object)
// Set to 30 days from now for demonstration
const eventDate = new Date();
eventDate.setDate(eventDate.getDate() + 30); // Event is 30 days from today
eventDate.setHours(10, 0, 0, 0); // Set to 10:00 AM

// Alternative: You can set a specific date like this:
// const eventDate = new Date('May 15, 2026 10:00:00');

let countdownInterval;

// Initialize countdown on page load
window.addEventListener('DOMContentLoaded', function() {
    startCountdown();
    
    // Add form submit handler
    document.getElementById('event-form').addEventListener('submit', handleFormSubmit);
});

// Function to start the countdown timer
function startCountdown() {
    // Update countdown immediately
    updateCountdown();
    
    // Update countdown every second using setInterval()
    countdownInterval = setInterval(updateCountdown, 1000);
}

// Function to update countdown display
function updateCountdown() {
    // Get current date using Date object
    const now = new Date();
    
    // Calculate time difference in milliseconds
    const timeDifference = eventDate - now;
    
    // Check if countdown has reached zero
    if (timeDifference <= 0) {
        // Stop the countdown using clearInterval()
        clearInterval(countdownInterval);
        
        // Display "Registration Closed" message
        displayClosedMessage();
        return;
    }
    
    // Convert milliseconds to days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    // Update the countdown display using DOM manipulation
    document.getElementById('days').textContent = formatTime(days);
    document.getElementById('hours').textContent = formatTime(hours);
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);
}

// Function to format time with leading zeros
function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

// Function to display "Registration Closed" message
function displayClosedMessage() {
    const countdownDisplay = document.getElementById('countdown-display');
    const statusMessage = document.getElementById('status-message');
    const registerBtn = document.getElementById('register-btn');
    const formInputs = document.querySelectorAll('#event-form input, #event-form select');
    
    // Hide countdown display
    countdownDisplay.style.display = 'none';
    
    // Display "Registration Closed" message
    statusMessage.textContent = 'Registration Closed';
    statusMessage.style.display = 'block';
    statusMessage.classList.add('closed');
    
    // Disable form inputs and button
    formInputs.forEach(input => {
        input.disabled = true;
    });
    registerBtn.disabled = true;
    registerBtn.textContent = 'Registration Closed';
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Check if registration is still open
    const now = new Date();
    const timeDifference = eventDate - now;
    
    if (timeDifference <= 0) {
        alert('Sorry, registration is closed!');
        return;
    }
    
    // Get form values
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const company = document.getElementById('company').value;
    const role = document.getElementById('role').value;
    const session = document.getElementById('session').value;
    
    // Display success message
    alert(`Registration Successful!\n\nThank you ${fullName}!\nYou have been registered for the ${session} session.\n\nA confirmation email has been sent to ${email}.`);
    
    // Reset form
    document.getElementById('event-form').reset();
}
