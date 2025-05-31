import { WebMidi } from 'webmidi';
import { PolySynth, Reverb, Synth, Analyser, Sampler, start, context } from 'tone';
import {getEnharmonicNote} from '@/enharmonic';
import { notes } from './notes';
import {setupAnalyser} from '@/sphere';

const synth = new PolySynth(Synth).toDestination();

const instrument = 'bright_acoustic_piano-mp3'; // 'upright-piano'; //
const reverb = new Reverb(2.5).toDestination();

const piano = new Sampler({
  urls: notes(1, 7, '.mp3'),
  release: 1,
  baseUrl: `https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/${instrument}/`, //`/sounds/${instrument}/`, // 
  onload: () => {
    console.log("Sampler ready!", piano);
  }
}).toDestination();

piano.envelope = {
  attack: 0.01,  // Время нарастания (сек)
  decay: 0.1,    // Время спада до sustain
  sustain: 0.7,  // Уровень громкости при удержании
  release: 0.5   // Время затухания
};

piano.connect(reverb);

window.addEventListener('click', async () => {
  await start();

  const analyser = new Analyser("fft", 32);
  piano.connect(analyser);
  setupAnalyser(analyser);

  document.getElementById('press')?.remove()
});

window.midiano = { synth, piano };

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

    activeNotes[noteKey] = Date.now();

    piano.triggerAttack(noteKey, undefined, e.velocity);

    console.log(`Нота: ${noteKey}, velocity: ${e.velocity}`);
  });

  keyboard?.addListener('noteoff', e => {
    const note = e.note.name + (e.note.accidental || '') + e.note.octave;
    const noteKey = getEnharmonicNote(note);

    if (!activeNotes[noteKey]) return;
    
    const duration = Date.now() - activeNotes[noteKey];
    reverb.decay = Math.min(duration * 0.3, 4); // Чем дольше нота, тем длиннее реверб

    piano.release = Math.min(duration * 0.7, 3); // release = 70% от длительности
    piano.triggerRelease(noteKey);

    delete activeNotes[noteKey];
  });

});