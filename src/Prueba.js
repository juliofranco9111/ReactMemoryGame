import React from 'react';
import { useDispatch } from 'react-redux';
import { setCards, toggleCards } from './actions/cards';
import { GridCards } from './components/GridCards';
import getNewData from './db/db';
import { Layout } from './components/Layout';
import { Points } from './components/Points';

export const Prueba = () => {
  const dispatch = useDispatch();

  dispatch(setCards(getNewData()));
  setTimeout(() => {
    dispatch(toggleCards());
  }, 2500);

  let container =
    'h-screen overflow-hidden flex flex-col justify-center w-100 items-center';

  return (
    <div className={container}>
      <Layout>
        <Points/>
        <GridCards />
      </Layout>
    </div>
  );
};
