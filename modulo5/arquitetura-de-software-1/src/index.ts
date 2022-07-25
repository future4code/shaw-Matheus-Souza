import { app } from "./app"
import { signup } from './endpoints/signup'
import { deleteUser } from './endpoints/deleteUser'
import { get } from './endpoints/getAllUsers'
import { login } from './endpoints/login'

app.post('/signup', signup)
app.post('/login', login)
app.get('/all', get)
app.delete('/:id', deleteUser)

