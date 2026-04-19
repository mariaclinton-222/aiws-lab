// Timer variables
let timeRemaining = 10;
let timerInterval;

// Correct answers stored in an object
const correctAnswers = {
    q1: 'b',  // Document Object Model
    q2: 'b',  // clearInterval()
    q3: 'a',  // document.querySelector('#id')
    q4: 'c',  // const
    q5: 'c'   // Prevents user interaction
};

// Initialize quiz on page load
window.addEventListener('DOMContentLoaded', function() {
    startTimer();
    updateProgress();
    
    // Add event listener to submit button
    document.getElementById('submit-btn').addEventListener('click', submitQuiz);
    
    // Add event listeners to all radio buttons for progress tracking
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', updateProgress);
    });
});

// Function to start the timer
function startTimer() {
    const timerDisplay = document.getElementById('timer');
    const warningMessage = document.getElementById('warning-message');
    const timerContainer = document.querySelector('.timer-display');
    
    // Update timer every second using setInterval()
    timerInterval = setInterval(function() {
        timeRemaining--;
        
        // Update timer display using DOM manipulation
        timerDisplay.textContent = timeRemaining;
        
        // Add urgency styling when time is low
        if (timeRemaining <= 5) {
            timerContainer.style.background = 'rgba(255, 71, 87, 0.3)';
            timerContainer.style.borderColor = 'rgba(255, 71, 87, 0.5)';
        }
        
        // Check if 5 seconds remaining - display warning message
        if (timeRemaining === 5) {
            warningMessage.style.display = 'block';
        }
        
        // Auto-submit when timer reaches zero
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);  // Stop the timer
            submitQuiz();  // Auto-submit the quiz
        }
    }, 1000);
}

// Function to update progress bar
function updateProgress() {
    const totalQuestions = 5;
    let answeredQuestions = 0;
    
    // Count answered questions
    for (let i = 1; i <= totalQuestions; i++) {
        const questionAnswered = document.querySelector(`input[name="q${i}"]:checked`);
        if (questionAnswered) {
            answeredQuestions++;
        }
    }
    
    // Calculate and update progress
    const progressPercentage = (answeredQuestions / totalQuestions) * 100;
    document.getElementById('progress-fill').style.width = progressPercentage + '%';
}

// Function to submit quiz
function submitQuiz() {
    // Stop the timer using clearInterval()
    clearInterval(timerInterval);
    
    // Calculate score
    letDisplay personalized score message
    const scoreMessage = document.getElementById('score-message');
    if (score === 5) {
        scoreMessage.textContent = '🎯 Perfect Score! Outstanding!';
        scoreMessage.style.color = '#27ae60';
    } else if (score >= 4) {
        scoreMessage.textContent = '🌟 Excellent Work!';
        scoreMessage.style.color = '#2ecc71';
    } else if (score >= 3) {
        scoreMessage.textContent = '👍 Good Job!';
        scoreMessage.style.color = '#3498db';
    } else if (score >= 2) {
        scoreMessage.textContent = '📚 Keep Learning!';
        scoreMessage.style.color = '#f39c12';
    } else {
        scoreMessage.textContent = '💪 Practice Makes Perfect!';
        scoreMessage.style.color = '#e74c3c';
    }
    
    //  score = 0;
    
    // Loop through each question and check answers using the object
    for (let question in correctAnswers) {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        
        if (selectedOption && selectedOption.value === correctAnswers[question]) {
            score++;
        }
    }
    
    // Disable all options after submission
    const allInputs = document.querySelectorAll('input[type="radio"]');
    allInputs.forEach(function(input) {
        input.disabled = true;
    });
    
    // Disable submit button
    document.getElementById('submit-btn').disabled = true;
    
    // Display the score using DOM manipulation
    document.getElementById('score').textContent = score;
    document.getElementById('result-section').style.display = 'block';
    
    // Update timer display to 0 if not already
    document.getElementById('timer').textContent = '0';
    
    // Scroll to results
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth' });
}
