export const entranceDelays = {
  background: 0,
  smoke: 200,
  titleTop: 400,
  titleMain: 600,
  subtitle: 800,
  paragraph: 1000,
  person: 1200,
  photoOne: 1400,
  photoTwo: 1520,
  photoThree: 1640,
  audio: 1700,
};

export const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);
