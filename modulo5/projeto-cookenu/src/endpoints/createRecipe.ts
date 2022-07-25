import { Request, Response } from "express";
import moment from "moment";
import { createRecipe } from "../data/RecipeDataBase";
import { generateId } from "../service/generateId";
import { getData } from "../service/getData";

export const recipe = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;
        const authenticationData = getData(token);

        const recipeData = {
            title: req.body.title,
            description: req.body.description,
        };
         
        const id:string = generateId();
        const date_post = moment().format("YYYY-MM-DD")

        console.log(date_post)
        
        await createRecipe(id, recipeData.title, recipeData.description,date_post)

        res.status(200).send("Recipe created successfully");
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
};