// let i = 0 
// let stop 
// function rec(){
//     console.log(i++);
//     if (i <= 10) {
//         rec()
//     }
//     stop = setTimeout(() => {
//         rec()
//         if (i == 10) {
//             clearInterval(stop)
//         }
//     },1000);
// }
// rec ()
// function hello() {
//     console.log("Salom");
// }
// setTimeout(hello,1000)
// setInterval(hello,1000)

// let date = new Date();
// console.log(date);

// let day = new Date().getDay();
// console.log(day);

// let month = new Date().getMonth()
// console.log(month);

// let year = new Date().getFullYear()
// console.log(year);

// let time = new Date().getTime()
// console.log(time);

// let hour = new Date().getHours()
// console.log(hour);

// let minut = new Date().getMinutes()
// console.log(minut);


const hours = document.querySelector(`.hours`)
const minutes = document.querySelector(`.minutes`) 
const secund = document.querySelector(`.secunds`)
const h = document.querySelector(`.h`)
const m = document.querySelector(`.m`)
const s = document.querySelector(`.s`)

function clock (){
    let time = new Date();
    let hour = new Date().getHours();
    let minut = new Date().getMinutes();
    let sec = new Date().getSeconds();
    hours.innerText = hour;
    minutes.innerText = minut;
    secund.innerHTML = sec;
    if (sec < 10) {
        secund.innerHTML = "0" + sec
    }else{
        secund.innerHTML = sec
    } 
    if (minut < 10) {
        minutes.innerHTML = "0" + minut
    }else{
        minutes.innerHTML = minut
    }
    if (hour < 10) {
        hours.innerHTML = "0" + hour
    }else{
        hours.innerHTML = hour
    }
    s.style.transform = `rotate(${sec * 6}deg)`
    m.style.transform = `rotate(${minut * 6}deg)`
    h.style.transform = `rotate(${hour * 30}deg)`
    setTimeout(() => {
        clock()
    },1000);
}
clock()
const tabsItem = [...document.querySelectorAll(`.tabsItem`)]
const tabsContentItem = [...document.querySelectorAll(`.tabsContentItem`)]
for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener(`click`,function(){
        for (let k = 0; k < tabsContentItem.length; k++) {
        tabsItem[k].classList.remove(`active`)
        tabsContentItem[k].classList.remove(`active`)
    }
    tabsItem[i].classList.add(`active`)
    tabsContentItem[i].classList.add(`active`)
    })   
}


const stopwatchBtn = document.querySelector(`.stopwatch__btn`)
const tabsLinkSpan = document.querySelector(`.tabsLink__span`)
const stopwatchSeconds = document.querySelector(".stopwatch__seconds")
const stopwatchMinutes = document.querySelector(".stopwatch__minutes")
const stopwatchHours = document.querySelector(".stopwatch__hours")
stopwatchBtn.addEventListener(`click`,function(){
    if (this.innerHTML == "start") {
        this.innerHTML = "stop"
        tabsLinkSpan.classList.add("active")
        starTimer()
    }else if(this.innerHTML == "stop"){
        this.innerHTML = "clear"
        tabsLinkSpan.classList.remove("active")
        tabsLinkSpan.classList.add("active_clear")
        clearInterval(stop)
    }else if (this.innerHTML == "clear"){
        this.innerHTML = "start"
        tabsLinkSpan.classList.remove("active_clear")
        stopwatchHours.innerHTML = 0
        stopwatchMinutes.innerHTML = 0
        stopwatchSeconds.innerHTML = 0
    }
})
let stop;

function starTimer(){
    stopwatchSeconds.innerHTML++
    if (stopwatchSeconds.innerHTML >59) {
        stopwatchSeconds.innerHTML = 0
        stopwatchMinutes.innerHTML++
        if (stopwatchMinutes.innerHTML > 59) {
            stopwatchMinutes.innerHTML = 0
            stopwatchHours.innerHTML++
        }
    }
    stop = setTimeout(() => {
        starTimer();
    },1000)
}