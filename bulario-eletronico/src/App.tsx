import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchMode from './enums/SearchMode';

interface ISearchTerm {
  mode: number,
  term: string,
}

function App() {

  const [searchTerms, setSearchTerms] = useState<ISearchTerm>({mode: SearchMode.MEDICINE_NAME, term: ''})
  return (
    <>
      <SearchBar />
    </>
  );
}

export default App;
