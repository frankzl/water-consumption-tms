import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ArrowBackIos';
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

function DeviceHeader( props ) {
    const { classes } = props;
    return (
        <AppBar position="static">
            <Toolbar>

                <Link to="/" style={{ color: 'white' }}>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <BackIcon/>
                    </IconButton>
                </Link>
                <Typography variant="title" color="inherit" className={classes.grow}>
                    {props.title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

DeviceHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles( styles )( DeviceHeader );