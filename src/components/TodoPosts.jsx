import { useEffect, useState } from "react"

export default function TodoPosts({ update }){
    
    const [todoData, setTodoData] = useState(null)     

    useEffect(() => {
        
        fetch("http://localhost:3000/todos")
        .then(response => response.json())
        .then(data => setTodoData(data))

    },[update])

    return(
        <section className="todo-list">
            {todoData !== null &&
            todoData.map((elm) => {
                return(
                    <article className="todo-item" key={elm.id}>
                        <div className="todo-item__dot"></div>
                        <h2 className="todo-item__title">{elm.id}: {elm.title}</h2>
                        <p className="todo-item__description">{elm.description}</p>
                        <p className="todo-item__status" style={{color: elm?.done && elm?.done !== undefined ? "#1ca329ff" : "#d51717ff"}}>Status: {elm?.done && elm?.done !== undefined ? "færdig" : "ikke færdig"}</p>
                    </article>
                )
            })
            }
        </section>        
    )
}