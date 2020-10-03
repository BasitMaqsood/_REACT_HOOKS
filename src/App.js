import React from 'react';

import CounterClass from './component/ClassCounter';
import CounterHooks from './component/HooksCounter';
import HooksCounterTwo from './component/HooksCounterTwo';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <CounterClass /> */}
      {/* <CounterHooks /> */}
      <HooksCounterTwo />
    </div>
  );
}

export default App;
