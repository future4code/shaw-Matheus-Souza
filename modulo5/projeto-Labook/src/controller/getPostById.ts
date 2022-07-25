import { Request, Response } from "express"
import { PostBusiness } from "../business/postBusiness";

export const getPost = async(req: Request, res: Response)=> {
   try {
        const id = req.params.id
        const token = req.headers.authorization!;
        const postBusi = new PostBusiness()
        const post = await postBusi.getPostById(id,token);

        res.send(post).status(200);

    } catch (error:any) {
      res.send({ message: error.message }).status(error.status);
    }
} 