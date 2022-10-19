import bcrypt from "bcryptjs";
import db from "../models/index";

const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    let hashPasswordFromBcrypt = await hashUserPassword(data.password);
    await db.User.create({
      username: data.username,
      password: hashPasswordFromBcrypt,
      fullName: data.fullName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      image: data.image,
      roleID: data.roleID,
    });
    resolve("tao user thanh cong");
  });
};

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    let hashPassword = await bcrypt.hashSync(password, salt);
    resolve(hashPassword);
  });
};

let getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = db.User.findAll({ raw: true });
      resolve(users);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  createNewUser: createNewUser,
  getAllUser: getAllUser,
};
