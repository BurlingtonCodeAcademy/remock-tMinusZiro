//Variables
let submits = document.querySelectorAll(".send-message");
let msg = document.getElementById("msg");
let email = document.getElementById("mail");
let userName = document.getElementById("name");

//Event Listener
for (let submit of submits) {
  submit.addEventListener("click", submitAlert);
}
//Event Handler

function submitAlert() {
  alert("Submission Accepted");
  msg.value = " ";
  userName.value = " ";
  email.value = " ";
}
