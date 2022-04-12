import React from 'react';
import './Preferences.css';

function Preferences() {
  return (
    <div className='preferences'>
      <h1>Preferences</h1>

      <div className='toggleMode'>
        <h3>Toggle Dark Mode: </h3> 
        <p>Turn on/off Dark mode version</p>
        <input class="toggle" type="checkbox" />
      </div>

      <div className='notification'>
        <h3>Notifications</h3>
        <p>We'll always let you know about important changes, but you pick what else you want to hear about</p>

        <div className='activities'>

        <div className='activitiesAccounts'>
        <h4>Activity from accounts you follow</h4>
        <input type="checkbox" /> Follows<br/>
        <input type="checkbox" /> Saves<br/>
        <input type="checkbox" /> New Recipe<br/>
        </div>

        <div className='activitiesRecipes'>
        <h4>Activity from recipes you saved</h4>
        <input type="checkbox" /> Update<br/>
        <input type="checkbox" /> Comments<br/>
        <input type="checkbox" /> Mentions<br/>
        </div>
        
        <div className='activitiesNotification'>
        <h4>Get Notifications</h4>
        <input type="checkbox" /> By Email<br/>
        <input type="checkbox" /> By Push Notifications<br/>
        </div>
        
        </div>


      </div>

    </div>
  )
}

export default Preferences