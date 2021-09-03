import { cards } from '../types/types';

const initialState = {
  cards: [],
  firstOption: null,
  secondOption: null,
};

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case cards.setAllCards:
      return {
        ...state,
        cards: action.payload,
      };

    case cards.setFirstOption:
      return {
        ...state,
        firstOption: action.payload,
      };

    case cards.setSecondOption:
      return {
        ...state,
        secondOption: action.payload,
      };
    case cards.clearOptions:
      return {
        ...state,
        firstOption: null,
        secondOption: null,
      };

    default:
      return state;
  }
};


