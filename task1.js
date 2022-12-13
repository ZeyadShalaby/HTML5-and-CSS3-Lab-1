var video = document.getElementById('vid1');
var playBar = document.querySelector('.playbar');
var play = document.getElementById('play').addEventListener('click', play);
var pause = document.getElementById('pause').addEventListener('click', pause);
var mute = document.getElementById('mute').addEventListener('click', mute);
var toRight1 = document.getElementById('toRight1').addEventListener('click', slowHalf);
var toRight2 = document.getElementById('toRight2').addEventListener('click', slowOne);
var toLeft1 = document.getElementById('toLeft1').addEventListener('click', speedHalf);
var toLeft2 = document.getElementById('toLeft2').addEventListener('click', speedOne);

var timestamp = document.getElementById('timestamp').addEventListener('onchange', timeupdate);

var volume = document.getElementById('volume').addEventListener('onchange', volumeSet);

var speed = document.getElementById('speed').addEventListener('onchange', );

var slider = document.querySelector('.slider')


function play(){
    video.play();
 }

 function pause(){
    video.pause();
 }

function mute(){
    if(video.volume === 0){
        video.volume=1;     
    }
    else if (video.volume !=0){
        video.volume = 0;
    }
}

function speedHalf(){
    video.playbackRate = video.playbackRate + 0.5
}
function speedOne(){
    video.playbackRate = video.playbackRate + 1
}

function slowHalf(){
    video.playbackRate = video.playbackRate - 0.5
}
function slowOne(){
    video.playbackRate = video.playbackRate - 1
}

function volumeSet(){
    video.volume = volume.value / 100;
}

function timeupdate(){
    var timestamp = video.currentTime / video.duration;
}


