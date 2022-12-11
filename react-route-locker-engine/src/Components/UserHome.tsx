import React from 'react';
import Styled from 'styled-components';

const UserHomeCSS = Styled.div`
position: relative;
width: 100%;
height: 100%;
background-color: #ffffff;
color: #000000;
overflow: auto;
`;

function UserHome() {
    return (<UserHomeCSS>
        UserHome
    </UserHomeCSS>)
}

export default UserHome;