import React from 'react';
import '../styles/app.css';
import Search from '../components/Search';

function App() {
  return (
    <div className="app">
      <img className="nasaImage" src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" alt="nasaLogo"/>
      <h1><Search /></h1>
    </div>
  );
}

export default App;
