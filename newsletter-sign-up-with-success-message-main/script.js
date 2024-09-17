const newsletterCta = document.getElementById("newsletter-cta");
const form = document.getElementById("form");
const successMessage = document.getElementById("newsletter-success");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  newsletterCta.classList.add("hide");
  successMessage.classList.remove("hide");
})