import { GUI } from 'dat.gui';

// Настройка GUI
const gui = new GUI();

export const initGui = (params) => {
    const colorsFolder = gui.addFolder('Цвета');
    colorsFolder.add(params, 'red', 0, 1).onChange(value => uniforms.u_red.value = value);
    colorsFolder.add(params, 'green', 0, 1).onChange(value => uniforms.u_green.value = value);
    colorsFolder.add(params, 'blue', 0, 1).onChange(value => uniforms.u_blue.value = value);

    const bloomFolder = gui.addFolder('Bloom эффект');
    bloomFolder.add(params, 'threshold', 0, 1).onChange(value => bloomPass.threshold = value);
    bloomFolder.add(params, 'strength', 0, 3).onChange(value => bloomPass.strength = value);
    bloomFolder.add(params, 'radius', 0, 1).onChange(value => bloomPass.radius = value);
}