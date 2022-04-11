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
                <h6 className="font-sm"><a href=".">0x288...</a></h6>
              </div>
            </h5>
            <p className="card-text">{this.props.description}</p>
            <div className="d-flex justify-content-end">
              <button className="btn btn-outline-primary" type="button">
                Mint
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
