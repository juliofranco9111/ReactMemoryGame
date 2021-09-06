import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  addCardsPaired,
  clearOptions,
  setCloseCard,
  setComparing,
} from '../actions/cards';
import { addAttempt, addPoints } from '../actions/points';
import { Card } from './Card';

export const GridCards = () => {
  const { cardsA, firstOption, secondOption } = useSelector(
    (state) => state.cards
  );

  const { attempts, currentPoints } = useSelector((state) => state.points);

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    if (cardsA && cardsA.length > 0) {
      setLoading(false);
    } else {
      return;
    }
  }, [cardsA]);

  const compare = () => {
    if (!firstOption || !secondOption) {
      return;
    }

    if (firstOption.symbol === secondOption.symbol) {
      dispatch( clearOptions())
        dispatch(setComparing(false))
        dispatch(addAttempt(attempts))
        dispatch(addPoints(currentPoints))
        dispatch(addCardsPaired())
    } else {
      setTimeout(() => {
        dispatch(setCloseCard(firstOption.id));
        dispatch(setCloseCard(secondOption.id));
        dispatch(setComparing(false));
        dispatch(addAttempt(attempts));
        dispatch(clearOptions());
      }, 700);
    }
  };

  useEffect(() => {
    compare();
  }, [secondOption]);

  return (
    <div className='grid grid-cols-4 gap-2 sm:gap-5 w-full'>
      {!loading ? (
        cardsA.map((e, idx) => {
          return <Card key={e.id} item={e} idx={idx} />;
        })
      ) : (
        <h1 className='text-4xl animate-pulse'>Loading</h1>
      )}
    </div>
  );
};
