import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      };
    }, delay);
    });
};
  
const form = document.querySelector("form");

form.addEventListener("submit", onSubmitClick);

function onSubmitClick(event) {
const firstDelay = Number(form[0].value);
const delayStep = Number(form[1].value);
const amount = Number(form[2].value);

  event.preventDefault();
  
  for (let i = 1; i <= amount; i++) {
    let delay = firstDelay + delayStep * (i - 1);

    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  };
};
