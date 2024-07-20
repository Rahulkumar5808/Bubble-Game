var score=0;
var select;
var ran;

function makeBubble(){
    var clutter="";

for(var i=0;i<125;i++){
    var rn= Math.floor(Math.random()*10);
    clutter += `<div class=bubble>${rn}</div>`;
}
var c=document.querySelector(".bottom");
c.innerHTML=clutter;
}

function timer(){
    var time=60;
    var timerVal= setInterval(function(){
    if(time>0){
        time--;
        document.querySelector("#timer").textContent=time;
    }
    else{
        clearInterval(timerVal);
        document.querySelector(".bottom").innerHTML="<h1>Game Over</h1>";
    }
    },1000);
}

function hit(){
    ran= Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=ran;
}

function incScore(){
    score += 10;
    document.querySelector("#score").textContent=score;
}

var btm=document.querySelector(".bottom");
btm.addEventListener("click",function(dets){
    select=Number(dets.target.textContent);
    if(ran===select){
        incScore();
        makeBubble();
        hit();
    }
})


makeBubble();
hit();
timer();

