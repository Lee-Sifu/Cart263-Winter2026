import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
const scene = new THREE.Scene()
const sizes = {
    width: 800,
    height: 600
}
const canvas = document.querySelector('canvas#three-ex')
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3;
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
const controls = new OrbitControls(camera, canvas)

const object1 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)
object1.position.x = -2

const object2 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)
object2.position.x = 2


const object3 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)

scene.add(object1,object2,object3)
const raycaster = new THREE.Raycaster()
const rayOrigin = new THREE.Vector3(-5, 0, 0)
const rayDirection = new THREE.Vector3(10, 0, 0)
rayDirection.normalize()
raycaster.set(rayOrigin, rayDirection)

window.requestAnimationFrame(animate);

function animate(timer) {
  controls.update();
 raycaster.setFromCamera(mouse, camera);

object1.position.y = Math.sin(timer/1000 *.5 ) * 3
object2.position.y = Math.sin(timer/1000  *.4) * 3
object3.position.y = Math.sin(timer/1000 *.3) *  3

 const objectsToTest = [object1, object2, object3]
    const intersects = raycaster.intersectObjects(objectsToTest)

    for(const object of objectsToTest)
    {
        object.material.color.set('#ff0000')
    }

    for(const intersect of intersects)
    {
        intersect.object.material.color.set('#0000ff')
    }


  renderer.render(scene, camera);

  window.requestAnimationFrame(animate);
  
}