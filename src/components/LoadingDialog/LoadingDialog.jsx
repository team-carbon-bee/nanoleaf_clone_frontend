import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles,
    CircularProgress,
    Dialog,
    DialogTitle,
    DialogContent
} from "@material-ui/core";

const styles = theme => ({
    dialogContent: {
        textAlign:'center'
    }
});


class LoadingDialog extends React.Component {

    render() {
		const { classes } = this.props;
        return (
                <Dialog
                    open={this.props.open}
                    disableBackdropClick={true}
                    disableEscapeKeyDown={true}
                >
                    <DialogTitle>Chargement</DialogTitle>
                    <DialogContent className={classes.dialogContent}>
                        <CircularProgress color="secondary" />
                    </DialogContent>
                </Dialog>
        );
    }
}

LoadingDialog.propTypes = {
    open: PropTypes.bool.isRequired,
};

export default withStyles(styles,{withTheme: true})(LoadingDialog);
