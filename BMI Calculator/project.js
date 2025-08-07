const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const heightValue =document.querySelector("#first").value.trim();
  const weightValue =document.querySelector("#second").value.trim();
  const result = document.querySelector("#result");

  const height=parseInt(heightValue);
  const weight=parseInt(weightValue);

  if (heightValue === ""|| height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid Height ${height}`;
  } else if (weightValue === ""|| weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid Weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    result.innerHTML = `<span> Your BMI is : ${bmi}</span>`;
  }
});
