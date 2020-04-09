// code React
//alert("coucou");

import React from 'react';
import { render} from 'react-dom';
import App from './Components/App';

import './index.css';



/*** Renvoi App.js  a la vue */
render(
    <App />,
    document.getElementById('root')
);