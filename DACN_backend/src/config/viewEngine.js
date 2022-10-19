//var: khai báo global khó kiểm soát tham số
//let: khai báo trong phạm vi này thôi dễ kiểm soát

import express from "express";

let configViewEngine = (app) => {
  app.use(express.static("./src/public"));
  //static là nơi để lấy dữ liệu trên server chỉ đc lấy trong thư mục được truyền vào.
  app.set("view engine", "ejs");
  app.set("views", "./src/views");
};

module.exports = configViewEngine;
