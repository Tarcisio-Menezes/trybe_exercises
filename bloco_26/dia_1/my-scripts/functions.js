const imcCalc = (m, a) => {
  return (m / a * a);
};

const vMedia = (d, t) => {
  return (d / t);
};

const randomGame = () => {
  const rand = Math.random() * (10 - 1) + 1;
  return rand;
};

module.exports = { imcCalc, vMedia, randomGame };
