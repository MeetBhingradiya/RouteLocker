import React from 'react';
import Styled from 'styled-components';

const LoginCSS = Styled.div`
position: relative;
width: 100%;
height: 100%;
background-color: #ffffff;
color: #000000;
overflow: auto;
`;

function Login() {
    return (<LoginCSS>
        Login
    </LoginCSS>)
}

export { Login };