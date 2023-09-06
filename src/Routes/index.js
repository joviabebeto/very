import express from "express";
import  Router  from "./userRoutes";
const router=express.Router();
router.use("/user",userRoutes)
export default router
