
let milliSeconds = 0;
let seconds = 0;
let minutes = 0;

let newMilliSeconds = 0;
let newSeconds = 0;
let newMinutes = 0;

let interval = null;
let timerStatus = "stopped";

let stopWatchCounter = () => {
    milliSeconds++;

    if (milliSeconds/100 === 1) {
        milliSeconds = 0;
        seconds++;
    }
    if (seconds/60 === 1) {
        seconds = 0;
        minutes++;
    }

    if (milliSeconds < 10) {
        newMilliSeconds = "0" + milliSeconds;
    }else {
        newMilliSeconds = milliSeconds;
    }
    if (seconds < 10) {
        newSeconds = "0" + seconds;
    }else {
        newSeconds = seconds;
    }
    if (minutes < 10) {
        newMinutes = "0" + minutes;
    }else {
        newMinutes = minutes;
    }
    document.getElementById("displayContent").innerHTML = newMinutes + ":" + newSeconds + ":" + newMilliSeconds;
}
   
const buttons = document.getElementById("buttons");

buttons.addEventListener("click",(e) => {
    if (timerStatus === '<i class="far fa-pause-circle"></i>') {
                    interval = window.setInterval(stopWatchCounter,10);
                    document.getElementById("buttons").innerHTML = '<i class="far fa-pause-circle"></i>';
                    timerStatus = '<i class="far fa-play-circle">';
                }else {
                    window.clearInterval(interval);
                    document.getElementById("buttons").innerHTML = '<i class="far fa-play-circle">';
                    timerStatus = '<i class="far fa-pause-circle"></i>';
            }
});


 const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click", (e) => {
        window.clearInterval(interval);
     milliSeconds = 0;
     seconds = 0;
     minutes = 0;
     document.getElementById("displayContent").innerHTML = "00:00:00";
     document.getElementById("buttons").innerHTML = '<i class="far fa-play-circle">';
    })
     
 