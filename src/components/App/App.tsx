import React from 'react';
import logo from '../../logo.svg';
import { CityList } from '../CityList';
import { Search } from '../Search';
import StoreProvider from '../../context';
import './App.css';

export const App: React.FC = () => (
  <StoreProvider>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Search/>
        <CityList />
      </header>
    </div>
  </StoreProvider>
);

export default App;
