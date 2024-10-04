// Select the output div and button element
const output = document.querySelector("#output");
const button = document.querySelector("#set-alarm");

/**
 * Sets an alarm after 1 second.
 * Displays a message in the output element.
 */
function setAlarm() {
    // Display an initial message before the alarm goes off
    output.textContent = "Alarm is set, wait for it...";

    // Set a timeout to display "Wake up!" after 1 second (1000 milliseconds)
    setTimeout(() => {
        output.textContent = "Wake up!";
    }, 1000);
}

// Add an event listener to the button to set the alarm on click
button.addEventListener("click", () => {
    // Check if there is already an alarm message displayed
    if (output.textContent === "Wake up!") {
        output.textContent = ""; // Clear the previous message
    }
    setAlarm(); // Call setAlarm to start a new alarm
});
