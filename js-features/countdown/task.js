const timerCounter = function() {
    let startTimer = document.getElementById("timer");
    if(startTimer.textContent == 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(timerInterval);
    } else {
        startTimer.textContent--;
    }
}

const timerInterval = setInterval(timerCounter, 1000);



