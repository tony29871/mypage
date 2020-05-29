const startbtn = document.querySelector('#w_stopwatch #start');
const resetbtn = document.querySelector('#reset');

let timeElapsed =0;

let stopwatchFuntion = function(){
    timeElapsed++;
    let minute = Math.floor(timeElapsed / 60);
    let second = timeElapsed % 60;

    if (minute < 10)
        minute = '0' + minute;
    if (second < 10)
        second = '0' + second;

    let timenow = minute + ":" + second;

    let timeshown = document.querySelector('#w_stopwatch h1');
    timeshown.textContent = timenow;
}

let a;
startbtn.onclick = function(){
    let curState = document.querySelector('#start').textContent;
    if(curState ==='start'){
        document.querySelector('#start').textContent = 'stop';
        a = setInterval(stopwatchFuntion,1000);    
    }
    else{
        document.querySelector('#start').textContent = 'start';
        clearInterval(a);
    }

}

resetbtn.onclick = function(){
    timeElapsed = 0;
    let timeshown = document.querySelector('#w_stopwatch h1');
    timeshown.textContent = '00:00';
}