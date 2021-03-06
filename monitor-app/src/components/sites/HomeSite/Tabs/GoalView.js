import React from 'react'
import FormControlLabel from "@material-ui/core/es/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/es/Checkbox/Checkbox";
import green from "@material-ui/core/es/colors/green";
import withStyles from "@material-ui/core/es/styles/withStyles";

const styles = {
    root: {
        color: green[ 600 ],
        '&$checked': {
            color: green[ 500 ],
        },
    },
    label: {
        color: 'rgba(0, 0, 0, 0.6)'
    },
    checked: {},
};

const goalView = ( props ) => {
    const { classes } = props
    return ( <div style={{ display: 'flex', borderBottom: '1px solid #ccc' }}>
        <div style={{padding: '10px'}}>
            <FormControlLabel
                classes={{
                    label: classes.label
                }}
                control={
                    <Checkbox
                        checked={true}
                        value="checkedG"
                        classes={{
                            root: classes.root,
                            checked: classes.checked
                        }}
                    />
                }
                label={props.text}
            />
        </div>
    </div> )
}

export default withStyles( styles )( goalView );