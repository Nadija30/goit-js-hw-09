import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('.form')
const options = {
  position: 'center-bottom',
  distance: '15px',
  borderRadius: '15px',
  timeout: 10000,
  clickToClose: true,
  cssAnimationStyle: 'from-right',
};
form.addEventListener('click', onSubmit);


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
function onSubmit(evt) {
  evt.preventDefault();
  const { delay, step, amount } = evt.currentTarget.elements;
  let inputDelay = Number(delay.value);
  let inputStep = Number(step.value);
  let inputAmount = Number(amount.value);

  for (let i = 1; i <= inputAmount; i += 1) {
    if (inputDelay < 0 || inputStep < 0 || inputAmount <= 0) {
       Notify.failure(
       ` please enter values ​​greater than zero!`,
       options
       );
      delay.value = '';
      step.value = '';
      amount.value = '';
      return
    } else {
      createPromise(i, inputDelay)
        .then(({ position, delay }) => {
          Notify.success(
            ` Fulfilled promise ${position} in ${delay}ms`,
            options
          );
        })
        .catch(({ position, delay }) => {
          Notify.failure(
            ` Rejected promise ${position} in ${delay}ms`,
            options
          );
        });
      inputDelay += inputStep;
    }
      evt.currentTarget.reset();
    }
}