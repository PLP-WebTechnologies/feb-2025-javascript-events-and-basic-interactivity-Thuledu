// Event Handling
document.getElementById('clickButton').addEventListener('click', function() {
    alert("Button was clicked!");
});

document.getElementById('hoverText').addEventListener('mouseover', function() {
    this.style.color = 'blue';
});

document.getElementById('hoverText').addEventListener('mouseout', function() {
    this.style.color = 'black';
});

document.getElementById('keypressInput').addEventListener('keypress', function(event) {
    console.log(`Key pressed: ${event.key}`);
});

// Bonus: Double-click action
document.getElementById('clickButton').addEventListener('dblclick', function() {
    alert("Double-click detected!");
});

// Interactive Elements
document.getElementById('changeTextButton').addEventListener('click', function() {
    this.textContent = "Text Changed!";
});

// Form Validation
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (name === "" || email === "" || password.length < 8) {
        document.getElementById('formFeedback').textContent = "Please fill out all fields correctly.";
    } else {
        document.getElementById('formFeedback').textContent = "Form submitted successfully!";
        // Here you can add code to actually submit the form if needed
    }
});

