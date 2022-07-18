import React, { useState } from 'react';
import '../styles/app.css';
import Search from '../components/Search';
import SearchResults from './SearchResults';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);

  return (
    <div className="app">
      <img className="nasaImage" 
      src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" 
      alt="nasaLogo"/>
      <Search setSearchResults={setSearchResults} />
      <SearchResults searchResults={searchResults}/>
    </div>
  );
}

export default App;
