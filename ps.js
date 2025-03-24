document.addEventListener("DOMContentLoaded", function() {
    // Prompt for the password
    const password = prompt("Please enter the password to access the content:");

    // Define the correct password
    const correctPassword = "dass"; // Set your password here

    // Check if the entered password is correct
    if (password !== correctPassword) {
        // If the password is incorrect, display an error message and hide the content
        alert("Incorrect password. You do not have access to this content.");
        document.body.innerHTML = "";
    }
});