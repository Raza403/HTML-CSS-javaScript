var circle = 0;
var hw = 0;
var i = 0;
var startTime = new Date().getTime();
var circleStart = 0;
var endTime = 0;
var timeTaken = 0;
var colors = ["red", "blue", "green", "black", "pink", "purple", "brown"]

document.getElementById('firstCircle').onclick = function () {

    document.getElementById('firstCircle').style.display = "none";
    document.getElementById('circle').style.height = "80px";
    document.getElementById('circle').style.width = "80px";
    document.getElementById('circle').style.backgroundColor = "green";
    document.getElementById('circle').style.marginTop = "60px";
    document.getElementById('circle').style.marginLeft = "230px";
    endTime = new Date().getTime();
    timeTaken = (endTime - startTime) / 1000;
    document.getElementById('time').innerHTML = timeTaken + " sec"
}

document.getElementById('circle').onclick = function () {
    circle = Math.floor((Math.random() * 2) + 1)
    if (circle > 1) {
        document.getElementById('circle').style.borderRadius = "50%";
    } else {
        document.getElementById('circle').style.borderRadius = "0px";
    }
    i = Math.floor(Math.random() * 7)
    hw = Math.floor((Math.random() * 200) + 50)
    document.getElementById('circle').style.backgroundColor = colors[i];
    document.getElementById('circle').style.width = hw + "px";
    document.getElementById('circle').style.height = hw + "px";
    document.getElementById('circle').style.position = "relative"
    document.getElementById('circle').style.marginTop = Math.floor((Math.random() * 250) + 70) + "px";
    document.getElementById('circle').style.marginLeft = Math.floor((Math.random() * 800) + 50) + "px";
    endTime = new Date().getTime();
    timeTaken = (endTime - startTime) / 1000;
    document.getElementById('time').innerHTML = timeTaken + " sec"
    startTime = new Date().getTime();
}