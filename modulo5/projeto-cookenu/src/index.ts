import app from "./app"
// import editUser from './endpoints/editUser'
import { signup } from './endpoints/createUser'
import { getProfile } from "./endpoints/getUser"
import { login } from "./endpoints/login"

app.post('/signup', signup)
app.post('/login', login)
app.get('/user/profile', getProfile)
app.get('/user/:id', signup)
// app.put('/user/edit/:id', editUser)