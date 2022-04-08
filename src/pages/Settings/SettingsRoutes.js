import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom';
import InnerContent from './Innercontent';
import Privacy from './Privacy';
import Preferences from './Preferences';
import Help from './Help';
import Security from './Security';

const SettingsRoutes = () => {
  return(
        <Routes>
          <Route path="/" element={<InnerContent/>}>
            <Route path='/' element={<Navigate replace to="settings/privacy"/>} />
            <Route path='settings/privacy' element={<Privacy />} />
            <Route path='settings/security' element={<Security />} />
            <Route path='settings/help' element={<Help />} />
            <Route path='settings/preferences' element={<Preferences />} />
          </Route>
        </Routes>
        )
}

export default SettingsRoutes