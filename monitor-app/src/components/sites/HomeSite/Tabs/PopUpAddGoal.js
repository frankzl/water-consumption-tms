import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import createMuiTheme from "@material-ui/core/es/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import TextField from "@material-ui/core/es/TextField/TextField";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";

class PopUpAddGoal extends React.Component {

    state = {
        limit: 0,
        devices: [
            { value: 'kit132', label: 'kitchen' },
            { value: 'bat12', label: 'bathroom' }
        ],
        selected: 'kit132'
    }


    handleChange = name => ( event ) => {
        this.setState( {
            [name]: event.target.value
        } )
    }

    render() {
        const theme = createMuiTheme();

        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <Dialog
                        open={this.props.open}
                        onClose={this.props.onClose}
                        scroll={'paper'}
                        aria-labelledby="Add Goal"
                    >
                        <DialogTitle id="scroll-dialog-title">Add Goal</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                <TextField
                                    style={{ flex: 'auto', width: '100%' }}
                                    select
                                    label="Data Format"
                                    value={this.state.selected}
                                    onChange={this.handleChange( 'selected' )}
                                >
                                    {this.state.devices.map( option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ) )}
                                </TextField>
                                <br/>
                                <TextField
                                    id="standard-limit"
                                    label="Set a limit for today! (liters)"
                                    value={this.state.limit}
                                    onChange={this.handleChange( 'limit' )}
                                    type={"number"}
                                    margin="normal"
                                />
                                <br/>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="contained" color="primary" onClick={this.props.onClose} color="primary">
                                Cancel
                            </Button>
                            <Button variant="contained" onClick={this.props.onClose} color="primary">
                                Add
                            </Button>
                        </DialogActions>
                    </Dialog>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default PopUpAddGoal;