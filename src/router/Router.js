import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Exit } from '../components/Exit';
import { GameOver } from '../pages/GameOver';
import { Home } from '../pages/Home';
import { Puzzle } from '../pages/Puzzle';

export default function RouterComponent() {
  const {modal} = useSelector(state => state.ui)
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/game'>
              <>
              <Puzzle />
              <Exit open={modal}/>
              </>
          </Route>
          <Route exact path='/game-over'>
            <GameOver />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
