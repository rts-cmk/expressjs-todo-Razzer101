import { useEffect, useState } from "react"
import DELETE from "./DELETE"
import { useNavigate } from "react-router"
import { FaEdit } from "react-icons/fa";

export default function TodoPosts({ update }){
    
    const [todoData, setTodoData] = useState(null)
    const [deletionUpdate, setDeletionUpdate] = useState(true)
    const navigate = useNavigate() 

    useEffect(() => {
        
        fetch("http://localhost:3000/todos")
        .then(response => response.json())
        .then(data => setTodoData(data))

    },[update, deletionUpdate])

    return(
        <section className="todo-list">
            {todoData !== null &&
            todoData.map((elm, index) => {
                return(
                    <article className="todo-item" key={elm.id}>
                        <div className="todo-item__dot"></div>
                        <h2 className="todo-item__title">{index + 1}: {elm.title}</h2>
                        <p className="todo-item__description">{elm.description}</p>
                        <p className="todo-item__status" style={{color: elm?.done && elm?.done !== undefined ? "#1ca329ff" : "#d51717ff"}}>Status: {elm?.done && elm?.done !== undefined ? "færdig" : "ikke færdig"}</p>
                        <div className="todo-item__buttons">
                            <DELETE id={elm.id} update={deletionUpdate} setUpdate={setDeletionUpdate}/>
                            <button className="todo-item__edit-btn" onClick={() => navigate(`/details/${elm.id}`)}><FaEdit/></button>
                        </div>
                    </article>
                )
            })
            }
        </section>        
    )
}