import React from 'react';
import './App.css';

// import components
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="app">
      <h1>Helo LinkedIn Clone ReactDancing</h1>
      {/** Header Component */}
      <Header/>
      {/** Main Component */}
      <Main/>
      {/** My Footer */}
      <Footer/>
    </div>
  );
}

export default App;
