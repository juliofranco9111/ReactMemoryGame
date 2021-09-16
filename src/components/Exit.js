import React from 'react';
import { Button } from './Button';

export const Exit = () => {
  return (
    <div className='layout__page'>
      <h1 className='title'>¿Quieres salir?</h1>

      <div className='exit__buttons'>
        <p>Al salir perderás todo tu progreso</p>
        <Button msg='Si, salir' color='white' />
        <Button msg='No, seguir jugando' color='black' />
      </div>
    </div>
  );
};
