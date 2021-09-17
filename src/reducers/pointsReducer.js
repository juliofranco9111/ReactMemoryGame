import { points, user } from '../types/types';

const initialState = {
  bestPuntuation: parseInt(localStorage.getItem('best')) || 0,
  currentPoints: 0,
  attempts: 0,
  userName: localStorage.getItem('name') || '',
};

export const pointsReducer = (state = initialState, action) => {
  switch (action.type) {
    case points.updateBestPuntuation:
      localStorage.setItem('best', action.payload);
      return {
        ...state,
        bestPuntuation: action.payload,
      };

    case points.addPoints:
      return {
        ...state,
        currentPoints: action.payload,
      };
    case points.clearPointsData:
      return {
        bestPuntuation: parseInt(localStorage.getItem('best')) || 0,
        currentPoints: 0,
        attempts: 0,
        userName: localStorage.getItem('name') || '',
      };

    case points.addAttempt:
      return {
        ...state,
        attempts: action.payload,
      };

    case user.addUserName:
      localStorage.setItem('name', action.payload);
      return {
        ...state,
        userName: action.payload,
      };

    default:
      return state;
  }
};
