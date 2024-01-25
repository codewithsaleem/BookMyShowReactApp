import React, { Component } from "react";
class BookTime extends Component {
    state = {
        view: -1,
        amount: 0,
        selectedNum1: [],
        selectedNum2: [],
        selectedNum3: [],
        selectedNum4: [],
        selectedNum5: [],
        selectedNum6: []
    }
    handle420 = (num, num1, num2) => {
        let s1 = { ...this.state };
        let fnd1 = null;
        let fnd2 = null;
        if (s1.selectedNum1.length > 0) {
            fnd1 = s1.selectedNum1.find((f1) => f1 === num1);
        }
        if (s1.selectedNum2.length > 0) {
            fnd2 = s1.selectedNum2.find((f2) => f2 === num2);
        }
        if (fnd1 || fnd2) { }
        else s1.amount = s1.amount + num;
        if (num1) s1.selectedNum1.push(num1);
        if (num2) s1.selectedNum2.push(num2);
        this.setState(s1);
    }
    handle250 = (num, num1, num2, num3, num4) => {
        let s1 = { ...this.state };
        let fnd1 = null;
        let fnd2 = null;
        let fnd3 = null;
        let fnd4 = null;

        if (s1.selectedNum3.length > 0) {
            fnd1 = s1.selectedNum3.find((f1) => f1 === num1);
        }
        if (s1.selectedNum4.length > 0) {
            fnd2 = s1.selectedNum4.find((f2) => f2 === num2);
        }
        if (s1.selectedNum5.length > 0) {
            fnd3 = s1.selectedNum5.find((f3) => f3 === num3);
        }
        if (s1.selectedNum6.length > 0) {
            fnd4 = s1.selectedNum6.find((f4) => f4 === num4);
        }
        if (fnd1 || fnd2 || fnd3 || fnd4) { }
        else s1.amount = s1.amount + num;
        if (num1) s1.selectedNum3.push(num1);
        if (num2) s1.selectedNum4.push(num2);
        if (num3) s1.selectedNum5.push(num3);
        if (num4) s1.selectedNum6.push(num4);
        this.setState(s1);
    }
    handlePayment = (e) => {
        e.preventDefault();
        this.setState({ view: 1 });
    }
    handleBack = () => {
        let { index } = this.props;
        this.props.history.push(`/movieDetails/${index}`);
    }
    render() {
        let { view, amount, selectedNum1, selectedNum2, selectedNum3, selectedNum4, selectedNum5, selectedNum6 } = this.state;
        let totalTickets = selectedNum1.length + selectedNum2.length + selectedNum3.length + selectedNum4.length + selectedNum5.length + selectedNum6.length;
        let ticketsNum1 = selectedNum1.map((ele) => 'A' + (ele));
        let ticketsNum2 = selectedNum2.map((ele) => 'B' + (ele));
        let ticketsNum3 = selectedNum3.map((ele) => 'A' + (ele));
        let ticketsNum4 = selectedNum4.map((ele) => 'B' + (ele));
        let ticketsNum5 = selectedNum5.map((ele) => 'C' + (ele));
        let ticketsNum6 = selectedNum6.map((ele) => 'D' + (ele));

        let { bookTheatrs, bookTime, products1, bookName } = this.props;
        let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        return (
            <React.Fragment>
                <div className="row bg-secondary text-white">
                    <div className="col-1 m-3">
                        <span
                            className="fa-stack fa-1x text-white"
                            style={{ cursor: "pointer" }}
                            onClick={() => this.handleBack()}
                        >
                            <i className="fa-solid fa-stack-2x fa-chevron-left"></i>
                        </span>
                    </div>
                    <div className="col-3">
                        <h3>{products1.title}</h3>
                        <b>{bookName}</b>
                    </div>
                </div>

                {view === -1 && (
                    <React.Fragment>
                        <div className="row bg-light">
                            <b className="m-3">16 NOV, {bookTime} AM</b>
                        </div>

                        <div className="container" style={{backgroundColor: 'lightgoldenrodyellow'}}>
                            <h3 className="text-secondary">
                                RECLINER - Rs 420.00
                            </h3>
                            <hr />
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-11">
                                    <b className="text-secondary mt-2" style={{ fontSize: '30px' }}>A</b>
                                    {num.map((ele1) => (
                                        <button className={selectedNum1.includes(ele1) ? 'btn-success text-white btn btn-sm btn-outline-dark m-1' : 'btn-white btn btn-sm text-dark btn-outline-dark m-1'} onClick={() => this.handle420(420, ele1, null)}>{ele1}</button>
                                    ))}
                                    <br />
                                    <b className="text-secondary mt-2" style={{ fontSize: '30px' }}>B</b>
                                    {num.map((ele2) => (
                                        <button className={selectedNum2.includes(ele2) ? 'btn-success text-white btn btn-sm btn-outline-dark m-1' : 'btn-white btn btn-sm text-dark btn-outline-dark m-1'} onClick={() => this.handle420(420, null, ele2)}>{ele2}</button>
                                    ))}
                                </div>
                            </div>

                            <h3 className="text-secondary mt-3">
                                GOLD - Rs 250.00
                            </h3>
                            <hr />
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-4">
                                    <b className="text-secondary mr-2" style={{ fontSize: '30px' }}>A</b>
                                    {num.map((ele1, index) => (
                                        index < 7 && <button className={selectedNum3.includes(ele1) ? 'btn-success text-white btn btn-sm btn-outline-dark m-1' : 'btn-white btn btn-sm text-dark btn-outline-dark m-1'} onClick={() => this.handle250(250, ele1, null, null, null)}>{ele1}</button>
                                    ))}
                                </div>
                                <div className="col-1"></div>
                                <div className="col-6 mt-3">
                                    {num.map((ele1, index) => (
                                        index >= 7 && <button className={selectedNum3.includes(ele1) ? 'btn-success text-white btn btn-sm btn-outline-dark m-1' : 'btn-white btn btn-sm text-dark btn-outline-dark m-1'} onClick={() => this.handle250(250, ele1, null, null, null)}>{ele1}</button>
                                    ))}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-4">
                                    <b className="text-secondary mr-2" style={{ fontSize: '30px' }}>B</b>
                                    {num.map((ele, index) => (
                                        index < 7 && <button className={selectedNum4.includes(ele) ? 'btn-success text-white btn btn-sm btn-outline-dark m-1' : 'btn-white btn btn-sm text-dark btn-outline-dark m-1'} onClick={() => this.handle250(250, null, ele, null, null)}>{ele}</button>
                                    ))}
                                </div>
                                <div className="col-1"></div>
                                <div className="col-6 mt-3">
                                    {num.map((ele, index) => (
                                        index >= 7 && <button className={selectedNum4.includes(ele) ? 'btn-success text-white btn btn-sm btn-outline-dark m-1' : 'btn-white btn btn-sm text-dark btn-outline-dark m-1'} onClick={() => this.handle250(250, null, ele, null, null)}>{ele}</button>
                                    ))}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-4">
                                    <b className="text-secondary mr-2" style={{ fontSize: '30px' }}>C</b>
                                    {num.map((ele, index) => (
                                        index < 7 && <button className={selectedNum5.includes(ele) ? 'btn-success text-white btn btn-sm btn-outline-dark m-1' : 'btn-white btn btn-sm text-dark btn-outline-dark m-1'} onClick={() => this.handle250(250, null, null, ele, null)}>{ele}</button>
                                    ))}
                                </div>
                                <div className="col-1"></div>
                                <div className="col-6 mt-3">
                                    {num.map((ele, index) => (
                                        index >= 7 && <button className={selectedNum5.includes(ele) ? 'btn-success text-white btn btn-sm btn-outline-dark m-1' : 'btn-white btn btn-sm text-dark btn-outline-dark m-1'} onClick={() => this.handle250(250, null, null, ele, null)}>{ele}</button>
                                    ))}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-4">
                                    <b className="text-secondary mr-2" style={{ fontSize: '30px' }}>D</b>
                                    {num.map((ele, index) => (
                                        index < 7 && <button className={selectedNum6.includes(ele) ? 'btn-success text-white btn btn-sm btn-outline-dark m-1' : 'btn-white btn btn-sm text-dark btn-outline-dark m-1'} onClick={() => this.handle250(250, null, null, null, ele)}>{ele}</button>
                                    ))}
                                </div>
                                <div className="col-1"></div>
                                <div className="col-6 mt-3">
                                    {num.map((ele, index) => (
                                        index >= 7 && <button className={selectedNum6.includes(ele) ? 'btn-success text-white btn btn-sm btn-outline-dark m-1' : 'btn-white btn btn-sm text-dark btn-outline-dark m-1'} onClick={() => this.handle250(250, null, null, null, ele)}>{ele}</button>
                                    ))}
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-4"></div>
                                <div className="col-4">
                                    <div className="row">
                                        <button className="btn btn-primary" onClick={this.handlePayment}>Pay Rs. {amount}.00</button>
                                    </div>
                                </div>
                                <div className="col-4"></div>
                            </div>
                        </div>
                    </React.Fragment>
                )}

                {view === 1 && (
                    <React.Fragment>
                        <div className="row bg-light">
                            <div className="col-6 m-2">
                                <img src="data:image/jpeg;base64,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" alt="" />
                            </div>
                            <div className="col-3">
                                <div className="card">
                                    <h4 className="text-danger">BOOKING SUMMARY</h4>
                                    <div className="row p-2">
                                        <div className="col-5">
                                            Movie Name <br />
                                            Movie Hall <br />
                                            Total Tickets <br />
                                            Tickets <br />
                                            Date <br />
                                            Time <br />
                                            <br />
                                            Amount Paid
                                        </div>
                                        <div className="col-7">
                                            {products1.title} <br />
                                            {bookName} <br />
                                            {totalTickets} <br />
                                            {ticketsNum1}  {ticketsNum2}  {ticketsNum3}  {ticketsNum4}  {ticketsNum5}  {ticketsNum6} <br />
                                            16 NOV <br />
                                            {bookTime} <br />
                                            <br />
                                            Rs.{amount}.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row bg-light">
                            <div className="col-6"></div>
                            <div className="col-6 mt-3">
                                <img src="data:image/png;base64,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" alt="" />
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </React.Fragment>
        )
    }
}
export default BookTime;