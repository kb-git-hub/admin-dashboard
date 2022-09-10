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
    velocityMeter = 0,
    velocityID


function increaseVelocity() {
    velocityID = setInterval(updateVelocity, 1000)

    function updateVelocity() {
        velocity = timeElapsed * 5
        console.log('velocity:', velocity);
        // velocityMeter = velocity/1000
        // console.log('velocity meter:', velocityMeter)
      

        let variableVelocity = randomizeFlux(velocity, 1)
        velocitySlider.style.width = variableVelocity + '%'
        velocityText.textContent = `${capVelocityText(variableVelocity)} km/s`
    }

    function capVelocityText(velocity){
        if (velocity < 10) return velocity.toFixed(1)
        else return 10
    }



}





function UpdateInertialVelocityDisplay(velocity) {
    let speed = (velocity / 10)
    if (speed >= 10) return 10
    else return speed
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





// Constant Timer
function startTimer() {
    timeStart = Date.now() - timeElapsed
    timeIntervalID = setInterval(updateTimer, 1000)

    function updateTimer() { 
        timeElapsed = Math.floor((Date.now() - timeStart) / 1000) 
        console.log('timeElapsed:', timeElapsed);    
    }

    increaseVelocity()

}







startTimer()







/*

// Intertial gauges




//Initialize Gauge Counter
function gaugeEngage() {
    gaugeStart = Date.now() - gaugeElapsed
    inertialID = setInterval(gaugeUpdate, inertialAmount)
    // altitudeID = setInterval(gaugeUpdate, altitudeAmount)
    
    
    function checkInertialInterval(){
        setInterval(() => {
            if (inertialGaugeMeter >= 100) clearInterval(inertialID)
        }, inertialAmount)
    }





    checkInertialInterval()
    checkAltitudeInterval()
}

// increase Gauges
function gaugeUpdate() {
    gaugeElapsed = Date.now() - gaugeStart
    inertialGaugeMeter = Math.floor((gaugeElapsed / inertialAmount) % 101)


    //inertialGauges
    inertialVelocity = randomGaugeFlux(inertialGaugeMeter, 1)
    inertialVelocitySlider.style.width = `${inertialVelocity}%`
    inertialVelocityText.textContent = `${UpdateInertialVelocityDisplay(inertialVelocity)} km/s`


*/