var date=new Date()
var sec=date.getSeconds()
var min=date.getMinutes()
var hou=date.getHours()

var secdeg=90+sec*6
var mindeg=90+min*6
var houdeg=90+(hou*30)+(30*min/60)
// initial time
const x = document.querySelector(".second")
const y = document.querySelector(".minute")
const z = document.querySelector(".hour")
x.style.transform=`rotate(${secdeg}deg)`
y.style.transform=`rotate(${mindeg}deg)`
z.style.transform=`rotate(${houdeg}deg)`

function playClock(){
setTimeout(function abcd() {
    secdeg=secdeg+6
    x.style.transform=`rotate(${secdeg}deg)`
    console.log("+1sec!")
        if ((secdeg-90)%360==0) {
            mindeg=mindeg+6
                if ((mindeg-90)%12==0) {
                    houdeg=houdeg+6
                    z.style.transform=`rotate(${houdeg}deg)`
                    console.log("+1hou!");
                }
            y.style.transform=`rotate(${mindeg}deg)`
            console.log("+1min!")
                
        }
    playClock();
}, 1000)
}