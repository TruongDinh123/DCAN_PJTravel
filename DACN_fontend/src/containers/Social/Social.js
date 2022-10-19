import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
// import * as actions from "../store/actions";
import * as actions from "../../store/actions";

// import AvatarImg from "../../src/assets/images/user_avatar.jpg";

import "./Social.scss";
import { FormattedMessage } from "react-intl";

class Social extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <body>
        <nav>
          <img
            src={require("../Social/imgSocial/Logo.jpg").default}
            alt=""
            className="Logo"
          />
          <div className="nav-left">
            <div className="search-box">
              <i class="fas fa-search"></i>
              <input type="text" placeholder="Search" />
            </div>
          </div>

          <div className="nav-right">
            <ul>
              <li>
                <i class="fab fa-facebook-messenger"></i>
              </li>
              <li>
                <i class="fab fa-facebook-messenger"></i>
              </li>
            </ul>
            <div className="nav-user">
              <img
                src={require("../Social/imgSocial/user_avatar.jpg").default}
                alt=""
                className="user-avatar"
              />
            </div>
          </div>
          <div className="settings-menu">
            <div className="settings-menu-inner">
              <div className="user-profile">
                <img
                  src={require("../Social/imgSocial/user_avatar.jpg").default}
                  alt=""
                />
                <div>
                  <p>Dinh dep trai</p>
                  <a href="">See your profile</a>
                </div>
              </div>
              <hr />
              <div className="user-profile">
                <i class="fas fa-info-circle"></i>
                <div>
                  <p>Give me feedback</p>
                  <a href="">help us</a>
                </div>
              </div>
              <hr />
              <div className="setting-links">
                <i class="fas fa-cog"></i>
                <a href="#">
                  Setting & Privacy <i class="fas fa-arrow-right"></i>
                </a>
              </div>
              <div className="setting-links">
                <i class="fas fa-question"></i>
                <a href="#">
                  Help & Support <i class="fas fa-arrow-right"></i>
                </a>
              </div>
              <div className="setting-links">
                <i class="fas fa-sign-out-alt"></i>
                <a href="#">
                  Log out <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="left-sidebar">
            <div className="icons-links">
              <a href="">
                <i class="fas fa-home"></i>
                Trang chu
              </a>
              <a href="">
                <i class="fas fa-suitcase"></i>Dat Tour
              </a>
              <a href="">
                <i class="fas fa-users"></i>Mạng xã hội
              </a>
              <a href="">
                <i class="fas fa-users"></i>Mạng xã hội
              </a>
              <a href="">
                <i class="fas fa-users"></i>Mạng xã hội
              </a>
            </div>

            <div className="history-links">
              <p>History Tour</p>
              <a href="#">
                <img
                  src={require("../Social/imgSocial/CaMau.jpg").default}
                  alt=""
                />
                Ha Giang
              </a>
              <a href="#">
                <img
                  src={require("../Social/imgSocial/VungTau.jpg").default}
                  alt=""
                />
                Vung Tau
              </a>
              <a href="#">
                <img
                  src={require("../Social/imgSocial/VungTau.jpg").default}
                  alt=""
                />
                Vung Tau
              </a>
              <a href="#">
                <img
                  src={require("../Social/imgSocial/VungTau.jpg").default}
                  alt=""
                />
                Vung Tau
              </a>
            </div>
          </div>
          <div className="main-content">
            <div className="write-post-container">
              <div className="user-profile">
                <img
                  src={require("../Social/imgSocial/user_avatar.jpg").default}
                  alt=""
                />
                <div>
                  <p>Dinh dep trai</p>
                  <small>
                    public <i class="fas fa-sort-down"></i>
                  </small>
                </div>
              </div>

              <div className="post-input-container">
                <textarea
                  name=""
                  id=""
                  rows="3"
                  placeholder="What's on your mind , Dinh?"
                ></textarea>
                <div className="add-post-links">
                  <a href="">
                    <i class="fas fa-video"> Videos </i>
                    <i class="fas fa-image"> Images </i>
                  </a>
                </div>
              </div>
            </div>

            <div className="post-container">
              <div className="user-profile">
                <img
                  src={require("../Social/imgSocial/user_avatar.jpg").default}
                  alt=""
                />
                <div>
                  <p>Dinh dep trai</p>
                  <span>Sunday 16 10 2022, 1:17 pm</span>
                </div>
              </div>
              <p className="post-text">
                Hãy để chuyến đi của quý khách có một khởi đầu tuyệt vời khi ở
                lại khách sạn này, nơi có Wi-Fi miễn phí trong tất cả các phòng.
                Nằm ở vị trí trung tâm tại Heathrow của London, chỗ nghỉ này đặt
                quý khách ở gần các điểm thu hút và tùy chọn ăn uống thú vị.
                Đừng rời đi trước khi ghé thăm London Eye nổi tiếng. Chỗ nghỉ 3
                sao này có nhà hàng giúp cho kỳ nghỉ của quý khách thêm thư thái
                và đáng nhớ.
              </p>
              <img
                src={require("../Social/imgSocial/CaMau.jpg").default}
                alt=""
                className="post-img"
              />

              <div className="post-row">
                <div className="activity-icons">
                  <div>
                    <i class="far fa-thumbs-up"></i>
                    120
                  </div>
                  <div>
                    <i class="far fa-comments"></i>5
                  </div>
                  <div>
                    <i class="far fa-share-square"></i>
                    10
                  </div>
                </div>
                <div className="post-profile-icon"></div>
              </div>
            </div>

            <div className="post-container">
              <div className="user-profile">
                <img
                  src={require("../Social/imgSocial/user_avatar.jpg").default}
                  alt=""
                />
                <div>
                  <p>Dinh dep trai</p>
                  <span>Sunday 16 10 2022, 1:17 pm</span>
                </div>
              </div>
              <p className="post-text">
                Hãy để chuyến đi của quý khách có một khởi đầu tuyệt vời khi ở
                lại khách sạn này, nơi có Wi-Fi miễn phí trong tất cả các phòng.
                Nằm ở vị trí trung tâm tại Heathrow của London, chỗ nghỉ này đặt
                quý khách ở gần các điểm thu hút và tùy chọn ăn uống thú vị.
                Đừng rời đi trước khi ghé thăm London Eye nổi tiếng. Chỗ nghỉ 3
                sao này có nhà hàng giúp cho kỳ nghỉ của quý khách thêm thư thái
                và đáng nhớ.
              </p>
              <img
                src={require("../Social/imgSocial/CaMau.jpg").default}
                alt=""
                className="post-img"
              />

              <div className="post-row">
                <div className="activity-icons">
                  <div>
                    <i class="far fa-thumbs-up"></i>
                    120
                  </div>
                  <div>
                    <i class="far fa-comments"></i>5
                  </div>
                  <div>
                    <i class="far fa-share-square"></i>
                    10
                  </div>
                </div>
                <div className="post-profile-icon"></div>
              </div>
            </div>

            <div className="post-container">
              <div className="user-profile">
                <img
                  src={require("../Social/imgSocial/user_avatar.jpg").default}
                  alt=""
                />
                <div>
                  <p>Dinh dep trai</p>
                  <span>Sunday 16 10 2022, 1:17 pm</span>
                </div>
              </div>
              <p className="post-text">
                Hãy để chuyến đi của quý khách có một khởi đầu tuyệt vời khi ở
                lại khách sạn này, nơi có Wi-Fi miễn phí trong tất cả các phòng.
                Nằm ở vị trí trung tâm tại Heathrow của London, chỗ nghỉ này đặt
                quý khách ở gần các điểm thu hút và tùy chọn ăn uống thú vị.
                Đừng rời đi trước khi ghé thăm London Eye nổi tiếng. Chỗ nghỉ 3
                sao này có nhà hàng giúp cho kỳ nghỉ của quý khách thêm thư thái
                và đáng nhớ.
              </p>
              <img
                src={require("../Social/imgSocial/CaMau.jpg").default}
                alt=""
                className="post-img"
              />

              <div className="post-row">
                <div className="activity-icons">
                  <div>
                    <i class="far fa-thumbs-up"></i>
                    120
                  </div>
                  <div>
                    <i class="far fa-comments"></i>5
                  </div>
                  <div>
                    <i class="far fa-share-square"></i>
                    10
                  </div>
                </div>
                <div className="post-profile-icon"></div>
              </div>
            </div>
          </div>
          <div className="right-sidebar">
            <div className="sidebar-title">
              <h4>Bookings</h4>
              <a href="">See Alls</a>
            </div>
            <div className="bookings">
              <div className="left-booking">
                <a href="#">
                  <img
                    src={require("../Social/imgSocial/VungTau.jpg").default}
                    alt=""
                  />
                </a>
              </div>
              <div className="bookings-right">
                <h4>1000$</h4>
                <p>Da Nang</p>
                <a href="">More Details</a>
              </div>
            </div>
            <div className="bookings">
              <div className="left-booking">
                <a href="#">
                  <img
                    src={require("../Social/imgSocial/VungTau.jpg").default}
                    alt=""
                  />
                </a>
              </div>
              <div className="bookings-right">
                <h4>1000$</h4>
                <p>Da Nang</p>
                <a href="">More Details</a>
              </div>
            </div>
            <div className="bookings">
              <div className="left-booking">
                <a href="#">
                  <img
                    src={require("../Social/imgSocial/VungTau.jpg").default}
                    alt=""
                  />
                </a>
              </div>
              <div className="bookings-right">
                <h4>1000$</h4>
                <p>Da Nang</p>
                <a href="">More Details</a>
              </div>
            </div>
            <div className="sidebar-title">
              <h4>Advertisement</h4>
              <a href="">Close</a>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    // adminLoginSuccess: (adminInfo) =>
    //   dispatch(actions.adminLoginSuccess(adminInfo)),
    // adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Social);
