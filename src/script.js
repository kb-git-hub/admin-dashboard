const inertialVelocitySlider = document.querySelector('#inertialVelocity')

/*
Random Values
*/
const
    min = 40,
    max = 100,
    generateRandomValue = (min, max) =>  Math.floor(Math.random() * (max - min + 1)) + min;

addEventListener('click', () => {
    inertialVelocitySlider.style.width = '60%'
    console.log('click')
})








function animate() {
    requestAnimationFrame(animate)

    // inertialVelocitySlider.style.width = `${generateRandomValue(min, max)}%`



}

animate()