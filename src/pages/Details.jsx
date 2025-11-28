import { useEffect, useState } from "react"
import { useParams } from "react-router"
import TodoDetail from "../components/TodoDetail"
import PUT from "../components/PUT"

export default function Details(){

    const [findTodoData, setFindToDoData] = useState(null)
    const [update, setUpdate] = useState(true)
    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/todos/${params.id}`)
        .then(response => response.json())
        .then(data => setFindToDoData(data))
    },[update])

    return(
        <>
            <TodoDetail data={findTodoData}/>
            <PUT data={findTodoData} update={update} setUpdate={setUpdate}/>
        </>
    )
}