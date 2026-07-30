import * as THREE from 'https://unpkg.com/three@0.166.1/build/three.module.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

camera.position.z=12;

const renderer=new THREE.WebGLRenderer({

canvas:document.querySelector("#bg"),

alpha:true,

antialias:true

});

renderer.setSize(window.innerWidth,window.innerHeight);

renderer.setPixelRatio(window.devicePixelRatio);

const starGeometry=new THREE.BufferGeometry();

const starCount=3000;

const positions=[];

for(let i=0;i<starCount;i++){

positions.push(

(Math.random()-0.5)*120,

(Math.random()-0.5)*120,

(Math.random()-0.5)*120

);

}

starGeometry.setAttribute(

'position',

new THREE.Float32BufferAttribute(positions,3)

);

const starMaterial=new THREE.PointsMaterial({

color:0xb6ffb6,

size:0.15,

transparent:true,

opacity:.45

});

const stars=new THREE.Points(starGeometry,starMaterial);

scene.add(stars);

function animate(){

    requestAnimationFrame(animate);

    const time = Date.now() * 0.00015;

    camera.position.x += Math.sin(time) * 0.2;
    camera.position.y += Math.cos(time) * 0.15;
    
    stars.rotation.y+=0.0003;
    
    stars.rotation.x+=0.0001;
    
    camera.position.x +=
    (mouseX*2-camera.position.x)*0.02;

    camera.position.y +=
    (-mouseY*2-camera.position.y)*0.02;

    camera.lookAt(scene.position);

    renderer.render(scene,camera);


}

window.addEventListener("resize",()=>{

    camera.aspect=window.innerWidth/window.innerHeight;
    
    camera.updateProjectionMatrix();
    
    renderer.setSize(window.innerWidth,window.innerHeight);
    
});
    
animate();

let mouseX=0;
let mouseY=0;
    
document.addEventListener("mousemove",(e)=>{
    mouseX=(e.clientX/window.innerWidth)-0.5;
    mouseY=(e.clientY/window.innerHeight)-0.5;
});

