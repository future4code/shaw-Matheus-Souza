import { UserDataBase } from '../data/UserDataBase';
import { BaseError } from '../error/BaseError';
import { user } from '../types/user';

const userDB = new UserDataBase()

export class UserBusiness{
    constructor(
        private userData: UserDataBase,
    ){}

    async createUser(user:user) {
        try{
            const { first_name, last_name, participation } = user

            if(!first_name || !last_name || !participation ){
                throw new BaseError(422,"Por favor preencha todos os campos");
            }

            const registeredUsers = await this.userData.getUserByLast_name(last_name)            
            if (registeredUsers !== undefined && registeredUsers.last_name === last_name) {
            throw new BaseError(422, "Sobrenome já registrado")
            }

            return await userDB.createUser(user.first_name, user.last_name, user.participation);

            }catch(error:any){
                throw new Error( error.message || "Erro ao registrar usuário.");
            }
    }

    async getUsers() {

        const usersFromDB = await userDB.getUsers();

        return usersFromDB;
    }
} 