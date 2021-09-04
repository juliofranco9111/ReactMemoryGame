import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { clearOptions, setCloseCard, setComparing } from '../actions/cards';
import { Card } from './Card';

export const GridCards = () => {
  const { cards, firstOption, secondOption } = useSelector(
    (state) => state.cards
  );
  
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    if (cards && cards.length > 0) {
      setLoading(false);
    } else {
      return;
    }
  }, [cards]);

  const compare = () => {
    if (!firstOption || !secondOption) {
      return;
    }

    if (firstOption.symbol === secondOption.symbol) {
      dispatch(clearOptions())
      dispatch(setComparing(false))

    } else {
      
      let arr = cards.map((e) => {
        if(firstOption.id === e.id || secondOption.id === e.id) {
          e.open = false;
          return e;
        }else{
          return e
        }
      })
      setTimeout(() => {
        dispatch(setCloseCard(arr))
        dispatch(clearOptions())
        dispatch(setComparing(false))

      }, 1000);
    }
  };

  useEffect(() => {
    compare();
  }, [secondOption]);


  return (
    <>
      {!loading ? (
        cards.map((e, idx) => {
          return <Card key={e.id} item={e} idx={idx} />;
        })
      ) : (
        <h1 className='text-4xl animate-pulse'>Loading</h1>
      )}
    </>
  );
};
