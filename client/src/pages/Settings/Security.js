import React from 'react';
import './Security.css';

function Security() {
  return (
    <div className='security'>
        <h1>Security</h1>
        <p>Include additional security like turning on two-factor authentication and checking your list of connected devices to keep your account, Favs and boards safe</p>

        <div className='twoFaAuthentication'>
        <h3>2-Factor Authentication</h3>
        <input type="checkbox" className='dataInput'/> Turn on 2FA<br/>
        <input type="radio"  className='twoFaRadio'/> Use email for 2FA<br/>
        <input type="radio" className='twoFaRadio' /> Use apps for 2FA<br />
        </div>
        
        
        <div className='changePassword'>
        <h3>Change Password</h3>

        <div className='changePasswordForm'>
        <form action="">
          <div className='inputDiv'>
          <label class="inputLabel">Current Password</label>
          <input type="password" />
          <label class="inputLabel">New Password</label>
          <input type="password" />
          <label class="inputLabel" >Re-enter New Password</label>
          <input type="password"  />
          <button type='submit'>Change Password</button>
          </div>
        </form>
        </div>

        </div>
        

    </div>
  )
}

export default Security;