import { useEffect, useState } from "react"

export default function Todos(){

    const [todoData, setTodoData] = useState(null)
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

    return(
        <>
        <h2>Post en todo:</h2>
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
                    <article key={elm.id}>
                        <h2>{elm.id}: {elm.title}</h2>
                        <p>{elm.description}</p>
                        <p>Status: {elm?.done && elm?.done !== undefined ? "færdig" : "ikke færdig"}</p>
                    </article>
                    )
                })
                }
            </section>
        </>
    )
}