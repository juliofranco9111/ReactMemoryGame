import React from 'react'
import { Button } from './Button'

export const Exit = () => {
    return (
        <div className="layout__page">
            <h1 className='title'>¿Quieres salir?</h1>



            <div className="puzzle__button">
            <p>Al salir perderás todo tu progreso</p>
            <br/>
                <Button msg="Si, salir" color='white'/>
                <br/>
                <Button  msg="No, seguir jugando" color='black' />
            </div>
        </div>
    )
}
