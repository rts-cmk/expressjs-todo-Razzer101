import { useEffect, useState } from "react"

export default function Put(){

    const [findTodoData, setFindToDoData] = useState(null)
    const [currentId, setCurrentId] = useState("")
    const [isChecked, setIsChecked] = useState(false);

    const PUTHandler = event => {
        event.preventDefault()

        const formData = new FormData(event.target)

        const data = Object.fromEntries(formData)

        fetch(`http://localhost:3000/todos/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
        })
    }

    useEffect(() => {
        if(currentId !== ""){
            fetch(`http://localhost:3000/todos/${currentId}`)
            .then(response => response.json())
            .then(data => setFindToDoData(data))
        }
    },[currentId])

    return(
            <form onSubmit={PUTHandler}>
                <label htmlFor="id">
                    <span>Indtast todo nr: </span>
                    <input type="number" name="id" id="id" onChange={(event) => setCurrentId(event.target.value)}/>
                </label>
                <br />
                <label htmlFor="title">
                    <span>Skriv todo titel: </span>
                    <input type="text" name="title" id="title" defaultValue={findTodoData?.title}/>
                </label>
                <br />
                <label htmlFor="done">
                    <span>færdiggjort? </span>
                    <input type="checkbox" name="done" id="done"/>
                </label>
                <br />
                <label htmlFor="description">
                    <span>Info: </span>
                    <br />
                    <textarea name="description" id="description" defaultValue={findTodoData?.description}></textarea>
                </label>
                <br />
                <button type="submit">Put</button>
            </form>        
    )
}