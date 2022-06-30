const button = document.querySelector('[data-button]');

button.addEventListener('click', newAdvice);

newAdvice();
async function newAdvice() {
  const idElement = document.querySelector('[data-id]');
  const adviceElement = document.querySelector('[data-advice]');
  const {
    slip: { advice, id },
  } = await getData();

  idElement.innerText = id;
  adviceElement.innerText = advice;
}

async function getData() {
  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();
  return data;
}
