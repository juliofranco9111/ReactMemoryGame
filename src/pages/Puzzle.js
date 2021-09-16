import React from 'react';
import { useDispatch } from 'react-redux';
import { closeCards, openCards, setCards } from '../actions/cards';
import { clearPointsData } from '../actions/points';
import { Button } from '../components/Button';
import { GridCards } from '../components/GridCards';
import { Points } from '../components/Points';
import { ProgressBar } from '../components/ProgressBar';
import getNewData from '../db/db';

export const Puzzle = () => {
  const dispatch = useDispatch();

  const getCards = () => {
    let newData = getNewData();
    return newData;
  };

  dispatch(setCards(getCards()));
  dispatch(openCards());
  dispatch(clearPointsData());
  setTimeout(() => {
    dispatch(closeCards());
  }, 2500);

  return (
    <section className='layout__page'>
      <Points />
      <GridCards />
      <ProgressBar />
      <div className='puzzle__button'>
        <Button color='white' msg='Salir'/>
      </div>
    </section>
  );
};
