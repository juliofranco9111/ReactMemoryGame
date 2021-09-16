import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addUserName } from '../actions/points';
import { Button } from '../components/Button';
import { useForm } from '../hooks/useForm';

export const Home = () => {
  const dispatch = useDispatch();
  //let nameUser = localStorage.getItem('name') || '';

  /*  if (nameUser && nameUser.length > 0) {
    dispatch(addUserName(nameUser))
  } */
  const history = useHistory();

  const { userName } = useSelector((state) => state.points);

  const [values, handleInputChange] = useForm({
    name: userName,
  });

  const { name } = values;

  const handleSubmit = () => {
    localStorage.setItem('name', name);
    dispatch(addUserName(name));
    history.push('/game')
    
  };

  return (
    <div className='layout__page animated fadeIn faster'>
      <div className='home__component'>
        <h1 className='title'>Memory Puzzle</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name_field'>Tu nombre:</label>
          <input
            autoComplete='off'
            type='text'
            name='name'
            value={values.name}
            placeholder='Escribe algo...'
            onChange={handleInputChange}
          />
          <div>
              <Button color='black' click={handleSubmit} msg='Empezar' />
          </div>
        </form>
      </div>
    </div>
  );
};
