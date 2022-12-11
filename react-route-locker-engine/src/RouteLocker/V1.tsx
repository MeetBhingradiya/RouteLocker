import React from 'react';
import Styled from 'styled-components';
import { Routes , Route , Navigate } from 'react-router-dom';
import { RouteLocker } from 'react-route-locker';

// Components
import { PrivateRoute } from '../Database';
import * as Components from '../Components';


const V1CSS = Styled.div`
position: relative;
width: 100vw;
height: 100vh;
background-color: #636363;
color: #DFFFF2;
overflow: auto;
`;

function V1() {
    return (<V1CSS>
        <Routes>
            <Route path="/admin/*" element={<RouteLocker Properties={[ PrivateRoute.V2 ]} />} >
                <Route path='dashboard' element={<Components.AdminDashboard />} />
                <Route path='*' element={<Components.AdminDashboard />} />
            </Route>


            <Route path='/login' element={<Components.Login />} />

            <Route path='*' element={<Navigate to="/login" />} />
        </Routes>
    </V1CSS>)
}

export default V1;