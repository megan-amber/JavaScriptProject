
 //Use prompt function to ask user for their name and display a personalized welcome message
let userName = prompt("Please enter your name:");
if (userName) {
    document.getElementById("welcomeMsg").textContent = `Welcome to Megan's Homepage, ${userName}!`;
}

// Check number of projects in PersonalProjects and show/hide featured sections accordingly
const personalProjectsDiv = document.getElementById('PersonalProjects');
const universityResourcesDiv = document.getElementById('UniversityResources');

// Count the number of project links (assuming each <a> tag represents a project)
const projectCount = personalProjectsDiv.querySelectorAll('a').length;

if (projectCount >= 3) {
    // Hide UniversityResources if there are 3 or more projects
    universityResourcesDiv.style.display = 'none';
} else {
    // Show both if less than 3 projects
    universityResourcesDiv.style.display = 'block';
}

//Create an Array of skills or technologies and use a for loop to display the skills in the About Section
const skills = ["HTML", "CSS", "JavaScript", "Python", "SQL"];
const skillsList = document.getElementById("skills");
for (let i = 0; i < skills.length; i++) {
        const skillsItems = document.createElement('li');
        skillsItems.textContent = skills[i];
        skillsList.appendChild(skillsItems);
    }

// Dark Mode Toggle Functionality
const darkModeToggle = document.getElementById('darkModeToggle');

// Check for saved dark mode preference
const savedDarkMode = localStorage.getItem('darkMode') === 'true';
if (savedDarkMode) {
    document.body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}

// Toggle dark mode on checkbox change
darkModeToggle.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
    }
});

//Interactivity to the Form Submit Button
const contactForm = document.getElementById('contactForm');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    const nameInput = document.getElementById('name'); // Get the user's name from the form input
    const name = nameInput.value; // Store the user's name in a variable
    //Display a confirmation message using an alert with the user's name
    alert(`Thank you for contacting me, ${name}! Your message has been sent and I will get back to you soon.`);

    contactForm.reset(); // Reset the form after submission
});

