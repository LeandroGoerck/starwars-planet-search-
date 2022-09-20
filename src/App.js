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
      <div className="w-11/12 ml-auto mr-auto mt-4 mb-4 position-fixed">
        <Header />
        <SearchInput />
        <FilterHeader />
        <FilterInformation />
        <Table />
      </div>
    </GlobalProvider>
  );
}

export default App;
