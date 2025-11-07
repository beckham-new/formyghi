// Ganti password sesuai keinginanmu
const PAGE_PASSWORD = "10";

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const errorMsg = document.getElementById("errorMsg");

  if (input === PAGE_PASSWORD) {
    window.location.href = "main.html";
  } else {
    errorMsg.textContent = "You Forgot Babe? 😢";
  }
}

// Random quotes
const quotes = [
  "I don't need a reason to love you.", 
  "You are my home, wherever I am.", 
  "Time stops every time you smile.", 
  "If I could, I would want to be with you every second."
];

const quoteText = document.getElementById("quoteText");
if (quoteText) {
  quoteText.textContent = quotes[Math.floor(Math.random() * quotes.length)];
}
