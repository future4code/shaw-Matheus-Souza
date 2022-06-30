import app from "./app"
import { recipe } from "./endpoints/createRecipe"
import { signup } from './endpoints/createUser'
import { getRecipe } from "./endpoints/getRecipe"
import { getProfile } from "./endpoints/getUser"
import { getProfileById } from "./endpoints/getUserById"
import { login } from "./endpoints/login"

app.post('/signup', signup)
app.post('/login', login)
app.get('/user/profile', getProfile)
app.get('/user/:id', getProfileById)
app.post('/recipe', recipe)
app.get('/recipe/:id', getRecipe)