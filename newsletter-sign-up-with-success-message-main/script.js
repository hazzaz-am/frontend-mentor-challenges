const newsletterCta = document.getElementById("newsletter-cta");
const form = document.getElementById("form");
const input = document.getElementById("email");
const successMessage = document.getElementById("newsletter-success");
const error = document.getElementById("error");
const successEmail = document.getElementById("success-email")

// Email validation
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // check there is any value or not
  if (input.value === "") {
    return alert("Please Enter Your Email Address")
  }

  // check email is valid or not
  if (validateEmail(input.value)) {
    newsletterCta.classList.add("hide");
    successMessage.classList.remove("hide");
    successEmail.innerText = input.value
  } else {
    error.classList.remove("hide");
    input.classList.add("invalid");
  }

  // remove error message
  input.addEventListener("input", () => {
    error.classList.add("hide");
    input.classList.remove("invalid");
  });

});