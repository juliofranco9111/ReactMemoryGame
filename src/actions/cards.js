import { cards } from '../types/types';


export const setCards = (cardsArray) => ({
  type: cards.setAllCards,
  payload: cardsArray,
});

export const setFirstOption = (card) => ({
  type: cards.setFirstOption,
  payload: card,
});

export const setSecondOption = (card) => ({
  type: cards.setSecondOption,
  payload: card,
});

export const clearOptions = () => ({ type: cards.clearOptions })


/* 

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
*/



