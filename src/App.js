import React from 'react';
import './App.css';
import Header from './components/Header';
import FilterHeader from './components/FilterHeader';
import Table from './components/Table';
import GlobalProvider from './context/GlobalProvider';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <FilterHeader />
      <Table />
    </GlobalProvider>
  );
}

export default App;
