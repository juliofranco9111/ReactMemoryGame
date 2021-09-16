import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { GameOver } from '../pages/GameOver';
import { Home } from '../pages/Home';
import { Puzzle } from '../pages/Puzzle';

export default function RouterComponent() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/game'>
            <Puzzle />
          </Route>
          <Route exact path='/game-over'>
            <GameOver />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
