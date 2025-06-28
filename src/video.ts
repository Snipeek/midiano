export const setupCameraStream = (gui) => {
    let currentStream = null;
    const videoElement = document.createElement('video');
    videoElement.autoplay = true;
    // videoElement.style = 'height: 100px;width: 100px;margin: 0;border-radius: 100%;position: fixed;bottom: 1em;left: 1em;object-fit: cover;';
    videoElement.style = 'pointer-events: none;width: 100%; height: 100%; position: fixed; opacity: .2; object-fit: cover; transform: scaleX(-1);';
    
    // Создаем объект для хранения параметров
    const cameraParams = {
        cameraId: 'default',
        availableDevices: []
    };

    // Функция для остановки текущего потока
    const stopCurrentStream = () => {
        if (currentStream) {
            currentStream.getTracks().forEach(track => track.stop());
            document.body.removeChild(videoElement);
        }
    };

    // Функция для запуска выбранной камеры
    const startCamera = async () => {
        stopCurrentStream();
        
        try {
            const constraints = {
                video: {
                    deviceId: cameraParams.cameraId === 'default' ? undefined : { exact: cameraParams.cameraId }
                }
            };
            
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            currentStream = stream;
            videoElement.srcObject = stream;
            document.body.appendChild(videoElement);
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    };

    // Функция для получения списка доступных устройств
    const getAvailableDevices = async () => {
        try {
            const devices = await navigator.mediaDevices.enumerateDevices();
            const videoDevices = devices.filter(device => device.kind === 'videoinput');
            
            cameraParams.availableDevices = videoDevices.map(device => ({
                id: device.deviceId,
                label: device.label || `Camera ${cameraParams.availableDevices.length + 1}`
            }));
            
            // Обновляем GUI если он существует
            if (gui && cameraFolder) {
                cameraFolder.__controllers.forEach(ctrl => {
                    if (ctrl.property === 'cameraId') {
                        ctrl.options = ['default', ...cameraParams.availableDevices.map(d => d.id)];
                    }
                });
            }
        } catch (error) {
            console.error('Error enumerating devices:', error);
        }
    };

    // Создаем GUI элементы
    const cameraFolder = gui.addFolder('Camera Settings');
    cameraFolder.add(cameraParams, 'cameraId', ['default'])
        .name('Select Camera')
        .onChange(startCamera);
    
    cameraFolder.add({ refreshDevices: getAvailableDevices }, 'refreshDevices')
        .name('Refresh Camera List');
    
    cameraFolder.add({ startCamera }, 'startCamera')
        .name('Start Camera');

    // Инициализация
    getAvailableDevices();
    
    // Возвращаем функцию для остановки потока
    return stopCurrentStream;
};