import * as THREE from 'three';

const loader = new THREE.TextureLoader();
const water_texture = await loader.loadAsync('water.jpg');
const scene = new THREE.Scene();

const sizes = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
//amera.position.x = 1

scene.add(camera);

const canvas = document.querySelector('canvas#three-ex')
//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
//give it the size
renderer.setSize(sizes.width, sizes.height)

//objects
//const material = new THREE.MeshBasicMaterial()
//material.map = water_texture
//aterial.color = new THREE.Color('#a2f94b') 
//material.transparent = true
//aterial.opacity = 0.5

//const sphere = new THREE.Mesh(
    //new THREE.SphereGeometry(0.5, 16, 16),
    //material
//)
//sphere.position.x = - 1.5

//const plane = new THREE.Mesh(
   // new THREE.PlaneGeometry(1, 1),
   // material
//)

//const torus = new THREE.Mesh(
   // new THREE.TorusGeometry(0.3, 0.2, 16, 32),
   // material
//)
//torus.position.x = 1.5

//cene.add(sphere, plane, torus)

//const group = new THREE.Group()
//scene.add(group)

//const cube1 = new THREE.Mesh(
    //new THREE.BoxGeometry(1, 1, 1),
    //new THREE.MeshBasicMaterial({ color: 0xff0000,wireframe: true })
//)
//cube1.position.x = 1.5
//group.add(cube1)

//const sphere = new THREE.Mesh(
 // new THREE.SphereGeometry( .75, 32 , 16 ),
 // new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true})
///)
//phere.position.x = -2
//phere.rotation.x = Math.PI * 2
//roup.scale.set(0.5, 0.5, 0.5)
//roup.add(sphere)

//helpers
//const axisHelper = new THREE.AxesHelper()
//scene.add(axisHelper)
//axisHelper.position.x = -1
//axisHelper.position.y = -1

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const mesh_2 = new THREE.Mesh(geometry, material)
scene.add(mesh_2)

window.requestAnimationFrame(animate)
let elapsedTime = 0
function animate(timer){
    let deltaTime = timer - elapsedTime
    elapsedTime = timer / 1000
    mesh.rotation.y+=0.001 * deltaTime
    mesh.rotation.x+=0.001 * deltaTime

    mesh_2.rotation.y+=0.001 * deltaTime
    mesh_2.rotation.x+=0.001 * deltaTime

mesh_2.position.x = Math.cos(elapsedTime/1000)
mesh_2.position.y = Math.sin(elapsedTime/1000)

camera.position.x = Math.cos(elapsedTime/1000)
camera.position.y = Math.sin(elapsedTime/1000)

camera.position.x = 4
camera.position.z =4+Math.cos(elapsedTime/100)
camera.rotation.z = 0.002*deltaTime
    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)
}