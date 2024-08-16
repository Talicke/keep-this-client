import React from 'react';
import logo from './logo.svg'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Registration from './Components/Registration';

function App() {
  return (
    <div className="main">
      <Header/>
      <Registration/>
      <Footer/>
    </div>
  );
}

export default App;
