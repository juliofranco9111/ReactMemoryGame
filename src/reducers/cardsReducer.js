import { cards } from '../types/types';

const initialState = {
  cards: null,
  cardsOpen: true,
  firstOption: null,
  secondOption: null,
  comparing: false,
};

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case cards.setAllCards:
      return {
        ...state,
        cards: action.payload,
      };

    case cards.toggleCards:
      return {
        ...state,
        cardsOpen: false,
      };

    case cards.setCloseCard:
      return {
        ...state,
        cards: action.payload,
      };

    case cards.setComparing:
      return {
        ...state,
        comparing: action.payload,
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
