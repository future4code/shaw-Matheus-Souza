import { UserDataBase } from '../data/userDataBase';
import { generateToken, getTokenData } from '../services/authenticator';
import { compare, hash } from '../services/hashManager';
import { generateId } from '../services/idGenerator';
import { dataLogin, user } from '../types/user';


const userDB = new UserDataBase()

export class UserBusiness{

    async createUser(user:user) {
    
        try{
    
            if(!user.name || !user.email || !user.password || !user.role){
                    throw new Error("Please fill all the fields");
            }
    
            if(user.email.indexOf("@") === -1){
                    throw new Error("Invalid Email");
            }
    
            if(user.password.length < 6){
                    throw new Error("Password must have at least 6 characters");
            }
    
            const id = generateId();
            const role = user.role
            const hashPassword = await hash(user.password);
            await userDB.createUser(id, user.name, user.email, hashPassword, user.role);
            const token = generateToken({id, role});
                
            return token;
    
            }catch(error:any){
                throw new Error( error.message || "Error creating user. Please check your system administrator.");
            }
    }

    async getUserByEmail(user:dataLogin) {

        const userFromDB = await userDB.getUserByEmail(user.email);
        const hashCompare = await compare(user.password, userFromDB.password);
        if (!hashCompare) {
            throw new Error("Invalid Password!");
        }

        const role = userFromDB.role
        const accessToken = generateToken({ id: userFromDB.id, role});

        return accessToken;
    }

    async getAllUsers(token: string) {
				
        getTokenData(token);
        return await userDB.getAllUsers();
    }

    async deleteUser(input: {id:string, token:string}) {
				
        const verifiedToken = getTokenData(input.token);

	if(verifiedToken.role !== "ADMIN"){
	        throw new Error("Apenas administradores podem deletar usuários!")
	}

        return await userDB.deleteUser(input.id);
    }
}