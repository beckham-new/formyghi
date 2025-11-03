const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const startBtn = document.getElementById("startBtn");
const playAgainBtn = document.getElementById("playAgainBtn");
const gameOverScreen = document.getElementById("gameOverScreen");
const finalScore = document.getElementById("finalScore");

let gameOver = false;
let score = 0;
let arrows = [];
let targetImage = new Image();
targetImage.src = "images/ball1.jpg"; // ganti sesuai gambar target

let target = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 100
};

startBtn.addEventListener("click", startGame);
playAgainBtn.addEventListener("click", startGame);

// Handle klik / tap
canvas.addEventListener("click", shoot);
canvas.addEventListener("touchstart", (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  const rect = canvas.getBoundingClientRect();
  const x = touch.clientX - rect.left;
  const y = touch.clientY - rect.top;
  shoot({x, y});
});

function shoot(pos) {
  if(gameOver) return;

  let x, y;
  if(pos){
    x = pos.x;
    y = pos.y;
  } else {
    // default click
    const rect = canvas.getBoundingClientRect();
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;
  }

  arrows.push({ x, y });
  
  // cek apakah kena target
  let dx = x - target.x;
  let dy = y - target.y;
  let distance = Math.sqrt(dx*dx + dy*dy);
  if(distance <= target.radius){
    score++;
  } else {
    // kena di luar target = game over
    endGame();
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // gambar target
  ctx.drawImage(targetImage, target.x - target.radius, target.y - target.radius, target.radius*2, target.radius*2);

  // gambar panah
  arrows.forEach(arrow => {
    ctx.beginPath();
    ctx.arc(arrow.x, arrow.y, 5, 0, Math.PI*2);
    ctx.fillStyle = "#7B113A";
    ctx.fill();
    ctx.closePath();
  });

  // skor
  ctx.fillStyle = "#FBFBFB";
  ctx.font = "20px Poppins";
  ctx.fillText("Skor: " + score, 10, 25);

  if(!gameOver) requestAnimationFrame(draw);
}

function startGame() {
  score = 0;
  arrows = [];
  gameOver = false;
  gameOverScreen.classList.remove("show");
  draw();
}

function endGame() {
  gameOver = true;
  finalScore.textContent = "Skor Akhir: " + score;
  gameOverScreen.classList.add("show");
}
