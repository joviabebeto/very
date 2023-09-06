import express from "express";
import userController from "../controller/userController";
import Datachequer from "../middlewares/datachequer";
import  Validator  from "../middlewares/Validator";

const router=express.Router();