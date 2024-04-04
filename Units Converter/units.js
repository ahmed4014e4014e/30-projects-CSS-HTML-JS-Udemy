// Function for transforming the inputs into outputs
function inputToOutput() {
  const inputs = document.querySelectorAll(".contenders-container input");

  inputs.forEach((input) => {
    input.addEventListener("keyup", function (e) {
      if (e.keyCode === 13 && e.target.value !== "") {
        const targetInputValue = e.target.value;
        if (e.target.id == "mass") {
          e.target.parentElement.innerHTML = `<span class="output" id="mass">${targetInputValue}</span>`;
        } else {
          e.target.parentElement.innerHTML = `<span class="output" id="dis"> ${targetInputValue}</span>`;
        }
      }
    });
  });
}

inputToOutput();

// Function  for Converting the units

const lbsToKg = 0.45;
const inchToCm = 2.54;

const kgToLbs = 2.2;
const cmToInch = 0.393;

function convertUnitSystem() {
  const unitsSystem = document.querySelector(".units-system");
  //console.log(unitsSystem.childNodes);
  unitsSystem.addEventListener("click", () => {
    const allOutputs = document.querySelectorAll(".contenders-container span");

    allOutputs.forEach((output) => {
      if (unitsSystem.childNodes[3].checked == true && output.id == "mass") {
        output.innerHTML = (output.innerHTML * kgToLbs).toFixed(0);
      }
      if (unitsSystem.childNodes[3].checked == true && output.id == "dis") {
        output.innerHTML = (output.innerHTML * cmToInch).toFixed(0);
      }
      if (unitsSystem.childNodes[3].checked == false && output.id == "mass") {
        output.innerHTML = (output.innerHTML * lbsToKg).toFixed(0);
      }
      if (unitsSystem.childNodes[3].checked == false && output.id == "dis") {
        output.innerHTML = (output.innerHTML * inchToCm).toFixed(0);
      }
    });
  });
}

convertUnitSystem();
