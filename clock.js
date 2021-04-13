const clockContaniner = document.querySelector(".js-clock");
const clockTitle = clockContaniner.querySelector("h1");

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerHTML = (`${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`)
}

function init() {
    getTime();
    setInterval(getTime, 1000);
};
init();







