export const getPercents = (attempts) => {
  if (attempts > 0 && attempts < 15) {
    return 20;
  } else if (attempts > 15 && attempts < 20) {
    return 15;
  } else {
    return 0;
  }
};

export const getTotal = (points, percent) => {
  const totalPercent = (points * percent) / 100;
  return points + totalPercent;
};
