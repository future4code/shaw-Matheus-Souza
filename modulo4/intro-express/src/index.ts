import express from 'express';
import cors from 'cors';
import { getMaxListeners } from 'process';

const app = express(); 

app.use(express.json());
app.use(cors());

app.listen(3003, function() {
    console.log("Tô rodando!");
});

app.get("/", (req, res) => {          
    res.send("Hello from Express")
})

type user = {
    id: string
    name: string
    phone: number
    email: string
    website: string
}

const usuarios:user[] = [
    {
        id: 'fsadgfdsgsaf51515',
        name: 'José',
        phone: 848547984,
        email: 'jose@gmail.com',
        website: 'www.joao.com'  
    },
    {
        id: 'fsadgfdsgsaf51516',
        name: 'Maria',
        phone: 848431784,
        email: 'maria@gmail.com',
        website: 'www.maria.com'  
    },
    {
        id: 'fsadgfdsgsaf51517',
        name: 'Tibério',
        phone: 846894884,
        email: 'tibi@gmail.com',
        website: 'www.tibi.com'  
    },
    {
        id: 'fsadgfdsgsaf51518',
        name: 'Betty',
        phone: 821574884,
        email: 'betty@gmail.com',
        website: 'www.betty.com'  
    }
]

app.get("/users", (req, res) => {          
    res.send(usuarios)
})

type posts = {
    id: string
    title: string
    body: string
    userId: string
}

const postagens:posts[]=[
    {
        id: 'fdsanhgiiaheigd478481',
        title: 'sla',
        body: 'n sei',
        userId: 'fsadgfdsgsaf51518'  
    },
    {
        id: 'fdsanhgiiaheigd598481',
        title: 'Também n sei',
        body: 'Vo fica te devendo essa',
        userId: 'fsadgfdsgsaf51515'  
    },
    {
        id: 'fdsanhgiiaheigd473181',
        title: 'talvez eu saiba',
        body: 'vo pensa em algo',
        userId: 'fsadgfdsgsaf51517'  
    },
    {
        id: 'fdsanhgiiaheigd478756',
        title: 'Dúvida?',
        body: 'joga no canal de duvidas',
        userId: 'fsadgfdsgsaf51516'  
    }
]

// Criar separado pode ser mais facil, com a requisição anterior é possivel pegar o id de usuario, com isso os posts podem ser pegos e filtrados com base nesse id. De outra forma teriamos um array dentro de outro, o que dificulta um pouco mais a leitura de dados em camadas mais profundas.

app.get("/posts", (req, res) => {          
    res.send(postagens)
})


app.get("/posts/:userId", (req, res) => {  

    const userId = req.params.userId;

    const postById = postagens.filter((user) => {
        if (user.userId === userId) {
            return { user }
        }
    });

    res.send(postById)
})
