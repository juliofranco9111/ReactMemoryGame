import { points, user } from '../types/types';

export const addAttempt = (attempts) => {
  let result = attempts + 1;
  return {
    type: points.addAttempt,
    payload: result,
  };
};
export const addPoints = (point) => {
  let result = point + 1000;
  return {
    type: points.addPoints,
    payload: result,
  };
};

export const updateBestPuntuation = (pointsUser) => ({
  type: points.updateBestPuntuation,
  payload: pointsUser,
});

export const addUserName = (userName) => ({
  type: user.addUserName,
  payload: userName,
});

export const clearPointsData = () => ({ type: points.clearPointsData });
