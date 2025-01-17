const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    number = btn.value;

    changeBackgroundColor(number);
  });
});

const body = document.body;
function changeBackgroundColor(number) {
  body.className = "";
  switch (number) {
    case "1":
      body.classList.add("background-1");
      break;
    case "2":
      body.classList.add("background-2");
      break;
    case "3":
      body.classList.add("background-3");
      break;
    default:
      break;
  }
}
