import React from 'react';
import './Help.css';

function Help() {
  return (
    <div className='help'>
        <h1>Help</h1>

        <div className='helpLinks'>
        <a href='#'><h4 className='helpLinksTitle' >Report a Problem</h4></a>
        <a href='#'><h4 className='helpLinksTitle'>Support Requests</h4></a>
        <a href='#'><h4 className='helpLinksTitle'>Help Center</h4></a>
        </div>
        
    </div>
  )
}

export default Help