import express, {Express} from 'express'
import { getCreateUserPage, getHomePage } from '../controllers/user.controller';

const router = express.Router();    

const webRoutes = (app: Express) => {
    router.get("/", getHomePage);
    router.get("/create-user", getCreateUserPage);
    router.get ("/quyvanle", (req, res) => {
        res.send("Hello, tôi là Quý Văn Lê")
    })

    app.use("/", router);
}

export default webRoutes;
