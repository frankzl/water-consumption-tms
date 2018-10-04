import React, { Component } from 'react'

import './LoginSite.css';
import TextField from "@material-ui/core/es/TextField/TextField";
import Button from "@material-ui/core/es/Button/Button";

import logo from '../../../assets/img/logo.png'
import Link from "react-router-dom/es/Link";
import { connect } from "react-redux";

import * as actionTypes from '../../../store/actions'

class LoginSite extends Component {

    state = {
        username: '',
        password: ''
    }


    handleChange = name => (event)=>{
        this.setState({
            [name]: event.target.value
        })
    }

    handleLogin = () =>{
        const uname = this.state.username
        console.log('handlelogin', uname)
        this.props.update(uname, new Date());
        this.props.onLogin( uname );
    }

    render() {
        return (
            <div className="login-site">
                <div className="login-fields">

                    <img src={logo} alt="neer-logo" style={{ marginTop:'50px', maxWidth: '170px', marginBottom: '50px' }}/>
                    <TextField
                        id="standard-name"
                        label="username"
                        value={this.state.username}
                        onChange={this.handleChange('username')}
                        margin="normal"
                    />
                    <TextField
                        id="standard-password"
                        label="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        margin="normal"
                    />
                    <Link onClick={this.handleLogin}
                          to="/" style={{ color: 'white' }}>
                        <Button style={{ marginTop: '25px' }} variant="contained" className="login-button"
                                fullWidth={true}
                                color="primary">Login</Button>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: ( id ) => dispatch( {
            type: actionTypes.LOGIN,
            username: id
        } ),
        update: ( id, date ) => dispatch(actionTypes.getTotal(id, date))
    }
}

export default connect( null, mapDispatchToProps )( LoginSite )
