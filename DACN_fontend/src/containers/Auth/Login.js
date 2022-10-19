import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
// import * as actions from "../store/actions";
import * as actions from "../../store/actions";

import "./Login.scss";
import { FormattedMessage } from "react-intl";
import { handleLoginApi } from "../../services/userService";
import { userLoginSuccess } from "../../store/actions";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isshowPassword: false,
    };
  }

  handleOnChangeUsername = (event) => {
    this.setState({ username: event.target.value });
    console.log(event.target.value);
  };

  handleOnChangePassword = (event) => {
    this.setState({ password: event.target.value });
    console.log(event.target.value);
  };

  handleLogin = async () => {
    this.setState({
      errmsg: "",
    }); //clear ma loi

    try {
      let data = await handleLoginApi(this.state.username, this.state.password); //login

      if (data && data.errCode !== 0) {
        this.setState({
          errmsg: data.message,
        }); //clear ma loi
      }
      if (data && data.errCode === 0) {
        //todo add errorMessage
        this.props.userLoginSuccess(data.user);
        console.log("login success");
      }
    } catch (err) {
      if (err.response) {
        if (err.response.data) {
          this.setState({
            errmsg: err.response.data.message,
          });
        }
      } //hàm hiện thông báo mã lỗi trên loginBody
    }
  };
  render() {
    return (
      <div className="box-form">
        <div className="left">
          <div className="overlay">
            <h1>Hello Travel.</h1>
            <p>
              Chúng ta bắt đầu biết đi ngay từ khi còn bé. Vậy nên không có lý
              do gì khi đôi chân đang khỏe mà bạn lại phải ngồi im.
            </p>

            <span>
              <p>login with social media</p>
              <a href="#">
                <i class="fab fa-facebook-square"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>Login with Twitter
              </a>
            </span>
          </div>
        </div>
        <div className="right">
          <h5>Login</h5>
          <p>
            Don't have an account? <a href="#">Creat Your Account</a> it takes
            less than a minute
          </p>
          <div className="inputs">
            <input
              type="text"
              placeholder="user name"
              value={this.state.username}
              onChange={(event) => this.handleOnChangeUsername(event)}
            />
            <br />
            <input
              type="password"
              placeholder="password"
              onChange={(event) => this.handleOnChangePassword(event)}
            />
          </div>

          <br></br>

          <div className="errmsg" style={{ color: "red" }}>
            {this.state.errmsg}
          </div>

          <div className="forget-password">
            <label htmlFor="">
              <input type="checkbox" name="item" id="" checked />
              <span className="text-checkbox">Remember me</span>
            </label>
            <p>forger password?</p>
          </div>
          <button
            onClick={() => {
              this.handleLogin();
            }}
          >
            Login
          </button>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
