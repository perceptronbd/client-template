import { useState } from 'react';
import './App.css';
import { Button } from './components';
import DevtoolsStatus from './components/devtool/devtoolDetector';
import useDevtoolsStatus from './hooks/useDevtoolsStatus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import InputPage from './pages/home/input/InputPage';
import TablePage from './pages/home/table/TablePage';

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
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Button>Text</Button>} />
            <Route path="buttons" element={<Button>Text</Button>} />
            <Route path="inputs" element={<InputPage />} />
            <Route path="tables" element={<TablePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
