/// VARIABLES
const inputTarget = document.querySelector(".js-input");
const alertMessage = document.querySelector(".alert-message");
const mainMessages = document.querySelector(".js-message");
const buttonSend = document.querySelector(".js-button");

buttonSend.addEventListener("click", clicked);
function clicked() {
  const trueTime = new Date().toLocaleString("en-Us", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const newMessage = document.createElement("div");
  newMessage.classList.add("user-message");
  const message = document.createElement("p");
  message.innerHTML = inputTarget.value;
  const timeHtml = document.createElement("p");
  timeHtml.innerHTML = trueTime;
  timeHtml.classList.add("user-timer");
  timeHtml.style.width = "65px";
  timeHtml.style.bottom = "-16px";
  newMessage.append(message, timeHtml);
  mainMessages.appendChild(newMessage);
  inputTarget.value = "";
  alertMessage.style.marginTop = "1.5rem";
}
inputTarget.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    clicked();
  }
});
