function getTimeRemaining() {
  const now = new Date();
  const weddingDate = new Date('October 13, 2023 12:00:00');
  const total = weddingDate - now;

  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function updateCountdown() {
  const remainingTime = getTimeRemaining();

  document.getElementById('days').innerHTML = remainingTime.days;
  document.getElementById('hours').innerHTML = remainingTime.hours;
  document.getElementById('minutes').innerHTML = remainingTime.minutes;
  document.getElementById('seconds').innerHTML = remainingTime.seconds;
}

setInterval(updateCountdown, 1000);

