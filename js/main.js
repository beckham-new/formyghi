// Ganti password sesuai keinginanmu
const PAGE_PASSWORD = "10";

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const errorMsg = document.getElementById("errorMsg");

  if (input === PAGE_PASSWORD) {
    window.location.href = "home.html";
  } else {
    errorMsg.textContent = "You Forgot Babe? 😢";
  }
}

// Random quotes
const quotes = [
  "Aku tidak butuh alasan untuk mencintaimu.",
  "Kamu rumahku, di mana pun aku berada.",
  "Waktu berhenti setiap kali kamu tersenyum.",
  "Kalau bisa, aku ingin bersamamu setiap detik."
];

const quoteText = document.getElementById("quoteText");
if (quoteText) {
  quoteText.textContent = quotes[Math.floor(Math.random() * quotes.length)];
}
