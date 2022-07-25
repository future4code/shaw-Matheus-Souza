import app from "./app"
import { signup } from "./endpoints/createUser"
import editUser from './endpoints/editUser'
// import createUser from './endpoints/createUser'

app.post('/user/signup', signup)
app.put('/user/edit/:id', editUser)