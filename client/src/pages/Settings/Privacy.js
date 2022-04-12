import React from 'react'
import './Privacy.css'

function Privacy() {
  return (
    <div className='privacy'>
        <h1>Privacy</h1>
        <p>Decide whether your Appetite profile will be hidden from search engines, and what kinds of data you want us to use to improve the recommendations and ads you see. Learn more</p>
        
        <div className='dataPersonalization'>
        <h3>Data personalization</h3>
        <input type="checkbox" className='dataInput'/> Use sites you visit to improve which recommendations and ads you see on Appetite <br/>
        <input type="checkbox" /> Use partner info to improve which recommendations and ads you see on Appetite <br/>
        <input type="checkbox" /> Use your activity to improve ads you see about Appetite on other sites or apps you may visit. <br />
        </div>

        <div className='deleteAccount'>
        <h3>Delete your account</h3>
        <p>Delete your data and account</p>
        <button id='delBtn'>Delete</button>

        </div>
        
    </div>
  )
}

export default Privacy