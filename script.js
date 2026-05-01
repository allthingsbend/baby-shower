// Fade-in sections as people scroll
const fadeItems = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

fadeItems.forEach((item) => observer.observe(item));

// Countdown timer
const countdown = document.querySelector('.countdown');

function updateCountdown() {
  if (!countdown) return;

  const eventDate = new Date(countdown.dataset.eventDate).getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  if (distance <= 0) {
    daysEl.textContent = '0';
    hoursEl.textContent = '0';
    minutesEl.textContent = '0';
    secondsEl.textContent = '0';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Tiny button sparkle effect on RSVP click
const rsvpButtons = document.querySelectorAll('a[href="#rsvp"]');

rsvpButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.textContent = 'See you there ✿';
    setTimeout(() => {
      button.textContent = 'RSVP';
    }, 1600);
  });
});
