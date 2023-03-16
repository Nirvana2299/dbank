import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async function () {
  update()
});



document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const button = event.target.querySelector("#submit-btn");
  console.log(button)
  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

  button.setAttribute("disabled", true);

  !isNaN(inputAmount) ? (button.setAttribute("value", "Adding..."), await dbank.topUp(inputAmount)) :
    !isNaN(outputAmount) ? (button.setAttribute("value", "Withdrawing..."), await dbank.withdrawl(outputAmount)) :
    button.setAttribute("value", "Updating...");

  await dbank.compound();


  update()
  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";
  button.removeAttribute("disabled");
  button.setAttribute("value", "Finalise Transaction")
})

async function update() {
  const currentBalance = await dbank.currentAmount();
  document.getElementById("value").innerText = parseFloat(currentBalance).toFixed(2);
}

