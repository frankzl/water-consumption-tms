import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExitIcon from '@material-ui/icons/ExitToApp';
import Link from "react-router-dom/es/Link";

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function ButtonAppBar( props ) {
    const { classes } = props;
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit" className={classes.grow}>
                    Today
                </Typography>
                <Link to="/login" style={{color: 'white'}}>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <ExitIcon/>
                    </IconButton>
                </Link>

            </Toolbar>
        </AppBar>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles( styles )( ButtonAppBar );