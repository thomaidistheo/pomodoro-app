//clock
const mins = document.getElementById('mins')
const secs = document.getElementById('secs')

//buttons
const startBtn = document.getElementById('startBtn')
const optionsToggle = document.getElementById('optionsToggle')
const resetBtn = document.getElementById('resetBtn')

//timer options
const optionsMenu = document.getElementById('optionsMenu')
let optionOne = document.getElementById('option-one')
let optionTwo = document.getElementById('option-two')
let optionThree = document.getElementById('option-three')
let optionFour = document.getElementById('option-four')

removeDisabled = () => {
    startBtn.removeAttribute('disabled')
}

//display selected option in the timer
displaySelectedTimer = () => {
    mins.innerHTML = `${timeMin}`
    removeDisabled()
}

let timeMin
let timeSec

optionOne.onclick = () => {
    timeMin = 0.1
    timeSec = (timeMin * 60)

    displaySelectedTimer()
}

optionTwo.onclick = () => {
    timeMin = 30
    timeSec = (timeMin * 60)

    displaySelectedTimer()
}

optionThree.onclick = () => {
    timeMin = 45
    timeSec = (timeMin * 60)

    displaySelectedTimer()
}

optionFour.onclick = () => {
    timeMin = 60
    timeSec = (timeMin * 60)

    displaySelectedTimer()
}

let startTimer = null

function stopCountDown() {
    clearInterval(startTimer)
    resetDOM()
}

function countDown() {
    //in case no time setting is selected, display message
    if (!timeMin){
        alert('vale xrono prwta ougkane')  
    } else {
        startTimer = setInterval(() => {
            let minutes = Math.floor(timeSec/60)
            let seconds = (timeSec % 60)

            //add a 0 in front of single digit numbers
            minutes = minutes < 10 ? '0' + minutes : minutes
            seconds = seconds < 10 ? '0' + seconds : seconds
            
            //display time left
            mins.innerHTML = `${minutes}`
            secs.innerHTML = `${seconds}`
            
            timeSec--

            //stop the countdown 
            if (timeSec <= 0) {
                stopCountDown()
            }

            //DOM changes when timer is started
            optionsMenu.classList.add('hide-options')
            document.body.style.backgroundColor = '#000'
            document.body.style.color = '#F4F4F4'
            document.title = `${minutes}:${seconds}`
            
        }, 1000)
    }

    resetBtn.onclick = () => {
        resetDOM()
        stopCountDown()
    }
}

resetDOM = () => {
    document.body.style.backgroundColor = '#F4F4F4'
    document.body.style.color = '#454545'
    minutes=0
    seconds=0
    timeSec=0;
}

startBtn.onclick = () => {
    countDown()
    startBtn.setAttribute('disabled', "")
}

optionsToggle.onclick = () => {
    optionsMenu.classList.toggle('hide-options')
}

