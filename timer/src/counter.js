import './style.css';
//import './howler.js';  до оптимизации
import { Howl } from 'howler';
import sounds from './assets/sounds.mp3';

var myTimer;

var start = document.getElementById("start");
var stop = document.getElementById("stop");

start.onclick = clock;
stop.onclick = stopTimer;

function clock() {
    myTimer = setInterval(myClock, 1000);
    var c = +document.getElementById("in").value;

    function myClock() {
        document.getElementById("demo").innerHTML = --c;
        if (c == 10) {
            var sound = new Howl({
                src: ['./src/sounds.mp3'],
            });
            sound.play();
        } else if (c === 0) {
            clearInterval(myTimer);
            alert("Reached zero");
        }
    }
}

function stopTimer() {
    clearInterval(myTimer);
}