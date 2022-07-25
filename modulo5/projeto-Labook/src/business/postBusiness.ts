import moment from 'moment';
import { PostDataBase } from '../data/postDataBase';
import { getTokenData } from '../services/authenticator';
import { generateId } from '../services/idGenerator';
import { post } from '../types/post';

const postDB = new PostDataBase()

export class PostBusiness{

    async createPost(post:post, token:string) {
        try{
            if(!post.photo || !post.description || !post.type ){
                    throw new Error("Por favor preencha todos os campos");
            }

            const id = generateId();
            const post_date = moment().format("YYYY-MM-DD")
            const verifiedToken = getTokenData(token);

            return await postDB.createPost(id, post.photo, post.description, post_date, post.type, verifiedToken.id);

            }catch(error:any){
                throw new Error( error.message || "Error creating user. Please check your system administrator.");
            }
    }

    async getPostById(id:string, token:string) {

        const postFromDB = await postDB.getPostById(id);
        const verifiedToken = getTokenData(token);

        return postFromDB;
    }
}