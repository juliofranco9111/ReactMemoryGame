import React from 'react'
import { useDispatch } from 'react-redux'
import { setCards } from './actions/cards'
import { GridCards } from './components/GridCards'
import getNewData from './db/db'

export const Prueba = () => {
    const dispatch = useDispatch();

    dispatch(setCards(getNewData()))

    let container = 'grid'

    return (
        <div className={container}>
            <GridCards/>
        </div>
    )
}
