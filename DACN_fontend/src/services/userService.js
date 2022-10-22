import axios from "../axios";

const handleLogin = (userEmail,userPassword) =>{
    return axios.post('/api/login', {email: userEmail, password: userPassword});
}

const getAllUsers = (inputID) => {
    return axios.get(`/api/get-all-users?id=${inputID}`, {id : inputID});
}
export {handleLogin, getAllUsers}

