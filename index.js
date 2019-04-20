var date=new Date()
var sec=date.getSeconds()
var min=date.getMinutes()
var hou=date.getHours()

const x = document.querySelector(".second");

setTimeout(function abcd() {
    x.style.transform=`rotate(${90+1}deg)`
    console.log("transformed!")
}, 1000)
