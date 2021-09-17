import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../components/Button';
import { GridCards } from '../components/GridCards';
import { Points } from '../components/Points';
import { ProgressBar } from '../components/ProgressBar';
import { openModal } from '../actions/ui';
import { useHistory } from 'react-router';

export default function Puzzle() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { cardsA } = useSelector((state) => state.cards);

  if (!cardsA || cardsA.length < 1) {
    history.push('/');
  }

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
}
