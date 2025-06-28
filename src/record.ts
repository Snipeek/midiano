import { Destination, context } from 'tone';

let mediaStreamDest, recorder;

export const record = {
    start: async () => {
      try {
        // 1. Захватываем экран
        const screenStream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
          audio: {
                echoCancellation: false,
                noiseSuppression: false,
                sampleRate: 44100,
                suppressLocalAudioPlayback: false
            },
            systemAudio: 'include'
        });
        
        mediaStreamDest = context.createMediaStreamDestination();
        
        // 3. Подключаем Tone.js
        Destination.connect(mediaStreamDest);
        
        // 4. Смешиваем потоки
        const mixedStream = new MediaStream([
          ...screenStream.getVideoTracks(),
          ...mediaStreamDest.stream.getAudioTracks()
        ]);
  
        // 5. Проверяем поддерживаемые форматы
        const mimeType = 'video/webm';
  
        recorder = new MediaRecorder(mixedStream, {
          mimeType,
          audioBitsPerSecond: 128000,
          videoBitsPerSecond: 2500000
        });
  
        const chunks = [];
        recorder.ondataavailable = e => chunks.push(e.data);
        recorder.onstop = () => {
          const blob = new Blob(chunks, { type: mimeType });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `tonejs-recording-${new Date().toISOString()}.webm`;
          a.click();
        };
  
        recorder.start(1000); // Записываем сегменты каждую секунду
        console.log("Recording started with Tone.js audio");
        
      } catch (error) {
        console.error("Recording error:", error);
      }
    },
    
    stop: () => {
      if (recorder && recorder.state !== 'inactive') {
        recorder.stop();
        if (mediaStreamDest) {
          Destination.disconnect(mediaStreamDest);
        }
        console.log("Recording stopped");
      }
    }
};


let gui = null;

export const addRecord = (gu) => {
    gui = gu;

    gui.add(record, 'start').name('● Начать запись');
    const stopBtn = gui.add(record, 'stop').name('■ Остановить');
    stopBtn.domElement.style.display = 'none'; // Скрываем кнопку стоп изначально
}