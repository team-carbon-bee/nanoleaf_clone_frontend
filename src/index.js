import React from 'react';
import ReactDOM from 'react-dom';

import {createBrowserHistory} from 'history';
import { Router, Route, Switch} from 'react-router-dom';

import indexRoutes from 'routes/index.jsx';
import './index.css';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import mainTheme from 'mainTheme.jsx';

const history = createBrowserHistory();

ReactDOM.render(
    <MuiThemeProvider theme={mainTheme}>
        <Router history={history}>
            <Switch>
                    {indexRoutes.map((prop, key) => {
                        return <Route path={prop.path} component={prop.component} key={key} />;
                    })}
            </Switch>
        </Router>
    </MuiThemeProvider>,
document.getElementById("root"));
