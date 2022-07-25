import { Request, Response } from "express";
import moment from "moment";
import { getRecipeByInf } from "../data/RecipeDataBase";
import { getData } from "../service/getData";

export const getRecipe = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const token = req.headers.authorization as string;
        
        const recipe = await getRecipeByInf("id",id);

        res.status(200).send({
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            cratedAt: moment(recipe.date_post).format("DD/MM/YYYY")
        });
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
};