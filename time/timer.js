const tstartbtn = document.querySelector('#start');
const tresetbtn = document.querySelector('#reset');
let minbtn = document.querySelector('#m_timer');
let sbtn = document.querySelector('#s_timer');
let timerTime = document.querySelector('#w_timer h1');

let timeLeft = 100;

let timerStart = function(){
    timeleft--;
    let minLeft = Math.floor(timeleft/60);
    let secLeft = timeleft%60;

    if(min<10) minLeft = '0'+ minLeft;
    if(sec<10) secLeft = '0'+secLeft;

    let timeleftNow = minLeft +':'+secLeft;

    timerTime.textContent = timeleftNow;
}

let b;
tstartbtn.onclick = function(){
    let state = tstartbtn.textContent;
    if(curstate ==='start'){
        tstartbtn.textContent = 'stop';
        b= setInterval(timerStart,1000);
    }
    else{
        tstartbtn.textContent ='start';
        clearInterval(b); 
    }
}