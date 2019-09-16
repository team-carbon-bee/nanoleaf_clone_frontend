import { createMuiTheme } from "@material-ui/core/styles";
import {grey,amber,red,green,blue} from '@material-ui/core/colors/';

export default createMuiTheme({
	palette: {
		// primary: grey[600],
		primary: {
			main: grey[600],
		},
		secondary: {
			main: green[500]
		},
		// secondary: amber[500],
		error: red,
		// Used by `getContrastText()` to maximize the contrast between the background and
		// the text.
		contrastThreshold: 3,
		// Used to shift a color's luminance by approximately
		// two indexes within its tonal palette.
		// E.g., shift from Red 500 to Red 300 or Red 700.
		tonalOffset: 0.2,
	},
	status:{
		success:green[600],
		warning:amber[700]
	},
	button:{
		creation:green[600],
		deletion:red[500],
		update:blue[500]
	},
	typography:{

		useNextVariants: true,
		fontFamily:[
			"Roboto",
			"sans-serif"
		].join(","),
		h1:{
			fontSize:'3rem'
		},
		h2:{
			fontSize:'2rem'
		},
		h3:{
			fontSize:'1.5rem'
		}
	},
});