import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass';
import {smoothTarget} from '@/smooth';

// Инициализация Three.js
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Параметры для настройки
const params = {
  red: 0.5,
  green: 0.7,
  blue: 1.0,
  threshold: 0.5,
  strength: 0.5,
  radius: 0.8,
  synthVolume: -10,
  reverbDecay: 3
};

renderer.outputColorSpace = THREE.SRGBColorSpace;

// Настройка пост-обработки
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  params.strength,
  params.radius,
  params.threshold
);

const bloomComposer = new EffectComposer(renderer);
bloomComposer.addPass(new RenderPass(scene, camera));
bloomComposer.addPass(bloomPass);
bloomComposer.addPass(new OutputPass());

camera.position.set(0, -2, 14);
camera.lookAt(0, 0, 0);

// Uniforms для шейдеров
const uniforms = {
  u_time: { type: 'f', value: 0.0 },
  u_frequency: { type: 'f', value: 0.0 },
  u_red: { type: 'f', value: params.red },
  u_green: { type: 'f', value: params.green },
  u_blue: { type: 'f', value: params.blue },
  u_midiNote: { type: 'f', value: 0.0 },
  u_velocity: { type: 'f', value: 0.0 }
};

// Создание 3D объекта
const mat = new THREE.ShaderMaterial({
  uniforms,
  vertexShader: document.getElementById('vertexshader').textContent,
  fragmentShader: document.getElementById('fragmentshader').textContent,
  wireframe: true
});

const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(4, 30), mat);
scene.add(mesh);

let analyser = { getFrequency: () => 1 };

const toFrequency = smoothTarget(1, 0.2)

// Анимация
const clock = new THREE.Clock();
function animate() {
  const delta = clock.getDelta(); // Получаем время между кадрами
  
  // Вращаем сферу
  mesh.rotation.x += 0.1 * delta; // Вращение вокруг оси X
  mesh.rotation.y += 0.2 * delta; // Вращение вокруг оси Y (немного быстрее)
  
  uniforms.u_time.value = clock.getElapsedTime();
  uniforms.u_time.value = clock.getElapsedTime();
  uniforms.u_frequency.value = toFrequency(analyser.getFrequency());
  bloomComposer.render();
  requestAnimationFrame(animate);
}

// Запуск
animate();

// Обработка изменения размера окна
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  bloomComposer.setSize(window.innerWidth, window.innerHeight);
});


function getAverageFrequency(frequencyData, threshold = -100) {
    let sum = 0;
    let count = 0;
    
    for (let i = 0; i < frequencyData.length; i++) {
        if (frequencyData[i] > threshold) { // Игнорируем значения ниже порога
            sum += frequencyData[i];
            count++;
        }
    }
    
    return count > 0 ? sum / count : 0;
}

export const setupAnalyser = (next) => {

    analyser.getFrequency = () => {
        const average = getAverageFrequency(next.getValue());
    
        return average / 3;
    }
}