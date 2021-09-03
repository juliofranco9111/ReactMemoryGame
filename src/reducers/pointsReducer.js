import { points } from '../types/types';

const initialState = {
  bestPuntuation: 0,
  currentPoints: 0,
};

export const pointsReducer = (state = initialState, action) => {
  switch (action.type) {
    case points.updateBestPuntuation:
      return {
        ...state,
        bestPuntuation: action.payload,
      };

      case points.addPoints:
        return {
          ...state,
          currentPoints: action.payload,
        };

    default:
      return state;
  }
};