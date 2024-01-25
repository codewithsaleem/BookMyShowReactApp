import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./movieSiteNavbar";
import Show from "./movieSiteShow";
import Login from "./movieSiteLogin";
import EditProfile from "./movieSiteEditProfile";
import Logout from "./movieSitelogout";
import PurchaseHistory from "./movieSitePurchaseHistory";
import Book from "./movieSiteBookASmile";
import MovieDetails from "./movieSiteMovieDetails";
import BookTime from "./movieSiteBooking";
class MainComponent extends Component {
    state = {
        bookTime: "",
        bookName: "",
        prod: {},
        index: -1,
        bookTheatrs: [],
    }
    handleTime = (thaters, time, products1, name, index) => {
        let s1 = { ...this.state };
        s1.bookTheatrs = thaters;
        s1.bookTime = time;
        s1.bookName = name;
        s1.index = index;
        s1.prod = products1;
        this.setState(s1);
    }

    render() {
        let { bookTheatrs, bookTime, prod, bookName, index } = this.state;
        return (
            <React.Fragment>
                <Navbar />

                <Switch>
                    <Route path="/home/BookTicket" render={(props) => <BookTime {...props} bookTheatrs={bookTheatrs} bookTime={bookTime} products1={prod} bookName={bookName} index={index}/>} />
                    <Route path="/movieDetails/:index" render={(props) => <MovieDetails {...props} onTime={this.handleTime} />} />
                    <Route path="/home/BookASmile" render={(props) => <Book {...props} />} />
                    <Route path="/home/Purchase History" render={(props) => <PurchaseHistory {...props} />} />
                    <Route path="/home/SignOut" render={(props) => <Logout {...props} />} />
                    <Route path="/login" render={(props) => <Login {...props} />} />
                    <Route path="/home/Edit Profile" render={(props) => <EditProfile {...props} />} />
                    <Route path="/home" render={(props) => <Show {...props} />} />
                    <Redirect from="/" to="/home" />
                </Switch>
            </React.Fragment>
        )
    }
}
export default MainComponent;