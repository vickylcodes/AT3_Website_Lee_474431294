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
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var mobile = document.getElementById("mobile").value;
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
        firstName: firstName,
        lastName: lastName,
        mobile: mobile,
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

$(document).ready(function () {
  // Retrieve form elements
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const mobileInput = document.getElementById("mobile");
  const emailInput = document.getElementById("email");

  // Add event listeners for input validation
  firstNameInput.addEventListener("input", validateFirstName);
  lastNameInput.addEventListener("input", validateLastName);
  mobileInput.addEventListener("input", validateMobile);
  emailInput.addEventListener("input", validateEmail);

  function validateFirstName() {
    const firstName = firstNameInput.value.trim();
    if (firstName === "" || !/^[A-Za-z-]{2,}$/.test(firstName)) {
      showError(
        firstNameInput,
        "Please enter a valid first name (at least two letters, hyphens allowed)."
      );
    } else {
      hideError(firstNameInput);
    }
  }

  function validateLastName() {
    const lastName = lastNameInput.value.trim();
    if (lastName === "" || !/^[A-Za-z-]{2,}$/.test(lastName)) {
      showError(
        lastNameInput,
        "Please enter a valid last name (at least two letters, hyphens allowed)."
      );
    } else {
      hideError(lastNameInput);
    }
  }

  function validateMobile() {
    const mobile = mobileInput.value.trim();
    if (mobile === "" || !/^04\d{8}$/.test(mobile)) {
      showError(
        mobileInput,
        "Please enter a valid mobile number (starting with '04')."
      );
    } else {
      hideError(mobileInput);
    }
  }

  function validateEmail() {
    const email = emailInput.value.trim();
    if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
      showError(
        emailInput,
        "Please enter a valid email address (must include @)."
      );
    } else {
      hideError(emailInput);
    }
  }

  function showError(input, message) {
    input.classList.add("invalid");
    const errorSpan = document.createElement("span");
    errorSpan.className = "error-message";
    errorSpan.textContent = message;
    const errorContainer =
      input.parentElement.querySelector(".error-container");
    errorContainer.innerHTML = "";
    errorContainer.appendChild(errorSpan);
  }

  function hideError(input) {
    input.classList.remove("invalid");
    const errorContainer =
      input.parentElement.querySelector(".error-container");
    errorContainer.innerHTML = "";
  }
});
