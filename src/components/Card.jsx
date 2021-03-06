import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-3 col-sm-12 my-4">
        <div className="card">
          <img
            src="https://via.placeholder.com/500x500.png?text=SAMPLE+NFT+IMAGE"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              <div className="d-flex justify-content-between">
                <div>Item #{this.props.id}</div>
                <h6 className="font-sm">Bet: ${this.props.bet}, Buy: ${this.props.price}</h6>
              </div>
            </h5>
            <p className="card-text">
                {this.props.description}
            </p>
            <div className="input-group">
              <input className="form-control" type="text" />
              <div className="input-group-append">
                <button className="btn btn-outline-primary mx-1" type="button">
                Bet
                </button>
                <button className="btn btn-outline-primary" type="button">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
