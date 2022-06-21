import express from "express"
import cors from "cors"
import { users } from "./data"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))

app.get("/ping", (req, res) => {          
  res.send("Pong! 🏓")
})

type tarefa = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

const listaTarefas: tarefa[] = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true
  }
]

// 4

app.get("/tarefas/:status", (req, res) => {          
  const status:boolean = (req.params.status === "true" ? true : false);
  
  const tarefas = listaTarefas.filter((tarefa) => {
      if (tarefa.completed === status) {
          return { tarefa }
      }
  });

  res.send(tarefas)
})

// 5

app.post("/criaTarefa", (req, res) => {          
  const { userId, id, title, completed}:tarefa = req.body

  listaTarefas.push({ userId, id, title, completed })

  res.status(201).send(listaTarefas)
})

// 6

app.put("/tarefas/:id", (req, res) => {          
  const id:number = Number(req.params.id)
  
  const tarefas = listaTarefas.map((tarefa) => {
      if (tarefa.id === id) {
          return { ...tarefa, completed: !tarefa.completed }
      } else { 
        return {tarefa}
      }
  });

  res.send(tarefas)
})

// 7

app.delete('/tarefas/:id', (req, res) => {
  const id:number = Number(req.params.id);

  const tarefas = listaTarefas.filter((tarefa) => {
    return tarefa.id !== id 
  })
  res.send(tarefas)
})

// 8

app.get('/listaTarefas/:userId', (req,res) => {
  const userId:number = Number(req.params.userId);

  const tarefas = listaTarefas.filter((tarefa) => {
    return tarefa.userId === userId
  })
  res.send(tarefas)
})

// app.get("/playlists", (req, res) => {
//   // tenho todos os usuários
//   const currentUsers = users // array de objetos
//   console.log(1, currentUsers);

//   // Vou pegar as playlists de cada usuário
//   const userPlaylists = currentUsers.map((user: any) => {
//     return user.playlists 
//   }) // array de arrays
//   console.log(2, userPlaylists)

//   const result = userPlaylists.flat(1)

//   res.status(200).send(result);
// })


// app.get("/tracks", (req, res) => {
//   const playlistId = req.query.id

//   if(!playlistId) res.status(400).send("Não é possível realizar a operação. ID da playlista ausente")

//   const allPlaylists = users.map((user: any) => {
//     return user.playlists
//   }).flat(1)

//   let tracks;

//   allPlaylists.forEach((playlist: any) => {
//     if (playlist.id === playlistId) {
//       tracks = playlist.tracks
//     }
//   })

//   res.status(200).send(tracks)
// })

// app.delete("/playlist", (req, res) => {
//   const id = req.query.id

//   users.forEach((user: any) => {
//     user.playlists = user.playlists.map((playlist: any) => {
//       if (playlist.id === id) {
//         return {}
//       }
//       return playlist
//     });
//   })

//   res.status(200).send(users)
// })

// app.delete("/track", (req, res) => {
//   const trackId = req.query.trackId
//   const playlistId = req.query.playlistId

//   const allPlaylists = users
//     .map((user: any) => {
//       return user.playlists;
//     })
//     .flat(1);
//   for (let i = 0; i <= allPlaylists.lenght; i++) {
//     allPlaylists[i]
//   }

//   for (let playlist of allPlaylists) {
//     playlist
//   }

//   allPlaylists.forEach((playlist: any) => {
//     if (playlist.id === playlistId) {
//        playlist.tracks = playlist.tracks.map((track: any) => {
//          if (track.id === trackId) {
//            return {};
//          }
//          return track;
//        });
//     }
//   })

//   res.status(200).send(allPlaylists)
// })