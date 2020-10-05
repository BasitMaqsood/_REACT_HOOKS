import React from 'react';

import CounterClass from './component/ClassCounter';
import CounterHooks from './component/HooksCounter';
import HooksCounterTwo from './component/HooksCounterTwo';
import HooksCounterThree from './component/HooksCounterThree';
import HooksCounterFour from './component/HooksCounterFour';
import HooksCounterFive from './component/HooksCounterFive';
import HookMouse from './component/HookMouse';
import CounterContainer from './component/MouseContainer';
import IntervalClassComponent from './component/IntervalClassComponent';
import IntervalHooksCounter from './component/IntervalHooksCounter';
import DataFetching from './component/DataFething';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <CounterClass /> */}
      {/* <CounterHooks /> */}
      {/* <HooksCounterTwo /> */}
      {/* <HooksCounterThree /> */}
      {/* <HooksCounterFour /> */}
      {/* <HooksCounterFive /> */}
      {/* <HookMouse /> */}
      {/* <CounterContainer /> */}
      {/* <IntervalClassComponent /> */}
      {/* <IntervalHooksCounter /> */}
      <DataFetching />
    </div>
  );
}

export default App;
