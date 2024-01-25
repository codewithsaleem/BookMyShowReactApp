import React, { Component } from "react";
import { Link } from "react-router-dom";
import http from "./httpServiceMovie.js";
import auth from "./httpServiceMovieAuth.js";
class Login extends Component {
    state = {
        loginForm: { email: "" }
    }

    handleChange = (e) => {
        let { currentTarget: input } = e;
        let s1 = { ...this.state };
        s1.loginForm[input.name] = input.value;
        this.setState(s1);
    }

    async postData(url, obj) {
        let response = await http.post(url, obj);
        let { data } = response;
        auth.login(data);
        this.props.history.push("/show")
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let { loginForm } = this.state;
        this.postData("/login", loginForm);
    }

    render() {
        let { email } = this.state.loginForm;
        return (
            <div class="container mt-4">
                <div className="card text-center">
                    <form>
                        <div className="form-group border bg-primary rounded m-4">
                            <i className="fab fa-facebook-f text-white fa-3x p-2"></i>
                            <span className="text-white font-weight-bold" style={{ fontSize: '26px' }}>Continue via Facebook</span>
                        </div>
                        <div className="form-group m-4">
                            <input className="form-control" type="email" name="email" value={email} onChange={this.handleChange} placeholder="Contiinue via email" />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
            </div >
        )
    }
}
export default Login;