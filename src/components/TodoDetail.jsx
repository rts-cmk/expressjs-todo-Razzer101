import { useNavigate } from "react-router"

export default function TodoDetail({ data }){
    const navigate = useNavigate() 
    return(
        <section className="todo-edit">
            {
                data !== null &&
                    <article className="todo-item" key={data.id}>
                        <div className="todo-item__dot"></div>
                        <h2 className="todo-item__title">{data.title}</h2>
                        <p className="todo-item__description">{data.description}</p>
                        <p className="todo-item__status" style={{color: data?.done && data?.done !== undefined ? "#1ca329ff" : "#d51717ff"}}>Status: {data?.done && data?.done !== undefined ? "færdig" : "ikke færdig"}</p>
                        <button className="todo-item__home-btn" onClick={() => navigate(`/`)}>Tilbage til listen?</button>
                    </article>
            }
        </section>
    )
}