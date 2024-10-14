// default error style
function defaultErrorStyle() {
  day.classList.add("input__error");
  month.classList.add("input__error");
  year.classList.add("input__error");
  labelDay.classList.add("label__error");
  labelMonth.classList.add("label__error");
  labelYear.classList.add("label__error");
  focusColorChange();
}

// valid day error
function validDayErrorMessage() {
  // validDayError.style.opacity = 1;
  // validDayError.style.visibility = "visible";
  validDayError.style.display = "block";
}

function validMonthErrorMessage() {
  // validMonthError.style.opacity = 1;
  // validMonthError.style.visibility = "visible";
    validMonthError.style.display = "block";
}

function validYearErrorMessage() {
  // validYearError.style.opacity = 1;
  // validYearError.style.visibility = "visible";
    validYearError.style.display = "block";
}

function removeErrorClasses() {
  validDayError.style.display = "none";
  validMonthError.style.display = "none";
  validYearError.style.display = "none";
  // validDayError.style.opacity = 0;
  // validDayError.style.visibility = "hidden";
  // validMonthError.style.opacity = 0;
  // validMonthError.style.visibility = "hidden";
  // validYearError.style.opacity = 0;
  // validYearError.style.visibility = "hidden";

  // default error styling
  day.classList.remove("input__error");
  month.classList.remove("input__error");
  year.classList.remove("input__error");
  labelDay.classList.remove("label__error");
  labelMonth.classList.remove("label__error");
  labelYear.classList.remove("label__error");
}

function focusColorChange() {
  for (const input of inputs) {
    input.addEventListener("focus", () => {
      removeErrorClasses()
    })
  }
}