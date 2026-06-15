const dateText = document.getElementById('dateText');
const timeText = document.getElementById('timeText');

function updateClock() {
  const now = new Date();
  dateText.textContent = now.toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  }).toUpperCase();

  timeText.textContent = now.toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: '2-digit'
  });
}

updateClock();
setInterval(updateClock, 30000);
