function sendMessage(event) {
  event.preventDefault(); // prevent page refresh

  const name = document.getElementById("name").value;
  const response = document.getElementById("response");

  response.innerText = `Thanks for your message, ${name}! I’ll get back to you soon.`;

  // Optional: Clear form
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}
