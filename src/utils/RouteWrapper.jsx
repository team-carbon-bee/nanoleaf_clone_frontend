import React from "react";
import { Route } from "react-router-dom";

export default class RouteWrapper extends React.Component {
    render() {
        var { Component, path, passedProps } = this.props;
        return (
            <Route
                path={path}
                render={props => <Component {...props} {...passedProps} />}
            />
        );
    }
}