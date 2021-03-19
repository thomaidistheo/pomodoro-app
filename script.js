const mins = document.getElementById('mins')
const secs = document.getElementById('secs')
const startBtn = document.getElementById('startBtn')
const optionsToggle = document.getElementById('optionsToggle')
const optionsMenu = document.getElementById('optionsMenu')

let optionOne = document.getElementById('option-one')
let optionTwo = document.getElementById('option-two')
let optionThree = document.getElementById('option-three')
let optionFour = document.getElementById('option-four')

let startingTime
let time

removeDisabled = () => {
    startBtn.removeAttribute('disabled')
}

//display selected option in the timer
displaySelectedTimer = () => {
    mins.innerHTML = `${startingTime}`
    removeDisabled()
}

optionOne.onclick = () => {
    startingTime = 0.10
    time = startingTime * 60

    displaySelectedTimer()
}

optionTwo.onclick = () => {
    startingTime = 30
    time = startingTime * 60

    displaySelectedTimer()
}

optionThree.onclick = () => {
    startingTime = 45
    time = startingTime * 60

    displaySelectedTimer()
}

optionFour.onclick = () => {
    startingTime = 60
    time = startingTime * 60

    displaySelectedTimer()
}

function countDown() {
    //in case no time setting is selected, display message
    if (!startingTime){
        alert('vale xrono prwta ougkane')  
    } else {
        setInterval(() => {
            let minutes = Math.floor(time/60)
            let seconds = time % 60
        
            //add a 0 in front of single digit numbers
            minutes = minutes < 10 ? '0' + minutes : minutes
            seconds = seconds < 10 ? '0' + seconds : seconds
        
            //display time left
            mins.innerHTML = `${minutes}`
            secs.innerHTML = `${seconds}`
            time--

            //stop the countdown 
            if (time <= 0) {
                clearInterval(time = 0)
            }
            
            //DOM changes when timer is started
            optionsMenu.classList.add('hide-options')
            document.body.style.backgroundColor = '#000'
            document.body.style.color = '#F4F4F4'
            console.log(time)
        }, 1000)
    }
}

startBtn.onclick = () => {
    countDown()
    startBtn.setAttribute('disabled', "")
}

optionsToggle.onclick = () => {
    optionsMenu.classList.toggle('hide-options')
}
