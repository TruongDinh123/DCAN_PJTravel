import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import {getAllUsers} from '../../services/userService'
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: []
        }
    }
    state = {

    }

    async componentDidMount() {
        let response = await getAllUsers('ALL');
        if(response && response.errCode === 0){
            this.setState({
                arrUsers: response.users
            })
        }
    }


    render() {
        console.log(this.state);
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                
                <div className='title text-center'>Quản lý người dùng</div>
                <div className='users-table mt-3 mx-2'>
                    <table id="customers">
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Edit</th>

                    </tr>
                    {/* Vòng lặp render người dùng */}
                        {arrUsers && arrUsers.map((item, index) => {
                            console.log('check map', item, index);
                            return (
                                 <tr>
                                    <td>{item.fullName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td>
                                        <button><i class="btn-edit fas fa-edit"></i></button>
                                        <button><i class="btn-del fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )
                            })
                        }
                    
                </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
