import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { AddressInfo } from 'net';

dotenv.config();

export const app = express()
app.use(express.json())
app.use(cors())

const server = app.listen(3003, ()=>{
    if(server){
        const address = server.address() as AddressInfo
        console.log('Servidor rodando na porta 3003')
    }else{
        console.log('Servidor não disponivel');
    }
})