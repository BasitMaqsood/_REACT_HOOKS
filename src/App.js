import React from 'react';

import CounterClass from './component/ClassCounter';
import CounterHooks from './component/HooksCounter';
import HooksCounterTwo from './component/HooksCounterTwo';
import HooksCounterThree from './component/HooksCounterThree';
import HooksCounterFour from './component/HooksCounterFour';
import HooksCounterFive from './component/HooksCounterFive';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <CounterClass /> */}
      {/* <CounterHooks /> */}
      {/* <HooksCounterTwo /> */}
      {/* <HooksCounterThree /> */}
      {/* <HooksCounterFour /> */}
      <HooksCounterFive />
    </div>
  );
}

export default App;
