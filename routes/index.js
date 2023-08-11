import mongoose from "mongoose";
import express from "express"
import { submit } from "../controller/index.js";

const routes = express.Router();

routes.get("/", (req,res) => {
    res.render("index.ejs");
})

routes.post("/submit", submit);

export default routes;