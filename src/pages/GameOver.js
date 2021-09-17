import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCardsData, closeCards, SetCards } from '../actions/cards';
import { clearPointsData, updateBestPuntuation } from '../actions/points';
import { Button } from '../components/Button';
import { getPercents, getTotal } from '../helpers/game-over';
import { useCards } from '../hooks/useCards';

export default function GameOver(){
  const [cards] = useCards();
  const dispatch = useDispatch();
  const { currentPoints, bestPuntuation, userName, attempts } = useSelector(
    (state) => state.points
  );

  const percent = getPercents(attempts);
  const total = getTotal(currentPoints, percent);

  const handleStartAgain = () => {
    comparingPoints();
    clearData();
  };

  const handleExit = () => {
    comparingPoints();
    dispatch(updateBestPuntuation(total));
  };

  const comparingPoints = () => {
    if (bestPuntuation < total) {
      dispatch(updateBestPuntuation(total));
    }
  };

  const clearData = () => {
    dispatch(clearCardsData());
    dispatch(clearPointsData());
    dispatch(SetCards(cards));
    setTimeout(() => {
      dispatch(closeCards());
    }, 2500);
  };

  return (
    <section className='layout__page gameover__page animated fadeIn faster'>
      <h1 className='title'>¡Muy bien!</h1>
      <h2 className='username'>{userName}</h2>
      <h4>
        mejor:<strong> {bestPuntuation}</strong>
      </h4>
      <h4>
        puntos: <strong>{currentPoints}</strong>
      </h4>
      <h4>
        bonus: <strong>+{getPercents(attempts)}%</strong>
      </h4>
      <h4>
        (intentos: <strong>{attempts}</strong>)
      </h4>
      <h2>
        total: <strong>{total}</strong>
      </h2>

      <div className='gameover__buttons'>
        <Link to='/'>
          <Button msg='Salir' color='white' click={handleExit} />
        </Link>
        <Link to='/game'>
          <Button msg='Jugar de nuevo' color='black' click={handleStartAgain} />
        </Link>
      </div>
    </section>
  );
};
