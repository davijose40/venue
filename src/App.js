import React from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './featured';

function App() {
  return (
    <div className="App" style={{ height: "1550px", backgroundColor: "cornflowerblue"}}>
      <Header />
      <Featured />
    </div>
  );
}

export default App;
