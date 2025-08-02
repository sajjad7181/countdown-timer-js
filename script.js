// countdown-timer.js

/**
 * Countdown Timer: Counts down from a given time (in seconds) to 0
 * Example: countDownTimer(120) -> 02:00 ... 00:00
 */
function countDownTimer(durationInSeconds) {
    let timeLeft = durationInSeconds;

    const timer = () => {
        const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
        const seconds = String(timeLeft % 60).padStart(2, "0");

        console.log(`${minutes}:${seconds}`);

        if (timeLeft === 0) {
            clearInterval(intervalId);
            console.log("Click to re-send!");
        }

        timeLeft--;
    };

    // Start immediately
    timer();

    // Update every second
    const intervalId = setInterval(timer, 1000);
}

// Example usage
countDownTimer(120); // Starts countdown from 02:00
