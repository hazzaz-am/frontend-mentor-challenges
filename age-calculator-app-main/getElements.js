// get all input fields
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

// get form
const dataInputForm = document.querySelector(".data__input--form")

// get error messages
let required = document.querySelector(".required");
let dayError = document.querySelector(".day__error");
let monthError = document.querySelector(".month__error");
let yearError = document.querySelector(".year__error");
let validDayError = document.querySelector(".valid--day__error");
let validMonthError = document.querySelector(".valid--month__error");
let validYearError = document.querySelector(".valid--year__error");

// get all labels
let labelDay = document.querySelector(".label__day");
let labelMonth = document.querySelector(".label__month");
let labelYear = document.querySelector(".label__year");

// get all output fields
const yearsPlaceholder = document.querySelector(".years__placeholder");
const monthsPlaceholder = document.querySelector(".months__placeholder");
const daysPlaceholder = document.querySelector(".days__placeholder");

// get submit button
const submit = document.getElementById("submit");