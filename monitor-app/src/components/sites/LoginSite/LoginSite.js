import React, { Component } from 'react'

import './LoginSite.css';
import Grid from "@material-ui/core/es/Grid/Grid";
import TextField from "@material-ui/core/es/TextField/TextField";
import Person from "@material-ui/icons/Person"
import Lock from "@material-ui/icons/Lock"
import Button from "@material-ui/core/es/Button/Button";

import logo from '../../../assets/img/logo.png'

class LoginSite extends Component {

    state = {
        username: '',
        password: ''
    }

    handleInputChange = ( field, value ) => {
        const newState = Object.assign( this.state, {} )
        newState[ field ] = value
        this.setState(
            newState
        )
    }

    render() {
        return (
            <div className="login-site">
                <div className="login-fields">

                    <img src={logo} alt="neer-logo" style={{ maxWidth: '170px', marginBottom: '50px' }}/>

                    <form noValidate autoComplete="off">
                        <TextField
                            id="standard-name"
                            label="username"
                            value={this.state.name}
                            onChange={(event)=>this.handleInputChange( 'username', event.value )}
                            margin="normal"
                        />
                        <TextField
                            id="standard-uncontrolled"
                            label="password"
                            type="password"
                            value={this.state.password}
                            margin="normal"
                        />
                    </form>
                    <Button style={{ marginTop: '25px' }} variant="contained" className="login-button" fullWidth="true"
                            color="primary">Login</Button>
                </div>
            </div>
        )
    }
}

export default LoginSite
