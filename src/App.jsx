import { useState } from 'react';
import './App.css';
import { Button } from './components';
import DevtoolsStatus from './components/devtool/devtoolDetector';
import useDevtoolsStatus from './hooks/useDevtoolsStatus';

function App() {
  // const navigate = () => {
  //   window.location.href = 'https://www.google.com';
  // };

  // const handleDevtoolsOpen = () => {
  //   // console.log('DevTools are open!');
  //   navigate();
  //   // You can perform any action here, such as logging, setting state, etc.
  // };

  // Use the custom hook
  // useDevtoolsStatus(handleDevtoolsOpen);

  return (
    <div className="bg-red-300">
      {/* <DevtoolsStatus /> */}
      <Button>Text</Button>
    </div>
  );
}

export default App;
