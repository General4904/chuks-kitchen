console.log(`Hello World`);

document.addEventListener("DOMContentLoaded", () => {
  // Select all forms on Sign In or Sign Up pages
  const authForms = document.querySelectorAll(".login-container form");

  authForms.forEach((form) => {
    form.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent the actual "login" attempt
      window.location.href = "categories.html"; // Go straight to the food!
    });
  });
});
