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

const salt = bcrypt.genSaltSync(10);

//Hàm hash password
let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            var hashPassword = await bcrypt.hashSync(password,salt);
            resolve(hashPassword);
        } catch (error) {
            reject(error);
        }
    })
} 
//Tạo user 
let createNewUser = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            //Check email có exist
            let check = await checkUserEmail(data.email);
            if(check === true){
                resolve({
                    errCode: 1,
                    message: 'Email already exists',
                })
            }
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                fullName: data.fullName,
                phoneNumber: data.phoneNumber,
                roleID: data.roleID,
            });
            resolve({
                errCode: 0,
                message: 'Created User'
            });

        } catch (error) {
            reject(error);
        }
    })
}

//Chưa xóa dc
let deleteUser = (userID) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {id: userID},
            })
            if (!user) {
                resolve({
                    errCode: 2,
                    errMessage: `User isn't exist`
                })
                
            }
            console.log(user);
            await db.User.destroy({
                where: {id: userID},

            });
            

            resolve({
                errCode: 0,
                errMessage: 'Deleted User'
            })
        } catch (error) {
            reject(error);
        }
    })
}

let updateUser = ((data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.id){
                resolve({
                    errCode: 2,
                    errMessage: 'Missing required parameter !'
                })
            }
            let user = await db.User.findOne({
                where: {id: data.id},
                raw: false
            })
            if(user) {
                
                user.fullName = data.fullName;
                user.phoneNumber = data.phoneNumber;

                await user.save();
            
                resolve({
                    errCode: 0,
                    message: 'Updated User !'
                });
            }
            else {
                resolve({
                    errCode: 1,
                    errMessage: 'User not found !'
                });
            }
        } catch (error) {
            reject(error);
        }
    })
});

module.exports = {
    handleUserLogin: handleUserLogin,
    getAllUsers: getAllUsers,
    createNewUser: createNewUser,
    deleteUser: deleteUser,
    updateUser: updateUser
}