import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeCards, openCards, setCards } from '../actions/cards';
import { clearPointsData } from '../actions/points';
import { Button } from '../components/Button';
import { GridCards } from '../components/GridCards';
import { Points } from '../components/Points';
import { Exit } from '../components/Exit';
import { ProgressBar } from '../components/ProgressBar';
import getNewData from '../db/db';
import { openModal } from '../actions/ui';
import { useCards } from '../hooks/useCards';

export const Puzzle = () => {
  const dispatch = useDispatch();

  const [cards,handleNewCards] = useCards();

  //console.log(cards);

  const { modal } = useSelector((state) => state.ui);

  

  dispatch(setCards(cards));
  dispatch(openCards());
  dispatch(clearPointsData());
  setTimeout(() => {
    dispatch(closeCards());
  }, 2500);

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <section className='layout__page'>
      <Points />
      <GridCards />
      <ProgressBar />
      <div className='puzzle__button'>
        <Button color='white' msg='Salir' click={handleOpenModal} />
      </div>
      <Exit open={modal} />
    </section>
  );
};
