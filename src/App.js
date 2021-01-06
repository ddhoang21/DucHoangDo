import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavigationBar from './components/Navbar';
import Main from './pages/Main';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

import VKBE from './projects/VKBE/Vkbe';
import Rinqydink from './projects/Rinqydink/Rinqydink';
import BookItYourself from './projects/Book-It-Yourself/BookItYourself';

const App = () => {
  return (
    <div className='body'>
      <Router>
        <NavigationBar />
          <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/about' component={About} />
            <Route path='/portfolio' exact component={Portfolio} />
            <Route path='/portfolio/vkbe' component={VKBE} />
            <Route path='/portfolio/rinqydink' component={Rinqydink} />
            <Route path='/portfolio/bookityourself' component={BookItYourself} />
            <Route path='/contact' component={Contact} />
          </Switch>
      </Router>
    </div>
  )
}

export default App;
