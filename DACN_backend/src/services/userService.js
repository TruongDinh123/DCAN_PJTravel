import db from '../models/index';
import bcrypt from  'bcryptjs';
let handleUserLogin = (userEmail,password) => {
    return new Promise(async(resolve, reject) => {
        try {
            //Ktra email tồn tại, err: 1 -> ktra user 1 lần nữa err:2 -> ktra pass, err: 3
            let userMess = {};

            let isExist = await checkUserEmail(userEmail);
            if(isExist){ //-> compare password
                let user = await db.User.findOne({
                    where: { email: userEmail },
                    raw: true,
                });

                //Trong lúc nhập mà user bị xóa -> check thêm 1 đk
                if(user){
                    let checkPass = await bcrypt.compareSync(password, user.password); //false
                    //Nếu check pass đúng trả ra user
                    if(checkPass){
                        userMess.errCode= 0 ;
                        userMess.errMessage = 'ok';
                        delete user.password;
                        userMess.user = user;
                    }
                    else{
                        userMess.errCode = 3;
                        userMess.errMessage = 'Wrong password';
                    }
                }
                else{
                    userMess.errCode = 2;
                    userMess.errMessage = 'User not found';
                }


            }
            //if !Exist
            else{
                userMess.errCode = 1;
                userMess.errMessage = 'Your email isnt exist';
            }
            resolve(userMess);
        } catch (error) {
            reject(error);
        }
    })
}

let checkUserEmail = (userEmail) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: userEmail},
            })
            if(user){
                resolve(true)
            }else{
                resolve(false)
            }
        } catch (error) {
            reject(error);
        }
    })
}


let getAllUsers = (userID) => {
    return new Promise(async(resolve, reject) => {
        try {
            let users = '';
            if(userID === 'ALL'){
                users = await db.User.findAll({
                    attributes:{
                        exclude: ['password']
                    }

                })
            } 
            if(userID && userID !== 'ALL'){
                users = await db.User.findOne({
                    where: {id : userID},
                    attributes:{
                        exclude: ['password']
                    }
                })
            }
            resolve(users);
        } catch (error) {
            reject(error);
        }
    })
}
module.exports = {
    handleUserLogin: handleUserLogin,
    getAllUsers: getAllUsers,
}