import { Request, Response } from "express";
import { getAllUsers, handleCreateUser } from "../services/user.service";

const getHomePage = async (req: Request, res: Response) => {
    //Get users
    const users = await getAllUsers();
    console.log("check users: ", users)
    return res.render("home", {
        users: users
    });
}

const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("create-user");
}

const postCreateUser = (req: Request, res: Response) => {
    const { yourName, email, address } = req.body;
    
    //Handle create user
    handleCreateUser(yourName, email, address);

    return res.redirect("/"); //Return data to client
}

export {
    getHomePage,
    getCreateUserPage,
    postCreateUser
};