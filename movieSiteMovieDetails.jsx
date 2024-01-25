import React, { Component } from "react";
import http from "./httpServiceMovie.js"
import { Link } from "react-router-dom";
class MovieDetails extends Component {
    state = {
        products: [],
        isExpandedPrice: false,
        isExpandedShow: false
    }
    handleTime = (theaters, time, pro, name) => {
        let { index } = this.props.match.params;

        this.props.onTime(theaters, time, pro, name, index);
        this.props.history.push("/home/BookTicket");
    }
    handleToggle = (num) => {
        if (num === 1) this.setState({ isExpandedPrice: !this.state.isExpandedPrice });
        if (num === 2) this.setState({ isExpandedShow: !this.state.isExpandedShow });
    }
    async fetchData() {
        let response = await http.get("/movies")
        let { data } = response;
        this.setState({ products: data })
    }
    componentDidMount() {
        this.fetchData();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) this.fetchData();
    }

    render() {
        let { products, isExpandedPrice, isExpandedShow } = this.state;
        let { index } = this.props.match.params;
        let products1 = products[+index];
        let priceFilter = ["0-100", "101-200", "201-300", "More Than 300"];
        let showFilter = ["Morning", "Afternoon", "Evening", "Night"];

        return (
            <React.Fragment>
                <div className="row">
                    {products1 &&
                        <React.Fragment>
                            <div className="row bg-secondary ms-2">
                                <h2 className="text-white">{products1.title}</h2>
                                <p>
                                    <i className="text-danger fa-sharp fa-solid fa-heart"></i>
                                    <b className="text-white ms-3">78%</b>
                                    <b className="border text-white ms-3 p-1 rounded-4">{products1.genre}</b>
                                    <b className="border text-white ms-3 p-1 rounded-4">Thriller</b>
                                </p>
                                <p className="text-white">204,584 votes</p>
                            </div>

                            <div className="row bg-light">
                                <div className="col-8 mt-3">
                                    <p>
                                        <b className="ms-4">19 TODAY</b>
                                        <b className="ms-4">20 NOV</b>
                                        <b className="ms-4">21 NOV</b>
                                    </p>
                                </div>
                                <div className="col-2 mt-2">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                                                Filter Price
                                            </a>
                                            <div className="dropdown-menu">
                                                {priceFilter.map((ele, index) => (
                                                    <Link to={`/home${ele}`} key={index} className="dropdown-item" value={ele}><i className="fa-solid fa-square mr-1"></i>{ele}</Link>
                                                ))}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-2 mt-2">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                                                Filter Showtime
                                            </a>
                                            <div className="dropdown-menu">
                                                {showFilter.map((ele, index) => (
                                                    <Link to={`/home${ele}`} key={index} className="dropdown-item" value={ele}><i className="fa-solid fa-square mr-1"></i>{ele}</Link>
                                                ))}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="row ms-2" style={{ backgroundColor: 'lightpink' }}>
                                <div className="col-6">
                                    <p><i class="fa-solid fa-bowl-chopsticks-noodles"></i></p>
                                    M-Ticket-Available
                                </div>
                                <div className="col-6">
                                    <p><i class="fa-solid fa-bowl-chopsticks-noodles"></i></p>
                                    Food Availabe
                                </div>
                            </div>

                            <div className="row ms-2 p-4" style={{backgroundColor : 'lightcyan'}}>
                                {products1.theaters.map((t1) => (
                                    <React.Fragment>
                                        <div className="col-1"><i class="fa-sharp fa-regular fa-heart m-2"></i></div>
                                        <div className="col-3"><b className="m-2">{t1.name}</b></div>
                                        <div className="col-2"></div>
                                        <div className="col-6">
                                            <div className="row">
                                                {t1.timings.map((c1) => (
                                                    <div className="col-2 border m-2 text-center text-primary font-weight-bold" onClick={() => this.handleTime(products1.theaters, c1.time, products1, t1.name)}>
                                                        <span data-toggle="tooltip" title={c1.price}>{c1.time}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <ul>
                                                <li className="font-weight-bold text-danger">Cancellation Available</li>
                                            </ul>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </React.Fragment>
                    }
                </div>
            </React.Fragment>
        )
    }
}
export default MovieDetails;