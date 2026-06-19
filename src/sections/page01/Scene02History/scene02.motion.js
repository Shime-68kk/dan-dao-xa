export const scene02Delays = {
  bridge: 0,
  scriptTitle: 150,
  conjunction: 300,
  mainTitleOne: 420,
  mainTitleTwo: 500,
  flower: 550,
  body: 700,
  map: 850,
  caption: 1000,
};

export const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);
