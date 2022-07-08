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

    // async getUserByEmail(user:dataLogin) {

    //     const userFromDB = await userDB.getUserByEmail(user.email);
    //     const hashCompare = await compare(user.password, userFromDB.password);
    //     if (!hashCompare) {
    //         throw new Error("Invalid Password!");
    //     }

    //     const accessToken = generateToken({ id: userFromDB.id});

    //     return accessToken;
    // }

    // async getAllUsers(token: string) {

    //     getTokenData(token);
    //     return await userDB.getAllUsers();
    // }

    // async deleteUser(input: {id:string, token:string}) {

    //     const verifiedToken = getTokenData(input.token);

	// // if(verifiedToken.role !== "ADMIN"){
	// //         throw new Error("Apenas administradores podem deletar usuários!")
	// // }

    //     return await userDB.deleteUser(input.id);
    // }
}