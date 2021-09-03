import {combineReducers} from "redux";
import { cardsReducer } from "./cardsReducer";
import { pointsReducer } from "./pointsReducer";

export const rootReducer = combineReducers({
  cards: cardsReducer,
  points: pointsReducer, 
});