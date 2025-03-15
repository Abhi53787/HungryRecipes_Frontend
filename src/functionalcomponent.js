import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Cars(props){
    return(
        <div>
            <h1>Name: {props.name}</h1>
            <h2>Model: {props.model}</h2>

        </div>
    );
}
 