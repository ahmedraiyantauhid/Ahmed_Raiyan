// Navigation to the Main Website
function navigateToMainSite() {
    document.querySelector('.welcome-page').style.display = 'none';
    document.querySelector('.main-content').style.display = 'block';
}

// Password Prompt for Secret Page
function showPasswordPrompt() {
    const password = prompt("Enter the password to access the secret page:");
    if (password === "goongoon") {
        document.querySelector('.main-content').style.display = 'none';
        document.querySelector('.secret-page').style.display = 'block';
    } else {
        alert("Incorrect password.");
    }
}

// Navigation Back to Home
function navigateToHome() {
    document.querySelector('.secret-page').style.display = 'none';
    document.querySelector('.main-content').style.display = 'block';
}

// Adding Active Class to Menu Links
const menuLinks = document.querySelectorAll('.curved-menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        menuLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});