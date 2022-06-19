import React from 'react';
import Header from './components/Header';
import FilterHeader from './components/FilterHeader';
import Table from './components/Table';
import GlobalProvider from './context/GlobalProvider';
import SearchInput from './components/SearchInput';
import FilterInformation from './components/FilterInformation';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <SearchInput />
      <FilterHeader />
      <FilterInformation />
      <Table />
    </GlobalProvider>
  );
}

export default App;
