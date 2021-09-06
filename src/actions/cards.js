import { cards } from '../types/types';

export const setCards = (cardsArray) => ({
  type: cards.setAllCards,
  payload: cardsArray,
});

export const toggleCards = () => ({ type: cards.toggleCards });

export const setComparing = (bool) => ({
  type: cards.setComparing,
  payload: bool,
});

export const setOption = (option, int) => {
  if (int === 1) {
    return setFirstOption(option);
  } else {
    return setSecondOption(option);
  }
};

const setFirstOption = (card) => ({
  type: cards.setFirstOption,
  payload: card,
});

const setSecondOption = (card) => ({
  type: cards.setSecondOption,
  payload: card,
});

export const setOpenCard = (id) => ({
  type: cards.setOpenCard,
  payload: id,
});

export const setCloseCard = (id) => ({
  type: cards.setCloseCard,
  payload: id,
});

export const clearOptions = () => ({ type: cards.clearOptions });

export const addCardsPaired = () => ({ type: cards.addCardsPaired });
