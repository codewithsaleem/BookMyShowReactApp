import React, { Component } from "react";
import { Link } from "react-router-dom";
import auth from "./httpServiceMovieAuth";
import http from "./httpServiceMovie.js";

class PurchaseHistory extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row bg-dark" style={{ height: '500px' }}></div>
                <div className="row bg-dark">
                    <div className="col-3 text-white ms-3"><h3>Booking History</h3></div>
                    <div className="col-3 text-white"><h3>Setting</h3></div>
                </div>
                {/* <div className="row bg-secondary"> */}
                <div className="container mt-4">
                    <h3>You don't seem to have any recent bookings</h3>
                    <h4 className="mt-4 text-danger">View All Bookings</h4>
                    <b className="mt-4">
                        Explore the world with Booking.com. Big savings on homes, hotels, flights, car rentals, taxis, <br />
                        and attractions – build your perfect trip on any budget.
                    </b>
                </div>
                {/* </div> */}
            </React.Fragment>
        )
    }
}
export default PurchaseHistory;