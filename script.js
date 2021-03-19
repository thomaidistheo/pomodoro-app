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

optionOne.onclick = () => {
    startingTime = 0.10
    time = startingTime * 60

    //display
    mins.innerHTML = `${startingTime}`
    removeDisabled()
}

optionTwo.onclick = () => {
    startingTime = 30
    time = startingTime * 60

    //display
    mins.innerHTML = `${startingTime}`
    removeDisabled()
}

optionThree.onclick = () => {
    startingTime = 45
    time = startingTime * 60

    //display
    mins.innerHTML = `${startingTime}`
    removeDisabled()
}

optionFour.onclick = () => {
    startingTime = 60
    time = startingTime * 60

    //display
    mins.innerHTML = `${startingTime}`
    removeDisabled()
}

function countDown() {
    if (!startingTime){
        alert('vale xrono prwta ougkane')  
    } else {
        setInterval(() => {
            let minutes = Math.floor(time/60)
            let seconds = time % 60
        
            minutes = minutes < 10 ? '0' + minutes : minutes
            seconds = seconds < 10 ? '0' + seconds : seconds
        
            mins.innerHTML = `${minutes}`
            secs.innerHTML = `${seconds}`
            time--

            optionsMenu.classList.add('hide-options')
            
            document.body.style.backgroundColor = '#000'
            document.body.style.color = '#F4F4F4'

            if (time <= 0) {
                clearInterval()
            }

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