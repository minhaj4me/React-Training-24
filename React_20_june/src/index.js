import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Ford from './Ford';
import Form from './Form';
import UseContext from './UseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Form />
    //  <Ford />
    // <UseContext />
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
