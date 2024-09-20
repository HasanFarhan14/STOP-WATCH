// function startTimer() {
//     // var count=0;
//     // count++
//     console.log("running")
// }

// setInterval(startTimer,1000)

// setInterval(function () {
//     var count = 0;
//     count++;
//     console.log(count)
// }, 1000)
var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;

var HourHeading = document.getElementById('hour')
var MinHeading = document.getElementById('min')
var SecHeading = document.getElementById('sec')
var MsecHeading = document.getElementById('msec')

var start = document.getElementById('start')
var pause = document.getElementById('pause')
var reset = document.getElementById('reset')
var interval;

function StartTimer() {
    msec++
    MsecHeading.innerHTML = msec;
if(msec>=100){
    sec++
    SecHeading.innerHTML=sec;
    msec=0;

}
else if(sec>=60){
    min++;
    MinHeading.innerHTML=min;
    sec=0;
}
else if(min>=60){
    hour++;
    HourHeading.innerHtml=hour;
    min=0;
}
}

 function Start() {
    interval=setInterval(StartTimer, 10)
 }

 function Pause(){
    clearInterval(interval)
 }

 function Reset(){
    hour=0;
    min=0;
    msec=0;
    sec=0;

    HourHeading.innerHtml=hour; 
    MinHeading.innerHTML=min;
    SecHeading.innerHTML=sec;
    MsecHeading.innerHTML = msec;
    pause();
 }