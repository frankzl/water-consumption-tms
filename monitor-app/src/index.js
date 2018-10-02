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


const theme = createMuiTheme( {
        palette: {
            primary: blue,
            secondary: pink,
        },
    }
);

ReactDOM.render(
    <BrowserRouter>
        <CookiesProvider>
            <MuiThemeProvider theme={theme}>
                <App/>
            </MuiThemeProvider>
        </CookiesProvider>
    </BrowserRouter>, document.getElementById( 'root' ) );
registerServiceWorker();
