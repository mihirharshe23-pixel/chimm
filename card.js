/* Floating hearts generator */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️‍🔥";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 4) + "s";
  heart.style.fontSize = (16 + Math.random() * 20) + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 400);

/* Button behavior */
let noClicks = 0;
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");

noBtn.addEventListener("click", () => {
  noClicks++;

  if (noClicks <= 5) {
    let scale = 1 - (noClicks * 0.15);
    const x = Math.random() * 160 - 80;
    const y = Math.random() * 160 - 80;

    noBtn.style.transform = `scale(${scale}) translate(${x}px, ${y}px)`;
    yesBtn.style.transform = `scale(${1 + noClicks * 0.2})`;
  }

  if (noClicks > 5) {
    noBtn.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => { const duration = 2 * 1000; 
  const animationEnd = Date.now() + duration; const interval = setInterval(function() { if (Date.now() > animationEnd) { return clearInterval(interval); } confetti({ particleCount: 100, spread: 580, startVelocity: 30, ticks: 60, origin: { x: Math.random(), y: Math.random() - 0.2 } }); }, 250); });

yesBtn.addEventListener("click", () => {
  result.innerHTML = "YAY!! I knew you'd come around bobudiii 💘";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});
