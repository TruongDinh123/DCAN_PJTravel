import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';
import {handleLogin} from '../../services/userService';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state= {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: '',
        };
    }

    handleOnChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    };

    handleOnChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    
    handleLogin = async () => {
        //Clear lỗi
        this.setState({
            errMessage: ''
        })
        console.log('username: ', this.state.username, 'password: ', this.state.password);
        console.log(this.state);
        try {
            let data = await handleLogin(this.state.username, this.state.password);
            if(data && data.errCode !== 0 ){
                this.setState({
                    errMessage: data.message
                });
            }
            if(data && data.errCode === 0){
                this.props.userLoginSuccess(data.user);                
                console.log('Success')
            }
        } catch (error) {
            //Hiện lỗi thiếu input
            if(error.response){
                if(error.response.data){
                    this.setState({
                    errMessage: error.response.data.message
                    })
                }
            }
            console.log('Lỗi', error.response);
            
        }
    }

    handleShowPassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 login-text'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <label>Username</label>
                            <input type='text' className='form-control' 
                            value={this.state.username} 
                            onChange={(event) => this.handleOnChangeUsername(event)}
                            placeholder='Enter username' ></input>
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Password</label>
                            <div className='login-custom-password'>
                                <input 
                                    type={this.state.isShowPassword ? 'text' : 'password'}
                                    className='form-control' 
                                    onChange={(event) => this.handleOnChangePassword(event)}
                                    placeholder='Enter password'></input>
                                <span onClick={() => {this.handleShowPassword()}}>
                                    
                                    <i className={this.state.isShowPassword ? "fas fa-eye" : "fas fa-eye-slash" } ></i>    
                                </span>
                            </div>

                        </div>
                        
                        <div className='col-12' style={{color: 'red'}}>
                            {this.state.errMessage}
                        </div>
                        <div className='col-12'>
                            <button className='login-btn' 
                            onClick={() => this.handleLogin()}>Login</button>
                        </div>
                        <div className='col-12'>
                            <span className='login-forgotpassword'>Forgot your Password?</span>
                        </div>
                        <div className='col-12 text-center'>
                            <span className=''>Or login with: </span>
                        </div>
                        <div className='col-12 login-social text-center'>
                            <i className="login-icon google fab fa-google-plus-g"></i>                                 
                            <i className="login-icon facebook fab fa-facebook-f"></i>      
                                
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};  

export default connect(mapStateToProps, mapDispatchToProps)(Login)
