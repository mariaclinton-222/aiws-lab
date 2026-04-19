# AIWD-EX-5 - JavaScript Timer Applications

This repository contains two JavaScript applications demonstrating advanced timer functionality, DOM manipulation, and event handling.

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Programs](#programs)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Test Cases](#test-cases)
- [Screenshots](#screenshots)

## 🎯 Project Overview

This project consists of two main applications:
1. **Quiz App with Timer** - An interactive JavaScript quiz with a countdown timer
2. **Event Countdown Timer** - A countdown timer embedded in an event registration form

## 📁 Programs

### Program 1: Quiz App with Timer

A JavaScript Quiz Application that displays 5 MCQs with a 10-second duration timer.

**Key Features:**
- ⏱️ 10-second countdown timer using `setInterval()`
- ⚠️ Warning message at 5 seconds remaining
- 🔄 Auto-submission when timer reaches zero
- 📊 Score calculation with visual feedback
- 🎨 Modern dark theme with glassmorphism design
- ✅ Answer validation using JavaScript objects
- 🚫 Disabled inputs after submission
- 📱 Fully responsive design

**Files:**
- `program1/index.html` - Quiz structure with 5 MCQs
- `program1/script.js` - Timer logic and quiz functionality
- `program1/style.css` - Modern dark theme styling

### Program 2: Event Countdown Timer

An Event Countdown Timer integrated with an event registration form.

**Key Features:**
- ⏰ Live countdown displaying Days, Hours, Minutes, Seconds
- 📅 Uses JavaScript Date object for calculations
- 🔄 Updates every second with `setInterval()`
- 🚫 "Registration Closed" message when countdown ends
- 📝 Full event registration form
- 🎨 Beautiful gradient design
- 🛑 Form disables automatically when time expires
- 📱 Mobile responsive

**Files:**
- `program2/index.html` - Registration form with countdown
- `program2/script.js` - Countdown timer logic
- `program2/style.css` - Event page styling

## ✨ Features

### Quiz App (Program 1)
- **Timer Management**
  - Starts automatically on page load
  - Decrements every second
  - Visual progress bar
  - Golden gradient timer display
  
- **User Experience**
  - 5 JavaScript-related MCQs
  - Question numbers with gradient badges
  - Hover effects on options
  - Selection highlighting
  - Animated submit button

- **Results Display**
  - Animated score reveal
  - Circular score display with glow effect
  - Personalized messages based on performance
  - Smooth transitions

### Event Countdown (Program 2)
- **Real-time Countdown**
  - Calculates time difference in milliseconds
  - Converts to Days/Hours/Minutes/Seconds
  - Updates every second
  - Stops at zero with `clearInterval()`

- **Registration Form**
  - Full name, email, phone validation
  - Company/Organization field
  - Role selection dropdown
  - Session preference
  - Terms and conditions checkbox

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with:
  - Glassmorphism effects
  - CSS Grid & Flexbox
  - Animations & Transitions
  - Custom properties
  - Media queries
- **JavaScript (ES6+)** - Core functionality:
  - `setInterval()` / `clearInterval()`
  - Date object manipulation
  - DOM manipulation methods
  - Event listeners
  - Object-based data storage
  - Arrow functions

## 📥 Installation

1. Clone the repository:
```bash
git clone https://github.com/shahiilr/AIWD-EX-5.git
cd AIWD-EX-5
```

2. Open the programs:
```bash
# Quiz App
cd program1
# Open index.html in your browser

# Event Countdown Timer
cd program2
# Open index.html in your browser
```

No additional dependencies or build steps required!

## 🚀 Usage

### Quiz App
1. Open `program1/index.html` in a web browser
2. The 10-second timer starts automatically
3. Answer the 5 multiple-choice questions
4. Submit manually or wait for auto-submission
5. View your score and personalized message

### Event Countdown Timer
1. Open `program2/index.html` in a web browser
2. View the live countdown to the event
3. Fill out the registration form
4. Submit before the countdown reaches zero
5. Form disables when registration closes

## 🧪 Test Cases

### Quiz App Test Cases (TC01-TC10)

| Test ID | Feature | Description | Expected Output |
|---------|---------|-------------|-----------------|
| TC01 | Timer Initialization | Timer starts on page load | Timer starts from 10 seconds |
| TC02 | Timer Countdown | Timer decreases every second | Timer decrements correctly |
| TC03 | Warning Message | Warning appears at 5 seconds | "⚠️ Only 5 seconds remaining!" displayed |
| TC04 | Auto Submission | Quiz submits when timer = 0 | Quiz submits automatically |
| TC05 | Timer Stop | Timer stops after submission | `clearInterval()` executed |
| TC06 | Object Usage | Answers stored in objects | Correct retrieval from object |
| TC07 | Score Calculation | Score based on correct answers | Accurate score displayed |
| TC08 | Input Disable | Options disabled after submit | All inputs have `disabled` property |
| TC09 | DOM Manipulation | Dynamic UI updates | Updates without page reload |
| TC10 | Overall Functionality | Complete workflow test | Timed, interactive, error-free |

### Event Countdown Test Cases

| Feature | Test | Expected Output |
|---------|------|-----------------|
| Date Calculation | Future date set correctly | Countdown shows correct time remaining |
| Timer Update | Updates every second | All fields (D/H/M/S) update dynamically |
| Zero State | Countdown reaches 0 | "Registration Closed" message appears |
| Form Disable | Time expires | All form inputs disabled |
| Mathematical Conversion | Time conversion | Milliseconds → Days/Hours/Minutes/Seconds |

## 📸 Screenshots

### Quiz App

![Quiz Main Screen](screenshots/quiz-main.png)
*Quiz interface with timer and first question*

![Quiz Warning](screenshots/quiz-warning.png)
*Warning message displayed at 5 seconds*

![Quiz Results](screenshots/quiz-results.png)
*Score display with animated results*

### Event Countdown Timer

![Event Countdown](screenshots/countdown-timer.png)
*Live countdown display with registration form*

![Registration Form](screenshots/registration-form.png)
*Complete event registration form*

![Registration Closed](screenshots/registration-closed.png)
*State when countdown reaches zero*

## 📝 Code Highlights

### Timer Implementation (Quiz)
```javascript
function startTimer() {
    timerInterval = setInterval(function() {
        timeRemaining--;
        document.getElementById('timer').textContent = timeRemaining;
        
        if (timeRemaining === 5) {
            // Show warning message
            warningMessage.style.display = 'block';
        }
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
        }
    }, 1000);
}
```

### Countdown Calculation (Event)
```javascript
function updateCountdown() {
    const now = new Date();
    const timeDifference = eventDate - now;
    
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    // Update DOM
}
```

## 🎨 Design Features

- **Dark Theme** with purple/blue gradients
- **Glassmorphism** effects with backdrop blur
- **Smooth Animations** for all interactions
- **Gradient Text** effects
- **Pulsing Animations** for urgency
- **Responsive Design** for all screen sizes
- **Custom Radio Buttons** with accent colors
- **Floating Cards** with layered shadows

## 👨‍💻 Author

**Shahiil R**
- GitHub: [@shahiilr](https://github.com/shahiilr)

## 📄 License

This project is part of the AI & Web Development coursework (Exercise 5).

## 🙏 Acknowledgments

- Modern UI/UX design principles
- JavaScript Timer best practices
- Glassmorphism design trends
- Responsive web design patterns

---

⭐ **Star this repository if you find it helpful!**

📧 **For questions or feedback, please open an issue.**
