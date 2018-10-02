import React, { Component } from 'react'

import './LoginSite.css';
import Grid from "@material-ui/core/es/Grid/Grid";
import TextField from "@material-ui/core/es/TextField/TextField";
import Person from "@material-ui/icons/Person"
import Lock from "@material-ui/icons/Lock"
import Button from "@material-ui/core/es/Button/Button";


class LoginSite extends Component {
    render() {
        return (
            <div className="login-site">
                <div className="login-fields">

                    <div className="login-logo">
                        Logo HERE
                    </div>

                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Person/>
                        </Grid>
                        <Grid item>
                            <TextField id="input-with-icon-grid" label="username"/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Lock/>
                        </Grid>
                        <Grid item>
                            <TextField id="input-with-icon-grid" label="password"/>
                        </Grid>
                    </Grid>
                    <Button style={{marginTop: '25px'}} variant="contained" className="login-button" fullWidth="true" color="primary">Login</Button>
                </div>
            </div>
        )
    }
}

export default LoginSite
