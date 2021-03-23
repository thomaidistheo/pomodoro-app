//clock
const mins = document.getElementById('mins')
const secs = document.getElementById('secs')

//buttons
const startBtn = document.getElementById('startBtn')
const optionsToggle = document.getElementById('optionsToggle')
const resetBtn = document.getElementById('resetBtn')

//timer options
const errorMsg = document.getElementById('errorMsg')
const errorBtn = document.getElementById('errorBtn')
const optionsMenu = document.getElementById('optionsMenu')
let optionOne = document.getElementById('option-one')
let optionTwo = document.getElementById('option-two')
let optionThree = document.getElementById('option-three')
let optionFour = document.getElementById('option-four')
let customTimerForm = document.getElementById('custom-timer')
let customTimerInput = document.getElementById('custom-timer-input')

//audio
let completeSound = document.getElementById('bell-sound')

removeDisabled = () => {
    startBtn.removeAttribute('disabled')
    errorMsg.classList.remove('show-error')
}

//display selected option in the timer
displaySelectedTimer = () => {
    mins.innerHTML = `${timeMin}`
    removeDisabled()
}

//timer options 
let timeMin
let timeSec

optionOne.onclick = () => {
    timeMin = 15
    timeSec = (timeMin * 60) - 1

    displaySelectedTimer()
}

optionTwo.onclick = () => {
    timeMin = 30
    timeSec = (timeMin * 60) - 1

    displaySelectedTimer()
}

optionThree.onclick = () => {
    timeMin = 45
    timeSec = (timeMin * 60) - 1

    displaySelectedTimer()
}

optionFour.onclick = () => {
    timeMin = 60
    timeSec = (timeMin * 60) - 1

    displaySelectedTimer()
}

customTimerForm.onsubmit = (e) => {
    e.preventDefault()

    if (customTimerInput.value == 0) {
        errorMsg.classList.remove('show-error')
    }
    timeMin = customTimerInput.value
    timeSec = (timeMin * 60) - 1

    displaySelectedTimer()
}

// reset dom elements after timer ends
resetDOM = () => {
    document.title = 'Pomodoro App'
    mins.innerHTML = '00'
    secs.innerHTML = '00'
    timeSec=0;

    document.body.classList.remove('gradient-animation')
    optionsMenu.classList.remove('hide-options')
}

stopCountDown = () => {
    clearInterval(startTimer)
    resetDOM()
}

let startTimer = null

countDown = () => {
    //in case no time setting is selected, display message
    if (!timeMin){
        errorMsg.classList.add('show-error')
    } else {
        startBtn.setAttribute('disabled', "")
        optionsMenu.classList.toggle('hide-options')
        document.body.classList.add('gradient-animation')

        startTimer = setInterval(() => {
            //DOM changes when timer is started
            optionsMenu.classList.add('hide-options')
            document.body.style.backgroundColor = '#000'
            document.body.style.color = '#F4F4F4'
            
            let minutes = Math.floor(timeSec/60)
            let seconds = (timeSec % 60)
            
            //add a 0 in front of single digit numbers
            minutes = minutes < 10 ? '0' + minutes : minutes
            seconds = seconds < 10 ? '0' + seconds : seconds
            
            //update browser tab title
            document.title = `${minutes}:${seconds}`
            
            //display time left
            mins.innerHTML = `${minutes}`
            secs.innerHTML = `${seconds}`

            //stop the countdown 
            if (timeSec <= 0) {
                stopCountDown()
                completeSound.play()
            }

            timeSec--
            
        }, 1000)
    }
}

resetBtn.onclick = () => {
    resetDOM()
    stopCountDown()
    removeDisabled()
}

startBtn.onclick = () => {
    countDown()
}

optionsToggle.onclick = () => {
    optionsMenu.classList.toggle('hide-options')
}

errorBtn.onclick = () => {
    errorMsg.classList.remove('show-error')
}

