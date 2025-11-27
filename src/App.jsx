import { useEffect, useState } from "react"

function App() {

  const [todoData, setTodoData] = useState(null)
  const [findTodoData, setFindToDoData] = useState(null)
  const [update, setUpdate] = useState(true)

  useEffect(() => {
    
    fetch("http://localhost:3000/todos")
    .then(response => response.json())
    .then(data => setTodoData(data))

  },[update])

  const POSTHandler = event => {
    event.preventDefault()

    const formData = new FormData(event.target)

    const data = Object.fromEntries(formData)

    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(() => {update ? setUpdate(false) : setUpdate(true)})
  }

  const findIdHandler = event => {
    event.preventDefault()

    const formData = new FormData(event.target)

    const data = Object.fromEntries(formData)

    const todoId = data.id - 1

    fetch(`http://localhost:3000/todos/${todoId}`)
    .then(response => response.json())
    .then(data => setFindToDoData(data))

  }

  return (
    <>
      <h2>Post in todo:</h2>
      <form onSubmit={POSTHandler}>
        <label htmlFor="title">
          <span>Skriv todo titel: </span>
          <input type="text" name="title" id="title" />
        </label>
        <br />
        <label htmlFor="done">
          <span>færdiggjort? </span>
          <input type="checkbox" name="done" id="done" />
        </label>
        <br />
        <label htmlFor="description">
          <span>Info: </span>
          <br />
          <textarea name="description" id="description"></textarea>
        </label>
        <br />
        <button type="submit">Post</button>
      </form>
      <section>
        {todoData !== null &&
          todoData.map((elm, index) => {
            return(
              <article key={elm.title}>
                <h2>{index + 1}: {elm.title}</h2>
                <p>{elm.description}</p>
                <p>Status: {elm?.done ? "færdig" : "ikke færdig"}</p>
              </article>
            )
          })
        }
      </section>
      <form onSubmit={findIdHandler}>
        <label htmlFor="id">
          <span>Indtast todo nr: </span>
          <input type="number" name="id" id="id" />
        </label>
        <br />
        <button type="submit">Find</button>
      </form>
      {
        findTodoData !== null &&
        <article>
          <h2>{findTodoData.title}</h2>
          <p>{findTodoData.description}</p>
          <p>Status: {findTodoData?.done ? "færdig" : "ikke færdig"}</p>
        </article>
      }
    </>
  )
}

export default App
