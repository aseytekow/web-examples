const dayElm = document.querySelectorAll('.day')
const dateElm = document.querySelector('.date')
const timeElm = document.querySelector('.time')

function dayUpdate() {
    const dateObj = new Date()
    dayElm[dateObj.getDay()].style.color = '#ff0'
}

function dateUpdate() {
    const dateObj = new Date()
    let month = dateObj.getMonth()
    let date = dateObj.getDate()
    let year = dateObj.getFullYear()
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    dateElm.textContent = months[month] + ' ' + date + ' - ' + year
}

function timeUpdate() {
    const dateObj = new Date()
    let hour = dateObj.getHours()
    let min = dateObj.getMinutes()
    let sec = dateObj.getSeconds()
    timeElm.textContent = (hour < 10 ? '0' + hour : hour) + ' : ' + (min < 10 ? '0' + min : min) + ' : ' + (sec < 10 ? '0' + sec : sec)
}

setInterval(dayUpdate, 1000)
setInterval(dateUpdate, 1000)
setInterval(timeUpdate, 1000)