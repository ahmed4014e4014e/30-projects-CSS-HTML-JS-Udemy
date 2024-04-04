const bill = document.getElementById("Bill");
const numOfPeople = document.getElementById("Popleamount");
const result = document.getElementById("Result");
let serviceQual = document.getElementById("ServiceQual");

result.style.display = "none";

const calculator = document.getElementById("Calculate");

calculator.addEventListener("click", calculateTip);

// Calculate Tip 

function calculateTip() {
    if(bill.value === "" || serviceQual.value === 0) {
        alert("Please enter a value");
        return;
    }
    if (numOfPeople.value === "" || numOfPeople.value <= 1) {
        numOfPeople.value = 1;
        result.style.display = "none";
    } else {
        result.style.display = "block";
    }

    let totalTip = bill.value * serviceQual.value;

    let totalBill_withTip = totalTip + parseInt(bill.value);

    let divTip = totalTip / numOfPeople.value;

    let div_totalBill_withTip = totalBill_withTip / numOfPeople.value;

    result.style.display = "block";
    document.getElementById("Tip").innerHTML = "$" + totalTip.toFixed(2);
    document.getElementById("Total_Bill_Tip").innerHTML = "$" + totalBill_withTip.toFixed(2);
    document.getElementById("Div_Tip").innerHTML = "$" + divTip.toFixed(2);
    document.getElementById("Div_Tip-Person").innerHTML = "$" + div_totalBill_withTip.toFixed(2);



}