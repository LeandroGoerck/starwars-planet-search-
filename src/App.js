import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import GlobalProvider from './context/GlobalProvider';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Table />
    </GlobalProvider>
  );
}

export default App;
