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

class PopUp extends React.Component {

    state = {
        device: '',
        limit: 0
    }

    handleChange = name => (event)=>{
        this.setState({
            [name]: event.target.value
        })
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
                        aria-labelledby="Add Device"
                    >
                        <DialogTitle id="scroll-dialog-title">Add Device</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                <TextField
                                    id="standard-name"
                                    label="Device Name"
                                    value={this.state.device}
                                    onChange={this.handleChange('device')}
                                    margin="normal"
                                />
                                <br/>
                                <TextField
                                    id="standard-limit"
                                    label="Limit (liters)"
                                    type="number"
                                    value={this.state.limit}
                                    onChange={this.handleChange('limit')}
                                    margin="normal"
                                />
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="contained" color="primary" onClick={this.props.onClose} color="primary">
                                Cancel
                            </Button>
                            <Button variant="contained" onClick={()=>this.props.onAdd(this.state.device, this.state.limit)} color="primary">
                                Scan ID
                            </Button>
                        </DialogActions>
                    </Dialog>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default PopUp;