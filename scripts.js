const targetDate = new Date("2026-07-03T00:00:00-03:00");
const daysValue = document.getElementById("daysValue");
const hoursValue = document.getElementById("hoursValue");
const minutesValue = document.getElementById("minutesValue");
const secondsValue = document.getElementById("secondsValue");
const currentTimeElement = document.getElementById("currentTime");
const countdownContainer = document.getElementById("countdownContainer");

const daysItem = document.getElementById("days");
const hoursItem = document.getElementById("hours");
const minutesItem = document.getElementById("minutes");
const secondsItem = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysValue.textContent = String(days).padStart(2, '0');
    hoursValue.textContent = String(hours).padStart(2, '0');
    minutesValue.textContent = String(minutes).padStart(2, '0');
    secondsValue.textContent = String(seconds).padStart(2, '0');
  } else {
    daysValue.textContent = "00";
    hoursValue.textContent = "00";
    minutesValue.textContent = "00";
    secondsValue.textContent = "00";
  }

  updateCurrentTime();
}

function updateCurrentTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "America/Sao_Paulo",
  });
  currentTimeElement.textContent = `Horário atual: ${timeString}`;
}

function launchConfetti(element) {
  const rect = element.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  confetti({
    particleCount: 50,
    spread: 60,
    origin: { x: x / window.innerWidth, y: y / window.innerHeight },
    colors: ["#b91c1c", "#dc2626", "#ef4444", "#f87171", "#fca5a5"],
    scalar: 0.6,
    shapes: ['circle'],
    gravity: 0.8,
    drift: 0.1,
  });
}

daysItem.addEventListener("mouseenter", () => launchConfetti(daysItem));
hoursItem.addEventListener("mouseenter", () => launchConfetti(hoursItem));
minutesItem.addEventListener("mouseenter", () => launchConfetti(minutesItem));
secondsItem.addEventListener("mouseenter", () => launchConfetti(secondsItem));

setInterval(updateCountdown, 1000);
updateCountdown();
