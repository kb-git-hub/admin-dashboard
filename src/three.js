import * as THREE from 'three';
import { FlatShading, Raycaster } from 'three';
import { OrbitControls } from "https://unpkg.com/three@0.143.0/examples/jsm/controls/OrbitControls.js"

import { BufferAttribute } from 'three'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

const color3 = new THREE.Color("rgb(15, 23, 42)")
// const texture = new THREE.TextureLoader().load( "/static/darkspace.png" )
scene.background = color3
const count = 30
const positionArray = new Float32Array(count * 9)
for (let i = 0; i < count * 9; i++) {
    positionArray[i] = (Math.random() - 0.5) * 4
}



const positionAttribute = new BufferAttribute(positionArray, 3)

const
    light = new THREE.DirectionalLight('#78716c', 1),
    backLight = new THREE.DirectionalLight('#84CC16', 1),
    rayCaster = new THREE.Raycaster()



// Object
const geometry = new THREE.BufferGeometry()
const material = new THREE.MeshBasicMaterial({
    color: 0x172A53,
    wireframe: true,
    
})
const mesh = new THREE.Mesh(geometry, material)
geometry.setAttribute('position', positionAttribute)
scene.add(mesh, light, backLight)

light.position.set(0, 0, 1)
backLight.position.set(0, 0, -1)

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Camera
const camera = new THREE.PerspectiveCamera(90, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 1
scene.add(camera)



// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Animate
const clock = new THREE.Clock()

const animate = () => {
    const elapsedTime = clock.getElapsedTime()

    mesh.rotation.x += 0.001
    mesh.rotation.y += 0.001
    mesh.rotation.z += 0.001

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call animate again on the next frame
    window.requestAnimationFrame(animate)
}

animate()

