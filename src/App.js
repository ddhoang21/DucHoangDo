import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/Navbar';
import Main from './pages/Main';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
          <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/about' component={About} />
            <Route path='/resume' component={Resume} />
            <Route path='/portfolio' component={Portfolio} />
          </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App;
