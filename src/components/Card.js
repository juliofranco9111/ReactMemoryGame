import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenCard, setOption,setComparing } from '../actions/cards';

export const Card = ({ item, idx }) => {
  const dispatch = useDispatch();
  const { cardsOpen,comparing ,firstOption, secondOption } = useSelector(
    (state) => state.cards
  );

  const handleClick = () => {
    item.open = true;
    dispatch(setOpenCard(item));
    //cards[idx].open = true;
    if (firstOption && secondOption) {
      return;
    }

    if (!firstOption) {
      dispatch(setOption(item, 1));
    } else {
      dispatch(setOption(item, 2));
      dispatch(setComparing(true));
    }
  };

  return (
    <button
      disabled={item.open || comparing || cardsOpen}
      id='options'
      onClick={handleClick}>
      <h1 className='text-5xl'> {item.open || cardsOpen ? item.symbol : ''}</h1>
    </button>
  );
};
