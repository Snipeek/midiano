import { GUI } from 'dat.gui';
import { addRecord } from './record';
import { setupCameraStream } from './video';

// Настройка GUI
const gui = new GUI();

export const initGui2 = (params) => {
    const colorsFolder = gui.addFolder('Цвета');
    colorsFolder.add(params, 'red', 0, 1).onChange(value => uniforms.u_red.value = value);
    colorsFolder.add(params, 'green', 0, 1).onChange(value => uniforms.u_green.value = value);
    colorsFolder.add(params, 'blue', 0, 1).onChange(value => uniforms.u_blue.value = value);

    const bloomFolder = gui.addFolder('Bloom эффект');
    bloomFolder.add(params, 'threshold', 0, 1).onChange(value => bloomPass.threshold = value);
    bloomFolder.add(params, 'strength', 0, 3).onChange(value => bloomPass.strength = value);
    bloomFolder.add(params, 'radius', 0, 1).onChange(value => bloomPass.radius = value);
}


export const initGui = (def = {}, onUpdate = () => {}) => {
    // Конфигурация с значениями по умолчанию или из URL
    const config = def;

    // Получаем параметры из URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('lib')) config.lib = urlParams.get('lib');
    if (urlParams.has('instrument')) config.instrument = urlParams.get('instrument');

    // Создаем GUI
    let instrumentController = null;

    // Функция для обновления URL
    function update() {
        const url = new URL(window.location.href);
        url.searchParams.set('lib', config.lib);
        url.searchParams.set('instrument', config.instrument);
        window.history.pushState({}, '', url);

        onUpdate(config);
    }

    // Загружаем инструменты для выбранной библиотеки
    async function loadInstruments(lib) {
        const response = await fetch(`https://raw.githubusercontent.com/gleitz/midi-js-soundfonts/gh-pages/${lib}/names.json`)
            .then(args => args.json())
            .catch(() => []);

        return response.map(item => item + '-mp3');
    }

    const instFolder = gui.addFolder('Instrument');

    const libraries = ['FatBoy', 'FluidR3_GM', 'MusyngKite', 'Tabla'];
        
    // Добавляем выбор библиотеки
    const libController = instFolder.add(config, 'lib', libraries);
    libController.onChange(async (newLib) => {
        const instruments = await loadInstruments(newLib);
        
        // Обновляем контроллер инструментов
        if (instrumentController) instFolder.remove(instrumentController);
        instrumentController = instFolder.add(config, 'instrument', instruments);
        instrumentController.onChange(update);
        
        update();
    });

    // Загружаем инструменты для начальной библиотеки
    loadInstruments(config.lib).then(initialInstruments => {
        instrumentController = instFolder.add(config, 'instrument', initialInstruments);
        instrumentController.onChange(update);
    })

    const bpmFolder = gui.addFolder('BPM Monitor');
    bpmFolder.add(config, 'currentBPM').name('Current BPM').listen().domElement.querySelector('input').disabled = true;

    addRecord(gui);
    setupCameraStream(gui);

    return config;
}