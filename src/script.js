const velocitySlider = document.querySelector('#inertialVelocity')
const velocityText = document.querySelector('#inertialVelocityDigits')

const altitudeSlider = document.querySelector('#altitude')
const altitudeText = document.querySelector('#altitudeDigits')

const inclinationSlider = document.querySelector('#inclination')
const inclinationText = document.querySelector('#inclinationDigits')

const rangeSlider = document.querySelector('#range')
const rangeText = document.querySelector('#rangeDigits')

const cabinText = document.querySelector('#cabinDigits')
const pressureText = document.querySelector('#pressureDigits')
const c02Text = document.querySelector('#c02Digits')


function cabinTempMonitor() {
    setInterval(cabinGauges, 1000)

    function cabinGauges() {
        function cabinTempUpdate() {
            let cabinTemp = randomizeCabinGauges(2.69, 0.03)
            cabinText.textContent = cabinTemp.toFixed(2)
        }
        function cabinPressureUpdate() {
            let cabinPressure = randomizeCabinGauges(14, 1.1)
            pressureText.textContent = cabinPressure.toFixed(2)
        }
        
        function c02Update() {
            let cabinC02 = randomizeCabinGauges(0.07, 0.021)
            c02Text.textContent = cabinC02.toFixed(2)
        }
        cabinTempUpdate()
        cabinPressureUpdate()
        c02Update()
    }
}

/*
Time
*/
let
    timeStart = 0,
    timeElapsed = 0,
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
        altitude = Math.floor(((Date.now() - altitudeStart) / 600))
        altitudeSlider.style.width = `${(altitude / 410) * 100}%`
        altitudeText.textContent = `${capAltitudeText(altitude)} km`


        if (altitude >= 410) clearInterval(altitudeIntervalID)

    }

    function capAltitudeText(altitude) {
        let altitudeDigits = altitude * 1.035
        return (altitudeDigits < 410 ? altitudeDigits.toFixed(1) : 410)
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
        inclinationText.textContent = `${inclination.toFixed(1)} ??`
    }
}


/*
Range
*/

let
    range = 408,
    remainingRange = 0,
    rangeIntervalID

function decreaseRange() {
    rangeIntervalID = setInterval(updateRange, 100)
    function updateRange() {
        remainingRange = (range - timeElapsed)

        let percentage = Math.floor(((range - remainingRange) / range) * 100)

        rangeSlider.style.width = `${percentage}%`
        rangeText.textContent = `${capRangeText(remainingRange)}`
       

        if (remainingRange <= 0) clearInterval(rangeIntervalID)
    }

    function capRangeText(range) {
        let rangeDigits = range * 1.035
        return (rangeDigits >= 1 ? `${rangeDigits.toFixed(1)} km` : 'Arrived')
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

function randomizeCabinGauges(input, variation) {
    const
        min = input - variation,
        max = input + variation,
        rand = Math.random() * (max - min) + min
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
    decreaseRange()

    cabinTempMonitor()
}


startTimers()



