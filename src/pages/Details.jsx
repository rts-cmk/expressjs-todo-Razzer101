import { useState } from "react"

export default function Details(){

    const [findTodoData, setFindToDoData] = useState(null)

    const findIdHandler = event => {
        event.preventDefault()

        const formData = new FormData(event.target)

        const data = Object.fromEntries(formData)

        fetch(`http://localhost:3000/todos/${data.id}`)
        .then(response => response.json())
        .then(data => setFindToDoData(data))

    }

    return(
        <>
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
                    <h2>{findTodoData.id}: {findTodoData.title}</h2>
                    <p>{findTodoData.description}</p>
                    <p>Status: {findTodoData?.done && findTodoData?.done !== undefined ? "færdig" : "ikke færdig"}</p>
                </article>
            }
        </>
    )
}