let day = document.querySelector(".day");


const currentDay = new Date("2023-09-16")
const weddingDay = new Date("2023-09-29")

const differenceInDay = weddingDay.getTime() - currentDay.getTime()
const daysLeft = Math.floor(differenceInDay / 86400000)
const seconds = function(){
    currentDay.getTime()/1000
}


day.textContent = `${daysLeft} Day(s) to go`

