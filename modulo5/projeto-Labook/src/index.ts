import { app } from "./app"
import { createPost } from "./controller/createPost"
import { getPost } from "./controller/getPostById"
import { login } from "./controller/login"
import { signup } from "./controller/signup"

app.post('/signup', signup)
app.post('/login', login)
app.post('/post', createPost)
app.get('/post/:id', getPost)
