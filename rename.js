import fs from 'fs';
import path from 'path';

function listFilesSync(directoryPath) {
    try {
        const files = fs.readdirSync(directoryPath);
        files.forEach(file => {
            console.log(file);
        });
    } catch (err) {
        console.error('Ошибка чтения папки:', err);
    }
}

function convertSampleName(filename) {
    // Заменяем # на b (диезы на бемоли)
    let newName = filename.replace('D#', 'Eb').replace('F#', 'Gb');
    
    // Удаляем vH и vL
    newName = newName.replace('vH', '').replace('vL', '');
    
    return newName;
  }

  function midiToNoteName(midiNumber) {
    const notes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
    const octave = Math.floor(midiNumber / 12) - 1;
    const noteIndex = midiNumber % 12;
    return notes[noteIndex] + octave;
  }
  
  function convertPianoSample(filename) {
    // Извлекаем MIDI-номер (например, "021" из "piano021v100")
    const midiNumber = parseInt(filename.match(/piano(\d+)v/)[1]);
    
    // Конвертируем в ноту (например, 21 → "A0")
    const noteName = midiToNoteName(midiNumber);
    
    return `${noteName}.wav`;
  }
  

function renameFilesInFolder(folderPath) {
    fs.readdir(folderPath, (err, files) => {
      if (err) throw err;
  
      files.forEach(file => {
        const oldPath = path.join(folderPath, file);
        const newName = convertPianoSample(file);
        const newPath = path.join(folderPath, newName);
  
        if (oldPath !== newPath) {
          fs.rename(oldPath, newPath, (err) => {
            if (err) throw err;
            console.log(`Renamed: ${file} → ${newName}`);
          });
        }
      });
    });
  }

// Пример использования:
// renameFilesInFolder('./public/sounds/upright-piano'); // Замените './myfolder' на путь к вашей папке
renameFilesInFolder('./public/sounds/udp');