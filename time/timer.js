const tstartbtn = document.querySelector('#start');
const tresetbtn = document.querySelector('#reset');
let minLeft = document.querySelector('#m_timer');
let minLeft = document.querySelector('#s_timer');

let timeLeft = 100;

let timerStart = function(){
    timeleft--;
    let minLeft = Math.floor(timeleft/60);
    let secLeft = timeleft%60;

    if(min<10) minLeft = '0'+ minLeft;
    if(sec<10) secLeft = '0'+secLeft;

    let timeleftNow = minLeft +':'+secLeft;

    let timerTime = document.querySelector('#w_timer h1');
    timerTime.textContent = timeleftNow;
}