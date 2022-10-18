const button = document.querySelector(".dice");

button.addEventListener("click", getAdvice);

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let id = `${data.slip.id}`;
      let output = `${data.slip.advice}`;
      console.log(data.slip.advice);
      document.querySelector(".title").innerHTML = `Advice #  ${id}`;
      document.querySelector(".advice").innerHTML = output;
    });
}
