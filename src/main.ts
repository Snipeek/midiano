import { WebMidi } from 'webmidi';
import { PolySynth, Synth, Sampler, start } from 'tone';
import {getEnharmonicNote} from '@/enharmonic';
import { notes } from './notes';

window.addEventListener('click', () => start());

const synth = new PolySynth(Synth).toDestination();

const instrument = 'acoustic_bass-mp3'; //acoustic_grand_piano-mp3

const piano = new Sampler({
  urls: notes(),
  release: 1,
  baseUrl: `https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/${instrument}/`,
  onload: () => {
    console.log("Sampler ready!", piano);
  }
}).toDestination();

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
    piano.release = Math.min(duration * 0.7, 3); // release = 70% от длительности
    piano.triggerRelease(noteKey);

    delete activeNotes[noteKey];
  });

});