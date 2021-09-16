import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { clearCardsData } from '../actions/cards';
import { clearPointsData } from '../actions/points';
import { Button } from '../components/Button';
import { getPercents, getTotal } from '../helpers/game-over';

export const GameOver = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentPoints, bestPuntuation, userName, attempts } = useSelector(
    (state) => state.points
  );

  const percent = getPercents(attempts);
  const total = getTotal(currentPoints, percent);

  console.log(attempts);
  console.log(getPercents(attempts));

  const handleStartAgain = () => {
    dispatch(clearCardsData());
    dispatch(clearPointsData());
    setTimeout(() => {
      history.push('/game');
    }, 500);
  };

  return (
    <section className='layout__page gameover__page'>
      <h1 className='title'>Felicidades</h1>
      <h2 className='username'>{userName}</h2>
      <h4>
        points: <strong>{currentPoints}</strong>
      </h4>
      <h4>
        bonus: <strong>+{ getPercents(attempts) }%</strong>(Attempts: <strong>{attempts}</strong>)
      </h4>
      <h2>
        total: <strong>{total}</strong>
      </h2>
      <h4>
        best:<strong> {bestPuntuation}</strong>
      </h4>
      <div className='gameover__buttons'>
        <Link to='/'>
          <Button msg='Salir' color='white' />
        </Link>
        <Button msg='Jugar de nuevo' color='black' click={handleStartAgain} />
      </div>
    </section>
  );
};
