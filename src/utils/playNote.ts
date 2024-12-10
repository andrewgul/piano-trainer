const audioContext = new AudioContext();

const noteFrequencies = {
  C: 261.63,
  'C#': 277.18,
  D: 293.66,
  'D#': 311.13,
  E: 329.63,
  F: 349.23,
  'F#': 369.99,
  G: 392.0,
  'G#': 415.3,
  A: 440.0,
  'A#': 466.16,
  B: 493.88,
};

type ExtraConfig = {
  octave?: number;
  duration?: number;
  delay?: number;
};

// Function to play a sound for a given note
export const playNote = (
  note: keyof typeof noteFrequencies,
  { duration = 0.25, octave = 4, delay = 0 }: ExtraConfig = {},
): void => {
  const frequency = noteFrequencies[note] * Math.pow(2, octave - 4);

  if (!frequency) {
    console.error('Invalid note!');
    return;
  }

  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  oscillator.type = 'sine'; // Sine wave for a smooth sound
  gainNode.gain.setValueAtTime(0.5, audioContext.currentTime); // Volume control

  const startTime = audioContext.currentTime + delay; // Delay is added here

  oscillator.frequency.setValueAtTime(frequency, startTime);
  oscillator.type = 'sine'; // Sine wave for a smooth sound
  gainNode.gain.setValueAtTime(0.5, startTime); // Volume control

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start(startTime); // Starts the oscillator after the delay
  oscillator.stop(startTime + duration); // Stops the oscillator after the specified duration
};
