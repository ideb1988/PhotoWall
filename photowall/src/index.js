import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Main from './Components/Main';
import './styles/stylesheet.css';

const element=<BrowserRouter><Main/></BrowserRouter>
ReactDOM.render(element, document.getElementById('root'));
