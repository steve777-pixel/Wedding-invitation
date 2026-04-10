console.log("Hello!");

const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

const TargetDate = new Date("April 30 2026 16:00:00").getTime();

function timer(){
    const currentDate = new Date().getTime();
    const distance = TargetDate - currentDate;

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;
}

setInterval(timer, 1000);

const button = document.querySelector(".tuyona-copy-button");
const number = document.querySelector(".tuyona-number");

button.addEventListener("click", () => {
    navigator.clipboard.writeText(number.textContent.trim());

    button.querySelector("span").textContent = "Nusxalandi ✓";

    setTimeout(() => {
        button.querySelector("span").textContent = "Nusxalash";
    }, 2000);
});
