import * as three from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

interface ThreeObjects{
  [index:string]:three.Object3D
}

export default class ThreeCanvas{
  // key canvas objects
  parent:HTMLElement;
  scene = new three.Scene()
  camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  renderer = new three.WebGLRenderer();
  objects:ThreeObjects = {}
  // setup orbit controls
  orbitControls = new OrbitControls(this.camera, this.renderer.domElement);
  // states
  size = new three.Vector2();
  constructor(parent:HTMLElement){
    // set parent
    this.parent = parent;
    // setup renderer
    this.renderer.setSize(1,1)
    this.parent.appendChild(this.renderer.domElement)
    // setup threejs objects
    this.startScene();
    // setup resize event
    window.addEventListener("resize", this.resize.bind(this))
    this.resize();
    // start update
    this.update()
  }  
  startScene(){
    // create object
    this.objects['cube'] = new three.Mesh(
      new three.PlaneGeometry(1,1),
      new three.MeshBasicMaterial({color: 0x00ff00})
    )
    // add to scene
    this.scene.add(this.objects['cube']);
    // set camera distance
    this.camera.position.z = 2;
  }
  resize(){
    // set size state
    this.size.x = this.parent.clientWidth;
    this.size.y = this.parent.clientHeight;
    // update renderer
    this.renderer.setSize(this.size.x, this.size.y);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    // update camera
    this.camera.aspect = this.size.x / this.size.y
    this.camera.updateProjectionMatrix()
  }
  update(){
    // request next frame
    requestAnimationFrame(this.update.bind(this));
    
    
    // ..
    // .. code for update goes here
    this.orbitControls.update();
    // ..

    this.renderer.render(this.scene, this.camera);
  }
}