const inertialVelocitySlider = document.querySelector('#inertialVelocity')



let gaugeStart = 0
let gaugeElapsed = 0
let allGaugeMeter = 0
let intervalID
let inertialVelocity = 0

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
  intervalID = setInterval(gaugeUpdate, 200)
}

// increase Guages
function gaugeUpdate() {
  gaugeElapsed = Date.now() - gaugeStart
  allGaugeMeter = Math.floor((gaugeElapsed / 1000) % 100)

  inertialVelocity = randomGaugeFlux(allGaugeMeter, 2)
  console.log("gaugeMeter:", allGaugeMeter,"velocity:", inertialVelocity)
  inertialVelocitySlider.style.width = `${inertialVelocity}%`
 
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
