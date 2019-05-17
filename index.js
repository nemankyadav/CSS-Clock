const sound = new Audio("Tick.mp3")
const x = document.querySelector(".second")
const y = document.querySelector(".minute")
const z = document.querySelector(".hour")

function playClock(){
    date=new Date
    x.style.transform=`rotate(${90+date.getSeconds()*6}deg)`
    y.style.transform=`rotate(${90+date.getMinutes()*6}deg)`
    z.style.transform=`rotate(${90+(date.getHours()*30)+(30*date.getMinutes()/60)}deg)`
    sound.play();
}
a=setInterval(playClock, 1000);

function playClock0(){
    date=new Date
    x.style.transform=`rotate(${90+date.getSeconds()*6}deg)`
    y.style.transform=`rotate(${90+date.getMinutes()*6}deg)`
    z.style.transform=`rotate(${90+(date.getHours()*30)+(30*date.getMinutes()/60)}deg)`
}

flag=0;
function soundButton() {
    flag++
    if(flag%2==1){clearInterval(a);b=setInterval(playClock0, 1000)}
    if(flag%2==0){clearInterval(b);a=setInterval(playClock, 1000)}
}