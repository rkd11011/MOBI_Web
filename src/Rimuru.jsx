import React from 'react';
import Navbar from './Navbar';
import './Rimuru.css';
import Sidebar from './Sidebar';
import Feed from './Feed';

function Rimuru() {
  return (
    <div className="Rimuru">
      <Navbar/>
      <div className="Rimuru_content">
        <Sidebar/>
        <Feed/>
      </div>
    </div>
  )
}

export default Rimuru;