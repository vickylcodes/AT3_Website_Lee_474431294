$(document).ready(function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll("#nav-menu .nav-link").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Retrieve form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Perform additional validation if needed

    // Send form data to the server using AJAX or fetch API
    // You can customize this part based on your server-side implementation

    // Example using fetch API
    fetch("process-form.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    })
      .then(function (response) {
        // Handle response from the server
        // You can display a success message or handle errors here
        console.log(response);
      })
      .catch(function (error) {
        // Handle any error that occurred during the request
        console.error(error);
      });
  });

document.getElementById("help-link").addEventListener("mouseover", function () {
  document.getElementById("help-popup").style.display = "block";
});

document.getElementById("help-link").addEventListener("mouseout", function () {
  document.getElementById("help-popup").style.display = "none";
});
