/// VARIABLES
const inputTarget = document.querySelector(".js-input");
const alertMessage = document.querySelector(".alert-message");
const mainMessages = document.querySelector(".js-message");
const buttonSend = document.querySelector(".js-button");

buttonSend.addEventListener("click", clicked);
function clicked() {
  // CREATING THE CURRENT TIME
  const trueTime = new Date().toLocaleString("en-Us", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  // CREATING NEW ELEMENT AND GIVING IT THE GENERAL CLASS
  const newMessage = document.createElement("div");
  newMessage.classList.add("user-message");
  // CREATED ANOTHER ELEMENT AND KEPT THE VALUE INSIDE
  const message = document.createElement("p");
  message.innerHTML = inputTarget.value;
    // Created the element for the time and kept the time value created before inside it and positioned it well on the page
  const timeHtml = document.createElement("p");
  timeHtml.innerHTML = trueTime;
  timeHtml.classList.add("user-timer");
  timeHtml.style.width = "65px";
  timeHtml.style.bottom = "-16px";
  // Kept the two sub-elements inside the main container
  newMessage.append(message, timeHtml);
   // Kept all the elements in the main element on the page
  mainMessages.appendChild(newMessage);
  // Made the input empty after sending the message
  inputTarget.value = "";
  alertMessage.style.marginTop = "1.5rem";
}
// Send the message when you click the 'Enter' key
inputTarget.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    clicked();
  }
});
