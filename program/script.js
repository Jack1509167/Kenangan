const startDate = new Date("2025-08-20");

function updateCounter() {
  const now = new Date();

  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("countdown").innerHTML = days + " Hari";
}

updateCounter();

setInterval(updateCounter, 1000);

// Sakura Animation

function createSakura() {
  const sakura = document.createElement("div");

  sakura.innerHTML = "🌸";

  sakura.style.position = "fixed";
  sakura.style.left = Math.random() * 100 + "vw";

  sakura.style.top = "-20px";

  sakura.style.fontSize = Math.random() * 20 + 15 + "px";

  document.body.appendChild(sakura);

  let pos = 0;

  const timer = setInterval(() => {
    pos++;

    sakura.style.top = pos + "vh";

    if (pos > 100) {
      clearInterval(timer);

      sakura.remove();
    }
  }, 40);
}

setInterval(createSakura, 250);

// Loading Screen

window.onload = () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 2000);
};
