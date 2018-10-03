import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ( {
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
} );

function tipView( props ) {

    return (
        <div style={{padding: '15px', borderBottom: '1px #d5d5d5 solid', color: 'rgba(0, 0, 0, 0.6)', fontSize: '13px'}}>
                {props.text}
        </div>
    );
}


export default withStyles( styles )( tipView );