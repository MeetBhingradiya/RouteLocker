import React from 'react';
import Styled from 'styled-components';

const SettingsCSS = Styled.div`
position: relative;
width: 100vw;
height: 100vh;
background-color: #ffffff;
color: #000000;
overflow: auto;
`;

function Settings() {
    return (<SettingsCSS>
        Settings
    </SettingsCSS>)
}

export { Settings };