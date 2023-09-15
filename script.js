// Get references to the input field and output div
const userInputField = document.getElementById('userInput');
const outputDiv = document.getElementById('output');

// Generate a unique color based on the device's IP address (for simplicity)
const userColor = getUserColor();

// Get reference to the submit button and add a click event listener
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', () => {
    // Get the user input from the input field
    const userInput = userInputField.value;

    // Create a new <div> element to display the user input with the assigned color
    const userOutput = document.createElement('div');
    userOutput.style.color = userColor;
    userOutput.textContent = `User: ${userInput}`;

    // Append the <div> element to the output div
    outputDiv.appendChild(userOutput);

    // Clear the input field
    userInputField.value = '';
});

// Function to generate a unique color based on the device's IP address (for simplicity)
function getUserColor() {
    const ipAddress = generateUserIdentifier(); // Generate a unique identifier (e.g., based on IP address)
    const randomColor = getRandomColor();
    const userColor = `#${ipAddress}${randomColor.substring(1)}`;
    return userColor;
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to generate a unique identifier (e.g., based on IP address)
function generateUserIdentifier() {
    // You can implement logic here to generate a unique identifier (e.g., based on IP address).
    // For simplicity, we'll generate a random identifier.
    return Math.random().toString(36).substring(2, 15);
}