import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const ProgressBar = () => {
  const { cardsPaired, cardsA } = useSelector((state) => state.cards);

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (cardsA && cardsA.length > 0) {
      setShow(true);
    } else {
      return;
    }
  }, [cardsA]);

  const returnPercent = (int) => {
    return (100 / 8) * int;
  };

  return (
    <div className="puzzle__progress">
    <h3 className="puzzle__attempts">Attempts: 3</h3>
      {show && (
        <progress
          value={cardsPaired && returnPercent(cardsPaired)}
          max='100'></progress>
      )}
    </div>
  );
};
