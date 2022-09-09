const inertialVelocitySlider = document.querySelector('#inertialVelocity')
const inertialVelocityText = document.querySelector('#inertialVelocityDigits')

const altitudeSlider = document.querySelector('#altitude')
const altitudeText = document.querySelector('#altitudeDigits')


/*
Gauges
*/
let
    gaugeStart = 0,
    gaugeElapsed = 0,
    allGaugeMeter = 0,
    intervalAmount = 900,
    intervalID

// Intertial gauges
let
    inertialVelocity = 0,
    inertialVelocityDigits = 0

function UpdateInertialVelocityDisplay(velocity) {
    let speed = (velocity / 10)
    if (speed >= 10) return 10
    else return speed
}

//altitude gauges
let
    altitude = 0,
    altitudeDigits = 0

function UpdateAltitudeDisplay(allGaugeMeter) {
    return ((allGaugeMeter / 1600)*100).toFixed(2)
}


//individual intervalIDS so altitude can keep going








// random gauge values tied to gaugeMeter
function randomGaugeFlux(input, variation) {
    const min = input - variation
    const max = input + variation
    const rand = Math.floor(Math.random() * (max - min + 1)) + min
    return rand
}

//Initialize Gauge Counter
function gaugeEngage() {
    gaugeStart = Date.now() - gaugeElapsed
    intervalID = setInterval(gaugeUpdate, intervalAmount)
    let checkInterval = () => {
        setInterval(() => {
            if (allGaugeMeter >= 100) clearInterval(intervalID)
        }, intervalAmount)
    }
    checkInterval()
}

// increase Gauges
function gaugeUpdate() {
    gaugeElapsed = Date.now() - gaugeStart
    allGaugeMeter = Math.floor((gaugeElapsed / intervalAmount) % 101)

    //inertialGauges
    inertialVelocity = randomGaugeFlux(allGaugeMeter, 1)
    inertialVelocitySlider.style.width = `${inertialVelocity}%`
    inertialVelocityText.textContent = `${UpdateInertialVelocityDisplay(inertialVelocity)} km/s`


    //altitude
    altitude = UpdateAltitudeDisplay(allGaugeMeter)
    altitudeSlider.style.width = `${altitude}%`
    altitudeText.textContent = `${altitude} km`

    console.log("gaugeMeter:", allGaugeMeter, "velocity:", inertialVelocity)
}

gaugeEngage()



