import { useEffect, useState } from "react"

function App() {

  const [todoData, setTodoData] = useState(null)

  const submitHandler = event => {
    event.preventDefault()

    const formData = new FormData(event.target)

    const data = Object.fromEntries(formData)

    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
  }

  useEffect(() => {
    
    fetch("http://localhost:3000/todos")
    .then(response => response.json())
    .then(data => setTodoData(data))

  },[])

  return (
    <>
      <h2>Post in todo:</h2>
      <form onSubmit={submitHandler}>
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
          todoData.map((elm) => {
            return(
              <article key={elm.title}>
                <h2>{elm.title}</h2>
                <p>{elm.description}</p>
                <p>Status: {elm?.done ? "færdig" : "ikke færdig"}</p>
              </article>
            )
          })
        }
      </section>
    </>
  )
}

export default App
