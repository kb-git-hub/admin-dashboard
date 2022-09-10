const velocitySlider = document.querySelector('#inertialVelocity')
const velocityText = document.querySelector('#inertialVelocityDigits')

const altitudeSlider = document.querySelector('#altitude')
const altitudeText = document.querySelector('#altitudeDigits')

const inclinationSlider = document.querySelector('#inclination')
const inclinationText = document.querySelector('#inclinationDigits')


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
        console.log({ velocity });

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
    altitudeIntervalID


function increaseAltitude() {
    altitudeStart = Date.now() - timeElapsed
    altitudeIntervalID = setInterval(updateAltitude, 100)

    function updateAltitude() {
        altitude = Math.floor(((Date.now() - altitudeStart) / 500))
        altitudeSlider.style.width = `${(altitude / 410) * 100}%`
        altitudeText.textContent = `${capAltitudeText(altitude)} km`
        console.log({ altitude });

        if (altitude >= 410) clearInterval(altitudeIntervalID)

    }

    function capAltitudeText(altitude) {
        let altitudeDigits = altitude / 10
        return (altitudeDigits < 410 ? altitudeDigits : 410)
    }
}




/*
Inclination
*/

let
    inclination = 0,
    inclinationIntervalID

function increaseInclination() {
    inclinationIntervalID = setInterval(updateInclination, 200)

    function updateInclination() {
        if (inclination > 55) inclination--
        else if (inclination > 49) inclination = randomizeFlux(inclination, 1.5)
        else inclination += 2.1

        inclinationSlider.style.width = `${inclination}%`
        inclinationText.textContent = `${inclination.toFixed(1)} °`

        console.log({ inclination });
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
    increaseInclination()

}







startTimers()



