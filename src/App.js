import React from 'react';
import './App.css';
import Header from './components/Header';
import FilterHeader from './components/FilterHeader';
import Table from './components/Table';
import GlobalProvider from './context/GlobalProvider';
import SearchInput from './components/SearchInput';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <SearchInput />
      <FilterHeader />
      <Table />
    </GlobalProvider>
  );
}

export default App;
