let timeLeft = 10;
const timerDisplay = document.getElementById('timer');
const explosion = document.getElementById('explosion');

const countdown = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(countdown);
        timerDisplay.style.display = 'none';
        explosion.style.display = 'block';
    }
}, 1000);
