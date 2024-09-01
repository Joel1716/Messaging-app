/// VARIABLES
const inputTarget = document.querySelector(".js-input");
const alertMessage = document.querySelector(".alert-message");
const mainMessages = document.querySelector(".js-message");
const buttonSend = document.querySelector(".js-button");

buttonSend.addEventListener("click", clicked);
function clicked() {
  const newMessage = document.createElement("div");
  newMessage.innerHTML = inputTarget.value;
  console.log(inputTarget.value);
  newMessage.classList.add("user-message");
  mainMessages.appendChild(newMessage);
  inputTarget.value = "";
  alertMessage.style.marginTop = "1.5rem";
}
inputTarget.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    clicked();
  }
});
