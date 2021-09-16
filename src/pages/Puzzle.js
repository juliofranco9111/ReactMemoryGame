import React from 'react';
import { useDispatch } from 'react-redux';
import { closeCards, openCards, setCards } from '../actions/cards';
import { clearPointsData } from '../actions/points';
import { Button } from '../components/Button';
import { GridCards } from '../components/GridCards';
import { Points } from '../components/Points';
import { ProgressBar } from '../components/ProgressBar';
import { openModal } from '../actions/ui';
import { useCards } from '../hooks/useCards';

export const Puzzle = () => {
  const dispatch = useDispatch();

  const [cards] = useCards();

  //console.log(cards);


  

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
    <section className='layout__page animated fadeIn faster'>
      <Points />
      <GridCards />
      <ProgressBar />
      <div className='puzzle__button'>
        <Button color='white' msg='Salir' click={handleOpenModal} />
      </div>
    </section>
  );
};
