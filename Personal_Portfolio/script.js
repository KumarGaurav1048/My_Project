alert("Welcome to Kumar Gaurav's Portfolio!");

document.querySelectorAll("nav a").forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("You clicked: " + link.textContent);
    });
});