import { WebMidi } from 'webmidi';
import { PolySynth, Reverb, Synth, Analyser, Sampler, start, Destination, context } from 'tone';
import {getEnharmonicNote} from '@/enharmonic';
import { notes } from './notes';
// import {setupAnalyser} from '@/sphere';
import {initGui} from '@/gui';
import { updateBPM } from './bpm';
import { pushHistory } from './planes';

const reverb = new Reverb(2.5).toDestination();

const initInstrument = ({ lib, instrument }) => {
  const instr = new Sampler({
    urls: notes(1, 7, '.mp3'),
    release: 1,
    baseUrl: `https://gleitz.github.io/midi-js-soundfonts/${lib}/${instrument}/`, //`/sounds/${instrument}/`, // 
    onload: () => {
      console.log("Sampler ready!", piano);
    }
  }).toDestination();
  
  instr.envelope = {
    attack: 0.01,  // Время нарастания (сек)
    decay: 0.1,    // Время спада до sustain
    sustain: 0.7,  // Уровень громкости при удержании
    release: 0.5   // Время затухания
  };
  
  instr.connect(reverb);

  return instr;
}

const config = { lib: 'MusyngKite', instrument: 'violin-mp3', currentBPM: 0 };

let piano = initInstrument(
  initGui(config, (args) => {
    piano = initInstrument(args);
  })
);

window.addEventListener('click', async () => {
  await start();

  const analyser = new Analyser("fft", 32);
  piano.connect(analyser);
  // setupAnalyser(analyser);

  document.getElementById('press')?.remove()
});

const activeNotes = {};

WebMidi.enable(err => {
  if (err) {
    console.log("WebMidi не доступен:", err);
    return;
  }

  const keyboard = WebMidi.inputs[0];
    
  keyboard?.addListener('noteon', async e => {
    const note = e.note.name + (e.note.accidental || '') + e.note.octave;
    const noteKey = getEnharmonicNote(note);

    const startTime = Date.now();

    activeNotes[noteKey] = {
      startTime,
      update: pushHistory({ note: noteKey, startTime, endTime: startTime + 1000000, duration: 1000000,  velocity: e.velocity }),
    };

    piano.triggerAttack(noteKey, undefined, e.velocity);
    updateBPM(config, noteKey);

    console.log(`Нота: ${noteKey}, velocity: ${e.velocity}`);
  });

  keyboard?.addListener('noteoff', e => {
    const note = e.note.name + (e.note.accidental || '') + e.note.octave;
    const noteKey = getEnharmonicNote(note);

    if (!activeNotes[noteKey]) return;
    
    const { startTime, update } = activeNotes[noteKey];
    const endTime = Date.now(); 
    const duration = Date.now() - startTime;
    reverb.decay = Math.min(duration * 0.3, 4); // Чем дольше нота, тем длиннее реверб

    piano.release = Math.min(duration * 0.7, 3); // release = 70% от длительности
    piano.triggerRelease(noteKey);

    update({ note: noteKey, duration, startTime, endTime });

    delete activeNotes[noteKey];
  });

});