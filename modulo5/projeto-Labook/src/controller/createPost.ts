import { Request, Response } from "express";
import { PostBusiness } from "../business/postBusiness";
import { post } from "../types/post";

export const createPost = async ( req: Request, res: Response) => {
   try {
        const token = req.headers.authorization!;

        const postBusi = new PostBusiness()
        const newPost:post = {
            photo: req.body.photo,
            description: req.body.description,
            type: req.body.type,
        };
        await postBusi.createPost(newPost, token)

        res.status(201).send({
            message: "Postagem criada com sucesso!",
        })

    } catch (error:any) {
      res.status(400).send(error.message)
   }
} 