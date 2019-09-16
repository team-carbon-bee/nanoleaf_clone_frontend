import React from 'react';

import { Switch, Redirect } from "react-router-dom";
import RouteWrapper from "utils/RouteWrapper.jsx"

import Header from "components/Header/Header.jsx";

import { withStyles, Typography} from '@material-ui/core';

import Logger from "utils/logger.js";
import Notifier from 'components/Notifier/Notifier.jsx';
import LoadingDialog from 'components/LoadingDialog/LoadingDialog.jsx'

import mainRoutes from "routes/mainRoutes.jsx";
import "./MainLayout.css";

const styles = (theme) => ({
	footer:{
		backgroundColor:theme.palette.secondary.main
	}
});

class App extends React.Component {

	constructor(props){
		super(props);
		this.logger = new Logger();

		this.state = {
			loadingDialog_state:false,
			notificationState: false,
			notificationMessage: "test",
			notificationType: "info",
			headerName: "home",
		}

		this.notifier = {
			error: this.notifyError,
			warning: this.notifyWarning,
			success: this.notifySuccess,
			info: this.notifyInfo
		}

		this.loadingDialog= {
			open: this.loadingDialog_open,
			close: this.loadingDialog_close
		}

	}

	switchRoutes = (passedProps) =>{
		let toReturn = (
			<Switch>
				{
					mainRoutes.map((prop, key) => {
						if (prop.redirect)
						{
							return <Redirect from={prop.path} to={prop.to} key={key}/>;
						}
						return <RouteWrapper path={prop.path} Component={prop.component} key={key} passedProps={passedProps}/>
					})
				}
			</Switch>
		);
		return(toReturn);
	};

	componentDidMount = () => {
	}

	//============== Notifier ====================

	notifyError = (message) => {
		this.setState({notificationMessage:message, notificationState: true, notificationType: "error"});
	}

	notifyWarning = (message) => {
		this.setState({notificationMessage:message, notificationState: true, notificationType: "warning"});
	}

	notifySuccess = (message) => {
		this.setState({notificationMessage:message, notificationState: true, notificationType: "success"});
	}

	notifyInfo = (message) => {
		this.setState({notificationMessage:message, notificationState: true, notificationType: "info"});
	}

	closeNotification = () => {
		this.setState({notificationState: false});
	}

	loadingDialog_open = () => {
		this.setState({loadingDialog_state: true});
	}

	loadingDialog_close = () => {
		this.setState({loadingDialog_state: false});
	}

	render() {
		const { classes } = this.props;
		return(
			<div className="App">

				<Header
					history={this.props.history}
					headerName={this.state.headerName}
					logger={this.logger}
				/>

				<Notifier
					open={this.state.notificationState}
					message={this.state.notificationMessage}
					closeHandler={this.closeNotification}
					variant={this.state.notificationType}
				/>
				<LoadingDialog
					open={this.state.loadingDialog_state}
				/>
				<div className="mainPage">{this.switchRoutes(
					{
						history:this.props.history,
						notifier:this.notifier,
						loadingDialog: this.loadingDialog,
						logger:this.logger,
						apiControllers:this.apiControllers,
					})}
				</div>
				<footer
					className={classes.footer}
				>
					<Typography>
						nanoleaf-clone - {process.env.REACT_APP_VERSION}
					</Typography>
				</footer>
			</div>
		);
	}
}

export default withStyles(styles,{withTheme:true})(App);