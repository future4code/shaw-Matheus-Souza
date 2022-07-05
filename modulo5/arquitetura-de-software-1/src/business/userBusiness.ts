import { UserDataBase } from '../data/userDataBase';
import { generateToken } from '../services/authenticator';
import { hash } from '../services/hashManager';
import { generateId } from '../services/idGenerator';
import { user } from '../types/user';


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
            const userDB = new UserDataBase()
            await userDB.createUser(id, user.name, user.email, hashPassword, user.role);
            const token = generateToken({id, role});
                
            return token;
    
            }catch(error:any){
                throw new Error( error.message || "Error creating user. Please check your system administrator.");
            }
    }
}