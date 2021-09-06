import { useSelector } from 'react-redux';


const {firstOption,
    secondOption} = useSelector(state => state.cards)

export const compare = () => {
  if (!firstOption || !secondOption) {
    return;
  }

  if (firstOption.symbol === secondOption.symbol) {
    dispatch(clearOptions());
    dispatch(setComparing(false));
    dispatch(addAttempt());
  } else {
    let arr = cards.map((e) => {
      if (firstOption.id === e.id || secondOption.id === e.id) {
        e.open = false;
        return e;
      } else {
        return e;
      }
    });
    setTimeout(() => {
      dispatch(setCloseCard(arr));
      dispatch(clearOptions());
      dispatch(setComparing(false));
    }, 700);
  }
};
