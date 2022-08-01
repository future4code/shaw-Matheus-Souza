import express from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import { UserDataBase } from "../data/UserDataBase";

export const userRouter = express.Router();

const userBusiness = new UserBusiness(
  new UserDataBase()
);

const userController = new UserController(userBusiness);

userRouter.post("/register", userController.createUser);
userRouter.get("/getUsers", userController.getUsers);