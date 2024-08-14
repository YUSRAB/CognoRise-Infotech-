document.addEventListener('DOMContentLoaded', () => {
    const targetDateInput = document.getElementById('targetDate');
    const startButton = document.getElementById('startCountdown');
    const countdownDisplay = document.getElementById('countdown');
    const daysSpan = document.getElementById('days');
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');

    let countdownInterval;

    function startCountdown(targetDate) {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }

        countdownInterval = setInterval(() => {
            const now = new Date();
            const timeDifference = targetDate - now;

            if (timeDifference <= 0) {
                clearInterval(countdownInterval);
                countdownDisplay.innerHTML = '<div>Countdown Complete!</div>';
                return;
            }

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            daysSpan.textContent = days.toString().padStart(2, '0');
            hoursSpan.textContent = hours.toString().padStart(2, '0');
            minutesSpan.textContent = minutes.toString().padStart(2, '0');
            secondsSpan.textContent = seconds.toString().padStart(2, '0');
        }, 1000);
    }

    startButton.addEventListener('click', () => {
        const targetDateValue = targetDateInput.value;
        if (!targetDateValue) {
            alert('Please set a valid date and time.');
            return;
        }

        const targetDate = new Date(targetDateValue);
        startCountdown(targetDate);
    });
});
