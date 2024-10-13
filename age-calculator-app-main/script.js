// get all input fields
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

// get error messages
let required = document.querySelector(".required");
let dayError = document.querySelector(".day__error");
let monthError = document.querySelector(".month__error");
let yearError = document.querySelector(".year__error");
let validDayError = document.querySelector(".valid--day__error");
let validMonthError = document.querySelector(".valid--month__error");
let validYearError = document.querySelector(".valid--year__error");

// get all levels
let labelDay = document.querySelector(".label__day");
let labelMonth = document.querySelector(".label__month");
let labelYear = document.querySelector(".label__year");

// get all output fields
const yearsPlaceholder = document.querySelector(".years__placeholder");
const monthsPlaceholder = document.querySelector(".months__placeholder");
const daysPlaceholder = document.querySelector(".days__placeholder");

// get submit button
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  // get all the values of input
  let dayValue = day.value;
  let monthValue = month.value;
  let yearValue = year.value;

  // cheking the inputs are not empty
  if (dayValue === "" && monthValue === "" && yearValue === "") {
    dayError.style.display = "block";
    monthError.style.display = "block";
    yearError.style.display = "block";

    defaultErrorStyle();
    return;
  }

  const currentYear = new Date().getFullYear();
  // checking it is valid day, month and year
  if (
    parseInt(dayValue) > 31 &&
    parseInt(monthValue) > 12 &&
    parseInt(yearValue) > currentYear
  ) {
    validDayError.style.display = "block";
    validMonthError.style.display = "block";
    validYearError.style.display = "block";
    defaultErrorStyle();
    return;
  }

  calculateAge(parseInt(yearValue), parseInt(dayValue), parseInt(monthValue));
});

// default error style
function defaultErrorStyle() {
  day.classList.add("input__error");
  month.classList.add("input__error");
  year.classList.add("input__error");
  labelDay.classList.add("label__error");
  labelMonth.classList.add("label__error");
  labelYear.classList.add("label__error");
}

// calculate age
function calculateAge(year, month, day) {
  let now = new Date();
  let today = new Date(now.getYear(), now.getMonth(), now.getDate());
  console.log(today);

  let yearNow = now.getYear();
  let monthNow = now.getMonth() + 1;
  let dateNow = now.getDate();

  let dob = new Date(year, day, month);

  let yearDob = dob.getYear();
  let monthDob = dob.getMonth() + 1;
  let dateDob = dob.getDate();
  let monthAge, dateAge;

  let yearAge = yearNow - yearDob;

  if (monthNow >= monthDob) {
    monthAge = monthNow - monthDob;
    if (dateDob > dateNow) {
      dateAge = 31 - (dateDob - dateNow);
    } else if (dateDob === dateNow) {
      ++monthAge;
      dateAge = 0;
    }
  } else {
    monthAge = monthDob;
    --yearAge;
    if (dateDob < dateNow) {
      dateAge = dateNow - dateDob;
      --monthAge;
    }
  }

  let specificMonthDays = daysInMonth(monthAge, yearAge);
  console.log(specificMonthDays);

  if (dateAge > specificMonthDays) {
    validDayError.style.display = "block";
    day.classList.add("input__error");
    labelDay.classList.add("label__error");
    return;
  }
  // get all the values of output
  yearsPlaceholder.innerHTML = String(yearAge);
  monthsPlaceholder.innerHTML = String(monthAge);
  daysPlaceholder.innerHTML = String(dateAge);
}

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
