import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Shop from './pages/Shop';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
