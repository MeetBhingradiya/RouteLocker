import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import Render from './Render';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Render />
    </React.StrictMode>
);
