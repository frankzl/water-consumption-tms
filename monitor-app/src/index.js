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

import {createStore} from 'redux'
import reducer from './store/reducer'
import {Provider} from 'react-redux'

const store = createStore(reducer);


const theme = createMuiTheme( {
        palette: {
            primary: blue,
            secondary: pink,
        },
        shadows: ["none"]
    }
);

store.subscribe(()=>{
    console.log(store.getState())
})

ReactDOM.render(
    <BrowserRouter>
        <CookiesProvider>
            <MuiThemeProvider theme={theme}>
                <Provider store={store}><App/></Provider>
            </MuiThemeProvider>
        </CookiesProvider>
    </BrowserRouter>, document.getElementById( 'root' ) );
registerServiceWorker();
