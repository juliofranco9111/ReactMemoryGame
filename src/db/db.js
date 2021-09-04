const symbols = [
  '🍕',
  '🍔',
  '🌭',
  '🍗',
  '🍦',
  '🍰',
  '🍺',
  '🥑',
  '🍕',
  '🍔',
  '🌭',
  '🍗',
  '🍦',
  '🍰',
  '🍺',
  '🥑',
];

let data = [];

symbols.forEach((e, i) => {
  data.push({ symbol: e, id: i+1, open: false });
});

export default function getNewData() {
  return data.sort(() => Math.random() - 0.5);
}

