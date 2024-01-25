import React, { Component } from "react";
import { Link } from "react-router-dom";
import auth from "./httpServiceMovieAuth";
import http from "./httpServiceMovie.js";

class EditProfile extends Component {
    state = {
        editForm: { fname: "", lname: "", email: "", married: "" }
    }
    async fetchData() {
        let user = auth.getUser();
        if (user) {
            let response = await http.get("/loginDetails");
            let { data } = response;
            let foundElement = data.find((ele) => ele.email === user.email);
            console.log("ss5555",foundElement)
            this.setState({ editForm: foundElement });
        } else {
            let s1 = { fname: "", lname: "", email: "", married: "" };
            this.setState({ editForm: s1 })
        }
    }
    componentDidMount() {
        this.fetchData();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) this.fetchData();
    }

    handleChange = (e) => {
        let { currentTarget: input } = e;
        let s1 = { ...this.state };
        s1.editForm[input.name] = input.value;
        this.setState(s1);
    }

    render() {
        let { fname, lname, email, married } = this.state.editForm;
        console.log(fname)

        return (
            <React.Fragment>
                <nav className="bg-secondary" aria-label="Breadcrumb">
                    <ol className="breadcrumb ms-3">
                        <li className="breadcrumb-item">
                            <Link to="" className="breadcrumb-link text-decoration-none text-white"><h6>Online Tickets</h6></Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="" className="breadcrumb-link text-decoration-none text-white"><h6>Profile</h6></Link>
                        </li>
                        <li className="breadcrumb-item active">
                            <Link className="breadcrumb-link text-decoration-none text-white" to="" aria-current="page"><h6>Setting</h6></Link>
                        </li>
                    </ol>

                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-3">
                            <i className="fa-regular fa-circle-user text-white" style={{ fontSize: "550px" }}></i>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-3 text-white mt-4">
                            <h1>Test</h1>
                            <h2>9838657592</h2>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-1"></div>
                        <div className="col-3 text-white"><h4>Booking History</h4></div>
                        <div className="col-4 text-white"><h4>Settings</h4></div>
                    </div>
                </nav>

                <div className="container mt-3">
                    <form>
                        <h2>Edit Profile</h2>
                        <hr />
                        <div className="row mt-4">
                            <div className="col-6">
                                <h3>First Name</h3>
                            </div>
                            <div className="col-6">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="fname"
                                    value={fname}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-6">
                                <h3>Last Name</h3>
                            </div>
                            <div className="col-6">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="lname"
                                    value={lname}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-6">
                                <h3>Email</h3>
                            </div>
                            <div className="col-6">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="row mt-4"><h3>Married?</h3></div>
                        <div className="row mt-2">
                            <div className="col-6">
                                <input
                                    className="form-check-input ms-1"
                                    type="radio"
                                    name="married"
                                    value="Yes"
                                    checked={married === "Yes"}
                                    onChange={this.handleChange}
                                />
                                <label className="ms-4"><h5>Yes</h5></label>
                            </div>
                            <div className="col-6">
                                <input
                                    className="form-check-input ms-1"
                                    type="radio"
                                    name="married"
                                    value="No"
                                    checked={married === "No"}
                                    onChange={this.handleChange}
                                />
                                <label className="ms-4"><h5>No</h5></label>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
export default EditProfile;