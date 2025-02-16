const $adviceId = document.querySelector("#adviceId");
const $advice = document.querySelector("#advice");
const $adviceBtn = document.querySelector("#adviceButton");

const getAdvice = async () => {
  const result = await fetch("https://api.adviceslip.com/advice");
  const data = await result.json();

  return data.slip;
};

const render = async () => {
  const data = await getAdvice();

  $adviceId.innerHTML = data.id;
  $advice.innerHTML = data.advice;
};

$adviceBtn.addEventListener("click", () => render());

render();
