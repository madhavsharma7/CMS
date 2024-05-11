function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


// Function to create a new FAQ section
function createFaqSection() {
    var faqContainer = document.querySelector('.section_3-below');

    // Create two new FAQ divs
    for (var i = 0; i < 2; i++) {
        var newFaqDiv = document.createElement('div');
        newFaqDiv.classList.add('faq');

        // Add elements to the new FAQ div
        newFaqDiv.innerHTML = `
            <h4> FAQs </h4>
            <input type="text">
            <h4>Description</h4>
            <textarea class="description"></textarea>
        `;

        // Append the new FAQ div to the container
        faqContainer.appendChild(newFaqDiv);
    }
}

// Event listener for the Add FAQ button
document.getElementById('addFaqBtn').addEventListener('click', createFaqSection);


function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdown-menu");
    var dropdownIcon = document.getElementById("dropdown-icon");
    
    if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
        dropdownMenu.style.display = "block";
        dropdownIcon.classList.remove("fa-angle-down");
        dropdownIcon.classList.add("fa-angle-up");
    } else {
        dropdownMenu.style.display = "none";
        dropdownIcon.classList.remove("fa-angle-up");
        dropdownIcon.classList.add("fa-angle-down");
    }
}



// Get all dropdown toggle links
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

// Loop through each dropdown toggle link
dropdownToggles.forEach(toggle => {
    // Add click event listener to each toggle link
    toggle.addEventListener('click', function() {
        // Toggle 'active' class on click to show/hide dropdown menu
        this.classList.toggle('active');
    });
});
