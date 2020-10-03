import React from 'react';

import CounterClass from './component/ClassCounter';
import CounterHooks from './component/HooksCounter';
import HooksCounterTwo from './component/HooksCounterTwo';
import HooksCounterThree from './component/HooksCounterThree';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <CounterClass /> */}
      {/* <CounterHooks /> */}
      {/* <HooksCounterTwo /> */}
      <HooksCounterThree />
    </div>
  );
}

export default App;
