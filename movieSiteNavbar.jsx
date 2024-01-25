import React, { Component } from "react";
import { Link } from "react-router-dom";
import auth from "./httpServiceMovieAuth.js";
class Navbar extends Component {
    state = {
        isExpandedLanguage: false,
        selectedCity: ""
    }
    toggleClass = () => {
        this.setState({ isExpandedLanguage: !this.state.isExpandedLanguage })
    }
    handleCityChange = (city) => {
        this.setState({ selectedCity: city, isExpandedLanguage: false });
    }
    render() {
        let user = auth.getUser();
        console.log(user)
        let city = ["NCR", "Ahemdabad", "Banglore", "Chennai", "Mumbai", "Hyderabad"];
        let loginDet = ["Edit Profile", "Purchase History", "BookASmile", "Help and Support", "SignOut"]
        let { isExpandedLanguage, selectedCity } = this.state;

        return (
            <div class="row bg-dark">

                <div class="col-12">
                    <div className="row">
                        <div className="col-2">
                            <Link to="/home" className="nav-link"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZl3YoImh0LLYg5hLrwPILDOtSnU07Y731gQ&usqp=CAU" style={{ height: '80px', width: '100%' }} /></Link>
                        </div>
                        <div className="col-3 mt-2">
                            <input className="form-control" type="text" placeholder="&#xf002; Search for Movies" style={{ height: '50px' }} />
                        </div>
                        <div className="col-1"></div>

                        <div className="col-2 mt-4 text-white">
                            {/* {selectedCity || "NCR"}
                            <span className="fa-stack fa-1x text-white" style={{ cursor: "pointer" }} onMouseOver={this.toggleClass}>
                                <i className="fa-solid fa-stack-1x fa-chevron-down"></i>
                            </span> */}

                            {/* {isExpandedLanguage && ( */}
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                                        {selectedCity || "NCR"}
                                    </a>
                                    <div className="dropdown-menu">
                                        {city.map((ele, index) => (
                                            <Link to={`/admin/${ele}`} key={index} className="dropdown-item" value={ele} onChange={this.handleCityChange}>{ele}</Link>
                                        ))}
                                    </div>
                                </li>
                            </ul>

                            {/* // )} */}
                        </div>

                        <div className="col-2 mt-4 text-white">
                            <Link to="" className="nav-link">English</Link>
                        </div>
                        {!user && (
                            <div className="col-2">
                                <Link to="/login" className="nav-link">
                                    <button className="btn btn-sm btn-dark btn-outline-light mt-4">SignIn</button>
                                </Link>
                            </div>
                        )}
                        {user && (
                            <div className="col-2 mt-3 text-white">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                                            {<i class="fa-solid fa-user"></i>} Hi,{user.email}
                                        </a>
                                        <div className="dropdown-menu">
                                            {loginDet.map((ele, index) => (
                                                <Link
                                                    to={`/home/${ele}`}
                                                    key={index}
                                                    className="dropdown-item"
                                                    value={ele}
                                                >
                                                    {index === 0 && <i className="fa-1x m-2 fa-solid fa-user"></i>}
                                                    {index === 1 && <i className="fa-1x m-2 fa-solid fa-shop"></i>}
                                                    {index === 2 && <i className="fa-1x m-2 fa-solid fa-face-smile"></i>}
                                                    {index === 3 && <i className="fa-1x m-2 fa-solid fa-headphones"></i>}
                                                    <b>{ele}</b>
                                                    <hr />
                                                </Link>
                                            ))}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                <div class="col-10 text-white">
                    <ul class="navbar-nav">
                        <div className="row text-center">
                            <div className="col-1"></div>
                            <div className="col-2">
                                <li className="nav-item">
                                    <Link to="" className="nav-link">Movie</Link>
                                </li>
                            </div>
                            <div className="col-2">
                                <li className="nav-item">
                                    <Link to="" className="nav-link ms-4">Events</Link>
                                </li>
                            </div>
                            <div className="col-2">
                                <li className="nav-item">
                                    <Link to="" className="nav-link ms-4">Plays</Link>
                                </li>
                            </div>
                            <div className="col-2">
                                <li className="nav-item">
                                    <Link to="" className="nav-link ms-4">Activities</Link>
                                </li>
                            </div>
                            <div className="col-2">
                                <li className="nav-item">
                                    <Link to="" className="nav-link ms-4">Fanhood</Link>
                                </li>
                            </div>
                        </div>
                    </ul>
                </div>
            </div >
        )
    }
}
export default Navbar;