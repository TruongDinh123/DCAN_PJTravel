import db from "../models/index";
import bcrypt from "bcryptjs";

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUserEmail(email);
      if (isExist) {
        let user = await db.User.findOne({
          attributes: ["email", "roleID", "password"], //lấy ra những thứ cần lấy
          where: { email: email },
          raw: true,
        });
        if (user) {
          // let check = await bcrypt.compareSync(password, user.password);
          let check = true;
          if (check) {
            userData.errCode = 0;
            userData.errMsg = "ok";

            delete user.password;
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMsg = "Wrong password";
          }
        } else {
          userData.errCode = 2;
          userData.errMsg = "Email already exists";
          resolve(userData);
        }
      } else {
        userData.errCode = 1;
        userData.errMsg = "Email already exists";
      }
      resolve(userData);
    } catch (err) {
      reject(err);
    }
  });
};

let checkUserEmail = (useremail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: useremail },
      });

      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (err) {
      reject(err);
    }
  });
};
module.exports = {
  handleUserLogin: handleUserLogin,
};
