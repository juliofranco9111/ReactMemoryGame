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
  data.push({ symbol: e, id: i+1, open: true });
});

export default function getNewData() {
  return data.sort(() => Math.random() - 0.5);
}

