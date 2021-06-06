function ColorGen() {
    var HexCd = ['#'];
    var charset = '0123456789abcdef';
    var i = 0; 
    while (i<6) {
        HexCd.push(charset.charAt(Math.floor(charset.length*Math.random())));
        i++;
    }
    return HexCd.join('');
}
function PercentGen(limit) {
    var RandomNum = [];
    var Rand = Math.floor(limit*Math.random());
    if (Rand == 0) {
        Rand = 1
    }
    RandomNum.push(Rand.toString());
    RandomNum.push('%');
    return RandomNum.join('');
}
function StartButton() {
    document.getElementById("TestBox").style.backgroundColor = 'gray';
    document.getElementById("TestBox").style.width = '100%';
    document.getElementById("TestBox").style.height = '100%';
    document.getElementById("TestBox").style.borderRadius = '0%';
    document.getElementById("TestBox").style.top = '0%';
    document.getElementById("TestBox").style.left = '0%';
    document.getElementById("TestBox").innerHTML = "Click here to play"; 
}
function PlayButton() {
    document.getElementById("Result").innerHTML = '';
    document.getElementById("TestBox").style.backgroundColor = ColorGen();
    document.getElementById("TestBox").style.width = PercentGen(40);
    document.getElementById("TestBox").style.height = PercentGen(40);
    document.getElementById("TestBox").style.borderRadius = PercentGen(50);
    document.getElementById("TestBox").style.top = PercentGen(70);
    document.getElementById("TestBox").style.left = PercentGen(70);
    document.getElementById("TestBox").innerHTML = ''; 
}
var GameState = 'Start';
var GameTime = 0;
StartButton();
document.getElementById("TestBox").onclick = function() {
    if (GameState=='Play') {
        clearInterval(GameWatch);
        document.getElementById("Result").innerHTML = GameTime.toString()+'ms';
        StartButton();
        GameState = 'Start';
        GameTime = 0;
    } else {
        GameState = 'Play';
        PlayButton();
        GameWatch = setInterval(function(){GameTime+=1;}, 1);
    }
}