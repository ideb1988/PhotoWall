import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './Styles/stylesheet.css';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './Redux/reducer';
import { Provider } from 'react-redux';
import App from './Components/App';
import axios from 'axios';
import thunk from 'redux-thunk';

axios.defaults.baseURL='http://localhost:4000/api'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)//,
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const element = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(element, document.getElementById('root'));
