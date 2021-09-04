import { cards } from '../types/types';

export const setCards = (cardsArray) => ({
  type: cards.setAllCards,
  payload: cardsArray,
});

export const toggleCards = () => ({ type: cards.toggleCards });

export const setComparing = (bool) => ({
  type: cards.setComparing,
  payload: bool
})

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

export const setOpenCard = (card) => ({
  type: cards.setOpenCard,
  payload: card,
});

export const setCloseCard = (card) => ({
  type: cards.setCloseCard,
  payload: card,
});

export const clearOptions = () => ({ type: cards.clearOptions });
