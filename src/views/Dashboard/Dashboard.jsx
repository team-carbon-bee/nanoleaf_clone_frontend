import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import {
	Grid,
	CardHeader,
	Card,
	Typography,
	CardContent,
	FormControl,
	InputLabel,
	Select,
	OutlinedInput,
	MenuItem
} from '@material-ui/core';

class Dashboard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		}

    }

	componentDidMount = () => {
	}

	render() {
		const { classes } = this.props;

		return (
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h2">
                                Bonjour
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
		);
	}
}

Dashboard.propTypes = {
	classes: PropTypes.object.isRequired,
	notifier: PropTypes.object.isRequired,
	loadingDialog: PropTypes.object.isRequired,
	logger: PropTypes.object.isRequired,
};

export default withStyles({}, {withTheme: true})(Dashboard);
