const enharmonicMap = {
  'A#': 'Bb',
  'C#': 'Db',
  'D#': 'Eb',
  'F#': 'Gb',
  'G#': 'Ab'
};

export const getEnharmonicNote = (note) => {
    if (note.length === 2) return note;

    const a = note[0] + note[1], b = note[note.length - 1];

    for (const key in enharmonicMap) {
        if (a === key)
            return enharmonicMap[key] + b;
    }

    return note;
}