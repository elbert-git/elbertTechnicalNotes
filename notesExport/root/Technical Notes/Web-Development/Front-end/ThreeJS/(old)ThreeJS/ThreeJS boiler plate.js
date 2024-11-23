// create scene object
const scene = new THREE.Scene();

// create camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// move camera position
camera.position.z = 5;

// create renderer
const renderer = new THREE.WebGLRenderer();
// set renderer size
renderer.setSize( window.innerWidth, window.innerHeight );
// connect renderer to html canvas
document.body.appendChild( renderer.domElement );

// create cube geometry
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// create material 
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// create cube object from cube geo and material
const cube = new THREE.Mesh( geometry, material );
// add cube to scene
scene.add( cube );

// create render function to loop
function animate() {
    // loop request new frame
    requestAnimationFrame( animate );

    // .... logic every frame
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // call a frame render
    renderer.render( scene, camera );
};
// start loop
animate();

// on window resize. update cam and renderer sizes
window.addEventListener('resize', () =>
{
    
    // Update sizes
    const sizes = {width: document.body.clientWidth, height: document.body.clientHeight}

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    // set pixel ration
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})