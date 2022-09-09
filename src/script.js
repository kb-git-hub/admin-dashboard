const inertialVelocitySlider = document.querySelector('#inertialVelocity')

/*
Guages
*/
let
    gaugeStart = 0,
    gaugeElapsed = 0,
    allGaugeMeter = 0,
    inertialVelocity = 0,
    intervalAmount = 50,
    intervalID

// random gauge values tied to gaugeMeter
function randomGaugeFlux(input, variation) {
    const min = input - variation
    const max = input + variation
    const rand = Math.floor(Math.random() * (max - min + 1)) + min
    return rand
}

//Initialize Guage Counter
function gaugeEngage() {
    gaugeStart = Date.now() - gaugeElapsed
    intervalID = setInterval(gaugeUpdate, intervalAmount)
    let checkInterval = () => {
        setInterval(() => {
            if (allGaugeMeter >= 99) clearInterval(intervalID)
        }, intervalAmount)
    }
    checkInterval()
}

// increase Gauges
function gaugeUpdate() {
    gaugeElapsed = Date.now() - gaugeStart
    allGaugeMeter = Math.floor((gaugeElapsed / intervalAmount) % 100)

    inertialVelocity = randomGaugeFlux(allGaugeMeter, 1)
    inertialVelocitySlider.style.width = `${inertialVelocity}%`

    console.log("gaugeMeter:", allGaugeMeter, "velocity:", inertialVelocity)
}

gaugeEngage()











// function animate() {
//     requestAnimationFrame(animate)
//     // inertialVelocitySlider.style.width = `${generateRandomValue(min, max)}%`
// }


// animate()


addEventListener('click', () => {
    inertialVelocitySlider.style.width = '60%'
    console.log('click')
})



