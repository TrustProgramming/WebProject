const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (item) {
  item.addEventListener("click", function (box) {
    if (box.target.id === 'white') {
      body.style.backgroundColor = 'white';
    }
    if (box.target.id === 'blue') {
      body.style.backgroundColor = 'blue';
    }
    if (box.target.id === 'grey') {
      body.style.backgroundColor = 'gray';
    }
    if (box.target.id === 'yellow') {
      body.style.backgroundColor = 'yellow';
    }
    if (box.target.id === 'red') {
      body.style.backgroundColor = 'red';
    }
    if (box.target.id === 'green') {
      body.style.backgroundColor = 'green';
    }
  });
});
