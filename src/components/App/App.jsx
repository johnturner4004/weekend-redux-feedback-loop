import React from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import ThankYou from '../ThankYou/ThankYou';
import Admin from '../Admin/Admin';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      {/* Routers to the different elements used to collect data and one for admin */}
      <Router>
        <Route path="/" exact component={Feeling}/>
        <Route path="/understanding" component={Understanding} />
        <Route path="/support" component={Supported} />
        <Route path="/comments" component={Comments} />
        <Route path="/thank-you" component={ThankYou} />
        <Route path="/admin" component={Admin} />
      </Router>
    </div>
  );
}

export default App;
