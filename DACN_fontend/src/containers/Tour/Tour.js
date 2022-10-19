import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
// import * as actions from "../store/actions";
import * as actions from "../../store/actions";

import "./Tour.scss";
import { FormattedMessage } from "react-intl";
import { handleLoginApi } from "../../services/userService";
import { userLoginSuccess } from "../../store/actions";
class Tour extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <body className="body">
        <div className="container">
          <div className="sidebar">
            <div className="menuBar">
              <div className="profile">
                <img
                  src={require("../Tour/imgTour/user_avatar.jpg").default}
                  alt=""
                />
                <h1 className="name">Dinh</h1>
              </div>
              <ul>
                <li className="activeLink">
                  <i class="fas fa-home"></i>
                  <a href="#">Home</a>
                </li>
                <li>
                  <i class="fas fa-users"></i>
                  <a href="#">Social</a>
                </li>
                <li>
                  <i class="fas fa-bookmark"></i>
                  <a href="#">menu</a>
                </li>
                <li>
                  <i class="fas fa-cog"></i>
                  <a href="#">Setting</a>
                </li>
              </ul>
              <div className="card-sale">
                <img
                  src={require("../Tour/imgTour/VungTau.jpg").default}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="main">
            <div className="header">
              <div className="greeting">
                <h1>
                  Welcom to <br />
                  Dinh
                </h1>
              </div>
              <div className="searchbox">
                <input type="text" placeholder="Search" name="" id="" />
                <i class="fas fa-search"></i>
              </div>
              <div className="cart">
                <i class="fas fa-shopping-cart"></i>
              </div>
            </div>
            <div className="category">
              <div className="categoryItem">
                <div className="card">
                  <img
                    src={require("../Tour/imgTour/VungTau.jpg").default}
                    alt=""
                  />
                  <h1>Ha Noi</h1>
                </div>
                <div className="card">
                  <img
                    src={require("../Tour/imgTour/VungTau.jpg").default}
                    alt=""
                  />
                  <h1>Ha Noi</h1>
                </div>
                <div className="card">
                  <img
                    src={require("../Tour/imgTour/VungTau.jpg").default}
                    alt=""
                  />
                  <h1>Ha Noi</h1>
                </div>
                <div className="card">
                  <img
                    src={require("../Tour/imgTour/VungTau.jpg").default}
                    alt=""
                  />
                  <h1>Ha Noi</h1>
                </div>
                <div className="card">
                  <img
                    src={require("../Tour/imgTour/VungTau.jpg").default}
                    alt=""
                  />
                  <h1>Ha Noi</h1>
                </div>
                <div className="card">
                  <img
                    src={require("../Tour/imgTour/VungTau.jpg").default}
                    alt=""
                  />
                  <h1>Ha Noi</h1>
                </div>
                <div className="card">
                  <img
                    src={require("../Tour/imgTour/VungTau.jpg").default}
                    alt=""
                  />
                  <h1>Ha Noi</h1>
                </div>
                <div className="card">
                  <img
                    src={require("../Tour/imgTour/VungTau.jpg").default}
                    alt=""
                  />
                  <h1>Ha Noi</h1>
                </div>
              </div>
            </div>
            <div className="offer">
              <div className="card">
                <h1>50% off</h1>
                <h2>
                  the full price of <br /> tour
                </h2>
                <img
                  src={require("../Tour/imgTour/VungTau.jpg").default}
                  alt=""
                />
              </div>
            </div>
            <div className="item">
              <div className="box">
                <div className="itemCard">
                  <img
                    src={require("../Tour/imgTour/VungTau.jpg").default}
                    alt=""
                  />
                  <h1 className="itemTitle">Tour</h1>
                  <p>Tour nay that tuyet voi</p>
                  <span className="price">$499</span>
                </div>
                <div className="itemCard">
                  <img
                    src={require("../Tour/imgTour/VungTau.jpg").default}
                    alt=""
                  />
                  <h1 className="itemTitle">Tour</h1>
                  <p>Tour nay that tuyet voi</p>
                  <span className="price">$499</span>
                </div>
                <div className="itemCard">
                  <img
                    src={require("../Tour/imgTour/VungTau.jpg").default}
                    alt=""
                  />
                  <h1 className="itemTitle">Tour</h1>
                  <p>Tour nay that tuyet voi</p>
                  <span className="price">$499</span>
                </div>
                <div className="itemCard">
                  <img
                    src={require("../Tour/imgTour/VungTau.jpg").default}
                    alt=""
                  />
                  <h1 className="itemTitle">Tour</h1>
                  <p>Tour nay that tuyet voi</p>
                  <span className="price">$499</span>
                </div>
                <div className="itemCard">
                  <img
                    src={require("../Tour/imgTour/VungTau.jpg").default}
                    alt=""
                  />
                  <h1 className="itemTitle">Tour</h1>
                  <p>Tour nay that tuyet voi</p>
                  <span className="price">$499</span>
                </div>
                <div className="itemCard">
                  <img
                    src={require("../Tour/imgTour/VungTau.jpg").default}
                    alt=""
                  />
                  <h1 className="itemTitle">Tour</h1>
                  <p>Tour nay that tuyet voi</p>
                  <span className="price">$499</span>
                </div>
              </div>
            </div>
            <div className="article"></div>
          </div>
        </div>
      </body>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    // userLoginFail: () => dispatch(actions.adminLoginFail()),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tour);
