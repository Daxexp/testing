document.addEventListener("DOMContentLoaded", function() {
    // Define the correct password
    const correctPassword = "your-password"; // Set your password here
    const maxAttempts = 3; // Maximum number of attempts
    let attempts = 0; // Initialize attempt counter

    // Function to display the password prompt
    function showPasswordPrompt() {
        const passwordPrompt = document.createElement("div");
        passwordPrompt.id = "passwordPrompt";
        passwordPrompt.style.position = "fixed";
        passwordPrompt.style.top = "50%";
        passwordPrompt.style.left = "50%";
        passwordPrompt.style.transform = "translate(-50%, -50%)";
        passwordPrompt.style.backgroundColor = "#fff";
        passwordPrompt.style.padding = "20px";
        passwordPrompt.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        passwordPrompt.style.textAlign = "center";
        passwordPrompt.style.zIndex = "1000";

        const passwordLabel = document.createElement("label");
        passwordLabel.textContent = "Please enter the password to access the content:";
        passwordLabel.style.display = "block";
        passwordLabel.style.marginBottom = "10px";

        const passwordInput = document.createElement("input");
        passwordInput.type = "password";
        passwordInput.id = "passwordInput";
        passwordInput.style.display = "block";
        passwordInput.style.marginBottom = "10px";
        passwordInput.style.padding = "10px";
        passwordInput.style.width = "100%";
        passwordInput.style.boxSizing = "border-box";

        const submitButton = document.createElement("button");
        submitButton.textContent = "Submit";
        submitButton.style.padding = "10px 20px";
        submitButton.style.backgroundColor = "#4CAF50";
        submitButton.style.color = "#fff";
        submitButton.style.border = "none";
        submitButton.style.cursor = "pointer";

        passwordPrompt.appendChild(passwordLabel);
        passwordPrompt.appendChild(passwordInput);
        passwordPrompt.appendChild(submitButton);
        document.body.appendChild(passwordPrompt);

        submitButton.addEventListener("click", checkPassword);
    }

    // Function to check the entered password
    function checkPassword() {
        const passwordInput = document.getElementById("passwordInput").value;
        attempts++;

        if (passwordInput === correctPassword) {
            localStorage.setItem("authenticated", "true");
            document.getElementById("passwordPrompt").remove();
        } else {
            alert("Incorrect password. Please try again.");

            if (attempts >= maxAttempts) {
                alert("Maximum attempts reached. You do not have access to this content.");
                document.body.innerHTML = "";
            }
        }
    }

    // Check if the user is already authenticated
    if (localStorage.getItem("authenticated") !== "true") {
        showPasswordPrompt();
    }
});