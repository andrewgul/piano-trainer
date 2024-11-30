const audioContext = new AudioContext();

const noteFrequencies = {
  'C': 261.63,
  'C#': 277.18,
  'D': 293.66,
  'D#': 311.13,
  'E': 329.63,
  'F': 349.23,
  'F#': 369.99,
  'G': 392.00,
  'G#': 415.30,
  'A': 440.00,
  'A#': 466.16,
  'B': 493.88,
};

type ExtraConfig = {
  octave?: number;
  duration?: number;
};

// Function to play a sound for a given note
export const playNote = (note: keyof typeof noteFrequencies, { duration = 0.25, octave = 4 }: ExtraConfig = {}): void => {
  const frequency = noteFrequencies[note] * Math.pow(2, octave - 4);

  if (!frequency) {
    console.error("Invalid note!");
    return;
  }

  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  oscillator.type = 'sine';  // Sine wave for a smooth sound
  gainNode.gain.setValueAtTime(0.5, audioContext.currentTime); // Volume control

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration);
};