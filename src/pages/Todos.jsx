import { useState } from "react"
import POST from "../components/POST"
import TodoPosts from "../components/TodoPosts"

export default function Todos(){

    const [update, setUpdate] = useState(true)

    return(
        <>
            <POST update={update} setUpdate={setUpdate}/>
            <TodoPosts update={update} />
        </>
    )
}