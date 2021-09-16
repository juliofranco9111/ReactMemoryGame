import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { clearCardsData, setCards } from '../actions/cards';
import { clearPointsData } from '../actions/points';
import getNewData from '../db/db';

export const Points = () => {
  const { attempts, currentPoints } = useSelector((state) => state.points);
  const { cardsA, cardsPaired } = useSelector((state) => state.cards);
  const history = useHistory();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cardsA && cardsA.length > 0) {
      setShow(true);
    } else {
      return;
    }
  }, [cardsA]);

  useEffect(() => {
    if (cardsPaired === 8) {
      history.push('/game-over');
    }
  }, [cardsPaired]);

  const handleDispatch = () => {
    dispatch(clearPointsData());
    dispatch(clearCardsData());
    dispatch(setCards(getNewData()));
  };

  return (
    <>
      {show && (
        <>
          <h3 className="puzzle__best">Best: {currentPoints}</h3>
          <h2 className="puzzle__points">Points:{attempts}</h2>
        </>
      )}
      {/*   <div>
        <Link onClick={handleDispatch} className='nes-btn' to='/'>
          Atrás
        </Link>
      </div> */}
    </>
  );
};
