import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
    withStyles,
    Snackbar,
    SnackbarContent,
} from "@material-ui/core";

import {
    CheckCircle,
    Alert,
    AlertCircle,
    Information,
} from "mdi-material-ui";

const variantIcon = {
    success: CheckCircle,
    warning: Alert,
    error: AlertCircle,
    info: Information,
};

const contentStyle = theme => ({
    success: {
        backgroundColor: theme.status.success,
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.dark,
    },
    warning: {
        backgroundColor: theme.status.warning,
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    }
});

function MySnackbarContent(props) {

    const { classes, message, variant} = props;
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            className={classNames(classes[variant])}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                <Icon className={classNames(classes.icon, classes.iconVariant)} />
                {message}
                </span>
            }
        />
    );
}

MySnackbarContent.propTypes = {
    variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

const MySnackbarContentWrapper = withStyles(contentStyle,{withTheme: true})(MySnackbarContent);

const snackbarStyle = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
});


class Notifier extends React.Component {

    render() {
        return (
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.props.open}
                    autoHideDuration={500}
                    onClose={this.props.closeHandler}
                >
                    <MySnackbarContentWrapper
                        variant={this.props.variant}
                        message={this.props.message}
                    />
                </Snackbar>
        );
    }
}

Notifier.propTypes = {
    closeHandler: PropTypes.func.isRequired,
    message: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
    open: PropTypes.bool.isRequired,
};

export default withStyles(snackbarStyle,{withTheme: true})(Notifier);
