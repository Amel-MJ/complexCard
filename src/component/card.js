import React, { Component } from "react";
import "./card.css";

class card extends Component {
  state = {
    placeholderUserName: "Votre Nom",
    placeholderCardNumber: "***** ***** ***** *****",
    placeholderCardDate: "Date d'expiration",
    userName: "",
    cardNumber: "",
    cardDate: "",
    displayMessage: "Enter the user name",
    valid: {
      status: true,
      message: ""
    }
  };

  update = event => {
    switch (event.target.name) {
      case "userName":
        var regex = /[^A-Za-z ]/g;
        if (event.target.value.match(regex)) {
          this.setState({
            valid: { status: false, message: "Tape only text" }
          });
        } else if (event.target.value.length > 20) {
          this.setState({
            valid: { status: false, message: "doit être moins de 20" }
          });
        } else {
          this.setState({
            valid: { status: true, message: "" },
            [event.target.name]: event.target.value
          });
        }
        break;
      case "cardNumber":
        regex = /[^A-Za-z ]/g;
        if (event.target.value.match(regex)) {
          this.setState({
            valid: { status: false, message: "Card number not valid" }
          });
        } else {
          this.setState({
            valid: { status: true, message: "" },
            [event.target.name]: event.target.value
          });
        }
        break;
      case "cardDate":
        regex = /[^A-Za-z ]/g;
        if (event.target.value.match(regex)) {
          this.setState({
            valid: { status: false, message: "card date not valid" }
          });
        } else {
          this.setState({
            valid: { status: true, message: "" },
            [event.target.name]: event.target.value
          });
        }
        break;
    }
  };

  render() {
    return (
      <div className="displayCard">
        <div className="idCard">
          <div className="titleCard">
            <h1>Credit card</h1>
          </div>

          <h2 className="idCardNumber">{this.state.cardNumber}</h2>
          <img
            src="https://uploads.codesandbox.io/uploads/user/8f10ee4c-10fc-41b7-885a-4b795b293c1d/aFYl-visa.jpg"
            alt=""
          />
          <div className="userCard">
            <div className="userName">{this.state.userName}</div>

            <div className="userCardValidation">
              <span>{this.state.cardDate}</span>
            </div>
          </div>
        </div>

        {/* Remplissage des données */}
        <div className="bgCard">
          <input
            className="styleInput"
            type="text"
            name="cardNumber"
            placeholder={this.state.placeholderCardNumber}
            onChange={this.update}
          />{" "}
          {!this.state.valid.status ? (
            <span style={{ color: "#ff0000" }}>{this.state.valid.message}</span>
          ) : null}
          <input
            className="styleInput"
            type="text"
            name="userName"
            placeholder={this.state.placeholderUserName}
            onChange={this.update}
          />
          {!this.state.valid.status ? (
            <span style={{ color: "#ff0000" }}>{this.state.valid.message}</span>
          ) : null}
          <input
            className="styleInput"
            type="text"
            name="cardDate"
            placeholder={this.state.placeholderCardDate}
            onChange={this.update}
          />
          {!this.state.valid.status ? (
            <span style={{ color: "#ff0000" }}>{this.state.valid.message}</span>
          ) : null}
        </div>
      </div>
    );
  }
}
export default card;
