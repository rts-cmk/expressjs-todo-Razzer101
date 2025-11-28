import express from "express"
import cors from "cors"

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

let todos = []

let idNumber = 1

app.get("/todos", (request, response) => {
    response.send(JSON.stringify(todos))
})

app.get("/todos/:id", (request, response) => {
    const id = Number(request.params.id)
    const oneTodo = todos.find((elm) => elm.id === id)
    response.send(JSON.stringify(oneTodo))
})

app.post("/todos", (request, response) => {
    const todoData = request.body
    todoData.id = idNumber
    todos.push(todoData)
    response.send()
    idNumber++
})

app.put("/todos/:id", (request, response) => {
    const id = Number(request.params.id)
    const todoDataChange = request.body
    let oneTodo = todos.find((elm) => elm.id === id)
    oneTodo.title = todoDataChange.title
    oneTodo.description = todoDataChange.description
    oneTodo.done = todoDataChange.done
    response.send()
})

app.delete("/todos/:id", (request, response) => {
    const id = Number(request.params.id)
    todos = todos.filter((elm) => elm.id !== id)
    response.send()
})

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})