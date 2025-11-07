// Bintang kelap-kelip di background
document.addEventListener("DOMContentLoaded", () => {
  const starContainer = document.querySelector(".starry-bg");
  if (!starContainer) return;

  const starCount = 90;
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDuration = 1.5 + Math.random() * 2 + "s";
    starContainer.appendChild(star);
  }
});
