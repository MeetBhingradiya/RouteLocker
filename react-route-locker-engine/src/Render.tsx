import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import * as Components from './Components';
import V1 from './RouteLocker/V1';

interface SettingsContext_Type {
    Setting: any;
    SetSetting: Function;
}

interface Setting_Type {

}

const Settings = React.createContext({} as SettingsContext_Type);

function Render() {

    const default_Setting: Setting_Type = {
        
    };

    const [Setting, SetSetting] = React.useState(default_Setting);

    const SettingsContext: SettingsContext_Type = { Setting , SetSetting };

    return (<Settings.Provider value={SettingsContext}>
        <Router>
            <Routes>
                <Components.Settings />
                <Route path='/' element={<Navigate to="/V1" />} />
                <Route path='/V1/*' element={<V1 />} />
                <Route path='*' element={<Navigate to="/V1" />} />
            </Routes>
        </Router>
    </Settings.Provider>)
}

export default Render;