import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { clearCardsData } from '../actions/cards';
import { clearPointsData } from '../actions/points';

export const GameOver = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentPoints, bestPuntuation, userName } = useSelector(
    (state) => state.points
  );

  const handleStartAgain = () => {
     dispatch(clearCardsData());
     dispatch(clearPointsData());
    setTimeout(() => {

        history.push('/game')
    }, 500) 
    
  };

  return (
    <>
      <h1 className='text-2xl'>Juego terminado</h1>
      <div className='flex justify-center'>
        <i className='nes-icon trophy is-large text-center block'></i>
      </div>
      <h2 className='e'>Felicidades {userName}</h2>
      <div>
        <h2 className='text-3xl'>{currentPoints}</h2>
        <h2 className=''>Mejor puntuación: 1850</h2>
      </div>
      <button onClick={handleStartAgain} className='nes-btn w-full mt-4'>
        Otra vez
      </button>
      <Link to={'/'}>
        <button className='nes-btn w-full mt-4'>Salir</button>
      </Link>
    </>
  );
};
