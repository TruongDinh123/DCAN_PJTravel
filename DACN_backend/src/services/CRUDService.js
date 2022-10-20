import bcrypt from 'bcryptjs';
import db from '../models/index';

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

//Tạo mới user
let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                username: data.username,
                password: hashPasswordFromBcrypt,
                fullName: data.fullName,
                email: data.email,
                phoneNumber: data.phoneNumber,
                roleID: data.roleID,
            });
            
            resolve('Created User');

        } catch (error) {
            reject(error);
        }
    })
}

let getAllUser = async (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            let users = db.User.findAll({
                raw: true, //Chỉ lấy dữ liệu cần
            });
            resolve(users);
        }
        catch (err) {
            reject(err);
        }
    })
}

let getUserByID = async (userID) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {id: userID},
                raw: false,
            });
            if(user){
                resolve(user);
            }
            else {
                resolve("Not found")
            }
        } catch (error) {
            reject(error);
        }
    })
}

let updateUserData = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {id: data.id},
                raw: false
                
            })
            if(user) {
                user.fullName = data.fullName;
                user.email = data.email;
                user.phoneNumber = data.phoneNumber;
                // await db.User.update({user, 
                //     where: {id: user.id}
                // });
            
                await user.save();
                resolve();
            }
            else {
                resolve();
            }

        } catch (error) {
            reject(error);
        }
    })
}

let deleteUserByID = (userID) => {
    return new Promise(async(resolve, reject) => {
         try {
            let user = await db.User.destroy({
                where: {id: userID}
            })
            // if(user) {
            //     await user.destroy({ 
            //         where: {id: userID}
            //     });
            // }

            resolve();
        } catch (error) {
            reject(error);
        }
    })
}
module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserByID: getUserByID,
    updateUserData: updateUserData,
    deleteUserByID: deleteUserByID,
}