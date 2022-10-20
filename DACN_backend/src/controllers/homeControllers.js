// import { response } from 'express';
import { response } from 'express';
import db from '../models/index';
import CRUDService from '../services/CRUDService';
let getHomePage = async (req, res) => {
    try{
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });


    }catch(err){
        console.log(err);
    }
}
let getCRUD = (req, res) => {
    return res.render("crud.ejs")
}

let postCRUD = async (req, res) => {
    await CRUDService.createNewUser(req.body);
    return res.send("Created a new User successfully !");
}

let displayCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    return res.render("displayCRUD.ejs", {
        dataTable: data
    })
}

let editCRUD = async (req, res) => {
    let userID = req.query.id;
    // console.log(userID);
    if(userID){
        let userData = await CRUDService.getUserByID(userID);
        return res.render('editCRUD.ejs', {
            //user là thằng đại diện để đưa vào view
            user: userData
        });
    }
    else{
        return res.send("User not found");
    }
    
}

let putCRUD = async (req, res) => {
    let data = req.body;        
        await CRUDService.updateUserData(data);
        return res.redirect('./display-CRUD');
    

}
let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if(id){
        await CRUDService.deleteUserByID(id);
        return res.redirect("./display-CRUD");
        
    }else{
        return res.send("Not found User");
    }
}
module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayCRUD: displayCRUD,
    editCRUD: editCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
}