import express from "express";
import homeControllers from "../controllers/homeControllers";
import userController from "../controllers/userController";
import homepage from "../controllers/homeControllers";
let router = express.Router();

let initWebRoutes = (app) => {
  //truyền ứng dụng server vào bên trong hàm này

  router.get("/", homeControllers.getHomePage);
  router.get("/crud", homeControllers.getCRUD);
  router.post("/post-crud", homeControllers.postCRUD);
  router.get("/get-crud", homeControllers.displaygetCRUD);

  router.post("/api/login", userController.handleLogin);
  return app.use("/", router);
};

module.exports = initWebRoutes;
