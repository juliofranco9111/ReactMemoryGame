import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeModal } from '../actions/ui';
import { Button } from './Button';

export const Exit = () => {


const dispatch = useDispatch()

const handleContinue = () => {
    dispatch(closeModal())
}
const handleExit = () => {
  dispatch(closeModal())
}
  return (
    <section className='exit__page'>
      <h1 className='title'>¿Quieres salir?</h1>

      <div className='exit__buttons'>
        <p>Al salir perderás todo tu progreso</p>
        <Link to='/'>
        <Button msg='Si, salir' color='white' click={handleExit}/>
        </Link>
        <Button msg='No, seguir jugando' color='black' click={handleContinue} />
      </div>
    </section>
  );
};
