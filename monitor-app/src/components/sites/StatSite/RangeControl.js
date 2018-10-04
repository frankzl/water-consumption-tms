import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    textField: {
        flexBasis: 200,
    },
});

const ranges = [
    {
        value: 'HOUR',
        label: 'Hour',
    },
    {
        value: 'DAY',
        label: 'Day',
    },
    {
        value: 'MONTH',
        label: 'Month',
    },
    {
        value: 'YEAR',
        label: 'Year',
    },
];

class RangeControl extends React.Component {
    state = {
        weightRange: 'HOUR',
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root} style={{width: '100%'}}>
                <TextField
                    style={{flex: 'auto'}}
                    select
                    label="Data Format"
                    className={classNames(classes.margin, classes.textField)}
                    value={this.state.weightRange}
                    onChange={this.handleChange('weightRange')}
                >
                    {ranges.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        );
    }
}

RangeControl.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RangeControl);