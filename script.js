console.log("hello World");

const hourEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secEl = document.getElementById('seconds');
const dayNight = document.getElementById('ampm');

function updateClock() {
    let hourNum = new Date().getHours();
    let minsNum = new Date().getMinutes();
    let secNum = new Date().getSeconds();
    let ampm = "AM"

    if (hourNum > 12){
        hourNum -= 12;
        ampm = "PM"
    }

    hourNum = hourNum < 10 ? "0" + hourNum : hourNum;
    minsNum = minsNum < 10 ? "0" + minsNum : minsNum;
    secNum = secNum < 10 ? "0" + secNum : secNum;

    hourEl.innerText = hourNum;
    minsEl.innerText = minsNum
    secEl.innerText = secNum;

    setTimeout(() => {
        updateClock()
    }, 1000);
}


updateClock();

