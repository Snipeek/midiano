import { getEnharmonicNote } from "./enharmonic";

export const notes = (start = 0, end = 7, type = '.mp3') => {
    const res = {};

    const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    const startOctave = 0; // A0
    const endOctave = 7;   // Gb7
  
    for (let octave = startOctave; octave <= endOctave; octave++) {
      for (const note of notes) {
        const key = getEnharmonicNote(note + octave);

        res[key] = key + type;
      }
    }

    return res;
  }