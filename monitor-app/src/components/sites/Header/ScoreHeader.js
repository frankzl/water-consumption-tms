import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ScoreIcon from '@material-ui/icons/Equalizer'
import ExitIcon from '@material-ui/icons/ExitToApp';
import Link from "react-router-dom/es/Link";

import BackIcon from '@material-ui/icons/ArrowBackIos'

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
                <Typography variant="title" color="inherit" className={classes.grow}
                            style={{
                                position: 'absolute', left: 0, right: 0, marginRight: 'auto',
                                marginLeft: 'auto'
                            }}
                >Score
                </Typography>
                <Link to="/" style={{ color: 'white' }}>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <BackIcon/>
                    </IconButton>
                </Link>
                <span style={{ position: 'absolute', right: 0 }}>

                    <Link to="/score" style={{ color: 'white' }}>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <ScoreIcon/>
                        </IconButton>
                    </Link>
                    <Link to="/login" style={{ color: 'white' }}>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <ExitIcon/>
                        </IconButton>
                    </Link>
                </span>
            </Toolbar>
        </AppBar>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles( styles )( ButtonAppBar );