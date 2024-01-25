import React, { Component } from "react";
import auth from "./httpServiceMovieAuth";
class Logout extends Component {
    componentDidMount() {
        auth.logout();
        this.props.history.push("/show")
    }
    render() {
        return ""
    }
}
export default Logout;