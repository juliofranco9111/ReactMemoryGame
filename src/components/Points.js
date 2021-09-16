import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export const Points = () => {
  const { currentPoints, bestPuntuation } = useSelector(
    (state) => state.points
  );
  const { cardsA, cardsPaired } = useSelector((state) => state.cards);
  const history = useHistory();
  const [show, setShow] = useState(false);
  //const dispatch = useDispatch();

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
  }, [cardsPaired, history]);

  /*   const handleDispatch = () => {
    dispatch(clearPointsData());
    dispatch(clearCardsData());
    dispatch(setCards(getNewData()));
  }; */

  return (
    <>
      {show && (
        <>
          <h3 className='puzzle__best'>Best: {bestPuntuation}</h3>
          <h2 className='puzzle__points'>Points:{currentPoints}</h2>
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
