import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const GridCards = () => {
  const { cards } = useSelector((state) => state.cards);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (cards && cards.length > 0) {
      setLoading(false);
    } else {
      return;
    }
  }, [cards]);

  const handleClick = (card) => {
    console.log(card);
  }

  const classContainer =
    'grid place-content-center content-center w-100 h-screen text-center';

  return (
    <div className={classContainer}>
      {!loading ? (
        <div className='grid gap-1 grid-cols-4 grid-row-4 p-2'>
          {cards.map((e) => {
            return (
              <button onClick={()=>{handleClick(e)}}
                key={e.id}
                className='border-2 w1/4 p-4 grid content-center border-black'>
                <h1 className='text-2xl'>{e.symbol}</h1>
              </button>
            );
          })}
        </div>
      ) : (
        <h1 className='text-4xl animate-pulse'>Loading</h1>
      )}
    </div>
  );
};
