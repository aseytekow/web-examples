const leftValueBar = document.querySelector('.left-value-bar')
const leftValue = document.querySelector('.left-value')
const leftRange = document.getElementById('left-range')
const rightValueBar = document.querySelector('.right-value-bar')
const rightValue = document.querySelector('.right-value')
const rightRange = document.getElementById('right-range')
let batteryLevel = 0

function getBatteryLevel() {
    if(navigator.getBattery()) {
        navigator.getBattery()
            .then((battery) => {
                let level = battery.level * 100
                leftValue.textContent = level + '%'
                leftValueBar.style.width = level + '%'
                leftRange.value = level
                rightValue.textContent = level + '%'
                rightValueBar.style.height = level + '%'
                rightRange.value = level
            })
            .catch((e) => {
                return e
            })
    } else {
        return'Battery API not working!'
    }
}

getBatteryLevel()

leftRange.addEventListener('input', (e) => {
    leftValue.textContent = e.target.value + '%'
    leftValueBar.style.width = e.target.value + '%'
})

rightRange.addEventListener('input', (e) => {
    rightValue.textContent = e.target.value + '%'
    rightValueBar.style.height = e.target.value + '%'
})