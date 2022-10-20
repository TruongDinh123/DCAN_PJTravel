import userService from '../services/userService';

let handleLogin = async (req, res) => {
    let email = req.body.email; //Lấy email ng dùng gửi 
    let password = req.body.password;

    if(!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing input parameter !',
        })
    }
    let userData = await userService.handleUserLogin(email, password); 
    return res.status(200).json({
        //userService đã xử lý err dùm
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
    })
}

let handleGetAllUsers = async (req, res) => {
    let id = req.query.id;
    if(!id){
        return res.status(200).json({
        errCode: 1,
        errMessage: 'Missing required parameter',
        users: [] //Trả về chuỗi rỗng
        })
    }

    //Ngược lại trả về User
    let users = await userService.getAllUsers(id);
    // console.log(users);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        users

    });
}
module.exports = {
    handleLogin: handleLogin,
    handleGetAllUsers: handleGetAllUsers,
}