const velocitySlider = document.querySelector('#inertialVelocity')
const velocityText = document.querySelector('#inertialVelocityDigits')

const altitudeSlider = document.querySelector('#altitude')
const altitudeText = document.querySelector('#altitudeDigits')


/*
Time
*/
let
    timeStart = 0,
    timeElapsed = 0,
    timeCurrent = 0,
    timeIntervalID

/*
Velocity
*/
let
    velocity = 0,
    velocityStart = 0,
    velocityIntervalID

function increaseVelocity() {
    velocityStart = Date.now() - timeElapsed
    velocityIntervalID = setInterval(updateVelocity, 100)

    function updateVelocity() {
        velocity = Math.floor(((Date.now() - velocityStart) / 500))

        let variableVelocity = randomizeFlux(velocity, 1)
        velocitySlider.style.width = `${variableVelocity}%`
        velocityText.textContent = `${capVelocityText(variableVelocity)} km/s`
        console.log({velocity});

        if (variableVelocity >= 100) clearInterval(velocityIntervalID)
    }

    function capVelocityText(velocity) {
        let velocityDigits = velocity / 10
        return (velocityDigits < 10 ? velocityDigits : 10)
    }
}


/*
Altitude
*/
let
    altitude = 0,
    altitudeStart = 0,
    AltitudeIntervalID


function increaseAltitude(){
    altitudeStart = Date.now() - timeElapsed
    velocityAltitudeID = setInterval(updateAltitude, 100)

    function updateAltitude(){
        altitude = Math.floor(((Date.now() - altitudeStart) / 1600))
        altitudeSlider.style.width = `${altitude}%`
        altitudeText.textContent = `${capAltitudeText(altitude)} km`
        console.log({altitude});
    }

    function capAltitudeText(altitude){
        let altitudeDigits = altitude / 10
        return (altitudeDigits < 1600? altitudeDigits : 1600)
    }
}


/*
Random Fluctuation Return
*/
function randomizeFlux(input, variation) {
    const
        min = input - variation,
        max = input + variation,
        rand = Math.floor(Math.random() * (max - min + 1)) + min
    return rand
}



// Constant Timers Start
function startTimers() {
    timeStart = Date.now() - timeElapsed
    timeIntervalID = setInterval(updateTimer, 1000)

    function updateTimer() {
        timeElapsed = Math.floor((Date.now() - timeStart) / 1000)
    }

    increaseVelocity()
    increaseAltitude()

}







startTimers()



