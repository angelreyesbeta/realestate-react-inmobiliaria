import React from 'react';
import ReactDOM from 'react-dom';
import { HorizonteApp } from './HorizonteApp';
import './styles/styles.scss'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; // Archivo Javascript de Bootstrap 4 




ReactDOM.render(
    <HorizonteApp/>,
    document.getElementById('root')
)

