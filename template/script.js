// DOM elements - Selection screen
const selectionScreen = document.getElementById('selection-screen');
const stopwatchOption = document.getElementById('stopwatch-option');
const countdownOption = document.getElementById('countdown-option');

// DOM elements - Stopwatch screen
const stopwatchScreen = document.getElementById('stopwatch-screen');
const stopwatchDisplay = document.getElementById('stopwatch-display');
const stopwatchMs = document.getElementById('stopwatch-ms');
const stopwatchStartBtn = document.getElementById('stopwatch-start');
const stopwatchClearBtn = document.getElementById('stopwatch-clear');
const stopwatchBackBtn = document.getElementById('stopwatch-back');

// DOM elements - Countdown input screen
const countdownScreenInput = document.getElementById('countdown-screen-input');
const countdownDisplay = document.getElementById('countdown-display');
const countdownMs = document.getElementById('countdown-ms');
const digitButtons = document.querySelectorAll('.digit-btn[data-digit]');
const countdownSetBtn = document.getElementById('countdown-set');
const countdownClearInputBtn = document.getElementById('countdown-clear-input');
const countdownBackBtn = document.getElementById('countdown-back');

// DOM elements - Countdown running screen
const countdownScreenRunning = document.getElementById('countdown-screen-running');
const countdownDisplayRunning = document.getElementById('countdown-display-running');
const countdownRunningMs = document.getElementById('countdown-running-ms');
const countdownDisplayContainer = document.getElementById('countdown-display-container');
const countdownStartBtn = document.getElementById('countdown-start');
const countdownClearBtn = document.getElementById('countdown-clear');
const countdownResetBtn = document.getElementById('countdown-reset');
const countdownRunningBackBtn = document.getElementById('countdown-running-back');

// Variables for stopwatch
let stopwatchInterval;
let stopwatchTime = 0;
let stopwatchRunning = false;

// Variables for countdown
let countdownInterval;
let countdownTime = 0;
let countdownRunning = false;
let userSetTime = 0;
let inputDigits = ['0', '0', '0', '0', '0', '0']; // HH:MM:SS

// Event listeners for selection screen
stopwatchOption.addEventListener('click', () => showScreen(stopwatchScreen));
countdownOption.addEventListener('click', () => showScreen(countdownScreenInput));

// Event listeners for stopwatch screen
stopwatchStartBtn.addEventListener('click', toggleStopwatch);
stopwatchClearBtn.addEventListener('click', clearStopwatch);
stopwatchBackBtn.addEventListener('click', () => showScreen(selectionScreen));

// Event listeners for countdown input screen
digitButtons.forEach(button => {
    button.addEventListener('click', () => addDigit(button.dataset.digit));
});
countdownSetBtn.addEventListener('click', setCountdown);
countdownClearInputBtn.addEventListener('click', clearCountdownInput);
countdownBackBtn.addEventListener('click', () => showScreen(selectionScreen));

// Event listeners for countdown running screen
countdownStartBtn.addEventListener('click', toggleCountdown);
countdownClearBtn.addEventListener('click', clearCountdown);
countdownResetBtn.addEventListener('click', resetCountdownInput);
countdownRunningBackBtn.addEventListener('click', () => showScreen(selectionScreen));

/**
 * Show the specified screen and hide all others
 * @param {HTMLElement} screenToShow - The screen element to display
 */
function showScreen(screenToShow) {
    // Hide all screens
    selectionScreen.classList.remove('active');
    stopwatchScreen.classList.remove('active');
    countdownScreenInput.classList.remove('active');
    countdownScreenRunning.classList.remove('active');

    // Show the desired screen
    screenToShow.classList.add('active');

    // Reset elements if needed
    countdownDisplayContainer.classList.remove('flashing');
}

/**
 * Format time in milliseconds to HH:MM:SS string and milliseconds
 * @param {number} timeInMs - Time in milliseconds
 * @returns {Object} Object containing formatted time string and milliseconds
 */
function formatTime(timeInMs) {
    const totalSeconds = Math.floor(timeInMs / 1000);
    const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    const milliseconds = Math.floor((timeInMs % 1000) / 10).toString().padStart(2, '0');

    return {
        timeString: `${hours}:${minutes}:${seconds}`,
        ms: milliseconds
    };
}

// *** STOPWATCH FUNCTIONS ***

/**
 * Toggle stopwatch start/pause state
 */
function toggleStopwatch() {
    if (!stopwatchRunning) {
        // Start the stopwatch
        stopwatchRunning = true;
        stopwatchStartBtn.textContent = 'Pause';
        stopwatchStartBtn.classList.remove('start-btn');
        stopwatchStartBtn.classList.add('reset-btn');

        const startTime = Date.now() - stopwatchTime;
        stopwatchInterval = setInterval(() => {
            stopwatchTime = Date.now() - startTime;
            updateStopwatchDisplay();
        }, 10); // Update every 10ms for smoother display
    } else {
        // Pause the stopwatch
        stopwatchRunning = false;
        stopwatchStartBtn.textContent = 'Resume';
        stopwatchStartBtn.classList.remove('reset-btn');
        stopwatchStartBtn.classList.add('start-btn');
        clearInterval(stopwatchInterval);
    }
}

/**
 * Update the stopwatch display with current time
 */
function updateStopwatchDisplay() {
    const formattedTime = formatTime(stopwatchTime);
    stopwatchDisplay.textContent = formattedTime.timeString;
    stopwatchMs.textContent = formattedTime.ms;
}

/**
 * Reset the stopwatch to 00:00:00
 */
function clearStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    stopwatchRunning = false;
    stopwatchStartBtn.textContent = 'Start';
    stopwatchStartBtn.classList.remove('reset-btn');
    stopwatchStartBtn.classList.add('start-btn');
    updateStopwatchDisplay();
}

// *** COUNTDOWN FUNCTIONS ***

/**
 * Add a digit to the countdown input
 * @param {string} digit - The digit to add (0-9)
 */
function addDigit(digit) {
    // Shift digits left
    inputDigits.shift();
    inputDigits.push(digit);

    // Update display
    updateCountdownInputDisplay();
}

/**
 * Update the countdown input display
 */
function updateCountdownInputDisplay() {
    const hours = inputDigits[0] + inputDigits[1];
    const minutes = inputDigits[2] + inputDigits[3];
    const seconds = inputDigits[4] + inputDigits[5];

    countdownDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    countdownMs.textContent = '00';
}

/**
 * Clear the countdown input digits
 */
function clearCountdownInput() {
    inputDigits = ['0', '0', '0', '0', '0', '0'];
    updateCountdownInputDisplay();
}

/**
 * Set the countdown time and switch to running screen
 */
function setCountdown() {
    const hours = parseInt(inputDigits[0] + inputDigits[1]);
    const minutes = parseInt(inputDigits[2] + inputDigits[3]);
    const seconds = parseInt(inputDigits[4] + inputDigits[5]);

    // Calculate total time in milliseconds
    userSetTime = ((hours * 3600) + (minutes * 60) + seconds) * 1000;
    countdownTime = userSetTime;

    // Update display
    const formattedTime = formatTime(countdownTime);
    countdownDisplayRunning.textContent = formattedTime.timeString;
    countdownRunningMs.textContent = formattedTime.ms;

    // Show running screen
    showScreen(countdownScreenRunning);
}

/**
 * Toggle countdown start/pause state
 */
function toggleCountdown() {
    if (countdownTime <= 0) {
        return; // Don't start if time is 0
    }

    if (!countdownRunning) {
        // Start the countdown
        countdownRunning = true;
        countdownStartBtn.textContent = 'Pause';
        countdownStartBtn.classList.remove('start-btn');
        countdownStartBtn.classList.add('reset-btn');

        const startTime = Date.now();
        const initialCountdown = countdownTime;

        countdownInterval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            countdownTime = initialCountdown - elapsed;

            if (countdownTime <= 0) {
                // Countdown finished
                countdownFinished();
            } else {
                updateCountdownDisplay();
            }
        }, 10); // Update every 10ms for smoother display
    } else {
        // Pause the countdown
        countdownRunning = false;
        countdownStartBtn.textContent = 'Resume';
        countdownStartBtn.classList.remove('reset-btn');
        countdownStartBtn.classList.add('start-btn');
        clearInterval(countdownInterval);
    }
}

/**
 * Update the countdown display with current time
 */
function updateCountdownDisplay() {
    const formattedTime = formatTime(countdownTime);
    countdownDisplayRunning.textContent = formattedTime.timeString;
    countdownRunningMs.textContent = formattedTime.ms;
}

/**
 * Handle countdown completion
 */
function countdownFinished() {
    clearInterval(countdownInterval);
    countdownTime = 0;
    countdownRunning = false;
    countdownDisplayRunning.textContent = "00:00:00";
    countdownRunningMs.textContent = "00";

    // Hide start button when countdown is finished
    countdownStartBtn.style.display = 'none';

    // Start flashing effect
    countdownDisplayContainer.classList.add('flashing');
}

/**
 * Reset the countdown to the user-set time
 */
function clearCountdown() {
    clearInterval(countdownInterval);
    countdownTime = userSetTime;
    countdownRunning = false;
    countdownStartBtn.textContent = 'Start';
    countdownStartBtn.style.display = 'block';
    countdownStartBtn.classList.remove('reset-btn');
    countdownStartBtn.classList.add('start-btn');
    countdownDisplayContainer.classList.remove('flashing');
    updateCountdownDisplay();
}

/**
 * Go back to countdown input screen
 */
function resetCountdownInput() {
    clearInterval(countdownInterval);
    countdownRunning = false;
    showScreen(countdownScreenInput);
}

// Initialize displays
updateStopwatchDisplay();
updateCountdownInputDisplay();
