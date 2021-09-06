import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenCard, setOption, setComparing } from '../actions/cards';

export const Card = ({ item, idx }) => {
  const dispatch = useDispatch();
  const { cardsOpen, comparing, firstOption, secondOption } = useSelector(
    (state) => state.cards
  );

  const handleClick = () => {
    dispatch(setOpenCard(item.id));
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
      className='options'
      id={item.open || cardsOpen ? item.name : ''}
      onClick={handleClick}>
      <h1 className='text-5xl'>
        {' '}
        {item.open || cardsOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.symbol} />
        </svg>
        ) : (
          ''
        )}
      </h1>
    </button>
  );
};
