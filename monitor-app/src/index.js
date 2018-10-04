import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { CookiesProvider } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/es/styles/createMuiTheme";
import blue from "@material-ui/core/es/colors/blue";
import pink from "@material-ui/core/es/colors/pink";

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reducer from './store/reducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( reducer, composeEnhancers( applyMiddleware( thunk ) ) );


const theme = createMuiTheme( {
        palette: {
            primary: blue,
            secondary: pink,
        },
        shadows: Array( 25 ).fill( 'none' )
    }
);

store.subscribe( () => {
    console.log( store.getState() )
} )

ReactDOM.render(
    <BrowserRouter>
        <CookiesProvider>
            <MuiThemeProvider theme={theme}>
                <Provider store={store}><App/></Provider>
            </MuiThemeProvider>
        </CookiesProvider>
    </BrowserRouter>, document.getElementById( 'root' ) );
registerServiceWorker();
