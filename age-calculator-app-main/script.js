submit.addEventListener("click", () => {
  // get all the values of input
  let dayValue = day.value;
  let monthValue = month.value;
  let yearValue = year.value;

  // cheking the inputs are not empty
  if (dayValue === "" && monthValue === "" && yearValue === "") {
    validDayErrorMessage();
    validMonthErrorMessage();
    validYearErrorMessage();

    defaultErrorStyle();
    return;
  } else if (dayValue === "") {
    validDayErrorMessage();
    defaultErrorStyle();
    return;
  } else if (monthValue === "") {
    defaultErrorStyle();
    validMonthErrorMessage();
    return;
  } else if (yearValue === "") {
    defaultErrorStyle();
    validYearErrorMessage();
    return;
  }

  const currentYear = new Date().getFullYear();
  // checking it is valid day, month and year

  if (
    (parseInt(dayValue) > 31 || parseInt(dayValue) <= 0) &&
    (parseInt(monthValue) > 12 || parseInt(monthValue) <= 0) &&
    (parseInt(yearValue) > currentYear || parseInt(yearValue) <= 0)
  ) {
    validDayErrorMessage();
    validMonthErrorMessage();
    validYearErrorMessage();
    defaultErrorStyle();
    return;
  } else if (parseInt(dayValue) > 31 || parseInt(dayValue) <= 0) {
    validDayErrorMessage();
    defaultErrorStyle();
    return;
  } else if (parseInt(monthValue) > 12 || parseInt(monthValue) <= 0) {
    validMonthErrorMessage();
    defaultErrorStyle();
    return;
  } else if (
    parseInt(yearValue) > currentYear ||
    parseInt(yearValue) <= 0 ||
    parseInt(yearValue) < 1000
  ) {
    validYearErrorMessage();
    defaultErrorStyle();
    return;
  }

  let specificMonthDays = daysInMonth(
    parseInt(monthValue),
    parseInt(yearValue)
  );

  if (parseInt(dayValue) > specificMonthDays) {
    validDayErrorMessage();
    day.classList.add("input__error");
    labelDay.classList.add("label__error");
    return;
  }

  calculateAge(parseInt(yearValue), parseInt(monthValue), parseInt(dayValue));
});

// calculate age
function calculateAge(year, month, day) {
  let now = new Date();

  let yearNow = now.getYear();
  let monthNow = now.getMonth() + 1;
  let dateNow = now.getDate();

  let dob = new Date(`${year}-${month}-${day}`);

  let yearDob = dob.getYear();
  let monthDob = dob.getMonth() + 1;
  let dateDob = dob.getDate();
  let monthAge, dateAge;

  let yearAge = yearNow - yearDob;

  if (monthNow > monthDob) {
    // when month now is gretaer than birth month this logic apply
    monthAge = monthNow - monthDob;
    if (dateNow > dateDob) {
      dateAge = dateNow - dateDob;
    } else if (dateNow < dateDob) {
      --monthAge;
      dateAge = 31 - (dateDob - dateNow);
    } else if (dateNow === dateDob) {
      dateAge = dateNow - dateDob;
    }
    // when month now is less than birth month this logic apply
  } else if (monthNow < monthDob) {
    --yearAge;
    monthAge = 12 - (monthDob - monthNow);
    if (dateNow > dateDob) {
      dateAge = dateNow - dateDob;
    } else if (dateNow < dateDob) {
      --monthAge;
      dateAge = 31 - (dateDob - dateNow);
    } else if (dateNow === dateDob) {
      dateAge = dateNow - dateDob;
    }
    // when month now is equal than birth month this logic apply
  } else if (monthNow === monthDob) {
    monthAge = monthNow - monthDob;
    if (dateNow > dateDob) {
      dateAge = dateNow - dateDob;
    } else if (dateNow < dateDob) {
      --yearAge;
      ++monthAge;
      monthAge = 12 - monthAge;
      dateAge = 31 - (dateDob - dateNow);
    } else if (dateNow === dateDob) {
      dateAge = dateNow - dateDob;
    }
  }

  removeErrorClasses();
  // get all the values of output
  yearsPlaceholder.innerHTML = String(yearAge);
  monthsPlaceholder.innerHTML = String(monthAge);
  daysPlaceholder.innerHTML = String(dateAge);
}

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function emptyInputField() {
  dataInputForm.reset();
}

// reset date of birth
dataInputForm.addEventListener("input", (e) => {
  if (e.target.nodeName == "INPUT") {
    removeErrorClasses();
    yearsPlaceholder.innerText = "--";
    monthsPlaceholder.innerText = "--";
    daysPlaceholder.innerText = "--";
  }
});
