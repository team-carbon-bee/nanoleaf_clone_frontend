import React from 'react';
import logo from "assets/img/logo.png";
import "./Header.css";

import { withStyles,
	AppBar,
	Toolbar,
	Typography} from '@material-ui/core';

const styles = {
	appBarTitle: {
		flexGrow: 1,
		display:'inline'
	},
	userMenu:{
		zIndex:5
	}
};

class Header extends React.Component {

	constructor(props){
		super(props);

	}


	// ==================== Menues =========================

	home_click = () => {
		this.props.history.push('/');
	}

	render() {
		const {classes} = this.props;
		return(
			<AppBar position="static">
				<Toolbar>
					<img src={logo} alt="NanoLeafClone" id="mainIcon" onClick={this.home_click}/>
					<Typography
						variant="h6"
						color="inherit"
						className={classes.appBarTitle}
						onClick={this.home_click}
					>
						NanoLeaf clone
					</Typography>
				</Toolbar>
			</AppBar>
		);
	}
}

export default withStyles(styles,{withTheme: true})(Header);