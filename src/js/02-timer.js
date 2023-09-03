import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const buttonStart = document.querySelector("button");
const inputPicker = document.getElementById("datetime-picker");
buttonStart.setAttribute("disabled", "true");
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        if (selectedDates[0] < date) {
            alert("Please choose a date in the future");
            buttonStart.setAttribute("disabled", "true");
        };
        if (selectedDates[0] > date) {
            buttonStart.removeAttribute("disabled");
        };
        const selectedTime = selectedDates[0] - date;
    },
};
const date = new Date();

buttonStart.addEventListener("click", onClickStart);

function onClickStart() {
    const timerId = setInterval(callback, 1000);
};

flatpickr(inputPicker, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
    return padStart();
}
