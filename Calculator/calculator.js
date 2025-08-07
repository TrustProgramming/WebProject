const light = document.getElementById("light");
const dark = document.getElementById("dark");

if (light.checked) setTheme("light");
if (dark.checked) setTheme("dark");

function setTheme(theme) {
  const page = document.getElementById("page");
  page.className = `whole ${theme}`;
}
light.addEventListener("change", () => {
  if (light.checked) {
    setTheme("light");
  }
});
dark.addEventListener("change", () => {
  if (dark.checked) {
    setTheme("dark");
  }
});

const input = document.getElementById("number");
const butttons = document.querySelectorAll("button");

butttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "Clear") {
      input.value = "";
    } else if (value === "C") {
      input.value = input.value.slice(0, -1);
    } else if (value === "=") {
      try {
        input.value = eval(input.value.replace(/×/g, "*").replace(/÷/g, "/"));
      } catch {
        input.value = "Error";
      }
    } else {
      input.value += value;
    }
  });
});
