let timer = document.getElementById("timer");
let startTime;
let elapsedTime = 0;
let interval;
let isRun = false;

function start() {
    if (!isRun) {
        isRun = true;
        startTime = Date.now()-elapsedTime;
        interval = setInterval(updateTime, 10);
    }
}

function stop() {
    if (isRun) {
        isRun = false;
        clearInterval(interval);
    }
}

function reset(){
    stop();
    elapsedTime = 0;
    updateDisplay();
}

function updateTime() {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
}

function updateDisplay() {
    let miliseconds = Math.floor((elapsedTime % 1000) / 10);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
    let hours = Math.floor((elapsedTime / 1000 / 60 / 60) % 24);

    timer.textContent =
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds) + ":" +
        (miliseconds < 10 ? "0" + miliseconds : miliseconds);
}












