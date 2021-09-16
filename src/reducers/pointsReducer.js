import { points, user } from '../types/types';

const initialState = {
  bestPuntuation: 0,
  currentPoints: 0,
  attempts: 0,
  userName: localStorage.getItem('name') || ''
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
      case points.clearPointsData:
        return {
          ...state,
          currentPoints: 0,
          attempts: 0
        };

        case points.addAttempt: 
        return{
          ...state, 
          attempts: action.payload 
        }

        case user.addUserName:
          return {
            ...state, 
            userName: action.payload
          }

    default:
      return state;
  }
};
