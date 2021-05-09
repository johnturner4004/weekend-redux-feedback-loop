import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route path="/" exact component={Feeling}/>
        <Route path="/understanding" component={Understanding} />
        {/* <Route path="/supported" component={Supported} /> */}
        {/* <Route path="/comments" component={Comments} /> */}
      </Router>
    </div>
  );
}

export default App;
