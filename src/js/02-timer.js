import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const buttonStart = document.querySelector("button");
const inputPicker = document.getElementById("datetime-picker");
const days = document.querySelector("span[data-days]");
const hours = document.querySelector("span[data-hours]");
const minutes = document.querySelector("span[data-minutes]");
const seconds = document.querySelector("span[data-seconds]");
const timer = document.querySelector(".timer");
timer.style.display = "flex";
timer.style.gap = "16px";
timer.style.fontSize = "24px";
days.style.fontSize = "48px";
hours.style.fontSize = "48px";
minutes.style.fontSize = "48px";
seconds.style.fontSize = "48px";

buttonStart.setAttribute("disabled", "true");

let userTime = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        
        if (selectedDates[0] < options.defaultDate) {
            Notiflix.Notify.failure("Please choose a date in the future");
            buttonStart.setAttribute("disabled", "true");
        };
        if (selectedDates[0] > options.defaultDate) {
            buttonStart.removeAttribute("disabled");
        };
        
        userTime = selectedDates[0];
        
    },
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
    return value.toString().padStart(2, "0");
};

buttonStart.addEventListener("click", onClickStart);

function onClickStart() {
   
    const interval = setInterval(() => {
        let selectedTime = userTime - new Date();
        let selectedTimeMs = convertMs(selectedTime); 

    days.textContent = addLeadingZero(selectedTimeMs.days);
    hours.textContent = addLeadingZero(selectedTimeMs.hours);
    minutes.textContent = addLeadingZero(selectedTimeMs.minutes);
    seconds.textContent = addLeadingZero(selectedTimeMs.seconds);
        
    if (selectedTime <= 1000) {
            clearInterval(interval);
        }
    }, 1000);
        
    buttonStart.setAttribute("disabled", "true");
    inputPicker.setAttribute("disabled", "true")
};