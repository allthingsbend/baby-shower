const showerDate = new Date("August 22, 2026 12:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = showerDate - now;
  const countdown = document.getElementById("countdown");

  if (!countdown) return;

  if (distance < 0) {
    countdown.innerHTML = "<p>Baby shower day is here!</p>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdown.innerHTML = `
    <div><strong>${days}</strong><span>Days</span></div>
    <div><strong>${hours}</strong><span>Hours</span></div>
    <div><strong>${minutes}</strong><span>Minutes</span></div>
    <div><strong>${seconds}</strong><span>Seconds</span></div>
  `;
}

setInterval(updateCountdown, 1000);
updateCountdown();

const revealItems = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (itemTop < windowHeight - 80) {
      item.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
