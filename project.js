
// Show work in progress modal on page load
const wipModal = document.getElementById('wipModal');
const closeBtn = document.querySelector('.close-btn');

// Close modal when close button is clicked
closeBtn.addEventListener('click', function() {
    wipModal.classList.add('hidden');
});

// Close modal when clicking outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === wipModal) {
        wipModal.classList.add('hidden');
    }
});

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

    //declare name variables within the function to ensure they are updated with the current form values each time the button is clicked
    const nameInput = document.getElementById('name'); // Get the user's name from the form input
    const name = nameInput.value; // Store the user's name in a variable
    //Display a loading message while the form is being processed
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.textContent = "Sending your message...";

    // Simulate form processing with a timeout
    setTimeout(function() {
        confirmationMessage.textContent = `Thank you for your message, ${name}! I will get back to you soon.`;
    }, 2000); // Simulate a 2-second processing time
    contactForm.reset(); // Reset the form after submission
});

//add a delayed notification message to the page above the about me section using setTimeout
setTimeout(function() {
    const notification = document.createElement('div');
    notification.textContent = "Head to my projects page to see what I've been working on!";
    notification.style.position = "fixed";
    notification.style.top = "10px";
    notification.style.left = "50%";
    notification.style.transform = "translateX(-50%)";
    notification.style.backgroundColor = "#c5caa7";
    notification.style.padding = "20px";
    notification.style.border = "1px solid #3d2607";
    notification.style.borderRadius = "5px";
    notification.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
    document.body.appendChild(notification);
}, 3000);

//modify existing elements on the page

// Define Project class
class Project {
    constructor(title, summary, imageUrl, link) {
        this.title = title;
        this.summary = summary;
        this.imageUrl = imageUrl;
        this.link = link;
    }
}

// Create project instances
const project1 = new Project(
    "Portfolio Website",
    "A personal website to showcase my most recent projects, including websites that contain CSS and animation.",
    "C:\\Users\\Megan\\OneDrive - ECPI University\\SDC260\\ProjectPage.png",
    "https://megan-amber.github.io/"
);

const project2 = new Project(
    "Storefront Website",
    "A website for a gluten free bakery to display their products, with a description and availability, all within a table.",
    "C:\\Users\\Megan\\OneDrive - ECPI University\\SDC260\\StorePage.png",
    "#"
);

const project3 = new Project(
    "Megan's Personal Library Java Program",
    "A Java program for managing a personal library collection.",
    "C:\\Users\\Megan\\OneDrive - ECPI University\\SDC355 - Javascript\\Starter Files\\Starter Files\\Project\\MeganPersonalLibraryJava.png",
    "https://github.com/megan-amber/MegansHomeLibrary"
);

// Array of project objects
const projectData = [project1, project2, project3];

// On page load, check sessionStorage for projects
let projects;
const storedProjects = sessionStorage.getItem('projects');
if (storedProjects) {
    projects = JSON.parse(storedProjects);
} else {
    projects = projectData;
    sessionStorage.setItem('projects', JSON.stringify(projects));
}

// Render projects dynamically
const projectsSection = document.getElementById('projects');
const tbody = projectsSection.querySelector('tbody');
tbody.innerHTML = ''; // Clear existing rows

projects.forEach(project => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td><a href="${project.link}" target="_blank">${project.title}</a></td>
        <td>${project.summary}</td>
        <td><img src="${project.imageUrl}" alt="${project.title}" height="100px" width="200px"></td>
    `;
    tbody.appendChild(tr);
});
//Animate the welcome message by changing its color every second using setInterval
const welcomeMsg = document.getElementById("welcomeMsg");
const colors = ["#eaedd8", "#bfc78c", "#5c755a", "#71532b", "#3d2607"];
let colorIndex = 0;
setInterval(() => {
    welcomeMsg.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}, 500);

//Animate the featured content header by changing its font size every .5 seconds using setInterval
/*const featuredHeader = document.getElementById("featuredHeader");
let fontSize = 24;
let increasing = true;
setInterval(() => {
    if (increasing) {
        fontSize += 2;
        if (fontSize >= 36) {
            increasing = false;
        }
    } else {
        fontSize -= 2;
        if (fontSize <= 24) {
            increasing = true;
        }
    }
    featuredHeader.style.fontSize = `${fontSize}px`;
}, 500);*/