const ratings = document.getElementById("rating");
const submitBtn = document.getElementById("submit");
const thankYouComponent = document.querySelector(".thank-you-state");
const ratingState = document.querySelector(".rating-state");
const ratingValue = document.querySelector(".rating-value");

// selected rating

// select rating
ratings.addEventListener("click", (e) => {
  const hasClass = ratings.querySelector(".active") !== null;
  const activeElement = ratings.querySelector(".active");

  if (e.target.tagName === "BUTTON") {
    if (!hasClass || e.target.id === activeElement?.id) {
      e.target.classList.toggle("active");
    } else {
      activeElement.classList.remove("active");
      e.target.classList.add("active");
    }
  }
});

// submit rating
submitBtn.addEventListener("click", () => {
  const activeElement = ratings.querySelector(".active");
  activeElement.classList.remove("active");
  thankYouComponent.style.display = "block";
  ratingState.style.display = "none";
  ratingValue.innerText = activeElement.innerText;
});
