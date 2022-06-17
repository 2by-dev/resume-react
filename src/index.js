import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar'
import Loading from './components/Loading'
import Workspace from './components/Workspace';
import Contact from './components/Contact';
// import Typer from './components/Typer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div className="text-gray-200 body-font">
  <Navbar/>
  <Loading/>
  <Workspace/>
  <Contact/>
  {/* <Typer/> */}
  </div>
  </>
);