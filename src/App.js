import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/navBar'
import Main from './components/MainLayout'

function App() {
  return (
    <div style={{minHeight:'100vh',padding:'0px'}} className='container-fluid bg-warning'>
      <Navbar />
      <Main />
     
        
     
     
   </div>
  );
}

export default App;
