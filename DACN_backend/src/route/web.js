import express from "express";
import homeController from "../controllers/homeControllers";
import userController from "../controllers/userController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/create-user-crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/display-crud', homeController.displayCRUD);
    
    router.get('/edit-crud', homeController.editCRUD);
    router.post('/edit-put-crud', homeController.putCRUD);

    router.get('/delete-crud', homeController.deleteCRUD);
    
    // API
    router.post('/api/login', userController.handleLogin);
    router.get('/api/get-all-users', userController.handleGetAllUsers);

    return app.use("/", router);
}

module.exports = initWebRoutes;